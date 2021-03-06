import React from 'react';
import {View,Text,Image,YellowBox} from 'react-native';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux'
import {CardSection,Input, Button, Card, Spinner} from './common'
import { ImagePicker, Permissions } from 'expo'
import uuid from 'uuid'

YellowBox.ignoreWarnings(['Setting a timer']);

class CreateCoupon extends React.Component{
    state={name:"",description:"",loading:"",url:"",uri:"",disp:false,loading:false,load:false}
  
    uploadPic = async () => {
            let pickerResult = await ImagePicker.launchImageLibraryAsync({
              allowsEditing: true,
              aspect: [4, 4],
            });
        
            this._handleImagePicked(pickerResult);
          };
        
          _handleImagePicked = async pickerResult => {
            try {
        
              if (!pickerResult.cancelled) {
                this.setState({ uri: pickerResult.uri ,disp:true,load:false});
              }
              
            } catch (e) {
              console.log(e);
              alert('Upload failed, sorry :(');
            } 
          };

       handleDisp()
       { 
           if(this.state.disp)
           {
               return(
                   <CardSection  style={{justifyContent: 'center',alignItems: 'center'}}>   
               <Image style={{ height: 200,width: 200}} source={{ uri:this.state.uri}} />
               </CardSection> 
              )
           }
       }
       
     async  handleMain()
      { uri=this.state.uri
        if(uri)
        {
        this.setState({loading:true})
        const {name,description}=this.state
        const blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function() {
              resolve(xhr.response);
            };
            xhr.onerror = function(e) {
              console.log(e);
              reject(new TypeError('Network request failed'));
            };
            xhr.responseType = 'blob';
            xhr.open('GET', uri, true);
            xhr.send(null);
          });
        
          const ref = firebase
            .storage()
            .ref()
            .child(uuid.v4());
          const snapshot = await ref.put(blob);
          blob.close();
         var imgUrl=await snapshot.ref.getDownloadURL()
          firebase.database().ref(`/users/coupons`)
     .push({name,description,imgUrl})
    .then(()=>{
        this.setState({loading:false,load:false})
        Actions.couponList()
     console.log("save")
   }).catch((e)=>{
     console.log(e)
     this.setState({loading:false,load:true})
   })
 }
else{
    this.setState({load:true})
}

}
    renderLoad()
    {
        if(this.state.loading)
        {
            return(
                <CardSection>
                   <Spinner size="large"/>
                </CardSection>
                
            )
        }
        else {
            return(
                <CardSection >
                     <Button onPress={this.handleMain.bind(this)}>
                  Post
                </Button>
                </CardSection>
              
            )
        }
    }
    isUpload()
    {
        if(this.state.load)
        {
            return(
                <CardSection style={{alignContent: 'center',justifyContent:'center'}}>
                    <Text style={{fontSize:18,color:'red'}}>
                    Please Upload Image
                </Text>
                </CardSection>
               
            )
        }
    }
    render(){

     console.log(this.state.url)
        return(
            <View>
            <CardSection>
             <Input
             label="Name"
             placeholder="Prajjwal"
             onChangeText={text=>this.setState({name:text})}
             value={this.state.name}/>
            </CardSection>
            <CardSection>
                <Input
                label="Description"
                placeholder="Add Description here"
                value={this.state.description}
                onChangeText={text=>this.setState({description:text})}
                />
                </CardSection>
                {this.handleDisp()}
                <CardSection >
                <Button onPress={this.uploadPic.bind(this)}>
                 Upload Image
                </Button>
            </CardSection>
                {this.isUpload()}
                {this.renderLoad()}
                  
            </View>
        )
    }
}
export default CreateCoupon;
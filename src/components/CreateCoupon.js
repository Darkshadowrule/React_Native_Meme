import React from 'react';
import {View,Text,Image} from 'react-native';
import firebase from 'firebase';
import {CardSection,Input, Button, Card} from './common'
import { Constants, ImagePicker, Permissions } from 'expo'

class CreateCoupon extends React.Component{
    state={name:"",description:"",loading:"",url:"",uri:"",disp:false}
  
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
                this.setState({ uri: pickerResult.uri ,disp:true});
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
            var blobUrl = URL.createObjectURL(blob);  
            console.log(blobUrl)
            await firebase.database().ref(`/users/coupons`)
            .push({name,description,blob})
            .then(()=>{
           console.log("save")
   }).catch((e)=>{
     console.log(e)
   })
            blob.close();
          }
       

    render(){

     console.log(this.state.uri)
        return(
            <View>
            <CardSection>
             <Input
             label="Title"
             placeholder="Coupon Name"
             onChangeText={text=>this.setState({name:text})}
             value={this.state.name}/>
            </CardSection>
            <CardSection>
                <Input
                label="Description"
                placeholder="Add Coupon Description"
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
            <CardSection >
                <Button onPress={this.handleMain.bind(this)}>
                  Save Coupon
                </Button>
            </CardSection> 
            
                  
            </View>
        )
    }
}
export default CreateCoupon;
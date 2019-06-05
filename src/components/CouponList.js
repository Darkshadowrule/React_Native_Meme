import React from 'react';
import {View,YellowBox} from 'react-native';
import firebase from 'firebase';
import _ from 'lodash'
import ItemRender from './ItemRender'
import { Spinner } from './common';


YellowBox.ignoreWarnings(['Setting a timer']);
class CouponList extends React.Component{
    state={data:{},newData:{},loading:false}
 componentDidMount()
 {
 firebase.database().ref(`/users/coupons`)
            .on('value',snapshot =>
         {
        this.setState({data:snapshot.val(),loading:true})
         })
 }
 renderLoad()
 {
     if(this.state.loading)
     {
         return(
             <ItemRender data={this.state.data}/>
         )
     }
     else{
         return(
            <View style={{marginTop:270}}>
             <Spinner size="large"/>
             </View>
         )
     }


 }
    render()
    { return(
        <View>
         {this.renderLoad()}
        </View>
        

     ) }
}
export default CouponList;

import React from 'react';
import { Button, Image, View,Text } from 'react-native';
import { ImagePicker } from 'expo';
import firebase from 'firebase';
import Router from './src/Router'


class App extends React.Component{
  componentWillMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyBDvz7nABR1enRsuGHzUOu1jDq9MZ3wNx4",
      authDomain: "coupons-f19e1.firebaseapp.com",
      databaseURL: "https://coupons-f19e1.firebaseio.com",
      projectId: "coupons-f19e1",
      storageBucket: "coupons-f19e1.appspot.com",
      messagingSenderId: "622346516560",
      appId: "1:622346516560:web:05421a47288c050c"
    };
    firebase.initializeApp(firebaseConfig);
}
  render()
  {
    
    return(
   <Router/>

    )
  }
}
export default App;
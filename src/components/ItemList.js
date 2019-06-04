import React from 'react';
import {Text,View,Image} from 'react-native'

class ItemList extends React.Component{
    render()
    {
        const {name,description,imgUrl}=this.props.data
        return(
            <View>
   <Text>
                {name}
            </Text>
            <Image style={{height:100,width:100}} source={{uri:imgUrl}}/>
            <Text>
                {description}
            </Text>
            </View>
          

        )
    }
}
export default ItemList
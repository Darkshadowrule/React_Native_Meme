import React from 'react';
import {Text,View,Image} from 'react-native'
import { CardSection,Card } from './common';

class ItemList extends React.Component{
    render()
    {
        const {name,description,imgUrl}=this.props.data
        return(
        <Card>
        <CardSection>
         <Image style ={{height:330,width:null,flex:1}} source={{uri:imgUrl}}/>
        </CardSection>
        <CardSection>
            <Text style={{fontSize:20}}>{name}</Text>
            <Text style ={{fontSize:18}}>{description}</Text>

        </CardSection>


        </Card>

          

        )
    }
}
export default ItemList
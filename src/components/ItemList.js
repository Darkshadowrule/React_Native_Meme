import React from 'react';
import {Text,Image,StyleSheet,YellowBox} from 'react-native'
import { CardSection,Card } from './common';

YellowBox.ignoreWarnings(['Setting a timer']);

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
        <Text style={styles.baseText}>
        <Text style={styles.titleText} onPress={this.onPressTitle}>
          {name||"Unknown User"}{'\n'}{'\n'}
        </Text>
        <Text numberOfLines={10} style={{color:'blue'}}>
          {description||"No Description"}
        </Text>
      </Text>         
        </CardSection>


        </Card>

          

        )
    }
}
    const styles = StyleSheet.create({
        baseText: {
          fontStyle: 'italic',
          fontSize:18,
          
        },
        titleText: {
          fontSize: 20,
          fontWeight: 'bold',
          color:'red'
        },
        headerContentStyle: {
            flexDirection: 'column',
            justifyContent: 'space-around',
            flex: 1,
            flexWrap: 'wrap'
        }
      });
export default ItemList
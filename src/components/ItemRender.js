import React from 'react';
import {View,Text} from 'react-native';
import firebase from 'firebase';
import _ from 'lodash'


class ItemRender extends React.Component{
    state={data:{}}
    componentDidMount()
    {
        const newData=_.map(this.props.data,(val,key)=>{
            return {...val,key}
        })
        this.setState({data:newData})
    }
    render()
    { console.log(this.state.data)
        return(
            <View>
                <Text>
                    hiii
                </Text>
            </View>
        )
    }
}
export default ItemRender
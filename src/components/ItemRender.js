import React from 'react';
import {FlatList} from 'react-native';
import ItemList from './ItemList'
import _ from 'lodash'


class ItemRender extends React.Component{
    state={data:{}}
    componentDidMount()
    {
        const newData=_.map(this.props.data,(val,key)=>{
            return {...val,key}
        })
        let newData1=_.reverse(newData)
        this.setState({data:newData1})
    }
    render()
    { console.log(this.state.data)
        return(
            <FlatList
                data={this.state.data}
                renderItem={({ item }) => <ItemList data={item} />}
                keyExtractor={item => item.name+item.imgUrl}
            />
        )
    }
}
export default ItemRender
import React from 'react';
import {FlatList,View} from 'react-native';
import ItemList from './ItemList'
import _ from 'lodash'


class ItemRender extends React.Component{
    state={data:{},refresh:false,refreshing:false}
    componentDidMount()
    {
        const newData=_.map(this.props.data,(val,key)=>{
            return {...val,key}
        })
        let newData1=_.reverse(newData)
        this.setState({data:newData1})
    }
    renderSeperator()
    {
        return(
            <View
            style={{height:4,width:'100%',backgroundColor:'black'}}>

            </View>
        )
    }
    handleRefresh = () => {
		this.setState({ refresh: true,resfreshing:true });
	}
    render()
    { console.log(this.state.data)
        return(
            <FlatList
                data={this.state.data}
                renderItem={({ item }) => <ItemList data={item} />}
                keyExtractor={item => item.name+item.imgUrl}
                ItemSeparatorComponent={this.renderSeperator}
                extraData={this.state.refresh}
                refreshing={this.state.refreshing}
                onRefresh={this.handleRefresh}
                initialNumToRender={3}
            />
        )
    }
}
export default ItemRender
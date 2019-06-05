import React from 'react';
import {Stack,Scene,Router,Actions} from 'react-native-router-flux';
import CouponList from './components/CouponList';
import CreateCoupon from './components/CreateCoupon'
const RouterComponent = () =>{
    return(
        <Router>
            <Stack key="root">
            <Scene key="couponList" component={CouponList} title="Your Posts"   onRight={()=> Actions.couponCreate()}
        rightTitle="Add a post" initial />
            <Scene key="couponCreate" component={CreateCoupon} title="Add a Post" />
            </Stack>
            
        </Router>
    )
}
export default RouterComponent
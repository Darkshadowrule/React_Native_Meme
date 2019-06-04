import React from 'react';
import {Stack,Scene,Router,Actions} from 'react-native-router-flux';
import CouponList from './components/CouponList';
import CreateCoupon from './components/CreateCoupon'
const RouterComponent = () =>{
    return(
        <Router>
            <Stack key="root">
            <Scene key="couponList" component={CouponList} title="Coupons List"   onRight={()=> Actions.couponCreate()}
        rightTitle="Add" initial />
            <Scene key="couponCreate" component={CreateCoupon} title="Add a Coupon" />
            </Stack>
            
        </Router>
    )
}
export default RouterComponent
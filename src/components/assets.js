import React from 'react';
import {Tabs,addStyle} from './tabs';
class Assets extends React.Component{
    constructor(props){
        super(props);
        // addStyle(props.route.path)
    };
    render(){
        return (
            <div>
                我是资产页
                <Tabs></Tabs>
            </div>
        )
    }
}
export default Assets;
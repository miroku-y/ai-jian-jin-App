import React from 'react';
import {Tabs,addStyle} from './tabs';
class Interaction extends React.Component{
    constructor(props){
        super(props);
        // addStyle(props.route.path)
    };
    render(){
        return (
            <div>
                我是互动页
                <Tabs></Tabs>
            </div>
        )
    }
}
export default Interaction;
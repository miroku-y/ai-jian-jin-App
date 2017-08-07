import React from 'react';
import {Tabs,a} from './tabs';
class Project extends React.Component{
    constructor(props){
        super(props);
        console.log(a)
        // a = props.route.path
        //addStyle(props.route.path)
        // project='project'
    };
    render(){
        return (
            <div>
                我是产品页
                <Tabs></Tabs>
            </div>
        )
    }
}
export default Project;

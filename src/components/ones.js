import React from 'react';
import {Tabs,addStyle} from "./tabs";
import "../css/ones.less";

class Ones extends React.Component{
    constructor(props){
        super(props);
        console.log(this.refs)
        //addStyle(props.route.path);
        // ones = 'ones';
        
    };
    render(){
        return (
            <div className="container">
                <div className="home-banner">
                    <img src="./src/images/index-banner.jpeg" alt=""/>
                </div>
                <div className="ones_box">
                    <ul className="ones_main">
                        <li>
                            请开始你的表演12
                        </li>
                        <li>
                            请开始你的表演34
                        </li>
                        <li>
                            请开始你的表演56
                        </li>
                        <li>
                            请开始你的表演78
                        </li><li>
                            请开始你的表演90
                        </li><li>
                            请开始你的表演12
                        </li>
                    </ul>
                </div>
                <Tabs></Tabs>
            </div>
        )
    }
}
export default Ones;
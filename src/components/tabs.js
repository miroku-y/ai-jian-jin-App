import React from 'react';
import "../css/tabs.less"

class Tabs extends React.Component{
    constructor(pepors){
        super(pepors)
    }
    render(){
        return(
            <div style={{height:"30px",lineHeight:"30px"}}>
                <ul className="tabs">
                    <li>首页</li>
                    <li>产品</li>
                    <li>资产</li>
                    <li>互动</li>
                </ul>
            </div>
        )
    };
}
export default Tabs;
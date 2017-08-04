import React from 'react';
import {render} from 'react-dom';
import TabController from './tabController';
import Tabs from '../tabs';
import "../../css/home.less";

class Index extends React.Component{
     constructor(props){
        super(props);
        this.state = {

        };
        console.log(props);
    }
    render(){
        return(
            <div className="container">
                <div className="home-banner">
                    <img src="./src/images/index-banner.jpeg" alt=""/>
                </div>
                {/* <TabController>
                    <div name="首页">
                        首页
                    </div>
                    <div name="产品">
                        产品
                    </div>
                    <div name="资产">
                        资产
                    </div>
                    <div name="互动">
                        互动
                    </div>
                </TabController> */}
                <section className="index-s">

                </section>
                <Tabs></Tabs>
            </div>
            );
    }
}
export default Index;
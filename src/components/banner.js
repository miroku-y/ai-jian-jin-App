import React from 'react';
import {Router,Route,history,IndexRoute,browserHistory,Link} from  'react-router';

let startX;
const  dataImgs = [
    {imgUrl:'../src/images/index1.jpg',key:1},
    {imgUrl:'../src/images/index2.jpg',key:2},
    {imgUrl:'../src/images/index3.jpg',key:3},
    {imgUrl:'../src/images/index4.jpg',key:4}
];
class Banner extends React.Component{
    constructor(props){
        super(props);
        this.state={
            touchIndex:0//当前未隐藏img的索引值
        }
    }
    indexOne = ()=>{
       // window.location.href="#/index2";
    };
    touchStart = (event) =>{
        console.log(event.changedTouches[0]);
        startX = event.changedTouches[0].pageX;
    };
    //无论是move,还是start 都会触发end 事件，所以判断方向就在end 事件中
    touchEnd =(event,index) =>{
        event.preventDefault();
        const endX = event.changedTouches[0].pageX;
        if(endX - startX > 20){
            this.clickLeft(index);
        }else if(startX - endX > 20){
            this.clickRight(index);
        }
    };
    clickLeft =(indexParam) =>{
        if(indexParam === 0)return;
        const allItemCounts = dataImgs.length;
        const index = indexParam || this.state.touchIndex;
        this.setState({
            touchIndex:index === 0 ? allItemCounts : index - 1,
        })
    };
    clickRight(indexParam) {
        const allItemCounts = dataImgs.length; // 总共轮播个数
        if(indexParam >= allItemCounts -1)return;
        const index = this.state.touchIndex;
        this.setState({
        touchIndex:index === allItemCounts ? 0 : index + 1,
        });
    };
    experienceFun = ()=>{
        //browserhistory.push('/index')
        //console.log(browserHistory)
        //let path = '/home'
        //browserHistory.push(path)
        //browserHistory.goBack()
        //this.context.router.push('/index')
    }
    render(){
        const {touchIndex} = this.state;
        return(
            <div onTouchStart={this.indexOne} className="data-imgs">
               {
                   dataImgs.map((imgs,key) =>{
                       return (<span key={key}>
                                <img src={imgs.imgUrl} alt="" key={key}  onTouchStart={this.touchStart.bind(this)} onTouchEnd={(event) => this.touchEnd(event, key)} style={{display: touchIndex === key ? 'block' : 'none'}}/>
                           </span>)
                   })
               }
               <Link to="Home" className="experience" style={{display:touchIndex == dataImgs.length-1 ? 'block' : 'none'}} onClick={this.experienceFun}>开始体验</Link>
            </div>
        )
    }
}
export default Banner;

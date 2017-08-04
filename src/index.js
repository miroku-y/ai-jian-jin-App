import React from 'react';
import {render} from 'react-dom';
import routes from './route';
import './css/app.css';
//import './css/base.css';
// 先从 ant.design 中选择了一个 MENU 的组件，用来配合 router 使用
import './css/antd-mobile.min.css';
render(routes,
        document.getElementById('app')
    );


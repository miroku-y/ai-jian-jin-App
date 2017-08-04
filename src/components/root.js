import React from 'react';

class Root extends React.Component {
    render(){
        return (
            <div style={{height:'100%'}}>
                {this.props.children}
            </div>
        );
    }
};
export default Root;
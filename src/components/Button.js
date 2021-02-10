import React from 'react';

class Button extends React.Component{

    removeButton = () => {
        this.props.onClickStart();
    }

    render(){
        return(
            <div>
                <button onClick={this.removeButton} >Start</button>
            </div>
        );
    }
};

export default Button;
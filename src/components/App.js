import React from 'react';
import Ball from './Ball';
import Button from './Button';
import './App.css';
class App extends React.Component{

    state = {start: true}
    

    onClickStart = () => {
        this.setState({start: false});

    }

    render(){
        return (
            <>
                {this.state.start ===true
                    ? <Button onClickStart = {this.onClickStart}/> :
                    <Ball />
                }
                
            </>
        );
    }
};

export default App;
import React from 'react';
class Ball extends React.Component {
    constructor(props){
        super(props)

        this.state = {ballPosition: 0}
        this.callji(this.state.ballPosition);

    }
    
    callji = (pos) => {
        document.body.addEventListener("keydown", (event) => {
            if (event.keyCode == 39) {
                pos = pos + 5;
                this.setState({ballPosition: pos});
               
            }
        });
    }


    render(){
        
            return (
                <>
                    <div style={{position:'fixed', top:'40vh', left:'45vw'}}>
                    <div style={{left:`${this.state.ballPosition}px`}} className="ball" disabled></div>
                    </div>
                </>
            );
        };
};

export default Ball;
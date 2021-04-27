import React, { Component } from 'react'
import  axios  from  'axios'

export default class Chronometer extends Component {
    //EStado de la aplicacion
    constructor(props){
        super(props);
        this.state = {
            isPaused : false,
            timer : 0
        }
    }
    
    getTimers = async () => {
        const res = await axios.get('http://localhost/chronometer')
        console.log(res.data);
    }

    componentDidMount(){
        this.getTimers()
    }

    startChronometer = (e) => {
        console.log("Started Chronometer");      
        if(this.state.isPaused){
            e.target.innerText = 'Start';
            this.setState({ 
                isPaused: false,
                timer : this.state.timer,
                start: this.state.start + this.state.timer 
            });
            this.timer = clearInterval(this.timer) 
            console.log(this.state.isPaused);

        }else{
            e.target.innerText = 'Paused';
            this.setState({
                isPaused : true,
                timer : this.state.timer,
                start : this.state.start + this.state.timer 
            });
            console.log(this.state.isPaused);
            this.timer = setInterval(this.intervale, 1000);
        }      
    }

    intervale = () =>{ 
        this.setState({ 
            timer : this.state.timer + 1
        });
        console.log(this.state.timer );
        this.chronometre(this.state.timer)
    }
    
    finishChronometer = (e) => {
        console.log("Finishied Chronometer");
        document.getElementById('btnStart').innerText = "Start";
        document.getElementById('timer').innerHTML = (`00:00:00`);
        this.setState({ 
            isPaused: false,
            timer : 0
        });
        this.timer = clearInterval(this.timer);
        console.log(this.state.timer);
    }

    chronometre(seconds) {
        
        var hours = Math.floor(seconds / 3600);
        hours = (hours < 10)? '0' + hours : hours;
        var minutes = Math.floor((seconds / 60) % 60);
        minutes = (minutes < 10)? '0' + minutes : minutes;
        seconds = seconds % 60;
        seconds = (seconds < 10)? '0' + seconds : seconds;
        document.getElementById('timer').innerHTML = (`${hours}:${minutes}:${seconds}`);
        
    }

    
    render() {
        return (
            <div className="container">
                    <div class="row justify-content-center">
                        <div className="col-4">
                            <h1 id="timer">00:00:00</h1>
                            <div class="d-grid gap-2">
                                <button id="btnStart" className="btn btn-success btn-block" onClick={this.startChronometer}>Start</button>
                                <button className="btn btn-danger btn-block" onClick={this.finishChronometer} >Finish</button>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
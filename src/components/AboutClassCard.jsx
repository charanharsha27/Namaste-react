import React from 'react';
import { Component } from 'react';
class AboutClassCard extends Component{

    constructor(props){
        super(props);

        //creating state variables
        this.state = {
            count : 0,
            data : {

            }
        }

        console.log("Child Constructor")
    }

    async componentDidMount(){
        console.log("Child componentDidMount")
        let data = await fetch("https://api.github.com/users/charanharsha27");

        data = await data.json();

        this.setState(data);
    }

    render() {
        console.log("Child Render")
        return (
            <div className="menu-card">
                <img style={{height:'50px'}} src="https://avatars.githubusercontent.com/u/121336541?v=4" alt="" />
                <h1>{this.props.name}</h1>
                <h1>{this.state.name}</h1>
                <h2>{this.state.count}</h2>
                <button onClick={()=>{
                    this.setState({
                        count : this.state.count+1
                    })
                }}>Increase Count</button>
            </div>
        );
    }
}

export default AboutClassCard;
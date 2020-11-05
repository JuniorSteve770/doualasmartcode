import React, { Component } from 'react'

export default class Todoform extends Component {
    // constructor(){
    //     super();
    // }
            state={
                text:"",
                value:0
            }

    Datacollect=(e)=>{
    this.setState({[e.target.name]:e.target.value})   
    };
    Handlesubmit=(e)=>{
        e.preventDefault();
        this.setState({value:this.state.value +1})
        this.props.onSubmit({
            value:this.state.value,
            text:this.state.text,            
            complete:false
        });
        this.setState({
            text:""
        })
    }

    render() {
        return (
            <>
            <h4>Insert Data to post below Here</h4>
            <form onSubmit={this.Handlesubmit} >
                <div>
                <input
                placeholder='Type your POST contain here'
                name="text" 
                value ={this.state.text}
                onChange={this.Datacollect} /> <br/>
                <button onClick={this.Handlesubmit}>Post</button>
                </div>
            </form>
            
            
            <br/>
        </>
        )
    }
}

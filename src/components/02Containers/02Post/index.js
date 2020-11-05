import React, { Component } from 'react';
import Doform from './Tform';
import Odoo from './Odoo';


export default class Todoclass extends Component {
    constructor(props){
        super(props);   
        this.state={
        todos:[],
        todatoShow:"all"
    };
}

    addTodo = todo =>{
    //here we add a todo, then add at the beguining of todos
        const newTodos =[todo,...this.state.todos];
    //here we update our todos
        this.setState({
            todos:newTodos
        })
    };
    togle =(value)=>{
        this.setState({
            todos:this.state.todos.map( todo =>{
                if(todo.value === value) {
                    return{
                        // value:todo.value,
                        // text:todo.text,
                        ...todo,
                        complete: !todo.complete
                    };

                }else{
                    return todo;

                }
            }) 
        })

       
    };
    upDAtetodo=(s)=>{
        this.setState({
            todatoShow:s
        })
    };
    handledeleteTodo=(value)=>{
        this.setState({
            todos:this.state.todos.filter(todo =>todo.value !== value)
        });
    }


    render() {

        
        let todos=[];
        
        if (this.state.todatoShow === 'all'){
            todos = this.state.todos;
        }else if(this.state.todatoShow === "active"){ 
           todos = this.state.todos.filter(todo => !todo.complete);

        }else if(this.state.todatoShow === "active"){ 
            todos = this.state.todos.filter(todo => todo.complete);
        }
        return (
            <div>
            
                <Doform onSubmit={this.addTodo}/>
                {/* here we disply our contain via json */}
                    {/* {JSON.stringify(this.state.todos)} */}
                {/* second way to display using map function  */}
                {todos.map(todo =>(
                    <Odoo 
                    key={todo.value} 
                    togle={()=>this.togle(todo.value)} 
                    onDelete={() => this.handledeleteTodo(todo.value)}
                    todo={todo}/>
                ))}
                <br/>
                <div>Number of Post is: {this.state.todos.filter(todo => !todo.complete).length} </div>
                <div>
                <br/>
                    <button onClick={()=> this.upDAtetodo("all")}>all Post</button>
                    <button onClick={()=> this.upDAtetodo("active")}>active Post</button>
                    <button onClick={()=> this.upDAtetodo("complete")}>completed Post</button>
                </div>
                <br/><br/><br/>
            </div> 
        )
    }
}

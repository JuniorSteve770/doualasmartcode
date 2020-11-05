import React, { Component } from 'react';
import { Button, Card} from 'semantic-ui-react'
import axios from 'axios';
import { CardTitle, CardText, 
    CardActions} from 'react-mdl';
import "./index.css";


export default class HomePage extends Component {

    state = {
        results: []
    }
    
    componentDidMount(){
        axios.get(`http://newsapi.org/v2/everything?domains=wsj.com&apiKey=4e28b5843505461bbf0a789e70a516f3`
        // axios.get(`https://jsonplaceholder.typicode.com/users`
        ).then(res => {
            console.log(res)
            this.setState({results: res.data.articles})
        })
    
    }
   

    render() {
        return (
            <div class="timeline-container">
 

            <ol>
                {this.state.results.map(
                 resul=>
                   <><li key={resul.source.id} >
                       
                   <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                       <img width='100%' height={110}  src={resul.urlToImage}/>
                       <CardTitle>
                       <div>{resul.title}</div>
                       </CardTitle>
                       <CardText>
                       <div>Description: {resul.description}</div>  
                      </CardText>
                      <Card.Meta>
                        <div>Author:{resul.author}</div>
                        <div><strong>{resul.source.name}</strong></div> </Card.Meta>
                         <CardActions border>
                          <Button colored>View Updates</Button>
                      </CardActions>
                    </Card><br/> <br/> 
                       
                    </li> 
                    
                    </>             
                )}               
           </ol>
           </div>
             
        
        )
    }
}



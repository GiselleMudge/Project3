import React, { Component } from 'react';
import axios from 'axios';
import './News.css';
import { Segment, Grid, Header } from 'semantic-ui-react'
import NavBar from '../NavBar';



class News extends Component {

  state ={
    "newsWHO" : []
  }

  componentDidMount(){
    axios.get('/api/news/who')
        .then(newsWHO => {
          console.log("got news WHO", newsWHO.data);
          this.setState({'newsWHO': newsWHO.data});        
        })
        .catch(err => console.log(err));  
         
  }

  render() {
    return (
      <div className="news-container">
        <NavBar />
        <Grid columns='equal'>
        <Grid.Row>
          <Grid.Column>
            <Header as='h3' dividing className="news-header">
              World Health Organization
            </Header>
            <Segment.Group className="news-segment">
             {this.state.newsWHO.map(who => ( 
              <Segment key="who.link">            
                <a href={who.link} target="_blank">{who.title}</a>            
              </Segment>
              ))} 
            </Segment.Group> 
          </Grid.Column>
        </Grid.Row>
        </Grid>
     
      </div>
    );
  }
}

export default News;

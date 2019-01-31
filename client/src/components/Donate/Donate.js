import React, { Component } from 'react';
import './Donate.css';
import { Card, Image, Grid } from 'semantic-ui-react'
import Checkout from './Checkout';
import NavBar from '../NavBar';
import image1 from "./image1.png";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";

class Donate extends Component {
  render() {
    return (
      <div>
      <NavBar />
      <div className="donate-container">
      <Grid>
      <Grid.Row columns={3}>
        <Grid.Column>
            <Card className="donate-card">
              <Image src={image2} className="donate-image"/>
              <Card.Content>
                <Card.Header>
                  Mental Health Research
                </Card.Header>
                <Card.Meta>
                  <span className='date'>
                    Because one day, it might help you or someone you love
                  </span>
                </Card.Meta>
                <Card.Description>
                   Donate today!
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                 <div className="App">
                    <p className="App-intro">
                      <Checkout
                        name={'Donate Now'}
                        description={'Creditcards only'}
                        amount={1}
                      />
                    </p>
                </div>
              </Card.Content>
            </Card>
        </Grid.Column>
        <Grid.Column>
           <Card className="donate-card">
              <Image src={image3} className="donate-image" />
              <Card.Content>
                <Card.Header>
                  Know what it's like to have a ruff day? 
                </Card.Header>
                <Card.Meta>
                  <span className='date'>
                    There are more who can relate and need your help
                  </span>
                </Card.Meta>
                <Card.Description>
                   Donate today!
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                 <div className="App">
                    <p className="App-intro">
                      <Checkout
                        name={'Donate Now'}
                        description={'Creditcards only'}
                        amount={1}
                      />
                    </p>
                </div>
              </Card.Content>
            </Card>
        </Grid.Column>
        <Grid.Column>
            <Card className="donate-card">
              <Image src={image1} className="donate-image"/>
              <Card.Content>
                <Card.Header>
                   Feeling #blessed?
                </Card.Header>
                <Card.Meta>
                  <span className='date'>
                    Help spread the sunshine.
                  </span>
                </Card.Meta>
                <Card.Description>
                  Donate today!
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                 <div className="App">
                    <p className="App-intro">
                      <Checkout
                        name={'Donate Now'}
                        description={'Creditcards only'}
                        amount={1}
                      />
                    </p>
                </div>
              </Card.Content>
            </Card>
        </Grid.Column>
      </Grid.Row>
     </Grid>
     </div>  
     </div>
    );
  }
}

export default Donate;

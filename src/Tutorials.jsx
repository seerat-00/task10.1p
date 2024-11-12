import React from 'react';
import { Container, Card, Image, Button } from 'semantic-ui-react';
import painting2 from './images/painting2.jpg';
import painting3 from './images/painting3.jpg';
import painting7 from './images/painting7.jpg';

const tutorials = [
    { id: 1, title: 'Salzburg', image: painting2, rating: '5.0', author: 'Georg Pezolt' },
    { id: 2, title: 'The Fathers grave', image: painting3, rating: '4.5', author: 'Hans Memling' },
    { id: 3, title: 'Many Splendored Day', image: painting7, rating: '4.8', author: 'Leon Battista Alberti' },
];

const Tutorials = () => (
  <Container>
    <h2 style={{textAlign: 'center', color: '#4a90e2', fontFamily: 'fantasy', fontWeight: 'bold'}}>Paintings</h2>
    <Card.Group itemsPerRow={3}>
      {tutorials.map(tutorial => (
        <Card key={tutorial.id}>
           <Image
                src={tutorial.image}
                wrapped ui={false} 
                style={{ padding: '10px', fontFamily: 'Times New Roman', fontWeight: 'bold'}}
            />
          <Card.Content>
            <Card.Header>{tutorial.title}</Card.Header>
            <Card.Meta>
              <span className='date'>Rating: {tutorial.rating}</span>
              <span> | Author: {tutorial.author}</span>
            </Card.Meta>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
    <Button primary style={{ marginTop: '20px' }}>See all Paintings</Button>
  </Container>
);

export default Tutorials;
import React from 'react';
import { Container, Card, Image, Button } from 'semantic-ui-react';
import novel1 from './images/novel1.jpg';
import novel2 from './images/novel2.jpg';
import novel3 from './images/novel3.jpg';

const articles = [
  { id: 1, title: 'A thousand Splendid Suns', image: novel1, rating: '5.0', author: 'Khalied Hosseni' },
  { id: 2, title: 'The kite runner', image: novel2, rating: '4.5', author: 'Khalied Hosseni' },
  { id: 3, title: 'The song of Achilles', image: novel3, rating: '4.8', author: 'Madeline Miller' },
];

const Articles = () => (
  <Container >
    <h2 style={{textAlign: 'center', color: '#4a90e2', fontFamily: 'fantasy', fontWeight: 'bold'}}>Novels</h2>
    <Card.Group itemsPerRow={3}>
      {articles.map(article => (
        <Card key={article.id} >
            <Image
                src={article.image}
                wrapped ui={false} 
                style={{ padding: '10px', fontFamily: 'Times New Roman', fontWeight: 'bold'}}
            />
          <Card.Content>
            <Card.Header>{article.title}</Card.Header>
            <Card.Meta >
              <span className='date'>Rating: {article.rating}</span>
              <span> | Author: {article.author}</span>
            </Card.Meta>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
    <Button primary style={{ marginTop: '20px' }}>See all Novels</Button>
  </Container>
);

export default Articles;
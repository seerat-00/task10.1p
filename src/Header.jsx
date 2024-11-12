import React from 'react';
import { Container, Image, Header, Button } from 'semantic-ui-react';
import painting4 from './images/painting4.jpg';

const Hero = () => (
  <Container style={{ padding: '20px 0' }}>
    <Image src={painting4} fluid style={{ borderRadius: '8px' }} />
    <Header as='h2' style={{ marginTop: '20px' }}>
      <center> Discover Our Latest Collection </center>
    </Header>
    <Button primary style={{ marginTop: '20px' }}>Explore Now</Button>
  </Container>
);

export default Hero;
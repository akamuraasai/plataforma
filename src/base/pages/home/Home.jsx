import React from 'react';
import { Container, Menu, Header, Segment, Embed, Button, Card, Icon } from 'semantic-ui-react';

const styles = {
  segment: {
    minHeight: 700,
    padding: '1em 0em',
  },
  video: {
    marginTop: 30,
  },
  title: {
    marginBottom: 30,
  },
};

const cards = [
  {
    header: (<Icon name="cloud" size="massive" />),
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quasi similique?',
    meta: 'ROI: 123%',
  },
];

const Home = () => (
  <div>
    <Segment inverted textAlign="center" vertical style={styles.segment}>
      <Container>
        <Menu inverted pointing secondary size="large">
          <Menu.Item as="a" active>Introdução</Menu.Item>
          <Menu.Item as="a">Beneficios</Menu.Item>
          <Menu.Item as="a">Conteúdo</Menu.Item>
          <Menu.Item as="a">Sobre o Curso</Menu.Item>
          <Menu.Item as="a">Sobre a Equipe</Menu.Item>
          <Menu.Item as="a">FAQ</Menu.Item>
        </Menu>
      </Container>

      <Container text>
        <Segment style={styles.video}>
          <Embed id="eh7lp9umG2I" autoplay={false} placeholder="http://via.placeholder.com/750x450" source="youtube" />
        </Segment>
        <Header inverted content="Lorem ipsum dolor 2000" />
        <Header as="h4" inverted>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos nostrum porro
          quasi quibusdam repudiandae!
        </Header>
        <Button positive fluid size="big">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Button>
      </Container>
    </Segment>

    <Segment>
      <Container>
        <Header as="h1" textAlign="center" style={styles.title}>
          Lorem ipsum dolor sit amet.
          <Header.Subheader textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Assumenda molestias natus rem voluptatem.
          </Header.Subheader>
        </Header>

        <Card.Group items={cards} textAlign="center" />
      </Container>
    </Segment>
  </div>
);

export default Home;

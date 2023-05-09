import { Container, Text, Title } from './HomePage.styled';

const HomePage = () => {
  return (
    <Container>
      <Title>Tweets</Title>
      <div>
        <Text>
          This is a simple app, manage tweets, subscribe to celebrity pages
        </Text>
        <Text>
          Created at:
          <a
            href="https://github.com/Yurii-Bodnar"
            target="_blank"
            rel="noreferrer"
          >
            Yurii Bodnar
          </a>
        </Text>
      </div>
    </Container>
  );
};

export default HomePage;

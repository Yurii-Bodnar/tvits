import ButtonLoadMore from 'components/ButtonLoadMore/ButtonLoadMore';
import TweetsItem from 'components/TweetsItem/TweetsItem';
import { totalPage } from 'refs/refs';

import { Container, Link, List } from './TweetsList.styled';

const TweetsList = ({
  data,
  pageParams,
  setPageParams,
  setSearch,
  handleFollowing,
}) => {
  return (
    <Container>
      <Link to="/">go back</Link>
      <List>
        <TweetsItem data={data} handleFollowing={handleFollowing} />
      </List>
      {pageParams < totalPage ? (
        <ButtonLoadMore
          pageParams={pageParams}
          setPageParams={setPageParams}
          setSearch={setSearch}
        />
      ) : null}
    </Container>
  );
};

export default TweetsList;

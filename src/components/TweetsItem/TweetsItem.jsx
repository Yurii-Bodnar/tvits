import Logo from 'components/Logo/Logo';
import {
  Box,
  BoxLogo,
  Button,
  Img,
  Item,
  Text,
  Wrapper,
} from './TweetsItem.styled';
import avatarImg from '../../images/Boy.png';
const TweetsItem = ({
  data,
  handleFollowing,
}) => {
  return (
    <>
      {data?.map(({ user, id, avatar, followers, tweets, isFollow }) => {
        return (
          <Item key={id}>
            <BoxLogo>
              <Logo />
            </BoxLogo>
            <Box>
              <Img src={avatar ? avatar : avatarImg} alt="Avatar" width="80" />
              <Wrapper>
                <Text>{user} </Text>
                <Text>{tweets} TWEETS</Text>
                <Text>{followers} Followers</Text>
              </Wrapper>
              <Button
                type="button"
                id={id}
                isFollow={isFollow}
                onClick={() => handleFollowing(id)}
              >
                {(!isFollow && 'Follow') || (isFollow && 'Following')}
              </Button>
            </Box>
          </Item>
        );
      })}
    </>
  );
};

export default TweetsItem;

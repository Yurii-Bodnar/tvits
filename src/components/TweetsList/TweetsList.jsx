import ButtonLoadMore from 'components/ButtonLoadMore/ButtonLoadMore';
import Logo from 'components/Logo/Logo';
import { useEffect, useState } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { totalPage } from 'refs/refs';
import { getHeroData, updateDataFollowing } from 'utility/mockApi';
import avatarImg from '../../images/Boy.png';
import {
  Box,
  BoxLogo,
  Button,
  Img,
  Item,
  List,
  Text,
  Wrapper,
} from './TweetsList.styled';

const TweetsList = () => {
  const [data, setData] = useState(null);
  const [pageParams, setPageParams] = useState(1);
  const [, setSearch] = useSearchParams();
  // const [isFollowing, setIsFollowing] = useState(false);
  const [lsData, setLsData] = useState(null);

  useEffect(() => {
    setSearch(`page=${pageParams}`);
    getHeroData(pageParams).then(resData => {
      const result = resData.map(el => {
        return { ...el, isFollow: false };
      });
      setData(result);
    });
  }, [pageParams, setSearch]);
  console.log('data', data);
  useEffect(() => {
    setLsData(data);
    if (data && lsData !== null && data[0].id !== lsData[0].id) {
      setData([...data, ...lsData]);
      localStorage.setItem('userData', JSON.stringify([...lsData, ...data]));
    }
  }, [data, lsData]);

  const handleFollowing = e => {
    const userId = e.currentTarget.id;
    const userFollow = data.find(el => el.id === userId);
    console.log('userFollow.isFollow', userFollow.isFollow === false);

    const result = !userFollow.isFollow
      ? (userFollow.followers += 1)
      : userFollow.isFollow
      ? (userFollow.followers -= 1)
      : null;

    updateDataFollowing(userId, result);

    if (userFollow.isFollow === false) {
      userFollow.isFollow = true;
      console.log('here', userFollow.isFollow);
      console.log('data======>', data);
      return (e.target.style.background = '#5CD3A8');
    }
    if (userFollow.isFollow === true) {
      userFollow.isFollow = false;
      console.log('data======>', data);
      return (e.target.style.background = '#EBD8FF');
    }
  };

  return (
    <div>
      <NavLink to="/">go back</NavLink>
      <List>
        {data?.map(({ user, id, avatar, followers, tweets, isFollow }) => {
          return (
            <Item key={id}>
              <BoxLogo>
                <Logo />
              </BoxLogo>
              <Box>
                <Img
                  src={avatar ? avatar : avatarImg}
                  alt="Avatar"
                  width="80"
                />
                <Wrapper>
                  <Text>{tweets} TWEETS</Text>
                  <Text>{followers} Followers</Text>
                </Wrapper>
                <Button type="button" id={id} onClick={e => handleFollowing(e)}>
                  {(isFollow && 'Follow') || (!isFollow && 'Following')}
                </Button>
              </Box>
            </Item>
          );
        })}
      </List>
      {pageParams < totalPage ? (
        <ButtonLoadMore pageParams={pageParams} setPageParams={setPageParams} />
      ) : null}
    </div>
  );
};

export default TweetsList;

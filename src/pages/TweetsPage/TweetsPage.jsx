import { useLocalStorage } from 'hooks/useLocalStoraje';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { compareArr } from 'refs/refs';
import { getHeroData, updateDataFollowing } from 'utility/mockApi';

const { default: TwitsList } = require('components/TweetsList/TweetsList');

const TwitsPage = () => {
  const [data, setData] = useLocalStorage('users', []);
  const [pageParams, setPageParams] = useState(1);
  const [followings, setFollowings] = useLocalStorage('followings', []);
  const [, setSearch] = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      setSearch(`page=${pageParams}`);
      const dataUsers = await getHeroData(pageParams);

      setData(prevUsers => {
        const newUser = dataUsers.map(user => {
          if (followings.includes(user.id)) {
            return { ...user, isFollow: true };
          }
          return { ...user, isFollow: false };
        });
        const compareUsers = compareArr(prevUsers, dataUsers);

        return [...compareUsers, ...newUser];
      });
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageParams]);

  useEffect(() => {
    const isChangeFollow = data.map(user => {
      if (user.isFollow === true) {
        return user.id;
      } else {
        return null;
      }
    });
    if (isChangeFollow.length > 0) {
      setFollowings(isChangeFollow);
    }
  }, [data, setFollowings]);

  const handleFollowing = async userId => {
    setFollowings(prevFollowings => {
      const index = prevFollowings.indexOf(userId);
      setData(prevUsers => prevUsers.map(user => user));
      console.log(index);
      if (index === -1) {
        console.log(prevFollowings);
        return [...prevFollowings, userId];
      }
    });

    const user = data.find(user => user.id === userId);
    const result = !user.isFollow
      ? (user.followers += 1)
      : user.isFollow
      ? (user.followers -= 1)
      : null;

    const followers = !user.isFollow
      ? (user.isFollow = true)
      : user.isFollow
      ? (user.isFollow = false)
      : null;

    updateDataFollowing(userId, result, followers);
  };

  return (
    <TwitsList
      data={data}
      setData={setData}
      pageParams={pageParams}
      setPageParams={setPageParams}
      setSearch={setSearch}
      handleFollowing={handleFollowing}
    />
  );
};

export default TwitsPage;

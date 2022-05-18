import React, { useEffect, useState } from 'react';
import Nav from '../../../components/Nav/Nav';
import './MainSb.scss';

import FeedArticle from './component/FeedArticle';
import MainRight from './component/MainRight';

const MainSb = () => {
  const [feedList, setFeedList] = useState([]);
  const [liked, setLiked] = useState(false);

  const clickedLike = () => {
    setLiked(isLiked => !isLiked);
  };

  useEffect(() => {
    fetch('http://localhost:3000/data/seulbiFeedData.json')
      .then(res => res.json())
      .then(data => setFeedList(data));
  }, []);

  return (
    <div className="mainPage">
      <Nav />
      <main>
        <div className="mainContainer">
          <div className="feeds">
            {feedList.map(feedData => (
              <FeedArticle
                key={feedData.id}
                feedData={feedData}
                liked={liked}
                clickedLike={clickedLike}
              />
            ))}
          </div>
          <MainRight />
        </div>
      </main>
    </div>
  );
};

export default MainSb;

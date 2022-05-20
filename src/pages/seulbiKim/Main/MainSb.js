import React, { useEffect, useState } from 'react';
import Nav from '../../../components/Nav/Nav';
import './MainSb.scss';

import FeedArticle from './component/FeedArticle';
import MainRight from './component/MainRight';

const MainSb = () => {
  const [feedList, setFeedList] = useState([]);
  useEffect(() => {
    fetch('data/seulbiFeedData.json')
      .then(res => res.json())
      .then(data => setFeedList(data));
  }, []);

  return (
    <div className="mainSb">
      <Nav />
      <main>
        <div className="mainContainer">
          <div className="feeds">
            {feedList.map(feedData => (
              <FeedArticle key={feedData.id} feedData={feedData} />
            ))}
          </div>
          <MainRight />
        </div>
      </main>
    </div>
  );
};

export default MainSb;

import { useState, useEffect } from 'react';
import Nav from '../../../components/Nav/Nav';
import Feed from './FeedComponent/Feed';
import MainRight from './MainRightComponent/MainRight';
import './MainHj.scss';

function MainHj() {
  const [feedsList, setFeedsList] = useState([]);

  // mock data를 활용한 피드 입력 확인
  useEffect(() => {
    fetch('http://localhost:3000/data/feedDataHj.json')
      .then(res => res.json())
      .then(data => {
        setFeedsList(data);
      });
  }, []);

  return (
    <div className="main">
      <section className="westagram">
        <Nav />
        <main>
          {feedsList.map(feed => {
            return (
              <Feed
                key={feed.id}
                id={feed.id}
                userName={feed.userName}
                content={feed.content}
              />
            );
          })}
          <MainRight />
        </main>
      </section>
    </div>
  );
}

export default MainHj;

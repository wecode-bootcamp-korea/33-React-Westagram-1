import { useState, useEffect } from 'react';
import Nav from '../../../components/Nav/Nav';
import Feed from './Feed';
import STORY from './story';
import FOLLOW_LIST from './followList';
import './MainSj.scss';

function MainSj() {
  const [feedList, setFeedList] = useState([]);
  const [storyMove, setStoryMove] = useState(false);

  useEffect(() => {
    fetch('/data/soojungAnFeed.json')
      .then(res => res.json())
      .then(data => {
        setFeedList(data);
      });
  }, []);

  return (
    <div className="main">
      <Nav />
      <main className="feedsRightContainer">
        <div className="storyFeeds">
          <div className="storyArea">
            <button
              className={'beforeBtn ' + (storyMove ? 'show' : 'hidden')}
              onClick={() => {
                setStoryMove(false);
              }}
            >
              <i className="fa-solid fa-circle-chevron-left" />
            </button>
            <button
              className={'nextBtn ' + (storyMove ? 'hidden' : 'show')}
              onClick={() => {
                setStoryMove(true);
              }}
            >
              <i className="fa-solid fa-circle-chevron-right" />
            </button>
            <div
              className={
                'storyContainer ' + (storyMove ? 'moveRight' : 'moveLeft')
              }
            >
              {STORY.map(eachStory => {
                return (
                  <div className="storyItem" key={eachStory.id}>
                    <img
                      src={'/images/soojungAn/' + eachStory.imageName + '.jpg'}
                      alt="storyImg"
                    />
                    <div>{eachStory.nickName}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="feeds">
            {feedList.map(feed => {
              return <Feed key={feed.id} feed={feed} />;
            })}
          </div>
        </div>
        <div className="mainRight">
          <div className="rightProfile">
            <img
              src="/images/soojungAn/karina-vorozheeva-rW-I87aPY5Y-unsplash.jpg"
              alt=""
            />
            <span>Hello_World</span>
          </div>
          <section className="recommend">
            <div className="recommendTitle">
              <span>회원님을 위한 추천</span>
              <a href="/">모두보기</a>
            </div>
            <div className="recommendList">
              {FOLLOW_LIST.map(eachList => {
                return (
                  <div className="recommendListItem" key={eachList.id}>
                    <div className="listProfile">
                      <img
                        src={'/images/soojungAn/' + eachList.img}
                        alt="listImg"
                      />
                      <span>{eachList.nickname}</span>
                    </div>
                    <span className="follow">팔로우</span>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default MainSj;

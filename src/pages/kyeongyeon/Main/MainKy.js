import React, { useEffect, useState } from 'react';
import Nav from '../../../components/Nav/Nav';
import Feed from '../Commponents/Feed';
import RightFeed from '../Commponents/RightFeed';
import './MainKy.scss';

const MainKy = () => {
  const [contentList, setContentList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/kyeongyeonFeedData.json') //덩어리 제이슨을 받아옴
      .then(res => res.json()) //덩어리 제이슨을 객체 현태로 변환
      .then(data => {
        setContentList(data);
      }); //변환된 제이슨 덩어리를 setCommentList에 저장해서 관리
  }, []);

  return (
    <div className="main">
      <Nav />

      <main className="feedAsideContainer">
        {contentList.map(content => {
          return (
            <Feed
              name={content.name}
              key={content.id}
              src={content.src}
              text={content.text}
            />
          );
        })}
        <RightFeed />
      </main>
    </div>
  );
};

export default MainKy;

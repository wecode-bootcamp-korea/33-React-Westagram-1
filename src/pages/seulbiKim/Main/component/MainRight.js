import React, { useEffect, useState } from 'react';
import Recommend from './Recommend';

const MainRight = () => {
  const [recommendList, setRecommendList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/seubiRecommendData.json')
      .then(res => res.json())
      .then(data => setRecommendList(data));
  }, []);

  return (
    <div className="mainRightContainer">
      <div className="mainRight">
        <header className="mainRightProfile">
          <div className="mainRightProfileLeft">
            <img
              alt="dog"
              src="/images/seulbiKim/profile.jpg"
              className="mainRightProfileLeftImg"
            />
            <div className="mainRightProfileLeftIdData">
              <span>seul0606</span>
              <span>seul</span>
            </div>
          </div>
          <a href="/" className="mainRightProfileIdSwitch">
            전환
          </a>
        </header>

        <div className="mainRightRecommend">
          <div className="mainRightRecommendTitle">
            <span>회원님을 위한 추천</span>
            <a href="/">모두 보기</a>
          </div>
          <ul className="mainRightRecommendList">
            {recommendList.map(recommendData => (
              <Recommend recommendData={recommendData} key={recommendData.id} />
            ))}
          </ul>
        </div>
        <footer className="mainRightFooter">
          <ul>
            <li>소개</li>
            <li>도움말</li>
            <li>홍보 센터</li>
            <li>API</li>
            <li>채용 정보</li>
            <li>개인정보처리방침</li>
            <li>약관</li>
            <li>위치</li>
            <li>인기 계정</li>
            <li>해시태그</li>
            <li>언어</li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default MainRight;

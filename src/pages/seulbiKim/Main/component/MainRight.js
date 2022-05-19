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
            {MAIN_RIGHT_FOOTER.map(list => {
              return <li>{list}</li>;
            })}
          </ul>
        </footer>
      </div>
    </div>
  );
};

const MAIN_RIGHT_FOOTER = [
  '소개',
  '도움말',
  '홍보 센터',
  'API',
  '채용 정보',
  '개인정보처리방침',
  '약관',
  '위치',
  '인기 계정',
  '해시태그',
  '언어',
];

export default MainRight;

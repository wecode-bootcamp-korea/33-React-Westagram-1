import React from 'react';
import Recommend from './Recommend';
import Story from './Story';
import './RightFeed.scss';

const RightFeed = () => {
  return (
    <div className="mainRight">
      <div className="myStory">
        <div className="myIdImg">
          <img
            className="myProfile"
            src="/images/kyeongyeon/meme.png"
            alt="내프로필"
          />
          <div className="setProfile">
            <p>yeoo_on</p>
            <span className="profileInfo">Happy day!!!</span>
          </div>
        </div>
      </div>
      <Story />

      <Recommend />

      <footer>
        <span>
          Instagram 정보 ∙ 지원 ∙ 홍보 센터 ∙ API ∙<br />
          채용정보 ∙ 개인정보처리방침 ∙ 약관 ∙<br />
          디렉터리 ∙ 프로필 ∙ 해시태그 ∙ 언어
          <br />
          <br />© 2019 INSTAGRAM
        </span>
        © 2019 INSTAGRAM
      </footer>
    </div>
  );
};

export default RightFeed;

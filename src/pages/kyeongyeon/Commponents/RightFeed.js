import React from 'react';

const RightFeed = () => {
  return (
    <aside className="mainRight">
      <div className="myStory">
        <div className="myIdImg">
          <img
            className="myProfile"
            src="/images/kyeongyeon/meme.png"
            alt="내프로필"
            width="40px"
            height="40px"
          />
          <div className="setProfile">
            <p>yeoo_on</p>
            <span className="profileInfo">Happy day!!!</span>
          </div>
        </div>
      </div>
      <div className="storyBox">
        <div className="storyBoxTop">
          <span className="littleFont">스토리</span>
          <span className="boldFont">모두보기</span>
        </div>
        <div className="storyNeighbor">
          <ul className="storyNeighborInfo">
            <li className="storyNeighborList">
              <div className="storyIdImg">
                <img
                  className="storyNeighborhood"
                  src="/images/kyeongyeon/beauty_1610026942161.png"
                  alt="story_neighborhood"
                />
                <span className="neighbotStoryFont">_yum_s</span>
              </div>
              <p className="agoMinuteFont">16분전</p>
            </li>
            <li className="storyNeighborList">
              <div className="storyIdImg">
                <img
                  className="storyNeighborhood"
                  src="/images/kyeongyeon/beauty_1610679063570.png"
                  alt="story_neighborhood"
                />
                <span className="neighbotStoryFont">happy_troll</span>
              </div>
              <p className="agoMinuteFont">30분전</p>
            </li>
            <li className="storyNeighborList">
              <div className="storyIdImg">
                <img
                  className="storyNeighborhood"
                  src="/images/kyeongyeon/beauty_1614418013201.png"
                  alt="storyNeighborhood"
                />
                <span className="neighbotStoryFont">sunshine_xoxo</span>
              </div>
              <p className="agoMinuteFont">45분전</p>
            </li>
            <li className="storyNeighborList">
              <div className="storyIdImg">
                <img
                  className="storyNeighborhood"
                  src="/images/kyeongyeon/IMG_4986.jpeg"
                  alt="story_neighborhood"
                />
                <span className="neighbotStoryFont">ye_ah_go</span>
              </div>
              <p className="agoMinuteFont">16분전</p>
            </li>
            <li className="storyNeighborList">
              <div className="storyIdImg">
                <img
                  className="storyNeighborhood"
                  src="/images/kyeongyeon/IMG_4987.jpeg"
                  alt="story_neighborhood"
                />
                <span className="neighbotStoryFont">rrr_gogo</span>
              </div>
              <p className="agoMinuteFont">16분전</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="boxRecommend">
        <div className="boxRecommenedText">
          <span className="littleFont">회원님을 위한 추천</span>
          <span className="boldFont">모두보기</span>
        </div>
        <div className="recommendPeople">
          <ul className="recommendPeopleInfo">
            <li className="recommendPeopleList">
              <div className="recommnedIdImg">
                <img
                  className="recommendNeighbor"
                  src="/images/kyeongyeon/kkkkkkkkk.png"
                  alt="추천이웃 프로필 이미지"
                  width="20px"
                  height="20px"
                />
                <span className="neighborId">hello_wordl!</span>
                <span className="blueFont">팔로우</span>
              </div>
              <span className="littleFont">
                legend_kyeongyeon님 외 2명이...
              </span>
            </li>
            <li className="recommendPeopleList">
              <div className="recommnedIdImg">
                <img
                  className="recommendNeighbor"
                  src="/images/kyeongyeon/kkkkkkkkk.png"
                  alt="추천이웃 프로필 이미지"
                  width="20px"
                  height="20px"
                />
                <span className="neighborId">hello_wordl!</span>
                <span className="blueFont">팔로우</span>
              </div>
              <span className="littleFont">
                legend_kyeongyeon님 외 2명이...
              </span>
            </li>
            <li className="recommendPeopleList">
              <div className="recommnedIdImg">
                <img
                  className="recommendNeighbor"
                  src="/images/kyeongyeon/kkkkkkkkk.png"
                  alt="추천이웃 프로필 이미지"
                  width="20px"
                  height="20px"
                />
                <span className="neighborId">hello_wordl!</span>
                <span className="blueFont">팔로우</span>
              </div>
              <span className="littleFont">
                legend_kyeongyeon님 외 2명이...
              </span>
            </li>
            <li className="recommendPeopleList">
              <div className="recommnedIdImg">
                <img
                  className="recommendNeighbor"
                  src="/images/kyeongyeon/kkkkkkkkk.png"
                  alt="추천이웃 프로필 이미지"
                  width="20px"
                  height="20px"
                />
                <span className="neighborId">hello_wordl!</span>
                <span className="blueFont">팔로우</span>
              </div>
              <span className="littleFont">
                legend_kyeongyeon님 외 2명이...
              </span>
            </li>
            <li className="recommendPeopleList">
              <div className="recommnedIdImg">
                <img
                  className="recommendNeighbor"
                  src="/images/kyeongyeon/kkkkkkkkk.png"
                  alt="추천이웃 프로필 이미지"
                  width="20px"
                  height="20px"
                />
                <span className="neighborId">hello_wordl!</span>
                <span className="blueFont">팔로우</span>
              </div>
              <span className="littleFont">
                legend_kyeongyeon님 외 2명이...
              </span>
            </li>
          </ul>
        </div>
      </div>
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
    </aside>
  );
};

export default RightFeed;

import React, { useEffect, useRef, useState } from 'react';
import Nav from '../../../components/Nav/Nav';
import './MainSb.scss';

import FeedArticle from './component/FeedArticle';

const MainSb = () => {
  const [comment, setComment] = useState('');
  const [commentArr, setCommentArr] = useState([]);
  const [feedList, setFeedList] = useState([]);
  const nextId = useRef(4);
  const handleSubmit = e => {
    e.preventDefault();
    if (e.target.comment.value !== '')
      setCommentArr([
        ...commentArr,
        { id: nextId.current, name: 'seul', comment: comment },
      ]);
    e.target.comment.value = '';
    nextId.current += 1;
  };

  const handleComment = e => {
    e.preventDefault();
    setComment(e.target.value);
  };

  useEffect(() => {
    fetch('http://localhost:3000/data/seulbiCommentData.json')
      .then(res => res.json())
      .then(data => setCommentArr(data));
  }, []);

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
                feedData={feedData}
                handleSubmit={handleSubmit}
                commentArr={commentArr}
                handleComment={handleComment}
                key={feedData.id}
              />
            ))}
          </div>

          {/*  main-right */}
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
                  <li>
                    <div className="mainRightRecommendListLeft">
                      <img
                        alt="fox"
                        src="/images/seulbiKim/profile01.png"
                        className="recommendListImg"
                      />
                      <div className="recommendListInfo">
                        <div className="recommendListInfoId">fox</div>
                        <div className="recommendListInfoFollow">
                          hamster님 외 5명이 팔로우합니다.
                        </div>
                      </div>
                    </div>
                    <span className="recommendListFollowBtn">팔로우</span>
                  </li>
                  <li>
                    <div className="mainRightRecommendListLeft">
                      <img
                        alt="hamster"
                        src="/images/seulbiKim/profile00.jpg"
                        className="recommendListImg"
                      />
                      <div className="recommendListInfo">
                        <div className="recommendListInfoId">hamster</div>
                        <div className="recommendListInfoFollow">
                          cat님 외 8명이 팔로우합니다.
                        </div>
                      </div>
                    </div>
                    <span className="recommendListFollowBtn">팔로우</span>
                  </li>
                  <li>
                    <div className="mainRightRecommendListLeft">
                      <img
                        alt="cat"
                        src="/images/seulbiKim/profile03.png"
                        className="recommendListImg"
                      />
                      <div className="recommendListInfo">
                        <div className="recommendListInfoId">catbox</div>
                        <div className="recommendListInfoFollow">
                          ggobi님 외 12명이 팔로우합니다.
                        </div>
                      </div>
                    </div>
                    <span className="recommendListFollowBtn">팔로우</span>
                  </li>
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
        </div>
      </main>
    </div>
  );
};

export default MainSb;

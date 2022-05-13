import React from 'react';
import './MainSb.scss';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { CgRemove } from 'react-icons/cg';

const MainSb = () => {
  return (
    <div className="main-page">
      <nav>
        <div className="nav__container">
          <div className="nav__logo">
            <h2 className="nav__logo-text">westagram</h2>
          </div>
          <div className="nav__search__container">
            <form className="nav__search">
              <input type="text" placeholder="검색" />
            </form>
            {/*  search list */}
            {/* <ul className="search hidden">
              <li className="search__list">
                <img
                  alt="user profile img"
                  src="/images/seulbiKim/cat2.jpeg"
                  className="search__list__user-img"
                />
                <div className="search__list__user-data">
                  <span className="list__user-data__id"> wecode_bootcamp</span>
                  <span className="list__user-data__name">>wecode 위코드</span>
                </div>
                ../img/
              </li>
              <li className="search__list">
                <img
                  alt="user profile img"
                  src="/images/seulbiKim/cat2.jpeg"
                  className="search__list__user-img"
                />
                <div className="search__list__user-data">
                  <span className="list__user-data__id"> wecode_bootcamp</span>
                  <span className="list__user-data__name">>wecode 위코드</span>
                </div>
              </li>
            </ul> */}
          </div>

          <div className="nav__icons">
            <img alt="home icon" src="/images/seulbiKim/home.png" />
            <img alt="send icon" src="/images/seulbiKim/send.png" />
            <img alt="plus icon" src="/images/seulbiKim/plus.png" />
            <img
              alt="search icon"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            />
            <img
              alt="heart icon"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            />
            <img
              alt="mypage icon"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            />
          </div>
        </div>
      </nav>

      {/*  main */}
      <main>
        <div className="main__container">
          <div className="feeds">
            {/*  article */}
            <article>
              {/*  article__header */}
              <header>
                <div className="article__header__profile">
                  <img
                    alt="puppy"
                    src="/images/seulbiKim/profile02.png"
                    className="article__header__profile-img"
                  />
                  <span className="article__header__profile-name">
                    {' '}
                    hahihuheho{' '}
                  </span>
                </div>
                <div className="article__header__more">
                  <img alt="more icon" src="/images/seulbiKim/more.png" />
                </div>
              </header>

              {/*  article__main im */}
              <div className="article__img">
                <img alt="white cat" src="/images/seulbiKim/cat2.jpeg" />
              </div>

              {/*  article__data */}
              <div className="article-data">
                <div className="article-data__icons">
                  <div className="article-data__icons-left">
                    <AiOutlineHeart className="article-data__icons-heart" />
                    <AiFillHeart className="article-data__icons-heart fill" />
                    <img alt="chat icon" src="/images/seulbiKim/chat.png" />
                    <img alt="send icon" src="/images/seulbiKim/send.png" />
                  </div>
                  <img
                    alt="bookmark icon"
                    src="/images/seulbiKim/bookmark.png"
                    className="article-data__icons-right"
                  />
                </div>
                <div className="article-data__reaction">
                  <div className="reaction__liked">
                    <span> 좋아요 126개</span>
                  </div>
                  <div className="reaction__author-post">
                    <p>
                      <span>hahihuheho</span> 먼치킨 고양이 :)
                    </p>
                  </div>

                  {/*  article__comments */}
                  <div className="reaction__comments">
                    <ul>
                      <li>
                        <div className="comments__commented">
                          <p>
                            <span>test</span> comment
                          </p>
                        </div>
                        <AiOutlineHeart className="article-data__icons-heart" />
                        <AiFillHeart className="article-data__icons-heart fill" />
                        <CgRemove className="article-data__icons-remove" />
                      </li>
                    </ul>
                    <div className="date">
                      <span>1분 전</span>
                    </div>
                  </div>
                  <form className="comment-form">
                    <img alt="smile icon" src="/images/seulbiKim/smile.png" />
                    <input
                      type="textarea"
                      placeholder="댓글달기..."
                      className="comment-input"
                    />
                    <button className="comment-btn">게시</button>
                  </form>
                </div>
              </div>
            </article>
          </div>

          {/*  main-right */}
          <div className="main-right__container">
            <div className="main-right">
              <header className="main-right__profile">
                <div className="main-right__profile__left">
                  <img
                    alt="dog"
                    src="/images/seulbiKim/profile.jpg"
                    className="main-right__profile__left__img"
                  />
                  <div className="main-right__profile__left__id-data">
                    <span>seul0606</span>
                    <span>seul</span>
                  </div>
                </div>
                <a href="#" className="main-right__profile__id-switch">
                  전환
                </a>
              </header>

              <div className="main-right__recommend">
                <div className="main-right__recommend__title">
                  <span>회원님을 위한 추천</span>
                  <a href="#">모두 보기</a>
                </div>
                <ul className="main-right__recommend__list">
                  <li>
                    <div className="main-right__recommend__list-left">
                      <img
                        alt="fox"
                        src="/images/seulbiKim/profile01.png"
                        className="recommend__list__img"
                      />
                      <div className="recommend__list__info">
                        <div className="recommend__list__info-id">fox</div>
                        <div className="recommend__list__info-follow">
                          hamster님 외 5명이 팔로우합니다.
                        </div>
                      </div>
                    </div>
                    <span className="recommend__list__follow-btn">팔로우</span>
                  </li>
                  <li>
                    <div className="main-right__recommend__list-left">
                      <img
                        alt="hamster"
                        src="/images/seulbiKim/profile00.jpg"
                        className="recommend__list__img"
                      />
                      <div className="recommend__list__info">
                        <div className="recommend__list__info-id">hamster</div>
                        <div className="recommend__list__info-follow">
                          cat님 외 8명이 팔로우합니다.
                        </div>
                      </div>
                    </div>
                    <span className="recommend__list__follow-btn">팔로우</span>
                  </li>
                  <li>
                    <div className="main-right__recommend__list-left">
                      <img
                        alt="cat"
                        src="/images/seulbiKim/profile03.png"
                        className="recommend__list__img"
                      />
                      <div className="recommend__list__info">
                        <div className="recommend__list__info-id">catbox</div>
                        <div className="recommend__list__info-follow">
                          ggobi님 외 12명이 팔로우합니다.
                        </div>
                      </div>
                    </div>
                    <span className="recommend__list__follow-btn">팔로우</span>
                  </li>
                </ul>
              </div>
              <footer className="main-right__footer">
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

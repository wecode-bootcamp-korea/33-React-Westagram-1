import React from 'react';
import './MainSb.scss';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { CgRemove } from 'react-icons/cg';

const MainSb = () => {
  return (
    <div className="mainPage">
      <nav>
        <div className="navContainer">
          <div className="navLogo">
            <h2 className="navLogoText">westagram</h2>
          </div>
          <div className="navSearchContainer">
            <form className="navSearch">
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

          <div className="navIcons">
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
        <div className="mainContainer">
          <div className="feeds">
            {/*  article */}
            <article>
              {/*  article__header */}
              <header>
                <div className="articleHeaderProfile">
                  <img
                    alt="puppy"
                    src="/images/seulbiKim/profile02.png"
                    className="articleHeaderProfileImg"
                  />
                  <span className="articleHeaderProfileName"> hahihuheho </span>
                </div>
                <div className="articleHeaderMore">
                  <img alt="more icon" src="/images/seulbiKim/more.png" />
                </div>
              </header>

              {/*  article__main im */}
              <div className="articleImg">
                <img alt="white cat" src="/images/seulbiKim/cat2.jpeg" />
              </div>

              {/*  article__data */}
              <div className="articleData">
                <div className="articleDataIcons">
                  <div className="articleDataIconsLeft">
                    <AiOutlineHeart className="articleDataIconHeart" />
                    <AiFillHeart className="articleDataIconHeart fill" />
                    <img alt="chat icon" src="/images/seulbiKim/chat.png" />
                    <img alt="send icon" src="/images/seulbiKim/send.png" />
                  </div>
                  <img
                    alt="bookmark icon"
                    src="/images/seulbiKim/bookmark.png"
                    className="articleDataIconRight"
                  />
                </div>
                <div className="articleDataIeaction">
                  <div className="reactionLiked">
                    <span> 좋아요 126개</span>
                  </div>
                  <div className="reactionAuthorPost">
                    <p>
                      <span>hahihuheho</span> 먼치킨 고양이 :)
                    </p>
                  </div>

                  {/*  article__comments */}
                  <div className="reactionComments">
                    <ul>
                      <li>
                        <div className="commentsCommented">
                          <p>
                            <span>test</span> comment
                          </p>
                        </div>
                        <AiOutlineHeart className="articleDataIconsHeart" />
                        <AiFillHeart className="articleDataIconsHeart fill" />
                        <CgRemove className="articleDataIconsRemove" />
                      </li>
                    </ul>
                    <div className="date">
                      <span>1분 전</span>
                    </div>
                  </div>
                  <form className="commentForm">
                    <img alt="smile icon" src="/images/seulbiKim/smile.png" />
                    <input
                      type="textarea"
                      placeholder="댓글달기..."
                      className="commentInput"
                    />
                    <button className="commentBtn">게시</button>
                  </form>
                </div>
              </div>
            </article>
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
                <a href="#" className="mainRightProfileIdSwitch">
                  전환
                </a>
              </header>

              <div className="mainRightRecommend">
                <div className="mainRightRecommendTitle">
                  <span>회원님을 위한 추천</span>
                  <a href="#">모두 보기</a>
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

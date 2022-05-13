import React from 'react';
import './MainHr.scss';

const MainHr = () => {
  return (
    <div>
      <div className="insta">
        <div className="container">
          <nav>
            <div className="rightNav">
              <div className="logo">
                <i className="fa-brands fa-instagram"></i>
              </div>
              <div className="bar"></div>
              <div className="nameLogo">
                <span>Westagram</span>
              </div>
            </div>
            <div className="midNav">
              <input className="search" placeholder="검색" />
            </div>
            <div className="leftNav">
              <div className="compass">
                <i className="fa-regular fa-compass"></i>
              </div>
              <div className="heart">
                <i className="fa-regular fa-heart"></i>
              </div>
              <div className="profile">
                <i className="fa-regular fa-user"></i>
              </div>
            </div>
          </nav>
          <main>
            <div className="feeds">
              <div className="container">
                <article>
                  <div className="feedBox">
                    <div className="topFeed">
                      <div className="idBox">
                        <div className="profilePic"></div>
                        <span className="instaId">yesharryy</span>
                      </div>
                      <div className="more">
                        <i className="fa-solid fa-ellipsis"></i>
                      </div>
                    </div>
                    <div className="midFeed"></div>
                    <div className="bottomFeed">
                      <div className="iconBottom">
                        <div className="rightIconBottom">
                          <i className="fa-solid fa-heart"></i>
                          <i className="fa-regular fa-comment"></i>
                          <i className="fa-regular fa-share-from-square"></i>
                        </div>
                        <div className="leftIconBottom">
                          <i className="fa-regular fa-bookmark"></i>
                        </div>
                      </div>
                      <div className="likeBottom">
                        <div className="likeBox">
                          <div className="likePic"></div>
                          <span className="likeCount">
                            <b>yesharryy</b>님 외 <b>10명</b>이 좋아합니다
                          </span>
                        </div>
                      </div>
                      <div className="commentBox">
                        <div className="myComment">
                          <b>yesharryy</b> 김우주 보고싶어~!!
                        </div>
                        <div className="otherComment">
                          <p id="todoList"></p>
                          <form id="todoForm">
                            <input
                              type="text"
                              className="msg"
                              placeholder=" 댓글 달기..."
                              required
                            />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="mainRight">
                <div className="rightBox">
                  <div className="myId">
                    <div className="myPic"></div>
                    <div className="myIdBox">
                      <span className="myIdName">
                        <b>yesharryy</b>
                      </span>
                      <span className="myIdInfo">집 가고싶다 | 노해리</span>
                    </div>
                  </div>
                  <div className="story">
                    <div className="topStory">
                      <span className="storyText">스토리</span>
                      <span className="moreText">모두 보기</span>
                    </div>
                    <div className="storyBox">
                      <div className="storyPic"></div>
                      <div className="storyInfo">
                        <div className="storyId">
                          <b>westagram</b>
                        </div>
                        <div className="storyTime">16분 전</div>
                      </div>
                    </div>
                    <div className="storyBox">
                      <div className="storyPic"></div>
                      <div className="storyInfo">
                        <div className="storyId">
                          <b>westagram</b>
                        </div>
                        <div className="storyTime">16분 전</div>
                      </div>
                    </div>
                    <div className="storyBox">
                      <div className="storyPic"></div>
                      <div className="storyInfo">
                        <div className="storyId">
                          <b>westagram</b>
                        </div>
                        <div className="storyTime">16분 전</div>
                      </div>
                    </div>
                    <div className="storyBox">
                      <div className="storyPic"></div>
                      <div className="storyInfo">
                        <div className="storyId">
                          <b>westagram</b>
                        </div>
                        <div className="storyTime">16분 전</div>
                      </div>
                    </div>
                    <div className="storyBox">
                      <div className="storyPic"></div>
                      <div className="storyInfo">
                        <div className="storyId">
                          <b>westagram</b>
                        </div>
                        <div className="storyTime">16분 전</div>
                      </div>
                    </div>
                  </div>
                  <div className="recommand">
                    <div className="topStory">
                      <span className="storyText">회원님을 위한 추천</span>
                      <span className="moreText">모두 보기</span>
                    </div>
                    <div className="reBox">
                      <div className="reIdBox">
                        <div className="rePic"></div>
                        <div className="reInfo">
                          <div className="reId">
                            <b>westagram</b>
                          </div>
                          <div className="reFriends">16분 전</div>
                        </div>
                      </div>
                      <div className="follow">팔로우</div>
                    </div>
                    <div className="reBox">
                      <div className="reIdBox">
                        <div className="rePic"></div>
                        <div className="reInfo">
                          <div className="reId">
                            <b>westagram</b>
                          </div>
                          <div className="reFriends">16분 전</div>
                        </div>
                      </div>
                      <div className="follow">팔로우</div>
                    </div>
                    <div className="reBox">
                      <div className="reIdBox">
                        <div className="rePic"></div>
                        <div className="reInfo">
                          <div className="reId">
                            <b>westagram</b>
                          </div>
                          <div className="reFriends">16분 전</div>
                        </div>
                      </div>
                      <div className="follow">팔로우</div>
                    </div>
                  </div>
                  <div className="instaInfo">
                    Instagram 정보 ・ 지원 ・ 홍보 센터 ・ API ・ <br />
                    채용 정보 ・ 개인정보처리방침 ・ 약관 ・ <br />
                    디렉터리 ・ 프로필 ・ 해시태그 ・ 언어 <br />
                    <br />Ⓒ 2022 INSTAGRAM
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default MainHr;

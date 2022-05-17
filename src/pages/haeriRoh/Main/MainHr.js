import React, { useState } from 'react';
import './MainHr.scss';
import Nav from '../../../components/Nav/Nav';
import Comment from './component/Comment';

const MainHr = () => {
  let [댓글, 댓글변경] = useState([]);
  let [인풋, 인풋변경] = useState('');

  return (
    <div>
      <div className="insta">
        <div className="container">
          <Nav />
          <main>
            <div className="feeds">
              <div className="container">
                <article>
                  <div className="feedBox">
                    <div className="topFeed">
                      <div className="idBox">
                        <div className="profilePic" />
                        <span className="instaId">yesharryy</span>
                      </div>
                      <div className="more">
                        <i className="fa-solid fa-ellipsis" />
                      </div>
                    </div>
                    <div className="midFeed" />
                    <div className="bottomFeed">
                      <div className="iconBottom">
                        <div className="rightIconBottom">
                          <i className="fa-solid fa-heart" />
                          <i className="fa-regular fa-comment" />
                          <i className="fa-regular fa-share-from-square" />
                        </div>
                        <div className="leftIconBottom">
                          <i className="fa-regular fa-bookmark" />
                        </div>
                      </div>
                      <div className="likeBottom">
                        <div className="likeBox">
                          <div className="likePic" />
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
                          {/* <p id="commentsList" /> */}
                          {댓글.map(function (a) {
                            return <li>{a}</li>;
                          })}
                          <input
                            type="text"
                            className="msg"
                            placeholder=" 댓글 달기..."
                            required
                            onChange={e => {
                              인풋변경(e.target.value);
                            }}
                          />
                          <button
                            onClick={() => {
                              let copy = [...댓글];
                              copy.push(인풋);
                              댓글변경(copy);
                            }}
                          >
                            게시
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="mainRight">
                <div className="rightBox">
                  <div className="myId">
                    <div className="myPic" />
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
                      <div className="storyPic" />
                      <div className="storyInfo">
                        <div className="storyId">
                          <b>westagram</b>
                        </div>
                        <div className="storyTime">16분 전</div>
                      </div>
                    </div>
                    <div className="storyBox">
                      <div className="storyPic" />
                      <div className="storyInfo">
                        <div className="storyId">
                          <b>westagram</b>
                        </div>
                        <div className="storyTime">16분 전</div>
                      </div>
                    </div>
                    <div className="storyBox">
                      <div className="storyPic" />
                      <div className="storyInfo">
                        <div className="storyId">
                          <b>westagram</b>
                        </div>
                        <div className="storyTime">16분 전</div>
                      </div>
                    </div>
                    <div className="storyBox">
                      <div className="storyPic" />
                      <div className="storyInfo">
                        <div className="storyId">
                          <b>westagram</b>
                        </div>
                        <div className="storyTime">16분 전</div>
                      </div>
                    </div>
                    <div className="storyBox">
                      <div className="storyPic" />
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
                        <div className="rePic" />
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
                        <div className="rePic" />
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
                        <div className="rePic" />
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

// function 댓글() {
//   return (
//     <ul>
//       <li>댓글</li>
//     </ul>
//   );
// }

export default MainHr;

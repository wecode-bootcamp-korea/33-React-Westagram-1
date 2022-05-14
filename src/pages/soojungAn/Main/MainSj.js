import './MainSj.scss';
import Nav from '../../../components/Nav/Nav';
import { useState } from 'react';
import Comment from './Comment';

function MainSj() {
  const [inputValue, setInputValue] = useState('');
  const [commentList, setCommentList] = useState([]);

  const isValid = inputValue.length > 0;

  const handleInput = e => {
    setInputValue(e.target.value);
  };

  const post = () => {
    let copy = [...commentList];
    copy.push(inputValue);
    setCommentList(copy);
    setInputValue('');
  };

  const remove = e => {
    let number = parseInt(e.target.id);
    let copy = [...commentList];
    copy.splice(number, 1);
    setCommentList(copy);
  };

  return (
    <div className="main">
      <Nav />
      <main className="feedsRightContainer">
        <div className="storyFeeds">
          <div className="storyArea">
            <button className="beforeBtn">
              <i className="fa-solid fa-circle-chevron-left"></i>
            </button>
            <button className="nextBtn">
              <i className="fa-solid fa-circle-chevron-right"></i>
            </button>
            <div className="storyContainer"></div>
          </div>
          <div className="feeds">
            <article className="feedArticle">
              <header className="feedHeader">
                <div className="feedHeaderLeft">
                  <img
                    src="/images/soojungAn/karina-vorozheeva-rW-I87aPY5Y-unsplash.jpg"
                    alt=""
                  />
                  <span>Hello_World</span>
                </div>
                <div className="feedHeaderRight">
                  <i className="fa-solid fa-ellipsis"></i>
                </div>
              </header>
              <div className="feedContent">
                <img
                  src="/images/soojungAn/karina-vorozheeva-rW-I87aPY5Y-unsplash.jpg"
                  alt=""
                />
              </div>
              <div className="feedBtnArea">
                <span>
                  <i className="fa-regular fa-heart"></i>
                  <i className="fa-regular fa-comment"></i>
                  <i className="fa-regular fa-paper-plane"></i>
                </span>
                <span>
                  <i className="fa-regular fa-bookmark"></i>
                </span>
              </div>
              <div className="heartNumber">좋아요 2150개</div>
              <div className="letterCommentArea">
                <div className="postingLetter">
                  <a href="#">Hello_World</a>
                  <span>나비가 내 코에 앉았어오</span>
                </div>
                <div className="commentShow">댓글 5개 모두보기</div>
                <div className="commentContainer">
                  {commentList.map((eachComment, i) => {
                    return (
                      <Comment
                        eachComment={eachComment}
                        i={i}
                        j
                        remove={remove}
                        key={i}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="dateBefore">1일전</div>
              <footer className="footer">
                <form className="postingCommentArea">
                  <i className="fa-regular fa-face-grin"></i>
                  <input
                    className="postingInput"
                    type="text"
                    placeholder="댓글달기..."
                    onChange={handleInput}
                    value={inputValue}
                  />
                  <button
                    type="submit"
                    disabled={!isValid}
                    className={
                      'postingBtn ' + (isValid ? 'buttonActivate' : '')
                    }
                    onClick={post}
                  >
                    게시
                  </button>
                </form>
              </footer>
            </article>
          </div>
        </div>
        <div className="mainRight">
          <div className="rightProfile">
            <img
              src="/images/soojungAn/karina-vorozheeva-rW-I87aPY5Y-unsplash.jpg"
              alt=""
            />
            <span>Hello_World</span>
          </div>
          <section className="recommend">
            <div className="recommendTitle">
              <span>회원님을 위한 추천</span>
              <a href="#">모두보기</a>
            </div>
            <div className="recommendList">
              <div className="recommendListItem">
                <div className="listProfile">
                  <img src="/images/soojungAn/cat0.jpg" alt="" />
                  <span>I'm_sham</span>
                </div>
                <span className="follow">팔로우</span>
              </div>
              <div className="recommendListItem">
                <div className="listProfile">
                  <img src="/images/soojungAn/cat1.jpg" alt="" />
                  <span>good_day</span>
                </div>
                <span className="follow">팔로우</span>
              </div>
              <div className="recommendListItem">
                <div className="listProfile">
                  <img src="/images/soojungAn/cat2.jpg" alt="" />
                  <span>Samsek's_day</span>
                </div>
                <span className="follow">팔로우</span>
              </div>
              <div className="recommendListItem">
                <div className="listProfile">
                  <img src="/images/soojungAn/cat3.jpg" alt="" />
                  <span>Cat_lover</span>
                </div>
                <span className="follow">팔로우</span>
              </div>
              <div className="recommendListItem">
                <div className="listProfile">
                  <img src="/images/soojungAn/cat4.jpg" alt="" />
                  <span>I_love_cats</span>
                </div>
                <span className="follow">팔로우</span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default MainSj;

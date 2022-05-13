import './MainSj.scss';

function MainSj() {
  return (
    <div className="main">
      <nav className="navContainer">
        <ul className="navList">
          <li>
            <i className="fa-brands fa-instagram"></i>
            <span className="navLogoLetter">| Westagram</span>
          </li>
          <li>
            <input className="navInput" type="text" placeholder="검색" />
          </li>
          <li className="navIconArea">
            <img src="/images/soojungAn/explore.png" alt="explore" />
            <img src="/images/soojungAn/heart.png" alt="heart" />
            <img src="/images/soojungAn/profile.png" alt="profile" />
          </li>
        </ul>
      </nav>

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
                <div className="commentContainer"></div>
              </div>
              <div className="dateBefore">1일전</div>
              <footer className="footer">
                <div className="postingCommentArea">
                  <i className="fa-regular fa-face-grin"></i>
                  <input
                    className="postingInput"
                    type="text"
                    placeholder="댓글달기..."
                  />
                  <button disabled className="postingBtn">
                    게시
                  </button>
                </div>
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

import './MainKy.scss';

const MainKy = () => {
  return (
    <div className="main">
      <nav>
        <div className="navBox">
          <div className="leftLogo">
            <img
              className="instaLogo"
              src="https://p.kindpng.com/picc/s/32-323965_instagram-line-icon-png-clipart-png-download-instagram.png"
              alt="logo_camera"
              width="27px"
            />
            <span className="mainLogoFont">Westagram</span>
          </div>
          <div className="searchWrap">
            <input type="search" className="searchBar" placeholder="검색" />
            <img
              className="telescope"
              src="https://cdn.pixabay.com/photo/2017/01/13/01/22/magnifying-glass-1976105_1280.png"
              alt="telescope"
              width="15px"
            />
          </div>
          <div className="rightImgSrc">
            <img
              className="compass"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              alt="compass_img"
              width="30px"
            />
            <img
              className="navHeart"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              alt="heart_img"
              width="30px"
            />
            <img
              className="person"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              alt="person_img"
              width="30px"
            />
          </div>
        </div>
      </nav>

      <main className="feedAsideContainer">
        <div className="feed">
          <article>
            <div className="neighborhoodProfile">
              <img
                className="neighborImg"
                src="/images/kyeongyeon/yuntrollpark.png"
                alt="neighborhood_img"
              />
              <span>yeoo_on</span>
              <span className="neighbor_dots">•••</span>
            </div>
            <img
              className="feedImg"
              src="/images/kyeongyeon/yky.jpeg"
              alt="feed_img"
              width="614px"
            />
            <div className="checkImg">
              <div className="checkImgLeft">
                <img
                  className="feedHeart"
                  src="/images/kyeongyeon/heart.png"
                  alt="heart"
                />
                <img
                  className="feedBalloonWord"
                  src="/images/kyeongyeon/talk balloon .jpeg"
                  alt="balloon word"
                />
                <img
                  className="feedShare"
                  src="/images/kyeongyeon/share.png"
                  alt="share_img"
                />
              </div>
              <img
                className="feedBookmark"
                src="/images/kyeongyeon/bookmark.png"
                alt="bookmark_img"
              />
            </div>
            <div className="likeFeed">
              <div className="likesWho">
                <img
                  className="smallProfile"
                  src="/images/kyeongyeon/kong2.png"
                  alt="profile_img"
                />
                <span>
                  <mark className="boldFont">aineworld</mark>님{' '}
                  <mark className="boldFont">외 10명이</mark>좋아합니다.
                </span>
              </div>
              <div className="articleText">
                <p className="whatText">
                  <mark className="likeFeedUsername">Yuntroll</mark> 오늘도
                  열심히 살았다 키킼
                </p>
              </div>
            </div>
            <div className="commentBackground">
              <form className="comments">
                <ul className="commentsBox"></ul>
                <input type="text" placeholder="댓글입력" />
              </form>
            </div>
          </article>
        </div>

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
              <p>yeoo_on</p>
            </div>
            <p className="profileInfo">Yeoo_on | Happy day!!!</p>
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
      </main>
    </div>
  );
};

export default MainKy;

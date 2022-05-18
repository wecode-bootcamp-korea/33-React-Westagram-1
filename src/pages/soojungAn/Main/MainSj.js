import './MainSj.scss';
import Nav from '../../../components/Nav/Nav';
import { useState, useRef, useEffect } from 'react';
import Comment from './Comment';
import Feed from './Feed';

function MainSj() {
  const [inputValue, setInputValue] = useState('');
  const [commentList, setCommentList] = useState([]);
  const [feedList, setFeedList] = useState([]);
  let index = useRef(0);
  let feedIndex = useRef(0);

  const isValid = inputValue.length > 0;

  const handleInput = e => {
    setInputValue(e.target.value);
  };

  const pushToList = e => {
    e.preventDefault();
    const comment = {
      id: index.current++,
      nickname: 'Nabi',
      comment: inputValue,
      isLiked: false,
    };
    let copy = [...commentList];
    copy.push(comment);
    setCommentList(copy);
    setInputValue('');
  };

  const remove = e => {
    let clickedId = parseInt(e.target.id);
    let filter = commentList.filter(item => {
      return item.id !== clickedId;
    });
    setCommentList(filter);
  };

  const clickHeart = e => {
    let clickedId = parseInt(e.target.id);
    let clickedIndex = 0;
    commentList.forEach((item, index) => {
      if (item.id === clickedId) {
        clickedIndex = index;
      }
    });
    let copy = [...commentList];
    copy[clickedIndex].isLiked = !copy[clickedIndex].isLiked;
    setCommentList(copy);
  };

  useEffect(() => {
    fetch('/data/soojungAn.json')
      .then(res => res.json())
      .then(data => {
        setCommentList(data);
        index.current = data.length + 1;
      });
  }, []);

  useEffect(() => {
    fetch('/data/soojungAnFeed.json')
      .then(res => res.json())
      .then(data => {
        setFeedList(data);
      });
  }, []);

  return (
    <div className="main">
      <Nav />
      <main className="feedsRightContainer">
        <div className="storyFeeds">
          <div className="storyArea">
            <button className="beforeBtn">
              <i className="fa-solid fa-circle-chevron-left" />
            </button>
            <button className="nextBtn">
              <i className="fa-solid fa-circle-chevron-right" />
            </button>
            <div className="storyContainer" />
          </div>
          <div className="feeds">
            {feedList.map(feed => {
              return (
                <Feed
                  key={feed.id}
                  feed={feed}
                  commentList={commentList}
                  remove={remove}
                  clickHeart={clickHeart}
                  pushToList={pushToList}
                  handleInput={handleInput}
                  inputValue={inputValue}
                  isValid={isValid}
                />
              );
            })}
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
              <a href="/">모두보기</a>
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

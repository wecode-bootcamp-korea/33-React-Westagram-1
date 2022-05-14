import React, { useState } from 'react';
import FeedComments from './FeedComments';

const Feed = () => {
  const [comment, setComment] = useState(''); //set함수로 comment기본값에 setComment로 받아올거임
  const [commentArray, setCommentArray] = useState([]); //받은 comment를 배열로 받아줄거임

  const addComment = e => {
    const inputComment = [...commentArray]; //이 이벤트는 받은 배열들을 다시 배열로 나열해줄거임!!!
    inputComment.push(comment); //유저가 하나하나 입력한 값을 push로 밀어 넣어줄건데
    setCommentArray(inputComment);
    //그 받은 값을 setCommentArray의 useState([])에 최종값을 저장해주겠다!
  };

  const handleInput = e => {
    setComment(e.target.value); //입력한 값을 받을거야!!!!!!!!!!!!
  };

  return (
    <div className="containerFeedComments">
      <div className="feed">
        <article>
          <div className="neighborhoodProfile">
            <div className="nProfileLeft">
              <img
                className="neighborImg"
                src="/images/kyeongyeon/yuntrollpark.png"
                alt="neighborhood_img"
              />
              <span>yeoo_on</span>
            </div>
            <div className="nProfileRight">
              <span className="neighborDots">•••</span>
            </div>
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
              {commentArray.map((comment, id) => {
                return (
                  <FeedComments
                    userName="yeoo_on"
                    userComment={comment}
                    key={id}
                  />
                );
              })}
            </div>
          </div>
        </article>
      </div>
      <div className="commentBackground">
        <div className="comments">
          <ul className="commentsBox" />
          <input
            className="commentsInput"
            type="text"
            placeholder="댓글입력"
            onChange={handleInput}
          />
          <button className="commentsBtn" onClick={addComment}>
            {/*클릭을 하면 받은 값을 addComment에 저장해줄거임*/}
            게시
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feed;

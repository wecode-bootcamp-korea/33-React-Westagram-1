import React, { useRef, useState } from 'react';
import FeedList from './FeedList';
import InputComment from './InputComment';

const Feed = () => {
  const [commentList, setCommentList] = useState([
    { id: 1, name: 'yeoo_on', text: 'dadaasdas' },
  ]); //리스트를 만들어야 함, 들어온 배열을 문자열로 받겠다.

  /*   const addComment = e => {
    const inputComment = [...commentArray]; //이 이벤트는 받은 배열들을 다시 배열로 나열해줄거임!!!
    inputComment.push(comment); //유저가 하나하나 입력한 값을 push로 밀어 넣어줄건데
    setCommentArray(inputComment);
    //그 받은 값을 setCommentArray의 useState([])에 최종값을 저장해주겠다!
  }; */

  const nextId = useRef(2);

  const addComment = text => {
    const comment = {
      id: nextId.current,
      name: 'yeoo_on',
      text,
    };
    //조건부 댓글
    if (text.length !== 0)
      //값이 입력 됐을 때
      setCommentList(commentList.concat(comment));

    nextId.current += 1;
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
            <div className="feedList">
              <FeedList commentList={commentList} />
            </div>
          </div>
        </article>
        <InputComment addComment={addComment} />
      </div>
    </div>
  );
};

export default Feed;

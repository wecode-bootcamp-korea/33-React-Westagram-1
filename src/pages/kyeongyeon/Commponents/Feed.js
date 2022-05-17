import React, { useEffect, useRef, useState } from 'react';
import FeedList from './FeedList';
import InputComment from './InputComment';

const Feed = ({ name, src, text }) => {
  const [commentList, setCommentList] = useState([]); //리스트를 만들어야 함, 들어온 배열을 문자열로 받겠다.

  const onRemove = id => {
    setCommentList(commentList.filter(comment => comment.id !== id));
    //인자값으로 id를 받고, setCommentList로! commentList에 있는 애들 중에 filter로 반한을 해줄건데,
    //반환의 조건은 누른 comment의 id와 같지 않은 comment들만 반환!
  };

  useEffect(() => {
    fetch('http://localhost:3000/data/kyeongyeonCommentData.json') //덩어리 제이슨을 받아옴
      .then(res => res.json()) //덩어리 제이슨을 객체 현태로 변환
      .then(data => {
        setCommentList(data);
      }); //변환된 제이슨 덩어리를 setCommentList에 저장해서 관리
  }, []);

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

  const [likedHeart, setLikedHeart] = useState(false);
  const changeColor = e => {
    e.preventDefault(); //새로고침
    e.target.src = likedHeart
      ? 'images/kyeongyeon/emptyheart.png'
      : 'images/kyeongyeon/heart123.png';
    setLikedHeart(!likedHeart);
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
          <img className="feedImg" src={src} alt="feed_img" width="614px" />
          <div className="checkImg">
            <div className="checkImgLeft">
              <img
                className="feedHeart"
                src="/images/kyeongyeon/emptyheart.png"
                alt="heart"
                onClick={changeColor}
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
            <div className="feedContent">
              <p className="feedContentId">{name}</p>
              <p className="feedContentText">{text}</p>
            </div>
            <div className="feedList">
              <FeedList commentList={commentList} onRemove={onRemove} />
            </div>
          </div>
        </article>
        <InputComment addComment={addComment} />
      </div>
    </div>
  );
};

export default Feed;

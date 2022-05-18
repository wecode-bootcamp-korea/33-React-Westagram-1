import React, { useEffect, useRef, useState } from 'react';
import Nav from '../../../components/Nav/Nav';
import './MainSb.scss';

import FeedArticle from './component/FeedArticle';
import MainRight from './component/MainRight';

const MainSb = () => {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);
  const [feedList, setFeedList] = useState([]);
  const [liked, setLiked] = useState(false);
  const nextId = useRef(4);
  const handleSubmit = e => {
    e.preventDefault();
    if (e.target.comment.value !== '')
      setCommentList([
        ...commentList,
        { id: nextId.current, name: 'seul', comment: comment },
      ]);
    e.target.comment.value = '';
    nextId.current += 1;
  };

  const handleComment = e => {
    e.preventDefault();
    setComment(e.target.value);
  };

  const commentRemove = e => {
    const removeId = parseInt(e.target.id);
    const filtered = commentList.filter(comment => comment.id !== removeId);
    setCommentList(filtered);
  };

  const clickedLike = () => {
    setLiked(isLiked => !isLiked);
  };
  // console.log(liked);

  useEffect(() => {
    fetch('http://localhost:3000/data/seulbiCommentData.json')
      .then(res => res.json())
      .then(data => setCommentList(data));
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/data/seulbiFeedData.json')
      .then(res => res.json())
      .then(data => setFeedList(data));
  }, []);

  return (
    <div className="mainPage">
      <Nav />
      <main>
        <div className="mainContainer">
          <div className="feeds">
            {feedList.map(feedData => (
              <FeedArticle
                key={feedData.id}
                feedData={feedData}
                handleSubmit={handleSubmit}
                commentList={commentList}
                handleComment={handleComment}
                commentRemove={commentRemove}
                liked={liked}
                clickedLike={clickedLike}
              />
            ))}
          </div>
          <MainRight />
        </div>
      </main>
    </div>
  );
};

export default MainSb;

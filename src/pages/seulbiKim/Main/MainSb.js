import React, { useEffect, useRef, useState } from 'react';
import Nav from '../../../components/Nav/Nav';
import './MainSb.scss';

import FeedArticle from './component/FeedArticle';
import MainRight from './component/MainRight';

const MainSb = () => {
  const [comment, setComment] = useState('');
  const [commentArr, setCommentArr] = useState([]);
  const [feedList, setFeedList] = useState([]);
  const nextId = useRef(4);
  const handleSubmit = e => {
    e.preventDefault();
    if (e.target.comment.value !== '')
      setCommentArr([
        ...commentArr,
        { id: nextId.current, name: 'seul', comment: comment },
      ]);
    e.target.comment.value = '';
    nextId.current += 1;
  };

  const handleComment = e => {
    e.preventDefault();
    setComment(e.target.value);
  };

  useEffect(() => {
    fetch('http://localhost:3000/data/seulbiCommentData.json')
      .then(res => res.json())
      .then(data => setCommentArr(data));
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
                feedData={feedData}
                handleSubmit={handleSubmit}
                commentArr={commentArr}
                handleComment={handleComment}
                key={feedData.id}
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

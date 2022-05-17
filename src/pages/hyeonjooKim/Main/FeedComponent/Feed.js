import { useState, useEffect } from 'react';
import Reply from './Reply';
import InputReply from './InputReply';
import './Feed.scss';

const Feed = ({ id, userName, content }) => {
  const [reply, setReply] = useState([]);
  const [replyId, setReplyId] = useState(0);

  const saveReply = inputValue => {
    setReply(prevState => {
      return [
        ...prevState,
        {
          id: replyId,
          userName: 'hj_kim',
          content: inputValue,
        },
      ];
    });
    setReplyId(prevState => prevState + 1);
  };

  const deleteReply = id => {
    setReply(reply.filter(ele => ele.id !== id));
  };

  // mock data를 활용한 댓글 입력 확인
  useEffect(() => {
    fetch('http://localhost:3000/data/commentDataHj.json')
      .then(res => res.json())
      .then(data => {
        setReply(data);
      });
  }, []);

  return (
    <section className="feeds">
      <div className="writerProfile">
        <div>
          <div className="profileImgContainer">
            <img src="images/hyeonjooKim/profile01.jpeg" alt="writer profile" />
          </div>
          <span>{userName}</span>
        </div>
        <i className="fa-solid fa-ellipsis" />
      </div>
      <article className="mainContent">
        <div className="contentImgContainer">
          <img src={`images/hyeonjooKim/content0${id}.jpeg`} alt="content" />
        </div>
        <div className="buttonSection">
          <div>
            <i className="fa-solid fa-heart" />
            <i className="fa-regular fa-comment" />
            <i className="fa-solid fa-arrow-up-from-bracket" />
          </div>
          <i className="fa-regular fa-bookmark" />
        </div>
        <div className="textSection">
          <p>
            <span className="userId">hj_kim</span>님이 좋아합니다.
          </p>
          <p>
            <span className="userId">{userName}</span>
            {content}
          </p>
          {reply.map((ele, idx, arr) => (
            <Reply
              key={ele.id}
              id={ele.id}
              items={arr}
              userName={ele.userName}
              content={ele.content}
              onClickDeleteBtn={deleteReply}
            />
          ))}
        </div>
      </article>
      <InputReply onInputReply={saveReply} />
    </section>
  );
};

export default Feed;

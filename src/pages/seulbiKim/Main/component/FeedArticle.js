import React, { useEffect, useRef, useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import Comment from './Comment';

const FeedArticle = ({ feedData }) => {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);
  const [liked, setLiked] = useState(false);

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

  useEffect(() => {
    fetch(`http://localhost:3000/data/seulbiCommentData${feedData.id}.json`)
      .then(res => res.json())
      .then(data => setCommentList(data));
  }, []);

  const nextId = useRef(4);

  return (
    <article>
      {/*  article__header */}
      <header>
        <div className="articleHeaderProfile">
          <img
            alt="puppy"
            src="/images/seulbiKim/profile02.png"
            className="articleHeaderProfileImg"
          />
          <span className="articleHeaderProfileName"> hahihuheho </span>
        </div>
        <div className="articleHeaderMore">
          <img alt="more icon" src="/images/seulbiKim/more.png" />
        </div>
      </header>

      {/*  article__main im */}
      <div className="articleImg">
        <img alt="white cat" src={feedData.img} />
      </div>

      {/*  article__data */}
      <div className="articleData">
        <div className="articleDataIcons">
          <div className="articleDataIconsLeft">
            {liked === false ? (
              <AiOutlineHeart
                className="articleDataIconHeart"
                onClick={clickedLike}
              />
            ) : (
              <AiFillHeart
                className="articleDataIconHeart fill"
                onClick={clickedLike}
              />
            )}

            <img alt="chat icon" src="/images/seulbiKim/chat.png" />
            <img alt="send icon" src="/images/seulbiKim/send.png" />
          </div>
          <img
            alt="bookmark icon"
            src="/images/seulbiKim/bookmark.png"
            className="articleDataIconRight"
          />
        </div>
        <div className="articleDataIeaction">
          <div className="reactionLiked">
            <span> 좋아요 126개</span>
          </div>
          <div className="reactionAuthorPost">
            <p>
              <span>{feedData.name}</span> {feedData.content}
            </p>
          </div>

          {/*  article__comments */}
          <div className="reactionComments">
            <ul>
              {commentList.map(commentData => (
                <Comment
                  key={commentData.id}
                  commentData={commentData}
                  commentRemove={commentRemove}
                />
              ))}
            </ul>
            <div className="date">
              <span>1분 전</span>
            </div>
          </div>
          <form
            className="commentForm"
            onSubmit={handleSubmit}
            onKeyUp={handleComment}
          >
            <img alt="smile icon" src="/images/seulbiKim/smile.png" />
            <input
              type="textarea"
              name="comment"
              placeholder="댓글달기..."
              className="commentInput"
            />
            <button className="commentBtn">게시</button>
          </form>
        </div>
      </div>
    </article>
  );
};

export default FeedArticle;

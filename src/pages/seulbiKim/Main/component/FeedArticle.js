import React from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import Comment from './Comment';

const FeedArticle = ({
  handleSubmit,
  commentList,
  handleComment,
  feedData,
  commentRemove,
}) => {
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
            <AiOutlineHeart className="articleDataIconHeart" />
            <AiFillHeart className="articleDataIconHeart fill" />
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
                  commentData={commentData}
                  key={commentData.id}
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

import Comment from './Comment';

const Feed = ({
  feed,
  commentList,
  remove,
  clickHeart,
  pushToList,
  handleInput,
  inputValue,
  isValid,
}) => {
  const { nickname, content, img } = feed;

  return (
    <article className="feedArticle">
      <header className="feedHeader">
        <div className="feedHeaderLeft">
          <img src={'/images/soojungAn/' + img} alt="profileImg" />
          <span>{nickname}</span>
        </div>
        <div className="feedHeaderRight">
          <i className="fa-solid fa-ellipsis" />
        </div>
      </header>
      <div className="feedContent">
        <img src={'/images/soojungAn/' + img} alt="contentImg" />
      </div>
      <div className="feedBtnArea">
        <span>
          <i className="fa-regular fa-heart" />
          <i className="fa-regular fa-comment" />
          <i className="fa-regular fa-paper-plane" />
        </span>
        <span>
          <i className="fa-regular fa-bookmark" />
        </span>
      </div>
      <div className="heartNumber">좋아요 2150개</div>
      <div className="letterCommentArea">
        <div className="postingLetter">
          <a href="/">{nickname}</a>
          <span>{content}</span>
        </div>
        <div className="commentShow">댓글 5개 모두보기</div>
        <div className="commentContainer">
          {commentList.map(user => {
            return (
              <Comment
                key={user.id}
                user={user}
                remove={remove}
                clickHeart={clickHeart}
              />
            );
          })}
        </div>
      </div>
      <div className="dateBefore">1일전</div>
      <footer className="footer">
        <form
          className="postingCommentArea"
          onSubmit={e => {
            pushToList(e);
          }}
        >
          <i className="fa-regular fa-face-grin" />
          <input
            className="postingInput"
            type="text"
            placeholder="댓글달기..."
            onChange={handleInput}
            value={inputValue}
          />
          <button
            type="submit"
            disabled={!isValid}
            className={'postingBtn ' + (isValid ? 'buttonActivate' : '')}
          >
            게시
          </button>
        </form>
      </footer>
    </article>
  );
};

export default Feed;

import Comment from './Comment';
import { useRef, useState, useEffect } from 'react';

const Feed = ({ feed }) => {
  const [inputValue, setInputValue] = useState('');
  const [commentList, setCommentList] = useState([]);
  const { nickname, content, img } = feed;
  let index = useRef(0);

  useEffect(() => {
    fetch('/data/soojungAn.json')
      .then(res => res.json())
      .then(data => {
        setCommentList(data);
        index.current = data.length + 1;
      });
  }, []);

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
    setCommentList(prev => {
      return [...prev, comment];
    });
    setInputValue('');
  };

  const remove = e => {
    let clickedId = parseInt(e.target.id);
    setCommentList(commentList.filter(item => item.id !== clickedId));
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

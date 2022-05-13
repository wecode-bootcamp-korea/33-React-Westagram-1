import { useState } from 'react';
import InputReply from './InputReply';
import Reply from './Reply';
import './MainHj.scss';

function MainHj() {
  const [reply, setReply] = useState([]);
  const [replyId, setReplyId] = useState(0);

  const saveReply = inputValue => {
    setReply(prevState => {
      return [
        ...prevState,
        {
          id: replyId,
          content: inputValue,
        },
      ];
    });
    setReplyId(prevState => prevState + 1);
  };

  const deleteReply = id => {
    setReply(reply.filter(ele => ele.id !== id));
  };

  return (
    <div className="main">
      <section className="westagram">
        <nav className="navigation">
          <div className="logoSection">
            <i className="fa-brands fa-instagram" />
            <span className="logo">Westagram</span>
          </div>
          <div className="searchSection">
            <input type="text" className="searchBar" placeholder="검색" />
            <div className="searchPopup" />
            <div className="searchPopup pointer" />
          </div>
          <div className="userMenuSection">
            <i className="fa-regular fa-compass" />
            <i className="fa-regular fa-heart" />
            <button className="profileMenuBtn">
              <div className="profileImgContainer">
                <img src="images/hyeonjooKim/profile02.jpeg" alt="profile" />
              </div>
              <div className="profilePopup">
                <div className="menuProfile">
                  <i className="fa-regular fa-user" />
                  <p>프로필</p>
                </div>
                <div className="menuBookmark">
                  <i className="fa-regular fa-bookmark" />
                  <p>저장됨</p>
                </div>
                <div className="menuSettings">
                  <i className="fa-solid fa-gear" />
                  <p>설정</p>
                </div>
                <div className="menuLogout">
                  <p>로그아웃</p>
                </div>
              </div>
              <div className="profilePopup pointer" />
            </button>
          </div>
        </nav>
        <main>
          <section className="feeds">
            <div className="writerProfile">
              <div>
                <div className="profileImgContainer">
                  <img
                    src="images/hyeonjooKim/profile01.jpeg"
                    alt="writer profile"
                  />
                </div>
                <span>wecode</span>
              </div>
              <i className="fa-solid fa-ellipsis" />
            </div>
            <article className="mainContent">
              <div className="contentImgContainer">
                <img src="images/hyeonjooKim/content01.jpeg" alt="content" />
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
                  <span className="userId">wecode</span> 맥주 다시 개시합니다
                </p>
                {reply.map((ele, idx, arr) => (
                  <Reply
                    key={ele.id}
                    id={ele.id}
                    items={arr}
                    content={ele.content}
                    onClickDeleteBtn={deleteReply}
                  />
                ))}
              </div>
            </article>
            <InputReply onInputReply={saveReply} />
          </section>
          <section className="mainRight">
            <div className="userId">
              <div className="profileImgContainer">
                <img src="images/hyeonjooKim/profile02.jpeg" alt="profile" />
              </div>
              <ul>
                <li>hj_kim</li>
                <li>wecode | 위코드</li>
              </ul>
            </div>
            <div className="subSection">
              <div className="subTitle">
                <span>스토리</span>
                <span>모두 보기</span>
              </div>
              <ul>
                <li>
                  <div className="profileImgContainer">
                    <img
                      src="images/hyeonjooKim/profile01.jpeg"
                      alt="profile"
                    />
                  </div>
                  <span>Ballast Point</span>
                </li>
                <li>
                  <div className="profileImgContainer">
                    <img
                      src="images/hyeonjooKim/profile01.jpeg"
                      alt="profile"
                    />
                  </div>
                  <span>Goose Island</span>
                </li>
                <li>
                  <div className="profileImgContainer">
                    <img
                      src="images/hyeonjooKim/profile01.jpeg"
                      alt="profile"
                    />
                  </div>
                  <span>Amazing Brewing Company</span>
                </li>
              </ul>
            </div>
            <div className="subSection">
              <div className="subTitle">
                <span>회원님을 위한 추천</span>
                <span>모두 보기</span>
              </div>
              <ul>
                <li>
                  <div className="profileImgContainer">
                    <img
                      src="images/hyeonjooKim/profile01.jpeg"
                      alt="profile"
                    />
                  </div>
                  <span>Lager</span>
                  <span>팔로우</span>
                </li>
                <li>
                  <div className="profileImgContainer">
                    <img
                      src="images/hyeonjooKim/profile01.jpeg"
                      alt="profile"
                    />
                  </div>
                  <span>Stout</span>
                  <span>팔로우</span>
                </li>
                <li>
                  <div className="profileImgContainer">
                    <img
                      src="images/hyeonjooKim/profile01.jpeg"
                      alt="profile"
                    />
                  </div>
                  <span>Pale Ale</span>
                  <span>팔로우</span>
                </li>
              </ul>
            </div>
          </section>
        </main>
      </section>
    </div>
  );
}

export default MainHj;

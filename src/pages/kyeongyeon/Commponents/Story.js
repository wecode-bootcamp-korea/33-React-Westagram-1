import React, { useEffect, useState } from 'react';

const Story = () => {
  const [storyList, setStoryList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/kyeongyeonStoryData.json') //덩어리 제이슨을 받아옴
      .then(res => res.json()) //덩어리 제이슨을 객체 현태로 변환
      .then(data => {
        setStoryList(data);
      }); //변환된 제이슨 덩어리를 setCommentList에 저장해서 관리
  }, []);

  return (
    <div className="storyBox">
      <div className="storyBoxTop">
        <span className="littleFont">스토리</span>
        <span className="boldFont">모두보기</span>
      </div>
      <div className="storyNeighbor">
        <ul className="storyNeighborInfo">
          {storyList.map(story => {
            const { id, src, name, time } = story;
            return (
              <li className="storyNeighborList" key={id}>
                <div className="storyIdImg">
                  <img
                    className="storyNeighborhood"
                    src={src}
                    alt="story_neighborhood"
                  />
                  <span className="neighbotStoryFont">{name}</span>
                </div>
                <p className="agoMinuteFont">{time}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Story;

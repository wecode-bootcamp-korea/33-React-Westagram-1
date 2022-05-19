import React, { useEffect, useState } from 'react';
import './Recommend.scss';
const Recommend = () => {
  const [recommendList, setRecommendList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/kyeongyeonRecommendData.json') //덩어리 제이슨을 받아옴
      .then(res => res.json()) //덩어리 제이슨을 객체 형태로 변환
      .then(data => {
        setRecommendList(data);
      }); //변환된 제이슨 덩어리를 setRecommendList에 저장해서 관리
  }, []);
  return (
    <div className="boxRecommend">
      <div className="boxRecommenedText">
        <span className="littleFont">회원님을 위한 추천</span>
        <span className="boldFont">모두보기</span>
      </div>
      <div className="recommendPeople" />
      <ul className="recommendPeopleInfo">
        {recommendList.map(recommend => {
          const { id, src, name } = recommend; //디스트럭쳐한거
          return (
            <li className="recommendPeopleList" key={id}>
              <div className="recommnedIdImg">
                <img
                  className="recommendNeighbor"
                  src={src}
                  alt="추천이웃 프로필 이미지"
                  width="20px"
                  height="20px"
                />
                <span className="neighborId">{name}</span>
                <span className="blueFont">팔로우</span>
              </div>
              <span className="littleFont">
                legend_kyeongyeon님 외 2명이...
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Recommend;

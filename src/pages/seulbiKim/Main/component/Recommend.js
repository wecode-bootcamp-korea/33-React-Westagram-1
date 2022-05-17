import React from 'react';

const Recommend = ({ recommendData }) => {
  return (
    <li>
      <div className="mainRightRecommendListLeft">
        <img
          alt={recommendData.name}
          src={recommendData.img}
          className="recommendListImg"
        />
        <div className="recommendListInfo">
          <div className="recommendListInfoId">{recommendData.name}</div>
          <div className="recommendListInfoFollow">{recommendData.follow}</div>
        </div>
      </div>
      <span className="recommendListFollowBtn">팔로우</span>
    </li>
  );
};

export default Recommend;

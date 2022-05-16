//Feed랑 FeedComments를 연결하는 다리 / 리스트로 추가되면 그걸 map함수로 쌓아줌

import React from 'react';
import FeedComments from './FeedComments';

const FeedList = ({ commentList }) => {
  return (
    <div className="feedListBackground">
      {commentList.map(props => {
        return <FeedComments comment={props} key={props.id} />;
      })}
    </div>
  );
};

export default FeedList;

//()인자
//{}함수동작import FeedComments from './FeedComments';

//Feed랑 FeedComments를 연결하는 다리 / 리스트로 추가되면 그걸 map함수로 쌓아줌

import React from 'react';
import FeedComments from './FeedComments';
import './FeedList';

const FeedList = ({ commentList, onRemove }) => {
  //결국은 누르면 지워지는 함수를 만듬. 함수만 만든거지 결국 실제로 지워지러면 onClick에 해당 함수를 props로 줘야함!
  return (
    <div className="feedListBackground">
      {commentList.map(comment => {
        return (
          <FeedComments
            comment={comment}
            key={comment.id}
            onRemove={onRemove}
          />
        );
      })}
    </div>
  );
};

export default FeedList;

//()인자
//{}함수동작import FeedComments from './FeedComments';

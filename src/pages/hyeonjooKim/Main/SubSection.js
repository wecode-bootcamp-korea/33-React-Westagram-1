import './SubSection.scss';

const SubSection = ({ title }) => {
  return (
    <div className="subSection">
      <div className="subTitle">
        <span>{title}</span>
        <span>모두 보기</span>
      </div>
      <ul>
        {title === '스토리' &&
          stories.map(story => {
            return (
              <li key={story.id}>
                <div className="profileImgContainer">
                  <img src="images/hyeonjooKim/profile01.jpeg" alt="profile" />
                </div>
                <span>{story.username}</span>
              </li>
            );
          })}
        {title === '회원님을 위한 추천' &&
          recommendations.map(recommendation => {
            return (
              <li key={recommendation.id}>
                <div className="profileImgContainer">
                  <img src="images/hyeonjooKim/profile01.jpeg" alt="profile" />
                </div>
                <span>{recommendation.username}</span>
                <span>팔로우</span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

const stories = [
  {
    id: 1,
    username: 'Ballast Point',
  },
  {
    id: 2,
    username: 'Goose Island',
  },
  {
    id: 3,
    username: 'Amazing Brewing Company',
  },
];

const recommendations = [
  {
    id: 1,
    username: 'Lager',
  },
  {
    id: 2,
    username: 'Stout',
  },
  {
    id: 3,
    username: 'Pale Ale',
  },
];

export default SubSection;

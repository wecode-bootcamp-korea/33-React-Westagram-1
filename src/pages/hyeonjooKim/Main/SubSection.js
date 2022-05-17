import UserId from './UserId';
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
              <UserId
                key={story.id}
                userName={story.userName}
                category="story"
              />
            );
          })}
        {title === '회원님을 위한 추천' &&
          recommendations.map(recommendation => {
            return (
              <UserId
                key={recommendation.id}
                userName={recommendation.userName}
                category="recommendation"
              />
            );
          })}
      </ul>
    </div>
  );
};

const stories = [
  {
    id: 1,
    userName: 'Ballast Point',
  },
  {
    id: 2,
    userName: 'Goose Island',
  },
  {
    id: 3,
    userName: 'Amazing Brewing Company',
  },
];

const recommendations = [
  {
    id: 1,
    userName: 'Lager',
  },
  {
    id: 2,
    userName: 'Stout',
  },
  {
    id: 3,
    userName: 'Pale Ale',
  },
];

export default SubSection;

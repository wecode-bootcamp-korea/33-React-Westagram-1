import './UserId.scss';

const UserId = ({ userName, category }) => {
  return (
    <li>
      <div className="profileImgContainer">
        <img src="images/hyeonjooKim/profile01.jpeg" alt="profile" />
      </div>
      <span>{userName}</span>
      {category === 'recommendation' && <span>팔로우</span>}
    </li>
  );
};

export default UserId;

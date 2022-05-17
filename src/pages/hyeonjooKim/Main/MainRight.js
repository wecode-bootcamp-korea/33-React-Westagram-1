import SubSection from './SubSection';
import './MainRight.scss';

const MainRight = () => {
  return (
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
      <SubSection title="스토리" />
      <SubSection title="회원님을 위한 추천" />
    </section>
  );
};

export default MainRight;

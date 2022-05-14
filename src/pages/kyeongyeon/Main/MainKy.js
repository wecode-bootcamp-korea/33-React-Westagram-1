import Nav from '../../../components/Nav/Nav';
import Feed from '../Commponents/Feed';
import RightFeed from '../Commponents/RightFeed';
import './MainKy.scss';

const MainKy = () => {
  return (
    <div className="main">
      <Nav />

      <main className="feedAsideContainer">
        <Feed />

        <RightFeed />
      </main>
    </div>
  );
};

export default MainKy;

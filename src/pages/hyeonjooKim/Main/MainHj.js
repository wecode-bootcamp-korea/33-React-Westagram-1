import Nav from '../../../components/Nav/Nav';
import Feed from './Feed';
import MainRight from './MainRight';
import './MainHj.scss';

function MainHj() {
  return (
    <div className="main">
      <section className="westagram">
        <Nav />
        <main>
          <Feed />
          <MainRight />
        </main>
      </section>
    </div>
  );
}

export default MainHj;

import type { NextPage } from 'next';

const Home: NextPage = () => {
  const busca = () => {
    fetch('https://www.reddit.com/r/javascript/hot.json')
      .then((res) => res.json());
  };
  return (
    <div>
      <button type="button" onClick={busca}>Manda</button>
    </div>
  );
};

export default Home;

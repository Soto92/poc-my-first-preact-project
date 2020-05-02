import { useState, useEffect } from 'preact/hooks';
import style from './style';

const Home = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect :: Vc clickou:', count);
  });

  return (
    <div class={style.home}>
      <h1>Home</h1>
      <p>This is the Home component.</p>
      <p>Counter clicks</p>
      <button onClick={() => setCount((oldValue) => oldValue + 1)}>
        {count}
      </button>
      <p>Verifique o console.log</p>
    </div>
  );
};

export default Home;

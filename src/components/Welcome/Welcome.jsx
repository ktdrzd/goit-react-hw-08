import css from './Welcome.module.css';

const Welcome = () => {
  const img =
    'https://ih1.redbubble.net/image.1256073713.8461/st,small,507x507-pad,600x600,f8f8f8.jpg';
  return (
    <div className={css.card}>
      <img src={img} alt="welcome" width="600" className={css.img} />
    </div>
  );
};

export default Welcome;

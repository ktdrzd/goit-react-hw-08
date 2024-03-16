import css from './Welcome.module.css';

const Welcome = () => {
  const img =
    'https://static.vecteezy.com/system/resources/previews/008/888/521/non_2x/welcome-lettering-black-text-handwriting-calligraphy-with-line-isolated-on-white-background-greeting-card-illustration-design-template-element-vector.jpg';
  return (
    <div className={css.card}>
      <img src={img} alt="welcome" width="800" className={css.img} />
    </div>
  );
};

export default Welcome;

import "./styles/Hero.css";
export type HeroProps = {
  heroImg: string;
  cName: string;
  title: string;
  text: string;
  url: string;
  btnClass: string;
  btnName: string;
};

function Hero(props: HeroProps) {
  return (
    <>
      <div className={props.cName}>
        <img alt="HeroImage" src={props.heroImg} />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.btnName}
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;

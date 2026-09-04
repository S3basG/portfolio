import { Link } from 'react-router-dom';
import { asset } from '../data/assets';

const paths = [
  ['01', 'Community', 'The friends I made through volleyball became one of the best parts of being abroad.', 'volleyball'],
  ['02', 'Technology', 'ETHLisbon gave me a chance to experience engineering in a completely new setting.', 'ethlisbon'],
  ['03', 'Culture', 'Travel taught me to ask questions, pay attention, and stay open to how other people live.', 'culture'],
];

export default function ISPHome() {
  return <>
    <section className="home-hero">
      <div className="hero-copy">
        <p className="kicker">UNIVERSITY OF FLORIDA · INTERNATIONAL SCHOLARS PROGRAM</p>
        <h1>What I learned abroad.<br />What I want to bring <em>home.</em></h1>
        <p className="hero-intro">I am Sebastian Garcia, a Computer Engineering student at UF. This is the story of the people I met, the places I visited, and the goals I brought home with me.</p>
        <div className="hero-actions">
          <Link className="primary-button" to="/experiences">See my experiences <span>↘</span></Link>
          <Link className="text-button" to="/about">About me →</Link>
        </div>
      </div>
      <figure className="hero-image">
        <img src={asset('isp/city-overlook.jpg')} alt="Sebastian overlooking a city with red rooftops" />
        <figcaption>One of many new views</figcaption>
      </figure>
    </section>
    <section className="home-statement"><p>I want to use computer engineering to make technology and artificial intelligence easier to understand in Bolivia.</p></section>
    <section className="home-paths">
      {paths.map(([number, title, description, id]) => <article key={title}>
        <span>{number}</span><h2>{title}</h2><p>{description}</p>
        <Link to={'/experiences#' + id}>Read more →</Link>
      </article>)}
    </section>
  </>;
}

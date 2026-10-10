import { Link } from 'react-router-dom';
import { asset } from '../data/assets';

const pillars = [
  ['01', 'Belonging', 'People learn and contribute more freely when they know there is room to ask questions, make mistakes, and be themselves.', 'My goal is to create technology spaces where a first-time learner feels welcome enough to keep going.', 'volleyball'],
  ['02', 'Learning by building', 'The most useful technical growth happens when an idea is tested, measured, and improved through practice.', 'My goal is to make engineering and AI understandable through projects that connect to real needs.', 'ethlisbon'],
  ['03', 'Listening first', 'Language and cultural knowledge can open a door, but meaningful work starts by listening to the people closest to a challenge.', 'My goal is to build with communities in Bolivia, not simply design solutions for them.', 'identity'],
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
    <section className="home-values-intro" aria-labelledby="values-title">
      <p className="kicker">THE VALUES BEHIND MY GOAL</p>
      <h2 id="values-title">Three principles guide what I want to build next.</h2>
      <p>The International Scholars Program helped me connect the way I learn, lead, and serve. These values turn that reflection into a direction for my work.</p>
    </section>
    <section className="home-paths">
      {pillars.map(([number, title, description, goal, id]) => <article key={title}>
        <span>{number}</span><h2>{title}</h2><p>{description}</p><p className="pillar-goal">{goal}</p>
        <Link to={'/experiences?focus=' + id}>Read more →</Link>
      </article>)}
    </section>
  </>;
}

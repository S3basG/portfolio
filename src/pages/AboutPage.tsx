import { Link } from 'react-router-dom';
import { asset } from '../data/assets';

export default function AboutPage() {
  return <section className="page page-two">
    <div>
      <p className="kicker">ABOUT ME</p>
      <h1>Technology with<br />a purpose.</h1>
      <figure className="portrait">
        <img src={asset('isp/paris-portrait.jpg')} alt="Sebastian with the Eiffel Tower in the background" />
        <figcaption>A moment in Paris</figcaption>
      </figure>
    </div>
    <div className="long-copy">
      <p className="lead">I enjoy solving technical problems, but I care just as much about the people who will use what I build.</p>
      <p>I am a Computer Engineering student at the University of Florida, and I will graduate in December 2026. I am interested in software, data, and artificial intelligence. What excites me most is taking an idea and turning it into something useful.</p>
      <p>Through internships at Datadog, Wells Fargo, and Creating Real, I have worked with data systems, machine learning, and backend services. Each experience has made me a stronger engineer and taught me how much good communication matters when working on a team.</p>
      <p>At UF, I have also found ways to help other students. I serve as Vice President of Corporate Relations for ColorStack and as a Computer Engineering Education Advisor and Event Director for the Society of Hispanic Professional Engineers. I enjoy connecting people with resources and opportunities that can help them grow.</p>
      <p>Some of my favorite memories outside the classroom have come from volleyball and travel. Playing volleyball abroad helped me make friends and feel part of a community. Visiting Portugal, Spain, France, Morocco, and other places taught me to listen more carefully and stay open to perspectives different from my own.</p>
      <p>Giving back to Bolivia is one of my long term goals. I hope to create more opportunities for people to learn about technology and artificial intelligence in a practical and welcoming way. I want to build those opportunities by listening to the people they are meant to serve.</p>
      <Link className="primary-button" to="/resume">View résumé <span>↗</span></Link>
    </div>
  </section>;
}

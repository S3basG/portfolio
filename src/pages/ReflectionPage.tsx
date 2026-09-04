import { finalReflection } from '../data/ispContent';
import { asset } from '../data/assets';

export default function ReflectionPage() {
  return <section className="page reflection-page">
    <p className="kicker">SO WHAT? NOW WHAT?</p>
    <h1>What I am taking with me.</h1>
    <figure className="reflection-image">
      <img src={asset('isp/looking-ahead.jpg')} alt="Sebastian seated on a rock overlooking a landscape" />
      <figcaption>Thinking about what comes next</figcaption>
    </figure>
    <div className="reflection-copy">
      <p className="lead">Going abroad changed how I think about community, engineering, and what it really means to give back.</p>
      {finalReflection.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
    </div>
  </section>;
}

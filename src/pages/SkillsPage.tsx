import { skills } from '../data/ispContent';

export default function SkillsPage() {
  return <section className="page">
    <p className="kicker">CAREER READINESS</p>
    <h1>What I learned by doing.</h1>
    <p className="page-intro">These are four skills I practiced while meeting people, playing sports, traveling, and attending ETHLisbon.</p>
    <div className="skills-list">
      {skills.map((skill, index) => <article className="skill-card" key={skill.name}>
        <div className="skill-title"><span>0{index + 1}</span><p>{skill.context}</p><h2>{skill.name}</h2></div>
        <dl className="star-grid">
          <div><dt>Situation</dt><dd>{skill.s}</dd></div>
          <div><dt>Task</dt><dd>{skill.t}</dd></div>
          <div><dt>Action</dt><dd>{skill.a}</dd></div>
          <div><dt>Resolution</dt><dd>{skill.r}</dd></div>
        </dl>
      </article>)}
    </div>
  </section>;
}

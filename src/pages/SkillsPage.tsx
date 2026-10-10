import { skills } from '../data/ispContent';

export default function SkillsPage() {
  return <section className="page">
    <p className="kicker">CAREER READINESS</p>
    <h1>What I learned by doing.</h1>
    <p className="page-intro">These stories follow the STAR method in narrative form: each one shows the challenge, what I did, the result, and the practice I will carry into the workplace.</p>
    <div className="skills-list">
      {skills.map((skill, index) => <article id={skill.slug} className="skill-card" key={skill.name}>
        <div className="skill-title"><span>0{index + 1}</span><p>{skill.context}</p><h2>{skill.name}</h2></div>
        <div className="skill-body">
          <div className="skill-narrative">{skill.paragraphs.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}</div>
          <p className="skill-takeaway"><strong>What I will carry forward</strong>{skill.takeaway}</p>
        </div>
      </article>)}
    </div>
  </section>;
}

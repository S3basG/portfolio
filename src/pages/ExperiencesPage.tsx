import { experiences } from '../data/ispContent';
import { asset } from '../data/assets';

const journal = [
  {
    file: 'family-park-selfie.jpg',
    alt: 'Sebastian taking a selfie with a family member beside a river and park',
    caption: 'Sharing the experience with family',
    position: 'center 42%',
  },
  {
    file: 'cave-portrait.jpg',
    alt: 'Sebastian standing inside an illuminated cave',
    caption: 'Exploring beyond the classroom',
    position: 'center 42%',
  },
  {
    file: 'family-window.jpg',
    alt: 'A family member beside an open window during travel',
    caption: 'A family visit abroad',
    position: 'center 38%',
  },
  {
    file: 'paris-portrait.jpg',
    alt: 'Sebastian in front of the Eiffel Tower',
    caption: 'Paris, France',
    position: 'center 32%',
  },
  {
    file: 'time-with-friends.jpg',
    alt: 'Friends spending time together abroad',
    caption: 'Friendships across cultures',
    position: 'center',
  },
];

export default function ExperiencesPage() {
  return <section className="page experiences-page">
    <p className="kicker">GLOBAL EXPERIENCES</p>
    <h1>The experiences I<br />keep coming back to.</h1>
    <p className="page-intro">My global learning did not happen only while traveling. It also grew through coursework, bilingual life, campus leadership, and the communities that taught me how to listen.</p>
    <div className="experience-list">
      {experiences.map((experience) => <article id={experience.slug} className="experience-story" key={experience.slug}>
        <div className="experience-number">{experience.number}</div>
        <div className="story-copy">
          <p className="kicker">{experience.label}</p>
          <h2>{experience.title}</h2>
          {experience.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </div>
        <div className="story-media">
          {experience.photos.length
            ? experience.photos.map(([file, alt, caption, position]) => <figure key={file}><img src={asset(file)} alt={alt} loading="lazy" style={{ objectPosition: position }} /><figcaption>{caption}</figcaption></figure>)
            : <figure><img src={asset('isp/waterfront-portrait.jpg')} alt="Sebastian standing beside the water in Lisbon" loading="lazy" /><figcaption>Lisbon, Portugal</figcaption></figure>}
        </div>
      </article>)}
    </div>
    <section className="travel-journal" aria-labelledby="travel-journal-title">
      <p className="kicker">PHOTO JOURNAL</p>
      <h2 id="travel-journal-title">A few more memories.</h2>
      <p>I visited places I had only seen in pictures, but the experiences that lasted were the ones that helped me learn with and from other people.</p>
      <div className="journal-grid">
        {journal.map(({ file, alt, caption, position }) => <figure key={file}><img src={asset('isp/' + file)} alt={alt} loading="lazy" style={{ objectPosition: position }} /><figcaption>{caption}</figcaption></figure>)}
      </div>
    </section>
  </section>;
}

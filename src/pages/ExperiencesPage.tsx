import { experiences } from '../data/ispContent';
import { asset } from '../data/assets';

const journal = [
  ['city-square.jpg', 'Sebastian visiting a city square in Spain', 'Listening and learning in Spain'],
  ['paris-portrait.jpg', 'Sebastian in front of the Eiffel Tower', 'Paris, France'],
  ['cave-visit.jpg', 'An illuminated cave visited during travel', 'Exploring beyond the classroom'],
  ['time-with-friends.jpg', 'Friends spending time together abroad', 'Friendships across cultures'],
  ['viewpoint-with-friend.jpg', 'Sebastian and a friend at a mountain viewpoint', 'Shared experiences, lasting connections'],
];

export default function ExperiencesPage() {
  return <section className="page experiences-page">
    <p className="kicker">GLOBAL EXPERIENCES</p>
    <h1>Different places.<br />Lasting connections.</h1>
    <p className="page-intro">Three experiences that changed how I think about community, technology, and responsible engagement.</p>
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
            ? experience.photos.map(([file, alt, caption]) => <figure key={file}><img src={asset('isp/' + file)} alt={alt} loading="lazy" /><figcaption>{caption}</figcaption></figure>)
            : <figure><img src={asset('isp/waterfront-portrait.jpg')} alt="Sebastian standing beside the water in Lisbon" loading="lazy" /><figcaption>Lisbon, Portugal</figcaption></figure>}
        </div>
      </article>)}
    </div>
    <section className="travel-journal" aria-labelledby="travel-journal-title">
      <p className="kicker">PHOTO JOURNAL</p>
      <h2 id="travel-journal-title">Learning in motion.</h2>
      <p>Travel across Europe and Morocco made curiosity a daily practice. These moments remind me that global learning happens through places, conversations, and the relationships built along the way.</p>
      <div className="journal-grid">
        {journal.map(([file, alt, caption]) => <figure key={file}><img src={asset('isp/' + file)} alt={alt} loading="lazy" /><figcaption>{caption}</figcaption></figure>)}
      </div>
    </section>
  </section>;
}


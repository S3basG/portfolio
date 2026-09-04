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
    <h1>The experiences I<br />keep coming back to.</h1>
    <p className="page-intro">These are the people and moments that shaped my time abroad and changed what I want to do next.</p>
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
      <h2 id="travel-journal-title">A few more memories.</h2>
      <p>I visited places I had only seen in pictures, but the best part of traveling was sharing those moments with other people.</p>
      <div className="journal-grid">
        {journal.map(([file, alt, caption]) => <figure key={file}><img src={asset('isp/' + file)} alt={alt} loading="lazy" /><figcaption>{caption}</figcaption></figure>)}
      </div>
    </section>
  </section>;
}


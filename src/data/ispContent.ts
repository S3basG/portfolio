export const experiences = [
  {
    slug: 'volleyball',
    number: '01',
    label: 'COMMUNITY · VOLLEYBALL',
    title: 'Finding belonging through a shared routine.',
    photos: [
      ['isp/volleyball-community.jpg', 'A group posing together on an outdoor volleyball court', 'The group I found through volleyball'],
      ['isp/community-picnic.jpg', 'A group sharing a picnic on the grass', 'Spending time together outside the court'],
    ],
    paragraphs: [
      `When I began playing volleyball abroad, I expected it to be a familiar activity in an unfamiliar place. Instead, it became the first community where I felt that I belonged. The court gave people from different countries, personalities, and experience levels an easy reason to talk. We could serve, pass, laugh at a mistake, and slowly become comfortable with one another without needing a perfect introduction.`,
      `Playing together made me pay attention to how people communicate. Some teammates were vocal and competitive; others were quieter and needed time before they opened up. I learned to call for the ball clearly, encourage people after mistakes, and adjust to the energy of the group. Those choices were small, but they helped make the court a place where people wanted to return.`,
      `The friendships continued beyond the game. We shared meals, went on outings, and learned about one another's lives. The picnic in these photographs reminds me that community is not created by one large gesture. It grows when people keep showing up and make room for someone new.`,
      `That lesson now shapes the kind of technical learning environment I hope to create. Programming and artificial intelligence can be intimidating to a first-time learner. I want to build spaces where a shared project gives people a reason to participate, questions are welcomed, and making a mistake is treated as part of learning. Volleyball showed me that belonging is not separate from growth; it is often what makes growth possible.`,
    ],
  },
  {
    slug: 'ethlisbon',
    number: '02',
    label: 'SPAIN & PORTUGAL · COURSEWORK AND ETHLISBON',
    title: 'Learning engineering in a new context.',
    photos: [
      ['isp/waterfront-portrait.jpg', 'Sebastian standing beside the water in Lisbon', 'Lisbon, Portugal'],
      ['isp/city-square.jpg', 'Sebastian visiting a city square in Spain', 'Learning beyond a familiar campus'],
    ],
    paragraphs: [
      `Studying Engineering Economy, Circuits, Engineering Statistics, and Linear Algebra at Universidad Pontificia Comillas made academics part of my global experience. The subjects connected to my Computer Engineering degree at UF, but the classroom expectations, teaching styles, and examples were different. I had to ask questions sooner, compare new approaches with what I already knew, and become comfortable learning before I felt fully settled.`,
      `ETHLisbon extended that lesson beyond the classroom. A hackathon moves quickly, and the people around me brought different educational and professional backgrounds to the same technical problems. I could not assume that everyone would define a problem or explain an idea the way I did. I had to introduce myself, listen for the reasoning behind an approach, and contribute even when the direction was still changing.`,
      `The most valuable part was seeing how quickly a technical idea becomes clearer once people start testing it. The event strengthened my interest in hands-on learning: trying a tool, questioning its output, and improving a project based on what happens. It also made me more willing to enter a technical space before I know exactly how I will fit into it.`,
      `I want to carry that approach into future workshops in Bolivia. Instead of beginning with a long lecture about artificial intelligence, I would start with a small, relevant challenge. Learners could compare outputs, identify mistakes, and discuss when a tool is useful. The goal is not only to explain a technology; it is to let people discover that they can work with it thoughtfully.`,
    ],
  },
  {
    slug: 'identity',
    number: '03',
    label: 'BILINGUAL IDENTITY · CULTURE AND TRAVEL',
    title: 'Living between languages, not simply translating.',
    photos: [
      ['isp/live-performance.jpg', 'Dancers and musicians performing on a stage', 'Learning through performance and cultural programming'],
      ['isp/football-stadium.jpg', 'A selfie from the stands at a football stadium', 'Experiencing football in Madrid'],
    ],
    paragraphs: [
      `I grew up bilingual in the United States, where moving between English and Spanish is part of how I connect with family, school, and professional communities. Studying in Spain made me examine that identity more closely. Speaking Spanish helped me begin conversations, but it did not mean that I automatically understood every expression, custom, or point of view. The same language carried different rhythms and assumptions depending on who was using it.`,
      `Coursework and cultural experiences, including the Latino Film Festival, helped me see language as more than a practical skill. Stories, performances, and public celebrations showed how people use language to express memory and identity. At a football match or live performance, I often learned first by watching how the people around me participated and then asking what I did not understand.`,
      `Travel in Portugal, France, Morocco, and other places reinforced that humility. A short visit can reveal differences, but it does not make me an expert on a community. I became more comfortable saying that I did not know something, listening before forming an opinion, and noticing the small choices that help another person feel respected.`,
      `Being bilingual now feels less like having two separate versions of myself and more like practicing how to bridge contexts. In the workplace, that means checking whether people share the same understanding instead of assuming that familiar words mean the same thing to everyone. In service, it means using language to invite participation while still letting a community define its own priorities.`,
    ],
  },
  {
    slug: 'campus',
    number: '04',
    label: 'UF · SHPE AND COLORSTACK',
    title: 'Turning global awareness into campus leadership.',
    photos: [
      ['SebastianGarcia.jpeg', 'A professional portrait of Sebastian Garcia', 'Sebastian Garcia · University of Florida'],
    ],
    paragraphs: [
      `My global learning also happens on campus. Through the Society of Hispanic Professional Engineers, I advise Computer Engineering students on courses, internships, and technical interviews. As an Event Director, I help turn broad goals such as professional development and community into programs that students can actually attend and use. This work keeps me connected to the questions students ask when they are trying to find their place in engineering.`,
      `As Vice President of Corporate Relations for ColorStack at UF, I work between students and industry partners. I secured $5,200 in sponsorships from NVIDIA, Bloomberg, and Capital One to support more than eight workshops and ten networking events for a chapter of more than 300 members. The challenge was not only raising money; it was understanding what partners could offer, what students needed, and where those goals could meet.`,
      `These roles have taught me that leadership is follow-through. It means writing the message, organizing the details, welcoming the speaker, adjusting when a plan changes, and checking whether the event served the people it was designed for. Increasing women's representation in ColorStack to 22 percent also showed me that inclusion improves when outreach is treated as ongoing work rather than a one-time statement.`,
      `SHPE and ColorStack connect the International Scholars Program to my everyday life at UF. They give me a place to apply what travel taught me about listening, belonging, and cultural humility. They also give me a model for my long-term goal in Bolivia: begin with trusted relationships, build programs around stated needs, and measure success by whether people gain access, confidence, and a reason to return.`,
    ],
  },
];

export const skills = [
  {
    slug: 'communication',
    name: 'Communication',
    context: 'Bilingual data and shared understanding',
    paragraphs: [
      `At Wells Fargo, I worked with more than 100,000 multilingual document records whose language metadata and labels were not always consistent. My responsibility was not only to train a classifier, but to make the problem visible to teammates who approached the data from different perspectives. I profiled records with Python, Pandas, langid, and langdetect, used SQL to validate Parquet workflows, and explained where language detection and existing labels diverged. The resulting logistic regression workflow improved production classification accuracy from 84 percent to 91 percent and caught more than 150 labeling errors before deployment.`,
      `That experience connected technical communication with my bilingual identity. Translation alone does not guarantee shared meaning, whether I am discussing a dataset, speaking with a classmate in Spain, or mentoring a student at UF. I learned to name assumptions, use evidence that another person can examine, and pause to confirm that we are solving the same problem.`,
    ],
    takeaway: `I will make complex work easier to act on by pairing clear language with evidence, checking for understanding, and adapting the explanation to the audience instead of assuming one message works for everyone.`,
  },
  {
    slug: 'technology',
    name: 'Technology',
    context: 'Backend systems, machine learning, and practical experimentation',
    paragraphs: [
      `My technical growth has come from moving between different kinds of problems. At Creating Real, I worked on Go microservices, optimized routes and queries to reduce API latency by 60 percent, and implemented WebSockets and OAuth2 for secure real-time collaboration. At Wells Fargo, the challenge shifted to multilingual data: I used Python and scikit-learn to train classifiers and monitor model drift. ETHLisbon added a third setting, where I had to explore unfamiliar ideas quickly and learn from people with different technical backgrounds.`,
      `The difficult part was not memorizing another tool. It was deciding what to measure, tracing why a system behaved the way it did, and changing direction when the evidence did not support my first idea. Working across Go services, real-time communication, authentication, and machine-learning evaluation gave me a more concrete understanding of how software choices affect reliability and users.`,
    ],
    takeaway: `I will approach new technology by building a small test, defining a useful measure, documenting what fails, and using the result to guide the next iteration. That habit lets me learn unfamiliar systems without hiding uncertainty.`,
  },
  {
    slug: 'leadership',
    name: 'Leadership',
    context: 'SHPE and ColorStack at UF',
    paragraphs: [
      `In ColorStack, I needed to create stronger connections between a 300-plus-member student community and companies that could support its development. I built relationships with NVIDIA, Bloomberg, and Capital One, secured $5,200 in sponsorships, and helped support more than eight workshops and ten networking events. In SHPE, I mentor Computer Engineering students on course planning, internships, and technical interviews while also directing events for the chapter.`,
      `The challenge in both organizations is turning a broad promise such as access or professional development into something people can use. That requires listening to students, communicating a clear value to partners, tracking details, and following through after the visible part of an event is over. The work also contributed to raising women's representation in ColorStack to 22 percent, showing me that inclusive leadership depends on repeated, measurable action.`,
    ],
    takeaway: `I will lead by clarifying who a decision should serve, assigning concrete next steps, following up with stakeholders, and measuring participation so that inclusion becomes part of execution rather than only an intention.`,
  },
  {
    slug: 'global-engagement',
    name: 'Global & Cultural Engagement',
    context: 'Coursework, community, and life abroad',
    paragraphs: [
      `At Universidad Pontificia Comillas, I studied technical subjects in a new academic system while building a life outside the classroom through volleyball, cultural events, and travel. I could speak Spanish, but I still encountered different expectations and unfamiliar customs. My task was to participate without pretending that language fluency gave me complete cultural understanding. I asked questions, watched how other people engaged, adjusted to new classroom and social norms, and stayed open when my first interpretation was incomplete.`,
      `By the end of the semester, I was more comfortable entering an unfamiliar environment and contributing before everything felt predictable. More importantly, I learned that curiosity needs humility. A global perspective is not a collection of places visited; it is the discipline of listening, comparing assumptions, and letting other people complicate the way I see a problem.`,
    ],
    takeaway: `In future teams, I will seek context before proposing a solution, invite people closest to the problem into the decision, and treat disagreement as useful information about what I may be missing.`,
  },
];

export const finalReflection = [
  `At the beginning of the International Scholars Program, I pictured global learning mainly as travel. Studying abroad changed that definition. My courses at Universidad Pontificia Comillas required me to adapt to a new academic environment, while ETHLisbon showed me how technical ideas change when people with different backgrounds build together. Volleyball, performances, a Latino Film Festival, and everyday conversations gave me other ways to learn. Each setting asked me to pay attention, participate, and accept that I would not understand everything immediately.`,
  `The experience also made me think differently about being bilingual in the United States. English and Spanish help me move between family, school, and professional communities, but bilingualism is not simply translating the same sentence twice. It requires noticing context: who feels comfortable speaking, which examples make sense, and what may be lost when people assume they already understand one another. Abroad, speaking Spanish helped me connect. It also taught me that sharing a language does not erase cultural differences.`,
  `Back at UF, SHPE and ColorStack have become places where I practice those lessons. Advising Computer Engineering students means listening to the uncertainty behind a question about a course or internship. Leading corporate relations means translating student needs into partnerships that companies can support. Securing $5,200 for workshops and networking events mattered because it created access for a community of more than 300 students. The number is evidence of the work, but the purpose is giving people information, relationships, and confidence they can use.`,
  `My internships have added another layer. Building Go services at Creating Real taught me to connect technical decisions to speed, security, and reliability. Working with multilingual document data at Wells Fargo showed me that a model can appear successful while still misunderstanding certain records or communities. Improving classification accuracy required both technical tools and careful questions about labels, language, and drift. These experiences made engineering feel inseparable from communication and responsibility.`,
  `My long-term goal is still to expand practical technology and artificial-intelligence learning in Bolivia, but it is now more specific. I would begin with a school or community organization, ask teachers and learners what would be useful, and design a small workshop around the devices, internet access, language, and experience they actually have. Participants might test an AI tool, compare its answers, identify unreliable information, and create a short project connected to a local interest. I would collect feedback before repeating the program instead of treating the first version as a finished solution.`,
  `The International Scholars Program connected experiences that once felt separate: engineering coursework, internships, bilingual life, campus leadership, sports, and travel. Together they gave me three principles to carry forward: create belonging, learn by building, and listen before deciding. My next step is to keep developing those habits at UF while forming relationships with educators and community organizations in Bolivia. I am leaving the program without a perfect answer, but with a clearer goal and a more responsible way to begin.`,
];

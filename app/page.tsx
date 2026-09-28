export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main>
      <section className="hero">
        <h1>Genki Ando</h1>
        <p className="tagline">a senior at UH Manoa studying Computer Science.</p>
      </section>

      <section className="about">
        <h2>About</h2>
        <p>
          I&apos;m in my final year at the University of Hawai&apos;i at Manoa, working
          toward a degree in Computer Science. I&apos;m interested in building
          practical, useful software and learning how AI tools can speed up
          that process. Outside of coursework, I like taking on small projects
          that let me practice new skills.
        </p>
      </section>

      {/* Placeholder items below — Genki will replace these with his real semester details */}
      <section className="semester">
        <h2>This semester</h2>
        <ul>
          <li>Taking upper-division coursework in software engineering and algorithms</li>
          <li>Building a personal side project to practice full-stack development</li>
          <li>Participating in an AI workshop to learn how to build with Claude</li>
        </ul>
      </section>

      <footer>
        <p>
          Genki Ando &copy; {year}
        </p>
      </footer>
    </main>
  );
}

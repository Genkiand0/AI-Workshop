export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main>
      <section className="hero">
        <h1>Genki Ando</h1>
        <p className="tagline">a senior at UH Manoa studying Computer Science.</p>
      </section>

      <section className="semester">
        <h2>This semester</h2>
        <ul>
          <li>SLS 480E</li>
          <li>My AIR project</li>
          <li>Learning to surf</li>
        </ul>
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

      <footer>
        <p>
          Genki Ando &copy; {year} &middot; Built with Claude Code
        </p>
      </footer>
    </main>
  );
}

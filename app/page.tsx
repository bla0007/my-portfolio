export default function Portfolio() {
  const projects = [
    {
      title: "Phishing Detection System",
      tech: "Python • NLP • Machine Learning",
      description:
        "Developed an AI-based phishing detection system using NLP techniques and image analysis.",
    },
    {
      title: "Autonomous Tour Guide",
      tech: "Flutter • Firebase • BLE Beacon",
      description:
        "Built an intelligent travel guide application with automated navigation and multilingual assistance.",
    },
    {
      title: "Smart Video Surveillance",
      tech: "ESP32-CAM • Arduino • Firebase",
      description:
        "Designed a smart attendance and surveillance system using IoT technologies.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">

        <p className="text-cyan-400 uppercase tracking-[4px] mb-4">
          Cyber Security & Web Development
        </p>

        <h1 className="text-5xl md:text-7xl font-bold max-w-4xl leading-tight">
          Dushyant Saini
        </h1>

        <p className="text-gray-400 text-lg mt-6 max-w-2xl leading-8">
          Third-year Computer Science Engineering student passionate about
          Cyber Security, AI-based security systems, and Full Stack Development.
        </p>
      <div className="flex gap-4 mt-10 flex-wrap justify-center">

  <a
    href="https://github.com/bla0007"
    target="_blank"
    className="px-6 py-3 bg-cyan-500 text-black rounded-xl font-semibold hover:scale-105 transition"
  >
    GitHub
  </a>

  <a
    href="https://linkedin.com/in/dushyantsaini"
    target="_blank"
    className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-xl hover:bg-cyan-400 hover:text-black transition"
  >
    LinkedIn
  </a>

  <a
    href="/resume.pdf"
    download
    className="px-6 py-3 border border-white/20 rounded-xl hover:border-cyan-400 hover:text-cyan-400 transition"
  >
    Download Resume
  </a>

</div>
      
      </section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto py-24 px-6">

        <h2 className="text-4xl font-bold text-cyan-400 mb-10">
          About Me
        </h2>

        <p className="text-gray-300 leading-8 text-lg">
          I enjoy building secure and intelligent digital systems while solving
          real-world technical problems through innovative solutions. My
          interests include Cyber Security, AI-powered security systems, Web
          Development, and intelligent automation technologies.
        </p>

      </section>

      {/* SKILLS */}
      <section className="bg-zinc-950 py-24 px-6">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl font-bold text-cyan-400 mb-12">
            Technical Skills
          </h2>

          <div className="flex flex-wrap gap-4">

            {[
              "Python",
              "Java",
              "JavaScript",
              "React",
              "Node.js",
              "Wireshark",
              "Nmap",
              "Metasploit",
              "Kali Linux",
              "SQL",
            ].map((skill) => (

              <span
                key={skill}
                className="px-5 py-3 bg-black border border-cyan-400/20 rounded-xl text-gray-300"
              >
                {skill}
              </span>

            ))}

          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section className="max-w-6xl mx-auto py-24 px-6">

        <h2 className="text-4xl font-bold text-cyan-400 mb-14">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project) => (

            <div
              key={project.title}
              className="bg-zinc-900 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 transition"
            >

              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-cyan-400 mb-4">
                {project.tech}
              </p>

              <p className="text-gray-400 leading-7">
                {project.description}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* EXPERIENCE */}
      <section className="bg-zinc-950 py-24 px-6">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl font-bold text-cyan-400 mb-12">
            Experience
          </h2>

          <div className="bg-black border border-white/10 rounded-3xl p-8">

            <h3 className="text-2xl font-bold">
              Web Developer Intern
            </h3>

            <p className="text-cyan-400 mt-2">
              Vault of Codes
            </p>

            <ul className="mt-6 space-y-4 text-gray-300 leading-7 list-disc pl-5">

              <li>
                Designed and hosted a personal portfolio website.
              </li>

              <li>
                Built responsive frontend interfaces using HTML, CSS,
                and JavaScript.
              </li>

              <li>
                Developed interactive projects and improved UI/UX skills.
              </li>

            </ul>

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section className="py-24 text-center px-6">

        <h2 className="text-5xl font-bold text-cyan-400 mb-8">
          Let&apos;s Connect
        </h2>

        <p className="text-gray-400 text-lg mb-10">
          Open to internships, collaborations, and cybersecurity opportunities.
        </p>

        <a
          href="mailto:dushyant.saini23@st.niituniversity.in"
          className="px-8 py-4 bg-cyan-500 text-black rounded-2xl font-semibold hover:scale-105 transition"
        >
          Email Me
        </a>

      </section>

    </main>
  );
}
const AboutMePage = () => {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <div className="flex flex-col items-center mb-6">
          {/* Profile Image */}
          <img
            src="profilepic.png" // Replace with your LinkedIn profile photo URL
            alt="Nalin Padmasiri"
            className="w-40 h-40 rounded-full shadow-lg mb-4"
          />
          <p className="text-lg text-center">
            Hi, I'm <strong>Nalin Padmasiri</strong>, a passionate software engineer with over <strong>9 years of experience</strong> in building modern web applications and scalable software solutions.
          </p>
        </div>
        <p className="text-lg mb-4">
          Since <strong>2022</strong>, I have been working in <strong>Singapore</strong>, contributing to projects in the <strong>fintech</strong> and <strong>government</strong> sectors. I thrive in dynamic environments where I can collaborate with teams to deliver impactful solutions that make a difference.
        </p>
        <p className="text-lg mb-4">
          I am always eager to learn new technologies and collaborate with others to build innovative and impactful projects. Feel free to connect with me on LinkedIn to learn more about my professional journey and the projects I've worked on.
        </p>
        <a
          href="https://www.linkedin.com/in/nalin-padmasiri-356283141"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Visit my LinkedIn Profile
        </a>
      </div>
    );
  };
  
  export default AboutMePage;
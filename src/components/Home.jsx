import React from 'react';

const Home = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center h-[90vh] bg-gradient-to-br from-blue-100 to-purple-200 dark:from-gray-800 dark:to-gray-900 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-yellow-400 dark:to-pink-500">
          Jagrit Kejriwal
        </h1>
        <p className="mt-6 text-xl md:text-2xl max-w-xl text-gray-700 dark:text-gray-300">
          I'm a Computer Science student specializing in AI, Full Stack Development, and Generative AI. Let's build the future together.
        </p>
        <a
          href="/projects"
          className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition"
        >
          View My Work
        </a>
      </section>

      <section className="p-10 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          {/* <h2 className="text-4xl font-bold mb-6">Contact Me</h2> */}
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Feel free to reach out to me for collaborations or project inquiries.
          </p>
          <div className="space-y-2 text-lg text-gray-700 dark:text-gray-300">
            <p>📧 <a href="mailto:jagritkejriwal05@gmail.com" className="text-blue-600 dark:text-yellow-400">jagritkejriwal05@gmail.com</a></p>
            <p>📞 +91 9394658012</p>
            <p>🔗 <a href="https://linkedin.com/in/jagrit-kejriwal-176613321" className="text-blue-600 dark:text-yellow-400" target="_blank" rel="noreferrer">LinkedIn</a></p>
            <p>💻 <a href="https://github.com/Jagrit05" className="text-blue-600 dark:text-yellow-400" target="_blank" rel="noreferrer">GitHub</a></p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

import React from 'react';

const projects = [
  {
    title: 'Market Basket Analysis',
    desc: 'Used Apriori Algorithm in Python to discover association rules and customer insights.',
    tech: 'Python, Pandas, mlxtend',
  },
  {
    title: 'Next Sentence Prediction',
    desc: 'Built an NLP model using Hugging Face Transformers to predict contextual next sentences.',
    tech: 'Python, Transformers, Hugging Face',
  },
];

const Projects = () => {
  return (
    <section className="p-10 bg-white dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform"
          >
            <h3 className="text-2xl font-semibold text-blue-600 dark:text-yellow-400">{proj.title}</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{proj.desc}</p>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">Tech: {proj.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

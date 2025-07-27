import React from 'react';

const education = [
  {
    institution: 'VIT Chennai',
    course: 'B.Tech in Computer Science',
    year: '2023 – 2027',
  },
  {
    institution: 'DPS Digboi, Assam',
    course: 'CBSE 12th Grade',
    year: '2023',
  },
];

const Education = () => (
  <section className="p-10 bg-gray-50 dark:bg-gray-800">
    <h2 className="text-4xl font-bold text-center mb-10">Education</h2>
    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {education.map((edu, idx) => (
        <div key={idx} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border dark:border-gray-700">
          <h3 className="text-xl font-semibold text-blue-600 dark:text-yellow-400">{edu.institution}</h3>
          <p className="text-gray-700 dark:text-gray-300">{edu.course}</p>
          <p className="text-sm text-gray-500">{edu.year}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Education;

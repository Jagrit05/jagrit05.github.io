import React from 'react';

const experiences = [
  {
    role: 'Core Team Member',
    org: 'Data Science Club VIT Chennai',
    date: 'Aug 2024 – Aug 2025',
    desc: 'Contributed to frontend design and marketing strategies for the club’s technical events.',
  },
  {
    role: 'Hackathon Participant',
    org: 'Scribblepad Hackathon',
    date: 'Oct 2024',
    desc: 'Collaborated on a frontend-focused web application during a 24-hour hackathon.',
  },
];

const Experience = () => (
  <section className="p-10 bg-white dark:bg-gray-900">
    <h2 className="text-4xl font-bold text-center mb-10">Experience</h2>
    <div className="space-y-6 max-w-4xl mx-auto">
      {experiences.map((exp, idx) => (
        <div key={idx} className="p-6 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md">
          <h3 className="text-2xl font-semibold">{exp.role}</h3>
          <p className="text-sm text-gray-500">{exp.org} | {exp.date}</p>
          <p className="mt-2 text-gray-700 dark:text-gray-300">{exp.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;

import React from 'react';

const Contact = () => (
  <section className="p-10 bg-gray-50 dark:bg-gray-800">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Feel free to reach out to me for collaborations or project inquiries.
      </p>
      <div className="space-y-2 text-lg text-gray-700 dark:text-gray-300">
        <p>📧 <a href="mailto:jagritkejriwal05@gmail.com" className="text-blue-600 dark:text-yellow-400">jagritkejriwal05@gmail.com</a></p>
        <p>📞 +91 9394658012</p>
        <p>🔗 <a href="https://linkedin.com/in/jagrit-kejriwal-176613321" className="text-blue-600 dark:text-yellow-400" target="_blank">LinkedIn</a></p>
        <p>💻 <a href="https://github.com/Jagrit05" className="text-blue-600 dark:text-yellow-400" target="_blank">GitHub</a></p>
      </div>
    </div>
  </section>
);

export default Contact;

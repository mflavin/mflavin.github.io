import continentalLogo from '@/images/continental_logo.jpg';
import qsrsoftLogo from '@/images/qsrsoft_logo.jpg';

export const workExperience = [
  {
    logo: qsrsoftLogo,
    company: 'QSRSoft',
    position: 'Full Stack Developer',
    duration: '2019 - Present',
    description:
      'Specializing in building scalable, maintainable web applications using Vue.js, JavaScript, and AWS technologies, I focus on delivering high-performance frontend applications while adhering to best practices, ensuring clean, readable, and efficient code.',
    responsibilities: [
      'Developed dynamic, responsive interfaces with Vue.js, adhering to best practices to create maintainable, scalable, and easy-to-read code.',
      'Built efficient JavaScript solutions for interactive features, ensuring seamless backend integration and focusing on performance and clarity.',
      'Designed and maintained serverless applications with AWS Lambda and API Gateway, handling authentication, user permissions, and error management through logging, alerts, and third-party services.',
      'Implemented robust error handling systems, including automated logging and alerting, to monitor application performance and enable rapid issue resolution.',
      'Developed Express.js servers on AWS AppRunner, applying the MVC design pattern to keep code modular, maintainable, and scalable.',
      'Wrote comprehensive tests and set up CI/CD pipelines to ensure code quality and streamline deployment, delivering stable and production-ready applications.',
    ],
  },
  {
    logo: continentalLogo,
    company: 'Continental Automotive',
    position: 'Software Developer Intern',
    duration: '2018 - 2018',
    description:
      'During my internship, I gained hands-on experience developing internal web applications. I contributed to an expense tracking internal tool, which automated data entry for sales/billing records, database updates, and triggered email notifications.',
    responsibilities: [
      'Used PHP to send automated emails and interact with the database.',
      'Managed data integrity and storage with phpMyAdmin.',
      'Implemented automated processes for data entry, updates, and email notifications.',
    ],
  },
];

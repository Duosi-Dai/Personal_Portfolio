interface WorkExperience {
  jobTitle: string;
  companyName: string;
  duration: string;
  responsibilities: string[];
  technologies: string[];
}

const workExperiences: WorkExperience[] = [
  {
    jobTitle: 'Frontend Web Developer',
    companyName: 'THS Armada',
    duration: 'Apr 2024 - Present (6 mos)',
    responsibilities: ['Construct and maintain current Armada Website'],
    technologies: ['React', 'TypeScript', 'Git', 'Tailwind CSS'],
  },
  {
    jobTitle: 'Store Management & User Experience Design',
    companyName: 'Oolong Tea House Sweden',
    duration: 'Feb 2020 - Apr 2021 (1yr 3 mos)',
    responsibilities: ['Store management', 'UX design for Oolong new app'],
    technologies: ['UX design', 'Leadership', 'Social Media Advertising', 'Quick learning'],
  },
  {
    jobTitle: 'Teaching Assistant',
    companyName: 'Ruiqing Chinese School',
    duration: 'Jan 2019 - May 2019 (5 mos)',
    responsibilities: ['Chinese teaching', 'Class mentor'],
    technologies: ['Teaching', 'Coaching', 'Leadership'],
  }
];

interface WorkExContentProps {
  jobIndex: number;
}

export const WorkExContent: React.FC<WorkExContentProps> = ({ jobIndex }) => {
  const experience = workExperiences[jobIndex];

  return (
    
    <div className="workExs__content--active">
      <h2 className="workExs__header">{experience.jobTitle}</h2>
      <p><strong>Company:</strong> {experience.companyName}</p>
      <p><strong>Duration:</strong> {experience.duration}</p>
      <p><strong>Responsibilities:</strong></p>
      <ul>
        {experience.responsibilities.map((responsibility, i) => (
          <li key={i}>{responsibility}</li>
        ))}
      </ul>
      <p><strong>Technologies/Skills Used:</strong></p>
      <ul>
        {experience.technologies.map((tech, i) => (
          <li key={i}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

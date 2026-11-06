// Unified Publications Data - Replace with your own publications
// Each publication can be a preprint or a conference/journal paper.
// Use isSelected: true to feature it on the homepage and CV.
const publications = [

];

// Helper functions to filter publications
const getPreprints = () => publications.filter(pub => pub.isPreprint);
const getSelectedPreprints = () => publications.filter(pub => pub.isPreprint && pub.isSelected);
const getPublications = () => publications.filter(pub => !pub.isPreprint);
const getSelectedPublications = () => publications.filter(pub => !pub.isPreprint && pub.isSelected);
const getAllPublications = () => publications.filter(pub => !pub.isPreprint);

// Legacy variables for backward compatibility
const preprints = getSelectedPreprints();
const selectedPublications = getSelectedPublications();
const fullPublications = getAllPublications();

// Projects Data - Replace with your own projects
const projects = [
 
];

// Helper functions to filter projects
const getSelectedProjects = () => projects.filter(project => project.isSelected);
const getAllProjects = () => projects;

// Research Experience Data - Replace with your own experience
const researchExperience = [
  {
    period: "Month YYYY - Month YYYY",
    institution: "Your Institution Name",
    mentor: "Prof. Mentor Name",
    description: "Brief description of your research work and achievements."
  }
];

// Teaching Data - Replace with your own teaching experience
const teaching = [
  "Teaching Assistant, Institution, Course Name, Semester YYYY, with Prof. Name"
];

// Academic Services Data - Replace with your own services
const academicServices = [
  "Reviewer: Conference YYYY",
  "Volunteer: Conference YYYY"
];

// Talks Data - Replace with your own talks
const talks = [
  {
    title: "Your Talk Title",
    venue: "Venue Name",
    date: "Mon DD, YYYY",
    attachments: [
      { text: "Slides", url: "files/your-talk/slides.pdf" }
    ]
  }
];

// Honors Data - Replace with your own honors and awards
const honors = [
  "Your Award Name, Institution, Month YYYY"
];

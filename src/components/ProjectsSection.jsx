import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Hoobank",
    description: "A beautiful landing page",
    image: "/projects/hoobank.png",
    tags: ["React", "Tailwind", "Responsive"],
    demoUrl: "https://hoobank-project-rose.vercel.app/",
    githubUrl: "https://github.com/MhamdiBahaeEddine/hoobank-project",
  },
  {
    id: 2,
    title: "Food Website",
    description: "A modern and beautiful food website",
    image: "/projects/foodwebsite.png",
    tags: ["HTML", "CSS", "Javascript", "Responsive"],
    demoUrl: "https://mhamdibahaeeddine.github.io/food-website/",
    githubUrl: "https://github.com/MhamdiBahaeEddine/food-website",
  },
  {
    id: 3,
    title: "Movie land",
    description: "A movie page showcasing posters and details",
    image: "/projects/movieland.png",
    tags: ["React", "Api", "Responsive"],
    demoUrl: "https://movie-land-one-orcin.vercel.app/",
    githubUrl: "https://github.com/MhamdiBahaeEddine/movie-land",
  },
  {
    id: 4,
    title: "Cyborg",
    description: "A stunning landing page",
    image: "/projects/cyborg.png",
    tags: ["React", "Tailwind", "Javascript", "Responsive"],
    demoUrl: "https://cyborg-rosy.vercel.app/",
    githubUrl: "https://github.com/MhamdiBahaeEddine/cyborg",
  },
  {
    id: 5,
    title: "Products Template",
    description: "A beautiful products template with modern design and settings",
    image: "/projects/productstemplate.png",
    tags: ["HTML", "CSS", "Javascript"],
    demoUrl: "https://mhamdibahaeeddine.github.io/products-template/",
    githubUrl: "https://github.com/MhamdiBahaeEddine/products-template",
  },
  {
    id: 6,
    title: "Food template",
    description: "A small food template",
    image: "/projects/foodtemplate.png",
    tags: ["HTML", "CSS", "Javascript", "Responsive"],
    demoUrl: "https://mhamdibahaeeddine.github.io/food-template/",
    githubUrl: "https://github.com/MhamdiBahaeEddine/food-template",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to details, performance and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full border bg-primary/20 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* <div className="group  rounded-lg overflow-hidden shadow-xs card-hover">
            <div className="h-48 overflow-hidden">
              <h1 className="text-2xl w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 flex justify-center items-center">
                Coming Soon...
              </h1>
            </div>
          </div> */}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center m-auto gap-2"
            target="_blank"
            href="https://github.com/MhamdiBahaeEddine"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Eatoos -Swiggy Clone",
    description:
      "Developed an online food ordering platform that allows users to browse menus, place orders, and receive food delivery to their doorstep.",
    image: "https://ag.purdue.edu/news/2024/10/_media/sept-cfi-banner72.jpg",
    tags: [
      "React",
      "Jest",
      "Parcel bundler",
      "Swiggy API",
      "TailwindCSS",
    ],
    demoUrl: "",
    githubUrl: "https://github.com/ISWARYA-hash8/Eatoos-From-cravings-to-comfort-Swiggy-clone-",
  },
  {
    id: 2,
    title: "Chit-Chat",
    description:
      "Built a real-time chat application using the MERN stack (MongoDB, Express.js, React.js, Node.js) enabling users to register, log in, and chat instantly.",
    image: "https://i.ytimg.com/vi/IP3CKkoVMlY/hqdefault.jpg",
    tags: ["React", "NodeJS", "ExpressJS", "Mongodb","Socket.io"],
    demoUrl: "#",
    githubUrl: "https://github.com/ISWARYA-hash8/ChatApp",
  },
  
];

export const ProjectsSection = () => {
  return (
    <section id="projects" data-aos="fade-up" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
         Take a walkthrough of my featured projects below
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              data-aos="flip-left"
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col h-full"
            >
              <div className="h-45 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col h-full">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span
                      key={key}
                      className="px-2 py-1 text-xs font-medium rounded-full border border-primary/30 bg-primary/20 text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-auto">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={25} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={25} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/ISWARYA-hash8"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

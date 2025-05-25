import { Brain, Code, Layout } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" data-aos="fade-up" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* about */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>

            <p className="text-muted-foreground">
              I am driven by a passion for solving complex problems through elegant and efficient solutions. Committed to continuous learning, I actively stay up to date with emerging technologies and best practices to deliver forward-thinking, scalable web solutions.
            </p>

          

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="https://drive.google.com/file/d/1gFuaXl1b_4dRKhOqPMR20EhwH8KEoUIU/view?usp=drive_link"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* skills */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">
                    Full Stack Developement
                  </h4>
                  <p className="text-muted-foreground">
                    Developing robust, scalable web applications with the MERN stack — from architecting efficient APIs to building dynamic, user-centric frontends.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Layout className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Frontend Design</h4>
                  <p className="text-muted-foreground">
                    Designing clean, responsive, and accessible interfaces using React, with a strong emphasis on performance, usability, and seamless user experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Problem Solving</h4>
                  <p className="text-muted-foreground">
                    Approaching complex challenges with strategic thinking and optimized code, leveraging data structures and algorithms to create practical, real-world solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

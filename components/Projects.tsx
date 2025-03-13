import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Square Results",
    image: "./images/square-results.jpg",
    link: "https://sqr-website.vercel.app",
  },
  {
    title: "Aqua Paths",
    image: "./images/aqua-paths.jpg",
    link: "https://github.com/KarthikGowdaRamakrishna/AquaPaths",
  },
  {
    title: "GPT-2 NLP Model",
    image: "./public/images/gpt2.jpg",
    link: "https://github.com/KarthikGowdaRamakrishna/Attention-is-all-you-need-Paper-buiding-GPT-2",
  },
  {
    title: "Cloud Deployment Automation",
    image: "./images/cloud-deployment.jpg",
    link: "https://github.com/KarthikGowdaRamakrishna/webapp_fork",
  },
  {
    title: "Web Crawler - Boston Real Estate",
    image: "./images/web-crawler.jpg",
    link: "https://github.com/KarthikGowdaRamakrishna/Web_Crawler_Boston_Real_Estate",
  },
  {
    title: "Dynamic Cab Fare Pricing",
    image: "../public/images/dynamic-cab-pricing.jpg",
    link: "https://github.com/KarthikGowdaRamakrishna/Dynamic-Cab-Fair-Pricing-",
  },
  {
    title: "Drowsiness Detection",
    image: "../public/images/drowsiness-detection.jpg",
    link: "https://github.com/KarthikGowdaRamakrishna/Drowsiness-Detection",
  },
  {
    title: "Azure Data Engineering",
    image: "../public/images/azure-data-engineering.jpg",
    link: "https://github.com/KarthikGowdaRamakrishna/Data-Engineering-with-Azure-Data-Factory-Data-Lake-Gen-2-Synapse-Analytics-and-Azure-Databricks",
  },
];

const Projects = () => {
  return (
    <section className="mt-10 sm:mt-14 max-w-3xl mx-auto px-4">
      <h2 className="mb-5 text-lg font-semibold text-gray-800 dark:text-neutral-200">
        Projects
      </h2>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {projects.map((project, index) => (
          <Link key={index} href={project.link} target="_blank" className="group block relative overflow-hidden rounded-lg">
            <div className="bg-gray-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center w-full h-40">
              <Image
                className="object-cover w-full h-full rounded-lg transition-transform duration-300 group-hover:scale-105"
                src={project.image}
                alt={project.title}
                width={180}
                height={180}
                priority
              />
              {/* View Button - Appears on Hover */}
              <div className="absolute bottom-2 end-2 opacity-0 group-hover:opacity-100 transition">
                <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                  <svg className="shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                  <span className="text-xs">View</span>
                </div>
              </div>
            </div>
            <div className="text-center mt-2 text-sm text-gray-700 dark:text-neutral-300">
              {project.title}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;

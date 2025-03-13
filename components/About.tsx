import Link from "next/link";

const About = () => {
  return (
    <section className="mt-8 max-w-2xl mx-auto">
      {/* About Text */}
      <div>
        <p className="text-sm text-gray-600 dark:text-neutral-400">
          I’m a <strong>software engineer</strong> who loves <strong>building things that come to life</strong>. 
          Whether it's designing scalable backend systems, setting up cloud infrastructure, 
          or optimizing real-time data processing, I find a sense of purpose in seeing a product <strong>go live and impact users</strong>.
        </p>

        <p className="mt-3 text-sm text-gray-600 dark:text-neutral-400">
          My experience spans <strong>frontend, backend engineering and DevOps</strong>, working with 
          React, NextJS, Spring Boot, FastAPI, AWS and Kubernetes. At <strong>Capgemini</strong>, I worked on <strong>real-time monitoring, observability, and CI/CD pipelines</strong>, 
          and at <strong>Midtek</strong>, I developed <strong>scalable backend services and UI for pricing analytics and logistics.</strong>
        </p>

        <p className="mt-3 text-sm text-gray-600 dark:text-neutral-400">
          Honestly, as long as I’m <strong>coding, learning new skills, and solving meaningful problems</strong>, I’m a happy camper. 
          I enjoy the process of <strong>bringing ideas to life</strong> and <strong>continuously improving my craft</strong>.
        </p>
      </div>

      {/* Contact Details */}
      <ul className="mt-5 flex flex-col gap-y-3">
        {/* Email */}
        <li className="flex items-center gap-x-2.5">
          <svg className="shrink-0 size-4 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          <Link className="text-[13px] text-gray-500 underline hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-400" href="mailto:ramakrishna.ka@northeastern.edu">
            ramakrishna.ka@northeastern.edu
          </Link>
        </li>

        {/* GitHub */}
        <li className="flex items-center gap-x-2.5">
          <svg className="shrink-0 size-4 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M14.1881 10.1624L22.7504 0H20.7214L13.2868 8.82385L7.34878 0H0.5L9.47944 13.3432L0.5 24H2.5291L10.3802 14.6817L16.6512 24H23.5L14.1881 10.1624ZM11.409 13.4608L3.26021 1.55962H6.37679L20.7224 22.5113H17.6058L11.409 13.4613V13.4608Z" fill="currentColor" />
          </svg>
          <Link className="text-[13px] text-gray-500 underline hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-400" href="https://github.com/KarthikGowdaRamakrishna" target="_blank">
            @KarthikGowdaRamakrishna
          </Link>
        </li>

        {/* LinkedIn */}
        <li className="flex items-center gap-x-2.5">
          <svg className="shrink-0 size-4 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
            <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
            <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
          </svg>
          <Link className="text-[13px] text-gray-500 underline hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-400" href="https://www.linkedin.com/in/karthik-gowda-r-45ab8b1a2/" target="_blank">
            Karthik Gowda LinkedIn
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default About;

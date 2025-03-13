const WorkExperience = () => {
    return (
      <section className="mt-10 sm:mt-14 max-w-2xl mx-auto">
        <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
          Work Experience
        </h2>
  
        {/* Timeline */}
        <div>
          {/* Capgemini Experience */}
          <div className="group relative flex gap-x-5">
            {/* Icon */}
            <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
              <div className="relative z-10 size-6 flex justify-center items-center">
                <svg
                  className="shrink-0 size-6 text-gray-600 dark:text-neutral-400"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 12h.01" />
                  <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                  <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                  <rect width="20" height="14" x="2" y="6" rx="2" />
                </svg>
              </div>
            </div>
            {/* End Icon */}
  
            {/* Right Content */}
            <div className="grow pb-8 group-last:pb-0">
              <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                2021 - 2023
              </h3>
              <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
                Senior Software Engineer at Capgemini
              </p>
  
              <ul className="list-disc ms-6 mt-3 space-y-1.5">
                <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                  Implemented <strong>140+ RESTful APIs</strong> using <strong>Spring Boot</strong> &amp; <strong>Python FastAPI</strong>, 
                  enabling rapid prototyping and production ready microservices handling <strong>1M+ daily transactions</strong>.
                </li>
                <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                  Created an <strong>end-to-end observability stack</strong> with <strong>Prometheus, Grafana, AWS CloudWatch</strong> for 
                  distributed microservices, enhancing visibility &amp; reducing MTTR by 50%.
                </li>
                <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                  Automated <strong>CI/CD pipelines</strong> using <strong>Jenkins, Docker, and Kubernetes (EKS)</strong>, 
                  cutting average deployment time from 20 minutes to under 6 minutes.
                </li>
                <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                  Engineered a <strong>hybrid RSA+AES encryption</strong> strategy to secure configuration files and sensitive data, 
                  reducing security risks by 50%.
                </li>
              </ul>
            </div>
          </div>
          {/* End Capgemini Experience */}
  
          {/* Midtek Experience */}
          <div className="group relative flex gap-x-5">
            {/* Icon */}
            <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
              <div className="relative z-10 size-6 flex justify-center items-center">
                <svg
                  className="shrink-0 size-6 text-gray-600 dark:text-neutral-400"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 12h.01" />
                  <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                  <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                  <rect width="20" height="14" x="2" y="6" rx="2" />
                </svg>
              </div>
            </div>
            {/* End Icon */}
  
            {/* Right Content */}
            <div className="grow pb-8 group-last:pb-0">
              <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                2020 - 2021
              </h3>
              <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
                Systems Engineer at Midtek Solutions
              </p>
  
              <ul className="list-disc ms-6 mt-3 space-y-1.5">
                <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                  Built a <strong>Node.js-based pricing analytics system</strong>, integrating 
                  <strong> Amazon's Selling Partner API</strong> to dynamically reflect real-time material prices.
                </li>
                <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                  Led <strong>UI/UX research</strong> for a <strong>reverse logistics portal</strong>, increasing user 
                  satisfaction by 35% and boosting portal engagement by 25%.
                </li>
                <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                  Developed <strong>serverless microservices</strong> on <strong>AWS Lambda</strong> &amp; 
                  <strong> API Gateway</strong>, reducing backend latency by 45% and ensuring scalability.
                </li>
              </ul>
            </div>
          </div>
          {/* End Midtek Experience */}
        </div>
        {/* End Timeline */}
      </section>
    );
  };
  
  export default WorkExperience;
  
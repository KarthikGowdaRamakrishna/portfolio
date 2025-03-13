import { FaJs, FaPython, FaJava, FaReact, FaDocker } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiSpringboot, SiFastapi, SiKubernetes, SiJenkins, SiTerraform, SiPrometheus, SiGrafana, SiMysql, SiPostgresql, SiRedis, SiLangchain, SiAwsamplify } from "react-icons/si";

const Skills = () => {
  return (
    <section className="mt-10 sm:mt-14 max-w-3xl mx-auto px-4">
      <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
        <div>
          <h3 className="text-gray-500 dark:text-neutral-500">Programming Languages:</h3>
          <p className="text-gray-800 dark:text-neutral-200 flex gap-2 flex-wrap">
            <FaJs /> JavaScript (Node.js), <SiTypescript /> TypeScript, <FaPython /> Python, <FaJava /> Java
          </p>
        </div>

        <div>
          <h3 className="text-gray-500 dark:text-neutral-500">Backend & Cloud:</h3>
          <p className="text-gray-800 dark:text-neutral-200 flex gap-2 flex-wrap">
            <SiNextdotjs /> Node.js & Express, <SiSpringboot /> Spring Boot, <SiFastapi /> FastAPI, <SiAwsamplify /> AWS (Lambda, API Gateway, EC2, S3), Azure (Data Factory, Databricks), <SiKubernetes /> Kubernetes & Docker
          </p>
        </div>

        <div>
          <h3 className="text-gray-500 dark:text-neutral-500">Frontend Development:</h3>
          <p className="text-gray-800 dark:text-neutral-200 flex gap-2 flex-wrap">
            <FaReact /> React & <SiNextdotjs /> Next.js, <SiTailwindcss /> Tailwind CSS
          </p>
        </div>

        <div>
          <h3 className="text-gray-500 dark:text-neutral-500">DevOps & CI/CD:</h3>
          <p className="text-gray-800 dark:text-neutral-200 flex gap-2 flex-wrap">
            <SiJenkins /> Jenkins & GitHub Actions, <SiTerraform /> Terraform & Helm, <SiPrometheus /> Prometheus & <SiGrafana /> Grafana (Observability)
          </p>
        </div>

        <div>
          <h3 className="text-gray-500 dark:text-neutral-500">Data Engineering & ML:</h3>
          <p className="text-gray-800 dark:text-neutral-200 flex gap-2 flex-wrap">
            <SiRedis /> Kafka & Redis, <SiMysql /> MySQL & <SiPostgresql /> PostgreSQL, <SiLangchain /> LangChain & GPT APIs
          </p>
        </div>

        <div>
          <h3 className="text-gray-500 dark:text-neutral-500">Soft Skills:</h3>
          <p className="text-gray-800 dark:text-neutral-200">
            Problem-Solving, System Design Thinking, Collaboration & Leadership
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;

export const SKILLS = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Angular",
  "Vue.js",
  "Node.js",
  "Express.js",
  "Next.js",
  "Nuxt.js",
  "PHP",
  "Laravel",
  "Python",
  "Django",
  "Flask",
  "Ruby on Rails",
  "Java",
  "Spring Boot",
  ".NET Core",
  "SQL",
  "NoSQL",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "RESTful APIs",
  "GraphQL",
  "WebSockets",
  "Docker",
  "Kubernetes",
];

export const DIFFICULTIES = ["Easy", "Medium", "Hard"];

export const QUESTIONS = [
  {
    question:
      "Explain the concept of Docker containers and their advantages over traditional virtual machines.",
    answer:
      "Docker containers are lightweight, standalone, executable packages of software that include everything needed to run an application: code, runtime, libraries, tools, and settings. They provide advantages over traditional virtual machines by sharing the host system's kernel, enabling faster startup times, lower resource usage, and easier scaling and deployment.",
  },
  {
    question: "Describe the Docker image layering mechanism and its benefits.",
    answer:
      "Docker images use a layered filesystem that allows for efficient storage and transfer of images. Each layer represents an instruction in the Dockerfile, and Docker caches layers to optimize build times. This mechanism enables versioning, reusability, and faster deployments, as only changed layers need to be rebuilt.",
  },
  {
    question:
      "Discuss the role of Docker Compose in managing multi-container Docker applications.",
    answer:
      "Docker Compose is a tool for defining and running multi-container Docker applications. It uses a YAML file to configure the application's services, networks, and volumes. Compose simplifies the process of orchestrating multiple Docker containers, enabling developers to define complex environments, link services, and manage dependencies easily.",
  },
  {
    question:
      "Explain the difference between Docker containers and Docker images.",
    answer:
      "Docker images are read-only templates used to create Docker containers. They include all dependencies and configuration required to run an application. Docker containers are instantiated from Docker images and are runnable instances of an image. They can be started, stopped, deleted, and their state can be changed.",
  },
  {
    question:
      "Describe the lifecycle of a Docker container from creation to deletion.",
    answer:
      "The lifecycle of a Docker container begins with the creation of a container from an image using the 'docker run' command. During its lifetime, a container can be started, stopped, restarted, paused, and deleted using various Docker commands. Containers can also be inspected, logged, and their state managed.",
  },
  {
    question: "Explain how Docker Swarm differs from Docker Compose.",
    answer:
      "Docker Swarm is Docker's native clustering and orchestration tool for managing a cluster of Docker nodes. It provides features like high availability, scaling, and load balancing across multiple Docker hosts. Docker Compose, on the other hand, is used for defining and running multi-container Docker applications on a single host.",
  },
  {
    question:
      "Discuss the concept of Docker volumes and their importance in persistent data storage.",
    answer:
      "Docker volumes are directories or files stored outside the container's filesystem, allowing data to persist beyond the container's lifecycle. They are used for sharing data between containers, providing backup and restoration capabilities, and supporting stateful applications. Docker volumes are essential for managing persistent data in Dockerized environments.",
  },
  {
    question:
      "Explain how Docker handles networking between containers and with the host system.",
    answer:
      "Docker uses a networking model that allows containers to communicate with each other and the outside world. Each container gets its own IP address and can be connected to networks created by Docker. Docker supports various network drivers for different use cases, such as bridge networks for connecting containers on the same host.",
  },
  {
    question:
      "Describe the security considerations when using Docker containers.",
    answer:
      "Security in Docker involves several aspects, including image security (ensuring images are from trusted sources and free of vulnerabilities), container isolation (using namespaces and control groups), network security (configuring firewall rules and network policies), and host security (securing Docker daemon and host OS). It's essential to follow best practices to mitigate risks.",
  },
  {
    question:
      "Discuss the benefits and challenges of using Docker in a microservices architecture.",
    answer:
      "Docker facilitates the deployment and management of microservices by encapsulating each service in a container. It improves scalability, deployment speed, and environment consistency. Challenges include managing complex networking, orchestration, and monitoring across multiple containers. Docker tools like Docker Swarm and Kubernetes address these challenges.",
  },
  {
    question:
      "Explain how Docker can be integrated into a continuous integration/continuous deployment (CI/CD) pipeline.",
    answer:
      "Docker is integral to CI/CD pipelines by enabling consistent environments for testing, staging, and production. Developers can build Docker images as part of the build process, push them to registries, and deploy them to various environments using automation tools like Jenkins or GitLab CI. Docker containers ensure applications behave consistently across different stages of the pipeline.",
  },
  {
    question:
      "Describe the process of scaling Docker containers horizontally and vertically.",
    answer:
      "Horizontal scaling in Docker involves running multiple instances of a containerized application across different Docker hosts or nodes, managed by tools like Docker Swarm or Kubernetes. Vertical scaling involves increasing the resources (CPU, memory) allocated to a single container. Both approaches help meet performance demands and improve application availability.",
  },
];

const portfolioProjects = [
  {
    id: 1,
    title: "Linux Gobang (Five-in-a-Row)",
    description: "A command-line Gobang (Five-in-a-Row) game designed for the Linux environment. It's written in C++ and utilizes the ncurses library to create a text-based graphical interface in the terminal. The game supports player vs. player and player vs. AI modes, along with features like undoing moves, resigning, and saving/loading game progress.",
    githubLink: "https://github.com/gngnggnn1/LinuxGobang"
  },
  {
    id: 2,
    title: "Full-Stack E-commerce Platform",
    description: "A comprehensive e-commerce platform built with a Spring Boot backend and a Vue.js frontend. The backend integrates MySQL for data storage, Mybatis-Plus for ORM, Redis for caching, RabbitMQ for asynchronous messaging, Elasticsearch for product search, and Spring Security with JWT for authentication. Features include user registration/login, product browsing, shopping cart, order management, and an admin panel for managing products, orders, and users.",
    githubLink: "https://github.com/gngnggnn1/ecommercePlatform"
  },
  {
    id: 3,
    title: "Digital Forensics Investigation (ECE 570 Project)",
    description: "Conducted a forensic analysis of a simulated blackmailing case involving Windows and Android disk images. Identified and recovered key digital artifacts, including email correspondence and evidence of anti-forensic techniques (e.g., intentional folder renaming). Analyzed evidence to establish a timeline of events and attribute malicious actions to a primary suspect. Documented findings in a formal forensic report suitable for supporting a law enforcement investigation."
  },
  {
    id: 4,
    title: "Phishing Email Detection Using Machine Learning (Capstone Project)",
    description: "Developed and evaluated a high-performance phishing detection system, achieving 98.02% cross-validation accuracy on a large-scale dataset of over 82,000 emails. Systematically compared the performance of six distinct machine learning models, including Naive Bayes, Logistic Regression, and Random Forest, to identify the optimal architecture for the task. Implemented, trained, and tuned the final Deep Neural Network (DNN), which demonstrated superior performance and generalization."
  },
  {
    id: 5,
    title: "Network Penetration Testing & Defense (ECE 567 Project)",
    description: "Conducted penetration testing, from vulnerability scanning (Nmap, Nessus) and exploitation (Metasploit) to data exfiltration. Designed and implemented custom Snort IDS rules to detect attack patterns based on network traffic analysis. Applied IPTables firewall rules to block active exploits while minimizing false positives."
  },
  {
    id: 6,
    title: "Virtualized Zero-Trust Network Security (ECE 519C Project)",
    description: "Designed and configured a virtualized zero-trust network using Palo Alto NGFW and Cisco ASA for a simulated corporate environment. Implemented firewall rules, HTTPS inspection, URL filtering, antivirus scanning, and PAN-OS IPS to secure inter-segment traffic. Simulated attacks using Metasploit to test defenses against SMB exploits, ensuring secure communication."
  },
  {
    id: 7,
    title: "Analysis of a Dataflow-Based Hardware Security Architecture (ECE 548 Project)",
    description: "Analyzed the 2018 IEEE Access paper, 'Multi-Core Dataflow Design and Implementation of Secure Hash Algorithm-3' by Ali Alzahrani and Fayez Gebali. Concluded these complex topics into a formal academic report, explaining the design's methodology and its advantages over traditional control-flow systems."
  },
  {
    id: 8,
    title: "Modeling and Optimization of a Dynamic Queuing System (ECE 463 Project)",
    description: "Modeled a real-world customer service queue as a Markov Decision Process to analyze the trade-offs between service speed and revenue. Formulated an optimization problem to determine the optimal policy (menu switch point) that maximizes the system's total expected revenue under stochastic arrivals. Systematically solved the state equations for different policies and identified the optimal switching strategy through quantitative analysis."
  },
  {
    id: 9,
    title: "Portfolio Website (React + Oracle Cloud + CI/CD Pipeline)",
    description: "Designed and deployed a personal portfolio site using React, hosted on Oracle Cloud, using GitHub for version control, and secured the site using Cloudflare DNS and proxy. Configured a CI/CD pipeline with GitHub Actions for automated testing and deployment to Oracle Cloud Infrastructure, showcasing hands-on DevOps skills."
  },
];

export default portfolioProjects;

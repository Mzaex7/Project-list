const projects = [
    {
        id: "brewref",
        title: "BrewRef — Specialty Coffee App",
        description: "Cross-platform mobile app for espresso brew logging, analysis, and AI-powered optimization. Built with Expo, React Native, and TypeScript following an 'Industrial Zen' design.",
        tags: ["Expo", "React Native", "TypeScript", "AI", "Mobile"],
        github: "https://github.com/Mzaex7/Coffee-app",
        learnMore: true,
        detailedDescription: "BrewRef digitizes the entire espresso brewing workflow: recipe capture (Dose, Yield, Time, Temp, Grind), sensory profiling via a custom Taste Wheel, equipment management for beans and grinders, and a KI-powered Brew Doctor (Gemini) that generates structured optimization advice. The app follows a three-layer architecture (Presentation → Domain → Data) with Singleton, Builder, Adapter, and Factory patterns. It runs offline-first on iOS, Android, and Web from a single codebase.",
        highlights: [
            "Three-layer architecture with Repository, Singleton, Builder, Adapter, and Factory patterns",
            "AI-powered Brew Doctor using Google Gemini for contextual brew analysis",
            "Custom UI components: SVG Taste Wheel, snap-scroll Grind Selector, animated Cup-Filling loader",
            "Offline-first with expo-sqlite (native) and localStorage adapter (web)",
            "Industrial Zen design system via Shopify Restyle with Inter & JetBrains Mono typography"
        ]
    },
    {
        id: "social-networks-analysis",
        title: "Social Networks Analysis",
        description: "Data cleaning, visualization, and scientific writing using R. Analysis of complex network structures.",
        tags: ["R", "Data Viz", "Science"],
        learnMore: true,
        github: "https://github.com/Mzaex7",
        detailedDescription: "In this project, a comprehensive analysis of social network structures was conducted using R. The focus was on cleaning raw data, visualizing complex graphs, and statistically evaluating network metrics.",
        highlights: [
            "Implementation of community detection algorithms",
            "Visualization with ggplot2 and igraph",
            "Calculation of centrality measures (Betweenness, Eigenvector)"
        ]
    },
    {
        id: "rotten-tomatoes-clone",
        title: "Rotten Tomatoes Clone",
        description: "Development of a complete database architecture for review aggregation. Introduction to relational databases and SQL programming.",
        tags: ["SQL", "DB Architecture", "Relational DB"],
        github: "https://github.com/Mzaex7",
        learnMore: true,
        detailedDescription: "Development of a full clone of the Rotten Tomatoes database structure. The goal was to deeply understand relational database concepts and write performant SQL queries.",
        highlights: [
            "ER modeling of complex relationships between movies, critics, and users",
            "Optimization of SQL queries for fast aggregation",
            "Implementation of stored procedures and triggers"
        ]
    },
    {
        id: "markzeitler-website",
        title: "Corporate Website markzeitler.de",
        description: "Development of a modern web presence for a company. Implemented with React.",
        tags: ["React", "Web Dev", "Frontend"],
        learnMore: true,
        detailedDescription: "Conception and development of a responsive corporate website. Focus on SEO, performance, and modern design.",
        highlights: [
            "Responsive design with CSS Grid and Flexbox",
            "SEO optimization for better visibility",
            "Integration of a contact form with email service"
        ]
    },
    {
        id: "umwelt-lernplattform",
        title: "Environmental Learning Platform",
        description: "Case study: Building an interactive learning platform on environmental protection. Agile project management (Scrum), project leadership, and development with Next.js.",
        tags: ["Next.js", "Scrum", "Agile", "Fullstack"],
        github: "https://github.com/Mzaex7",
        learnMore: true,
        detailedDescription: "As project lead of an agile team, a learning platform was developed utilizing gamification elements to promote environmental awareness.",
        highlights: [
            "Team leadership using Scrum methodology",
            "Fullstack development with Next.js and Node.js",
            "Implementation of interactive quizzes"
        ]
    },
    {
        id: "data-analysis-viz",
        title: "Data Analysis & Visualization",
        description: "Data analysis project including scientific paper and creation of an interactive dashboard with Streamlit and Python.",
        tags: ["Python", "Streamlit", "Data Science"],
        github: "https://github.com/Mzaex7",
        learnMore: true,
        detailedDescription: "End-to-end data science project: From data collection and analysis to presentation in an interactive dashboard.",
        highlights: [
            "Data cleaning with Pandas",
            "Interactive dashboard with Streamlit",
            "Exploratory Data Analysis (EDA)"
        ]
    },
    {
        id: "llm-benchmark",
        title: "LLM Benchmark Framework",
        description: "Framework for performance benchmarking of ML Inference Software (HPE, Ollama, BentoML, vLLM, Triton). Comparison of KPIs such as latency and evaluation.",
        tags: ["Python", "LLM", "AI", "Benchmarking"],
        learnMore: true,
        detailedDescription: "Development of an automated framework to objectively compare various LLM inference servers regarding latency, throughput, and resource utilization.",
        highlights: [
            "Comparison of vLLM, TGI, and Triton Server",
            "Automated report generation",
            "Integration with Grafana for real-time monitoring"
        ]
    },
    {
        id: "inference-dashboards",
        title: "Inference Performance Dashboards",
        description: "Creation of comprehensive monitoring dashboards to visualize inference performance with Grafana.",
        tags: ["Grafana", "Monitoring", "DevOps"],
        learnMore: true,
        detailedDescription: "Design and implementation of Grafana dashboards to monitor KPIs like tokens/s, request latency, and GPU utilization in real-time.",
        highlights: [
            "Prometheus Query Language (PromQL)",
            "Visualization of complex time series",
            "Alerting for performance bottlenecks"
        ]
    },
    {
        id: "digital-twin-robotics",
        title: "Digital Twin & Robotics",
        description: "Work with Nvidia Isaac Sim: Robot training and generation of synthetic data (Nvidia Cosmos). Deployment guides and use-case elaboration.",
        tags: ["Nvidia Isaac Sim", "Robotics", "SimTech"],
        learnMore: true,
        detailedDescription: "Research on Digital Twins for industrial robotics. Using Nvidia Isaac Sim for simulation and training of Reinforcement Learning agents.",
        highlights: [
            "Synthetic data generation for Computer Vision",
            "Sim-to-Real transfer tests",
            "Python scripting in Isaac Sim"
        ]
    },
    {
        id: "mcp-protocol",
        title: "Model Context Protocol (MCP)",
        description: "Elaboration and presentation of the Model Context Protocol (MCP) for standardizing AI contexts.",
        tags: ["MCP", "Research", "Presentation"],
        learnMore: true,
        detailedDescription: "Analysis and processing of the new Model Context Protocol to create standardized interfaces for LLM context.",
        highlights: [
            "Technical analysis of the specification",
            "Creation of example implementations",
            "Presentation of strategic importance"
        ]
    },
    {
        id: "pcai-analysis",
        title: "Competitor Analysis PCAI",
        description: "Comprehensive analysis of PCAI and partner offerings. Presentation of results to over 100 colleagues.",
        tags: ["Analysis", "Business Intelligence", "Strategy"],
        learnMore: true,
        detailedDescription: "Strategic analysis of the Private Cloud AI solutions market. Comparison of features, pricing, and go-to-market strategies.",
        highlights: [
            "Detailed feature matrix",
            "SWOT analysis of competitors",
            "Derivation of actionable recommendations"
        ]
    },
    {
        id: "data-catalog-eval",
        title: "Data Catalog Evaluation",
        description: "Analysis and evaluation of various Data Catalog tools for enterprise data management.",
        tags: ["Data Governance", "Tools", "Evaluation"],
        learnMore: true,
        detailedDescription: "Evaluation of leading Data Catalog tools (Alation, Amundsen, OpenMetadata) for deployment in an enterprise environment.",
        highlights: [
            "Creation of a criteria catalog",
            "Execution of Proof-of-Concepts (PoC)",
            "Setup & configuration of OpenMetadata"
        ]
    },
    {
        id: "scrabble-ai",
        title: "Scrabble AI",
        description: "AI Research Project: Programming an artificial intelligence for the game Scrabble in Python.",
        tags: ["Python", "Game AI", "Algorithms"],
        github: "https://github.com/Mzaex7",
        learnMore: true,
        detailedDescription: "Development of an AI capable of playing Scrabble at a high level. Implementation of efficient word search algorithms and strategic board evaluation.",
        highlights: [
            "DAWG (Directed Acyclic Word Graph) data structure",
            "Minimax-like strategy optimization",
            "Parallelization of move calculation"
        ]
    },
    {
        id: "formula-student-big-data",
        title: "Formula Student Big Data",
        description: "Conception and elaboration of a Big Data platform based on HDFS for the Formula Student Team.",
        tags: ["Big Data", "HDFS", "Architecture"],
        learnMore: true,
        detailedDescription: "Architecture of a scalable data platform for analyzing race car telemetry data. Utilization of the Hadoop ecosystem.",
        highlights: [
            "HDFS Cluster Setup",
            "Apache Spark for Batch Processing",
            "Real-time ingestion pipeline"
        ]
    },
    {
        id: "data-mgmt-workloads",
        title: "Data Management Workloads",
        description: "Comparison of analytical workloads: Parquet Scan, Pandas vs. DuckDB vs. Polars. Performance investigation.",
        tags: ["DuckDB", "Polars", "Pandas", "Benchmark"],
        learnMore: true,
        detailedDescription: "Benchmark study on the performance of modern DataFrame libraries and database engines on large datasets.",
        highlights: [
            "Reproducible benchmark setup",
            "Analysis of memory usage and execution time",
            "Comparison of Eager vs. Lazy Evaluation"
        ]
    },
    {
        id: "beer-xai",
        title: "Beer XAI Research",
        description: "Research project in Explainable AI (XAI) using SHAP values on the example of beer data.",
        tags: ["XAI", "SHAP", "Research", "ML"],
        learnMore: true,
        detailedDescription: "Application of Explainable AI methods (SHAP) to make predictions of an ML model for beer classification transparent.",
        highlights: [
            "Training of XGBoost models",
            "Calculation and visualization of SHAP values",
            "Interpretation of feature importance"
        ]
    }
];

export default projects;

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
        description: "Influence of competitive structures on Data Science salary levels — a Social Network Analysis using R (igraph, visNetwork, ggplot2).",
        tags: ["R", "igraph", "Network Analysis", "Data Viz", "Science"],
        learnMore: true,
        github: "https://github.com/Mzaex7",
        detailedDescription: "A scientific study investigating how a company's position and centrality within a competitive network influences salary structures for Data Science positions. Based on a Kaggle/Glassdoor dataset of 742 US job postings, a competition network was constructed (nodes = companies, edges = competitors) and analyzed using centrality metrics (Betweenness, Degree, Eigenvector) and community detection (Louvain algorithm). Key finding: Betweenness centrality — a company's role as a strategic intermediary — showed the strongest correlation with higher salaries, while industry affiliation (IT, Software) within central clusters was the most significant factor. Geographic hotspots like NYC and SF paid approx. $13.6k more on average.",
        highlights: [
            "Competition network built from Glassdoor data (742 job postings, 28 features)",
            "Centrality analysis: Betweenness, Degree, and Eigenvector centrality via igraph",
            "Community detection with the Louvain algorithm (79 clusters identified)",
            "Interactive network visualization with visNetwork",
            "Exploratory salary analysis across clusters, industries, and geographies"
        ]
    },
    {
        id: "rotten-tomatoes-clone",
        title: "Bitter Melons — Review Aggregation DB",
        description: "An independent alternative to Rotten Tomatoes: a BCNF-normalized database architecture for aggregating critic and user reviews without media-conglomerate conflicts of interest.",
        tags: ["SQL", "DB Architecture", "BCNF", "Stored Procedures"],
        github: "https://github.com/Mzaex7",
        learnMore: true,
        detailedDescription: "Bitter Melons is a database project designed as an independent, conflict-free alternative to Rotten Tomatoes. The system aggregates professional critic scores into a 'Sweetness Index' (equivalent to the Tomatometer) and verified user reviews into a 'Melon Meter' (audience score). The SQL database is fully normalized to BCNF, using Views for complex metric computation and Stored Procedures for administrative tasks such as UpdateUserReview. The project demonstrates end-to-end relational database design from ER modeling through query optimization.",
        highlights: [
            "BCNF-normalized relational schema for movies, critics, users, and reviews",
            "Sweetness Index: aggregated professional critic score (Tomatometer equivalent)",
            "Melon Meter: verified audience rating system",
            "Views for complex metric aggregation and Stored Procedures for admin workflows",
            "ER modeling and SQL query optimization"
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
        title: "Germany's Role in MotoGP",
        description: "Data visualization project analyzing Germany's performance in MotoGP motorcycle racing compared to dominant nations like Spain and Italy.",
        tags: ["Python", "Data Viz", "Streamlit", "Data Science"],
        github: "https://github.com/Mzaex7",
        learnMore: true,
        detailedDescription: "A data-driven analysis of Germany's role in MotoGP motorcycle racing. Despite fielding 53 riders historically, German riders achieve only a fraction of the success seen by Spain (118 riders) and Italy (130 riders). The study identifies key success factors: Spain and Italy dominate through higher rider counts and more home races (Spain with 4 circuits, Italy with 2 in the 2019 calendar). A detailed rider comparison highlights Marc Márquez (Spain) as an exceptional talent who dominates almost all season-based categories even against legends like Valentino Rossi. Results are presented via an interactive Streamlit dashboard and a scientific paper.",
        highlights: [
            "Comparative analysis of rider success rates across Germany, Spain, and Italy",
            "Identification of structural advantages: home races and rider pipeline depth",
            "Detailed rider comparison (Márquez vs. Rossi) across season-based metrics",
            "Interactive Streamlit dashboard for data exploration",
            "Scientific paper with data-driven conclusions"
        ]
    },
    {
        id: "llm-benchmark",
        title: "LLM Endpoint Benchmarking Suite",
        description: "A framework for benchmarking LLM inference endpoints with metrics like TTFT, TPOT, throughput, and latency. Supports parallel tests and OpenAI-compatible APIs.",
        tags: ["Python", "LLM", "AI", "Benchmarking"],
        learnMore: true,
        detailedDescription: "A comprehensive benchmarking framework designed to evaluate LLM inference endpoints across key performance metrics: Time to First Token (TTFT), Time Per Output Token (TPOT), end-to-end throughput, and request latency. The suite supports parallel test execution and any OpenAI-compatible endpoint, enabling objective comparisons between inference servers like HPE's PCAI, Ollama, BentoML, vLLM, and Triton. It ships with a curated test suite of 18 prompts across varying lengths and complexity levels, plus built-in visualization for result analysis.",
        highlights: [
            "Key metrics: TTFT, TPOT, throughput, and latency benchmarking",
            "18 curated prompts across varying complexity and length tiers",
            "Parallel test execution for concurrent load simulation",
            "Support for any OpenAI-compatible inference endpoint",
            "Built-in result visualization and automated reporting"
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
        title: "Semantic Feature Grouping for XAI",
        description: "Research paper: Semantically-Constrained Feature Grouping for Robust Explainable AI — addressing SHAP's limitations in correlated datasets using beer sensory data.",
        tags: ["XAI", "SHAP", "DSR", "Python", "Research", "LLM"],
        learnMore: true,
        detailedDescription: "A Design-Science-Research paper developing a Semantic-Grouped-SHAP approach that bridges the gap between mathematical faithfulness and practical actionability in Explainable AI. Standard SHAP assumes feature independence, which produces misleading explanations in domains with high multicollinearity — such as beer sensory evaluation, where attributes like fruitiness and sweetness are psychologically coupled. The paper extends GroupSegment-SHAP (GS-SHAP) by integrating domain knowledge via a semantic affinity matrix (constructed with LLM reasoning and vector embeddings) alongside statistical dependency (HSIC). A hyperparameter ω controls the trade-off between statistical and semantic grouping. Evaluation compares three variants — ungrouped SHAP, purely statistical grouping, and semantic-hybrid grouping — using coherence metrics and LLM-based expert evaluation. Co-authored with four colleagues, submitted February 2026.",
        highlights: [
            "Semantic-Grouped-SHAP: hybrid feature grouping combining HSIC statistical dependency with LLM-derived semantic affinity",
            "Addresses perceptual multicollinearity in beer sensory panel data (correlated taste attributes)",
            "Hyperparameter ω for systematic trade-off between faithfulness and actionability",
            "LLM-based expert evaluation for assessing domain-level interpretability",
            "Design-Science-Research methodology with three DSR cycles (Relevance, Rigor, Design)"
        ]
    },
    {
        id: "mario-party-balloon-platzen",
        title: "Mario Party Clone — Balloon-Platzen",
        description: "Team project: a Mario Party copy in Java. My mini-game 'Balloon-Platzen' focuses on multithreading — pop balloons before they hit the spikes.",
        tags: ["Java", "JavaFX", "Threads", "Game Dev", "Team Project"],
        learnMore: true,
        detailedDescription: "As part of a team project, we built a Mario Party clone in Java. My contribution was the 'Balloon-Platzen' mini-game — a speed-based challenge where the player must click to pop balloons before they float up to spikes at the top of the screen. The focus lies on parallel thread management: each balloon is driven by its own thread for independent movement and rendering. Techniques include inheritance, data encapsulation, lambda expressions, streams, and a Bubble-Sort algorithm that orders balloons by spawn speed to create progressively increasing difficulty.",
        highlights: [
            "One thread per balloon for independent movement and rendering",
            "Bubble-Sort for progressive difficulty scaling by spawn speed",
            "JavaFX UI with inheritance and data encapsulation",
            "Lambda expressions and Streams for concise game logic",
            "BalloonGame class manages core game loop and thread lifecycle"
        ]
    }
];

export default projects;

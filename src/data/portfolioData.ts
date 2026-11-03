import { PersonalInfo, SocialLinks, EducationData, SkillItem, ProjectItem, CertificateItem, CodeSnippetItem } from '../types';

export const personalInfo: PersonalInfo = {
  name: "Vinayaka Tilak PS",
  initials: "VT",
  headline: "Exploring Data, Building Intelligence, Creating Impact.",
  careerFocus: "Data Analyst",
  shortBio: "I'm an AI & Data Science (AI & DS) student passionate about data analytics, technology, and solving real-world problems.",
  fullBio: [
    "I am a 2nd year undergraduate in Artificial Intelligence and Data Science (AI & DS) with a dedicated focus on Data Analytics. My core interest lies at the intersection of raw data, structured query logic, and actionable decision-making.",
    "Rather than treating data simply as rows and columns, I approach it as the foundation for answering strategic questions. I enjoy building analytical workflows—from writing clean, performant SQL queries and automating exploratory data analysis in Python, to designing visual dashboards that make insights accessible and unambiguous.",
    "Driven by curiosity and engineering discipline, I am continuously refining my statistical intuition and algorithmic foundation while seeking opportunities to create tangible, positive impact through data."
  ],
  statusBadge: "Available for Data Analyst Internships & Roles",
  photoUrl: "/profile-cutout.png?v=3",
};

/**
 * SOCIAL PROFILES
 * Update your personal profile handles when ready.
 */
export const socialLinks: SocialLinks = {
  github: "https://github.com/tilak2007",
  linkedin: "https://www.linkedin.com/in/vinayaka-tilak-ps-6924a7442/",
  email: "vinaymeghu09@gmail.com",
  location: "India",
  kaggle: "https://kaggle.com/your-username", // Optional placeholder
  leetcode: "https://leetcode.com/your-username", // Optional placeholder
};

/**
 * CONFIGURABLE EDUCATION FIELD
 * Update currentYear and duration as academic journey progresses.
 */
export const educationData: EducationData = {
  degree: "B.Tech in Artificial Intelligence and Data Science (AI & DS)",
  institution: "Sanjay Ghodawat University",
  currentYear: "2nd Year Undergraduate", // Configurable field
  duration: "2024 – Present (Expected 2028)",
  location: "Kolhapur, Maharashtra, India",
  statusText: "Currently in 2nd Year • Major in AI & DS",
  coursework: [
    "Database Management Systems (DBMS)",
    "Data Structures & Algorithms (DSA)",
    "Applied Probability & Statistics",
    "Data Science & Predictive Foundations",
    "Object-Oriented Programming (Python)",
    "Data Analytics & Exploratory Data Analysis"
  ],
  keyFocusAreas: [
    "Relational Database Architecture & Query Optimization",
    "Predictive Modeling & Statistical Pattern Recognition",
    "Exploratory Data Analysis (EDA) & Metric Design",
    "Version Control & Reproducible Computational Pipelines"
  ]
};

/**
 * TECHNICAL SKILLS
 * Accurately categorized with strict proficiency indicators.
 */
export const skillsData: SkillItem[] = [
  // Programming
  {
    name: "Python",
    category: "Programming",
    proficiency: "Proficient",
    description: "Core scripting language for data wrangling, automation, exploratory analysis, and analytical workflows.",
    iconName: "Code2",
    tags: ["Data Wrangling", "Scripting", "Automation", "OOP"]
  },
  {
    name: "SQL",
    category: "Programming",
    proficiency: "Proficient",
    description: "Writing complex queries, aggregate functions, joins, subqueries, and window operations for analytical retrieval.",
    iconName: "Database",
    tags: ["Complex Queries", "Joins", "Aggregations", "Query Optimization"]
  },

  // Data Analytics
  {
    name: "Pandas",
    category: "Data Analytics",
    proficiency: "Proficient",
    description: "Tabular data manipulation, cleaning, handling missing values, pivoting, and feature transformation.",
    iconName: "Table",
    tags: ["Data Manipulation", "Data Cleaning", "Transformation", "DataFrames"]
  },
  {
    name: "NumPy",
    category: "Data Analytics",
    proficiency: "Proficient",
    description: "High-performance vector operations, multi-dimensional array computation, and mathematical routines.",
    iconName: "Cpu",
    tags: ["Vectorization", "Array Operations", "Mathematical Functions"]
  },
  {
    name: "Data Visualization",
    category: "Data Analytics",
    proficiency: "Proficient",
    description: "Crafting informative visual narratives, distribution plots, correlation heatmaps, and executive-ready charts.",
    iconName: "BarChart3",
    tags: ["Exploratory Analysis", "Visual Storytelling", "Dashboards", "Matplotlib / Seaborn"]
  },

  // Computer Science
  {
    name: "DBMS",
    category: "Computer Science",
    proficiency: "Proficient",
    description: "Relational database concepts, normalization (1NF-3NF), ACID properties, schema design, and entity integrity.",
    iconName: "Server",
    tags: ["Relational Schema", "Normalization", "ACID", "Integrity Constraints"]
  },
  {
    name: "DSA",
    category: "Computer Science",
    proficiency: "Developing",
    description: "Actively studying foundational algorithms, space-time complexity analysis, trees, graphs, and search paradigms.",
    iconName: "Network",
    tags: ["Time Complexity", "Search & Sort", "Arrays & Hashes", "Developing"]
  },

  // Tools
  {
    name: "Git",
    category: "Tools",
    proficiency: "Proficient",
    description: "Version control workflows, commit discipline, branch management, merge resolution, and project tracking.",
    iconName: "GitBranch",
    tags: ["Version Control", "Branching", "Commit Discipline"]
  },
  {
    name: "GitHub",
    category: "Tools",
    proficiency: "Proficient",
    description: "Collaborative development, remote repositories, pull requests, issue tracking, and project documentation.",
    iconName: "Github",
    tags: ["Collaboration", "Pull Requests", "Code Hosting", "Markdown"]
  },
  {
    name: "VS Code",
    category: "Tools",
    proficiency: "Proficient",
    description: "Primary development environment with Python, SQL, Git integration, linting, and interactive notebook extensions.",
    iconName: "Terminal",
    tags: ["IDE Workflows", "Notebooks", "Debugging", "Extensions"]
  }
];

/**
 * FEATURED PROJECTS
 * Authentic project architecture and production links.
 */
export const projectsData: ProjectItem[] = [
  {
    id: "fieldassist-platform",
    title: "FieldAssist — Field Sales & Retail Analytics",
    tagline: "Live sales force automation, product catalog intelligence, and territory management platform.",
    description: "A production-grade field sales automation and retail analytics platform. Features real-time product inventory tracking, retailer order management pipelines, and interactive KPI dashboards powered by a relational PostgreSQL/Supabase backend.",
    category: "Full-Stack & Business Analytics",
    technologies: ["React", "TypeScript", "SQL (PostgreSQL / Supabase)", "Tailwind CSS", "Recharts", "Leaflet"],
    githubUrl: "https://github.com/tilak2007/fieldassist",
    demoUrl: "https://fieldassist-phi.vercel.app/products",
    featured: true,
    status: "Completed",
    highlights: [
      "Engineered live product catalog, category categorization, and dynamic pricing management views.",
      "Designed sales analytics dashboards with Recharts for order velocity, retailer performance, and revenue trends.",
      "Implemented mobile-responsive field operations interface with CSV data export and territory insights.",
      "Integrated secure Supabase relational database schema with ACID-compliant transaction tracking."
    ],
    architectureOverview: "React 19 + TypeScript -> Supabase / PostgreSQL Schema -> Product & Order Ingestion Engine -> Recharts KPI Analytics -> Live Vercel Production"
  },
  {
    id: "customer-churn-analytics",
    title: "Customer Retention & Churn Analytics",
    tagline: "Exploratory behavioral modeling and risk factor identification on transactional cohorts.",
    description: "A comprehensive data analysis study investigating customer subscription patterns, churn velocity, and usage drop-offs. Employs structured SQL queries for cohort aggregation and Python/Pandas for statistical exploratory data analysis.",
    category: "Exploratory Data Analysis",
    technologies: ["Python", "SQL", "Pandas", "NumPy", "Data Visualization"],
    githubUrl: "https://github.com/tilak2007/customer-churn-analytics",
    demoUrl: "https://github.com/tilak2007/customer-churn-analytics#readme",
    featured: true,
    status: "Completed",
    highlights: [
      "Extracted and cleaned multi-table relational schema using SQL joins and window functions.",
      "Conducted exploratory univariate and multivariate distribution analysis to surface retention indicators.",
      "Generated actionable visual summaries to highlight key engagement thresholds."
    ],
    architectureOverview: "Relational DB Extraction -> SQL Transformation -> Pandas Cleansing Pipeline -> Statistical Distribution Analysis -> Visual Executive Reporting."
  },
  {
    id: "ecommerce-sales-intelligence",
    title: "E-Commerce Sales Performance & KPI Dashboard",
    tagline: "End-to-end analytical framework mapping regional revenue distribution and seasonal trends.",
    description: "Structured analytical framework evaluating sales transactions across product categories, shipping timelines, and regional demand. Focuses on metric consistency, outlier detection, and clean relational data modeling.",
    category: "Business Intelligence",
    technologies: ["SQL", "Python", "DBMS", "Pandas", "Data Visualization"],
    githubUrl: "https://github.com/tilak2007/ecommerce-sales-intelligence",
    demoUrl: "https://github.com/tilak2007/ecommerce-sales-intelligence#readme",
    featured: false,
    status: "Completed",
    highlights: [
      "Engineered standardized business metrics (Average Order Value, Repeat Purchase Ratio, Fulfillment Latency).",
      "Normalized raw tabular export files into clean, schema-compliant tables.",
      "Designed visual breakdown charts highlighting seasonal velocity and product category share."
    ],
    architectureOverview: "Raw CSV/DB Exports -> Schema Normalization -> Python ETL Scripts -> KPI Calculation Engine -> Analytical Summary Visuals."
  },
  {
    id: "predictive-house-price-eda",
    title: "Housing Market Trends & Regression Analysis",
    tagline: "Investigating feature collinearity and real-estate valuation drivers with machine learning.",
    description: "An applied machine learning and exploratory analysis project examining residential valuation parameters. Investigates feature importance, missing data imputation strategies, and baseline regression modeling.",
    category: "Machine Learning & Analytics",
    technologies: ["Python", "NumPy", "Pandas", "Data Visualization", "Git"],
    githubUrl: "https://github.com/tilak2007/housing-market-analysis",
    demoUrl: "https://github.com/tilak2007/housing-market-analysis#readme",
    featured: false,
    status: "Completed",
    highlights: [
      "Evaluated skewness and applied logarithmic transformations to normalize target distribution.",
      "Identified multi-collinearity using correlation matrices and variance thresholding.",
      "Implemented baseline linear and tree-based regression models for price estimation."
    ],
    architectureOverview: "Raw Data Ingestion -> Missing Value Imputation -> Feature Correlation Analysis -> Baseline Model Fitting -> Residual Error Diagnostics."
  },
  {
    id: "sql-analytical-workbench",
    title: "SQL Performance & Analytical Query Suite",
    tagline: "Curated repository of advanced SQL query patterns and schema optimization benchmarks.",
    description: "A dedicated repository cataloging analytical SQL recipes, including recursive CTEs, dense ranking, rolling averages, and indexing strategy comparisons for relational database systems.",
    category: "Database & Query Engineering",
    technologies: ["SQL", "DBMS", "Git", "GitHub"],
    githubUrl: "https://github.com/tilak2007/sql-analytical-workbench",
    demoUrl: "https://github.com/tilak2007/sql-analytical-workbench#readme",
    featured: false,
    status: "Completed",
    highlights: [
      "Demonstrates complex window functions (`ROW_NUMBER`, `DENSE_RANK`, `LAG`/`LEAD`) across time-series data.",
      "Features reproducible synthetic datasets for query benchmarking.",
      "Documents execution plan analysis (`EXPLAIN ANALYZE`) to evaluate index efficiency."
    ],
    architectureOverview: "Synthetic Schema Generation -> Complex Analytical Queries -> Execution Plan Profiling -> Documented SQL Pattern Library."
  }
];

/**
 * CERTIFICATIONS & LEARNING MILESTONES (PLACEHOLDERS)
 * Ready for your certificate verification links and IDs.
 */
export const certificationsData: CertificateItem[] = [
  {
    id: "sql-analytics-cert",
    title: "SQL for Data Analytics & Query Optimization",
    issuer: "Analytical Database Foundations",
    issueDate: "2025 – 2026",
    skillsLearned: ["Window Functions", "CTEs", "Subqueries", "Indexing", "Aggregation"],
    credentialUrl: "https://placeholder-credentials.com/verify/sql-analytics",
    status: "Completed",
    iconType: "database"
  },
  {
    id: "python-datascience-cert",
    title: "Applied Python for Data Science & EDA",
    issuer: "Data Analytics Specialization",
    issueDate: "2025 – 2026",
    skillsLearned: ["Pandas", "NumPy", "Data Cleaning", "Matplotlib / Seaborn", "Feature Engineering"],
    credentialUrl: "https://placeholder-credentials.com/verify/python-data-science",
    status: "Completed",
    iconType: "code"
  },
  {
    id: "relational-dbms-cert",
    title: "Relational Database Management Systems (DBMS)",
    issuer: "Sanjay Ghodawat University",
    issueDate: "2nd Year Curriculum Milestone",
    skillsLearned: ["Normalization (1NF-3NF)", "ACID Integrity", "Schema Modeling", "ER Diagrams"],
    credentialUrl: "https://placeholder-credentials.com/verify/sgu-dbms",
    status: "Completed",
    iconType: "analytics"
  },
  {
    id: "ai-ml-foundations-cert",
    title: "Applied Machine Learning & Statistical Intuition",
    issuer: "B.Tech AI & Data Science (AI & DS) Track",
    issueDate: "Currently Pursuing (2nd Year)",
    skillsLearned: ["Supervised Regression", "Classification", "Confusion Matrices", "Data Distributions"],
    credentialUrl: "https://placeholder-credentials.com/verify/ai-ml-track",
    status: "In Progress",
    iconType: "ai"
  }
];

/**
 * PRACTICAL ANALYTICAL CODE SNIPPETS
 * Demonstrates real SQL & Python problem-solving craft directly in the portfolio.
 */
export const codeSnippetsData: CodeSnippetItem[] = [
  {
    id: "sql-window-cohort",
    title: "SQL: Rolling Retention & Cohort Window Analysis",
    language: "sql",
    useCase: "Calculates MoM retention and 3-month rolling revenue per customer cohort.",
    description: "Utilizes Common Table Expressions (CTEs) alongside DENSE_RANK() and window aggregates for high-performance relational analytics.",
    code: `-- Calculate Customer Cohort & Rolling 90-Day Revenue
WITH customer_orders AS (
  SELECT
    o.customer_id,
    o.order_date,
    o.total_amount,
    DATE_TRUNC('month', MIN(o.order_date) OVER(PARTITION BY o.customer_id)) AS cohort_month,
    ROW_NUMBER() OVER(PARTITION BY o.customer_id ORDER BY o.order_date) AS order_sequence
  FROM orders o
  WHERE o.status = 'COMPLETED'
)
SELECT
  cohort_month,
  COUNT(DISTINCT customer_id) AS cohort_size,
  SUM(total_amount) AS total_cohort_revenue,
  AVG(total_amount) AS avg_order_value,
  ROUND(
    AVG(total_amount) OVER(
      ORDER BY cohort_month 
      ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
    ), 2
  ) AS rolling_3mo_avg_revenue
FROM customer_orders
GROUP BY cohort_month
ORDER BY cohort_month DESC;`
  },
  {
    id: "pandas-outlier-pipeline",
    title: "Python: Vectorized Missingness & Outlier Pipeline",
    language: "python",
    useCase: "Performs vectorized IQR boundary capping and missing data profiling.",
    description: "Production-ready Pandas function to inspect data quality, handle skewed numeric columns, and log transformation diagnostics.",
    code: `import pandas as pd
import numpy as np

def clean_analytical_dataset(df: pd.DataFrame, numeric_cols: list[str]) -> pd.DataFrame:
    """
    Cleans tabular transaction records using vectorized IQR bounds
    and median imputation for skewed numerical distributions.
    """
    cleaned = df.copy()
    
    for col in numeric_cols:
        # 1. Impute missing values with group-aware median
        if cleaned[col].isnull().any():
            cleaned[col] = cleaned[col].fillna(cleaned[col].median())
        
        # 2. Vectorized Interquartile Range (IQR) bounds
        q25, q75 = cleaned[col].quantile(0.25), cleaned[col].quantile(0.75)
        iqr = q75 - q25
        lower_bound = q25 - (1.5 * iqr)
        upper_bound = q75 + (1.5 * iqr)
        
        # 3. Soft-cap extreme anomalies without data loss
        cleaned[f"{col}_capped"] = cleaned[col].clip(lower=lower_bound, upper=upper_bound)
        
    return cleaned`
  },
  {
    id: "dbms-relational-schema",
    title: "SQL / DBMS: ACID Normalized Transaction Schema",
    language: "sql",
    useCase: "Relational schema modeling with integrity constraints and indexes.",
    description: "3NF compliant PostgreSQL / Supabase table architecture optimized for analytical joins and real-time inventory velocity.",
    code: `-- Relational Schema with Foreign Key Constraints & B-Tree Indexes
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sku VARCHAR(64) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  unit_price NUMERIC(10, 2) NOT NULL CHECK (unit_price >= 0),
  stock_quantity INT DEFAULT 0 CHECK (stock_quantity >= 0),
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  retailer_id UUID NOT NULL,
  total_amount NUMERIC(12, 2) NOT NULL CHECK (total_amount >= 0),
  order_status VARCHAR(32) DEFAULT 'PENDING',
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Optimize Analytical Queries by Category & Time-Series
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_orders_created_at ON orders(created_at DESC);`
  }
];

export const aboutHighlights = [
  {
    title: "Analytical Discipline",
    description: "Passionate about dissecting complex business problems into structured, quantifiable hypotheses.",
    badge: "Methodology"
  },
  {
    title: "AI & Data Science (AI & DS) Foundation",
    description: "Undergraduate curriculum at Sanjay Ghodawat University blending statistical theory with modern computational paradigms.",
    badge: "Academics"
  },
  {
    title: "Practical Code Craft",
    description: "Committed to writing reproducible, self-documenting Python scripts, structured SQL queries, and interactive data applications.",
    badge: "Engineering"
  }
];

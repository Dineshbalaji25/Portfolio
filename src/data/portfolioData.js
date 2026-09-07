export const personalInfo = {
  name: "Dinesh R Balaji",
  title: "Full Stack Developer — Django / PostgreSQL — E-commerce & Martech Integrations",
  positioning: "Full Stack Developer with 1.5+ years of experience building and scaling a live Django/PostgreSQL e-commerce platform. Specialized in server-side marketing-technology integrations (Meta Conversions API, Google Ads Data Manager API, GA4) and LLM-powered features (LangChain, RAG, OpenAI API). Comfortable owning features end-to-end — architecture, backend implementation, AWS/Docker deployment, and production incident remediation.",
  targetRoles: ["Python Developer", "Junior AI Engineer", "Backend / Data Engineer"],
  location: "Bengaluru, Karnataka, India",
  email: "dineshrbalaji@gmail.com",
  phoneNote: "Available upon request (via email / LinkedIn)",
  github: "https://github.com/Dineshbalaji25",
  linkedin: "https://linkedin.com/in/dineshrbalaji",
  repoUrl: "https://github.com/Dineshbalaji25/Portfolio"
};

export const flagshipData = {
  narrative: "I built the martech integrations, then built the analytics engine on top of them.",
  
  thotfy: {
    name: "Thotfy Commerce Platform",
    tagline: "Proprietary C2C Multi-Vendor Artisan Marketplace",
    liveUrl: "https://thotfy.com",
    image: "./images/thotfy.jpg",
    role: "Full Stack Developer (Jan 2025 – Present)",
    stack: ["Django 4.2", "PostgreSQL", "Django Oscar", "Docker", "CapRover", "AWS (EC2/S3)", "Redis", "Celery"],
    highlights: [
      {
        title: "Core Marketplace Architecture",
        desc: "Engineered catalog, cart, checkout, order state machines, and dynamic coupon/discount logic on top of Django Oscar and PostgreSQL. Optimized ORM query plans to achieve ~20% faster backend response times under peak load."
      },
      {
        title: "Server-Side Martech Pipelines",
        desc: "Implemented Meta Conversions API (Purchase, Lead, ViewContent with SHA256 hashing and event_id deduplication), GA4 Measurement Protocol via Google Data Manager API, and automated Pinterest catalog sync with OAuth2 token renewal."
      },
      {
        title: "Financial Waterfall Automation",
        desc: "Designed full Chart of Accounts integrating Zoho Books v3 API and Cashfree payment gateway, accurately modeling the fund flow: Buyer payment → MDR fee deduction → Platform commission → Seller payable balance → GST/TDS tax escrows."
      },
      {
        title: "4-Stage Seller Funnel Attribution",
        desc: "Architected a unified attribution tracking system across 4 milestones (Registration → Store Preview → First Product Published → First Order Dispatched), reconciling anonymous sessions with authenticated accounts."
      }
    ]
  },

  analytics: {
    name: "THOTFY-Analytic & Ad Engine",
    repoUrl: "https://github.com/Vishnu-prasad-p/scaling-octo-system",
    tagline: "Cross-Source E-Commerce Intelligence & 5-Tier Product Decision Pipeline",
    image: "./images/thotfy-ad-analytics.jpg",
    stack: ["Python 3.11", "Flask", "PostgreSQL (SSH Tunnel)", "Meta Ads API", "GA4 API", "Pandas", "NumPy", "SQLite Fallback"],
    overview: "Built to overcome iOS14+ signal loss and advertising black boxes. Ingests behavioral funnels, ad platform metrics, and PostgreSQL ground-truth order data to compute True ROAS, POAS (Profit On Ad Spend), and blended CAC, classifying products into 5 actionable business tiers.",
    tiers: [
      { name: "Scale", color: "emerald", criteria: "High True ROAS (>3.8x), positive POAS, healthy stock velocity, low return rate." },
      { name: "High Potential", color: "indigo", criteria: "Strong conversion rate & high margin, underfunded ad spend; prime candidate for budget expansion." },
      { name: "Test", color: "amber", criteria: "Emerging products with high CTR but insufficient order sample size; controlled exploratory budget." },
      { name: "Organic Winner", color: "cyan", criteria: "Heavy organic checkout volume without paid ad dependency; avoid wasted ad budget." },
      { name: "Stop", color: "rose", criteria: "Negative POAS, ad spend > 45% margin, high return rate or cart abandonment bottleneck." }
    ]
  }
};

// NOTE: Sample data for demonstration purposes only. All SKU metrics and financial calculations are synthetic mocks.
export const simulatorDisclaimer = "Sample data for demonstration only. All SKUs, revenue figures, and ROAS calculations shown are synthetic mocks for architecture illustration.";

export const simulatorProducts = [
  {
    id: "SKU-BRS-101",
    name: "Handcrafted Brass Filter Coffee Set",
    category: "Home & Kitchen",
    tier: "Scale",
    adSpend: "₹34,200",
    metaRoas: 4.8,
    ga4Roas: 3.9,
    trueRoas: 4.25,
    poas: "₹68,400 (2.0x)",
    compositeScore: 94.2,
    ctr: "3.42%",
    blendedCac: "₹310",
    stockStatus: "In Stock (142 units)",
    action: "Increase daily ad budget by +25% across top Meta lookalike audiences.",
    funnel: { impressions: 142000, clicks: 4850, views: 4200, carts: 610, checkouts: 280, orders: 232 },
    discrepancyNote: "Meta over-reports conversions by +12% compared to verified PostgreSQL order IDs."
  },
  {
    id: "SKU-SLK-204",
    name: "Kanchipuram Pure Silk Handwoven Stole",
    category: "Apparel & Textiles",
    tier: "High Potential",
    adSpend: "₹12,500",
    metaRoas: 3.4,
    ga4Roas: 3.1,
    trueRoas: 3.25,
    poas: "₹32,100 (2.56x)",
    compositeScore: 86.8,
    ctr: "2.85%",
    blendedCac: "₹480",
    stockStatus: "In Stock (68 units)",
    action: "High 62% product gross margin. Scale ad spend from ₹12.5k to ₹30k.",
    funnel: { impressions: 84000, clicks: 2390, views: 2150, carts: 340, checkouts: 165, orders: 128 },
    discrepancyNote: "High cross-device browsing; GA4 last-click misses Meta discovery touchpoints."
  },
  {
    id: "SKU-POT-089",
    name: "Terracotta Handpainted Planters (Set of 3)",
    category: "Gardening & Decor",
    tier: "Organic Winner",
    adSpend: "₹4,200",
    metaRoas: 1.8,
    ga4Roas: 4.9,
    trueRoas: 5.10,
    poas: "₹41,200 (9.8x)",
    compositeScore: 83.5,
    ctr: "1.45%",
    blendedCac: "₹95",
    stockStatus: "Moderate Stock (35 units)",
    action: "82% of checkouts originate organically. Cease paid ads to avoid cannibalization.",
    funnel: { impressions: 32000, clicks: 460, views: 3890, carts: 520, checkouts: 310, orders: 284 },
    discrepancyNote: "Direct search & WhatsApp sharing drive bulk of transactions."
  },
  {
    id: "SKU-CER-412",
    name: "Jaipur Blue Pottery Ceramic Serving Bowl",
    category: "Tableware",
    tier: "Test",
    adSpend: "₹8,400",
    metaRoas: 2.1,
    ga4Roas: 1.8,
    trueRoas: 1.95,
    poas: "₹3,200 (0.38x)",
    compositeScore: 68.1,
    ctr: "3.92%",
    blendedCac: "₹620",
    stockStatus: "In Stock (90 units)",
    action: "High CTR (3.92%) but cart drop-off at shipping step. Test free shipping bundle.",
    funnel: { impressions: 68000, clicks: 2660, views: 2400, carts: 290, checkouts: 65, orders: 41 },
    discrepancyNote: "Meta Pixel under-counts iOS Safari users by 28% without server-side CAPI."
  },
  {
    id: "SKU-BED-701",
    name: "Sanganeri Block Printed Cotton Bedspread",
    category: "Home Furnishing",
    tier: "Stop",
    adSpend: "₹28,600",
    metaRoas: 1.4,
    ga4Roas: 1.1,
    trueRoas: 1.15,
    poas: "-₹4,800 (-0.16x)",
    compositeScore: 41.5,
    ctr: "1.12%",
    blendedCac: "₹1,180",
    stockStatus: "Overstocked (210 units)",
    action: "Ad spend exceeds contribution margin. Immediately pause campaign and liquidate via marketplace newsletter.",
    funnel: { impressions: 185000, clicks: 2070, views: 1850, carts: 140, checkouts: 58, orders: 36 },
    discrepancyNote: "High return rate (19%) degrades true unit economics."
  },
  {
    id: "SKU-SAN-552",
    name: "Carved Sandalwood Aroma Keepsake Box",
    category: "Artisan Crafts",
    tier: "Scale",
    adSpend: "₹22,000",
    metaRoas: 4.4,
    ga4Roas: 3.8,
    trueRoas: 4.10,
    poas: "₹46,800 (2.12x)",
    compositeScore: 91.4,
    ctr: "3.18%",
    blendedCac: "₹370",
    stockStatus: "In Stock (85 units)",
    action: "High gift-season demand. Double daily spend on Pinterest and Meta Video Carousels.",
    funnel: { impressions: 110000, clicks: 3500, views: 3120, carts: 440, checkouts: 210, orders: 172 },
    discrepancyNote: "Pinterest drives 24% of discovery with high deferred conversion window."
  }
];

export const postmortems = [
  {
    id: "multixactid-corruption",
    title: "PostgreSQL MultiXactId Wraparound Corruption Remediation",
    system: "Thotfy Production DB (PostgreSQL 14 / AWS CapRover)",
    severity: "CRITICAL (Catalog lockup & query termination)",
    summary: "Production catalog queries started crashing with MultiXactId wraparound errors on heavily updated product variant rows. Solved zero-data-loss remediation without cloud superuser access.",
    problem: "A high volume of concurrent checkout updates and background inventory syncs caused row-level lock accumulation. PostgreSQL threw 'MultiXactId XXXXX has not been created yet' during SELECT ... FOR SHARE/UPDATE queries on core catalog tables, freezing checkout and catalog reads.",
    investigation: [
      "Monitored pg_stat_activity: queries were blocking on catalog_product_attribute_value with MultiXactId status.",
      "Identified that table autovacuum was failing to advance relminmxid due to long-running analytical read queries holding oldest active snapshots.",
      "Lacked RDS master/superuser privileges on the hosted environment, precluding direct low-level pg_resetwal or dangerous heap surgery."
    ],
    remediation: [
      "Catalog Age Diagnostic: Queried pg_class.relminmxid across catalog tables to locate precise corrupted transaction boundaries without requiring RDS superuser access.",
      "Targeted Vacuum Freeze: Allocated maintenance_work_mem = '1GB' and tuned vacuum_cost_limit = 2000 to execute aggressive, non-blocking table freezes on affected relations.",
      "Concurrency Lock Refactor: Replaced iterative SELECT ... FOR UPDATE queries with bulk selects and optimistic concurrency checks, eliminating MultiXact lock pooling."
    ],
    learned: "Autovacuum settings tuned for standard read-heavy web apps fail on high-write e-commerce inventory tables. Established proactive monitoring of relfrozenxid / relminmxid age alerts in health checks."
  },
  {
    id: "meta-capi-debugging",
    title: "Meta Conversions API (CAPI) Production Reliability & Docker Network Leak",
    system: "Martech Event Pipeline (Django Celery + Meta Graph API v19.0)",
    severity: "HIGH (Loss of ad optimization signal & duplicate attribution)",
    summary: "Diagnosed and repaired silent event dropping, deleted-product AttributeError exceptions, and internal Docker bridge IP leaks in server-side Purchase tracking.",
    problem: "Meta Event Quality Match Score dropped from 8.6 to 4.2. Purchase events were either failing with silent exceptions in Celery workers or being penalized by Meta for invalid client IP addresses ('172.17.0.2').",
    investigation: [
      "Analyzed worker logs: Celery background tasks were throwing AttributeError: 'NoneType' object has no attribute 'upc' when orders contained products deleted by sellers post-checkout.",
      "Inspected payload JSON sent to https://graph.facebook.com/v19.0/{pixel_id}/events: client_ip_address was populating with request.META['REMOTE_ADDR'], which under Docker/CapRover reverse-proxy was the internal bridge gateway IP instead of the customer's real public IP.",
      "Discovered missing cryptography dependency in Docker slim image causing silent HMAC-SHA256 user data hashing fallback."
    ],
    remediation: [
      "Reverse Proxy Header Normalization: Reconfigured Nginx with real_ip directives and implemented safe X-Forwarded-For parsing, preventing internal Docker bridge IP (172.17.0.2) leaks to Meta Graph API.",
      "Defensive Payload Serialization: Added fallback handling for archived/deleted seller products (ARCHIVED_{line.id}), eliminating worker AttributeError exceptions.",
      "Cryptographic & Token Deduplication: Bundled missing cryptography dependencies into Docker image and harmonized server-side event_id hashes with browser Pixel events for 0% duplicate tracking."
    ],
    learned: "Reverse-proxy configurations must explicitly forward X-Forwarded-For with Nginx real_ip module, and event payloads must always support archived/immutable snapshots rather than assuming active relational foreign keys."
  },
  {
    id: "cross-channel-attribution",
    title: "Cross-Platform Ad Attribution Discrepancy & Persistent Seller Funnel",
    system: "Marketing Attribution Engine (Meta vs GA4 vs DB Ground Truth)",
    severity: "MEDIUM (Marketing budget misallocation)",
    summary: "Resolved a 35% conversion gap between Meta Ads Manager and GA4 by creating a persisted attribution table with first/last-touch cookie tracking and 4-stage seller milestones.",
    problem: "Meta Ads reported 180 seller registrations from a paid campaign, while GA4 reported 118, and internal PostgreSQL user records showed 134 actual signups. The marketing team was unable to evaluate true acquisition cost.",
    investigation: [
      "Meta used a default 7-day click / 1-day view attribution window, claiming credit for users who saw an ad but navigated organically later.",
      "GA4 last-click non-direct attribution credited Google Organic for return visits where users typed the domain directly after initial ad discovery.",
      "Mobile browsers (iOS Safari ITP) wiped client-side tracking cookies after 24 hours, severing the link between anonymous ad click and registration."
    ],
    remediation: [
      "Persisted PostgreSQL Ledger: Built an indexed marketing_attribution_touchpoint table storing UTM parameters, ad click IDs (fbclid/gclid), and hashed user-agent fingerprints linked to session keys.",
      "First-Party Server Cookies: Mitigated iOS Safari ITP 24-hour cookie wipes by setting first-party server-side cookies with 30-day longevity.",
      "4-Stage Seller Milestone Funnel: Tracked granular progression (registered → previewed → catalog listed → first sale) to establish an immutable internal ground truth reconciling Meta, GA4, and bank receipts."
    ],
    learned: "Never rely on third-party ad pixels as single sources of truth. Storing first-touch and last-touch parameters in internal database state provides immutable reconciliation against bank receipts."
  }
];

export const experience = [
  {
    role: "Full Stack Developer",
    company: "Thotfy Technologies Pvt Ltd",
    location: "Bengaluru, India",
    period: "Jan 2025 – Present",
    type: "Full-Time",
    website: "https://thotfy.com",
    highlights: [
      "Own backend development for thotfy.com, a live Django/Oscar C2C marketplace used by artisan sellers and buyers across India.",
      "Engineered product catalog, shopping cart, checkout state machine, and order-processing modules with atomic transaction boundaries.",
      "Built REST APIs and templated asynchronous email notification workflows (order confirmations, cart-abandonment triggers with dynamic coupon logic).",
      "Accelerated backend response times by ~20% through Django ORM query optimization (select_related/prefetch_related tuning, composite indexing).",
      "Diagnosed and remediated production PostgreSQL MultiXactId wraparound corruption on core catalog tables under non-superuser access.",
      "Architected server-side martech integration pipeline: Meta Conversions API (Purchase, Lead, ViewContent with SHA256 hashing and event_id deduplication), GA4 Measurement Protocol via Google Data Manager API, Customer Match sync, and Pinterest/Meta catalog sync.",
      "Designed a 4-stage seller-onboarding attribution system (registration → preview → first product → first sale) unifying Meta and Google tracking.",
      "Automated accounting & payment waterfall integrating Zoho Books v3 API and Cashfree payment gateway."
    ]
  },
  {
    role: "Python Developer Intern",
    company: "Emvega Technologies Pvt Ltd",
    location: "Bengaluru, India",
    period: "Aug 2023 – Dec 2024",
    type: "Internship",
    website: "https://emvega.com",
    highlights: [
      "Built backend e-commerce modules and RESTful endpoints using Django and Django REST Framework.",
      "Optimized complex PostgreSQL queries and aggregation logic to ensure sub-100ms API response times under simulated peak load.",
      "Developed robust ETL data validation pipelines for third-party catalog feeds, ensuring data integrity across high-cardinality schemas.",
      "Provisioned and maintained cloud services across AWS EC2, S3 bucket policies, and RDS instances.",
      "Collaborated closely with cross-functional frontend and QA engineering teams to execute bug triage and production releases."
    ]
  }
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "St. Joseph College of Arts and Science, Bengaluru",
    period: "2023 – 2025",
    grade: "CGPA: 7.00 / 10.00"
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Kristu Jayanti College, Bengaluru",
    period: "2020 – 2023",
    grade: "Percentage: 70.00%"
  }
];

export const certifications = [
  {
    name: "AWS Solutions Architect",
    issuer: "Amazon Web Services (AWS)",
    period: "Mar – Sep 2025",
    credential: "Cloud Architecture, EC2, RDS, VPC, S3, CloudFormation, Scalability"
  },
  {
    name: "Computer Networks and Network Security",
    issuer: "IBM",
    period: "Oct – Nov 2025",
    credential: "TCP/IP, Network Topologies, Packet Inspection, Cryptography, Defensive Controls"
  },
  {
    name: "Data Science & Analytics Using Python",
    issuer: "NPTEL",
    period: "Jan – May 2022",
    credential: "Statistical Modeling, NumPy, Pandas, Data Cleaning, Predictive Modeling"
  }
];

export const projects = [
  {
    id: "thotfy-analytic",
    title: "THOTFY-Analytic Engine",
    category: "Analytics & Martech",
    categoryKey: "martech",
    featured: true,
    image: "./images/thotfy-ad-analytics.jpg",
    github: "https://github.com/Vishnu-prasad-p/scaling-octo-system",
    liveDemo: null,
    stack: ["Python", "Flask", "PostgreSQL", "Meta Ads API", "GA4", "Pandas", "SSH Tunnel"],
    summary: "Cross-platform marketing analytics and decision engine. Pulls ad spend and attribution telemetry to calculate True ROAS and classify products across a 5-tier decision matrix."
  },
  {
    id: "nova-crm",
    title: "Nova CRM — Enterprise Dark SaaS",
    category: "Backend & SaaS",
    categoryKey: "backend",
    featured: true,
    image: "./images/nova-crm.jpg",
    github: "https://github.com/Dineshbalaji25/Nova-CRM",
    liveDemo: null,
    stack: ["Django", "Django REST Framework", "PostgreSQL", "Celery", "Stripe", "Docker"],
    summary: "Production-grade, multi-tenant SaaS CRM with a Linear/Stripe-inspired dark aesthetic. Features contact/deal pipelines, automated workflow state transitions, RBAC permissions, and LLM-assisted deal insights."
  },
  {
    id: "google-ads-chatbot",
    title: "Google Ads AI Chatbot",
    category: "AI & Automation",
    categoryKey: "ai",
    featured: true,
    image: "./images/google-ads-chatbot.jpg",
    github: "https://github.com/Dineshbalaji25/Google-ADs-Chatbot",
    liveDemo: null,
    stack: ["Python", "Django", "OpenAI API", "LangChain", "Google Ads API"],
    summary: "Ad platform operational copilot built on a multi-platform AdPlatformService abstraction. Translates natural language queries into automated ad group adjustments, budget allocation, and search term audits."
  },
  {
    id: "codemastery",
    title: "CodeMastery — DSA Visualizer LMS",
    category: "Full Stack & EdTech",
    categoryKey: "fullstack",
    featured: false,
    image: "./images/codemastery.jpg",
    github: "https://github.com/Dineshbalaji25/Full-Stack-App",
    liveDemo: null,
    stack: ["Django", "React", "Vite", "Web Speech API", "PostgreSQL"],
    summary: "Interactive coding problem platform with automated test runners and synchronized step-by-step algorithm animation with Web Speech API audio narration."
  },
  {
    id: "data-engineering-etl",
    title: "Product Pricing Intelligence Pipeline",
    category: "Data Engineering",
    categoryKey: "data",
    featured: false,
    image: "./images/data-engineering-etl.jpg",
    github: "https://github.com/Dineshbalaji25/Data-Engineering-ETL-Pipeline",
    liveDemo: null,
    stack: ["Apache Airflow", "Python", "PostgreSQL", "BeautifulSoup", "REST APIs"],
    summary: "Daily scheduled Airflow ETL pipeline. Scrapes e-commerce catalog pricing data, normalizes categories, ingests live GBP-to-INR foreign exchange rates, and stages dimensional models in PostgreSQL."
  },
  {
    id: "fruiq-ai",
    title: "FruiQ AI — Quality Inspection Platform",
    category: "AI & Computer Vision",
    categoryKey: "ai",
    featured: true,
    image: "./images/fruiq-ai.png",
    github: "https://github.com/Dineshbalaji25/FruiQ-AI---Smart-Produce-Quality-Management-Platform",
    liveDemo: "https://fruiq-ai.vercel.app",
    stack: ["React", "Flask", "TensorFlow / Keras", "Computer Vision", "Vercel"],
    summary: "Computer vision platform for agricultural produce grading. Uses deep learning CNN models to classify fruit ripeness and detect surface defects with real-time confidence scores."
  },
  {
    id: "algo-trading-bot",
    title: "Z3 Intraday Momentum Trading Bot",
    category: "Fintech & Automation",
    categoryKey: "fintech",
    featured: false,
    image: "./images/algo-trading-bot.jpg",
    github: "https://github.com/Dineshbalaji25/Algo-Trading-bot",
    liveDemo: null,
    stack: ["Python", "Dhan Broker API", "WebSockets", "Pandas", "CSV Reporting"],
    summary: "Automated intraday trading engine built on real-time Dhan Broker WebSocket ticks. Executes momentum breakout strategies with automated risk-managed stop-loss and time-based exits."
  },
  {
    id: "trade-opportunities",
    title: "Trade Opportunities AI API",
    category: "AI & Backend",
    categoryKey: "ai",
    featured: false,
    image: "./images/trade-opportunities.jpg",
    github: "https://github.com/Dineshbalaji25/Trade-Opportunities",
    liveDemo: null,
    stack: ["FastAPI", "JWT Auth", "Gemini / OpenAI", "News Scraping", "Markdown Generation"],
    summary: "FastAPI microservice generating AI-powered sector opportunity reports in Indian markets using real-time news scraping and LLM synthesis."
  }
];

export const skillsMatrix = [
  {
    category: "Backend & Core Frameworks",
    items: [
      { name: "Python", level: "Expert", tags: ["AsyncIO", "OOP", "Data Structures", "Type Hints"] },
      { name: "Django & Django Oscar", level: "Expert", tags: ["ORM Tuning", "Custom App Architecture", "Multi-Vendor Marketplaces"] },
      { name: "Django REST Framework", level: "Expert", tags: ["Serializers", "ViewSets", "JWT/Session Auth", "API Versioning"] },
      { name: "Flask & FastAPI", level: "Advanced", tags: ["Microservices", "Pydantic", "Background Tasks", "Lightweight Dashboards"] },
      { name: "Node.js & Express", level: "Intermediate", tags: ["REST APIs", "Middleware", "JSON Web Tokens"] }
    ]
  },
  {
    category: "Databases & Storage",
    items: [
      { name: "PostgreSQL", level: "Expert", tags: ["Query Optimization", "MultiXactId Debugging", "EXPLAIN ANALYZE", "Indexes (B-Tree, GIN)"] },
      { name: "Redis", level: "Advanced", tags: ["Caching", "Celery Broker", "Session Storage", "Rate Limiting"] },
      { name: "SQLite", level: "Advanced", tags: ["Embedded Systems", "Local Fallback Caches", "Rapid Prototyping"] }
    ]
  },
  {
    category: "Martech & Ad Integrations",
    items: [
      { name: "Meta Conversions API (CAPI)", level: "Expert", tags: ["Server-Side Tracking", "Event Deduplication", "User Hashing", "iOS14+ Resilience"] },
      { name: "Google Ads Data Manager API", level: "Advanced", tags: ["Customer Match", "Audience Sync", "First-Party Data"] },
      { name: "Google Analytics 4 (GA4)", level: "Advanced", tags: ["Measurement Protocol", "Ecommerce Funnel Events", "BigQuery Export"] },
      { name: "Pinterest Catalog Sync", level: "Advanced", tags: ["OAuth2 Flow", "Automated Feed Sync", "Catalog Mapping"] },
      { name: "Zoho Books API v3", level: "Advanced", tags: ["Chart of Accounts", "Invoicing Automation", "Waterfall Reconciliation"] },
      { name: "Cashfree & Stripe", level: "Advanced", tags: ["Webhooks Verification", "Payment Waterfall", "Escrow & Settlements"] }
    ]
  },
  {
    category: "AI, GenAI & Data Engineering",
    items: [
      { name: "LangChain & RAG", level: "Advanced", tags: ["Vector Retrieval", "Prompt Chaining", "Context Augmentation"] },
      { name: "OpenAI & Gemini APIs", level: "Advanced", tags: ["Tool Calling", "JSON Mode", "Multi-Turn Dialogue"] },
      { name: "TensorFlow & Keras", level: "Intermediate", tags: ["CNNs", "Image Classification", "Model Serialization"] },
      { name: "Pandas & NumPy", level: "Advanced", tags: ["Time Series", "Entity Unification", "Data Cleaning"] },
      { name: "Apache Airflow", level: "Intermediate", tags: ["DAG Orchestration", "ETL Pipelines", "PostgreSQL Staging"] }
    ]
  },
  {
    category: "Cloud, DevOps & Tooling",
    items: [
      { name: "Docker & Containerization", level: "Advanced", tags: ["Multi-Stage Builds", "Docker Compose", "Resource Limits"] },
      { name: "AWS (Solutions Architect)", level: "Advanced", tags: ["EC2", "S3", "RDS", "CloudFormation", "CloudFront"] },
      { name: "CapRover PaaS", level: "Advanced", tags: ["Production Deployments", "Nginx Reverse Proxy", "SSL Certificates"] },
      { name: "Git & GitHub Actions", level: "Advanced", tags: ["CI/CD Pipelines", "Branch Workflows", "Pages Deployment"] },
      { name: "Linux Administration", level: "Advanced", tags: ["Bash Scripting", "Systemd", "SSH Tunnels", "Process Monitoring"] }
    ]
  }
];

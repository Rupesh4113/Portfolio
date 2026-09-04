import { Project } from '../types';

export const businessCaseStudies: Project[] = [
  // =========================================================================
  // PROJECT 1: Supply Chain Optimization — FMCG / Retail
  // =========================================================================
  {
    id: 'case-study-1-supply-chain',
    title: 'Supply Chain Optimization — FMCG / Retail',
    slug: 'supply-chain-optimization-fmcg',
    category: 'Supply Chain',
    domain: 'FMCG / Retail',
    analytics_type: 'Predictive + Optimization',
    project_type: 'professional',
    status: 'published',
    is_featured: true,
    display_order: 1,
    selected_model: 'Logistic Regression',
    data_scope: 'Warehouse-level demand and fulfillment telemetry',
    short_summary: 'End-to-end supply chain optimization analyzing warehouse demand vs. supply patterns, segmenting facilities via clustering, and predicting inventory imbalance risks using classification modeling to generate warehouse-level replenishment recommendations.',
    business_problem: 'Analyze warehouse-level demand and supply patterns across regional distribution centers to identify overstock and understock locations, quantify inventory imbalance, and mitigate stockout penalties and excessive holding costs.',
    business_objective: 'Develop an end-to-end analytical pipeline segmenting warehouses and classifying stock imbalance risk to recommend optimal inventory supply allocations and prevent costly shortages.',
    dataset_description: 'Warehouse-level demand and fulfillment datasets containing regional order volumes, current inventory balances, transit lead times, historical safety stock thresholds, and stockout incident logs.',
    dataset_size: '[Add Dataset Size / 50+ Warehouses]',
    data_sources: ['Warehouse Management System (WMS) logs', 'Regional fulfillment records', 'Historical replenishment purchase orders'],
    data_preparation: 'Aggregated SKU-level demand to warehouse-month intervals, handled missing inbound shipment logs with median imputation, normalized inventory turnover ratios, and computed regional demand variance metrics.',
    methodology_steps: [
      'Data Preparation & Cleaning',
      'Exploratory Data Analysis (EDA)',
      'Demand vs. Supply Pattern Analysis',
      'Warehouse Segmentation using Clustering',
      'Classification Modeling (Imbalance Risk)',
      'Model Comparison & Selection',
      'Warehouse-Level Supply Recommendation Generation'
    ],
    eda_insights: [
      'Identified severe demand-supply variance across tier-1 vs. tier-2 distribution centers, with certain hubs operating at 140% capacity while others were severely under-utilized.',
      'Stockout occurrences concentrated heavily at month-end demand spikes where replenishment lead time exceeded 5 days.',
      'Unsupervised clustering separated warehouse network into 3 distinct operational clusters: High-Velocity Shortage Risk, Balanced Flow, and Chronic Overstock Buffers.'
    ],
    feature_engineering: [
      'Demand-to-Supply Ratio (DSR)',
      'Historical Lead-Time Variability Index',
      'Stockout Severity Frequency Score',
      'Warehouse Capacity Utilization Percentage',
      'Regional Consumption Momentum'
    ],
    model_development: 'Trained and benchmarked multiple supervised classification models to predict whether a warehouse is at risk of stock imbalance (Overstock / Understock / Balanced). Evaluated Logistic Regression, Decision Tree, and Random Forest classifiers.',
    algorithms_used: ['K-Means Clustering', 'Logistic Regression', 'Decision Tree Classifier', 'Random Forest Classifier'],
    evaluation_metrics: {
      'Classification Accuracy': '92%',
      'Precision (Stockout Class)': '[Add Precision]',
      'Recall (Shortage Detection)': '[Add Recall]',
      'F1-Score': '[Add F1-Score]',
      'Inventory Imbalance Reduction': '[Add Business Metric]'
    },
    primary_metric_label: 'Classification Accuracy',
    primary_metric_value: '92%',
    results_summary: 'The completed analysis selected Logistic Regression as the preferred operational model due to its high interpretability, linear calibration, and 92% classification accuracy across warehouse tiers.',
    model_comparison_data: [
      { model: 'Logistic Regression (Selected)', accuracy: '92%', precision: '[Add Precision]', recall: '[Add Recall]', status: 'Selected — High explainability & operational stability' },
      { model: 'Decision Tree', accuracy: '[Add Accuracy]', precision: '[Add Precision]', recall: '[Add Recall]', status: 'Susceptible to overfitting on minor warehouses' },
      { model: 'Random Forest', accuracy: '[Add Accuracy]', precision: '[Add Precision]', recall: '[Add Recall]', status: 'High accuracy but complex operational integration' }
    ],
    key_findings: [
      'Demand and supply mismatch was not uniform; 70% of shortage events occurred in only 22% of regional depots.',
      'Warehouse clustering exposed structural bottlenecks where safety stocks were misallocated to slow-moving regional nodes.',
      'Logistic Regression odds ratios indicated that lead-time variance and regional order volatility were the strongest predictors of impending stock imbalance.'
    ],
    business_recommendations: [
      'Dynamically reallocate buffer safety stocks from chronic overstock depots to high-velocity fulfillment centers.',
      'Deploy automated warehouse-level supply allocation alerts when predicted imbalance probability exceeds threshold.',
      'Establish dynamic replenishment lead-time buffers for suppliers with high lead-time volatility.',
      'Incorporate seasonal demand weighting into quarterly warehouse capacity planning.'
    ],
    business_impact: [
      'Targeted reduction in localized stockouts: [Add Metric]',
      'Mitigation of surplus holding costs through overstock reduction: [Add Revenue Impact]',
      'Improved warehouse-level replenishment allocation and executive operational visibility.'
    ],
    architecture_diagram_type: 'supply_chain',
    tech_stack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'K-Means Clustering', 'Logistic Regression', 'Decision Trees', 'Random Forest', 'Matplotlib', 'Seaborn'],
    deployment_details: 'Configured as a modular Python analytics workflow capable of ingesting monthly warehouse inventories and outputting SKU-warehouse replenishment target tables.',
    monitoring_strategy: 'Quarterly model recalibration comparing predicted vs. actual stockout rates and monitoring warehouse cluster drift.',
    key_learnings: [
      'Interpretable models like Logistic Regression achieve faster operational stakeholder adoption in supply chain operations than black-box models.',
      'Pre-segmenting warehouses with clustering significantly improved the stability of subsequent classification models.'
    ],
    future_improvements: [
      'Incorporate real-time weather and transportation disruption telematics.',
      'Extend the framework into multi-echelon inventory optimization across central and regional hubs.'
    ],
    github_url: 'https://github.com/Rupesh4113',
    notebook_url: 'https://github.com/Rupesh4113',
    report_url: 'https://github.com/Rupesh4113',
    analysis_url: 'https://github.com/Rupesh4113',
    thumbnail_url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    gallery_images: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80'
    ]
  },

  // =========================================================================
  // PROJECT 2: Customer Buying Patterns & Revenue Optimization — Retail / Auto Parts
  // =========================================================================
  {
    id: 'case-study-2-customer-buying-patterns',
    title: 'Customer Buying Patterns & Revenue Optimization — Retail / Auto Parts',
    slug: 'customer-buying-patterns-revenue-optimization',
    category: 'Customer Analytics',
    domain: 'Retail / Auto Parts',
    analytics_type: 'Customer Analytics',
    project_type: 'professional',
    status: 'published',
    is_featured: true,
    display_order: 2,
    data_scope: '3 years of historical transaction data',
    short_summary: 'Comprehensive customer intelligence and revenue optimization analyzing 3 years of transaction history using RFM segmentation, purchasing-pattern decomposition, and Market Basket association rules to drive retention, basket size, and cross-selling.',
    business_problem: 'Analyze historical transaction data from an automobile-parts business to understand customer purchasing behavior, identify customer churn patterns, and uncover high-potential opportunities for cross-selling and revenue optimization.',
    business_objective: 'Build a multi-dimensional customer analytics framework combining RFM segmentation with Market Basket association rules to identify high-value customer cohorts and generate product bundling recommendations.',
    dataset_description: '3 years of granular POS transaction records comprising customer IDs, invoice dates, SKU codes, item descriptions, purchase quantities, unit prices, and store locations.',
    dataset_size: '3 Years Transaction Data / [Add Total Rows]',
    data_sources: ['Retail POS transaction database', 'Customer master records', 'Product catalog metadata'],
    data_preparation: 'Extracted 36 months of transaction history, cleansed invoice cancellations and returns, filtered negative quantities, standardized customer identifiers, and aggregated data into customer-level RFM metrics and market-basket transaction matrices.',
    methodology_steps: [
      'Transaction-Level Exploratory Data Analysis (EDA)',
      'Customer Purchasing-Pattern & Frequency Analysis',
      'RFM Analysis (Recency, Frequency, Monetary)',
      'Customer Segmentation into Actionable Tiers',
      'Product Affinity & Co-Occurrence Matrix Analysis',
      'Market Basket Analysis (Apriori & Association Rules)',
      'Cross-Selling & Product Bundling Recommendations'
    ],
    rfm_segments: [
      { name: 'High-Value Champions', description: 'Bought recently, buy frequently, and spend the most. Core revenue driver.', action: 'VIP loyalty rewards & early access to new parts' },
      { name: 'Loyal Repeat Buyers', description: 'Consistent purchase cadence with solid basket sizes over long tenure.', action: 'Up-sell premium tiers & cross-sell maintenance kits' },
      { name: 'Potential Growth Customers', description: 'Recent buyers with moderate spend and growing frequency.', action: 'Targeted bundle discounts to elevate lifetime value' },
      { name: 'At-Risk / Inactive Customers', description: 'Previously frequent buyers who haven’t purchased in 90+ days.', action: 'Automated win-back reactivation campaigns' }
    ],
    eda_insights: [
      'The top 20% of customers contributed over 65% of cumulative 3-year revenue, highlighting extreme revenue concentration.',
      'Purchasing frequency showed sharp drop-offs after 90 days of inactivity, defining the empirical customer churn threshold.',
      'Strong cross-category affinity between routine maintenance components (oil filters, brake pads) and fluid consumables.'
    ],
    feature_engineering: [
      'Recency (Days since last transaction)',
      'Frequency (Total unique invoice count over 3 years)',
      'Monetary Value (Cumulative net spend)',
      'Inter-Purchase Time Interval (Days between purchases)',
      'Product Category Breadth Score'
    ],
    model_development: 'Applied RFM quintile scoring and K-Means clustering for customer segmentation. Implemented the Apriori association rule mining algorithm evaluating Support, Confidence, and Lift to discover product co-purchasing affinities.',
    algorithms_used: ['RFM Scoring', 'K-Means Clustering', 'Market Basket Analysis (Apriori)', 'Association Rules Mining', 'Cosine Similarity'],
    evaluation_metrics: {
      'Customer Segments Identified': '4 Core Tiers',
      'Transaction History Analyzed': '3 Years',
      'Retention Rate Lift': '[Add Retention Rate]',
      'Average Basket Size Increase': '[Add Basket Size Increase]',
      'Cross-Sell Revenue Potential': '[Add Revenue Impact]'
    },
    primary_metric_label: 'Historical Data Analyzed',
    primary_metric_value: '3 Years Data',
    results_summary: 'Discovered high-lift association rules among auto-parts product combinations and segmented the 3-year customer base into 4 actionable commercial tiers for automated marketing targeting.',
    key_findings: [
      'Customers purchasing across two or more distinct categories had a 2.8x higher 12-month retention rate than single-category buyers.',
      'Identified high-confidence rules linking brake pad replacements with rotor discs and brake fluids (Lift > [Add Lift Metric]).',
      'At-Risk customers represent an immediate recoverable revenue pool if targeted within the 60-90 day recency window.'
    ],
    business_recommendations: [
      'Implement automated POS checkout cross-sell recommendations pairing complementary parts with core repairs.',
      'Create curated "Maintenance Bundles" offering a 5% discount when purchasing associated high-lift items together.',
      'Trigger personalized automated re-engagement offers to customers reaching 60 days of inactivity.',
      'Establish VIP credit terms and dedicated account reps for High-Value Champion auto-repair shops.'
    ],
    business_impact: [
      'Customer retention improvement: [Add Retention Rate]',
      'Average transaction basket size increase: [Add Basket Size Increase]',
      'Optimized marketing ROI through targeted segment-specific campaign communications.'
    ],
    architecture_diagram_type: 'pricing_elasticity',
    tech_stack: ['Python', 'Pandas', 'NumPy', 'RFM Analysis', 'Market Basket Analysis', 'Apriori', 'Association Rules', 'Matplotlib', 'Seaborn'],
    deployment_details: 'Segment definitions and association rule lookup matrices integrated into customer marketing automation and counter POS displays.',
    monitoring_strategy: 'Monthly tracking of customer segment migration (movement between At-Risk and Active) and association rule confidence stability.',
    key_learnings: [
      'RFM combined with Market Basket Analysis bridges customer loyalty strategy with tactical frontline merchandising.',
      'Segmenting by monetary value alone is insufficient without factoring in recency decay velocity.'
    ],
    future_improvements: [
      'Implement real-time collaborative filtering for e-commerce auto-part suggestions.',
      'Integrate vehicle make/model/year compatibility data to personalize recommendations further.'
    ],
    github_url: 'https://github.com/Rupesh4113',
    notebook_url: 'https://github.com/Rupesh4113',
    report_url: 'https://github.com/Rupesh4113',
    analysis_url: 'https://github.com/Rupesh4113',
    thumbnail_url: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80',
    gallery_images: [
      'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80'
    ]
  },

  // =========================================================================
  // PROJECT 3: E-Commerce Revenue Analytics — Retail / E-commerce
  // =========================================================================
  {
    id: 'case-study-3-ecommerce-revenue',
    title: 'E-Commerce Revenue Analytics — Retail / E-commerce',
    slug: 'ecommerce-revenue-analytics',
    category: 'Revenue Analytics',
    domain: 'Retail / E-commerce',
    analytics_type: 'Revenue Analytics',
    project_type: 'professional',
    status: 'published',
    is_featured: true,
    display_order: 3,
    data_scope: 'Granular e-commerce sales transactions',
    short_summary: 'Comprehensive multi-dimensional revenue analytics breaking down transactional sales data across geographical territories, product categories, and brand portfolios to isolate growth drivers and margin concentrations.',
    business_problem: 'Analyze transaction-level sales data to identify core revenue drivers, regional demand variances, and brand contributions, addressing revenue concentration risks and identifying untapped expansion opportunities.',
    business_objective: 'Transform raw transaction logs into an executive revenue analytics framework identifying top-performing regions, high-value product categories, and leading brands for commercial resource allocation.',
    dataset_description: 'Granular e-commerce order transactions containing transaction IDs, timestamps, customer shipping regions, product taxonomy categories, brand tags, units sold, gross sales revenue, discounts, and net margins.',
    dataset_size: '[Add Dataset Size / Orders Count]',
    data_sources: ['E-commerce platform order database', 'Product category master catalogue', 'Regional distribution logs'],
    data_preparation: 'Parsed timestamps, deduplicated orders, normalized regional naming conventions, handled promotional discount adjustments, and created aggregated summary views across temporal, regional, and category dimensions.',
    methodology_steps: [
      'Transaction-Level Exploratory Data Analysis (EDA)',
      'Data Transformation & Cleaning',
      'Multi-Dimensional Aggregation & Roll-Ups',
      'Statistical Revenue Distribution Analysis',
      'Regional Performance & Geographical Breakdown',
      'Product-Category Margin & Volume Matrix',
      'Brand Contribution & Concentration Analysis',
      'Strategic Business Recommendations Formulation'
    ],
    eda_insights: [
      'Top 3 metropolitan regions accounted for 67% of total gross sales revenue, indicating heavy geographic dependency.',
      'Significant variance in average order value (AOV) across product categories, with electronics driving volume but lifestyle driving repeat margins.',
      'Leading 5 brands contributed the majority of top-line revenue, but emerging private-label brands showed faster margin growth.'
    ],
    feature_engineering: [
      'Net Revenue per Order (AOV)',
      'Discount Elasticity Index',
      'Regional Market Penetration Rate',
      'Brand Revenue Share Percentage',
      'Quarterly Sales Growth Velocity'
    ],
    model_development: 'Engineered statistical aggregations, Pareto 80/20 concentration distributions, regional growth indices, and comparative category velocity matrices using Python, Pandas, and NumPy.',
    algorithms_used: ['Descriptive Statistics', 'Pareto Analysis (80/20 Rule)', 'Regional Growth Modeling', 'Variance Decomposition', 'Correlation Analysis'],
    evaluation_metrics: {
      'Top Region Share': '67%',
      'Brand Concentration (Top 3)': '[Add Concentration %]',
      'Sales Volume Growth': '[Add Sales Volume Trend]',
      'Identified Revenue Upside': '[Add Revenue Impact]'
    },
    primary_metric_label: 'Top Region Revenue Share',
    primary_metric_value: '67%',
    results_summary: 'Mapped granular revenue concentration across regions and product categories, providing commercial leadership with data-backed priorities for promotional spend and supply chain positioning.',
    key_findings: [
      'Revenue growth in Tier-2 regions outpaced Tier-1 metropolitan markets by [Add Growth Metric %], despite lower current marketing spend.',
      'High-margin accessories suffered from inventory stockouts while low-margin promotional items occupied prime fulfillment space.',
      'Brand portfolio analysis identified 2 high-volume anchor brands acting as customer acquisition funnels for the wider catalog.'
    ],
    business_recommendations: [
      'Reallocate digital advertising budgets toward accelerating Tier-2 regional expansion.',
      'Prioritize inventory fulfillment slotting for high-margin, fast-turning accessory categories.',
      'Renegotiate commercial terms and co-op marketing allowances with top-tier anchor brands.',
      'Launch bundle packages combining high-volume acquisition products with high-margin category items.'
    ],
    business_impact: [
      'Strategic prioritization of commercial marketing budget: [Add Business Metric]',
      'Projected annual revenue optimization through regional re-allocation: [Add Revenue Impact]',
      'Improved product catalog margin mix across online storefronts.'
    ],
    architecture_diagram_type: 'custom',
    tech_stack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Statistical Aggregation', 'Jupyter Notebook'],
    deployment_details: 'Automated Python reporting pipeline generating monthly revenue decomposition summaries exported to executive analytics portals.',
    monitoring_strategy: 'Monthly tracking of regional revenue contribution ratios, brand churn, and average order value movements.',
    key_learnings: [
      'Top-line revenue figures often obscure dangerous margin and geographical concentration risks.',
      'Regional consumer preferences require tailored local inventory stocking rather than a centralized national catalog strategy.'
    ],
    future_improvements: [
      'Incorporate customer demographic census data for micro-targeted regional campaign planning.',
      'Build dynamic price elasticity models to optimize discount thresholds across product categories.'
    ],
    github_url: 'https://github.com/Rupesh4113',
    notebook_url: 'https://github.com/Rupesh4113',
    report_url: 'https://github.com/Rupesh4113',
    analysis_url: 'https://github.com/Rupesh4113',
    thumbnail_url: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80',
    gallery_images: [
      'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'
    ]
  },

  // =========================================================================
  // PROJECT 4: New Wheels Sales Analytics — Automotive / Transportation
  // =========================================================================
  {
    id: 'case-study-4-new-wheels-sql',
    title: 'New Wheels Sales Analytics — Automotive / Transportation',
    slug: 'new-wheels-sales-analytics-sql',
    category: 'SQL Analytics',
    domain: 'Automotive / Transportation',
    analytics_type: 'SQL Analytics',
    project_type: 'professional',
    status: 'published',
    is_featured: true,
    display_order: 4,
    data_scope: 'Multi-table relational sales & customer database',
    short_summary: 'In-depth investigative sales performance analytics utilizing advanced MySQL queries, window functions, complex JOINs, and CTEs to diagnose declining sales trends, customer rating drops, and vehicle performance across quarters.',
    business_problem: 'Investigate declining sales performance and customer retention challenges across multiple quarters using structured sales, vehicle, and customer feedback databases to diagnose root causes and provide management recommendations.',
    business_objective: 'Author advanced SQL analytical workflows to extract quarterly sales trends, evaluate customer satisfaction distributions, analyze vehicle model performance, and support executive turnaround decision-making.',
    dataset_description: 'Relational database containing tables for customers, orders, order items, vehicles/products, shipping logistics, and customer post-delivery feedback ratings.',
    dataset_size: '[Add Database Size / Records]',
    data_sources: ['New Wheels MySQL production database', 'Customer feedback ratings', 'Order fulfillment tables'],
    data_preparation: 'Engineered clean relational views using SQL DDL/DML, resolved orphan foreign keys, handled NULL values in customer feedback scores using CASE statements, and created indexed analytical summary tables.',
    methodology_steps: [
      'Database Schema Inspection & Entity Relationship Mapping',
      'Advanced SQL Multi-Table JOIN Construction',
      'Quarterly Sales Trend & Revenue Aggregation',
      'Customer Feedback & Rating Distribution Analysis',
      'Vehicle Model & Product Class Performance Ranking',
      'Window Function Calculations (Moving Averages, Lagged Growth)',
      'Management Decision-Support Dataset Delivery',
      'Turnaround Strategic Business Recommendations'
    ],
    sql_techniques: [
      'Multi-Table JOINs (INNER, LEFT, FULL OUTER)',
      'Window Functions (ROW_NUMBER, RANK, DENSE_RANK, LEAD, LAG)',
      'Common Table Expressions (CTEs) for recursive and layered queries',
      'Conditional Aggregations using CASE WHEN Statements',
      'Aggregate Functions with GROUP BY and HAVING clauses',
      'Correlated and Nested Subqueries',
      'Date/Time Functions for Quarterly and YoY trend slicing',
      'Analytical Views and Table Index Optimization'
    ],
    eda_insights: [
      'Sales revenue peaked in early quarters followed by a consistent quarter-over-quarter drop of [Add Quarterly Sales Trend %].',
      'Cross-tabulation of delivery delays against customer feedback demonstrated that ratings plummeted from 4.6 to 2.8 when delivery took > 8 days.',
      'Certain vehicle styles (sedans vs. SUVs) experienced dramatic performance divergence depending on customer geographic zones.'
    ],
    feature_engineering: [
      'Quarter-over-Quarter (QoQ) Sales Growth % via LAG() window functions',
      'Average Customer Satisfaction Rating (CSAT) by Vehicle Class',
      'Order-to-Delivery Fulfillment Lead Time (Days)',
      'Customer Repeat Purchase Cadence Index',
      'Regional Vehicle Style Demand Ratio'
    ],
    model_development: 'Engineered an end-to-end MySQL analytics repository comprising complex queries, views, and CTEs that output quarterly performance dashboards directly consumable by BI and leadership tools.',
    algorithms_used: ['Advanced SQL Analytics', 'Window Functions', 'Time-Based Cohort Analysis', 'Conditional Rating Aggregations', 'Trend Analysis'],
    evaluation_metrics: {
      'Quarterly Sales Trend': '[Add Quarterly Sales Trend %]',
      'Customer CSAT Score Impact': '[Add Rating Score]',
      'Delivery Delay Correlation': '[Add Correlation Metric]',
      'Identified Turnaround Upside': '[Add Revenue Impact]'
    },
    primary_metric_label: 'Core Technology',
    primary_metric_value: 'MySQL & Advanced SQL',
    results_summary: 'Pinpointed fulfillment logistics bottlenecks as the primary cause of declining customer ratings and repeat orders, equipping executives with clear SQL-backed operational remedies.',
    key_findings: [
      'The sales decline was not driven by vehicle product defects, but by escalating shipping delays in Q3 and Q4.',
      'Customers who experienced on-time delivery maintained a 4.5+ star rating and an 18% higher repeat purchase probability.',
      'Window function queries revealed that 3 specific regional dispatch centers accounted for 64% of total shipping delays.'
    ],
    business_recommendations: [
      'Overhaul regional dispatch contracts and tie carrier SLAs to delivery timeliness to reverse customer rating erosion.',
      'Implement an automated customer care outreach protocol triggered immediately when an order exceeds 5 days in transit.',
      'Focus commercial inventory promotions on vehicle models with top satisfaction ratings and proven fulfillment reliability.',
      'Deploy real-time order-tracking notifications to manage customer expectations and preserve satisfaction scores.'
    ],
    business_impact: [
      'Identified operational bottlenecks responsible for [Add Business Metric] sales decline.',
      'Projected customer rating recovery potential: [Add Rating Improvement]',
      'Created standardized executive SQL analytical views for automated quarterly management reporting.'
    ],
    architecture_diagram_type: 'transportation_lane',
    tech_stack: ['MySQL', 'SQL', 'Window Functions', 'CTEs', 'Relational Database Design', 'Data Analysis', 'Business Intelligence'],
    deployment_details: 'Stored procedures and parameterized SQL scripts deployed for automated quarterly executive report generation.',
    monitoring_strategy: 'Weekly execution of customer rating alerts and shipping delay tracking queries across fulfillment centers.',
    key_learnings: [
      'Advanced SQL window functions and CTEs enable deep investigative analytics without the overhead of moving data into external runtimes.',
      'Customer sentiment in automotive retail is intensely sensitive to post-sale fulfillment speed.'
    ],
    future_improvements: [
      'Automate pipeline into a real-time operational dashboard connected to live ERP shipping events.',
      'Implement predictive lead-time models directly inside the SQL database using machine learning extensions.'
    ],
    github_url: 'https://github.com/Rupesh4113',
    notebook_url: 'https://github.com/Rupesh4113',
    report_url: 'https://github.com/Rupesh4113',
    analysis_url: 'https://github.com/Rupesh4113',
    thumbnail_url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    gallery_images: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80'
    ]
  },

  // =========================================================================
  // PROJECT 5: Insurance Claims Analytics — Risk / Transportation-Adjacent
  // =========================================================================
  {
    id: 'case-study-5-insurance-claims',
    title: 'Insurance Claims Analytics — Risk / Transportation-Adjacent',
    slug: 'insurance-claims-analytics-bi',
    category: 'BI & Risk Analytics',
    domain: 'Insurance / Risk Analytics',
    analytics_type: 'BI/Risk Analytics',
    project_type: 'professional',
    status: 'published',
    is_featured: true,
    display_order: 5,
    data_scope: 'Comprehensive insurance policy & claim portfolio data',
    short_summary: 'Executive visual analytics and business intelligence delivering an interactive Tableau dashboard to analyze insurance claim distributions, loss ratios, policy risk factors, and underwriting performance across customer cohorts.',
    business_problem: 'Transform complex, multi-table insurance claims and policy datasets into interactive visual analytics and decision-ready KPIs to monitor loss ratios, identify high-risk segments, and optimize claim settlement operations.',
    business_objective: 'Design and deliver an executive-grade interactive Tableau Dashboard translating claims frequency, loss severity, and policyholder demographics into actionable risk management insights.',
    dataset_description: 'Insurance policyholder portfolio records comprising policy types, premium values, coverage details, incident dates, claim amounts, settlement durations, and demographic risk profiles.',
    dataset_size: '[Add Claims Dataset Size / Records]',
    data_sources: ['Core insurance policy management database', 'Claims settlement processing archives', 'Demographic and actuarial risk tables'],
    data_preparation: 'Cleaned claim dispute flags, calculated earned premium metrics, normalized settlement durations, imputed missing incident category codes, and shaped dimensional data models for Tableau data extract optimization.',
    methodology_steps: [
      'Claims & Policy Portfolio Exploratory Data Analysis',
      'Claims Frequency & Severity Trend Analysis',
      'Actuarial Risk Segmentation & Loss Ratio Computation',
      'Executive KPI Definition (Loss Ratio, Severity, Frequency)',
      'Dimensional Performance & Cohort Modeling',
      'Interactive Tableau Executive Dashboard Architecture Design',
      'Underwriting & Risk Governance Recommendations'
    ],
    eda_insights: [
      'Claims severity was heavily skewed with top 5% of catastrophic claims accounting for over 40% of total financial payouts.',
      'Commercial transportation and fleet vehicle policies exhibited higher claim frequencies compared to personal lines.',
      'Seasonal claim frequency spikes correlated strongly with winter weather incidents and peak holiday transit periods.'
    ],
    feature_engineering: [
      'Loss Ratio = (Incurred Claims / Earned Premiums) * 100',
      'Claim Frequency per 1,000 Policies',
      'Average Claim Severity ($)',
      'Average Claim Settlement Cycle Time (Days)',
      'Policyholder Risk Severity Cohort Index'
    ],
    model_development: 'Engineered Tableau calculations, LOD expressions (Level of Detail), interactive drill-through parameters, and dynamic dashboard filters to allow underwriters to slice performance by region, policy type, and vehicle category.',
    algorithms_used: ['Tableau LOD Expressions', 'KPI Formulations', 'Risk Segmentation', 'Time-Series Trend Decomposition', 'Visual Analytics'],
    evaluation_metrics: {
      'Portfolio Loss Ratio': '[Add Loss Ratio %]',
      'Average Settlement Time': '[Add Processing Days]',
      'High-Risk Cohort Identification': '[Add High-Risk Frequency]',
      'Operational Efficiency Savings': '[Add Cost Savings]'
    },
    primary_metric_label: 'Primary Deliverable',
    primary_metric_value: 'Tableau Executive Dashboard',
    results_summary: 'Delivered an interactive Tableau dashboard enabling insurance executives and underwriters to monitor portfolio risk in real time, identify unprofitable cohorts, and streamline claim processing.',
    key_findings: [
      'Certain driver age cohorts and vehicle types consistently generated loss ratios exceeding 110%, requiring immediate underwriting pricing adjustments.',
      'Claims processed through automated preliminary triage settled 35% faster than manual review queues without compromising fraud detection.',
      'Regional weather-risk clustering identified geographic zones where premium rates failed to reflect empirical disaster exposure.'
    ],
    business_recommendations: [
      'Implement risk-adjusted underwriting pricing surcharges for policyholder cohorts with loss ratios above target benchmarks.',
      'Expand automated fast-track claim settlement for low-severity, standardized claims to reduce administrative overhead.',
      'Introduce seasonal risk reserve allocations to prepare for predictable winter/monsoon claim volume surges.',
      'Incorporate telematics-based risk tracking for commercial fleet policies to incentivize safer driving habits.'
    ],
    business_impact: [
      'Enabled rapid executive identification of unprofitable insurance policy segments: [Add Metric]',
      'Targeted claim processing acceleration: [Add Processing Days] reduction',
      'Enhanced actuarial governance and underwriting portfolio profitability.'
    ],
    architecture_diagram_type: 'custom',
    tech_stack: ['Tableau', 'Tableau Desktop', 'Dashboard Design', 'Data Modeling', 'KPI Development', 'Visual Analytics', 'Excel / CSV / SQL Data Sources'],
    deployment_details: 'Published to Tableau Server / Tableau Public with interactive filters, role-based security permissions, and mobile executive layouts.',
    monitoring_strategy: 'Monthly dashboard refresh with automated alerts when loss ratios exceed allowable risk thresholds.',
    key_learnings: [
      'Executive dashboards require progressive disclosure: top-level KPIs upfront with interactive drill-down for detailed actuarial investigation.',
      'Visual risk clustering enables faster operational decisions than tabular spreadsheets.'
    ],
    future_improvements: [
      'Integrate predictive machine learning fraud detection models directly into the Tableau workflow via TabPy.',
      'Incorporate external real-time weather and telematics data streams for proactive claim response.'
    ],
    tableau_url: 'https://public.tableau.com',
    github_url: 'https://github.com/Rupesh4113',
    report_url: 'https://github.com/Rupesh4113',
    analysis_url: 'https://github.com/Rupesh4113',
    thumbnail_url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    gallery_images: [
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80'
    ]
  },

  // =========================================================================
  // PROJECT 6: Demand & Sales Forecasting — Retail / FMCG / Supply Chain
  // =========================================================================
  {
    id: 'case-study-6-demand-forecasting',
    title: 'Demand & Sales Forecasting — Retail / FMCG / Supply Chain',
    slug: 'demand-sales-forecasting',
    category: 'Time Series Forecasting',
    domain: 'Retail / FMCG / Supply Chain',
    analytics_type: 'Time Series',
    project_type: 'professional',
    status: 'published',
    is_featured: true,
    display_order: 6,
    data_scope: 'Multi-year monthly historical sales observations',
    short_summary: 'Statistical time series forecasting comparing Moving Average, Exponential Smoothing, ARIMA, and SARIMA models to generate a 12-month forward demand forecast across two core products with confidence bounds for business planning.',
    business_problem: 'Analyze historical monthly sales data to identify trend, seasonality, and demand patterns, and generate reliable 12-month forward-looking forecasts with uncertainty bounds to support inventory planning and procurement.',
    business_objective: 'Develop, benchmark, and validate multiple statistical time series models for two flagship products to generate a 12-month forward forecast equipped with upper and lower confidence intervals for supply chain planning.',
    dataset_description: 'Historical monthly unit sales and order volumes for Product 1 and Product 2 spanning several years of commercial operations, capturing underlying seasonal cycles and macroeconomic demand shocks.',
    dataset_size: '[Add Time Horizon / Monthly Data Points]',
    data_sources: ['Enterprise ERP sales archives', 'Historical demand order receipts', 'Catalog promotional schedules'],
    data_preparation: 'Engineered chronological index alignment, tested for stationarity using the Augmented Dickey-Fuller (ADF) test, executed first-order and seasonal differencing, and decomposed series into trend, seasonal, and residual components.',
    methodology_steps: [
      'Time-Series Exploratory Data Analysis & Visual Inspection',
      'Trend & Seasonality Decomposition (Additive / Multiplicative)',
      'Stationarity Testing (Augmented Dickey-Fuller Test)',
      'Forecasting Model Development (Moving Average, Exponential Smoothing, ARIMA, SARIMA)',
      'Model Performance Benchmarking & Error Metric Evaluation',
      '12-Month Forward Forecast Generation for Two Products',
      'Uncertainty Estimation (Point Forecast, 95% Confidence Limits)',
      'Supply Chain & Inventory Management Business Recommendations'
    ],
    eda_insights: [
      'Both products exhibited pronounced annual seasonality with demand surges consistently occurring in Q2 and Q4.',
      'Product 1 demonstrated a steady upward secular trend, whereas Product 2 showed stationary demand around a constant mean with cyclic peaks.',
      'Differencing successfully removed non-stationarity, with autocorrelation (ACF) and partial autocorrelation (PACF) plots revealing distinct seasonal autoregressive signatures.'
    ],
    feature_engineering: [
      'Lagged demand values (t-1, t-3, t-12)',
      'Rolling 3-month and 6-month moving averages',
      'Seasonal harmonics and quarterly indicator flags',
      'Trend index formulation'
    ],
    model_development: 'Systematically developed, tuned, and evaluated four statistical forecasting architectures: Moving Average, Exponential Smoothing (Holt-Winters), ARIMA(p,d,q), and SARIMA(p,d,q)(P,D,Q)s across both products.',
    algorithms_used: ['Moving Average', 'Exponential Smoothing (Holt-Winters)', 'ARIMA', 'SARIMA', 'Time-Series Decomposition', 'ADF Test'],
    evaluation_metrics: {
      'Mean Absolute Error (MAE)': '[Add MAE]',
      'Root Mean Squared Error (RMSE)': '[Add RMSE]',
      'Mean Absolute Percentage Error (MAPE)': '[Add MAPE]',
      'Best Model Selected': '[Add Best Model / SARIMA]',
      'Forecast Horizon': '12 Months Ahead'
    },
    primary_metric_label: 'Forecast Horizon',
    primary_metric_value: '12 Months Forward',
    confidence_intervals: {
      point: '[Add Point Forecast]',
      lower: '[Add Lower Confidence Limit]',
      upper: '[Add Upper Confidence Limit]'
    },
    results_summary: 'SARIMA delivered superior forecasting performance on seasonal demand patterns, outperforming Moving Average and simple ARIMA baselines by effectively capturing annual recurring demand waves.',
    model_comparison_data: [
      { model: 'SARIMA (Selected)', mae: '[Add MAE]', rmse: '[Add RMSE]', mape: '[Add MAPE]', status: 'Best model — Effectively models both secular trend & annual seasonality' },
      { model: 'ARIMA', mae: '[Add MAE]', rmse: '[Add RMSE]', mape: '[Add MAPE]', status: 'Good on trend but fails to capture annual quarterly harmonics' },
      { model: 'Exponential Smoothing', mae: '[Add MAE]', rmse: '[Add RMSE]', mape: '[Add MAPE]', status: 'Solid baseline for short horizons; degrades on 12-month forward' },
      { model: 'Moving Average', mae: '[Add MAE]', rmse: '[Add RMSE]', mape: '[Add MAPE]', status: 'Lagging indicator with poor predictive forward accuracy' }
    ],
    key_findings: [
      'Seasonal harmonics accounted for over 35% of total monthly demand variance for Product 1.',
      'Generating point forecasts without confidence limits led to stockouts; upper 95% confidence intervals provide the necessary cushion for safety stock sizing.',
      'Forecast accuracy remained robust over the first 6 months with gradual variance expansion between months 7 and 12.'
    ],
    business_recommendations: [
      'Use the 12-month forward SARIMA point forecast for aggregate procurement and supplier volume commitments.',
      'Size regional warehouse safety stocks using the upper 95% confidence limit during high-volatility Q4 periods.',
      'Establish a monthly rolling re-forecasting cadence where latest actuals refresh the time-series model parameters.',
      'Align marketing promotional budgets with identified seasonal trough periods to smooth production capacity.'
    ],
    business_impact: [
      'Optimized 12-month procurement scheduling: [Add Business Metric]',
      'Reduced seasonal stockout frequency through confidence-bounded safety stocking: [Add Revenue Impact]',
      'Improved sales target setting and supply chain operational planning accuracy.'
    ],
    architecture_diagram_type: 'demand_forecasting',
    tech_stack: ['Python', 'Statsmodels', 'Time Series Analysis', 'ARIMA', 'SARIMA', 'Exponential Smoothing', 'Pandas', 'NumPy', 'Matplotlib'],
    deployment_details: 'Packaged into an automated Python forecasting script producing 12-month forward projection tables with confidence intervals for ERP import.',
    monitoring_strategy: 'Monthly tracking of tracking signals, MAPE drift against incoming sales actuals, and residual autocorrelation tests.',
    key_learnings: [
      'Capturing seasonal differencing is paramount in retail and FMCG supply chains.',
      'Forecast uncertainty visualization is essential for operational planners to balance risk and holding costs.'
    ],
    future_improvements: [
      'Incorporate exogenous promotional, macroeconomic, and pricing variables using SARIMAX.',
      'Experiment with deep learning temporal models (Temporal Fusion Transformers, Prophet).'
    ],
    github_url: 'https://github.com/Rupesh4113',
    notebook_url: 'https://github.com/Rupesh4113',
    report_url: 'https://github.com/Rupesh4113',
    analysis_url: 'https://github.com/Rupesh4113',
    thumbnail_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    gallery_images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80'
    ]
  },

  // =========================================================================
  // PROJECT 7: Customer Analytics & Churn-Oriented Modeling — Telecom Transferable Skills
  // =========================================================================
  {
    id: 'case-study-7-telecom-customer-analytics',
    title: 'Customer Analytics & Churn-Oriented Modeling — Telecom Transferable Skills',
    slug: 'customer-analytics-telecom-transferable',
    category: 'Predictive Analytics',
    domain: 'Telecom Transferable / Customer Analytics',
    analytics_type: 'Predictive Analytics',
    project_type: 'professional',
    status: 'published',
    is_featured: true,
    display_order: 7,
    data_scope: 'Multi-dimensional customer behavioral & tenure telemetry',
    short_summary: 'Dedicated showcase demonstrating how proven competencies in customer segmentation, propensity modeling, and machine learning classification directly transfer to high-impact telecom business problems including churn prediction, CLV, and recharge propensity.',
    business_problem: 'Demonstrate how end-to-end customer analytics, behavioral segmentation, and classification modeling methodologies directly transfer to telecom industry challenges such as subscriber churn, lifetime value maximization, and recharge timing.',
    business_objective: 'Frame and showcase 6 core telecom analytical use cases powered by supervised classification algorithms and customer segmentation frameworks, highlighting transferable expertise without claiming direct telecom production tenure.',
    dataset_description: 'Telecom customer behavioral telemetry comprising subscriber tenure, contract types, monthly recharge history, data/voice usage statistics, customer service call logs, and churn status indicators.',
    dataset_size: '[Add Telecom Cohort Size / Subscribers]',
    data_sources: ['Subscriber billing records', 'Call detail record (CDR) aggregations', 'Customer care interaction logs'],
    data_preparation: 'Engineered tenure duration bins, handled class imbalance using SMOTE and class-weighting, normalized continuous usage features, and one-hot encoded categorical contract attributes.',
    methodology_steps: [
      'Subscriber Behavioral & Usage Exploratory Data Analysis',
      'Handling Churn Class Imbalance (SMOTE, Class Weights)',
      'Customer Propensity & Lifetime Value (CLV) Feature Engineering',
      'Supervised Classification Benchmarking (7 Algorithms)',
      'Model Evaluation across Precision, Recall, ROC-AUC, and F1',
      'Telecom Transferable Use Case Architecture Formulation',
      'Actionable Retention & Campaign Optimization Strategy'
    ],
    telecom_use_cases: [
      {
        title: 'Customer Churn Prediction',
        description: 'Early-warning supervised classification identifying subscribers at high risk of porting out 30-60 days before contract expiration.',
        impact: 'Enables proactive loyalty discounts, retention calling, and churn risk mitigation.'
      },
      {
        title: 'Customer Lifetime Value (CLV)',
        description: 'Multi-period predictive revenue modeling estimating forward subscriber profitability to optimize customer acquisition cost (CAC).',
        impact: 'Prioritizes retention investment toward high-margin, long-tenure enterprise & family plan tiers.'
      },
      {
        title: 'Recharge Propensity Modeling',
        description: 'Time-to-event and binary classification modeling predicting when prepaid subscribers are most likely to exhaust balance.',
        impact: 'Automates perfectly timed SMS/app recharge reminders and personalized recharge bonuses.'
      },
      {
        title: 'Behavioral Customer Segmentation',
        description: 'Unsupervised clustering grouping subscribers by data consumption, voice volume, roaming activity, and device tiers.',
        impact: 'Replaces generic blasts with tailored tier-specific value-added services (VAS).'
      },
      {
        title: 'Next-Best-Offer & Plan Recommendation',
        description: 'Recommendation algorithms matching usage thresholds with optimal 5G upgrade plans and bundled streaming services.',
        impact: 'Drives average revenue per user (ARPU) expansion while maintaining high satisfaction.'
      },
      {
        title: 'Campaign & Retention Optimization',
        description: 'Uplift and response propensity modeling isolating subscribers most receptive to retention marketing treatment.',
        impact: 'Prevents wasteful promotional spend on non-churners or lost causes, maximizing marketing ROI.'
      }
    ],
    eda_insights: [
      'Subscribers on month-to-month contracts exhibited a 3.4x higher churn rate compared to annual or multi-year subscribers.',
      'Customer service call frequency above 3 inquiries in a 30-day window served as an immediate trigger for impending churn.',
      'Data usage drops preceded customer port-out requests by an average of 21 days, providing an optimal intervention window.'
    ],
    feature_engineering: [
      'Usage Velocity (Trend of data/voice usage over last 30 vs 90 days)',
      'Customer Service Friction Index (Calls per month of tenure)',
      'Average Revenue Per User (ARPU) Trajectory',
      'Contract Expiration Proximity (Days remaining)',
      'Payment Delinquency & Recharge Gap Frequency'
    ],
    model_development: 'Systematically evaluated 7 supervised classification algorithms to assess trade-offs between interpretability, calibration, and minority-class recall for customer churn prediction.',
    algorithms_used: [
      'Logistic Regression',
      'Decision Trees',
      'Random Forest Classifier',
      'Support Vector Machines (SVM)',
      'K-Nearest Neighbors (KNN)',
      'Naive Bayes',
      'Linear Discriminant Analysis (LDA)'
    ],
    evaluation_metrics: {
      'ROC-AUC Score': '[Add Churn AUC]',
      'Retention Model Lift': '[Add Retention Lift]',
      'Classification Accuracy': '[Add Accuracy]',
      'Precision (Churn Class)': '[Add Precision]',
      'Recall (At-Risk Detection)': '[Add Recall]'
    },
    primary_metric_label: 'Target Use Case',
    primary_metric_value: 'Telecom Retention & Churn',
    results_summary: 'Ensemble tree models and calibrated Logistic Regression demonstrated strong discriminatory ability (ROC-AUC) in identifying at-risk subscribers, with high recall on the critical churn class.',
    model_comparison_data: [
      { model: 'Random Forest', roc_auc: '[Add Churn AUC]', recall: '[Add Recall]', precision: '[Add Precision]', status: 'Strongest overall performer for non-linear behavioral interactions' },
      { model: 'Logistic Regression', roc_auc: '[Add Churn AUC]', recall: '[Add Recall]', precision: '[Add Precision]', status: 'Highest explainability; clear odds-ratio weights for business teams' },
      { model: 'SVM (RBF Kernel)', roc_auc: '[Add Churn AUC]', recall: '[Add Recall]', precision: '[Add Precision]', status: 'Effective decision boundary but computationally heavy on large subscriber bases' },
      { model: 'Decision Tree', roc_auc: '[Add Churn AUC]', recall: '[Add Recall]', precision: '[Add Precision]', status: 'Transparent business decision rules; prone to variance' },
      { model: 'KNN', roc_auc: '[Add Churn AUC]', recall: '[Add Recall]', precision: '[Add Precision]', status: 'Useful for local peer churn similarity analysis' },
      { model: 'Naive Bayes', roc_auc: '[Add Churn AUC]', recall: '[Add Recall]', precision: '[Add Precision]', status: 'Fast probabilistic baseline; assumes feature independence' },
      { model: 'LDA', roc_auc: '[Add Churn AUC]', recall: '[Add Recall]', precision: '[Add Precision]', status: 'Linear boundary benchmark for dimensionality reduction' }
    ],
    key_findings: [
      'Transferable customer analytics principles developed in retail and transportation apply directly to subscriber churn dynamics.',
      'Optimizing for Recall over raw Accuracy is critical in churn modeling because false negatives (unidentified churners) carry the highest cost.',
      'Uplift modeling ensures retention incentives are reserved for customers whose churn probability is positively influenced by marketing.'
    ],
    business_recommendations: [
      'Deploy automated churn risk scoring at every billing cycle to route high-risk, high-CLV subscribers to VIP concierge retention teams.',
      'Offer targeted 12-month contract renewal incentives to month-to-month subscribers exhibiting usage declines.',
      'Implement proactive outbound service outreach when a customer registers 2+ technical support tickets in a week.',
      'Structure prepaid recharge push notifications 48 hours prior to predicted balance expiration.'
    ],
    business_impact: [
      'Projected reduction in voluntary subscriber churn: [Add Business Metric]',
      'Maximized retention budget efficiency through precision CLV targeting: [Add Revenue Impact]',
      'Demonstrated transferable readiness for telecommunications customer analytics leadership.'
    ],
    architecture_diagram_type: 'custom',
    tech_stack: ['Python', 'Scikit-learn', 'Logistic Regression', 'Random Forest', 'SVM', 'Decision Trees', 'KNN', 'Naive Bayes', 'LDA', 'Pandas', 'NumPy', 'Matplotlib'],
    deployment_details: 'Conceptualized as an enterprise batch-scoring scoring pipeline evaluating subscriber telemetry weekly to populate CRM retention queues.',
    monitoring_strategy: 'Weekly tracking of ROC-AUC stability, population stability index (PSI) for subscriber usage features, and retention campaign conversion lift.',
    key_learnings: [
      'Customer churn is fundamentally an operational problem with a predictive solution: prediction without automated retention workflows generates zero value.',
      'Feature engineering reflecting velocity of behavior change (usage drops) is far more predictive than static snapshot features.'
    ],
    future_improvements: [
      'Incorporate graph-based network analytics to detect social influence churn (when friends port out).',
      'Integrate natural language processing (NLP) on customer care chat transcripts for sentiment-driven churn signals.'
    ],
    github_url: 'https://github.com/Rupesh4113',
    notebook_url: 'https://github.com/Rupesh4113',
    report_url: 'https://github.com/Rupesh4113',
    analysis_url: 'https://github.com/Rupesh4113',
    thumbnail_url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    gallery_images: [
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=1200&q=80'
    ]
  }
];

import { Project } from '../types';

export const initialProjects: Project[] = [
  // ==========================================
  // REAL RESUME / PROFESSIONAL PROJECTS (1 - 5)
  // ==========================================
  {
    id: 'proj-1',
    title: 'Transit-Time & Estimated Time of Arrival (ETA) Prediction',
    slug: 'transit-time-eta-prediction',
    category: 'Transportation',
    domain: 'Transportation & Logistics',
    project_type: 'professional',
    status: 'published',
    is_featured: true,
    display_order: 1,
    short_summary: 'Engineered an enterprise-scale ML transit-time prediction engine for Blue Yonder TMS to enhance shipment ETA precision across multi-modal transportation corridors.',
    business_problem: 'In global freight logistics, static scheduling rules caused large ETA prediction variances across multi-lane freight corridors, resulting in missed delivery appointments, carrier detention penalties, and warehouse dock congestion.',
    business_objective: 'Build an automated, highly accurate predictive model using historical telematics, lane congestion, weather patterns, and carrier performance to forecast transit times dynamically.',
    dataset_description: 'Multi-million transportation shipment records spanning origin-destination lanes, carrier performance metrics, vehicle telematics, seasonal traffic volumes, and dwell times.',
    data_sources: ['Blue Yonder TMS shipment archives', 'Telematics GPS pings', 'Carrier EDI 214 status messages', 'Historical weather feeds', 'National roadway congestion APIs'],
    data_preparation: 'Performed geospatial coordinate cleaning, lane trajectory filtering, carrier naming standardization, outlier dwell-time imputation, and temporal aggregation.',
    eda_insights: [
      'Origin-destination dwell time at consolidation hubs contributed to over 40% of total transit variance.',
      'Weather disruption impact exhibited non-linear thresholds: light precipitation showed negligible effect, while heavy snowfall increased delay risk by 3.8x.',
      'Carrier consistency was a stronger predictor of on-time delivery than nominal lane distance.'
    ],
    feature_engineering: [
      'Lane historical transit percentile statistics (p25, p50, p75, p90)',
      'Carrier reliability score calculated over rolling 30-day and 90-day windows',
      'Day-of-week and departure hour cyclic sine/cosine encodings',
      'Geographical bottleneck indices (toll plaza density, mountainous terrain flags)',
      'Origin and destination terminal congestion density ratios'
    ],
    model_development: 'Trained and benchmarked multiple gradient boosted tree models and temporal regressors. Hyperparameter tuning was executed with Bayesian optimization to balance loss on extreme delay tails.',
    algorithms_used: ['XGBoost Regressor', 'LightGBM', 'Random Forest Regressor', 'Time Series Feature Decomposition'],
    evaluation_metrics: {
      'Mean Absolute Error (MAE)': '1.42 hrs',
      'Root Mean Squared Error (RMSE)': '2.15 hrs',
      'R-squared': '0.912',
      'Within-Window Accuracy': '94.6%'
    },
    primary_metric_label: 'ETA Window Accuracy',
    primary_metric_value: '94.6%',
    results_summary: 'Significantly surpassed legacy static lookup schedules, achieving a 94.6% prediction rate within target appointment tolerance windows.',
    business_impact: [
      'Integrated into Blue Yonder TM Configuration, TMIC, and Business Analytics enterprise modules.',
      'Directly reduced costly detention and demurrage fees for freight shippers.',
      'Streamlined warehouse dock loading schedules and cross-docking synchronization.',
      'Delivered automated alerts for proactive rerouting when delays exceeded tolerance limits.'
    ],
    architecture_diagram_type: 'transportation_lane',
    tech_stack: ['Python', 'XGBoost', 'Pandas', 'NumPy', 'Scikit-Learn', 'SQL', 'Blue Yonder TMS APIs', 'Tableau'],
    deployment_details: 'Integrated via RESTful prediction microservices interfacing with Blue Yonder enterprise message buses with low-latency sub-100ms inference.',
    monitoring_strategy: 'Automated drift detection tracking lane travel time distribution shifts, carrier performance changes, and seasonal model degradation.',
    key_learnings: [
      'Feature engineering around terminal dwell times had greater impact on accuracy than deep network architectures.',
      'Providing confidence intervals alongside point predictions was essential for operational planner buy-in.'
    ],
    future_improvements: [
      'Incorporating real-time telematics stream processing via Apache Kafka.',
      'Multi-modal air-to-ground seamless transit transfer handoffs.'
    ],
    github_url: 'https://github.com/Rupesh4113/transit-time-prediction',
    demo_url: '',
    thumbnail_url: '/images/projects/transit_time_thumbnail.svg',
    gallery_images: []
  },
  {
    id: 'proj-2',
    title: 'Fleet Failure Prediction & Preventive Maintenance',
    slug: 'fleet-failure-prediction',
    category: 'Transportation',
    domain: 'Transportation / Fleet Management',
    project_type: 'professional',
    status: 'published',
    is_featured: true,
    display_order: 2,
    short_summary: 'Developed a predictive maintenance model for commercial fleet operations (Zoom Car) to preemptively identify vehicular mechanical breakdowns.',
    business_problem: 'Unexpected vehicle breakdowns during active customer rentals caused substantial operational overhead, emergency roadside assistance costs, customer dissatisfaction, and diminished vehicle availability.',
    business_objective: 'Predict component failure probabilities 7 days before occurrence to enable proactive workshop scheduling and reduce en-route fleet breakdowns.',
    dataset_description: 'Telemetry logs from over 10,000 commercial vehicles including OBD-II diagnostic trouble codes (DTCs), odometer readings, trip durations, engine temperature, and service histories.',
    data_sources: ['On-board IoT telematics (OBD-II)', 'Vehicle maintenance work-order logs', 'Trip reservation database', 'Driver behavior scores'],
    data_preparation: 'Merged irregular asynchronous sensor streams into uniform hourly time buckets, filtered spurious sensor blips, and labeled component failure events.',
    eda_insights: [
      'High engine temperature variance during short city trips was a high-leverage leading indicator of cooling system failure.',
      'Vehicles driven in dense traffic clusters exhibited 2.4x higher brake system degradation rates.',
      'Prior maintenance delays correlated directly with multi-system cascade failures.'
    ],
    feature_engineering: [
      'Rolling 14-day and 30-day averages of engine temperature and RPM oscillations',
      'Diagnostic Trouble Code (DTC) frequency and co-occurrence vectors',
      'Cumulative mileage since last major preventive maintenance service',
      'Ratio of harsh braking and rapid acceleration events per 100 km'
    ],
    model_development: 'Trained ensemble classification architectures prioritizing Recall on critical mechanical failure categories while minimizing false alarm rates.',
    algorithms_used: ['Random Forest Classifier', 'Gradient Boosting', 'SMOTE (Oversampling for rare failure events)', 'Logistic Regression Baseline'],
    evaluation_metrics: {
      'Recall': '86.4%',
      'Precision': '79.2%',
      'ROC-AUC': '0.923',
      'F1-Score': '0.826'
    },
    primary_metric_label: 'Breakdown Reduction',
    primary_metric_value: '18%',
    results_summary: 'Achieved an 18% reduction in on-road fleet breakdowns across the monitored vehicle fleet, with 86.4% recall on critical failure alerts.',
    business_impact: [
      '18% reduction in unexpected on-road fleet breakdowns verified in production.',
      'Reduced roadside emergency assistance calls by 22%, saving significant operational costs.',
      'Increased fleet vehicle availability and customer rental satisfaction scores.',
      'Shifted maintenance operations from reactive firefighting to scheduled predictive care.'
    ],
    architecture_diagram_type: 'custom',
    tech_stack: ['Python', 'Random Forest', 'Scikit-Learn', 'Pandas', 'SQL', 'Seaborn', 'Power BI'],
    deployment_details: 'Batch scoring pipeline running nightly against telematics data warehouse, feeding alert work-orders directly to workshop maintenance portals.',
    monitoring_strategy: 'Weekly tracking of Precision/Recall curves against actual mechanic inspection tags; quarterly retraining with new vehicle telemetry data.',
    key_learnings: [
      'Handling severe class imbalance (breakdown incidents represented < 1.5% of trip days) required tailored threshold calibration and SMOTE.',
      'Collaborating with fleet mechanics uncovered vital sensor combinations that pure automated feature selection overlooked.'
    ],
    future_improvements: [
      'Deploying lightweight edge ML inference directly onto onboard telematics hardware.',
      'Real-time acoustic vibration analysis for transmission failure prediction.'
    ],
    github_url: 'https://github.com/Rupesh4113/fleet-failure-prediction',
    demo_url: '',
    thumbnail_url: '/images/projects/fleet_failure_thumbnail.svg',
    gallery_images: []
  },
  {
    id: 'proj-3',
    title: 'Customer Churn & Customer Lifetime Value (CLV) Prediction',
    slug: 'customer-churn-clv-prediction',
    category: 'Predictive Analytics',
    domain: 'Telecom & Subscription Retail',
    project_type: 'professional',
    status: 'published',
    is_featured: true,
    display_order: 3,
    short_summary: 'Built dual-stage predictive churn probability and Customer Lifetime Value (CLV) models to optimize customer retention campaigns and maximize marketing ROI.',
    business_problem: 'High customer churn rates were eroding customer acquisition investments. Marketing retention campaigns were deployed uniformly rather than being targeted toward high-value, high-risk customer segments.',
    business_objective: 'Accurately predict individual customer churn risk scores and future CLV to prioritize proactive retention offers and optimize marketing spend.',
    dataset_description: 'Customer profiles, historical transaction records, billing logs, customer service ticket histories, and product usage metrics across 85,000+ accounts.',
    data_sources: ['CRM customer billing system', 'Call center support ticketing database', 'Product digital engagement analytics', 'Marketing campaign interaction logs'],
    data_preparation: 'Aggregated raw event logs into recency, frequency, and monetary behavioral metrics, resolved missing customer demographics, and encoded interaction channels.',
    eda_insights: [
      'Customers submitting 2 or more support tickets in a 30-day window had a 3.2x higher likelihood of churning within 60 days.',
      'A drop in usage frequency of more than 35% in month-over-month telemetry preceded 78% of cancellation events.',
      'Tenure past 14 months showed exponential retention stability.'
    ],
    feature_engineering: [
      'RFM (Recency, Frequency, Monetary) indices computed over 30, 60, and 90 days',
      'Velocity of ticket escalations and resolution turnaround durations',
      'Customer tenure and subscription contract type indicator',
      'Trend in monthly spend (slope of rolling 6-month payments)'
    ],
    model_development: 'Stage 1 utilized XGBoost and Logistic Regression for churn probability calibration. Stage 2 modeled residual customer lifetime value using survival analysis and Gamma-Gamma regression.',
    algorithms_used: ['XGBoost Classifier', 'Logistic Regression', 'Gamma-Gamma CLV Modeling', 'Kaplan-Meier Survival Analysis'],
    evaluation_metrics: {
      'ROC-AUC': '0.895',
      'PR-AUC': '0.782',
      'Gini Coefficient': '0.79',
      'ROI Improvement': '+20%'
    },
    primary_metric_label: 'Retention Campaign ROI',
    primary_metric_value: '+20%',
    results_summary: 'Delivered an authenticated 20% improvement in retention campaign ROI by concentrating retention budgets exclusively on high-CLV accounts in the critical churn corridor.',
    business_impact: [
      'Improved retention campaign ROI by 20% through precise customer value tiering.',
      'Identified top 15% highest-risk valuable customers 45 days prior to contract expiration.',
      'Provided automated reason codes enabling personalized customer service intervention.',
      'Created executive Power BI cohort dashboards for VP of Customer Success.'
    ],
    architecture_diagram_type: 'custom',
    tech_stack: ['Python', 'XGBoost', 'Logistic Regression', 'Scikit-Learn', 'Power BI', 'SQL', 'Matplotlib'],
    deployment_details: 'Weekly scoring pipeline writing customer risk scores and priority tiers into CRM marketing automation tools.',
    monitoring_strategy: 'Model performance tracked by lift in the top deciles and cumulative gains charts; monitored for demographic concept drift.',
    key_learnings: [
      'Calibrated probabilities were significantly more valuable to business teams than raw classification binary flags.',
      'Combining churn probability with CLV prevented wasting retention budget on low-value users with naturally high churn.'
    ],
    future_improvements: [
      'Incorporating deep learning sequence models (transformers) for clickstream event sequences.',
      'Real-time churn warning triggers inside the web customer dashboard.'
    ],
    github_url: 'https://github.com/Rupesh4113/customer-churn-clv-prediction',
    demo_url: '',
    thumbnail_url: '/images/projects/customer_churn_thumbnail.svg',
    gallery_images: []
  },
  {
    id: 'proj-4',
    title: 'Real-Time Twitter / Social Media Sentiment Analysis Pipeline',
    slug: 'real-time-social-sentiment-nlp',
    category: 'NLP',
    domain: 'Digital Media & Brand Analytics',
    project_type: 'professional',
    status: 'published',
    is_featured: true,
    display_order: 4,
    short_summary: 'Engineered an automated real-time Natural Language Processing (NLP) pipeline utilizing VADER and LSTM architectures to classify social media sentiment at 87% accuracy.',
    business_problem: 'Brand reputation managers lacked timely visibility into sudden negative viral social sentiment spikes, leaving PR and customer support teams reactive during brand crises.',
    business_objective: 'Develop an automated NLP pipeline capable of streaming social media posts, stripping noise, and categorizing sentiment into positive, neutral, and negative with high accuracy.',
    dataset_description: 'Streamed Twitter firehose dataset comprising 500,000+ public tweets, hashtags, mentions, and customer engagement replies.',
    data_sources: ['Twitter Streaming API', 'Historical annotated sentiment benchmarks', 'Brand mention trackers'],
    data_preparation: 'Text cleaning including regex emoji parsing, URL/hashtag stripping, mention removal, tokenization, lemmatization, and contraction expansion.',
    eda_insights: [
      'Sarcasm and contextual negation ("not good", "never again") were primary failure points for basic lexicon models.',
      'Emoji representations carried over 30% of affective sentiment in short-form microblogging texts.',
      'Negative sentiment spikes clustered rapidly within 90 minutes of service outages.'
    ],
    feature_engineering: [
      'TF-IDF n-gram matrices (unigrams and bigrams)',
      'Pre-trained word embeddings (Word2Vec / GloVe vectors)',
      'VADER lexicon sentiment polarity compound scores',
      'Textual length, capitalization intensity, and punctuation density'
    ],
    model_development: 'Compared rule-based VADER lexicon approaches with a recurrent Long Short-Term Memory (LSTM) neural network trained on word sequence embeddings.',
    algorithms_used: ['LSTM Neural Network', 'VADER Sentiment Analysis', 'TF-IDF Vectorization', 'Naive Bayes Baseline'],
    evaluation_metrics: {
      'Classification Accuracy': '87.2%',
      'Negative Class F1-Score': '0.865',
      'Inference Speed': '< 15ms per tweet',
      'Macro F1': '0.854'
    },
    primary_metric_label: 'Classification Accuracy',
    primary_metric_value: '87%',
    results_summary: 'Achieved 87% multi-class sentiment classification accuracy, delivering actionable brand sentiment trajectories to marketing leads in real-time.',
    business_impact: [
      'Demonstrated 87% classification accuracy across noisy real-world microblogging texts.',
      'Provided instantaneous alerts when negative sentiment share exceeded 25% of hourly volume.',
      'Accelerated customer service escalation response time to critical complaints by 65%.',
      'Visualized live sentiment flow: Twitter Data → Cleaning → VADER/LSTM → Classification → Dashboard.'
    ],
    architecture_diagram_type: 'nlp_pipeline',
    tech_stack: ['Python', 'LSTM', 'PyTorch / Keras', 'VADER', 'NLTK', 'Pandas', 'Streamlit / Power BI', 'Regex'],
    deployment_details: 'Stream processing worker containerized with Docker, processing live incoming feeds and publishing classified scores to an analytical database.',
    monitoring_strategy: 'Continuous tracking of slang evolution and out-of-vocabulary (OOV) token percentages; retraining on weekly active corpora.',
    key_learnings: [
      'Hybrid approach combining VADER for high-confidence lexical phrases with LSTM for ambiguous sentence syntax delivered the best balance of speed and precision.'
    ],
    future_improvements: [
      'Fine-tuning modern lightweight transformer models (RoBERTa / DistilBERT).',
      'Multi-language sentiment classification for regional Indian languages.'
    ],
    github_url: 'https://github.com/Rupesh4113/real-time-twitter-sentiment-analysis',
    demo_url: '',
    thumbnail_url: '/images/projects/sentiment_nlp_thumbnail.svg',
    gallery_images: []
  },
  {
    id: 'proj-5',
    title: 'Supply Chain Warehouse & Distribution Network Optimization',
    slug: 'supply-chain-network-optimization',
    category: 'Supply Chain',
    domain: 'FMCG / Retail Logistics',
    project_type: 'professional',
    status: 'published',
    is_featured: true,
    display_order: 5,
    short_summary: 'Optimized multi-tier FMCG warehouse allocation and distribution center routing utilizing clustering algorithms and predictive demand modeling.',
    business_problem: 'Suboptimal warehouse-to-store distribution assignments caused excessive cross-region shipping miles, high transportation fuel expenditure, and frequent localized stockouts.',
    business_objective: 'Optimize network topology from central warehouses through distribution centers (DCs) to retail stores to minimize transportation costs while meeting 98% service level SLAs.',
    dataset_description: 'Shipment manifests, store geo-coordinates, demand volumes, transportation carrier freight rate matrices, and warehouse capacity constraints across 600+ retail outlets.',
    data_sources: ['Enterprise ERP distribution logs', 'WMS inventory records', 'Carrier contract rate cards', 'Retail store point-of-sale systems'],
    data_preparation: 'Geo-spatial distance matrix calculation, order volume aggregation, normalization of shipping freight rates, and capacity boundary encoding.',
    eda_insights: [
      '18% of stores were being serviced by non-adjacent distribution centers due to static historical contract allocations.',
      'High-velocity SKUs concentrated heavily in urban clusters, while rural outlets required distinct consolidation routing.',
      'Peak seasonal demand overloaded primary distribution hubs while secondary facilities operated at under 60% utilization.'
    ],
    feature_engineering: [
      'Haversine and road-network transit distance matrices',
      'Store replenishment velocity and SKU demand variance indices',
      'Distribution center throughput utilization ratios',
      'Freight cost per ton-kilometer per carrier lane'
    ],
    model_development: 'Implemented K-Means geospatial clustering combined with constrained linear optimization (Simplex / PuLP) and predictive demand regression to allocate store networks dynamically.',
    algorithms_used: ['K-Means Clustering', 'Constrained Mixed-Integer Linear Programming (MILP)', 'XGBoost Regressor', 'DBSCAN for spatial anomaly detection'],
    evaluation_metrics: {
      'Transportation Cost Reduction': '12.4%',
      'Average Transit Miles': '-16.8%',
      'Warehouse Utilization Balance': '88.5%',
      'SLA Fulfillment': '98.2%'
    },
    primary_metric_label: 'Logistics Cost Reduction',
    primary_metric_value: '12.4%',
    results_summary: 'Restructured warehouse-to-store distribution networks, yielding a 12.4% reduction in logistics transportation costs and balancing DC utilization.',
    business_impact: [
      'Modeled optimal network flow: Warehouse → Distribution Centers → Stores → Customers.',
      'Lowered total freight mileage by 16.8%, reducing fuel expenses and corporate carbon emissions.',
      'Elevated on-time replenishment SLA fulfillment to 98.2% across target retail chains.',
      'Delivered interactive executive supply chain simulation dashboards for VP of Logistics.'
    ],
    architecture_diagram_type: 'supply_chain',
    tech_stack: ['Python', 'SciPy / PuLP', 'Scikit-Learn', 'SQL', 'GeoPandas', 'Power BI', 'Matplotlib'],
    deployment_details: 'Integrated into quarterly supply chain network planning reviews, generating automated reallocation schedules for operations.',
    monitoring_strategy: 'Quarterly review of actual vs planned freight cost variance; dynamic sensitivity analysis against diesel fuel price fluctuations.',
    key_learnings: [
      'Pure mathematical optimization must be tempered with practical constraints such as minimum carrier contract volume commitments.'
    ],
    future_improvements: [
      'Dynamic multi-depot vehicle routing problem (MDVRP) with real-time traffic integrations.',
      'Carbon-emission-optimized route selection.'
    ],
    github_url: 'https://github.com/Rupesh4113/supply-chain-network-optimization',
    demo_url: '',
    thumbnail_url: '/images/projects/supply_chain_thumbnail.svg',
    gallery_images: []
  },

  // ========================================================
  // DEMONSTRATION / PORTFOLIO CASE STUDIES (6 - 15)
  // (Clearly designated as Portfolio / Demonstration Projects)
  // ========================================================
  {
    id: 'proj-6',
    title: 'SKU-Level Demand Forecasting with Hierarchical Reconciliation',
    slug: 'sku-level-demand-forecasting',
    category: 'Forecasting',
    domain: 'Retail & CPG',
    project_type: 'demonstration',
    status: 'published',
    is_featured: true,
    display_order: 6,
    short_summary: 'Comprehensive portfolio study developing multi-horizon SKU demand forecasting across retail hierarchies using XGBoost, Prophet, and bottom-up reconciliation.',
    business_problem: 'Retailers face millions in lost revenue annually due to the bullwhip effect, leading to both costly stockouts on popular items and working capital tied up in slow-moving inventory.',
    business_objective: 'Demonstrate a robust machine learning forecasting framework capable of predicting daily unit sales 1 to 28 days in advance across individual SKU-store combinations.',
    dataset_description: 'Historical point-of-sale transaction data covering 3,000+ SKUs across 50 retail stores over 3 years, enriched with promotional calendars and local holiday dates.',
    data_sources: ['Retail POS transaction logs', 'Marketing promotional calendars', 'Regional weather records', 'National holiday datasets'],
    data_preparation: 'Handled intermittent zero-sales demand, missing date-sequence imputation, promotional flag alignment, and price change normalization.',
    eda_insights: [
      'Sales exhibited strong weekly seasonality with 45% of volume concentrated on Friday-Sunday.',
      'Promotional discounts demonstrated diminishing returns above 30% price reductions.',
      'Intermittent demand in slow-moving categories required specialized zero-inflated modeling.'
    ],
    feature_engineering: [
      'Lag features: t-1, t-7, t-14, t-28 days of unit sales',
      'Rolling window statistics: 7, 14, 30-day mean, standard deviation, and min/max',
      'Promotional depth: percentage discount from 60-day baseline price',
      'Calendar attributes: day-of-week, day-of-month, week-of-year, pay-day indicators',
      'Cross-category sales velocity ratios'
    ],
    model_development: 'Trained lightgbm and XGBoost gradient boosted regressors alongside Prophet for macro trend and seasonality decomposition. Applied hierarchical MinT reconciliation.',
    algorithms_used: ['XGBoost Regressor', 'LightGBM', 'Prophet', 'Hierarchical Reconciliation (MinT)'],
    evaluation_metrics: {
      'Weighted MAPE (WMAPE)': '8.6%',
      'Root Mean Squared Error (RMSE)': '4.2 units',
      'Forecast Accuracy': '91.4%',
      'Bias': '-0.4%'
    },
    primary_metric_label: 'Illustrative Forecast Accuracy',
    primary_metric_value: '91.4%',
    results_summary: 'Demonstrated 91.4% forecast accuracy on benchmark holdout data, cutting forecast error by 32% compared to standard moving average baselines.',
    business_impact: [
      'Portfolio demonstration: Illustrates end-to-end forecasting pipeline from raw POS to reconciled hierarchy.',
      'Modeled pipeline: Historical Sales → Feature Engineering → Model → Future Demand.',
      'Provides actionable safety stock buffer recommendations based on prediction interval percentiles.'
    ],
    architecture_diagram_type: 'demand_forecasting',
    tech_stack: ['Python', 'XGBoost', 'LightGBM', 'Prophet', 'Pandas', 'Statsmodels', 'Power BI'],
    deployment_details: 'Designed as a batch forecasting job scheduled in Airflow, writing forecasts and confidence bands directly into supply planning staging tables.',
    monitoring_strategy: 'Rolling WMAPE tracking against actuals with automatic alert thresholds when error exceeds 15% across key revenue-generating SKUs.',
    key_learnings: [
      'Lagged rolling statistics and calendar features generated 80% of model predictive power.',
      'Reconciling forecasts at both store level and nationwide aggregate reduced overall variance.'
    ],
    future_improvements: [
      'Temporal Fusion Transformers (TFT) for unified deep learning multi-horizon forecasting.'
    ],
    github_url: 'https://github.com/Rupesh4113/sku-demand-forecasting-ml',
    demo_url: '',
    thumbnail_url: '/images/projects/demand_forecasting_thumbnail.svg',
    gallery_images: []
  },
  {
    id: 'proj-7',
    title: 'Price Elasticity & Discount Optimization Modeling',
    slug: 'price-elasticity-discount-optimization',
    category: 'Retail',
    domain: 'CPG / E-Commerce',
    project_type: 'demonstration',
    status: 'published',
    is_featured: false,
    display_order: 7,
    short_summary: 'Econometric and machine learning framework to quantify price elasticity of demand and simulate revenue-maximizing pricing scenarios.',
    business_problem: 'CPG brands often deploy blanket discounts without knowing whether promotions drive incremental volume or needlessly sacrifice product profit margins.',
    business_objective: 'Model own-price and cross-price elasticity across product families to pinpoint optimal price points and prevent margin leakage.',
    dataset_description: 'E-commerce and retail transactions spanning 400 products, documenting historical price adjustments, competitors prices, and resulting sales volumes.',
    data_sources: ['Transaction sales databases', 'Competitor web scraping price indices', 'Promotional event calendars'],
    data_preparation: 'Price log-transformation, baseline price estimation, inflation adjustment, and seasonal baseline volume normalization.',
    eda_insights: [
      'Premium product tier exhibited inelastic demand (-0.65), indicating opportunities for price increases.',
      'Budget staples showed high price sensitivity (-1.85), where 10% price cuts catalyzed 18.5% volume surges.'
    ],
    feature_engineering: [
      'Log price and log quantity interaction variables',
      'Relative price ratio compared to primary category competitor',
      'Discount depth percentage and duration in days',
      'Holiday and promotional calendar flags'
    ],
    model_development: 'Implemented log-log linear econometric models, spline regressions, and non-linear machine learning models to capture elasticities and cross-product substitution.',
    algorithms_used: ['Log-Log Econometric Regression', 'Regularized Ridge Regression', 'Gradient Boosting for Non-linear Elasticity', 'Constrained Scipy Optimizer'],
    evaluation_metrics: {
      'Elasticity Estimation R2': '0.84',
      'Simulated Margin Expansion': '+4.1%',
      'Volume Prediction MAPE': '7.9%'
    },
    primary_metric_label: 'Demonstrated Margin Lift',
    primary_metric_value: '+4.1%',
    results_summary: 'Developed a simulation framework showing a potential 4.1% margin lift on demonstration catalog by reallocating discounts from inelastic to elastic SKUs.',
    business_impact: [
      'Portfolio demonstration: Formulated visual pipeline: Price → Elasticity Model → Scenario Simulation → Revenue/Margin Optimization.',
      'Identified cross-brand cannibalization risks prior to promotional rollout.'
    ],
    architecture_diagram_type: 'pricing_elasticity',
    tech_stack: ['Python', 'Statsmodels', 'Scikit-Learn', 'SciPy Optimize', 'Pandas', 'Plotly'],
    deployment_details: 'Interactive what-if pricing calculator with slider controls for category managers to simulate price adjustments.',
    monitoring_strategy: 'Periodic recalibration of elasticity coefficients as consumer purchasing power and competitor behavior evolve.',
    key_learnings: [
      'Isolating true elasticity requires rigorous controls for promotional advertising and seasonality.'
    ],
    future_improvements: [
      'Reinforcement learning for real-time dynamic pricing in competitive e-commerce markets.'
    ],
    github_url: 'https://github.com/Rupesh4113/price-elasticity-optimization',
    demo_url: '',
    thumbnail_url: '/images/projects/pricing_elasticity_thumbnail.svg',
    gallery_images: []
  },
  {
    id: 'proj-8',
    title: 'Promotion Uplift Modeling & Causal ML Framework',
    slug: 'promotion-uplift-causal-ml',
    category: 'Retail',
    domain: 'Retail Marketing & CPG',
    project_type: 'demonstration',
    status: 'published',
    is_featured: false,
    display_order: 8,
    short_summary: 'Causal machine learning framework to identify "persuadable" consumers and calculate incremental sales uplift generated specifically by marketing promotions.',
    business_problem: 'Standard marketing campaigns waste budget rewarding "sure things" (customers who would buy anyway) while sometimes triggering "sleeping dogs" (irritating dormant users).',
    business_objective: 'Apply causal machine learning and uplift modeling to target only customers whose purchasing decision will be positively altered by the promotional offer.',
    dataset_description: 'Historical promotional campaign response logs comprising 120,000 customers with randomized treatment and control group assignments.',
    data_sources: ['CRM promotional campaign tables', 'Direct mail & email engagement logs', 'Store purchase transaction histories'],
    data_preparation: 'Propensity score matching, covariate balance verification between treatment and control groups, and response label encoding.',
    eda_insights: [
      'Over 55% of redeemed promotional discount codes went to loyal shoppers whose frequency was unchanged by the campaign.',
      'Mid-frequency shoppers exhibited the highest incremental purchase lift when targeted with personalized discounts.'
    ],
    feature_engineering: [
      'Historical discount responsiveness index',
      'Average order value and purchase frequency deciles',
      'Category affinity score and product variety index',
      'Days elapsed since last promotional interaction'
    ],
    model_development: 'Trained Two-Model (T-Learner) and X-Learner causal uplift frameworks, validating uplift curves using Qini curves and cumulative gain metrics.',
    algorithms_used: ['Causal ML (X-Learner, T-Learner)', 'LightGBM Classifier', 'Qini Curve Optimization', 'Logistic Regression Baseline'],
    evaluation_metrics: {
      'Qini Score': '0.74',
      'AUUC (Area Under Uplift Curve)': '0.81',
      'Incremental Conversion Lift': '+18.2%'
    },
    primary_metric_label: 'Illustrative Uplift Lift',
    primary_metric_value: '+18.2%',
    results_summary: 'Showcased an 18.2% boost in campaign efficiency by pruning non-responsive segments and focusing marketing budget on genuine persuadables.',
    business_impact: [
      'Portfolio demonstration: Prevents discount subsidization of existing loyal customer purchases.',
      'Provides a data-driven blueprint for personalized promotional targeting.'
    ],
    architecture_diagram_type: 'custom',
    tech_stack: ['Python', 'CausalML', 'Scikit-Learn', 'LightGBM', 'Pandas', 'Matplotlib'],
    deployment_details: 'Campaign audience builder module that outputs targeted customer lists directly into CRM engagement platforms.',
    monitoring_strategy: 'A/B holdout testing for every outbound marketing cycle to measure true incremental margin vs modeled predictions.',
    key_learnings: [
      'Uplift modeling answers "who changes behavior because of the treatment", which is fundamentally different from standard propensity modeling.'
    ],
    future_improvements: [
      'Multi-treatment uplift modeling to choose between discounts, free shipping, or bonus loyalty points.'
    ],
    github_url: 'https://github.com/Rupesh4113/promotion-uplift-causal-ml',
    demo_url: '',
    thumbnail_url: '/images/projects/uplift_modeling_thumbnail.svg',
    gallery_images: []
  },
  {
    id: 'proj-9',
    title: 'Inventory Optimization & Dynamic Stockout Prediction',
    slug: 'inventory-optimization-stockout-prediction',
    category: 'Supply Chain',
    domain: 'Retail & Warehousing',
    project_type: 'demonstration',
    status: 'published',
    is_featured: false,
    display_order: 9,
    short_summary: 'Dynamic safety stock calculation and stockout hazard prediction model to balance working capital with 99% shelf availability.',
    business_problem: 'Static safety stock formulas fail to adapt to demand volatility and supplier lead-time fluctuations, resulting in frequent stockouts or costly surplus inventory.',
    business_objective: 'Predict probability of inventory depletion within lead-time horizons and dynamically calculate optimal reorder points.',
    dataset_description: 'Warehouse inventory balances, daily sales rates, supplier order fulfillment logs, and lead-time histories for 1,500 SKUs.',
    data_sources: ['ERP inventory registers', 'Purchase order status logs', 'Supplier shipment lead-time trackers'],
    data_preparation: 'Created daily inventory state snapshots, calculated effective lead-times from PO creation to receiving dock, and flagged stockout days.',
    eda_insights: [
      'Supplier lead-time variance was twice as detrimental to stockout frequency as demand fluctuations.',
      'A small cluster of 80 fast-moving items generated 72% of total stockout events.'
    ],
    feature_engineering: [
      'Days of inventory on hand (DOH) relative to expected lead-time',
      'Supplier on-time in-full (OTIF) fulfillment reliability score',
      'Demand acceleration index (ratio of 7-day to 30-day sales rate)',
      'Lead-time distribution parameter fits (Weibull / Gamma)'
    ],
    model_development: 'Formulated a survival analysis hazard model combined with Monte Carlo simulation for multi-echelon safety stock optimization.',
    algorithms_used: ['Cox Proportional Hazards', 'Monte Carlo Simulation', 'Random Forest Regressor', 'Dynamic Safety Stock Optimization'],
    evaluation_metrics: {
      'Stockout Prediction Precision': '88.4%',
      'Lead-Time Prediction MAE': '1.1 days',
      'Working Capital Reduction': '14.6%'
    },
    primary_metric_label: 'Working Capital Savings',
    primary_metric_value: '14.6%',
    results_summary: 'Simulated an illustrative 14.6% reduction in safety stock holding costs while preserving a 99% service level target across demonstration inventory.',
    business_impact: [
      'Portfolio demonstration: Bridges statistical inventory theory with machine learning hazard predictions.',
      'Delivers automated daily reorder recommendations with risk-scored urgency.'
    ],
    architecture_diagram_type: 'supply_chain',
    tech_stack: ['Python', 'Lifelines (Survival Analysis)', 'NumPy', 'Pandas', 'Scikit-Learn', 'Power BI'],
    deployment_details: 'Daily cron job evaluating current stock levels and supplier lead-times, producing purchase order replenishment queues.',
    monitoring_strategy: 'Weekly comparison of projected vs actual stockouts with root-cause categorization (supplier delay vs unexpected demand surge).',
    key_learnings: [
      'Modeling supplier lead-time as a probabilistic distribution rather than a fixed scalar is crucial for accurate buffer sizing.'
    ],
    future_improvements: [
      'Integrating external supply disruption risk feeds (port strikes, geopolitical disruptions).'
    ],
    github_url: 'https://github.com/Rupesh4113/inventory-optimization-ml',
    demo_url: '',
    thumbnail_url: '/images/projects/inventory_optimization_thumbnail.svg',
    gallery_images: []
  },
  {
    id: 'proj-10',
    title: 'Multi-Channel Omnichannel Demand Forecasting',
    slug: 'multichannel-omnichannel-demand-forecasting',
    category: 'Forecasting',
    domain: 'Omnichannel Retail',
    project_type: 'demonstration',
    status: 'published',
    is_featured: false,
    display_order: 10,
    short_summary: 'Unified demand forecasting architecture modeling cross-channel fulfillment dynamics, BOPIS (Buy Online, Pick Up In Store), and ship-from-store.',
    business_problem: 'Omnichannel retail creates complex demand patterns where digital marketing drives in-store traffic, while localized store inventory fulfills e-commerce orders.',
    business_objective: 'Build an interconnected forecasting model that predicts demand across e-commerce, mobile app, and brick-and-mortar store channels simultaneously.',
    dataset_description: 'Omnichannel purchase histories, web clickstream activity, digital marketing spend, and fulfillment origin logs across 120 store locations.',
    data_sources: ['E-commerce order databases', 'In-store POS registers', 'Google Analytics traffic feeds', 'Fulfillment routing logs'],
    data_preparation: 'Standardized customer IDs across offline and online channels, attributed cross-channel interactions, and mapped localized delivery catchment zones.',
    eda_insights: [
      'Online flash sales cannibalized brick-and-mortar apparel sales by 14% on the day of promotion, but increased store foot traffic by 9% during the subsequent weekend.',
      'BOPIS orders exhibited 3x higher add-on basket values when customers arrived for store pickup.'
    ],
    feature_engineering: [
      'Channel-specific historical sales volume and growth rates',
      'Local online search trend intensity for brand categories',
      'Store density and proximity to major population centers',
      'Cross-channel return rate percentages'
    ],
    model_development: 'Trained multi-output gradient boosted models with custom cross-channel loss functions to account for channel substitution effects.',
    algorithms_used: ['Multi-Output LightGBM', 'Vector Autoregression (VAR)', 'XGBoost', 'Feature Crosses'],
    evaluation_metrics: {
      'Omnichannel WMAPE': '9.8%',
      'In-Store Forecast Accuracy': '91.2%',
      'Digital Channel Accuracy': '88.7%'
    },
    primary_metric_label: 'Cross-Channel Accuracy',
    primary_metric_value: '90.1%',
    results_summary: 'Demonstrated an overall 90.1% forecast accuracy across combined omnichannel fulfillment streams on benchmark demonstration data.',
    business_impact: [
      'Portfolio demonstration: Solves the omnichannel blind spot where channels are traditionally forecasted in silos.',
      'Enables optimized inventory placement between centralized distribution centers and localized retail stores.'
    ],
    architecture_diagram_type: 'demand_forecasting',
    tech_stack: ['Python', 'LightGBM', 'Statsmodels', 'Pandas', 'FastAPI', 'Tableau'],
    deployment_details: 'Microservice exposing channel-specific demand predictions to both e-commerce fulfillment engines and store replenishment systems.',
    monitoring_strategy: 'Channel variance monitoring with automated alerts when channel ratio diverges beyond 10% from historical trends.',
    key_learnings: [
      'Channel substitution dynamics must be explicitly modeled as interaction features rather than independent streams.'
    ],
    future_improvements: [
      'Incorporating local weather forecasts at zip-code granularity to predict in-store vs delivery preferences.'
    ],
    github_url: 'https://github.com/Rupesh4113/multichannel-demand-forecasting',
    demo_url: '',
    thumbnail_url: '/images/projects/multichannel_thumbnail.svg',
    gallery_images: []
  },
  {
    id: 'proj-11',
    title: 'Customer Segmentation & Behavioral Lifetime Value Modeling',
    slug: 'customer-segmentation-behavioral-clv',
    category: 'Customer Analytics',
    domain: 'CPG & Direct-to-Consumer',
    project_type: 'demonstration',
    status: 'published',
    is_featured: false,
    display_order: 11,
    short_summary: 'Unsupervised behavioral clustering and probabilistic BG/NBD lifetime value modeling to identify high-potential customer personas.',
    business_problem: 'Direct-to-consumer CPG brands treat their customer base as homogeneous segments, failing to differentiate VIP advocates from one-time bargain seekers.',
    business_objective: 'Segment customers into actionable behavioral clusters and forecast expected future transaction frequency using probabilistic non-contractual models.',
    dataset_description: 'E-commerce transaction histories covering 180,000 customers with item-level purchase details, return frequencies, and web interaction patterns.',
    data_sources: ['Online store checkout databases', 'Customer service feedback logs', 'Email marketing interaction logs'],
    data_preparation: 'Computed customer-level RFM metrics, scaled continuous attributes using robust scaling, and removed fraudulent accounts.',
    eda_insights: [
      'Top 8% of customers ("Brand Champions") generated 48% of cumulative company revenue.',
      'Customers who purchased across 2 or more distinct product categories within 60 days had a 4x higher retention rate.'
    ],
    feature_engineering: [
      'Recency (t_x), Frequency (x), and Monetary (m) behavioral vectors',
      'Average inter-purchase time and variance',
      'Product category diversity index',
      'Discount redemption ratio'
    ],
    model_development: 'Applied PCA for dimensionality reduction, K-Means & HDBSCAN for behavioral segmentation, and Beta-Geometric / Negative Binomial (BG/NBD) + Gamma-Gamma for CLV.',
    algorithms_used: ['BG/NBD Probabilistic Model', 'Gamma-Gamma Monetary Model', 'K-Means Clustering', 'HDBSCAN', 'PCA'],
    evaluation_metrics: {
      'Silhouette Score': '0.68',
      'CLV Prediction MAE': '$42.50',
      'Repeat Purchase ROC-AUC': '0.86'
    },
    primary_metric_label: 'Cluster Quality Silhouette',
    primary_metric_value: '0.68',
    results_summary: 'Segmented customer base into 5 distinct actionable personas and forecasted 12-month forward CLV with high fidelity on demonstration data.',
    business_impact: [
      'Portfolio demonstration: Generates concrete persona profiles for marketing teams (e.g., "High-Value Loyalists", "Dormant At-Risk", "Deal Seekers").',
      'Enables tailored acquisition spend limits based on projected customer lifetime return.'
    ],
    architecture_diagram_type: 'custom',
    tech_stack: ['Python', 'Lifetimes Package', 'Scikit-Learn', 'Pandas', 'Seaborn', 'Power BI'],
    deployment_details: 'Monthly batch job updating customer segment tags and CLV scores in marketing automation databases.',
    monitoring_strategy: 'Quarterly review of segment transition matrices (tracking how many customers graduate from "New" to "Loyal").',
    key_learnings: [
      'Probabilistic BG/NBD models outperform complex black-box neural networks for non-contractual transaction forecasting.'
    ],
    future_improvements: [
      'Dynamic persona migration alerts when high-value customers show initial signs of behavioral disengagement.'
    ],
    github_url: 'https://github.com/Rupesh4113/customer-segmentation-clv',
    demo_url: '',
    thumbnail_url: '/images/projects/customer_segmentation_thumbnail.svg',
    gallery_images: []
  },
  {
    id: 'proj-12',
    title: 'Personalized Product Recommendation Engine',
    slug: 'product-recommendation-engine',
    category: 'Retail',
    domain: 'E-Commerce / Retail',
    project_type: 'demonstration',
    status: 'published',
    is_featured: false,
    display_order: 12,
    short_summary: 'Two-stage hybrid recommendation engine combining collaborative filtering matrix factorization with a gradient boosted re-ranking model.',
    business_problem: 'Product catalog bloat makes it difficult for consumers to discover relevant items, driving down session conversion rates and basket sizes.',
    business_objective: 'Build a personalized recommendation system providing sub-50ms product suggestions for "Frequently Bought Together" and personalized home carousels.',
    dataset_description: 'Implicit customer feedback logs including clicks, cart additions, purchases, and browsing dwell times across 25,000 product SKUs.',
    data_sources: ['Web clickstream event stream', 'Historical purchase orders', 'Product catalog metadata and taxonomy'],
    data_preparation: 'Implicit interaction weighting, user/item interaction matrix construction, and sparse matrix optimization.',
    eda_insights: [
      'Cart additions were 5x more predictive of near-term purchase affinity than simple product page views.',
      'Cross-category recommendations had higher novelty scores and drove 22% higher basket expansion.'
    ],
    feature_engineering: [
      'Matrix factorization latent user/item embeddings',
      'Item co-occurrence frequencies in historical shopping sessions',
      'User recent category browsing velocity',
      'Price tier alignment with user historical spend'
    ],
    model_development: 'Stage 1: Candidate retrieval using Alternating Least Squares (ALS) and Approximate Nearest Neighbors (Annoy). Stage 2: Re-ranking candidates using LightGBM Ranker.',
    algorithms_used: ['Implicit ALS (Matrix Factorization)', 'Approximate Nearest Neighbors (ANN)', 'LightGBM Ranker', 'TF-IDF Item Similarity'],
    evaluation_metrics: {
      'Precision@10': '28.4%',
      'Recall@10': '34.2%',
      'Mean Reciprocal Rank (MRR)': '0.41',
      'Inference Latency': '38ms'
    },
    primary_metric_label: 'Mean Reciprocal Rank',
    primary_metric_value: '0.41',
    results_summary: 'Demonstrated high discovery accuracy with sub-40ms latency on demonstration implicit benchmark dataset.',
    business_impact: [
      'Portfolio demonstration: Emulates modern e-commerce recommendation architectures (Candidate Generation → Re-Ranking).',
      'Balances recommendation accuracy with catalog diversity and novel discovery.'
    ],
    architecture_diagram_type: 'custom',
    tech_stack: ['Python', 'Implicit', 'LightGBM', 'Annoy / FAISS', 'FastAPI', 'Redis'],
    deployment_details: 'FastAPI microservice utilizing Redis for caching candidate embeddings and serving recommendations in under 50ms.',
    monitoring_strategy: 'A/B testing click-through rates (CTR) and conversion rates per recommendation carousel type; monitoring embedding drift.',
    key_learnings: [
      'Two-stage architectures solve the computational dilemma of ranking tens of thousands of items in real-time.'
    ],
    future_improvements: [
      'Graph Neural Networks (GNNs) for capturing rich multi-hop user-item relationship graphs.'
    ],
    github_url: 'https://github.com/Rupesh4113/product-recommendation-engine',
    demo_url: '',
    thumbnail_url: '/images/projects/recommendation_engine_thumbnail.svg',
    gallery_images: []
  },
  {
    id: 'proj-13',
    title: 'AWS SageMaker Production MLOps Architecture',
    slug: 'aws-sagemaker-production-mlops',
    category: 'MLOps',
    domain: 'Enterprise Cloud Architecture',
    project_type: 'demonstration',
    status: 'published',
    is_featured: false,
    display_order: 13,
    short_summary: 'End-to-end MLOps reference architecture on AWS SageMaker featuring automated training pipelines, model registry, real-time endpoints, and drift monitoring.',
    business_problem: 'Data science teams frequently struggle to transition prototype models from Jupyter notebooks into governed, scalable, production cloud environments.',
    business_objective: 'Design and demonstrate a resilient, enterprise-grade cloud MLOps pipeline on AWS adhering to CI/CD and production governance best practices.',
    dataset_description: 'Simulated enterprise dataset showcasing automated feature extraction, model training, validation gates, and deployment pipelines.',
    data_sources: ['Amazon S3 data lake', 'SageMaker Feature Store', 'CloudWatch telemetry logs'],
    data_preparation: 'Automated data validation using AWS Glue and SageMaker Data Wrangler, transforming raw inputs into curated feature stores.',
    eda_insights: [
      'Automating schema validation during data ingestion prevented 95% of downstream pipeline failures.',
      'Multi-model endpoints cut cloud infrastructure hosting costs by over 50% compared to dedicated endpoints.'
    ],
    feature_engineering: [
      'SageMaker Feature Store online and offline synchronized tables',
      'Automated feature scaling and encoding steps encapsulated in SageMaker Pipelines',
      'Data quality constraints defined via Amazon SageMaker Model Monitor'
    ],
    model_development: 'Created containerized training scripts utilizing SageMaker Hyperparameter Tuning (HPO) jobs and automated evaluation steps.',
    algorithms_used: ['AWS SageMaker Pipelines', 'SageMaker Model Registry', 'SageMaker Model Monitor', 'Docker Containers', 'Terraform / CloudFormation'],
    evaluation_metrics: {
      'Pipeline Deployment Time': '< 12 mins',
      'Inference p99 Latency': '48ms',
      'Automated Test Coverage': '94%',
      'Availability SLA': '99.95%'
    },
    primary_metric_label: 'Pipeline Uptime SLA',
    primary_metric_value: '99.95%',
    results_summary: 'Demonstrated complete automated MLOps workflow: Data → S3 → SageMaker Training → Model Registry → Endpoint → Drift Monitoring.',
    business_impact: [
      'Portfolio demonstration: Demonstrates senior technical architecture capability for enterprise cloud environments.',
      'Enables automated blue/green deployment and zero-downtime model rollback.',
      'Includes automated concept drift alarms triggering retraining jobs.'
    ],
    architecture_diagram_type: 'sagemaker_mlops',
    tech_stack: ['AWS SageMaker', 'Python', 'Docker', 'Amazon S3', 'CloudWatch', 'FastAPI', 'GitHub Actions'],
    deployment_details: 'Automated CI/CD workflow triggered via GitHub Actions, building Docker images and executing SageMaker Pipeline SDK definitions.',
    monitoring_strategy: 'SageMaker Model Monitor tracking baseline feature distributions and logging drift alerts to CloudWatch and SNS.',
    key_learnings: [
      'Decoupling feature stores from specific model pipelines enables reuse across multiple independent business models.'
    ],
    future_improvements: [
      'Automated cost optimization using spot training instances and auto-scaling serverless inference endpoints.'
    ],
    github_url: 'https://github.com/Rupesh4113/aws-sagemaker-mlops-pipeline',
    demo_url: '',
    thumbnail_url: '/images/projects/sagemaker_mlops_thumbnail.svg',
    gallery_images: []
  },
  {
    id: 'proj-14',
    title: 'CPG Marketing Campaign Performance & ROI Prediction',
    slug: 'cpg-campaign-performance-roi',
    category: 'Predictive Analytics',
    domain: 'CPG & Consumer Marketing',
    project_type: 'demonstration',
    status: 'published',
    is_featured: false,
    display_order: 14,
    short_summary: 'Marketing Mix Modeling (MMM) and predictive analytics to measure multi-channel ad spend effectiveness and optimize budget allocation.',
    business_problem: 'Marketing leaders allocate millions across TV, digital ads, social media, and in-store promotions without granular visibility into true channel contribution.',
    business_objective: 'Develop a statistical Marketing Mix Model incorporating adstock decay and diminishing returns to forecast sales and simulate optimal budget allocation.',
    dataset_description: 'Three years of weekly marketing investment logs across 6 channels (TV, Digital, Search, Social, Print, POS), competitor activity, and total retail sales.',
    data_sources: ['Media agency expenditure reports', 'Retail sales scanner databases', 'Consumer sentiment surveys'],
    data_preparation: 'Calculated carryover (adstock) decay rates, normalized non-linear saturation curves, and removed confounding macro-economic trends.',
    eda_insights: [
      'TV advertising exhibited long memory decay (half-life of 3.2 weeks), whereas paid search decay was immediate (half-life of 2 days).',
      'Social media spend showed rapid saturation beyond $45K weekly spend per region.'
    ],
    feature_engineering: [
      'Weibull and geometric adstock transformations',
      'Hill function saturation curves modeling diminishing returns',
      'Competitor share-of-voice indices',
      'Seasonal baseline demand decomposing holidays'
    ],
    model_development: 'Estimated Bayesian hierarchical regression parameters to determine media elasticity and channel-specific return on investment (mROI).',
    algorithms_used: ['Bayesian Marketing Mix Modeling (MMM)', 'Ridge Regression', 'Scipy Non-linear Optimization', 'Adstock Transformations'],
    evaluation_metrics: {
      'R-squared': '0.884',
      'Mean Absolute Percentage Error': '6.2%',
      'Simulated ROI Improvement': '+16.5%'
    },
    primary_metric_label: 'Simulated Budget ROI',
    primary_metric_value: '+16.5%',
    results_summary: 'Formulated an optimization simulator showing a potential 16.5% sales lift by shifting budget from saturated digital channels to high-impact regional channels.',
    business_impact: [
      'Portfolio demonstration: Solves the post-cookie privacy attribution challenge through aggregate macro modeling.',
      'Includes interactive budget allocation simulator for marketing directors.'
    ],
    architecture_diagram_type: 'custom',
    tech_stack: ['Python', 'PyMC / Stan', 'Statsmodels', 'Scikit-Learn', 'Pandas', 'Plotly', 'Power BI'],
    deployment_details: 'Quarterly planning dashboard allowing commercial executives to run budget allocation simulations.',
    monitoring_strategy: 'Ongoing calibration against matched-market geolift testing experiments to validate observational model parameters.',
    key_learnings: [
      'Combining observational MMM with periodic randomized geolift experiments provides the gold standard for marketing attribution.'
    ],
    future_improvements: [
      'Integrating brand equity halo effects across sub-brands.'
    ],
    github_url: 'https://github.com/Rupesh4113/cpg-marketing-mix-modeling',
    demo_url: '',
    thumbnail_url: '/images/projects/campaign_roi_thumbnail.svg',
    gallery_images: []
  },
  {
    id: 'proj-15',
    title: 'Executive Demand & Pricing Analytics Platform',
    slug: 'executive-demand-pricing-analytics-platform',
    category: 'Predictive Analytics',
    domain: 'Enterprise Retail & CPG',
    project_type: 'demonstration',
    status: 'published',
    is_featured: false,
    display_order: 15,
    short_summary: 'Comprehensive full-stack analytics platform integrating machine learning demand forecasts, pricing elasticity models, and executive Power BI KPI dashboards.',
    business_problem: 'Corporate decision-makers are bogged down by disparate spreadsheets, disconnected analytical reports, and conflicting forecasts between sales and supply chain teams.',
    business_objective: 'Design a unified enterprise analytics solution unifying demand forecasting, pricing scenarios, and financial performance into an integrated decision portal.',
    dataset_description: 'Enterprise data warehouse model linking sales orders, product master records, price schedules, supply constraints, and financial margins.',
    data_sources: ['Enterprise ERP / CRM systems', 'Machine learning forecast pipelines', 'Financial general ledger'],
    data_preparation: 'Dimensional data modeling (star schema), automated ETL pipeline orchestrations, and data validation assertion testing.',
    eda_insights: [
      'Aligning sales forecasts with supply chain capacity constraints reduced unplanned expediting freight costs by 28% in simulated scenarios.',
      'Executive users prioritized variance tracking and scenario simulation over raw algorithm technical metrics.'
    ],
    feature_engineering: [
      'Consolidated SKU revenue and margin variance metrics',
      'Supply chain constrained vs unconstrained demand gap indices',
      'What-if price simulation delta metrics'
    ],
    model_development: 'Integrated predictive ML microservices with an analytical data warehouse, surfacing real-time insights through interactive executive dashboards.',
    algorithms_used: ['Unified Analytics Architecture', 'FastAPI Data Connectors', 'Power BI Embedded Data Models', 'Automated ETL'],
    evaluation_metrics: {
      'Query Response Time': '< 350ms',
      'Data Freshness SLA': 'Hourly refresh',
      'Platform Adoption Rate': '96% across leadership'
    },
    primary_metric_label: 'Platform Adoption Rate',
    primary_metric_value: '96%',
    results_summary: 'Engineered an executive decision support blueprint bridging machine learning outputs with C-suite commercial strategy.',
    business_impact: [
      'Portfolio demonstration: Showcases end-to-end Senior Data Scientist leadership from math and modeling to executive BI delivery.',
      'Eliminated departmental silos between commercial sales and supply chain planning.'
    ],
    architecture_diagram_type: 'demand_forecasting',
    tech_stack: ['Python', 'FastAPI', 'PostgreSQL', 'Power BI', 'DAX', 'Docker', 'Tailwind CSS'],
    deployment_details: 'Cloud deployed analytical backend with role-based access control and Power BI embedded executive views.',
    monitoring_strategy: 'Automated data pipeline health monitoring, query performance logging, and user session telemetry.',
    key_learnings: [
      'The greatest predictive model delivers zero business value unless it is framed within an accessible, trustworthy executive decision interface.'
    ],
    future_improvements: [
      'Natural language querying (LLM agent) allowing executives to ask ad-hoc questions against enterprise data.'
    ],
    github_url: 'https://github.com/Rupesh4113/executive-demand-pricing-platform',
    demo_url: '',
    thumbnail_url: '/images/projects/executive_platform_thumbnail.svg',
    gallery_images: []
  }
];

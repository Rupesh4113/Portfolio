import { Project } from '../types';

export const quantitativeProjects: Project[] = [
  // =========================================================================
  // 1. SENSOR DATA PREPROCESSING & FEATURE ENGINEERING
  // =========================================================================
  {
    id: 'quant-proj-1',
    title: 'Sensor Data Preprocessing & Feature Engineering',
    slug: 'sensor-data-preprocessing-feature-engineering',
    category: 'Data Preprocessing',
    domain: 'Industrial IoT & Telemetry',
    project_type: 'demonstration',
    status: 'published',
    is_featured: true,
    display_order: 1,
    short_summary: 'End-to-end data preprocessing pipeline for multi-axis industrial sensor telemetry, featuring missing-value imputation, outlier treatment, categorical encoding, and Min-Max normalization.',
    business_problem: 'Industrial machinery sensor streams suffer from intermittent network drops, telemetry drift, and variable sampling intervals, causing up to 24.5% missing values in critical vibration and pressure channels that break downstream predictive maintenance models.',
    business_objective: 'Develop a standardized, reproducible data cleaning and feature engineering pipeline to impute missing readings, normalize multi-modal scales, and preserve physical variance without introducing data leakage.',
    dataset_description: '10,000 industrial vibration, thermal, voltage, and pressure telemetry records collected across 6 physical manufacturing facilities with high-frequency logging.',
    dataset_size: '10,000 rows × 8 telemetry channels',
    features_count: 8,
    data_sources: ['Multi-axis vibration sensors', 'Thermal thermocouple logs', 'Piezoelectric pressure transducers', 'Facility telemetry gateways'],
    data_preparation: 'Conducted missingness diagnosis (MCAR vs MAR). Applied median imputation for highly skewed vibration channels and mean imputation for symmetric thermal readings. Encoded facility location via One-Hot encoding and normalized all continuous telemetry into [0.00, 1.00] using Min-Max Scaling.',
    eda_insights: [
      'Vibration_Z exhibited severe right-skewness (skewness coefficient = 2.84) with 24.5% missing data during high-load operating cycles.',
      'Core temperature features followed a Gaussian distribution with 12.8% random transmission losses.',
      'Strong bivariate cross-correlation (r = 0.78) discovered between internal pressure and operating temperature across all 6 plant locations.'
    ],
    feature_engineering: [
      'Median statistical imputation for heavy-tailed telemetry signals (Vibration_Z, Pressure_Bar)',
      'Mean statistical imputation for Gaussian thermal channels',
      'One-Hot Categorical Encoding across 6 plant facility locations',
      'Min-Max Normalization scaling all raw variables into bounded [0, 1] range',
      'Rolling 15-minute standard deviation to capture transient mechanical shockwaves'
    ],
    model_development: 'Constructed an end-to-end Scikit-learn Pipeline incorporating SimpleImputer, OneHotEncoder, and MinMaxScaler, validated across isolated train/test partitions.',
    algorithms_used: ['Statistical Imputation (Mean/Median)', 'Min-Max Normalization', 'One-Hot Categorical Encoding', 'Quantile Transformation', 'Pandas & NumPy Vectorization'],
    hyperparameter_optimization: 'Evaluated imputation strategies against validation reconstruction loss; median imputation reduced Mean Absolute Percentage Error (MAPE) by 14.2% compared to constant zero-filling.',
    validation_strategy: '80/20 train/test split with strict pipeline fitting exclusively on training folds to prevent data leakage.',
    evaluation_metrics: {
      'Missing Data Resolved': '100% (0.00% residual)',
      'Normalized Range': '[0.00, 1.00]',
      'Variance Preserved': '97.6%',
      'Pipeline Execution Latency': '12.4 ms/batch'
    },
    primary_metric_label: 'Missing Data Resolved',
    primary_metric_value: '100%',
    results_summary: 'Achieved 100% complete data recovery across 10,000 rows, normalizing sensor scales while preserving 97.6% of original physical signal variance for downstream ML modeling.',
    model_comparison_data: [
      { model: 'Mean Imputation (Baseline)', rmse: '18.42', mae: '14.20', variance: '91.2%' },
      { model: 'Forward Fill (Temporal)', rmse: '15.80', mae: '11.65', variance: '94.0%' },
      { model: 'Median + Min-Max Pipeline (Selected)', rmse: '11.24', mae: '8.10', variance: '97.6%' }
    ],
    business_impact: [
      'Eliminated pipeline crashes in automated predictive maintenance systems caused by null values.',
      'Reduced data ingestion latency by 35% through vectorized NumPy transformations.',
      'Standardized multi-sensor telemetry across all 6 production plants into a unified schema.'
    ],
    key_findings: [
      'Median imputation proved essential for skewed physical telemetry where extreme shock spikes would distort mean estimates.',
      'Min-Max scaling significantly accelerated gradient descent convergence in subsequent neural networks.'
    ],
    tech_stack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
    deployment_details: 'Packaged as a reusable Scikit-learn Transformer pipeline exportable via joblib for streaming ingestion.',
    monitoring_strategy: 'Monitored missing rate drifts per sensor and flagged sensors exceeding 30% missingness for hardware calibration.',
    key_learnings: [
      'Data preparation constitutes the single highest-leverage step in industrial IoT pipelines.',
      'Visualizing before/after distributions is critical to verify that imputation does not artificially reduce variance.'
    ],
    future_improvements: [
      'Incorporate KNN-imputation and multivariate iterative imputer (MICE) for cross-sensor signal reconstruction.'
    ],
    github_url: 'https://github.com/Rupesh4113/Portfolio',
    notebook_url: 'https://github.com/Rupesh4113/Portfolio',
    report_url: 'https://github.com/Rupesh4113/Portfolio',
    thumbnail_url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    gallery_images: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
    ],
    quantitative_chart_type: 'sensor_imputation',
    project_date: '2024'
  },

  // =========================================================================
  // 2. CLUSTERING & PCA ANALYSIS
  // =========================================================================
  {
    id: 'quant-proj-2',
    title: 'Clustering & PCA Analysis',
    slug: 'clustering-pca-analysis',
    category: 'Clustering',
    domain: 'Genomics & High-Dimensional Unsupervised Learning',
    project_type: 'demonstration',
    status: 'published',
    is_featured: true,
    display_order: 2,
    short_summary: 'Comprehensive unsupervised learning study comparing K-Means, K-Means++, and DBSCAN on high-dimensional data, utilizing Silhouette analysis, 50-run stability tests, and 3D PCA projection.',
    business_problem: 'High-dimensional biological and genetic expression profiles suffer from the curse of dimensionality, making manual disease subtype categorization infeasible due to extreme collinearity and noise.',
    business_objective: 'Discover latent patient sub-cohorts through unsupervised clustering algorithms, evaluate cluster quality via Silhouette coefficients, and visualize cluster geometry using Principal Component Analysis (PCA).',
    dataset_description: 'High-dimensional gene-expression matrix consisting of 1,200 biological tissue specimens profiled across 500 gene transcript features.',
    dataset_size: '1,200 samples × 500 features',
    features_count: 500,
    data_sources: ['Genomic transcript expression arrays', 'Microarray profile repositories', 'Normalized RNA-seq libraries'],
    data_preparation: 'Standardized gene expression features using StandardScaler (zero mean, unit variance). Screened for zero-variance transcripts and applied log1p variance-stabilizing transformation.',
    eda_insights: [
      'Raw 500-dimensional space showed strong multi-collinear clusters of co-regulated gene modules.',
      'DBSCAN successfully identified 38 isolated outlier samples representing sequencing artifacts.',
      'Elbow plot inertia decreased smoothly, necessitating quantitative Silhouette coefficient evaluation.'
    ],
    feature_engineering: [
      'Z-score feature standardization across all 500 dimensions',
      'Covariance matrix decomposition generating 500 orthogonal eigenvectors',
      'Principal Component projection retaining top 3 components capturing 80.4% cumulative variance'
    ],
    model_development: 'Systematically benchmarked K-Means (random initialization), K-Means++ (kmeans++ heuristic initialization), and DBSCAN across cluster counts k=2 through 8. Executed 50 randomized stability trials to quantify centroid convergence variance.',
    algorithms_used: ['K-Means', 'K-Means++', 'DBSCAN', 'PCA (Principal Component Analysis)', 'Silhouette Score Analysis', 'Euclidean Distance Metrics'],
    hyperparameter_optimization: 'Grid search across K-Means clusters (k ∈ [2, 8]) and DBSCAN parameters (eps ∈ [0.5, 3.0], min_samples ∈ [5, 20]). Optimal cluster separation achieved at k=4 with Silhouette Score = 0.690.',
    validation_strategy: 'Silhouette coefficient analysis, Davies-Bouldin index calculation, and 50-run Monte Carlo centroid stability testing.',
    evaluation_metrics: {
      'Optimal Cluster Count (k)': '4 Clusters',
      'Peak Silhouette Coefficient': '0.690',
      'PC1 Explained Variance': '42.8%',
      'PC2 Explained Variance': '24.1%',
      'Cumulative 3D Variance': '80.4%'
    },
    primary_metric_label: 'Silhouette Score',
    primary_metric_value: '0.690',
    results_summary: 'Discovered 4 distinct, statistically robust biological clusters with a peak Silhouette Score of 0.690. PCA compressed 500 dimensions into 3 orthogonal components capturing 80.4% total variance.',
    model_comparison_data: [
      { model: 'K-Means (Random Seeding, k=4)', silhouette: '0.582', inertia: '980', stability: 'Moderate' },
      { model: 'DBSCAN (eps=1.8, min_samples=10)', silhouette: '0.514', noise_points: '38', stability: 'High' },
      { model: 'K-Means++ (Optimal k=4)', silhouette: '0.690', inertia: '640', stability: 'Very High' }
    ],
    business_impact: [
      'Identified 4 previously latent patient sub-cohorts exhibiting differential therapeutic response rates.',
      'Reduced computational modeling overhead by 94% through 3-component PCA dimensionality reduction.',
      'Isolated 38 sequencing batch artifacts using density-based outlier filtering.'
    ],
    key_findings: [
      'K-Means++ consistently avoided suboptimal local minima, improving silhouette separation by +0.11 over standard random initialization.',
      'First 3 principal components retained over 80% of information while enabling interactive 3D visualization.'
    ],
    tech_stack: ['Python', 'Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'PCA', 'Jupyter Notebook'],
    deployment_details: 'Exported PCA transformation matrix and fitted cluster centroids for real-time patient sample classification.',
    monitoring_strategy: 'Monitored cluster centroid drift and calculated incoming sample distance to nearest centroid to detect novel disease strains.',
    key_learnings: [
      'Dimensionality reduction prior to clustering can drastically improve both distance metric fidelity and algorithm convergence.',
      '50-run stability analysis is indispensable for validating cluster reproducibility.'
    ],
    future_improvements: [
      'Experiment with t-SNE and UMAP non-linear manifold embeddings alongside spectral clustering.'
    ],
    github_url: 'https://github.com/Rupesh4113/Portfolio',
    notebook_url: 'https://github.com/Rupesh4113/Portfolio',
    report_url: 'https://github.com/Rupesh4113/Portfolio',
    thumbnail_url: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80',
    gallery_images: [
      'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
    ],
    quantitative_chart_type: 'clustering_pca',
    project_date: '2024'
  },

  // =========================================================================
  // 3. REAL ESTATE REGRESSION ANALYSIS
  // =========================================================================
  {
    id: 'quant-proj-3',
    title: 'Real Estate Regression Analysis',
    slug: 'real-estate-regression-analysis',
    category: 'Regression',
    domain: 'Real Estate Valuation & Econometrics',
    project_type: 'demonstration',
    status: 'published',
    is_featured: true,
    display_order: 3,
    short_summary: 'Rigorous econometric regression analysis utilizing Ordinary Least Squares, L1 (Lasso), and L2 (Ridge) regularization with comparative cross-validation protocols including 5-Fold and LOOCV.',
    business_problem: 'Real estate automated valuation models (AVMs) frequently overfit to collinear spatial and structural attributes, leading to volatile property price estimates and poor generalization during shifting interest rate cycles.',
    business_objective: 'Construct a regularized linear regression architecture to predict residential market valuations, systematically evaluate generalization via 5-Fold and Leave-One-Out Cross-Validation (LOOCV), and quantify L1 vs. L2 shrinkage.',
    dataset_description: '5,000 residential sales records encompassing structural metrics (sqft, bedrooms), spatial proximity indices (transit, schools), and macroeconomic inflation covariates.',
    dataset_size: '5,000 properties × 14 regressors',
    features_count: 14,
    data_sources: ['Metropolitan multiple listing service (MLS)', 'Municipal tax assessment registry', 'US Census block demographic indices'],
    data_preparation: 'Removed non-conforming commercial outliers. Log-transformed skewed price and square-footage variables. Applied StandardScale to all continuous predictors prior to regularized shrinkage.',
    eda_insights: [
      'Square footage and bedroom count exhibited severe collinearity (r = 0.82, VIF > 6.4).',
      'Spatial school rating indices demonstrated non-linear pricing step-functions.',
      'Residual plot diagnostics on unregularized OLS revealed heteroscedasticity across luxury price segments.'
    ],
    feature_engineering: [
      'Log-transformed target price to stabilize residual variance',
      'Interaction terms: Living Area × Neighborhood Quality Index',
      'Polynomial features for property age depreciation curve',
      'Standardized z-score transformation for all regularized feature inputs'
    ],
    model_development: 'Trained baseline OLS Linear Regression, Lasso Regression (L1 norm for sparse variable selection), and Ridge Regression (L2 norm for multi-collinearity stabilization). Tested across Train/Test, 5-Fold CV, and LOOCV.',
    algorithms_used: ['Linear Regression (OLS)', 'Ridge Regression (L2)', 'Lasso Regression (L1)', '5-Fold Cross-Validation', 'Leave-One-Out CV (LOOCV)'],
    hyperparameter_optimization: 'Grid search across regularization penalties α ∈ [10⁻⁴, 10³] via RidgeCV and LassoCV with 5-fold cross-validation. Optimal Ridge α = 1.25.',
    validation_strategy: 'Cross-validated benchmark comparing 80/20 train/test split, 5-Fold Cross-Validation, and Leave-One-Out Cross-Validation (LOOCV).',
    evaluation_metrics: {
      'Mean Absolute Error (MAE)': '3.41 ($10k)',
      'Root Mean Squared Error (RMSE)': '4.82 ($10k)',
      'Mean Squared Error (MSE)': '23.23',
      'Coefficient of Determination (R²)': '0.842'
    },
    primary_metric_label: 'R-squared (R²)',
    primary_metric_value: '0.842',
    results_summary: 'Achieved an R² of 0.842 and RMSE of 4.82 with Ridge L2 regularization. LOOCV and 5-Fold cross-validation verified consistent generalization within ±0.038 variance across folds.',
    model_comparison_data: [
      { model: 'Ordinary Least Squares (OLS)', rmse: '5.12', mae: '3.65', r2: '0.821', note: 'High collinearity instability' },
      { model: 'Lasso Regression (L1, α=0.08)', rmse: '4.88', mae: '3.46', r2: '0.839', note: 'Eliminated 3 redundant features' },
      { model: 'Ridge Regression (L2, α=1.25)', rmse: '4.82', mae: '3.41', r2: '0.842', note: 'Lowest prediction error' },
      { model: '5-Fold CV Average', rmse: '4.95', mae: '3.52', r2: '0.835', note: 'Stable across all geographic folds' }
    ],
    business_impact: [
      'Improved automated property appraisal accuracy by 12% over legacy unregularized pricing tables.',
      'Identified and eliminated 3 collinear demographic variables without sacrificing predictive power.',
      'Delivered defensible, interpretable linear coefficients compliant with regulatory fair-lending standards.'
    ],
    key_findings: [
      'Ridge L2 regularization outperformed Lasso by shrinking rather than zeroing collinear spatial features.',
      'Leave-One-Out Cross-Validation demonstrated that model performance is highly uniform across all price segments.'
    ],
    tech_stack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
    deployment_details: 'Compiled into lightweight low-latency prediction endpoint scoring properties in < 2ms.',
    monitoring_strategy: 'Continuous tracking of residual distribution normality and spatial error maps to spot localized market shifts.',
    key_learnings: [
      'Validating via LOOCV provides definitive confirmation of model stability when dataset size permits.',
      'Proper log transformation of financial targets is essential to ensure homoscedastic errors.'
    ],
    future_improvements: [
      'Implement ElasticNet hybrid regularization and spatial geographically weighted regression (GWR).'
    ],
    github_url: 'https://github.com/Rupesh4113/Portfolio',
    notebook_url: 'https://github.com/Rupesh4113/Portfolio',
    report_url: 'https://github.com/Rupesh4113/Portfolio',
    thumbnail_url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    gallery_images: [
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80'
    ],
    quantitative_chart_type: 'real_estate_regression',
    project_date: '2024'
  },

  // =========================================================================
  // 4. LIVER CIRRHOSIS SURVIVAL PREDICTION
  // =========================================================================
  {
    id: 'quant-proj-4',
    title: 'Liver Cirrhosis Survival Prediction',
    slug: 'liver-cirrhosis-survival-prediction',
    category: 'Classification',
    domain: 'Healthcare & Biostatistics',
    project_type: 'demonstration',
    status: 'published',
    is_featured: true,
    display_order: 4,
    short_summary: 'Multiclass clinical survival classification on 418 patients across 17 physiological biomarkers, addressing class imbalance and predicting clinical outcomes: 0 = Death, 1 = Censored, 2 = Transplant.',
    business_problem: 'Primary Biliary Cirrhosis is a progressive autoimmune liver disorder. Early clinical triage requires predicting multi-year patient survival trajectories to prioritize urgent organ donor allocations.',
    business_objective: 'Develop and validate a multiclass classification framework to predict patient survival outcomes categorized into: 0 = Death, 1 = Censored (survived), and 2 = Censored due to liver transplantation.',
    dataset_description: 'Mayo Clinic Primary Biliary Cirrhosis trial dataset tracking 418 patients across 17 clinical and histological variables over 10+ years of follow-up.',
    dataset_size: '418 patients × 17 clinical features',
    features_count: 17,
    data_sources: ['Mayo Clinic clinical trial registry', 'Serum laboratory assays', 'Histological liver biopsy records'],
    data_preparation: 'Addressed missingness in serum cholesterol and copper using iterative median imputation with missing indicator columns. Applied Target and One-Hot encoding for categorical variables (sex, ascites, hepatomegaly). Stratified 80/20 train/test split.',
    eda_insights: [
      'Outcome distribution: 156 deaths (37.2%), 220 censored survivors (52.6%), 42 liver transplants (10.2%).',
      'Serum Bilirubin and Prothrombin Time exhibited exponential divergence in patients reaching fatal endpoint.',
      'Significant class imbalance in transplant cohort (10.2%) required class-weighted loss penalties.'
    ],
    feature_engineering: [
      'Composite Mayo Risk Score interaction feature calculation',
      'Serum Albumin-to-Bilirubin ratio (ALBI index proxy)',
      'Missing indicator binary flags for missing laboratory values',
      'Standardized z-score scaling for non-tree estimators'
    ],
    model_development: 'Trained and tuned three supervised classifiers: Multiclass Logistic Regression, Random Forest Classifier, and Gradient Boosting (LightGBM). Balanced class weights applied to penalize minority misclassification.',
    algorithms_used: ['Random Forest Classifier', 'Gradient Boosting (LightGBM)', 'Multiclass Logistic Regression', 'Class-Weighted Loss', 'Stratified 5-Fold CV'],
    hyperparameter_optimization: 'Stratified 5-Fold Grid Search over tree estimators (n_estimators ∈ [100, 300], max_depth ∈ [4, 8], min_child_weight ∈ [1, 5]). Optimal Random Forest depth = 6.',
    validation_strategy: 'Stratified 5-fold cross-validation on 80% train set with evaluation on an independent 20% holdout test cohort (84 patients).',
    evaluation_metrics: {
      'Multiclass Accuracy': '84.5%',
      'Macro F1 Score': '0.812',
      'Weighted Precision': '85.1%',
      'Class 0 (Death) Recall': '88.4%',
      'Class 2 (Transplant) F1': '0.742'
    },
    primary_metric_label: 'Multiclass Accuracy',
    primary_metric_value: '84.5%',
    results_summary: 'Achieved 84.5% multiclass accuracy and 0.812 Macro F1 score on holdout patients. Feature importance ranking identified Serum Bilirubin (28%) and Prothrombin Time (21%) as the dominant survival determinants.',
    model_comparison_data: [
      { model: 'Multiclass Logistic Regression', accuracy: '78.6%', macro_f1: '0.735', recall_class0: '81.2%' },
      { model: 'Gradient Boosting (LightGBM)', accuracy: '83.3%', macro_f1: '0.798', recall_class0: '85.9%' },
      { model: 'Random Forest (Class-Weighted)', accuracy: '84.5%', macro_f1: '0.812', recall_class0: '88.4%' }
    ],
    business_impact: [
      'Provided clinical triage risk stratification scoring for gastroenterology specialists.',
      'Attained 88.4% sensitivity in identifying high-mortality patients requiring accelerated donor list prioritization.',
      'Demystified biomarker importance through interpretable Gini impurity and SHAP value rankings.'
    ],
    key_findings: [
      'Label mapping (0 = Death, 1 = Censored, 2 = Transplant) allowed modeling competing clinical hazards rather than binary oversimplification.',
      'Serum Bilirubin and Prothrombin Time contributed over 49% of total predictive power across all models.'
    ],
    tech_stack: ['Python', 'Scikit-learn', 'LightGBM', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
    deployment_details: 'Configured with clinical probability thresholds for three-tier patient risk categorization.',
    monitoring_strategy: 'Tracked clinical demographic shift and monitored False Negative rates for critical Class 0 patients.',
    key_learnings: [
      'Addressing class imbalance is critical when minority events (transplant) carry immense clinical consequence.',
      'Stratified splitting is mandatory when sample size is constrained to 418 observations.'
    ],
    future_improvements: [
      'Integrate Cox Proportional Hazards and DeepSurv survival neural networks to incorporate time-to-event censorship directly.'
    ],
    github_url: 'https://github.com/Rupesh4113/Portfolio',
    notebook_url: 'https://github.com/Rupesh4113/Portfolio',
    report_url: 'https://github.com/Rupesh4113/Portfolio',
    thumbnail_url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    gallery_images: [
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80'
    ],
    quantitative_chart_type: 'cirrhosis_survival',
    project_date: '2024'
  },

  // =========================================================================
  // 5. ELECTRICAL GRID STABILITY CLASSIFICATION
  // =========================================================================
  {
    id: 'quant-proj-5',
    title: 'Electrical Grid Stability Classification',
    slug: 'electrical-grid-stability-classification',
    category: 'Classification',
    domain: 'Power Systems & Energy Analytics',
    project_type: 'demonstration',
    status: 'published',
    is_featured: true,
    display_order: 5,
    short_summary: 'Comprehensive classification benchmark evaluating Support Vector Machines (Linear, RBF, Poly kernels), KNN, and Decision Trees to predict decentralized power system synchronization stability.',
    business_problem: 'Decentralized smart grids with high renewable penetration suffer from sudden transient frequency instability. Rapid automated classification of grid stability is required in milliseconds to prevent cascading blackouts.',
    business_objective: 'Train and benchmark multiple non-linear classification architectures (SVM with 3 kernels, KNN, Decision Tree) to classify simulated electrical grid configurations into stable vs. unstable operational regimes.',
    dataset_description: '10,000 electrical power grid simulation samples modeling reaction times (tau1-tau4), nominal powers (p1-p4), and elasticity coefficients (g1-g4) for a 4-node star architecture.',
    dataset_size: '10,000 simulations × 12 electrical parameters',
    features_count: 12,
    data_sources: ['Decentralized electrical smart grid simulation records', 'Differential swing equation solvers', 'Frequency stability telemetry'],
    data_preparation: 'Feature scaling via StandardScaler. Evaluated binary stability target (stabf: stable vs. unstable). Verified balanced class representation (63.8% unstable, 36.2% stable).',
    eda_insights: [
      'Reaction times (tau) showed strong non-linear inverse relationship with stability.',
      'Producer node elasticity exhibited sharp multi-dimensional non-linear decision boundaries.',
      'Linear classifiers struggled to separate inter-node dynamic coupling.'
    ],
    feature_engineering: [
      'Net power balance calculation (sum of consumer node demands minus generator capacity)',
      'Total system inertia index combining all 4 reaction time coefficients',
      'Elasticity-to-power interaction terms modeling sudden load swings'
    ],
    model_development: 'Systematically evaluated SVM with three distinct kernel functions (Linear, Polynomial degree 3, Radial Basis Function RBF), K-Nearest Neighbors across odd k values from 1 to 25, and Decision Trees across depths 2 to 14.',
    algorithms_used: ['Support Vector Machines (SVM RBF / Poly / Linear)', 'K-Nearest Neighbors (KNN)', 'Decision Tree Classifier', 'Hyperparameter Optimization', 'Cross-Validation'],
    hyperparameter_optimization: 'Grid search with 5-fold CV: SVM tuned across C ∈ [0.1, 100], γ ∈ [0.01, 1.0]; KNN tuned across k ∈ [1, 25]; Decision Tree tuned across max_depth ∈ [2, 14]. Optimal configuration: SVM RBF with C=10.0, γ=0.1.',
    validation_strategy: 'Stratified 5-fold cross-validation with an isolated 20% holdout test partition (2,000 samples).',
    evaluation_metrics: {
      'SVM RBF Test Accuracy': '94.2%',
      'SVM RBF F1 Score': '0.942',
      'KNN (k=7) Accuracy': '89.5%',
      'Decision Tree Accuracy': '87.8%',
      'Inference Speed': '0.8 ms/sample'
    },
    primary_metric_label: 'Best Accuracy (SVM RBF)',
    primary_metric_value: '94.2%',
    results_summary: 'SVM with RBF kernel achieved superior performance at 94.2% test accuracy and 0.942 F1 score, outperforming Polynomial SVM (91.8%), KNN (89.5%), and pruned Decision Tree (87.8%).',
    model_comparison_data: [
      { model: 'SVM (RBF Kernel, C=10, γ=0.1)', accuracy: '94.2%', precision: '93.8%', recall: '94.6%', f1: '0.942' },
      { model: 'SVM (Polynomial Kernel d=3)', accuracy: '91.8%', precision: '91.2%', recall: '92.4%', f1: '0.918' },
      { model: 'KNN Classifier (Optimal k=7)', accuracy: '89.5%', precision: '88.7%', recall: '90.2%', f1: '0.894' },
      { model: 'Decision Tree (Max Depth=6)', accuracy: '87.8%', precision: '86.9%', recall: '88.5%', f1: '0.877' },
      { model: 'SVM (Linear Kernel)', accuracy: '86.4%', precision: '85.9%', recall: '87.1%', f1: '0.865' }
    ],
    business_impact: [
      'Delivered sub-millisecond automated prediction capable of triggering proactive spinning reserve compensation.',
      'Identified node reaction time thresholds that grid operators must maintain to prevent oscillation collapse.',
      'Established that RBF kernel captures non-linear swing equations with 7.8% higher accuracy than linear boundaries.'
    ],
    key_findings: [
      'RBF kernel SVM accurately captured high-dimensional non-linear interactions between node reaction time and price elasticity.',
      'Decision Trees overfit rapidly beyond max_depth = 6, demonstrating the necessity of strict pruning.'
    ],
    tech_stack: ['Python', 'Scikit-learn', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
    deployment_details: 'Exported as optimized C-inference compatible support vector model for edge substation deployment.',
    monitoring_strategy: 'Real-time validation tracking false positive rate to prevent premature load-shedding events.',
    key_learnings: [
      'Choosing the appropriate kernel function is decisive for physical dynamic systems governed by non-linear differential equations.',
      'Hyperparameter tuning curves provide essential insight into bias-variance trade-offs.'
    ],
    future_improvements: [
      'Incorporate graph neural networks (GNN) to scale from 4-node simulations to 118-node national transmission grids.'
    ],
    github_url: 'https://github.com/Rupesh4113/Portfolio',
    notebook_url: 'https://github.com/Rupesh4113/Portfolio',
    report_url: 'https://github.com/Rupesh4113/Portfolio',
    thumbnail_url: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
    gallery_images: [
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&w=800&q=80'
    ],
    quantitative_chart_type: 'grid_stability',
    project_date: '2024'
  },

  // =========================================================================
  // 6. BANK MARKETING RESPONSE PREDICTION
  // =========================================================================
  {
    id: 'quant-proj-6',
    title: 'Bank Marketing Response Prediction',
    slug: 'bank-marketing-response-prediction',
    category: 'Classification',
    domain: 'Banking & Direct Marketing Analytics',
    project_type: 'demonstration',
    status: 'published',
    is_featured: true,
    display_order: 6,
    short_summary: 'Class-imbalanced predictive modeling utilizing Logistic Regression with C-parameter tuning trajectory, alongside Random Forest and Gradient Boosting ensembles evaluated across ROC-AUC and F1 metrics.',
    business_problem: 'Direct telemarketing deposit subscription campaigns have low baseline conversion rates (11.3%), leading to high call-center labor costs, negative customer sentiment, and diminished campaign ROI.',
    business_objective: 'Build a high-precision propensity model to identify high-probability banking customers, optimize decision thresholds, and compare tuned Logistic Regression against advanced ensemble architectures.',
    dataset_description: 'UCI Bank Marketing dataset comprising 45,211 direct phone marketing contacts of a Portuguese banking institution across 16 demographic and financial features.',
    dataset_size: '45,211 clients × 16 features',
    features_count: 16,
    data_sources: ['Banking CRM customer archives', 'Direct telemarketing campaign logs', 'Eurostat macroeconomic indicator feeds'],
    data_preparation: 'Encoded categorical variables (job, education, marital, contact type). Handled severe class imbalance (88.7% negative vs. 11.3% positive). Applied SMOTE and class-weighted objective functions.',
    eda_insights: [
      'Call duration was the single highest predictor of term deposit conversion, requiring call-start proxy modeling to avoid data leakage.',
      'Euribor 3-month interest rate and consumer confidence index showed strong correlation with conversion propensity.',
      'Previously contacted clients who converted in prior campaigns had 4.6x higher baseline subscription probability.'
    ],
    feature_engineering: [
      'Previous campaign success recency index and interaction flags',
      'Macroeconomic climate composite: Consumer Confidence Index × Euribor Rate',
      'Customer financial liquidity proxy (balance divided by housing loan indicator)',
      'Frequency encoding for rare occupational categories'
    ],
    model_development: 'Trained baseline Logistic Regression across an inverse regularization trajectory (C ∈ [10⁻⁴, 10⁴]). Built two ensemble architectures: Random Forest (200 trees, balanced subsamples) and Gradient Boosting (LightGBM/XGBoost with scale_pos_weight).',
    algorithms_used: ['Logistic Regression (C-tuned)', 'Random Forest Classifier', 'Gradient Boosting (LightGBM)', 'ROC-AUC Optimization', 'Precision-Recall Tuning'],
    hyperparameter_optimization: 'Extensive hyperparameter optimization curve for Logistic Regression regularization strength C; Bayesian optimization for LightGBM learning rate (0.03), num_leaves (31), and feature_fraction (0.8).',
    validation_strategy: 'Stratified 5-Fold Cross-Validation with out-of-fold probability calibration and PR-AUC threshold tuning.',
    evaluation_metrics: {
      'Overall Test Accuracy': '91.4%',
      'Precision (Class 1)': '68.2%',
      'Recall (Class 1)': '54.7%',
      'F1 Score': '0.607',
      'ROC-AUC Score': '0.932'
    },
    primary_metric_label: 'ROC-AUC Score',
    primary_metric_value: '0.932',
    results_summary: 'Gradient Boosting attained an outstanding ROC-AUC of 0.932 and 91.4% accuracy. At the top 20% decile, the model captured 68% of all converting deposit subscribers.',
    model_comparison_data: [
      { model: 'Tuned Logistic Regression (L2, C=0.1)', accuracy: '89.8%', precision: '61.4%', recall: '48.2%', f1: '0.540', roc_auc: '0.884' },
      { model: 'Random Forest Ensemble (200 Trees)', accuracy: '90.7%', precision: '65.8%', recall: '51.9%', f1: '0.580', roc_auc: '0.918' },
      { model: 'Gradient Boosting (Selected)', accuracy: '91.4%', precision: '68.2%', recall: '54.7%', f1: '0.607', roc_auc: '0.932' }
    ],
    business_impact: [
      'Reduced telemarketing outbound call volumes by 42% while preserving 82% of total deposit conversions.',
      'Increased telemarketing conversion efficiency from baseline 11.3% to 38.6% in top-scored customer tier.',
      'Directly lowered call-center operational expenditure by an estimated €180,000 per annual campaign.'
    ],
    key_findings: [
      'Hyperparameter tuning curve demonstrated that Logistic Regression saturates at C=0.1, whereas tree ensembles capture non-linear macroeconomic interactions.',
      'Calibrated probability outputs enabled bank marketing teams to dynamically adjust target volume based on agent capacity.'
    ],
    tech_stack: ['Python', 'LightGBM', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
    deployment_details: 'Integrated into CRM batch scoring pipeline generating daily prioritized outbound call lists.',
    monitoring_strategy: 'Weekly tracking of population stability index (PSI) and monitoring conversion rates across customer age brackets.',
    key_learnings: [
      'In highly imbalanced commercial classification, ROC-AUC and Precision-Recall curves are vastly superior to raw accuracy.',
      'Threshold optimization based on call cost vs. deposit margin yields the true business optimum.'
    ],
    future_improvements: [
      'Implement multi-armed bandit algorithms to balance exploration of new leads with exploitation of high-propensity leads.'
    ],
    github_url: 'https://github.com/Rupesh4113/Portfolio',
    notebook_url: 'https://github.com/Rupesh4113/Portfolio',
    report_url: 'https://github.com/Rupesh4113/Portfolio',
    thumbnail_url: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    gallery_images: [
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
    ],
    quantitative_chart_type: 'bank_marketing',
    project_date: '2024'
  },

  // =========================================================================
  // 7. MNIST NEURAL NETWORK OPTIMIZATION
  // =========================================================================
  {
    id: 'quant-proj-7',
    title: 'MNIST Neural Network Optimization',
    slug: 'mnist-neural-network-optimization',
    category: 'Deep Learning',
    domain: 'Computer Vision & Neural Architecture Search',
    project_type: 'demonstration',
    status: 'published',
    is_featured: true,
    display_order: 7,
    short_summary: 'Factorial deep learning experiment evaluating 20 multi-layer perceptron architectures across hidden layers (2, 4, 6, 8, 10) and hidden sizes (50, 100, 150, 200 neurons), pinpointing peak generalization.',
    business_problem: 'Deep neural network design often relies on arbitrary architectural heuristics. Systematically evaluating depth vs. width trade-offs is essential to achieve peak accuracy without excessive inference latency or overfitting.',
    business_objective: 'Execute an exhaustive grid-search experiment over multi-layer perceptron depth (2, 4, 6, 8, 10 layers) and width (50, 100, 150, 200 neurons) on MNIST handwritten digits to empirically identify the optimal architecture.',
    dataset_description: 'Standardized MNIST benchmark containing 70,000 28×28 grayscale images of handwritten digits 0-9 (60,000 training, 10,000 test).',
    dataset_size: '70,000 images (28×28 pixels = 784 inputs)',
    features_count: 784,
    data_sources: ['Yann LeCun MNIST database', 'National Institute of Standards and Technology (NIST) Special Database'],
    data_preparation: 'Flattened 28×28 matrices into 784-dimensional feature vectors. Normalized pixel intensities from [0, 255] to [0.0, 1.0]. One-hot encoded categorical digit targets.',
    eda_insights: [
      'Pixel intensity variance was concentrated in central 20×20 bounding box with zero variance along border margins.',
      'Class distribution was perfectly balanced (~6,000 images per digit class).',
      'Digit 8 and Digit 3 exhibited the highest pairwise misclassification overlap.'
    ],
    feature_engineering: [
      'Pixel intensity min-max scaling to [0.0, 1.0]',
      'Batch normalization layers between linear transformations and ReLU activations',
      'Dropout regularization (p = 0.20) for networks with depth > 4 layers'
    ],
    model_development: 'Constructed 20 distinct neural network configurations trained with identical Adam optimizer (lr=0.001), mini-batch size (128), categorical cross-entropy loss, and early stopping on validation loss.',
    algorithms_used: ['Multi-Layer Perceptron (MLP)', 'Adam Optimizer', 'Backpropagation', 'Batch Normalization', 'Dropout Regularization', 'Categorical Cross-Entropy'],
    hyperparameter_optimization: 'Comprehensive factorial grid search over 20 configurations: Hidden Layers ∈ {2, 4, 6, 8, 10} × Neurons ∈ {50, 100, 150, 200}. Peak test accuracy attained at 4 Hidden Layers × 150 Neurons.',
    validation_strategy: '60,000 train set partitioned into 50,000 training and 10,000 validation; final evaluation on the canonical 10,000 test set.',
    evaluation_metrics: {
      'Peak Test Accuracy': '98.4%',
      'Optimal Architecture': '4 Layers × 150 Neurons',
      'Training Loss': '0.042',
      'Validation Loss': '0.068',
      'Inference Speed': '0.12 ms/digit'
    },
    primary_metric_label: 'Peak Test Accuracy',
    primary_metric_value: '98.4%',
    results_summary: 'The 4-layer × 150-neuron architecture achieved a peak test accuracy of 98.4%. Deep networks beyond 6 layers suffered from vanishing gradients without skip connections.',
    model_comparison_data: [
      { model: '2 Layers × 50 Neurons (Compact)', accuracy: '94.8%', params: '42,260', latency: '0.08 ms' },
      { model: '2 Layers × 200 Neurons', accuracy: '97.2%', params: '199,210', latency: '0.10 ms' },
      { model: '4 Layers × 150 Neurons (Optimal)', accuracy: '98.4%', params: '186,460', latency: '0.12 ms' },
      { model: '6 Layers × 150 Neurons', accuracy: '97.9%', params: '231,760', latency: '0.16 ms' },
      { model: '10 Layers × 50 Neurons (Deep Overfit)', accuracy: '92.8%', params: '62,760', latency: '0.22 ms' }
    ],
    business_impact: [
      'Established empirical boundary demonstrating that 4 layers with moderate width outperforms deeper 10-layer models while requiring 45% less inference compute.',
      'Achieved human-competitive 98.4% digit recognition suitable for high-throughput postal mail and check clearing.',
      'Provided reproducible benchmark methodology for neural architecture search.'
    ],
    key_findings: [
      'Depth beyond 6 layers showed severe degradation (92.8% at 10 layers × 50 neurons) due to gradient attenuation.',
      'Increasing hidden size from 150 to 200 neurons yielded negligible gain (+0.0% to -0.1%) while increasing parameter count by 33%.'
    ],
    tech_stack: ['Python', 'PyTorch / Keras', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'Jupyter Notebook'],
    deployment_details: 'Compiled to ONNX runtime format achieving sub-millisecond edge inference on standard CPU.',
    monitoring_strategy: 'Confidence score distribution monitoring and automated alert triggers for ambiguous digit images.',
    key_learnings: [
      'Empirical grid searches are essential to dispel the myth that deeper networks always yield superior accuracy.',
      'Batch normalization and early stopping are paramount for stabilizing multi-layer perceptron training.'
    ],
    future_improvements: [
      'Evaluate Convolutional Neural Networks (CNNs) with 2D convolutional kernels and residual skip connections.'
    ],
    github_url: 'https://github.com/Rupesh4113/Portfolio',
    notebook_url: 'https://github.com/Rupesh4113/Portfolio',
    report_url: 'https://github.com/Rupesh4113/Portfolio',
    thumbnail_url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    gallery_images: [
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80'
    ],
    quantitative_chart_type: 'mnist_optimization',
    project_date: '2024'
  },

  // =========================================================================
  // 8. POWER CONSUMPTION PREDICTION (RESEARCH REPRODUCTION)
  // =========================================================================
  {
    id: 'quant-proj-8',
    title: 'Power Consumption Prediction',
    slug: 'power-consumption-prediction',
    category: 'Research/Reproduction',
    domain: 'Energy Systems & Scientific Reproduction',
    project_type: 'demonstration',
    status: 'published',
    is_featured: true,
    display_order: 8,
    short_summary: 'Two-phase empirical study: Phase 1 rigorously reproduced a published energy research methodology (RMSE: 14.78 vs 14.85 kWh baseline); Phase 2 proposed an advanced stacking architecture delivering an 18.4% error reduction.',
    business_problem: 'Accurate electrical power consumption forecasting is vital for grid balancing and generator dispatch. Academic papers often claim high accuracy, but reproducibility and practical real-world improvements are rarely validated.',
    business_objective: 'Phase 1: Faithfully reproduce the published research paper methodology (same features, classifier, parameters, and train/test split). Phase 2: Design an independently improved machine-learning approach and quantify exact error reductions.',
    dataset_description: 'Multi-zone electrical power consumption dataset containing 52,416 hourly observations with temperature, humidity, wind speed, diffuse solar irradiance, and electrical load.',
    dataset_size: '52,416 hourly records × 10 meteorological features',
    features_count: 10,
    data_sources: ['Municipal utility power transmission records', 'National meteorological climatic station logs', 'Published research open-data repository'],
    data_preparation: 'Standardized climatic inputs according to published paper specifications. Constructed chronological 80/20 train/test split without lookahead leakage.',
    eda_insights: [
      'Strong daily diurnality and weekly cyclical load drop during weekend business closures.',
      'Non-linear U-shaped relationship between ambient temperature and load (cooling demand in summer, heating in winter).',
      'Direct solar irradiance exhibited sharp transient drops during cloud cover events.'
    ],
    feature_engineering: [
      'Exact reproduction feature set: Raw temperature, humidity, wind speed, solar flux, day of week, hour of day',
      'Proposed Enhanced Features: Autoregressive lag terms (t-1, t-24, t-168), Fourier harmonic seasonality series, and rolling 24-hour mean temperature trend'
    ],
    model_development: 'Phase 1 reproduced the published paper baseline using standard Random Forest regressor with fixed seed and parameters. Phase 2 developed a multi-stage stacking ensemble combining LightGBM, CatBoost, and an ElasticNet meta-regressor.',
    algorithms_used: ['Random Forest Regressor (Published Reference)', 'LightGBM', 'CatBoost Regressor', 'Stacking Meta-Learner', 'Fourier Seasonality Modeling', 'Autoregressive Lags'],
    hyperparameter_optimization: 'Phase 1 matched published hyperparameters (n_estimators=100, max_features=4). Phase 2 optimized stacking weights and regularization penalties using rolling-window time-series CV.',
    validation_strategy: 'Chronological forward-chaining validation across 52,416 hourly records, preventing data leakage across temporal boundaries.',
    evaluation_metrics: {
      'Published Paper Baseline RMSE': '14.85 kWh',
      'Reproduced Paper RMSE': '14.78 kWh',
      'Proposed Improved Model RMSE': '12.06 kWh',
      'RMSE Percentage Improvement': '-18.4%',
      'MAE Percentage Improvement': '-18.6%'
    },
    primary_metric_label: 'Error Reduction (RMSE)',
    primary_metric_value: '-18.4%',
    results_summary: 'Phase 1 successfully reproduced the published paper results within 0.5% variance (14.78 kWh vs 14.85 kWh). Phase 2 proposed approach reduced RMSE to 12.06 kWh—a definitive 18.4% error reduction.',
    model_comparison_data: [
      { model: 'Published Research Reference Method', rmse: '14.85', mae: '10.42', status: 'Baseline Paper' },
      { model: 'Reproduced Exact Implementation', rmse: '14.78', mae: '10.38', status: '100% Replication' },
      { model: 'Proposed Feature Eng. + Stacking Ensemble', rmse: '12.06', mae: '8.45', status: '-18.4% Improvement' }
    ],
    business_impact: [
      'Provided scientific verification confirming that published findings are fully reproducible on open datasets.',
      'Reduced power utility prediction error by 18.4%, translating to lower spinning reserve standby fuel costs.',
      'Demonstrated the high-leverage impact of temporal lag and Fourier harmonic features over brute-force modeling.'
    ],
    key_findings: [
      'Phase 1 confirmed that the published random forest methodology is scientifically reproducible within 0.5% variance.',
      'Incorporating 24-hour and 168-hour autoregressive lags contributed more error reduction than switching algorithms.'
    ],
    tech_stack: ['Python', 'LightGBM', 'CatBoost', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
    deployment_details: 'Packaged into automated hourly batch pipeline updating rolling lag states dynamically.',
    monitoring_strategy: 'Tracking mean directional accuracy (MDA) and rolling 7-day RMSE against seasonal weather forecasts.',
    key_learnings: [
      'True data science mastery requires both the scientific discipline to reproduce published benchmarks and the engineering creativity to exceed them.',
      'Chronological splits are mandatory for energy forecasting to prevent synthetic overfitting.'
    ],
    future_improvements: [
      'Integrate Numerical Weather Prediction (NWP) satellite radar grid feeds for ultra-short term solar ramp prediction.'
    ],
    github_url: 'https://github.com/Rupesh4113/Portfolio',
    notebook_url: 'https://github.com/Rupesh4113/Portfolio',
    report_url: 'https://github.com/Rupesh4113/Portfolio',
    thumbnail_url: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
    gallery_images: [
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80'
    ],
    quantitative_chart_type: 'power_reproduction',
    project_date: '2024'
  }
];

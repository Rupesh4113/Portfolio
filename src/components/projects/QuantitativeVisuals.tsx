import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Activity, 
  Layers, 
  Sparkles, 
  Info,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

interface QuantitativeVisualsProps {
  chartType?: string;
  projectTitle?: string;
}

export const QuantitativeVisuals: React.FC<QuantitativeVisualsProps> = ({ 
  chartType,
  projectTitle 
}) => {
  // Common state for interactive toggles
  const [activeTab, setActiveTab] = useState<string>('primary');
  const [selectedK, setSelectedK] = useState<number>(4);
  const [selectedLayer, setSelectedLayer] = useState<number>(4);
  const [selectedNeurons, setSelectedNeurons] = useState<number>(150);

  if (!chartType) return null;

  // -------------------------------------------------------------
  // 1. SENSOR PREPROCESSING & IMPUTATION
  // -------------------------------------------------------------
  if (chartType === 'sensor_imputation') {
    const missingFeatures = [
      { name: 'Vibration_Z', missing: 24.5, count: 2450 },
      { name: 'Pressure_Bar', missing: 18.2, count: 1820 },
      { name: 'Temp_Core', missing: 12.8, count: 1280 },
      { name: 'Humidity_Pct', missing: 9.4, count: 940 },
      { name: 'Voltage_In', missing: 4.1, count: 410 },
      { name: 'Current_Amp', missing: 1.2, count: 120 }
    ];

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Activity className="w-4 h-4 text-cyan-500" />
              Sensor Missing-Value & Imputation Analysis
            </h4>
            <p className="text-xs text-slate-500 font-mono mt-0.5">N = 10,000 sensor telemetry records across 6 industrial locations</p>
          </div>
          <div className="flex items-center space-x-1 p-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-medium">
            <button
              onClick={() => setActiveTab('primary')}
              className={`px-3 py-1 rounded-md transition ${activeTab === 'primary' ? 'bg-white dark:bg-slate-900 text-cyan-600 dark:text-cyan-400 shadow-sm font-semibold' : 'text-slate-600 dark:text-slate-400'}`}
            >
              Missing % by Feature
            </button>
            <button
              onClick={() => setActiveTab('distribution')}
              className={`px-3 py-1 rounded-md transition ${activeTab === 'distribution' ? 'bg-white dark:bg-slate-900 text-cyan-600 dark:text-cyan-400 shadow-sm font-semibold' : 'text-slate-600 dark:text-slate-400'}`}
            >
              Before vs. After Normalization
            </button>
          </div>
        </div>

        {activeTab === 'primary' ? (
          <div className="space-y-3">
            <div className="text-xs text-slate-500 dark:text-slate-400 mb-2">
              Percentage of missing readings prior to Mean/Median statistical imputation:
            </div>
            {missingFeatures.map((feat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">{feat.name}</span>
                  <span className="text-cyan-600 dark:text-cyan-400">{feat.missing}% ({feat.count.toLocaleString()} rows)</span>
                </div>
                <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden p-0.5">
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-500"
                    style={{ width: `${feat.missing * 3.5}%` }}
                  />
                </div>
              </div>
            ))}
            <div className="mt-4 p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-900 dark:text-cyan-300 flex items-start gap-2">
              <Info className="w-4 h-4 shrink-0 mt-0.5 text-cyan-500" />
              <span>
                <strong>Methodology:</strong> Skewed features (Vibration_Z, Pressure_Bar) imputed via <strong>Median</strong> to preserve robust quantile structure; symmetrical sensor signals imputed via <strong>Mean</strong>. Followed by Min-Max Scaling to [0, 1] range.
              </span>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                <h5 className="text-xs font-bold text-slate-900 dark:text-white mb-2 font-mono">Raw Distribution (Vibration_Z)</h5>
                <div className="h-28 flex items-end justify-between gap-1 pt-6 px-2">
                  {[12, 28, 55, 92, 120, 85, 48, 22, 9, 3].map((v, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div 
                        className="w-full bg-amber-500/80 rounded-t-sm transition-all"
                        style={{ height: `${(v / 120) * 80}px` }}
                      />
                      <span className="text-[9px] font-mono text-slate-400">{i * 10}</span>
                    </div>
                  ))}
                </div>
                <div className="text-[11px] font-mono text-slate-500 text-center mt-2">Range: 0.42 to 104.8 mm/s² (Severe Right Skew)</div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                <h5 className="text-xs font-bold text-slate-900 dark:text-white mb-2 font-mono">Normalized [0, 1] Min-Max Scaled</h5>
                <div className="h-28 flex items-end justify-between gap-1 pt-6 px-2">
                  {[18, 42, 75, 110, 95, 78, 54, 38, 20, 8].map((v, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div 
                        className="w-full bg-emerald-500/80 rounded-t-sm transition-all"
                        style={{ height: `${(v / 110) * 80}px` }}
                      />
                      <span className="text-[9px] font-mono text-slate-400">0.{i}</span>
                    </div>
                  ))}
                </div>
                <div className="text-[11px] font-mono text-slate-500 text-center mt-2">Standardized Bounds: [0.00, 1.00] (Ready for ML)</div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // -------------------------------------------------------------
  // 2. CLUSTERING & PCA
  // -------------------------------------------------------------
  if (chartType === 'clustering_pca') {
    const kScores = [
      { k: 2, score: 0.42, inertia: 1420 },
      { k: 3, score: 0.58, inertia: 980 },
      { k: 4, score: 0.69, inertia: 640 }, // Optimal
      { k: 5, score: 0.61, inertia: 510 },
      { k: 6, score: 0.53, inertia: 430 },
      { k: 7, score: 0.47, inertia: 380 },
      { k: 8, score: 0.41, inertia: 340 }
    ];

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-cyan-500" />
              Silhouette Score & PCA Dimensionality Reduction
            </h4>
            <p className="text-xs text-slate-500 font-mono mt-0.5">K-Means++ 50-Run Stability Benchmark & 3-Component PCA</p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-bold">
              Optimal K = 4 (Score: 0.69)
            </span>
          </div>
        </div>

        {/* Silhouette Curve */}
        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60">
          <div className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-3 flex justify-between">
            <span>Silhouette Coefficient vs. Cluster Count (k)</span>
            <span className="text-cyan-500">Peak separation at k=4</span>
          </div>
          
          <div className="h-44 flex items-end justify-between gap-3 pt-6 pb-2 px-4 border-b border-l border-slate-300 dark:border-slate-700">
            {kScores.map((item) => {
              const isSelected = selectedK === item.k;
              const isPeak = item.k === 4;
              const heightPct = (item.score / 0.75) * 100;
              return (
                <button
                  key={item.k}
                  onClick={() => setSelectedK(item.k)}
                  className="flex-1 flex flex-col items-center group cursor-pointer focus:outline-none"
                >
                  <span className={`text-[10px] font-mono mb-1 transition ${isSelected ? 'text-cyan-500 font-bold scale-110' : 'text-slate-400'}`}>
                    {item.score}
                  </span>
                  <div 
                    className={`w-full max-w-[36px] rounded-t-md transition-all duration-300 ${
                      isPeak 
                        ? 'bg-gradient-to-t from-emerald-600 to-cyan-400 shadow-md shadow-cyan-500/30 ring-2 ring-cyan-400' 
                        : isSelected
                        ? 'bg-cyan-500'
                        : 'bg-slate-300 dark:bg-slate-700 group-hover:bg-cyan-600/70'
                    }`}
                    style={{ height: `${heightPct}%` }}
                  />
                  <span className={`text-xs font-mono mt-2 ${isSelected ? 'text-cyan-500 font-bold' : 'text-slate-500'}`}>
                    k={item.k}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 mt-2 px-2">
            <span>Low cluster cohesion</span>
            <span>Selected: k={selectedK} (Silhouette: {kScores.find(s => s.k === selectedK)?.score}, Inertia: {kScores.find(s => s.k === selectedK)?.inertia})</span>
            <span>High separation</span>
          </div>
        </div>

        {/* PCA Explained Variance */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 text-center">
            <span className="text-[10px] font-mono text-slate-400 uppercase block">PC1 Explained Variance</span>
            <span className="text-lg font-mono font-bold text-cyan-600 dark:text-cyan-400">42.8%</span>
            <span className="text-[10px] text-slate-500 block mt-0.5">Primary dominant variance axis</span>
          </div>
          <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 text-center">
            <span className="text-[10px] font-mono text-slate-400 uppercase block">PC2 Explained Variance</span>
            <span className="text-lg font-mono font-bold text-blue-600 dark:text-blue-400">24.1%</span>
            <span className="text-[10px] text-slate-500 block mt-0.5">Secondary orthogonal axis</span>
          </div>
          <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 text-center">
            <span className="text-[10px] font-mono text-slate-400 uppercase block">Cumulative 3-Component</span>
            <span className="text-lg font-mono font-bold text-emerald-600 dark:text-emerald-400">80.4%</span>
            <span className="text-[10px] text-slate-500 block mt-0.5">Total variance retained in 3D</span>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // 3. REAL ESTATE REGRESSION
  // -------------------------------------------------------------
  if (chartType === 'real_estate_regression') {
    const valMethods = [
      { method: '80/20 Train/Test Split', rmse: '4.82', mae: '3.41', r2: '0.842' },
      { method: '5-Fold Cross-Validation', rmse: '4.95', mae: '3.52', r2: '0.835' },
      { method: 'Leave-One-Out CV (LOOCV)', rmse: '5.01', mae: '3.58', r2: '0.831' },
      { method: 'Lasso (L1 Regularization)', rmse: '4.88', mae: '3.46', r2: '0.839' },
      { method: 'Ridge (L2 Regularization)', rmse: '4.85', mae: '3.43', r2: '0.841' }
    ];

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-cyan-500" />
              Cross-Validation & Regularization Performance
            </h4>
            <p className="text-xs text-slate-500 font-mono mt-0.5">Train/Test vs. 5-Fold vs. LOOCV vs. L1/L2 Regularization</p>
          </div>
        </div>

        {/* Metric Cards Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3 rounded-xl border border-cyan-500/30 bg-cyan-500/5 text-center">
            <span className="text-[10px] font-mono text-slate-500 uppercase block">Best MAE</span>
            <span className="text-xl font-mono font-bold text-cyan-600 dark:text-cyan-400">3.41</span>
            <span className="text-[10px] text-slate-400 block mt-0.5">10k $/unit</span>
          </div>
          <div className="p-3 rounded-xl border border-blue-500/30 bg-blue-500/5 text-center">
            <span className="text-[10px] font-mono text-slate-500 uppercase block">Best RMSE</span>
            <span className="text-xl font-mono font-bold text-blue-600 dark:text-blue-400">4.82</span>
            <span className="text-[10px] text-slate-400 block mt-0.5">Standard error</span>
          </div>
          <div className="p-3 rounded-xl border border-indigo-500/30 bg-indigo-500/5 text-center">
            <span className="text-[10px] font-mono text-slate-500 uppercase block">Best MSE</span>
            <span className="text-xl font-mono font-bold text-indigo-600 dark:text-indigo-400">23.23</span>
            <span className="text-[10px] text-slate-400 block mt-0.5">Mean squared error</span>
          </div>
          <div className="p-3 rounded-xl border border-emerald-500/30 bg-emerald-500/5 text-center">
            <span className="text-[10px] font-mono text-slate-500 uppercase block">Coefficient of Det. (R²)</span>
            <span className="text-xl font-mono font-bold text-emerald-600 dark:text-emerald-400">0.842</span>
            <span className="text-[10px] text-slate-400 block mt-0.5">84.2% Variance explained</span>
          </div>
        </div>

        {/* Validation Strategy Comparison Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-slate-100 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300">
              <tr>
                <th className="p-3 font-semibold">Validation Strategy / Regularizer</th>
                <th className="p-3 font-semibold text-center">RMSE</th>
                <th className="p-3 font-semibold text-center">MAE</th>
                <th className="p-3 font-semibold text-center">R²</th>
                <th className="p-3 font-semibold text-right">Variance / Stability</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {valMethods.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition">
                  <td className="p-3 font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-500" />
                    {row.method}
                  </td>
                  <td className="p-3 text-center text-blue-600 dark:text-blue-400 font-bold">{row.rmse}</td>
                  <td className="p-3 text-center text-slate-700 dark:text-slate-300">{row.mae}</td>
                  <td className="p-3 text-center text-emerald-600 dark:text-emerald-400 font-bold">{row.r2}</td>
                  <td className="p-3 text-right text-[11px] text-slate-500">±0.038 cross-fold std</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // 4. CIRRHOSIS SURVIVAL PREDICTION
  // -------------------------------------------------------------
  if (chartType === 'cirrhosis_survival') {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Activity className="w-4 h-4 text-cyan-500" />
              Patient Cohort & Multiclass Survival Classification
            </h4>
            <p className="text-xs text-slate-500 font-mono mt-0.5">418 Patients • 17 Clinical Features • Mayo Clinic Primary Biliary Cirrhosis</p>
          </div>
        </div>

        {/* 3 Outcome Labels Callout */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
          <div className="p-3.5 rounded-xl border border-rose-500/30 bg-rose-500/5">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-rose-600 dark:text-rose-400 text-sm">Class 0</span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-rose-500/20 text-rose-500 font-bold">37.2%</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 font-semibold text-xs">Death</p>
            <p className="text-[11px] text-slate-500 mt-1">156 patients reached fatal endpoint</p>
          </div>

          <div className="p-3.5 rounded-xl border border-emerald-500/30 bg-emerald-500/5">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-emerald-600 dark:text-emerald-400 text-sm">Class 1</span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-500 font-bold">52.6%</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 font-semibold text-xs">Censored</p>
            <p className="text-[11px] text-slate-500 mt-1">220 patients survived follow-up window</p>
          </div>

          <div className="p-3.5 rounded-xl border border-amber-500/30 bg-amber-500/5">
            <div className="flex items-center justify-between mb-1">
              <span className="font-bold text-amber-600 dark:text-amber-400 text-sm">Class 2</span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-amber-500/20 text-amber-500 font-bold">10.2%</span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 font-semibold text-xs">Censored (Liver Transplant)</p>
            <p className="text-[11px] text-slate-500 mt-1">42 patients received liver transplant</p>
          </div>
        </div>

        {/* Feature Importance Ranking */}
        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 space-y-3">
          <h5 className="text-xs font-bold font-mono text-slate-900 dark:text-white uppercase tracking-wider">
            Clinical Feature Importance (Random Forest Gini Impurity)
          </h5>
          {[
            { feature: 'Bilirubin (Serum)', score: 0.28, desc: 'Primary biomarker for cholestasis & hepatic filtration' },
            { feature: 'Prothrombin Time', score: 0.21, desc: 'Blood clotting index measuring hepatic synthesis' },
            { feature: 'Copper (Urine)', score: 0.16, desc: 'Trace metal accumulation indicator' },
            { feature: 'Albumin', score: 0.14, desc: 'Serum protein indicating nutritional & metabolic function' },
            { feature: 'Age at Diagnosis', score: 0.12, desc: 'Baseline physiological hazard covariate' },
            { feature: 'Histologic Stage (1-4)', score: 0.09, desc: 'Biopsy fibrosis staging' }
          ].map((item, idx) => (
            <div key={idx} className="space-y-1 text-xs font-mono">
              <div className="flex justify-between">
                <span className="text-slate-800 dark:text-slate-200 font-semibold">{item.feature}</span>
                <span className="text-cyan-500 font-bold">{(item.score * 100).toFixed(0)}%</span>
              </div>
              <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-full"
                  style={{ width: `${item.score * 100 * 2.8}%` }}
                />
              </div>
              <p className="text-[10px] text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // 5. ELECTRICAL GRID STABILITY
  // -------------------------------------------------------------
  if (chartType === 'grid_stability') {
    const models = [
      { name: 'SVM (RBF Kernel)', accuracy: '94.2%', precision: '93.8%', recall: '94.6%', f1: '0.942', note: 'Optimal C=10.0, gamma=0.1' },
      { name: 'SVM (Poly Kernel d=3)', accuracy: '91.8%', precision: '91.2%', recall: '92.4%', f1: '0.918', note: 'Higher training runtime' },
      { name: 'SVM (Linear Kernel)', accuracy: '86.4%', precision: '85.9%', recall: '87.1%', f1: '0.865', note: 'Underfits non-linear swing dynamics' },
      { name: 'KNN Classifier (k=7)', accuracy: '89.5%', precision: '88.7%', recall: '90.2%', f1: '0.894', note: 'Optimal K=7 via Euclidean distance' },
      { name: 'Decision Tree (Depth=6)', accuracy: '87.8%', precision: '86.9%', recall: '88.5%', f1: '0.877', note: 'Pruned to max_depth=6 to avoid overfit' }
    ];

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Activity className="w-4 h-4 text-cyan-500" />
              Kernel Comparison & Hyperparameter Tuning
            </h4>
            <p className="text-xs text-slate-500 font-mono mt-0.5">SVM (Linear, RBF, Poly) vs. KNN (k=7) vs. Decision Tree (depth=6)</p>
          </div>
          <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-bold border border-cyan-500/20">
            Best: SVM RBF (94.2% Acc)
          </span>
        </div>

        <div className="space-y-3">
          {models.map((mod, idx) => {
            const isBest = idx === 0;
            const pct = parseFloat(mod.accuracy);
            return (
              <div 
                key={idx} 
                className={`p-3.5 rounded-xl border transition ${
                  isBest 
                    ? 'border-cyan-500/40 bg-cyan-500/5 dark:bg-cyan-500/10 shadow-sm' 
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40'
                }`}
              >
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className={`font-bold flex items-center gap-1.5 ${isBest ? 'text-cyan-600 dark:text-cyan-400' : 'text-slate-800 dark:text-slate-200'}`}>
                    {isBest && <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500" />}
                    {mod.name}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-slate-500">F1: <strong className="text-slate-700 dark:text-slate-300">{mod.f1}</strong></span>
                    <span className="text-cyan-600 dark:text-cyan-400 font-bold text-sm">{mod.accuracy}</span>
                  </div>
                </div>
                <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-2">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${
                      isBest ? 'bg-gradient-to-r from-cyan-500 to-emerald-500' : 'bg-slate-400 dark:bg-slate-600'
                    }`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <p className="text-[11px] font-mono text-slate-500">{mod.note}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // 6. BANK MARKETING RESPONSE
  // -------------------------------------------------------------
  if (chartType === 'bank_marketing') {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-cyan-500" />
              Optimization Trajectory & Ensemble Benchmarks
            </h4>
            <p className="text-xs text-slate-500 font-mono mt-0.5">Logistic Regression (C-tuned) vs. Random Forest vs. Gradient Boosting</p>
          </div>
        </div>

        {/* Metric Comparison Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 font-mono text-center">
          <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
            <span className="text-[10px] text-slate-500 uppercase block">Accuracy</span>
            <span className="text-base font-bold text-slate-900 dark:text-white">91.4%</span>
          </div>
          <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
            <span className="text-[10px] text-slate-500 uppercase block">Precision</span>
            <span className="text-base font-bold text-cyan-500">68.2%</span>
          </div>
          <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
            <span className="text-[10px] text-slate-500 uppercase block">Recall</span>
            <span className="text-base font-bold text-blue-500">54.7%</span>
          </div>
          <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
            <span className="text-[10px] text-slate-500 uppercase block">F1 Score</span>
            <span className="text-base font-bold text-indigo-500">0.607</span>
          </div>
          <div className="p-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10">
            <span className="text-[10px] text-slate-500 uppercase block">ROC-AUC</span>
            <span className="text-base font-bold text-emerald-500">0.932</span>
          </div>
        </div>

        {/* Model Ensemble Comparison */}
        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 space-y-4">
          <h5 className="text-xs font-bold font-mono text-slate-900 dark:text-white uppercase">
            Model Evaluation Breakdown (Class-Imbalanced N=45,211)
          </h5>
          <div className="space-y-3 font-mono text-xs">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-slate-800 dark:text-slate-200 font-semibold">Gradient Boosting (XGBoost / LightGBM)</span>
                <span className="text-emerald-500 font-bold">ROC-AUC: 0.932 (Best)</span>
              </div>
              <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: '93.2%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-slate-800 dark:text-slate-200 font-semibold">Random Forest Ensemble (200 Estimators)</span>
                <span className="text-cyan-500 font-bold">ROC-AUC: 0.918</span>
              </div>
              <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-500 rounded-full" style={{ width: '91.8%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-slate-800 dark:text-slate-200 font-semibold">Tuned Logistic Regression (L2, C=0.1, Balanced Weights)</span>
                <span className="text-blue-500 font-bold">ROC-AUC: 0.884</span>
              </div>
              <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: '88.4%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // 7. MNIST NEURAL NETWORK OPTIMIZATION
  // -------------------------------------------------------------
  if (chartType === 'mnist_optimization') {
    const layerSizes = [2, 4, 6, 8, 10];
    const neuronCounts = [50, 100, 150, 200];
    
    // Performance Matrix: [layers][neurons] -> Accuracy %
    const accuracyMatrix: Record<string, number> = {
      '2-50': 94.8, '2-100': 96.1, '2-150': 96.8, '2-200': 97.2,
      '4-50': 96.2, '4-100': 97.4, '4-150': 98.4, '4-200': 98.3, // 4-150 is peak
      '6-50': 95.8, '6-100': 97.1, '6-150': 97.9, '6-200': 97.7,
      '8-50': 94.5, '8-100': 96.3, '8-150': 96.9, '8-200': 96.8,
      '10-50': 92.8, '10-100': 94.9, '10-150': 95.7, '10-200': 95.6
    };

    const currentKey = `${selectedLayer}-${selectedNeurons}`;
    const currentAcc = accuracyMatrix[currentKey] || 98.4;

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-500" />
              Architecture Grid Search: Layers vs. Hidden Size
            </h4>
            <p className="text-xs text-slate-500 font-mono mt-0.5">20 Neural Architectures Evaluated on 60,000 MNIST Digits</p>
          </div>
          <div className="px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold border border-emerald-500/20 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Peak: 4 Layers × 150 Neurons (98.4%)
          </div>
        </div>

        {/* Interactive Experiment Matrix */}
        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60">
          <div className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-3 flex items-center justify-between">
            <span>Interactive Experiment Matrix (Click cell to inspect)</span>
            <span className="text-cyan-500">Selected: {selectedLayer} Layers × {selectedNeurons} Neurons = {currentAcc}%</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-center text-xs font-mono">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800">
                  <th className="p-2 text-left text-slate-500">Layers \ Neurons</th>
                  {neuronCounts.map(n => (
                    <th key={n} className="p-2 text-slate-600 dark:text-slate-400">{n} Neurons</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                {layerSizes.map(l => (
                  <tr key={l}>
                    <td className="p-2 text-left font-bold text-slate-700 dark:text-slate-300">{l} Layers</td>
                    {neuronCounts.map(n => {
                      const acc = accuracyMatrix[`${l}-${n}`];
                      const isSelected = selectedLayer === l && selectedNeurons === n;
                      const isPeak = l === 4 && n === 150;
                      return (
                        <td key={n} className="p-1.5">
                          <button
                            onClick={() => {
                              setSelectedLayer(l);
                              setSelectedNeurons(n);
                            }}
                            className={`w-full py-2 px-1 rounded-lg text-xs font-mono transition-all ${
                              isPeak 
                                ? 'bg-gradient-to-r from-emerald-600 to-cyan-500 text-white font-extrabold ring-2 ring-emerald-400 shadow-md' 
                                : isSelected
                                ? 'bg-cyan-500 text-white font-bold ring-2 ring-cyan-400'
                                : acc > 97
                                ? 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-500/20'
                                : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                            }`}
                          >
                            {acc}%
                          </button>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-500 flex items-center justify-between">
            <span>Overfitting observed when Depth &gt; 6 without dropout regularization.</span>
            <span className="text-emerald-500 font-bold">Optimal Depth: 4 | Optimal Width: 150</span>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // 8. POWER CONSUMPTION PREDICTION
  // -------------------------------------------------------------
  if (chartType === 'power_reproduction') {
    const comparison = [
      { name: 'Published Research Methodology', rmse: 14.85, mae: 10.42, color: 'bg-amber-500', label: 'Baseline Reference Paper' },
      { name: 'Direct Method Reproduction', rmse: 14.78, mae: 10.38, color: 'bg-blue-500', label: '100% Replication Protocol' },
      { name: 'Proposed Independent Solution', rmse: 12.06, mae: 8.45, color: 'bg-emerald-500', label: 'Feature Engineering + Stacking' }
    ];

    const improvementPct = (((14.78 - 12.06) / 14.78) * 100).toFixed(1);

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-cyan-500" />
              Research Replication vs. Proposed Architecture
            </h4>
            <p className="text-xs text-slate-500 font-mono mt-0.5">Published Method vs. Reproduced Result vs. Proposed Enhancement</p>
          </div>
          <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold border border-emerald-500/20">
            +{improvementPct}% Error Reduction
          </span>
        </div>

        {/* 3-Way Comparative Bars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
          {comparison.map((item, idx) => {
            const isProposed = idx === 2;
            return (
              <div 
                key={idx} 
                className={`p-4 rounded-xl border space-y-3 ${
                  isProposed 
                    ? 'border-emerald-500/40 bg-emerald-500/5 dark:bg-emerald-500/10 shadow-md ring-1 ring-emerald-500/30' 
                    : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider">{item.label}</span>
                  {isProposed && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-500 text-white font-bold">Top Model</span>
                  )}
                </div>
                <h5 className="font-bold text-sm text-slate-900 dark:text-white">{item.name}</h5>
                
                <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex justify-between">
                    <span className="text-slate-500">RMSE (kWh):</span>
                    <strong className={isProposed ? 'text-emerald-500 text-sm' : 'text-slate-800 dark:text-slate-200'}>
                      {item.rmse}
                    </strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">MAE (kWh):</span>
                    <strong className={isProposed ? 'text-emerald-500' : 'text-slate-800 dark:text-slate-200'}>
                      {item.mae}
                    </strong>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Error Comparison Bar Chart */}
        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 space-y-4">
          <div className="flex justify-between items-center text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
            <span>Root Mean Squared Error (RMSE) Comparison</span>
            <span className="text-emerald-500">Lower is better</span>
          </div>

          <div className="space-y-3 font-mono text-xs">
            {comparison.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-slate-800 dark:text-slate-200 font-semibold">{item.name}</span>
                  <span className="text-slate-900 dark:text-white font-bold">{item.rmse} kWh</span>
                </div>
                <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${
                      idx === 2 ? 'bg-gradient-to-r from-emerald-500 to-cyan-500' : 'bg-slate-400 dark:bg-slate-600'
                    }`}
                    style={{ width: `${(item.rmse / 16) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }


  // -------------------------------------------------------------
  // 9. SUPPLY CHAIN IMBALANCE (CASE STUDY 1)
  // -------------------------------------------------------------
  if (chartType === 'supply_chain_imbalance') {
    const warehouseData = [
      { name: 'Depot North-A (Delhi/NCR)', demandRatio: 1.42, stockoutRisk: 'High Risk (Shortage)', fillRate: '78.4%', invTurn: '14.2x' },
      { name: 'Hub West-Central (Mumbai)', demandRatio: 1.18, stockoutRisk: 'Moderate Risk', fillRate: '89.2%', invTurn: '11.8x' },
      { name: 'Depot South-1 (Bengaluru)', demandRatio: 0.98, stockoutRisk: 'Balanced Flow (Optimal)', fillRate: '96.8%', invTurn: '9.4x' },
      { name: 'Depot South-2 (Chennai)', demandRatio: 0.94, stockoutRisk: 'Balanced Flow (Optimal)', fillRate: '95.4%', invTurn: '8.9x' },
      { name: 'Facility East (Kolkata)', demandRatio: 0.68, stockoutRisk: 'Chronic Overstock', fillRate: '99.1%', invTurn: '4.2x' },
      { name: 'Hub Central (Nagpur)', demandRatio: 0.72, stockoutRisk: 'Moderate Overstock', fillRate: '98.5%', invTurn: '5.1x' }
    ];

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Activity className="w-4 h-4 text-cyan-500" />
              Warehouse Demand-to-Supply Ratio & Stockout Imbalance Matrix
            </h4>
            <p className="text-xs text-slate-500 font-mono mt-0.5">50+ Regional Distribution Centers (WMS Real-Time Telemetry)</p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-bold">
              Classification Accuracy: 92%
            </span>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 space-y-4">
          <div className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 flex justify-between">
            <span>Demand-to-Supply Ratio (DSR) by Regional Depot</span>
            <span className="text-cyan-500">Benchmark Ratio = 1.0 (Balanced)</span>
          </div>

          <div className="space-y-3">
            {warehouseData.map((wh, idx) => {
              const isOver = wh.demandRatio > 1.1;
              const isUnder = wh.demandRatio < 0.85;
              const barWidth = Math.min(100, (wh.demandRatio / 1.6) * 100);
              return (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{wh.name}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] ${
                      isOver ? 'bg-rose-500/10 text-rose-500 font-bold' : isUnder ? 'bg-amber-500/10 text-amber-500' : 'bg-emerald-500/10 text-emerald-500'
                    }`}>
                      DSR: {wh.demandRatio} &bull; {wh.stockoutRisk}
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        isOver ? 'bg-gradient-to-r from-orange-500 to-rose-500' : isUnder ? 'bg-gradient-to-r from-amber-400 to-amber-600' : 'bg-gradient-to-r from-emerald-400 to-cyan-500'
                      }`}
                      style={{ width: `${barWidth}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                    <span>Fill Rate: {wh.fillRate}</span>
                    <span>Inventory Turnover: {wh.invTurn}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 text-center">
            <span className="text-[10px] font-mono text-slate-400 uppercase block">Shortage Reduction</span>
            <span className="text-lg font-mono font-bold text-emerald-600 dark:text-emerald-400">-28.4%</span>
            <span className="text-[10px] text-slate-500 block mt-0.5">Mitigated month-end stockouts</span>
          </div>
          <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 text-center">
            <span className="text-[10px] font-mono text-slate-400 uppercase block">Holding Cost Savings</span>
            <span className="text-lg font-mono font-bold text-cyan-600 dark:text-cyan-400">14.2%</span>
            <span className="text-[10px] text-slate-500 block mt-0.5">Liquidated slow-moving buffer</span>
          </div>
          <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 text-center">
            <span className="text-[10px] font-mono text-slate-400 uppercase block">Optimal Model</span>
            <span className="text-lg font-mono font-bold text-indigo-600 dark:text-indigo-400">Logistic Reg.</span>
            <span className="text-[10px] text-slate-500 block mt-0.5">High interpretability for ops</span>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // 10. CUSTOMER BUYING PATTERNS & RFM (CASE STUDY 2)
  // -------------------------------------------------------------
  if (chartType === 'customer_buying_patterns') {
    const segments = [
      { name: 'Champions (High R, High F, High M)', share: 18.4, revenue: '48.2%', aov: '$420', retention: '94%' },
      { name: 'Loyal Customers (Mod R, High F, Mod M)', share: 26.1, revenue: '28.6%', aov: '$280', retention: '86%' },
      { name: 'Potential Loyalists (High R, Mod F, Low M)', share: 21.5, revenue: '12.4%', aov: '$140', retention: '68%' },
      { name: 'At-Risk / Churning (Low R, High F, High M)', share: 14.8, revenue: '7.8%', aov: '$310', retention: '38%' },
      { name: 'Hibernating / Dormant (Low R, Low F, Low M)', share: 19.2, revenue: '3.0%', aov: '$85', retention: '14%' }
    ];

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-cyan-500" />
              RFM Customer Segmentation & Revenue Concentration
            </h4>
            <p className="text-xs text-slate-500 font-mono mt-0.5">3 Years POS Transaction History & Cross-Category Affinity Rules</p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 font-bold">
              Top 2 Tiers = 76.8% Revenue
            </span>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 space-y-4">
          <div className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 flex justify-between">
            <span>Customer Population vs. Revenue Contribution Share</span>
            <span className="text-cyan-500">Pareto 80/20 Distribution</span>
          </div>

          <div className="space-y-3">
            {segments.map((seg, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{seg.name}</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold">Rev: {seg.revenue} &bull; AOV: {seg.aov}</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden flex">
                  <div 
                    className="bg-cyan-500 h-full rounded-l-full"
                    style={{ width: `${seg.share}%` }}
                    title={`Population Share: ${seg.share}%`}
                  />
                  <div 
                    className="bg-emerald-500 h-full rounded-r-full opacity-80"
                    style={{ width: `${parseFloat(seg.revenue)}%` }}
                    title={`Revenue Share: ${seg.revenue}`}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>Audience Share: {seg.share}%</span>
                  <span>90-Day Retention Probability: {seg.retention}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 text-center">
            <span className="text-[10px] font-mono text-slate-400 uppercase block">Cross-Sell Basket Lift</span>
            <span className="text-lg font-mono font-bold text-emerald-600 dark:text-emerald-400">+19.4%</span>
            <span className="text-[10px] text-slate-500 block mt-0.5">Via Apriori association rules</span>
          </div>
          <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 text-center">
            <span className="text-[10px] font-mono text-slate-400 uppercase block">Dormant Win-Back</span>
            <span className="text-lg font-mono font-bold text-cyan-600 dark:text-cyan-400">12.8%</span>
            <span className="text-[10px] text-slate-500 block mt-0.5">High-affinity discount triggers</span>
          </div>
          <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 text-center">
            <span className="text-[10px] font-mono text-slate-400 uppercase block">CLV Accuracy</span>
            <span className="text-lg font-mono font-bold text-purple-600 dark:text-purple-400">0.89 R²</span>
            <span className="text-[10px] text-slate-500 block mt-0.5">BG/NBD & Gamma-Gamma model</span>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // 11. E-COMMERCE REVENUE ANALYTICS (CASE STUDY 3)
  // -------------------------------------------------------------
  if (chartType === 'ecommerce_revenue') {
    const regionalData = [
      { region: 'Sao Paulo / Southeast Hub', share: 44.2, revenue: '$4.21M', avgDeliveryDays: 4.2, returnRate: '2.8%' },
      { region: 'Rio de Janeiro / Coastal', share: 18.6, revenue: '$1.78M', avgDeliveryDays: 5.8, returnRate: '3.6%' },
      { region: 'Minas Gerais / Central', share: 14.2, revenue: '$1.35M', avgDeliveryDays: 6.4, returnRate: '3.1%' },
      { region: 'Southern States (PR, SC, RS)', share: 13.8, revenue: '$1.31M', avgDeliveryDays: 7.1, returnRate: '3.4%' },
      { region: 'Northeast / Remote North', share: 9.2, revenue: '$0.88M', avgDeliveryDays: 12.6, returnRate: '7.2%' }
    ];

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-cyan-500" />
              Regional Revenue Distribution & Transit SLA Impact
            </h4>
            <p className="text-xs text-slate-500 font-mono mt-0.5">Multi-Category E-Commerce Orders & Delivery Velocity Telemetry</p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 font-bold">
              Top 3 Hubs = 77% Revenue
            </span>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 space-y-4">
          <div className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 flex justify-between">
            <span>Gross Revenue Contribution by Regional Logistics Corridor</span>
            <span className="text-cyan-500">Fast Delivery Correlates to +28% Repeat Orders</span>
          </div>

          <div className="space-y-3">
            {regionalData.map((reg, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{reg.region}</span>
                  <span className="text-emerald-500 font-bold">{reg.revenue} ({reg.share}%)</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 h-full rounded-full"
                    style={{ width: `${reg.share * 2}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>Avg Transit Lead Time: {reg.avgDeliveryDays} days</span>
                  <span>Return / Disputed Rate: {reg.returnRate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 text-center">
            <span className="text-[10px] font-mono text-slate-400 uppercase block">Private-Label Opportunity</span>
            <span className="text-lg font-mono font-bold text-emerald-600 dark:text-emerald-400">32.4%</span>
            <span className="text-[10px] text-slate-500 block mt-0.5">Margin expansion in top categories</span>
          </div>
          <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 text-center">
            <span className="text-[10px] font-mono text-slate-400 uppercase block">Cart Abandonment Mitigation</span>
            <span className="text-lg font-mono font-bold text-cyan-600 dark:text-cyan-400">+14.6%</span>
            <span className="text-[10px] text-slate-500 block mt-0.5">Dynamic free-shipping thresholds</span>
          </div>
          <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 text-center">
            <span className="text-[10px] font-mono text-slate-400 uppercase block">Repeat Purchase Rate</span>
            <span className="text-lg font-mono font-bold text-indigo-600 dark:text-indigo-400">41.8%</span>
            <span className="text-[10px] text-slate-500 block mt-0.5">Automated re-order recommendations</span>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // 12. NEW WHEELS AUTOMOTIVE SALES ANALYTICS (CASE STUDY 4)
  // -------------------------------------------------------------
  if (chartType === 'new_wheels_sql') {
    const quarterData = [
      { quarter: 'Q1 Launch', orders: 1240, avgDiscount: '4.2%', rating: 4.82, onTimePct: '96.2%' },
      { quarter: 'Q2 Growth', orders: 2180, avgDiscount: '6.5%', rating: 4.64, onTimePct: '92.4%' },
      { quarter: 'Q3 Peak', orders: 3450, avgDiscount: '8.8%', rating: 4.28, onTimePct: '84.8%' },
      { quarter: 'Q4 Supply Crunch', orders: 2890, avgDiscount: '12.4%', rating: 3.91, onTimePct: '76.1%' }
    ];

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-cyan-500" />
              Automotive Quarterly Order Growth vs. Fulfillment Delivery SLA
            </h4>
            <p className="text-xs text-slate-500 font-mono mt-0.5">Advanced MySQL Analytical Windows, CTEs & Lead-Time Analysis</p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 font-bold">
              Bottleneck Isolated: Q4 Delivery Delays
            </span>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 space-y-4">
          <div className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 flex justify-between">
            <span>Quarterly Order Volume & On-Time Delivery Rate</span>
            <span className="text-cyan-500">Customer CSAT Drops 0.4 pts per 2-day transit delay</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            {quarterData.map((q, idx) => (
              <div key={idx} className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 space-y-2 text-center">
                <div className="text-xs font-bold font-mono text-cyan-500">{q.quarter}</div>
                <div className="text-xl font-extrabold font-mono text-slate-900 dark:text-white">{q.orders}</div>
                <div className="text-[10px] text-slate-400 font-mono">Completed Units</div>
                <div className="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-1 text-[11px] font-mono">
                  <div className="flex justify-between text-slate-600 dark:text-slate-300">
                    <span>On-Time:</span>
                    <span className="font-bold text-emerald-500">{q.onTimePct}</span>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-300">
                    <span>CSAT:</span>
                    <span className="font-bold text-cyan-400">{q.rating} / 5.0</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 text-center">
            <span className="text-[10px] font-mono text-slate-400 uppercase block">SQL Query Optimization</span>
            <span className="text-lg font-mono font-bold text-emerald-600 dark:text-emerald-400">&gt;10x Faster</span>
            <span className="text-[10px] text-slate-500 block mt-0.5">Composite indexing & indexed joins</span>
          </div>
          <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 text-center">
            <span className="text-[10px] font-mono text-slate-400 uppercase block">Fulfillment SLA Rebound</span>
            <span className="text-lg font-mono font-bold text-cyan-600 dark:text-cyan-400">95.8%</span>
            <span className="text-[10px] text-slate-500 block mt-0.5">Dynamic regional dispatch buffer</span>
          </div>
          <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 text-center">
            <span className="text-[10px] font-mono text-slate-400 uppercase block">Discount Leakage Saved</span>
            <span className="text-lg font-mono font-bold text-indigo-600 dark:text-indigo-400">$340K</span>
            <span className="text-[10px] text-slate-500 block mt-0.5">Curtailed unconstrained discounting</span>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // 13. INSURANCE CLAIMS & RISK ANALYTICS (CASE STUDY 5)
  // -------------------------------------------------------------
  if (chartType === 'insurance_claims') {
    const cohorts = [
      { cohort: 'High-Value Commercial Heavy Freight', lossRatio: 84.2, claimFreq: '14.8%', avgClaim: '$18,400' },
      { cohort: 'Urban Fleet Delivery Vehicles', lossRatio: 72.5, claimFreq: '11.2%', avgClaim: '$8,200' },
      { cohort: 'Regional Logistics Long-Haul', lossRatio: 64.1, claimFreq: '8.4%', avgClaim: '$12,600' },
      { cohort: 'Suburban Light Commercial Vans', lossRatio: 51.8, claimFreq: '5.6%', avgClaim: '$4,500' },
      { cohort: 'Corporate Fleet Preferred Risk', lossRatio: 42.6, claimFreq: '3.1%', avgClaim: '$3,800' }
    ];

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Activity className="w-4 h-4 text-cyan-500" />
              Insurance Loss Ratio & Claim Severity Distribution
            </h4>
            <p className="text-xs text-slate-500 font-mono mt-0.5">Tableau Executive Dashboard LOD Formulas & Policy Underwriting Cohorts</p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-bold">
              Target Loss Ratio: &lt;65%
            </span>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 space-y-4">
          <div className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 flex justify-between">
            <span>Actuarial Loss Ratio (%) by Vehicle Fleet Category</span>
            <span className="text-cyan-500">Critical Underwriting Threshold = 70%</span>
          </div>

          <div className="space-y-3">
            {cohorts.map((c, idx) => {
              const isSevere = c.lossRatio > 70;
              return (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{c.cohort}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] ${isSevere ? 'bg-rose-500/10 text-rose-500 font-bold' : 'bg-emerald-500/10 text-emerald-500'}`}>
                      Loss Ratio: {c.lossRatio}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        isSevere ? 'bg-gradient-to-r from-orange-500 to-rose-500' : 'bg-gradient-to-r from-emerald-400 to-cyan-500'
                      }`}
                      style={{ width: `${c.lossRatio}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                    <span>Claim Frequency: {c.claimFreq}</span>
                    <span>Avg Settlement Severity: {c.avgClaim}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 text-center">
            <span className="text-[10px] font-mono text-slate-400 uppercase block">Underwriting Margin Gain</span>
            <span className="text-lg font-mono font-bold text-emerald-600 dark:text-emerald-400">+8.4%</span>
            <span className="text-[10px] text-slate-500 block mt-0.5">High-risk cohort premium rebalancing</span>
          </div>
          <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 text-center">
            <span className="text-[10px] font-mono text-slate-400 uppercase block">Settlement Cycle Time</span>
            <span className="text-lg font-mono font-bold text-cyan-600 dark:text-cyan-400">-35%</span>
            <span className="text-[10px] text-slate-500 block mt-0.5">Automated low-severity triage</span>
          </div>
          <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 text-center">
            <span className="text-[10px] font-mono text-slate-400 uppercase block">Fraud Anomaly Flag</span>
            <span className="text-lg font-mono font-bold text-rose-500">93.2%</span>
            <span className="text-[10px] text-slate-500 block mt-0.5">Precision on inflated claims</span>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // 14. 12-MONTH DEMAND FORECASTING (CASE STUDY 6)
  // -------------------------------------------------------------
  if (chartType === 'demand_forecasting_chart') {
    const horizon = [
      { month: 'M+1', actual: 4200, arima: 4180, holt: 4210, lower: 3950, upper: 4410 },
      { month: 'M+2', actual: 4450, arima: 4410, holt: 4430, lower: 4180, upper: 4640 },
      { month: 'M+3', actual: 4800, arima: 4760, holt: 4790, lower: 4510, upper: 5010 },
      { month: 'M+4', actual: 5120, arima: 5080, holt: 5110, lower: 4820, upper: 5340 },
      { month: 'M+5', actual: 4900, arima: 4850, holt: 4880, lower: 4590, upper: 5110 },
      { month: 'M+6', actual: 5300, arima: 5240, holt: 5280, lower: 4970, upper: 5510 },
      { month: 'M+7', actual: 5650, arima: 5580, holt: 5610, lower: 5300, upper: 5860 },
      { month: 'M+8', actual: 5900, arima: 5820, holt: 5860, lower: 5530, upper: 6110 },
      { month: 'M+9', actual: 5400, arima: 5320, holt: 5360, lower: 5040, upper: 5600 },
      { month: 'M+10', actual: 5150, arima: 5090, holt: 5120, lower: 4810, upper: 5370 },
      { month: 'M+11', actual: 5800, arima: 5740, holt: 5770, lower: 5450, upper: 6030 },
      { month: 'M+12', actual: 6400, arima: 6310, holt: 6370, lower: 6020, upper: 6620 }
    ];

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-cyan-500" />
              12-Month Demand Forecast with ARIMA / SARIMA Confidence Bands
            </h4>
            <p className="text-xs text-slate-500 font-mono mt-0.5">3 Years Transaction History & Hierarchical Reconciliation Benchmarking</p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-bold">
              Selected: SARIMA(1,1,1)(1,1,0)₁₂ &bull; MAPE: 4.8%
            </span>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60">
          <div className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-3 flex justify-between">
            <span>Projected SKU Volume vs Actual Horizon (±95% CI)</span>
            <span className="text-cyan-500">Seasonal Peak in Month 12</span>
          </div>

          <div className="h-44 flex items-end justify-between gap-1.5 pt-6 pb-2 px-2 border-b border-l border-slate-300 dark:border-slate-700">
            {horizon.map((h, i) => {
              const heightPct = (h.actual / 7000) * 100;
              return (
                <div key={i} className="flex-1 flex flex-col items-center group">
                  <span className="text-[9px] font-mono text-slate-400 opacity-0 group-hover:opacity-100 transition mb-1">
                    {h.actual}
                  </span>
                  <div 
                    className="w-full max-w-[28px] rounded-t bg-gradient-to-t from-cyan-600 to-emerald-400 group-hover:from-cyan-500 group-hover:to-teal-300 transition shadow-sm"
                    style={{ height: `${heightPct}%` }}
                    title={`${h.month}: Forecast ${h.arima} (Bounds: ${h.lower}-${h.upper})`}
                  />
                  <span className="text-[10px] font-mono text-slate-500 mt-2">
                    {h.month}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 mt-2 px-2">
            <span>Baseline M+1</span>
            <span>Forecast MAPE: 4.8% (ARIMA) vs 6.2% (Holt-Winters)</span>
            <span>Holiday Peak M+12</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 text-center">
            <span className="text-[10px] font-mono text-slate-400 uppercase block">Forecast Error (MAPE)</span>
            <span className="text-lg font-mono font-bold text-emerald-600 dark:text-emerald-400">4.8%</span>
            <span className="text-[10px] text-slate-500 block mt-0.5">Top-quartile retail benchmark</span>
          </div>
          <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 text-center">
            <span className="text-[10px] font-mono text-slate-400 uppercase block">Safety Stock Reduction</span>
            <span className="text-lg font-mono font-bold text-cyan-600 dark:text-cyan-400">18.2%</span>
            <span className="text-[10px] text-slate-500 block mt-0.5">Tighter forecast error distribution</span>
          </div>
          <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 text-center">
            <span className="text-[10px] font-mono text-slate-400 uppercase block">Out-of-Stock Incidents</span>
            <span className="text-lg font-mono font-bold text-indigo-600 dark:text-indigo-400">-31.5%</span>
            <span className="text-[10px] text-slate-500 block mt-0.5">Proactive replenishment lead-time</span>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // 15. TELECOM CUSTOMER CHURN (CASE STUDY 7)
  // -------------------------------------------------------------
  if (chartType === 'telecom_churn') {
    const contractTypes = [
      { type: 'Month-to-Month Contracts', customers: 3875, churnRate: 42.7, avgBill: '$73.50', risk: 'High Churn Hazard' },
      { type: 'One-Year Contract Terms', customers: 1473, churnRate: 11.3, avgBill: '$65.00', risk: 'Moderate Retention' },
      { type: 'Two-Year Long-Term Contract', customers: 1695, churnRate: 2.8, avgBill: '$60.80', risk: 'Highly Stable (Safe)' }
    ];

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Activity className="w-4 h-4 text-cyan-500" />
              Telecom Churn Propensity by Contract Type & Billing Level
            </h4>
            <p className="text-xs text-slate-500 font-mono mt-0.5">7,043 Customer Records & Behavioral Tenure/Service Feature Modeling</p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 font-bold">
              Random Forest AUC: 0.842
            </span>
          </div>
        </div>

        <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 space-y-4">
          <div className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 flex justify-between">
            <span>Churn Rate (%) by Customer Contract Structure</span>
            <span className="text-cyan-500">Month-to-Month churn is 15x higher than 2-Year</span>
          </div>

          <div className="space-y-3">
            {contractTypes.map((c, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{c.type}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] ${
                    c.churnRate > 30 ? 'bg-rose-500/10 text-rose-500 font-bold' : c.churnRate > 10 ? 'bg-amber-500/10 text-amber-500' : 'bg-emerald-500/10 text-emerald-500'
                  }`}>
                    Churn: {c.churnRate}% &bull; {c.risk}
                  </span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${
                      c.churnRate > 30 ? 'bg-gradient-to-r from-orange-500 to-rose-500' : c.churnRate > 10 ? 'bg-gradient-to-r from-amber-400 to-amber-600' : 'bg-gradient-to-r from-emerald-400 to-cyan-500'
                    }`}
                    style={{ width: `${c.churnRate * 2}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>Customer Base: {c.customers.toLocaleString()} subscribers</span>
                  <span>Average Monthly Charges: {c.avgBill}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 text-center">
            <span className="text-[10px] font-mono text-slate-400 uppercase block">Churn Recall</span>
            <span className="text-lg font-mono font-bold text-emerald-600 dark:text-emerald-400">81.4%</span>
            <span className="text-[10px] text-slate-500 block mt-0.5">Captures high-risk subscribers</span>
          </div>
          <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 text-center">
            <span className="text-[10px] font-mono text-slate-400 uppercase block">Retention Campaign ROI</span>
            <span className="text-lg font-mono font-bold text-cyan-600 dark:text-cyan-400">3.8x</span>
            <span className="text-[10px] text-slate-500 block mt-0.5">Targeted contract migration discount</span>
          </div>
          <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 text-center">
            <span className="text-[10px] font-mono text-slate-400 uppercase block">Top Churn Predictor</span>
            <span className="text-lg font-mono font-bold text-purple-600 dark:text-purple-400">Tenure &lt; 6mo</span>
            <span className="text-[10px] text-slate-500 block mt-0.5">Followed by Fiber optic tech support</span>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

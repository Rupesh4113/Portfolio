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

  return null;
};

import { Project } from '../types';

export const interactiveLiveProjects: Project[] = [
  // =========================================================================
  // 1. STATEFUL MULTI-STEP AI RESEARCH AGENT WITH LANGGRAPH
  // =========================================================================
  {
    id: 'live-agent-langgraph',
    title: 'Stateful Multi-Step AI Research Agent with LangGraph',
    slug: 'ai-agent-with-langgraph',
    category: 'GenAI & Autonomous Agents',
    domain: 'Generative AI & Agentic Workflows',
    project_type: 'professional',
    status: 'published',
    is_featured: true,
    is_ai_demo: true,
    display_order: 1,
    selected_model: 'LangGraph Multi-Agent Graph + GPT-4o',
    data_scope: 'Real-time web research, multi-hop queries, and synthesized documentation',
    short_summary: 'Production-ready Generative AI research agent built with LangGraph and Streamlit executing stateful cyclic workflows: query decomposition, dynamic multi-hop evidence retrieval, synthesis, rigorous fact-checking, self-correction, and human-in-the-loop checkpoints.',
    business_problem: 'Conventional single-pass LLM prompts suffer from context drift, state loss, ungrounded hallucinations, and an inability to iteratively self-correct during complex multi-step enterprise research tasks.',
    business_objective: 'Architect a deterministic state-graph research agent using LangGraph to decompose complex research questions, query external tools, verify factual consistency with self-reflection loops, and persist checkpointed state.',
    dataset_description: 'Dynamic live multi-source web corpora, technical papers, and benchmark fact-checking query datasets with verified ground-truth citations.',
    dataset_size: 'Dynamic tool-retrieved web indices & multi-agent memory checkpoints',
    data_sources: ['Tavily Web Search API', 'ArXiv Academic APIs', 'Wikipedia Knowledge Graph', 'Vectorized Local Document Repositories'],
    data_preparation: 'Extracted semantic query intents, performed query expansion, eliminated redundant search results, and partitioned contextual snippets into token-budgeted memory state.',
    methodology_steps: [
      'Query Decomposition & Intent Classification',
      'Dynamic Graph Routing & Tool Invocation',
      'Multi-Hop Search & Evidence Gathering',
      'Evidence Synthesis & Draft Generation',
      'Cyclic Self-Correction & Hallucination Guardrails',
      'Human-in-the-Loop Approval Checkpoint'
    ],
    eda_insights: [
      'Single-pass LLM responses exhibited 34.2% factual inaccuracies on complex multi-hop queries.',
      'LangGraph cyclic reflection reduced unverified claims to < 4.5% via systematic source citation validation.',
      'State checkpointing enabled resilient pause-and-resume workflows with complete auditability.'
    ],
    feature_engineering: [
      'Typed Graph State Schema with message history and verification scores',
      'Relevance scoring and multi-document deduplication filter',
      'Fact-checking alignment index comparing synthesized claims against raw search snippets',
      'Confidence-weighted routing transitions between graph nodes'
    ],
    model_development: 'Engineered a cyclical LangGraph state machine featuring specialized worker nodes (Planner, Researcher, Synthesizer, Fact-Checker, and Supervisor). Implemented conditional edges and persistent SQLite/Postgres checkpointing.',
    algorithms_used: ['LangGraph State Machine', 'Cyclic Self-Correction Loops', 'Tool-Augmented Generation (TAG)', 'RAG Vector Similarity', 'Multi-Agent Orchestration'],
    evaluation_metrics: {
      'Fact-Checking Accuracy': '95.5%',
      'Hallucination Reduction': '-87.5%',
      'Citation Precision': '98.2%',
      'End-to-End Latency': '< 6.8s'
    },
    primary_metric_label: 'Hallucination Reduction',
    primary_metric_value: '-87.5%',
    results_summary: 'Engineered an autonomous research agent delivering verified analytical briefings with 95.5% factual accuracy and an 87.5% reduction in hallucinated claims compared to standard prompting.',
    business_impact: [
      'Automated in-depth market intelligence and technical literature reviews saving 8+ analyst hours per report.',
      'Ensured enterprise auditability through verifiable source citations for every synthesized assertion.',
      'Eliminated context loss in multi-step analytical research workflows.'
    ],
    key_findings: [
      'Cyclic graph architectures with self-correction dramatically outperform linear chains on open-domain research.',
      'Separating the synthesizer role from the fact-checker role eliminates confirmation bias in agentic outputs.'
    ],
    business_recommendations: [
      'Deploy stateful LangGraph agents across corporate competitive intelligence and patent analysis teams.',
      'Enforce human-in-the-loop review nodes before publishing external-facing executive dossiers.'
    ],
    architecture_diagram_type: 'custom',
    tech_stack: ['Python', 'LangGraph', 'LangChain', 'OpenAI GPT-4o', 'Streamlit', 'Tavily Search API', 'FAISS', 'Pydantic', 'Docker'],
    deployment_details: 'Containerized Streamlit web application deployed with streaming response visualization and real-time state-graph rendering.',
    monitoring_strategy: 'Real-time tracing via LangSmith tracking token consumption, latency per node, tool failure rates, and citation verification metrics.',
    key_learnings: [
      'Explicit typed schemas and state immutability in LangGraph prevent elusive runtime agent bugs.',
      'Dynamic query rewriting is the single most impactful lever for search quality.'
    ],
    future_improvements: [
      'Integrate multi-modal chart generation and automated PDF report compilation.',
      'Incorporate local open-source LLM fallbacks (Llama 3, Mistral) via Ollama.'
    ],
    github_url: 'https://github.com/Rupesh4113/AI-agent-with-Langgraph',
    demo_url: 'https://ai-agent-with-langgraph.streamlit.app/',
    thumbnail_url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    gallery_images: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80'
    ]
  },

  // =========================================================================
  // 2. RAG FROM SCRATCH — PRODUCTION RETRIEVAL-AUGMENTED GENERATION
  // =========================================================================
  {
    id: 'live-rag-from-scratch',
    title: 'RAG From Scratch — Production Retrieval-Augmented Generation',
    slug: 'rag-from-scratch',
    category: 'GenAI & LLM Architecture',
    domain: 'Enterprise AI & Information Retrieval',
    project_type: 'professional',
    status: 'published',
    is_featured: true,
    is_ai_demo: true,
    display_order: 2,
    selected_model: 'Dense Semantic Vector Search + Cross-Encoder Re-Ranking',
    data_scope: 'Unstructured enterprise documentation, PDFs, and technical manuals',
    short_summary: 'First-principles, production-grade Retrieval-Augmented Generation (RAG) platform and interactive laboratory on Streamlit, featuring advanced chunking strategies, dense FAISS indexing, cross-encoder re-ranking, and grounded hallucination mitigation.',
    business_problem: 'Large Language Models suffer from training data cutoffs and severe hallucinations when queried on private enterprise documents. Naive vector search frequently retrieves irrelevant context snippets, resulting in degraded generation quality.',
    business_objective: 'Build an end-to-end RAG system from scratch without black-box abstractions, demonstrating chunking optimizations, vector similarity search, reciprocal rank fusion, re-ranking, and context-grounded response generation.',
    dataset_description: 'Corpus of heterogeneous enterprise PDF documents, SEC financial filings, and technical architecture manuals.',
    dataset_size: 'Multi-document enterprise PDF repository (1,000+ indexed chunk vectors)',
    data_sources: ['Corporate policy manuals', 'Financial annual filings', 'Product API specifications', 'Synthetic RAG evaluation benchmark'],
    data_preparation: 'Extracted text with PyPDF2, designed recursive semantic character chunkers with sliding overlaps, generated dense embeddings, and built high-performance FAISS vector indices.',
    methodology_steps: [
      'Document Parsing & Multi-Modal Text Extraction',
      'Semantic & Recursive Chunking Comparison',
      'Dense Vector Embedding & Index Construction',
      'Hybrid Retrieval & Cross-Encoder Re-Ranking',
      'Context Synthesis & Grounded Prompt Assembly',
      'RAG Triad Evaluation (Faithfulness, Relevance, Groundedness)'
    ],
    eda_insights: [
      'Optimal chunk size was empirically determined at 512 tokens with 10% overlap to balance context completeness and embedding specificity.',
      'Cross-encoder re-ranking improved top-3 retrieval precision from 78.4% to 94.2% on domain-specific queries.',
      'Hybrid dense-sparse retrieval eliminated failures on keyword-exact technical acronyms.'
    ],
    feature_engineering: [
      'Recursive character-level text splitting with sentence boundary preservation',
      'Dense L2-normalized vector representations (text-embedding-3-small)',
      'Cross-encoder similarity scoring between query and retrieved chunk pairs',
      'Metadata filtering by document origin and page location'
    ],
    model_development: 'Implemented the complete RAG architecture from first principles using NumPy, FAISS, and LangChain primitives. Included an interactive tuning laboratory to adjust top-k, temperature, chunk size, and re-ranking thresholds.',
    algorithms_used: ['FAISS Vector Index (IndexFlatIP)', 'Cosine & Inner Product Similarity', 'Cross-Encoder Re-Ranking', 'Context-Grounded Few-Shot Prompting'],
    evaluation_metrics: {
      'Retrieval Precision@3': '94.2%',
      'Answer Faithfulness': '96.8%',
      'Hallucination Rate': '< 2.1%',
      'Query Response Time': '1.1s'
    },
    primary_metric_label: 'Retrieval Precision@3',
    primary_metric_value: '94.2%',
    results_summary: 'Developed a high-precision enterprise RAG engine with 94.2% retrieval precision and sub-2.1% hallucination rates, validated across multi-page technical documents.',
    business_impact: [
      'Accelerated internal document discovery and policy compliance lookups by 70%.',
      'Provided transparent citation footers allowing auditors to verify every answer against source pages.',
      'Demonstrated first-principles AI engineering architecture for enterprise knowledge retrieval.'
    ],
    key_findings: [
      'Re-ranking retrieved chunks with a cross-encoder is the single most cost-effective way to boost RAG generation quality.',
      'Pure vector search fails on rare technical IDs, highlighting the need for hybrid retrieval.'
    ],
    business_recommendations: [
      'Standardize on hybrid retrieval with cross-encoder re-ranking for all enterprise documentation portals.',
      'Track Ragas metrics (Faithfulness, Answer Relevance) continuously in CI/CD pipelines.'
    ],
    architecture_diagram_type: 'nlp_pipeline',
    tech_stack: ['Python', 'Streamlit', 'FAISS', 'OpenAI Embeddings', 'LangChain', 'PyPDF2', 'NumPy', 'Scikit-Learn'],
    deployment_details: 'Cloud-hosted Streamlit application featuring live PDF upload, interactive chunk visualization, and side-by-side RAG comparison.',
    monitoring_strategy: 'Automated logging of retrieval hit rates, semantic distance distributions, and user thumbs-up/thumbs-down feedback.',
    key_learnings: [
      'Chunking strategy directly dictates downstream generation fidelity far more than model size.',
      'Providing verifiable page-number citations is critical for user trust in enterprise GenAI.'
    ],
    future_improvements: [
      'Implement GraphRAG using knowledge graphs for complex cross-document entity relationship queries.',
      'Add table and chart extraction using vision-language models.'
    ],
    github_url: 'https://github.com/Rupesh4113/RAG-From-Scratch',
    demo_url: 'https://rag-from-scratch.streamlit.app/',
    thumbnail_url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    gallery_images: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80'
    ]
  },

  // =========================================================================
  // 3. AI SMART REMOTE — UNIVERSAL MULTIMODAL CONTROLLER
  // =========================================================================
  {
    id: 'live-ai-tv-remote',
    title: 'AI Smart Remote — Universal AI Multimodal Controller',
    slug: 'ai-tv-remote',
    category: 'GenAI & Edge AI',
    domain: 'Smart Devices & Multimodal Interaction',
    project_type: 'demonstration',
    status: 'published',
    is_featured: true,
    is_ai_demo: true,
    display_order: 3,
    selected_model: 'Multimodal Natural Language Intent Classifier & Command Router',
    data_scope: 'Real-time voice telemetry, smart TV IR/IP protocol codes, and multimodal input streams',
    short_summary: 'Production-grade universal smart remote platform powered by artificial intelligence, enabling voice-driven commands, visual media search, and device control across smart TVs, set-top boxes, and streaming players over Wi-Fi and Bluetooth.',
    business_problem: 'Fragmented home entertainment ecosystems require multiple proprietary physical remotes or siloed vendor apps, creating friction, inaccessible interfaces for seniors, and tedious text navigation.',
    business_objective: 'Build an AI-powered universal remote control accessible from any web or mobile device that translates free-form natural language and voice input into structured smart TV command packets.',
    dataset_description: 'Multilingual smart TV command protocols, manufacturer IR/IP API mappings (Samsung Tizen, LG webOS, Android TV, Roku), and conversational query benchmarks.',
    dataset_size: 'Universal device command schemas across 15+ entertainment platforms',
    data_sources: ['Smart TV manufacturer IP control protocols', 'LIRC infrared command databases', 'Natural speech audio input streams'],
    data_preparation: 'Mapped heterogeneous manufacturer protocols to a unified REST/WebSocket command schema; normalized voice transcriptions into validated control actions.',
    methodology_steps: [
      'Audio & Natural Language Input Capture',
      'Intent Parsing & Named Entity Recognition (NER)',
      'Device Discovery & Protocol Handshake',
      'Structured Packet Serialization',
      'Low-Latency Command Execution'
    ],
    eda_insights: [
      'Natural language voice search reduced media discovery time by 65% compared to on-screen D-pad navigation.',
      'Low-latency WebSocket connections achieved sub-120ms command execution matching physical IR latency.'
    ],
    feature_engineering: [
      'Voice intent classification mapping queries like "turn volume down a bit" to relative decrement packets',
      'Entity extraction for channel names, streaming apps, and media titles',
      'Contextual device state tracking (power state, current app, volume level)'
    ],
    model_development: 'Built an intent-routing layer combining lightweight NLP models with LLM fallbacks for complex contextual multi-step commands ("find comedy movies on Netflix and set sleep timer to 30 mins").',
    algorithms_used: ['Natural Language Intent Classification', 'Zero-Shot Entity Extraction', 'WebSocket Event Streaming', 'Protocol Serialization'],
    evaluation_metrics: {
      'Voice Intent Accuracy': '98.2%',
      'Command Dispatch Latency': '< 110ms',
      'Device Platform Compatibility': '15+ Brands',
      'User Satisfaction (CSAT)': '4.8/5.0'
    },
    primary_metric_label: 'Voice Intent Accuracy',
    primary_metric_value: '98.2%',
    results_summary: 'Engineered an accessible, high-performance universal AI remote control achieving 98.2% command accuracy and sub-110ms dispatch latency across modern smart TV ecosystems.',
    business_impact: [
      'Unified home entertainment control into a single responsive web interface on phone, tablet, and PC.',
      'Dramatically enhanced accessibility for visually and physically impaired users through conversational voice commands.',
      'Demonstrated seamless integration of Generative AI with real-world IoT device control.'
    ],
    key_findings: [
      'Hybrid intent parsing (fast regex/lookup for common keys + LLM for complex queries) achieves optimal speed and flexibility.',
      'WebSocket bi-directional communication is essential for maintaining responsive device status synchronization.'
    ],
    business_recommendations: [
      'Package as an edge IoT gateway for smart home automation hubs and hospitality entertainment systems.'
    ],
    architecture_diagram_type: 'iot_sensor_pipeline',
    tech_stack: ['Python', 'Streamlit', 'FastAPI', 'WebSockets', 'OpenAI Vision/NLP', 'SpeechRecognition', 'BLE / IR Protocols'],
    deployment_details: 'Cloud-hosted Streamlit frontend communicating with local network device gateways via secure WebSockets.',
    monitoring_strategy: 'Real-time telemetry tracking command latency, network packet dropouts, and intent classification confidence scores.',
    key_learnings: [
      'Edge latency is paramount for human-in-the-loop remote control; any delay over 250ms degrades user experience.',
      'Robust fallback handling is vital when target devices go into deep sleep modes.'
    ],
    future_improvements: [
      'Add on-device camera gesture control using MediaPipe for touchless volume and playback gestures.'
    ],
    github_url: 'https://github.com/Rupesh4113/Tv-remote',
    demo_url: 'https://tv-remote.streamlit.app/',
    thumbnail_url: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80',
    gallery_images: [
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=1200&q=80'
    ]
  },

  // =========================================================================
  // 4. VIDEOGEN LUCY — OPEN-SOURCE AI LONG-FORM VIDEO GENERATION
  // =========================================================================
  {
    id: 'live-videogen-lucy',
    title: 'VideoGen Lucy — Open-Source AI Long-Form Video Platform',
    slug: 'videogen-lucy',
    category: 'GenAI & Creative Media',
    domain: 'Multimodal AI & Generative Video',
    project_type: 'professional',
    status: 'published',
    is_featured: true,
    is_ai_demo: true,
    display_order: 4,
    selected_model: 'Wan2.1 T2V/I2V Engine + Multi-Stage Shot Pipeline',
    data_scope: 'Multilingual narrative prompts (English & Hindi), scene graphs, and audio streams',
    short_summary: 'Cloud-deployable AI long-form video generation platform converting natural-language prompts in English and Hindi into complete 5–30 minute animated and human-like videos, with scene continuity, multilingual voice synthesis, dynamic background music ducking, and 1080p FFmpeg assembly.',
    business_problem: 'Current text-to-video diffusion models can only produce short 4-second isolated clips without narrative consistency, character persistence, or synchronized voiceovers, rendering commercial long-form video production prohibitively manual.',
    business_objective: 'Orchestrate an intelligent multi-stage production pipeline breaking long narratives into coherent scenes and shots, enforcing visual consistency, synthesizing natural voices, and assembling final 1080p master videos.',
    dataset_description: 'Story scripts, storyboard prompts, shot continuity embeddings, and multilingual audio speech training data in English and Indian Hindi.',
    dataset_size: '5 to 30-minute scalable video generation architectures (30 to 180 coordinated shots)',
    data_sources: ['OpenAI / Claude narrative script generators', 'Wan2.1 video generation checkpoints', 'Edge TTS neural voice libraries', 'Royalty-free cinematic music stems'],
    data_preparation: 'Parsed screenplays into scene graphs, computed shot duration constraints, synthesized frame-level audio waveforms, and managed GPU memory offloading.',
    methodology_steps: [
      'Screenplay Decomposition & Shot List Planning',
      'Character & Visual Style Consistency Conditioning',
      'Text-to-Video & Image-to-Video Inference (Wan2.1)',
      'Neural Multilingual Voice Synthesis (Edge TTS)',
      'Audio Ducking, Subtitle Alignment & FFmpeg 1080p Stitching'
    ],
    eda_insights: [
      'Breaking videos into 4–10 second shots prevented diffusion degeneration and visual artifacts.',
      'Audio ducking (-14dB under speech) boosted viewer comprehension by 40% in automated evaluation.',
      'Seed locking across keyframe latents maintained character facial identity across scene cuts.'
    ],
    feature_engineering: [
      'Prompt templating with negative prompt conditioning for photorealism',
      'Word-level SRT timestamp computation via Whisper alignment',
      'Dynamic audio gain filters ensuring balanced dialog and music levels'
    ],
    model_development: 'Engineered an asynchronous task queue architecture uniting FastAPI, Celery/Redis, and Streamlit. Deployed Wan2.1 T2V/I2V models with fp8 precision and GPU offloading for efficient rendering.',
    algorithms_used: ['Diffusion Video Generation (Wan2.1)', 'Neural Text-to-Speech (Edge TTS)', 'Audio Waveform Mixing & Ducking', 'FFmpeg Automated Concat Pipeline'],
    evaluation_metrics: {
      'Master Output Resolution': '1080p Full HD',
      'Long-Form Scalability': 'Up to 30 mins',
      'Multilingual Languages': 'English + Hindi',
      'Audio-Visual Sync Accuracy': '99.4%'
    },
    primary_metric_label: 'Video Output Resolution',
    primary_metric_value: '1080p Master',
    results_summary: 'Architected an end-to-end autonomous video production pipeline generating coherent 5–30 minute narrative videos with synchronized multilingual voiceovers and professional 1080p visual assembly.',
    business_impact: [
      'Reduced video production costs from thousands of dollars per minute to automated GPU inference time.',
      'Enabled rapid multilingual video marketing and educational content creation in English and Hindi.',
      'Demonstrated high-complexity system engineering uniting modern GenAI video models with multimedia rendering pipelines.'
    ],
    key_findings: [
      'Long-form video generation requires modular hierarchical orchestration rather than attempting single-pass generation.',
      'Professional audio engineering (music ducking and subtitle timing) is just as critical as visual quality for viewer retention.'
    ],
    business_recommendations: [
      'Deploy for automated corporate onboarding videos, product explainers, and educational curriculum video synthesis.'
    ],
    architecture_diagram_type: 'deep_learning_pipeline',
    tech_stack: ['Python', 'FastAPI', 'Streamlit', 'Wan2.1 T2V/I2V', 'FFmpeg', 'Edge TTS', 'Whisper', 'Diffusers', 'PyTorch'],
    deployment_details: 'GPU-accelerated cloud deployment with asynchronous background rendering and interactive Streamlit job monitor.',
    monitoring_strategy: 'Automated frame verification checking for black-frame anomalies, audio clipping, and GPU memory saturation.',
    key_learnings: [
      'Managing VRAM through sequential shot processing is essential when rendering high-resolution video pipelines.',
      'Multilingual neural voices dramatically broaden global user engagement.'
    ],
    future_improvements: [
      'Incorporate lip-sync neural models (Wav2Lip) for exact character mouth movement matching spoken dialog.'
    ],
    github_url: 'https://github.com/Rupesh4113/videogen-lucy',
    demo_url: 'https://videolucy.streamlit.app/',
    thumbnail_url: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
    gallery_images: [
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80'
    ]
  },

  // =========================================================================
  // 5. RETAIL CATEGORY PERFORMANCE & INVENTORY INTELLIGENCE PLATFORM
  // =========================================================================
  {
    id: 'live-retail-category-manager',
    title: 'Retail Category Performance & Inventory Intelligence Platform',
    slug: 'retail-category-performance-manager',
    category: 'Retail & Inventory Intelligence',
    domain: 'Retail & Commercial Analytics',
    project_type: 'professional',
    status: 'published',
    is_featured: true,
    display_order: 5,
    selected_model: 'Dynamic Safety Stock & Stockout Risk Classifier',
    data_scope: 'SKU-level Point-of-Sale, inventory turnover, supplier lead times, and gross margin telemetry',
    short_summary: 'Enterprise retail intelligence platform unifying sales velocity, inventory health, demand forecasting, and stockout risk to transform fragmented POS and ERP category data into explainable, margin-optimizing commercial decisions.',
    business_problem: 'Retail category managers face fragmented data spread across disconnected ERPs and spreadsheets, resulting in slow decision-making, frequent stockouts on top-sellers, and costly margin clearance on slow-moving stock.',
    business_objective: 'Develop an interactive operational cockpit providing real-time visibility into category turnover velocity, stockout exposure, reorder point sizing, and GMROI (Gross Margin Return on Investment).',
    dataset_description: 'Granular retail transaction history spanning 50,000+ SKU transactions across multiple retail store formats and regional distribution hubs.',
    dataset_size: '50,000+ transactions across 12 product categories',
    data_sources: ['Retail POS transaction logs', 'ERP inventory balances', 'Vendor catalog lead times', 'Promotional markdown calendars'],
    data_preparation: 'Aggregated SKU sales into weekly demand velocity buckets, computed rolling volatility, cleaned barcode anomalies, and derived inventory turnover metrics.',
    methodology_steps: [
      'POS & Inventory Data Harmonization',
      'Category Sales Velocity & GMROI Segmentation',
      'Statistical Safety Stock & Reorder Point Calculation',
      'Stockout Risk Probability Classification',
      'Automated Replenishment Recommendation Generation'
    ],
    eda_insights: [
      'Top 15% of SKUs accounted for 68% of total gross profit, yet suffered from a 12.4% stockout rate due to rigid reorder heuristics.',
      'Over 22% of warehouse working capital was locked in slow-moving items with > 120 days of supply.'
    ],
    feature_engineering: [
      'Gross Margin Return on Investment (GMROI) ratio',
      'Weeks of Supply (WOS) metric and deviation from category benchmark',
      'Lead-time demand standard deviation for safety stock sizing',
      'Sales velocity acceleration rate'
    ],
    model_development: 'Built predictive classification and inventory sizing algorithms calculating dynamic buffer thresholds instead of flat heuristics, implemented inside a modular Python and DuckDB analytics engine.',
    algorithms_used: ['Dynamic Safety Stock Sizing', 'Stockout Risk Probability Modeling', 'ABC-XYZ Inventory Classification', 'GMROI Optimization'],
    evaluation_metrics: {
      'Inventory Turnover Lift': '+23.8%',
      'Stockout Reduction': '-45.0%',
      'Working Capital Freed': '$420,000',
      'Forecast Accuracy': '91.2%'
    },
    primary_metric_label: 'Inventory Turnover Lift',
    primary_metric_value: '+23.8%',
    results_summary: 'Delivered an enterprise-grade category management portal that boosted inventory turnover by 23.8% and reduced out-of-stock incidents by 45.0% across pilot retail categories.',
    business_impact: [
      'Freed over $420,000 in tied-up working capital by optimizing slow-moving buffer allocations.',
      'Provided category managers with daily actionable reorder recommendations with clear financial justification.',
      'Replaced static monthly spreadsheets with an interactive real-time performance cockpit.'
    ],
    key_findings: [
      'Dynamic lead-time buffer sizing prevents stockouts significantly better than flat 30-day inventory rules.',
      'Visualizing GMROI alongside sales velocity immediately exposes unprofitable high-volume products.'
    ],
    business_recommendations: [
      'Shift purchase orders from flat monthly batches to dynamic lead-time trigger thresholds.',
      'Implement proactive supplier alerts when vendor lead-time variability exceeds 3 business days.'
    ],
    architecture_diagram_type: 'supply_chain',
    tech_stack: ['Python', 'Streamlit', 'Pandas', 'Plotly', 'DuckDB', 'Scikit-Learn', 'NumPy'],
    deployment_details: 'Streamlit enterprise web application equipped with dynamic category filters, what-if reorder simulations, and CSV export capabilities.',
    monitoring_strategy: 'Automated tracking of stockout events, inventory turns, and category gross margin trajectory against quarterly targets.',
    key_learnings: [
      'Empowering business stakeholders with interactive simulation tools accelerates buy-in compared to static reports.',
      'Harmonizing data definitions between finance and logistics is critical for trustworthy retail analytics.'
    ],
    future_improvements: [
      'Incorporate weather forecasts and holiday promotional lift elasticities into predictive demand modules.'
    ],
    github_url: 'https://github.com/Rupesh4113/Retail-category-performance-manager',
    demo_url: 'https://retail-category-performance-manager.streamlit.app/',
    thumbnail_url: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=800&q=80',
    gallery_images: [
      'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80'
    ]
  },

  // =========================================================================
  // 6. RIDE-HAILING DEMAND & SURGE PRICING FORECASTING
  // =========================================================================
  {
    id: 'live-ride-hailing-surge',
    title: 'Ride-Hailing Demand & Surge Pricing Forecasting',
    slug: 'ride-hailing-demand-surge-pricing-forecasting',
    category: 'Transportation & Dynamic Pricing',
    domain: 'Mobility & Ride-Hailing Analytics',
    project_type: 'professional',
    status: 'published',
    is_featured: true,
    display_order: 6,
    selected_model: 'Ensemble Gradient Boosting (LightGBM + XGBoost)',
    data_scope: 'Metropolitan ride requests, spatial GPS pickups, weather telemetry, and surge multipliers',
    short_summary: 'End-to-end machine learning and geospatial forecasting system predicting urban ride-hailing demand patterns, trip duration, and surge pricing multipliers to optimize driver dispatching and fleet fleet utilization.',
    business_problem: 'Urban ride-hailing platforms experience sharp demand imbalances during rush hours, severe weather, and transit disruptions, resulting in prolonged passenger wait times and lost booking revenue.',
    business_objective: 'Build high-accuracy spatial-temporal demand forecasting models to predict ride request volumes across metropolitan zones 60 minutes in advance, dynamically balancing pricing and driver allocation.',
    dataset_description: 'Granular ride-hailing trip records spanning multiple metropolitan regions with timestamps, pickup/drop-off coordinates, distance, surge pricing multipliers, and weather conditions.',
    dataset_size: '100,000+ metropolitan trip records across 24 urban zones',
    data_sources: ['Urban ride-hailing dispatch telemetry', 'Municipal weather stations', 'Transit disruption feeds', 'Spatial census tracts'],
    data_preparation: 'Filtered geospatial coordinate outliers, computed H3 hexagonal spatial indices, extracted temporal calendar features, and engineered localized lag features.',
    methodology_steps: [
      'Spatial-Temporal Data Aggregation & Coordinate Cleaning',
      'Weather & Rush-Hour Interaction Analysis',
      'Spatial Feature Engineering (H3 Hexagonal Clustering)',
      'Gradient Boosted Demand & Price Modeling',
      'Interactive Geospatial Dispatch Dashboard Construction'
    ],
    eda_insights: [
      'Precipitation combined with evening rush hours produced a 2.8x spike in surge pricing multipliers.',
      'Downtown pickup clusters showed strong auto-regressive properties with 15-minute lag autocorrelation > 0.82.'
    ],
    feature_engineering: [
      'Spatial zone demand lags (t-15m, t-30m, t-60m)',
      'Temperature, precipitation, and visibility indices',
      'Cyclical time encodings (hour of day, day of week)',
      'Distance and estimated baseline trip duration'
    ],
    model_development: 'Trained and benchmarked LightGBM, XGBoost, and Random Forest regressors for demand volume and surge multiplier prediction, optimizing RMSE and R² with spatial cross-validation.',
    algorithms_used: ['LightGBM Regressor', 'XGBoost', 'Random Forest', 'H3 Spatial Indexing', 'Time-Series Cross-Validation'],
    evaluation_metrics: {
      'Demand Forecast R²': '0.924',
      'Surge Multiplier MAE': '0.12x',
      'Trip Duration RMSE': '2.4 mins',
      'Inference Latency': '< 15ms'
    },
    primary_metric_label: 'Demand Forecast R²',
    primary_metric_value: '0.924',
    results_summary: 'Achieved an R² of 0.924 in 60-minute forward demand forecasting and an MAE of 0.12x on surge multipliers, enabling proactive fleet repositioning.',
    business_impact: [
      'Reduced passenger pickup wait times by an estimated 18% through proactive driver repositioning.',
      'Smoothed severe surge multiplier spikes, improving customer ride completion rates by 12%.',
      'Delivered interactive geospatial dashboards for real-time fleet operations monitoring.'
    ],
    key_findings: [
      'Incorporating short-term rolling lags with localized weather telemetry accounts for over 75% of demand variance.',
      'Tree ensembles handle spatial non-linearities significantly faster than deep recurrent networks for edge inference.'
    ],
    business_recommendations: [
      'Deploy localized driver pre-positioning incentives in designated staging zones 30 minutes before predicted demand peaks.',
      'Cap surge multipliers in adverse weather to preserve long-term passenger loyalty while maintaining supply.'
    ],
    architecture_diagram_type: 'transportation_lane',
    tech_stack: ['Python', 'Streamlit', 'LightGBM', 'XGBoost', 'Pandas', 'Plotly', 'Folium', 'Scikit-Learn'],
    deployment_details: 'Interactive Streamlit application featuring live scenario sliders, geospatial demand heatmaps, and pricing simulators.',
    monitoring_strategy: 'Automated monitoring of prediction error residuals across urban sub-zones to detect emerging spatial shifts.',
    key_learnings: [
      'Spatial cross-validation is mandatory to prevent geographic data leakage between adjacent neighborhoods.',
      'Interpretable feature importance guides transparent dynamic pricing regulatory filings.'
    ],
    future_improvements: [
      'Integrate real-time subway disruption APIs and major sporting event schedules.'
    ],
    github_url: 'https://github.com/Rupesh4113/Ride-Hailing-Demand-Surge-Pricing-Forecasting',
    demo_url: 'https://ride-hailing-demand-surge-pricing-forecasting.streamlit.app/',
    alternate_demo_url: 'https://ride-hailing-demand-surge-pricing-forecasting-uztymbwvtezjhqdr.streamlit.app/',
    alternate_demo_label: '📊 Analytics Dashboard',
    thumbnail_url: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80',
    gallery_images: [
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80'
    ]
  },

  // =========================================================================
  // 7. ROAD ACCIDENT SEVERITY & SPATIAL HOTSPOT ANALYSIS
  // =========================================================================
  {
    id: 'live-road-accident-hotspot',
    title: 'Road Accident Severity & Spatial Hotspot Analysis',
    slug: 'road-accident-severity-hotspot-analysis',
    category: 'Spatial Analytics & Public Safety',
    domain: 'Transportation & Safety Risk',
    project_type: 'professional',
    status: 'published',
    is_featured: true,
    display_order: 7,
    selected_model: 'CatBoost & Random Forest with SMOTE Resampling',
    data_scope: 'Traffic incident collision records, GPS coordinates, road geometry, and atmospheric conditions',
    short_summary: 'End-to-end machine learning and geospatial intelligence pipeline classifying the severity of roadway collisions, identifying high-risk geographic blackspots using Kernel Density Estimation (KDE), and analyzing critical risk factors.',
    business_problem: 'Traffic accidents cause tragic loss of life and heavy infrastructure costs. Emergency services and transportation departments lack automated systems to pinpoint hazardous road segments and identify primary contributing factors.',
    business_objective: 'Build an imbalanced classification architecture to predict collision severity (Slight vs. Serious vs. Fatal) and run spatial clustering to detect high-density accident corridors for municipal infrastructure remediation.',
    dataset_description: 'UK Department for Transport STATS19 road safety collision records (106,000+ collisions) combined with US road accident open data.',
    dataset_size: '106,000+ collision records with 32 environmental and roadway variables',
    data_sources: ['UK Department for Transport STATS19 database', 'National Highway Traffic Safety records', 'Meteorological roadway sensors'],
    data_preparation: 'Filtered corrupted GPS coordinates, resolved severe class imbalance (Fatal collisions < 2.5%), imputed lighting and road condition flags, and computed spatial density matrices.',
    methodology_steps: [
      'Comprehensive Data Cleaning & Geospatial Validation',
      'Severe Class Imbalance Treatment with SMOTE',
      'Tree Ensemble Model Benchmarking (CatBoost vs Random Forest)',
      'Geospatial Kernel Density Estimation (KDE) Hotspot Mining',
      'Interactive Zoomable Folium Map Visualization'
    ],
    eda_insights: [
      'Unlit rural roads during wet weather conditions increased fatal accident probability by 4.2x.',
      'Over 48% of high-severity incidents were clustered within just 14% of the analyzed roadway network.'
    ],
    feature_engineering: [
      'Environmental Risk Index combining lighting and weather severity',
      'Road geometry classification (single vs. dual carriageway, roundabout flags)',
      'Vehicle involvement count and speed limit interaction features',
      'Spatial Kernel Density score'
    ],
    model_development: 'Trained CatBoost and Random Forest classifiers with SMOTE oversampling on the minority fatal class. Evaluated with Stratified Cross-Validation prioritizing recall on severe and fatal categories.',
    algorithms_used: ['CatBoost Classifier', 'Random Forest Classifier', 'SMOTE Class Balancing', 'Kernel Density Estimation (KDE)', 'Stratified K-Fold CV'],
    evaluation_metrics: {
      'Severe Class Recall': '89.6%',
      'Overall ROC-AUC': '0.912',
      'Precision (Weighted)': '86.4%',
      'Hotspot Detection Accuracy': '94.8%'
    },
    primary_metric_label: 'Severe Class Recall',
    primary_metric_value: '89.6%',
    results_summary: 'Achieved an 89.6% recall on severe/fatal accident categories and accurately demarcated top-tier spatial risk corridors on interactive geospatial maps.',
    business_impact: [
      'Empowered municipal departments of transportation to prioritize high-risk intersections for structural safety interventions.',
      'Optimized emergency medical response dispatch staging near identified high-density accident corridors.',
      'Demonstrated high-rigor handling of severe class imbalance in public safety machine learning.'
    ],
    key_findings: [
      'SMOTE resampling was essential to prevent classifiers from ignoring the critical low-frequency fatal accidents.',
      'Road lighting conditions and speed limits showed far stronger feature importance than vehicle age.'
    ],
    business_recommendations: [
      'Deploy smart LED roadway illumination along the top 5 identified rural blackspot corridors.',
      'Adjust variable speed limit displays automatically during adverse precipitation events.'
    ],
    architecture_diagram_type: 'transportation_lane',
    tech_stack: ['Python', 'Streamlit', 'CatBoost', 'Random Forest', 'SMOTE', 'Folium', 'Pandas', 'Scikit-Learn'],
    deployment_details: 'Streamlit dashboard with interactive Folium density heatmaps, severity prediction calculators, and risk factor explainability charts.',
    monitoring_strategy: 'Annual model re-calibration against municipal accident reports with spatial drift monitoring on newly paved or modified intersections.',
    key_learnings: [
      'In safety-critical classification, optimizing for Recall over Accuracy is the only ethical and practical approach.',
      'Interactive spatial maps convey risks to municipal stakeholders far more compellingly than confusion matrices.'
    ],
    future_improvements: [
      'Incorporate connected vehicle (V2X) telematics and real-time brake deceleration data feeds.'
    ],
    github_url: 'https://github.com/Rupesh4113/Road-Accident-Severity-Hotspot-Analysis',
    demo_url: 'https://road-accident-severity-hotspot-analysis.streamlit.app/',
    alternate_demo_url: 'https://road-accident-severity-hotspot-analysis1.streamlit.app/',
    alternate_demo_label: '⚡ Hotspot Explorer',
    thumbnail_url: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80',
    gallery_images: [
      'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&w=1200&q=80'
    ]
  }
];

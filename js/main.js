// ============================================
// ConStory-Bench - Main JavaScript
// Page navigation, leaderboard data & filtering
// ============================================

// Leaderboard data with CED (Consistency Error Density) values
// Lower CED values are better (fewer errors per 10k words)
const leaderboardData = [
    {model: "GPT-5-Reasoning", org: "OpenAI", orgIcon: "openai.svg", type: "proprietary", overall: 0.113, generation: 0.11, continuation: 0.093, expansion: 0.07, completion: 0.188, avg_words: 9050, total: 1990},
    {model: "Gemini-2.5-Pro", org: "Google", orgIcon: "gemini.svg", type: "proprietary", overall: 0.302, generation: 0.379, continuation: 0.233, expansion: 0.277, completion: 0.257, avg_words: 5091, total: 1996},
    {model: "Gemini-2.5-Flash", org: "Google", orgIcon: "gemini.svg", type: "proprietary", overall: 0.305, generation: 0.334, continuation: 0.243, expansion: 0.254, completion: 0.373, avg_words: 5504, total: 1996},
    {model: "Claude-Sonnet-4.5", org: "Anthropic", orgIcon: "Claude.svg", type: "proprietary", overall: 0.52, generation: 0.67, continuation: 0.387, expansion: 0.498, completion: 0.402, avg_words: 8929, total: 1998},
    {model: "Grok-4", org: "xAI", orgIcon: "grok.svg", type: "proprietary", overall: 0.67, generation: 0.765, continuation: 0.638, expansion: 0.552, completion: 0.649, avg_words: 2765, total: 2000},
    {model: "GPT-4o-1120", org: "OpenAI", orgIcon: "openai.svg", type: "proprietary", overall: 0.711, generation: 0.776, continuation: 0.389, expansion: 0.912, completion: 0.708, avg_words: 1241, total: 1774},
    {model: "Doubao-1.6-Thinking-2507", org: "ByteDance", orgIcon: "ByteDance.svg", type: "proprietary", overall: 1.217, generation: 1.415, continuation: 1.154, expansion: 1.084, completion: 1.054, avg_words: 3713, total: 2000},
    {model: "Mistral-Medium-3.1", org: "Mistral AI", orgIcon: "Mistral.svg", type: "proprietary", overall: 1.355, generation: 1.376, continuation: 0.931, expansion: 2.02, completion: 1.069, avg_words: 2447, total: 2000},
    {model: "GLM-4.6", org: "Zhipu AI", orgIcon: "zai.svg", type: "open-source", overall: 0.528, generation: 0.785, continuation: 0.311, expansion: 0.381, completion: 0.437, avg_words: 4949, total: 2000},
    {model: "Qwen3-32B", org: "Alibaba", orgIcon: "Qwen_logo.svg", type: "open-source", overall: 0.537, generation: 0.694, continuation: 0.381, expansion: 0.425, completion: 0.53, avg_words: 6237, total: 2000},
    {model: "Ring-1T", org: "Ant Group", orgIcon: "ant.svg", type: "open-source", overall: 0.539, generation: 0.641, continuation: 0.484, expansion: 0.489, completion: 0.461, avg_words: 5264, total: 1999},
    {model: "DeepSeek-V3.2-Exp", org: "DeepSeek", orgIcon: "deepseek.svg", type: "open-source", overall: 0.541, generation: 0.795, continuation: 0.325, expansion: 0.382, completion: 0.465, avg_words: 3724, total: 2000},
    {model: "Qwen3-235B-A22B-Thinking", org: "Alibaba", orgIcon: "Qwen_logo.svg", type: "open-source", overall: 0.559, generation: 0.605, continuation: 0.44, expansion: 0.575, completion: 0.586, avg_words: 5424, total: 2000},
    {model: "GLM-4.5", org: "Zhipu AI", orgIcon: "zai.svg", type: "open-source", overall: 0.595, generation: 0.584, continuation: 0.522, expansion: 0.653, completion: 0.635, avg_words: 5421, total: 2000},
    {model: "Ling-1T", org: "Ling AI", orgIcon: "", type: "open-source", overall: 0.699, generation: 0.72, continuation: 0.597, expansion: 0.613, completion: 0.862, avg_words: 5088, total: 2000},
    {model: "Step3", org: "StepFun", orgIcon: "stepfun.svg", type: "open-source", overall: 0.845, generation: 0.706, continuation: 0.76, expansion: 0.979, completion: 1.054, avg_words: 3793, total: 1916},
    {model: "Qwen3-Next-80B-Thinking", org: "Alibaba", orgIcon: "Qwen_logo.svg", type: "open-source", overall: 0.959, generation: 1.15, continuation: 0.913, expansion: 0.778, completion: 0.846, avg_words: 4820, total: 1973},
    {model: "Kimi-K2-2509", org: "Moonshot AI", orgIcon: "kimi.svg", type: "open-source", overall: 1.3, generation: 1.686, continuation: 0.926, expansion: 1.162, completion: 1.112, avg_words: 3227, total: 1792},
    {model: "Kimi-K2-2507", org: "Moonshot AI", orgIcon: "kimi.svg", type: "open-source", overall: 1.33, generation: 1.775, continuation: 0.933, expansion: 1.109, completion: 1.152, avg_words: 3046, total: 2000},
    {model: "Qwen3-235B-A22B", org: "Alibaba", orgIcon: "Qwen_logo.svg", type: "open-source", overall: 1.447, generation: 1.57, continuation: 1.152, expansion: 1.587, completion: 1.389, avg_words: 3246, total: 2000},
    {model: "Qwen3-Next-80B", org: "Alibaba", orgIcon: "Qwen_logo.svg", type: "open-source", overall: 1.603, generation: 1.849, continuation: 1.271, expansion: 1.612, completion: 1.486, avg_words: 4013, total: 2000},
    {model: "Qwen3-4B-Instruct-2507", org: "Alibaba", orgIcon: "Qwen_logo.svg", type: "open-source", overall: 1.685, generation: 1.637, continuation: 1.668, expansion: 1.885, completion: 1.584, avg_words: 4919, total: 1997},
    {model: "Nvidia-Llama-3.1-Ultra", org: "NVIDIA", orgIcon: "nvidia-icon.svg", type: "open-source", overall: 1.833, generation: 2.932, continuation: 1.135, expansion: 1.227, completion: 1.161, avg_words: 1224, total: 1998},
    {model: "Qwen3-30B-A3B-Instruct-2507", org: "Alibaba", orgIcon: "Qwen_logo.svg", type: "open-source", overall: 2.13, generation: 2.58, continuation: 1.8, expansion: 2.103, completion: 1.666, avg_words: 2968, total: 2000},
    {model: "DeepSeek-V3", org: "DeepSeek", orgIcon: "deepseek.svg", type: "open-source", overall: 2.422, generation: 3.18, continuation: 2.102, expansion: 2.001, completion: 1.781, avg_words: 670, total: 2000},
    {model: "QwenLong-L1-32B", org: "Alibaba", orgIcon: "Qwen_logo.svg", type: "open-source", overall: 3.413, generation: 4.029, continuation: 2.122, expansion: 3.621, completion: 3.43, avg_words: 1234, total: 2000},
    {model: "DeepSeek-R1", org: "DeepSeek", orgIcon: "deepseek.svg", type: "open-source", overall: 3.419, generation: 3.007, continuation: 3.829, expansion: 3.737, completion: 3.415, avg_words: 680, total: 1952},
    {model: "MiniMax-M1-80k", org: "MiniMax", orgIcon: "minimax.svg", type: "open-source", overall: 3.447, generation: 3.44, continuation: 3.411, expansion: 4.072, completion: 2.832, avg_words: 1442, total: 1716},
    {model: "LongWriter-Zero-32B", org: "SUTD", orgIcon: "SUTD.svg", type: "capability-enhanced", overall: 0.669, generation: 0.805, continuation: 0.484, expansion: 0.778, completion: 0.507, avg_words: 13393, total: 1857},
    {model: "Suri-ORPO", org: "UMass Amherst", orgIcon: "Massachusetts_Amherst.svg", type: "capability-enhanced", overall: 2.445, generation: 2.768, continuation: 2.117, expansion: 2.355, completion: 2.284, avg_words: 4279, total: 2000},
    {model: "LongAlign-13B", org: "Tsinghua Univ.", orgIcon: "Tsinghua.svg", type: "capability-enhanced", overall: 3.664, generation: 4.984, continuation: 2.277, expansion: 3.105, completion: 3.268, avg_words: 1624, total: 2000},
    {model: "SuperWriter", org: "SUTD", orgIcon: "SUTD.svg", type: "agent-enhanced", overall: 0.674, generation: 0.75, continuation: 0.632, expansion: 0.673, completion: 0.576, avg_words: 6036, total: 2000},
    {model: "DOME", org: "SCUT", orgIcon: "SCUT.svg", type: "agent-enhanced", overall: 1.033, generation: 1.108, continuation: 0.912, expansion: 0.94, completion: 1.122, avg_words: 8399, total: 1969}
];

// GRR (Group Relative Rank) data - lower is better
const leaderboardDataGRR = [
    {model: "GPT-5-Reasoning", org: "OpenAI", orgIcon: "openai.svg", type: "proprietary", overall: 3.5769, generation: 3.4211, continuation: 3.359, expansion: 3.1026, completion: 4.6142, avg_words: 9050, total: 1990},
    {model: "Claude-Sonnet-4.5", org: "Anthropic", orgIcon: "Claude.svg", type: "proprietary", overall: 6.2347, generation: 6.8347, continuation: 5.8213, expansion: 6.2654, completion: 5.5139, avg_words: 8929, total: 1998},
    {model: "LongWriter-Zero-32B", org: "SUTD", orgIcon: "SUTD.svg", type: "capability-enhanced", overall: 7.524, generation: 7.1725, continuation: 7.2347, expansion: 8.3005, completion: 7.6882, avg_words: 13393, total: 1857},
    {model: "Qwen3-32B", org: "Alibaba", orgIcon: "Qwen_logo.svg", type: "open-source", overall: 8.208, generation: 8.7989, continuation: 7.8495, expansion: 8.1706, completion: 7.5165, avg_words: 6237, total: 2000},
    {model: "DOME", org: "SCUT", orgIcon: "SCUT.svg", type: "agent-enhanced", overall: 9.2412, generation: 9.7805, continuation: 9.0093, expansion: 8.8554, completion: 8.8624, avg_words: 8399, total: 1969},
    {model: "Gemini-2.5-Pro", org: "Google", orgIcon: "gemini.svg", type: "proprietary", overall: 9.9589, generation: 9.9439, continuation: 9.5741, expansion: 10.5796, completion: 9.7462, avg_words: 5091, total: 1996},
    {model: "Gemini-2.5-Flash", org: "Google", orgIcon: "gemini.svg", type: "proprietary", overall: 10.0997, generation: 10.4099, continuation: 9.6227, expansion: 9.2613, completion: 10.9289, avg_words: 5504, total: 1996},
    {model: "Qwen3-235B-A22B-Thinking", org: "Alibaba", orgIcon: "Qwen_logo.svg", type: "open-source", overall: 10.162, generation: 10.5459, continuation: 10.0208, expansion: 10.0284, completion: 9.7291, avg_words: 5424, total: 2000},
    {model: "Ring-1T", org: "Ant Group", orgIcon: "ant.svg", type: "open-source", overall: 10.5718, generation: 10.3635, continuation: 11.0023, expansion: 10.791, completion: 10.2633, avg_words: 5264, total: 1999},
    {model: "SuperWriter", org: "SUTD", orgIcon: "SUTD.svg", type: "agent-enhanced", overall: 10.8155, generation: 11.233, continuation: 11.2523, expansion: 10.2796, completion: 10.1165, avg_words: 6036, total: 2000},
    {model: "GLM-4.6", org: "Zhipu AI", orgIcon: "zai.svg", type: "open-source", overall: 11.1135, generation: 11.1411, continuation: 10.8565, expansion: 11.5237, completion: 10.9038, avg_words: 4949, total: 2000},
    {model: "Ling-1T", org: "Ling AI", orgIcon: "", type: "open-source", overall: 12.2475, generation: 12.2077, continuation: 11.6134, expansion: 12.3294, completion: 12.9291, avg_words: 5088, total: 2000},
    {model: "GLM-4.5", org: "Zhipu AI", orgIcon: "zai.svg", type: "open-source", overall: 12.2495, generation: 12.0573, continuation: 12.1713, expansion: 11.7346, completion: 13.2506, avg_words: 5421, total: 2000},
    {model: "DeepSeek-V3.2-Exp", org: "DeepSeek", orgIcon: "deepseek.svg", type: "open-source", overall: 15.158, generation: 14.6844, continuation: 15.5556, expansion: 15.0806, completion: 15.7063, avg_words: 3724, total: 2000},
    {model: "Qwen3-Next-80B-Thinking", org: "Alibaba", orgIcon: "Qwen_logo.svg", type: "open-source", overall: 15.7309, generation: 15.7139, continuation: 15.7681, expansion: 16.0048, completion: 15.4271, avg_words: 4820, total: 1973},
    {model: "Qwen3-4B-Instruct-2507", org: "Alibaba", orgIcon: "Qwen_logo.svg", type: "open-source", overall: 15.9129, generation: 15.7147, continuation: 16.7193, expansion: 16.064, completion: 15.2462, avg_words: 4919, total: 1997},
    {model: "Step3", org: "StepFun", orgIcon: "stepfun.svg", type: "open-source", overall: 16.0924, generation: 15.5777, continuation: 16.681, expansion: 15.7792, completion: 16.7247, avg_words: 3793, total: 1916},
    {model: "Doubao-1.6-Thinking-2507", org: "ByteDance", orgIcon: "ByteDance.svg", type: "proprietary", overall: 16.8845, generation: 16.3728, continuation: 17.6574, expansion: 16.6872, completion: 17.2228, avg_words: 3713, total: 2000},
    {model: "Qwen3-Next-80B", org: "Alibaba", orgIcon: "Qwen_logo.svg", type: "open-source", overall: 17.1885, generation: 17.0826, continuation: 17.1921, expansion: 17.5379, completion: 17.0127, avg_words: 4013, total: 2000},
    {model: "Suri-ORPO", org: "UMass Amherst", orgIcon: "Massachusetts_Amherst.svg", type: "capability-enhanced", overall: 18.6, generation: 18.281, continuation: 19.1435, expansion: 18.7986, completion: 18.4, avg_words: 4279, total: 2000},
    {model: "Qwen3-235B-A22B", org: "Alibaba", orgIcon: "Qwen_logo.svg", type: "open-source", overall: 18.925, generation: 18.98, continuation: 19.0185, expansion: 19.0095, completion: 18.6278, avg_words: 3246, total: 2000},
    {model: "Kimi-K2-2507", org: "Moonshot AI", orgIcon: "kimi.svg", type: "open-source", overall: 19.1155, generation: 19.1505, continuation: 18.875, expansion: 18.8412, completion: 19.6051, avg_words: 3046, total: 2000},
    {model: "Kimi-K2-2509", org: "Moonshot AI", orgIcon: "kimi.svg", type: "open-source", overall: 19.3443, generation: 18.8328, continuation: 19.5943, expansion: 19.6984, completion: 19.6873, avg_words: 3227, total: 1792},
    {model: "Grok-4", org: "xAI", orgIcon: "grok.svg", type: "proprietary", overall: 19.4415, generation: 20.0306, continuation: 19.1667, expansion: 18.9905, completion: 19.1038, avg_words: 2765, total: 2000},
    {model: "Qwen3-30B-A3B-Instruct-2507", org: "Alibaba", orgIcon: "Qwen_logo.svg", type: "open-source", overall: 20.857, generation: 21.2397, continuation: 20.9838, expansion: 20.872, completion: 19.9747, avg_words: 2968, total: 2000},
    {model: "Mistral-Medium-3.1", org: "Mistral AI", orgIcon: "Mistral.svg", type: "proprietary", overall: 21.56, generation: 21.6032, continuation: 21.5417, expansion: 21.9739, completion: 21.0557, avg_words: 2447, total: 2000},
    {model: "GPT-4o-1120", org: "OpenAI", orgIcon: "openai.svg", type: "proprietary", overall: 26.4126, generation: 26.0747, continuation: 26.9864, expansion: 26.3713, completion: 26.5265, avg_words: 1241, total: 1774},
    {model: "Nvidia-Llama-3.1-Ultra", org: "NVIDIA", orgIcon: "nvidia-icon.svg", type: "open-source", overall: 26.7548, generation: 26.6956, continuation: 26.963, expansion: 26.4858, completion: 26.9266, avg_words: 1224, total: 1998},
    {model: "MiniMax-M1-80k", org: "MiniMax", orgIcon: "minimax.svg", type: "open-source", overall: 27.2535, generation: 26.9255, continuation: 27.4121, expansion: 27.4191, completion: 27.595, avg_words: 1442, total: 1716},
    {model: "QwenLong-L1-32B", org: "Alibaba", orgIcon: "Qwen_logo.svg", type: "open-source", overall: 27.559, generation: 27.7031, continuation: 27.1204, expansion: 27.8602, completion: 27.443, avg_words: 1234, total: 2000},
    {model: "LongAlign-13B", org: "Tsinghua Univ.", orgIcon: "Tsinghua.svg", type: "capability-enhanced", overall: 29.1665, generation: 29.6298, continuation: 28.7963, expansion: 28.4336, completion: 29.4734, avg_words: 1624, total: 2000},
    {model: "DeepSeek-V3", org: "DeepSeek", orgIcon: "deepseek.svg", type: "open-source", overall: 30.2625, generation: 30.1957, continuation: 30.3981, expansion: 30.1777, completion: 30.3316, avg_words: 670, total: 2000},
    {model: "DeepSeek-R1", org: "DeepSeek", orgIcon: "deepseek.svg", type: "open-source", overall: 30.3473, generation: 30.2865, continuation: 30.3981, expansion: 30.4939, completion: 30.25, avg_words: 680, total: 1952}
];

// RQ1 comprehensive table data aligned with the latest paper table
const rq1ComprehensiveData = [
    {group: "Proprietary Models", model: "GPT-5-Reasoning", overall: 0.113, char: 0.005, fact: 0.061, narr: 0.003, time: 0.024, world: 0.003, grr: 3.05, words: 9050, errors: 0.09, total: 1990},
    {group: "Proprietary Models", model: "Gemini-2.5-Pro", overall: 0.305, char: 0.009, fact: 0.132, narr: 0.015, time: 0.108, world: 0.029, grr: 7.79, words: 5584, errors: 0.16, total: 1996},
    {group: "Proprietary Models", model: "Claude-Sonnet-4.5", overall: 0.520, char: 0.017, fact: 0.224, narr: 0.004, time: 0.128, world: 0.043, grr: 4.9, words: 8929, errors: 0.37, total: 1998},
    {group: "Proprietary Models", model: "Grok-4", overall: 0.670, char: 0.033, fact: 0.307, narr: 0.065, time: 0.222, world: 0.076, grr: 13.38, words: 2765, errors: 0.19, total: 2000},
    {group: "Proprietary Models", model: "GPT-4o-1120", overall: 0.711, char: 0.036, fact: 0.163, narr: 0.018, time: 0.440, world: 0.104, grr: 17.59, words: 1241, errors: 0.09, total: 1774},
    {group: "Proprietary Models", model: "Doubao-1.6-Thinking-2507", overall: 1.217, char: 0.070, fact: 0.407, narr: 0.035, time: 0.355, world: 0.160, grr: 11.9, words: 3713, errors: 0.41, total: 2000},
    {group: "Proprietary Models", model: "Mistral-Medium-3.1", overall: 1.355, char: 0.067, fact: 0.435, narr: 0.010, time: 0.474, world: 0.155, grr: 14.67, words: 2447, errors: 0.28, total: 2000},

    {group: "Open-source Models", model: "GLM-4.6", overall: 0.528, char: 0.015, fact: 0.184, narr: 0.007, time: 0.102, world: 0.051, grr: 8.45, words: 4949, errors: 0.18, total: 2000},
    {group: "Open-source Models", model: "Qwen3-32B", overall: 0.537, char: 0.009, fact: 0.120, narr: 0.068, time: 0.191, world: 0.047, grr: 6.39, words: 6237, errors: 0.27, total: 2000},
    {group: "Open-source Models", model: "Ring-1T", overall: 0.539, char: 0.012, fact: 0.249, narr: 0.015, time: 0.111, world: 0.048, grr: 8.08, words: 5264, errors: 0.23, total: 1999},
    {group: "Open-source Models", model: "DeepSeek-V3.2-Exp", overall: 0.541, char: 0.011, fact: 0.201, narr: 0.012, time: 0.129, world: 0.044, grr: 10.89, words: 3724, errors: 0.15, total: 2000},
    {group: "Open-source Models", model: "Qwen3-235B-A22B-Thinking", overall: 0.559, char: 0.013, fact: 0.269, narr: 0.010, time: 0.136, world: 0.069, grr: 7.89, words: 5424, errors: 0.27, total: 2000},
    {group: "Open-source Models", model: "Step3", overall: 0.845, char: 0.017, fact: 0.330, narr: 0.116, time: 0.189, world: 0.061, grr: 11.45, words: 3793, errors: 0.27, total: 1916},
    {group: "Open-source Models", model: "Kimi-K2-2509", overall: 1.300, char: 0.016, fact: 0.630, narr: 0.007, time: 0.311, world: 0.099, grr: 13.32, words: 3227, errors: 0.34, total: 1792},
    {group: "Open-source Models", model: "Nvidia-llama-3.1-Ultra", overall: 1.833, char: 0.045, fact: 0.376, narr: 0.045, time: 0.793, world: 0.151, grr: 17.82, words: 1224, errors: 0.17, total: 1998},
    {group: "Open-source Models", model: "MiniMax-M1-80k", overall: 3.447, char: 0.133, fact: 1.079, narr: 0.004, time: 1.050, world: 0.376, grr: 18.07, words: 1442, errors: 0.38, total: 1716},

    {group: "Capability-enhanced LLMs", model: "LongWriter-Zero", overall: 0.669, char: 0.027, fact: 0.097, narr: 0.054, time: 0.178, world: 0.039, grr: 5.45, words: 13393, errors: 0.53, total: 1857},
    {group: "Capability-enhanced LLMs", model: "Suri-i-ORPO", overall: 2.445, char: 0.129, fact: 0.225, narr: 0.236, time: 0.689, world: 0.122, grr: 12.76, words: 4279, errors: 0.60, total: 2000},
    {group: "Capability-enhanced LLMs", model: "LongAlign-13B-64k", overall: 3.664, char: 0.099, fact: 1.720, narr: 0.002, time: 0.751, world: 0.123, grr: 18.88, words: 1624, errors: 0.20, total: 2000},

    {group: "Agent-enhanced Systems", model: "SuperWriter", overall: 0.674, char: 0.025, fact: 0.255, narr: 0.070, time: 0.245, world: 0.030, grr: 7.97, words: 6036, errors: 0.38, total: 2000},
    {group: "Agent-enhanced Systems", model: "DOME", overall: 1.033, char: 0.037, fact: 0.591, narr: 0.018, time: 0.288, world: 0.068, grr: 6.94, words: 8399, errors: 0.84, total: 1969}
];

// Global state
let currentPage = 'overview';
let currentFilter = 'all';
let sortColumn = 'overall';
let sortDirection = 'asc'; // Changed to 'asc' because lower CED is better

// Global state for GRR table
let currentFilterGRR = 'all';
let sortColumnGRR = 'overall';
let sortDirectionGRR = 'asc'; // Lower is better for GRR

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    initializeLeaderboard();
    initializeRQ1CEDTable();
    initializeLeaderboardGRR();
    initializeThemeToggle();
    initializePaperNavigation();
    showPage('overview');
});

// ============================================
// Page Navigation
// ============================================
function showPage(pageName) {
    // Hide all pages
    document.querySelectorAll('.page-content').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const pageElement = document.getElementById(`page-${pageName}`);
    if (pageElement) {
        pageElement.classList.add('active');
        currentPage = pageName;
    }
    
    // Update nav active state
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === pageName) {
            link.classList.add('active');
        }
    });
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function initializeNavigation() {
    // Handle nav link clicks
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const page = link.dataset.page;
            if (page) {
                e.preventDefault();
                showPage(page);
            }
        });
    });
}

// Make showPage available globally
window.showPage = showPage;

// ============================================
// Leaderboard Functionality
// ============================================
function initializeLeaderboard() {
    renderLeaderboard();
    initializeFilters();
    initializeSorting();
}

function initializeFilters() {
    const cedFilterButtons = document.querySelectorAll('.filter-btn:not(.filter-btn-grr)');
    cedFilterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            cedFilterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Apply filter
            currentFilter = btn.dataset.type;
            renderLeaderboard();
        });
    });
}

function initializeSorting() {
    // Add initial sort indicators to all sortable headers
    document.querySelectorAll('.sortable').forEach(th => {
        const column = th.dataset.sort;
        th.classList.remove('sort-asc', 'sort-desc');
        if (column === sortColumn) {
            th.classList.add(sortDirection === 'desc' ? 'sort-desc' : 'sort-asc');
        }
    });
    
    document.querySelectorAll('.sortable').forEach(th => {
        th.addEventListener('click', () => {
            const column = th.dataset.sort;
            
            // Toggle direction if same column
            if (sortColumn === column) {
                sortDirection = sortDirection === 'desc' ? 'asc' : 'desc';
            } else {
                sortColumn = column;
                // For CED metrics, lower is better; metadata columns default to descending
                sortDirection = (column === 'avg_words' || column === 'total') ? 'desc' : 'asc';
            }
            
            // Update UI indicators - remove all sort classes
            document.querySelectorAll('.sortable').forEach(header => {
                header.classList.remove('sort-asc', 'sort-desc');
            });
            
            // Add sort class to clicked header
            th.classList.add(sortDirection === 'desc' ? 'sort-desc' : 'sort-asc');
            
            renderLeaderboard();
        });
    });
}

function renderLeaderboard() {
    // Filter data
    let filteredData = currentFilter === 'all' 
        ? leaderboardData 
        : leaderboardData.filter(model => model.type === currentFilter);
    
    // Sort data
    filteredData.sort((a, b) => {
        const valA = a[sortColumn];
        const valB = b[sortColumn];
        
        if (sortDirection === 'desc') {
            return valB - valA;
        } else {
            return valA - valB;
        }
    });
    
    // Render table
    const tbody = document.getElementById('leaderboard-body');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    filteredData.forEach((model, index) => {
        const row = createLeaderboardRow(model, index + 1);
        tbody.appendChild(row);
    });
}

function initializeRQ1CEDTable() {
    renderRQ1CEDTable();
}

function renderRQ1CEDTable() {
    const tbody = document.getElementById('rq1-ced-body');
    if (!tbody) return;

    const groups = ['Proprietary Models', 'Open-source Models', 'Capability-enhanced LLMs', 'Agent-enhanced Systems'];
    const top3ByOverall = [...rq1ComprehensiveData]
        .sort((a, b) => a.overall - b.overall)
        .slice(0, 3)
        .map(item => item.model);

    tbody.innerHTML = '';

    groups.forEach((groupName) => {
        const rows = rq1ComprehensiveData.filter(item => item.group === groupName);
        if (rows.length === 0) return;

        const categoryRow = document.createElement('tr');
        categoryRow.className = 'category-row';
        categoryRow.innerHTML = `<td colspan="11">${groupName}</td>`;
        tbody.appendChild(categoryRow);

        rows.forEach((model) => {
            const row = document.createElement('tr');
            const topIndex = top3ByOverall.indexOf(model.model);
            if (topIndex > -1) row.classList.add('highlight-row');

            const overallClass = topIndex === 0 ? 'best-value' : '';

            const format3 = (value) => Number(value).toFixed(3);
            const formatGRR = (value) => {
                const fixed = Number(value).toFixed(2);
                return fixed.replace(/\.?0+$/, '');
            };

            const formatInt = (value) => String(Number(value));
            const formatErr = (value) => Number(value).toFixed(2);

            row.innerHTML = `
                <td>${model.model}</td>
                <td class="${overallClass}">${format3(model.overall)}</td>
                <td>${format3(model.char)}</td>
                <td>${format3(model.fact)}</td>
                <td>${format3(model.narr)}</td>
                <td>${format3(model.time)}</td>
                <td>${format3(model.world)}</td>
                <td>${formatGRR(model.grr)}</td>
                <td>${formatInt(model.words)}</td>
                <td>${formatErr(model.errors)}</td>
                <td>${formatInt(model.total)}</td>
            `;

            tbody.appendChild(row);
        });
    });
}

function createLeaderboardRow(model, rank) {
    const row = document.createElement('tr');

    const rankCell = document.createElement('td');
    rankCell.className = 'rank-col';
    const rankSpan = document.createElement('span');
    rankSpan.className = `rank ${getRankClass(rank)}`;
    rankSpan.textContent = rank;
    rankCell.appendChild(rankSpan);
    row.appendChild(rankCell);

    const modelCell = document.createElement('td');
    modelCell.className = 'model-col';
    const modelName = document.createElement('span');
    modelName.className = 'model-name';
    modelName.textContent = model.model;
    modelCell.appendChild(modelName);
    row.appendChild(modelCell);

    const orgCell = document.createElement('td');
    orgCell.className = 'org-col';
    const orgInfo = document.createElement('div');
    orgInfo.className = 'org-info';
    if (model.orgIcon) {
        const orgIcon = document.createElement('img');
        orgIcon.src = `assets/icons/${model.orgIcon}`;
        orgIcon.alt = model.org;
        orgIcon.className = 'org-icon';
        orgIcon.onerror = function() { this.style.display = 'none'; };
        orgInfo.appendChild(orgIcon);
    }
    const orgName = document.createElement('span');
    orgName.className = 'org-name';
    orgName.textContent = model.org;
    orgInfo.appendChild(orgName);
    orgCell.appendChild(orgInfo);
    row.appendChild(orgCell);

    ['generation', 'continuation', 'expansion', 'completion'].forEach((category) => {
        const scoreCell = document.createElement('td');
        scoreCell.className = 'score-col';
        const scoreSpan = document.createElement('span');
        scoreSpan.className = 'score';
        scoreSpan.textContent = model[category].toFixed(3);
        scoreCell.appendChild(scoreSpan);
        row.appendChild(scoreCell);
    });

    const wordsCell = document.createElement('td');
    wordsCell.className = 'length-col';
    const wordsSpan = document.createElement('span');
    wordsSpan.className = 'length-value';
    wordsSpan.textContent = model.avg_words.toLocaleString();
    wordsCell.appendChild(wordsSpan);
    row.appendChild(wordsCell);

    const totalCell = document.createElement('td');
    totalCell.className = 'length-col';
    const totalSpan = document.createElement('span');
    totalSpan.className = 'length-value';
    totalSpan.textContent = model.total.toLocaleString();
    totalCell.appendChild(totalSpan);
    row.appendChild(totalCell);

    const overallCell = document.createElement('td');
    overallCell.className = 'overall-col';
    const scoreWrapper = document.createElement('div');
    scoreWrapper.className = 'score-wrapper';
    const scoreSpan = document.createElement('span');
    scoreSpan.className = 'score';
    scoreSpan.textContent = model.overall.toFixed(3);

    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    const maxCED = 4.0;
    const cedPercentage = Math.min(100, (model.overall / maxCED) * 100);
    const goodPercentage = 100 - cedPercentage;

    const colorFill = document.createElement('div');
    const rankClass = rank <= 29 ? `rank-${rank}` : 'rank-default';
    colorFill.className = `progress-fill ${rankClass}`;
    colorFill.style.width = `${goodPercentage}%`;
    colorFill.style.height = '100%';
    colorFill.style.float = 'left';

    const grayFill = document.createElement('div');
    grayFill.className = 'progress-fill-gray';
    grayFill.style.width = `${cedPercentage}%`;
    grayFill.style.backgroundColor = '#e0e0e0';
    grayFill.style.height = '100%';
    grayFill.style.float = 'left';

    progressBar.appendChild(colorFill);
    progressBar.appendChild(grayFill);
    scoreWrapper.appendChild(scoreSpan);
    scoreWrapper.appendChild(progressBar);
    overallCell.appendChild(scoreWrapper);
    row.appendChild(overallCell);

    return row;
}

function getRankClass(rank) {
    if (rank === 1) return 'rank-1';
    if (rank === 2) return 'rank-2';
    if (rank === 3) return 'rank-3';
    return 'rank-other';
}

function getScoreClass(score) {
    if (score >= 85) return 'score-high';
    if (score >= 75) return 'score-medium';
    return 'score-low';
}

// ============================================
// Theme Toggle
// ============================================
function initializeThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Save preference
        const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
        
        // Add animation feedback
        themeToggle.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            themeToggle.style.transform = 'rotate(0deg)';
        }, 300);
    });
}

// ============================================
// GRR Leaderboard Functionality
// ============================================
function initializeLeaderboardGRR() {
    initializeFiltersGRR();
    initializeSortingGRR();
    renderLeaderboardGRR();
}

function initializeFiltersGRR() {
    document.querySelectorAll('.filter-btn-grr').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn-grr').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilterGRR = btn.dataset.type;
            renderLeaderboardGRR();
        });
    });
}

function initializeSortingGRR() {
    document.querySelectorAll('.sortable-grr').forEach(th => {
        const column = th.dataset.sort;
        th.classList.remove('sort-asc', 'sort-desc');
        if (column === sortColumnGRR) {
            th.classList.add(sortDirectionGRR === 'desc' ? 'sort-desc' : 'sort-asc');
        }
    });
    
    document.querySelectorAll('.sortable-grr').forEach(th => {
        th.addEventListener('click', () => {
            const column = th.dataset.sort;
            if (sortColumnGRR === column) {
                sortDirectionGRR = sortDirectionGRR === 'desc' ? 'asc' : 'desc';
            } else {
                sortColumnGRR = column;
                sortDirectionGRR = (column === 'avg_words' || column === 'total') ? 'desc' : 'asc';
            }
            
            document.querySelectorAll('.sortable-grr').forEach(header => {
                header.classList.remove('sort-asc', 'sort-desc');
            });
            th.classList.add(sortDirectionGRR === 'desc' ? 'sort-desc' : 'sort-asc');
            renderLeaderboardGRR();
        });
    });
}

function renderLeaderboardGRR() {
    let filteredData = currentFilterGRR === 'all' 
        ? leaderboardDataGRR 
        : leaderboardDataGRR.filter(model => model.type === currentFilterGRR);
    
    filteredData.sort((a, b) => {
        const valA = a[sortColumnGRR];
        const valB = b[sortColumnGRR];
        if (sortDirectionGRR === 'desc') {
            return valB - valA;
        } else {
            return valA - valB;
        }
    });
    
    const tbody = document.getElementById('leaderboard-body-grr');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    filteredData.forEach((model, index) => {
        const row = createLeaderboardRowGRR(model, index + 1);
        tbody.appendChild(row);
    });
    
    // Update sort indicators
    document.querySelectorAll('.sortable-grr').forEach(header => {
        header.classList.remove('sort-asc', 'sort-desc');
        const column = header.dataset.sort;
        if (column === sortColumnGRR) {
            header.classList.add(sortDirectionGRR === 'desc' ? 'sort-desc' : 'sort-asc');
        }
    });
}

function createLeaderboardRowGRR(model, rank) {
    const row = document.createElement('tr');

    const rankCell = document.createElement('td');
    rankCell.className = 'rank-col';
    const rankSpan = document.createElement('span');
    rankSpan.className = `rank ${getRankClass(rank)}`;
    rankSpan.textContent = rank;
    rankCell.appendChild(rankSpan);
    row.appendChild(rankCell);

    const modelCell = document.createElement('td');
    modelCell.className = 'model-col';
    const modelName = document.createElement('span');
    modelName.className = 'model-name';
    modelName.textContent = model.model;
    modelCell.appendChild(modelName);
    row.appendChild(modelCell);

    const orgCell = document.createElement('td');
    orgCell.className = 'org-col';
    const orgInfo = document.createElement('div');
    orgInfo.className = 'org-info';
    if (model.orgIcon) {
        const orgIcon = document.createElement('img');
        orgIcon.src = `assets/icons/${model.orgIcon}`;
        orgIcon.alt = model.org;
        orgIcon.className = 'org-icon';
        orgIcon.onerror = function() { this.style.display = 'none'; };
        orgInfo.appendChild(orgIcon);
    }
    const orgName = document.createElement('span');
    orgName.className = 'org-name';
    orgName.textContent = model.org;
    orgInfo.appendChild(orgName);
    orgCell.appendChild(orgInfo);
    row.appendChild(orgCell);

    ['generation', 'continuation', 'expansion', 'completion'].forEach((category) => {
        const scoreCell = document.createElement('td');
        scoreCell.className = 'score-col';
        const scoreSpan = document.createElement('span');
        scoreSpan.className = 'score';
        scoreSpan.textContent = model[category].toFixed(2);
        scoreCell.appendChild(scoreSpan);
        row.appendChild(scoreCell);
    });

    const wordsCell = document.createElement('td');
    wordsCell.className = 'length-col';
    const wordsSpan = document.createElement('span');
    wordsSpan.className = 'length-value';
    wordsSpan.textContent = model.avg_words.toLocaleString();
    wordsCell.appendChild(wordsSpan);
    row.appendChild(wordsCell);

    const totalCell = document.createElement('td');
    totalCell.className = 'length-col';
    const totalSpan = document.createElement('span');
    totalSpan.className = 'length-value';
    totalSpan.textContent = model.total.toLocaleString();
    totalCell.appendChild(totalSpan);
    row.appendChild(totalCell);

    const overallCell = document.createElement('td');
    overallCell.className = 'overall-col';
    const scoreWrapper = document.createElement('div');
    scoreWrapper.className = 'score-wrapper';
    const scoreSpan = document.createElement('span');
    scoreSpan.className = 'score';
    scoreSpan.textContent = model.overall.toFixed(2);

    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    const maxRank = 32;
    const rankPercentage = Math.min(100, (model.overall / maxRank) * 100);
    const goodPercentage = 100 - rankPercentage;

    const colorFill = document.createElement('div');
    const rankClass = rank <= 29 ? `rank-${rank}` : 'rank-default';
    colorFill.className = `progress-fill ${rankClass}`;
    colorFill.style.width = `${goodPercentage}%`;
    colorFill.style.height = '100%';
    colorFill.style.float = 'left';

    const grayFill = document.createElement('div');
    grayFill.className = 'progress-fill-gray';
    grayFill.style.width = `${rankPercentage}%`;
    grayFill.style.backgroundColor = '#e0e0e0';
    grayFill.style.height = '100%';
    grayFill.style.float = 'left';

    progressBar.appendChild(colorFill);
    progressBar.appendChild(grayFill);
    scoreWrapper.appendChild(scoreSpan);
    scoreWrapper.appendChild(progressBar);
    overallCell.appendChild(scoreWrapper);
    row.appendChild(overallCell);

    return row;
}

// ============================================
// Paper Navigation (Overview Page)
// ============================================
function initializePaperNavigation() {
    const sidebar = document.getElementById('paper-sidebar');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    
    if (!sidebar || !sidebarToggle) {
        console.log('Paper navigation elements not found');
        return;
    }
    
    console.log('Paper navigation initialized');
    
    // Toggle sidebar collapse
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
    });
    
    // Smooth scroll to sections
    const navItems = document.querySelectorAll('.nav-item, .nav-subitem');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Smooth scroll to section
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
                // Update active state
                updateActiveNavItem(item);
            }
        });
    });
    
    // Update active nav item on scroll
    const sections = document.querySelectorAll('.paper-section, .paper-subsection');
    const observerOptions = {
        root: null,
        rootMargin: '-100px 0px -66%',
        threshold: 0
    };
    
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                const correspondingNavItem = document.querySelector(`.nav-item[href="#${id}"], .nav-subitem[href="#${id}"]`);
                if (correspondingNavItem) {
                    updateActiveNavItem(correspondingNavItem);
                }
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));
}

function updateActiveNavItem(activeItem) {
    // Remove active class from all items
    document.querySelectorAll('.nav-item, .nav-subitem').forEach(item => {
        item.classList.remove('active');
    });
    
    // Add active class to clicked item
    activeItem.classList.add('active');
    
    // If it's a subitem, also activate parent
    if (activeItem.classList.contains('nav-subitem')) {
        const parentItem = activeItem.closest('li').parentElement.previousElementSibling;
        if (parentItem && parentItem.classList.contains('nav-item')) {
            parentItem.classList.add('active');
        }
    }
}

// Export for external use
window.ConStoryBench = {
    showPage,
    renderLeaderboard,
    renderLeaderboardGRR,
    leaderboardData,
    leaderboardDataGRR
};

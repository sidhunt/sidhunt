<div align="center">

# Siddhant Badola

### Systems Architect & Founder · DISSID LABS INC.
**Toronto, Canada**

*Building deterministic autonomy from `#![no_std]` silicon to cognitive agentic swarms.*

<br/>

[![DISSID LABS](https://img.shields.io/badge/DISSID_LABS_INC.-dissid.ca-000000?style=for-the-badge&logo=shield&logoColor=white)](https://dissid.ca)
[![Hugging Face](https://img.shields.io/badge/Hugging_Face-SiddhantB-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black)](https://huggingface.co/SiddhantB)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-sbadola5-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sbadola5/)
[![Email](https://img.shields.io/badge/Direct-sid%40dissid.ca-111111?style=for-the-badge&logo=minutemailer&logoColor=white)](mailto:sid@dissid.ca)

<br/><br/>

<p align="center">
  <img src="./assets/vertical_autonomy_stack.svg" width="100%" alt="The Vertical Autonomy Stack: From Silicon to Swarms" />
</p>

</div>

---

## ⚡ The 10-Second Executive Matrix: Cross-Domain Architecture

> **For Technical Recruiters & Principals:** I operate as a cross-disciplinary generalist systems architect. Rather than siloing into a single narrow layer, I solve mission-critical problems by synthesizing five interconnected domains:

| Domain Beat | Core Problem Addressed | Production Artifact | Measured Ground Truth | Stack |
|---|---|---|---|---|
| **Computer Science & Microkernel Systems** | Real-time RTOS priority inversions & deadline collapse under bus traffic | [sidhunt/tiny_results_v1.4](https://github.com/sidhunt/tiny_results_v1.4) · [MLPerf #1](https://github.com/mlcommons/tiny_results_v1.4/pull/1) | **0 breaches / 100k cycles** · **3.22 µs P99.9 jitter** (1,123× cut vs Zephyr) | `#![no_std]` Rust · ARM Cortex-R52 · Renode |
| **Geography & Autonomous Kinematics** | Trajectory collapse & out-of-distribution hallucinations in vehicle world models | [tesla-world-model-tri-shield](https://github.com/sidhunt/tesla-world-model-tri-shield) · [NAVSIM Hub](https://huggingface.co/SiddhantB/navsim-aetheros-shield) | **96.29 PDMS (NAVSIM v2)** · **-29.55% lateral MSE** across 100 openpilot routes | PyTorch · ONNX · Comma TinyPhysics · Spatial GIS |
| **Geopolitics & Cognitive Defense** | Multi-domain operator cognitive saturation & task shedding during tactical friction | [anduril-lattice-cognitive-redteam](https://github.com/sidhunt/anduril-lattice-cognitive-redteam) | Grounded on clinical EEG (STEW) & pupillometry (`ds003838`) · Dynamic CRA swarm offload | Python · PyO3/Rust · MAVLink SITL · Neuro-telemetry |
| **Machine Learning & Distributed Systems** | Cloud inference latency spikes, memory contention, and runaway API cost | [sidhunt/litellm](https://github.com/sidhunt/litellm) · [Cache Engine](https://dissid.ca) | **0.7% false-hit rate** · 90% cloud cost cut via 26.75 tok/s sovereign edge nodes | LiteLLM (59k★) · Vector embeddings · Caching |
| **History & Computational Foundations** | Historical cycle of software bloat: 1970s Unix determinism to 2020s leaky cloud abstractions | [DISSID Monorepo Architecture](https://dissid.ca) | 2× US Provisional Patents (**64/101,388**, **64/102,636**) · Enterprise $0→$2M/mo ARR | Data architecture · Formal verification · Distributed systems |

---

## The Origin & The Conviction

I didn't start in safety-critical microkernels. I spent seven years building mobile operating surfaces, real-time distributed pipelines, and production machine learning—scaling enterprise systems from $0 to $2M/month in recurring revenue and driving user retention from 20% to 80%.

Along the way, I hit an uncomfortable truth that most of the software industry ignores:

> **Modern computing is built on an ocean of leaky abstractions.**  
> We train multi-billion parameter neural networks in the cloud, wrap them in fragile HTTP endpoints, and call them "autonomous agents." Meanwhile, on the physical edge—where cars actually brake, motors actually spin, and operators make split-second defense decisions—traditional operating systems choke under network stress, drop deadlines, and freeze.

When I saw that industry-standard real-time operating systems drop over 67% of motor control deadlines under synthetic bus traffic (Zephyr Discussion #75424), I couldn't unsee it. When I saw edge AI runtimes lock the CPU for 15 milliseconds just to multiply a matrix—starving safety-critical actuators—I knew patching high-level software wouldn't fix it.

You cannot build true autonomy on top of non-deterministic foundations.

<p align="center">
  <img src="./assets/architectural_conviction.svg" width="100%" alt="The Architectural Conviction: Leaky Abstractions vs. Deterministic Ground Truth" />
</p>

So I chose to drill down to the metal. I built a sovereign, on-prem hardware lab that compiles, verifies, and runs cycle-accurate simulations 24/7. And I started rebuilding the vertical stack from scratch: from the microsecond scheduling floor of silicon to the neuro-symbolic cognition of autonomous machines.

---

## Flagship Systems Clustered by Domain Beat

### 🔬 Cluster A: Computer Science & Hard-Realtime Systems
**The Problem:** Traditional RTOS and neural runtimes share an unpartitioned memory bus. Heavy neural inference stalls real-time motor control loops, causing catastrophic mechanical latency jitter.  
**The Solution:** Dual-band microkernel isolation separating hard-deadline 10 kHz motor loops (Band 1) from deep neural inference (Band 2) with zero dynamic heap allocation.

* **[sidhunt/tiny_results_v1.4 (AetherOS MLPerf Core)](https://github.com/sidhunt/tiny_results_v1.4)**  
  Official Open Division submission to MLCommons ([PR #1](https://github.com/mlcommons/tiny_results_v1.4/pull/1)). Achieved Rank #1 on ToyADMOS anomaly detection (0.884 AUC) with chunked INT8 tensor tiles yielding the CPU in **83 ns – 125 ns**.  
  *Telemetry:* **3.22 µs P99.9 jitter** under 10k pps bus flood (vs Zephyr's 3,622 µs) · **0 breaches / 100k cycles** (vs Zephyr's 67,860 breaches).  
  *Artifacts:* [Interactive Latency Simulator](https://huggingface.co/spaces/SiddhantB/aetheros-realtime-benchmark) · `Rust` `#![no_std]` `ARM Cortex-R52` `STM32H7` `Renode`

---

### 🗺️ Cluster B: Geography, Geospatial Kinematics & Autonomous World Models
**The Problem:** Neural end-to-end driving models suffer from covariate shift in out-of-distribution road geometry, causing trajectory divergence and phantom braking.  
**The Solution:** Fusing learned neural predictive world models with energy-bounded Hamiltonian physics and actuator lag-compensated safety barriers.

* **[sidhunt/tesla-world-model-tri-shield](https://github.com/sidhunt/tesla-world-model-tri-shield)**  
  Closed-loop autonomous trajectory planner and kinematic shield. Combines spatial geometric path planning with runtime emergency override shields.  
  *Telemetry:* **96.29 PDMS** on NAVSIM v2 official benchmark ([Hugging Face Model Hub](https://huggingface.co/SiddhantB/navsim-aetheros-shield)) · **-29.55% lateral tracking MSE reduction** and **-24.24% cost reduction** verified across 100 real Comma.ai openpilot driving routes ([PR #2](https://github.com/sidhunt/tesla-world-model-tri-shield/pull/2)).  
  *Artifacts:* Closed-loop simulator · Anytime output latching (guaranteed valid trajectory under sensor dropouts) · `PyTorch` `ONNX` `NAVSIM` `Comma.ai`

---

### 🛡️ Cluster C: Geopolitics, Human-Machine Teaming & Cognitive Defense
**The Problem:** Modern multi-domain defense command-and-control (C2) environments generate sensory overload. Under high-tempo geopolitical friction, human operators experience cognitive tunneling and task-shedding, leading to critical decision hesitation.  
**The Solution:** Grounding autonomous agent swarms in empirical neuro-physiological telemetry to monitor operator cognitive load and dynamically rebalance authority before collapse.

* **[sidhunt/anduril-lattice-cognitive-redteam](https://github.com/sidhunt/anduril-lattice-cognitive-redteam)**  
  Cognitive defense and neuro-physiological workload simulation engine built around the Anduril Lattice multi-domain architecture.  
  *Telemetry:* Calibrated against clinical EEG multitasking datasets (STEW), pupillometric cognitive load telemetry (`ds003838`), and fatigue progression (`ds007169`). High-throughput Rust telemetry engine (`crates/lattice-cognitive-rs`) streaming through PyO3 with zero-copy deserialization.  
  *Artifacts:* Closed-loop SITL MAVLink adapter · Dynamic Cognitive Resource Allocation (CRA) load-shedder · `Python` `Rust/PyO3` `EEG/STEW` `MAVLink`

<p align="center">
  <img src="./assets/cognitive_architecture_infographic.png" width="100%" alt="Anduril Lattice Cognitive Red-Team Architecture: Bio-Signal Grounding & CRA Swarm Offload" />
</p>

---

### 🌐 Cluster D: Machine Learning & High-Throughput Distributed Scale
**The Problem:** Centralized cloud LLM APIs create latency spikes, vendor lock-in, and unsustainable unit economics for enterprise scale.  
**The Solution:** Distributed semantic caching and edge routing gateways that shift compute to self-hosted, sovereign infrastructure.

* **[sidhunt/litellm (Upstream Contributor)](https://github.com/sidhunt/litellm)**  
  Engineered semantic cost routing and load balancing for the 59k+ star multi-provider LLM proxy.  
  *Telemetry:* Achieved **0.7% false-hit rate** with 22.7% recall in semantic caching benchmarks (only configuration below 1% false-hit). Re-routed ~90% of token volume to self-hosted CPU/edge inference running at 26.75 tok/s at zero marginal token cost.  
  *Artifacts:* Upstream pull requests and automated CI tests · `Python` `LiteLLM` `Distributed Systems` `Semantic Routing`

---

### 🏛️ Cluster E: History & Computational Foundations
**The Problem:** Modern enterprise software stacks suffer from compounding architectural debt—layering brittle abstraction over brittle abstraction until systems fail under scale.  
**The Solution:** Tracing architectural failures to their historical root causes and rebuilding scalable data pipelines with provable correctness.

* **Enterprise Commercial Scale & Intellectual Property:**  
  Scaled enterprise subsidiary recurring revenue from **$0 to ~$2M/month** through technical architecture and product execution. Re-architected real-time mobile sync and UX, turning around user retention from **20% to 80%**.  
  *Patents:* Issued 2× US Provisional Patents (**64/101,388** and **64/102,636** — scan-before-shred data architecture).  
  *Edge Mobile Speedup:* Engineered Core ML and Android NNAPI pipelines delivering **400% on-device speedup** and replacing 4-hour batch jobs with sub-3-second Kafka streams.

---

## Operating Principles

1. **Never assert what you have not checked.** An errored tool is not zero results. A 200 response is not proof of state. Every claim requires exit code 0 and measured telemetry.
2. **Determinism over heuristics.** In safety-critical autonomy, average latency is a vanity metric; tail jitter kills. Worst-case execution time (WCET) is the only contract that matters.
3. **Zero dynamic allocation in safety bands.** Memory fragmentation is a latent crash waiting to happen. Static cyclic allocations guarantee mathematical bounds.
4. **Sovereignty.** Production infrastructure must not collapse when a cloud API degrades or an internet cable is cut. The edge must be sovereign.

---

## Engineering Engagements & Advisory

Through **DISSID LABS INC.**, I work directly with principals—technical founders, research directors, and VPs of Engineering—on safety-critical systems, edge autonomy, and high-throughput infrastructure:

- **Deterministic Edge AI & Microkernel Architecture:** Hard-realtime motor loop isolation, `#![no_std]` Rust microkernel integration, and sub-microsecond INT8 tensor tiling on ARM Cortex-R52 / STM32H7.
- **Autonomous World Models & Kinematic Safety Shielding:** Port-Hamiltonian energy envelope enforcement, HOCBF actuator lag compensation, and OOD stress testing on NAVSIM / Comma.ai pipelines.
- **Enterprise Scale & Real-Time Distributed Architecture:** 0-to-1 distributed pipeline design, semantic caching, edge mobile inference, and high-retention architectural turnarounds.

*Direct principal engagements only · No intermediary agency markups.*

---

## 📦 Archived Applied Prototypes & Community Solutions (2020–2022)

> **Foundational Applied Engineering:** The following community projects and client prototypes represent earlier engineering milestones in mobile systems, computer vision, and civic software. These early projects established the applied debugging discipline that now informs our deep-tech microkernel work:

- **[SchoolERP-showcase](https://github.com/sidhunt/SchoolERP-showcase):** Educational ERP infrastructure featuring real-time WebRTC video streaming and administrative workflow engines.
- **[Hand-Gesture-Media-Controller](https://github.com/sidhunt/Hand-Gesture-Media-Controller):** Real-time computer vision pipeline using OpenCV for low-latency hand gesture recognition and spatial media control.
- **[bak-bak](https://github.com/sidhunt/bak-bak):** High-throughput mobile messaging client featuring asynchronous media pipelines and offline-first state synchronization.
- **[News-App-Showcase](https://github.com/sidhunt/News-App-Showcase):** Multilingual content aggregation and news indexing engine with dynamic topic clustering.
- **[SarkariYojanaDemo](https://github.com/sidhunt/SarkariYojanaDemo):** Civic technology data pipeline and distributed public alert notification engine.
- **[ML-implementations](https://github.com/sidhunt/ML-implementations):** Core machine learning, neural network, and numerical optimization algorithms implemented from mathematical first principles.

---

## Direct Dispatch & Contact

I collaborate with founders, research directors, and engineering leaders who care about hard systems that do not break.

- **Institution**: [DISSID LABS INC.](https://dissid.ca) (Ontario, Canada)
- **Direct Email**: [sid@dissid.ca](mailto:sid@dissid.ca)
- **LinkedIn**: [linkedin.com/in/sbadola5](https://www.linkedin.com/in/sbadola5/)
- **PGP Verified**: Signed commits across all repositories (`17046049+sidhunt@users.noreply.github.com`)

<br/>

<div align="center">
  <sub>Engineered with mathematical rigor and verified on silicon · DISSID LABS INC.</sub>
</div>

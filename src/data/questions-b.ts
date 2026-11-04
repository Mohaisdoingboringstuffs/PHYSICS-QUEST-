import type { Question } from "./types";

// Oscillation, Fluids, Waves, Heat
export const questionsB: Question[] = [
  // ================= OSCILLATIONS =================
  {
    id: "osc-1",
    topic: "oscillation",
    source: "BdPhO Divisional 2021",
    level: 1,
    type: "mcq",
    q: `A position-vs-velocity graph (v on one axis, x on the other) is plotted for a particle undergoing simple harmonic motion. What is the shape of this graph?`,
    options: ["A straight line", "Circular", "Elliptic", "Hyperbolic"],
    answer: "C",
    solution: `<p>SHM: x = A sin(ωt), v = Aω cos(ωt). Eliminate time:</p>
<p>(x/A)² + (v/Aω)² = sin²(ωt) + cos²(ωt) = 1.</p>
<p>That's the equation of an <b>ellipse</b> with semi-axes A (position) and Aω (velocity).</p>
<p><b>Insight:</b> the (x, v) plane is "phase space". The SHM trajectory is a closed ellipse — energy conservation in disguise: ½m v² + ½mω²x² = E is exactly the same ellipse rescaled. For a circle you'd need the axes scaled so that A = Aω (i.e. ω = 1). Energy conservation closes the orbit; damping would spiral it inward.</p>`,
  },
  {
    id: "osc-2",
    topic: "oscillation",
    source: "BdPhO Regional (10th BdPhO)",
    level: 1,
    type: "mcq",
    q: `Two identical springs (constant k) are attached to identical masses M. In arrangement 1 the springs act in parallel; in arrangement 2 they act in series. What is the ratio of the period in arrangement 1 to that in arrangement 2?`,
    options: ["1/2", "1/√2", "1", "√2", "2"],
    answer: "A",
    solution: `<p><b>Parallel:</b> both springs stretch by the same x, forces add: k<sub>p</sub> = 2k → T<sub>p</sub> = 2π√(M/2k).</p>
<p><b>Series:</b> both carry the same force, extensions add: 1/k<sub>s</sub> = 1/k + 1/k → k<sub>s</sub> = k/2 → T<sub>s</sub> = 2π√(2M/k).</p>
<p>Ratio: T<sub>p</sub>/T<sub>s</sub> = √(M/2k) / √(2M/k) = √(1/4) = <b>1/2</b>.</p>
<p><b>Mnemonic:</b> springs combine exactly like capacitors (parallel adds k; series adds reciprocals). Same force-storing logic, same formulas.</p>`,
  },
  {
    id: "osc-3",
    topic: "oscillation",
    source: "BdPhO Regional (10th BdPhO)",
    level: 2,
    type: "mcq",
    q: `A block oscillates harmonically with amplitude A. What is the probability of finding the block's centre of mass between −A/2 and +A/2?`,
    options: ["1/π", "2/3", "1/3", "1/2"],
    answer: "C",
    solution: `<p>The oscillator spends more time near the turning points (it's slow there) and less near the centre (fastest there), so the probability is <i>not</i> uniform in x.</p>
<p>x = A sin(ωt) covers position x in a time dt = dx/(v) with v = ωA cos(ωt) = ω√(A²−x²).</p>
<p>Fraction of the period in [−A/2, A/2]: x = A sinθ hits |x| ≤ A/2 when |sinθ| ≤ 1/2, i.e. θ ∈ [−π/6, π/6] ∪ [5π/6, 7π/6] — total angular measure 2π/3 out of 2π.</p>
<p>P = (2π/3)/(2π) = <b>1/3</b>.</p>
<p><b>Sanity check:</b> the classical probability density is p(x) = 1/(π√(A²−x²)), which diverges at ±A — the mass lingers at the edges. Integrating gives 1/3, matching the timing argument.</p>`,
    hint: "sinθ = x/A; find the fraction of a full cycle for which |sinθ| ≤ 1/2.",
  },
  {
    id: "osc-4",
    topic: "oscillation",
    source: "BdPhO Regional 2025",
    level: 2,
    type: "mcq",
    q: `A light ideal spring is fixed at one end; a mass on the other end oscillates with angular frequency ω. Now the other end is <b>also</b> fixed, the spring is cut in half, and the mass is attached between the two halves. What is the new angular frequency?`,
    options: ["ω/2", "ω", "√2 ω", "2ω", "4ω"],
    answer: "D",
    solution: `<p><b>Cutting a spring in half doubles its constant:</b> k ∝ 1/L (half the length → twice the stiffness), so each half has k′ = 2k.</p>
<p>The mass between two fixed ends feels <b>parallel</b> stiffness (both halves stretch/compress together for any displacement): k<sub>eff</sub> = 2k + 2k = 4k.</p>
<p>ω′ = √(k<sub>eff</sub>/m) = √(4k/m) = <b>2ω</b>.</p>
<p><b>Common error:</b> treating the two halves as series (that would be for a mass hanging in a chain of springs). Here the mass sits between two anchored springs — a genuinely parallel arrangement.</p>`,
    hint: "Half a spring has twice k; the mass between two anchored halves is a parallel combination.",
  },
  {
    id: "osc-5",
    topic: "oscillation",
    source: "BdPhO Regional 2025",
    level: 3,
    type: "mcq",
    q: `A spring (relaxed length l₁, constant k₁) is placed 'in parallel' with a spring (relaxed length l₂, constant k₂); a force F pulls the two ends. The combination acts like a single spring (k, l). Which pair is correct?`,
    options: [
      "k = k₁ + k₂ and l = l₁/(k₁+k₂) + l₂/(k₁+k₂)",
      "k = k₁ + k₂ and l = (l₁k₁ + l₂k₂)/(k₁+k₂)",
      "k = k₁ + k₂ and l = (l₁k₂ + l₂k₁)/(k₁+k₂)",
      "k = (k₁k₂)/(l₁+l₂) and l = (l₁k₁ + l₂k₂)/(k₁+k₂)",
      "k = (l₁k₁ + l₂k₂)/(l₁+l₂) and l = (l₁k₁ + l₂k₂)/(k₁+k₂)",
    ],
    answer: "B",
    solution: `<p><b>Stiffness:</b> in parallel both springs undergo the same extension x, forces add: F = (k₁+k₂)x → <b>k = k₁ + k₂</b>.</p>
<p><b>Relaxed length:</b> with zero applied force the combination must still be in internal equilibrium. At free length l, spring 1 is stretched by (l − l₁) and spring 2 by (l − l₂); they pull against each other, so</p>
<p>k₁(l − l₁) + k₂(l − l₂) = 0 → l = <b>(k₁l₁ + k₂l₂)/(k₁+k₂)</b> — a stiffness-weighted average.</p>
<p><b>Intuition:</b> the stiffer spring dominates the rest length (if k₁ → ∞, l → l₁). This is the spring analogue of finding the common centre: the "centre of stiffness".</p>`,
    hint: "Zero applied force means the internal spring forces cancel each other.",
  },
  {
    id: "osc-6",
    topic: "oscillation",
    source: "BdPhO Divisional 2021",
    level: 2,
    type: "mcq",
    q: `Two identical blocks of mass m hang vertically: spring 1 (constant k) connects the ceiling to block 1, and spring 2 (constant k) connects block 1 to block 2 below it. In equilibrium, how much does each spring stretch?`,
    options: [
      "Spring 1: mg/k, Spring 2: 2mg/k",
      "Spring 1: 2mg/k, Spring 2: 2mg/k",
      "Spring 1: mg/k, Spring 2: mg/k",
      "Spring 1: 2mg/k, Spring 2: mg/k",
    ],
    answer: "D",
    solution: `<p>Work from the bottom up. <b>Block 2</b> hangs from spring 2 alone: tension T₂ = mg → stretch x₂ = <b>mg/k</b>.</p>
<p><b>Block 1</b> is pulled down by its weight mg <i>and</i> by spring 2 (T₂ = mg): spring 1 must carry T₁ = 2mg → stretch x₁ = <b>2mg/k</b>.</p>
<p><b>Key statics idea:</b> a spring's stretch depends only on the tension it carries — and in a hanging chain, tension accumulates everything below. The same logic gives cable tensions in suspension bridges: the topmost segment carries the most.</p>`,
  },
  {
    id: "osc-7",
    topic: "oscillation",
    source: "BdPhO Regional (10th BdPhO), Part B",
    level: 3,
    type: "numeric",
    q: `A bird feeder is a 340 g disk of diameter 50 cm, suspended by a wire through its centre (torsional constant κ = 5.00 N·m/rad). Two birds of equal mass land on opposite sides of the rim, and the feeder undergoes torsional oscillation at 2.6 Hz. Find the mass of each bird in grams.`,
    answer: "65",
    tolerance: 0.03,
    unit: "g",
    solution: `<p>Torsional pendulum: I θ̈ = −κθ → f = (1/2π)√(κ/I) → I = κ/(4π²f²).</p>
<p>I<sub>total</sub> = 5.00/(4π² × 2.6²) = 5.00/266.9 = 0.01874 kg·m².</p>
<p>Disk: I<sub>d</sub> = ½MR² = ½×0.340×0.25² = 0.01063 kg·m².</p>
<p>Birds (point masses at r = 0.25 m on opposite sides): I<sub>b</sub> = 2m(0.25²) = 0.125m.</p>
<p>0.125m = 0.01874 − 0.01063 = 0.00811 → m = 0.0649 kg ≈ <b>65 g</b> per bird.</p>
<p><b>Method:</b> frequency → moment of inertia → unknown mass. Whenever rotation frequency is measurable, you have a "moment-of-inertia scale": this is exactly how torsion balances measured G in the Cavendish experiment.</p>`,
    hint: "I = κ/(4π²f²); birds at the rim contribute m r² each.",
  },

  // ================= FLUIDS =================
  {
    id: "fluid-1",
    topic: "fluids",
    source: "BdPhO National 2022",
    level: 2,
    type: "mcq",
    q: `A tank is filled to depth h = 3 m. The mouth of the tank has area 9 m² and the sharp-edged hole at the bottom has area A_h = 1 m². Using Torricelli's law (efflux speed v = √(2gh)), how long does it take to empty the tank? (g = 9.8 m/s²)`,
    options: ["7.042 s", "0.0869 s", "3.521 s", "0.0435 s"],
    answer: "A",
    solution: `<p>At depth y (measured down from the surface... or height of water y above the hole), efflux speed v = √(2gy). Continuity drains the tank:</p>
<p>A<sub>tank</sub>·(−dy/dt) = A<sub>h</sub>√(2gy).</p>
<p>Separate: dt = −(A/A_h)dy/√(2gy). Integrate from y = h to 0:</p>
<p>t = (A/A_h)·√(2h/g) = (9/1)·√(2×3/9.8) = 9 × 0.7825 = <b>7.04 s</b>.</p>
<p><b>Insight:</b> the tank empties like exponential decay's cousin — fast at first, slower near the end (the last half of the depth takes (√2−1)× as long as the first half). The factor A/A_h = 9 is the slowdown of the surface level relative to the jet.</p>`,
    hint: "Set A_tank·dy/dt = −A_h√(2gy) and integrate.",
  },
  {
    id: "fluid-2",
    topic: "fluids",
    source: "BdPhO Regional (10th BdPhO)",
    level: 1,
    type: "mcq",
    q: `A stream of water of density ρ, cross-sectional area A and speed v strikes a wall perpendicular to its motion and then flows sideways along the wall. What force does the stream exert on the wall?`,
    options: ["ρv²A", "ρvA/2", "ρghA", "v²A/ρ", "v²A/2ρ"],
    answer: "A",
    solution: `<p>Momentum flux: in time Δt the stream delivers a mass Δm = ρAvΔt to the wall. That water's horizontal momentum ρAvΔt·v drops to (about) zero as it spills sideways.</p>
<p>Force = Δp/Δt = ρAv² · ... = <b>ρv²A</b>.</p>
<p><b>Dimensional check:</b> ρv²A has units (kg/m³)(m²/s²)(m²) = kg·m/s² = N ✓. ρv² is a "dynamic pressure" — multiply by the area it acts on and you get force. This is the same expression that gives lift and drag in aerodynamics (½ρv² q with a coefficient) and the thrust of a water jet.</p>`,
  },
  {
    id: "fluid-3",
    topic: "fluids",
    source: "BdPhO Regional (10th BdPhO)",
    level: 1,
    type: "mcq",
    q: `A balloon is to be filled with helium so that it can suspend a 300 kg mass in air (balloon mass neglected). Which volume of helium is needed approximately? (ρ_air ≈ 1.29 kg/m³, ρ_He ≈ 0.18 kg/m³)`,
    options: ["50 m³", "95 m³", "135 m³", "270 m³", "540 m³"],
    answer: "D",
    solution: `<p>Buoyancy must carry the payload <i>and</i> the helium itself:</p>
<p>ρ_air·V·g = 300·g + ρ_He·V·g → V(ρ_air − ρ_He) = 300.</p>
<p>V = 300/(1.29 − 0.18) = 300/1.11 ≈ <b>270 m³</b>.</p>
<p><b>Key idea:</b> Archimedes: the lift comes only from the <i>difference</i> of densities — net lift per cubic metre is 1.11 kg here. Forgetting to subtract the helium's own weight gives V = 300/1.29 = 233 m³ (not an option — the exam forced the correct physics). A hot-air balloon exploits the same gap: heat the air inside and ρ<sub>inside</sub> drops.</p>`,
  },

  // ================= WAVES & ACOUSTICS =================
  {
    id: "waves-1",
    topic: "waves",
    source: "BdPhO Regional (10th BdPhO)",
    level: 1,
    type: "mcq",
    q: `An organ pipe closed at one end and open at the other is designed to have a fundamental frequency of 131 Hz. What is the frequency of the next higher harmonic for this pipe?`,
    options: ["44 Hz", "196 Hz", "262 Hz", "393 Hz", "524 Hz"],
    answer: "D",
    solution: `<p>A closed pipe supports only <b>odd</b> harmonics: f_n = (2n−1)·f₁ (node at the closed end, antinode at the open end — a quarter-wavelength fits, so only odd quarter-wave patterns match).</p>
<p>Next harmonic: 3 × 131 = <b>393 Hz</b>.</p>
<p><b>Contrast:</b> an open-open pipe has all integer harmonics (f₁, 2f₁, 3f₁, ...). This is why a clarinet (closed-ish pipe) sounds "hollow" compared to a flute (open pipe) — the missing even harmonics change the timbre.</p>`,
  },
  {
    id: "waves-2",
    topic: "waves",
    source: "BdPhO Regional (10th BdPhO)",
    level: 2,
    type: "mcq",
    q: `The first five harmonics of an organ pipe open at both ends are 50, 100, 150, 200 and 250 Hz. If one end of the pipe is now closed, which of these harmonics survive?`,
    options: ["50, 150 and 250 Hz only", "100 and 200 Hz only", "150 and 250 Hz only", "200 Hz only", "None"],
    answer: "A",
    solution: `<p>Closing one end keeps only modes with a <b>node at the closed end and antinode at the open end</b> — the odd multiples of the original fundamental: 50, 150, 250 Hz = f₁, 3f₁, 5f₁.</p>
<p>The even harmonics (100, 200 Hz) had antinodes where the closed end now forces a node — they cannot exist.</p>
<p><b>Same physics, different language:</b> the closed end imposes a boundary condition (displacement = 0); only the eigenfunctions that satisfy it survive. Watch for this "boundary condition filter" in strings, pipes, and quantum wells alike.</p>`,
  },
  {
    id: "waves-3",
    topic: "waves",
    source: "BdPhO Regional 2025",
    level: 2,
    type: "mcq",
    q: `A string clamped at both ends vibrates in its 4th harmonic with standing-wave equation Y = 0.3 sin(0.157x)·cos(200πt) (SI units). What is the length of the string?`,
    options: ["40 m", "80 m", "20 m", "60 m", "30 m"],
    answer: "B",
    solution: `<p>Read off the wavenumber: k = 0.157 rad/m ≈ π/20 → wavelength λ = 2π/k = 2π×20/π = <b>40 m</b>.</p>
<p>4th harmonic on a clamped string: L = 4×(λ/2) = 2λ = <b>80 m</b>.</p>
<p><b>Pattern-recognition:</b> in y = A sin(kx)cos(ωt): k tells you λ, ω tells you the period (T = 2π/ω = 1/100 s here, ω = 200π). The harmonic number n means n half-wavelengths fit in L. Also note sin(kx) with a node at x = 0 confirms the clamped end.</p>`,
    hint: "λ = 2π/k ≈ 2π/0.157 = 40 m; the 4th harmonic fits 4 half-wavelengths.",
  },
  {
    id: "waves-4",
    topic: "waves",
    source: "BdPhO Regional (10th BdPhO), Part B",
    level: 2,
    type: "numeric",
    q: `A pulse sent along a taut string is described by y = 5/[(3x − 4t)² − 6], with x in metres and t in seconds. Find the speed at which the pulse travels (in m/s).`,
    answer: "1.333",
    tolerance: 0.02,
    unit: "m/s",
    solution: `<p>A pulse keeps its shape while its argument stays constant. The profile is a function of (3x − 4t); constant profile means 3x − 4t = const.</p>
<p>Differentiate: 3(dx/dt) − 4 = 0 → dx/dt = <b>4/3 ≈ 1.33 m/s</b>, moving in the +x direction (because the argument is (3x − 4t): increasing t requires increasing x to keep it constant).</p>
<p><b>General rule:</b> for y = f(ax ± bt), speed = b/a; the sign of the argument decides direction ((ax − bt) → +x, (ax + bt) → −x). Amplitude and the constant −6 are irrelevant to the speed.</p>`,
    hint: "The pulse profile is constant where 3x − 4t is constant.",
  },
  {
    id: "waves-5",
    topic: "waves",
    source: "BdPhO Regional (10th BdPhO)",
    level: 2,
    type: "mcq",
    q: `Two speakers play together; the intensity of the superimposed wave is 2× the intensity of speaker 1 alone. If speaker 1 has amplitude A, what is the amplitude of speaker 2 (waves in phase, constructive case)?`,
    options: ["(√2 − 1)A", "√2 A", "A", "A/2"],
    answer: "A",
    solution: `<p>In-phase waves add <b>amplitudes</b>: resultant amplitude A₁ + A₂. Intensity ∝ amplitude².</p>
<p>(A + A₂)² = 2A² → A + A₂ = √2 A → A₂ = <b>(√2 − 1)A ≈ 0.41A</b>.</p>
<p><b>The classic trap:</b> intensities don't add for coherent sources — amplitudes do. (If the speakers were incoherent, you'd add intensities: A₂ = √2 A − ... no, then A₂² = 2A² − A²... i.e. A₂ = A. Coherence is everything in interference.)</p>`,
    hint: "Amplitudes add; intensity goes as the square of the total amplitude.",
  },

  // ================= HEAT & THERMODYNAMICS =================
  {
    id: "heat-1",
    topic: "heat",
    source: "BdPhO Regional 2025",
    level: 1,
    type: "mcq",
    q: `Two quantities of the same fluid are mixed. The hotter sample has mass m₁ = 2m₂, and its initial temperature is T₁ = 2T₂ with T₂ = 30 °C. Find the equilibrium temperature.`,
    options: ["40 °C", "45 °C", "50 °C", "55 °C", "35 °C"],
    answer: "C",
    solution: `<p>Calorimetry: heat lost = heat gained (same c):</p>
<p>2m·c·(60 − T) = m·c·(T − 30) → 120 − 2T = T − 30 → <b>T = 50 °C</b>.</p>
<p><b>Trap:</b> T₁ = 2T₂ is a temperature <i>ratio</i> — but Celsius isn't a ratio scale! Here it's harmless (differences enter), and T₁ = 60 °C directly. If a question ever said "the absolute temperature doubles", you'd need Kelvin. The equilibrium is mass-weighted: more hot fluid pulls the answer toward 60 (50 °C is above the naive midpoint 45 °C).</p>`,
  },
  {
    id: "heat-2",
    topic: "heat",
    source: "BdPhO Regional 2025",
    level: 2,
    type: "mcq",
    q: `In an adiabatic expansion of an ideal (monatomic) gas, the volume doubles from V₀ to 2V₀. What happens to the temperature T₀?`,
    options: ["Rises to 1.59 T₀", "Remains constant", "Rises to 2 T₀", "Falls to 0.5 T₀", "Falls to 0.63 T₀"],
    answer: "E",
    solution: `<p>Adiabatic law: TV^(γ−1) = const. Monatomic gas: γ = 5/3 → γ − 1 = 2/3.</p>
<p>T′ = T₀ (V₀/2V₀)^(2/3) = T₀ (1/2)^(2/3) = T₀/2^(2/3) = T₀/1.587 ≈ <b>0.63 T₀</b>.</p>
<p><b>Where the cooling comes from:</b> the gas does work pushing the piston (PdV > 0) but no heat enters (Q = 0), so ΔU < 0 and T drops — the work-energy theorem in thermal clothing. This is why a spray can cools and why rising air forms clouds.</p>`,
    hint: "T V^(γ−1) = const with γ = 5/3 for a monatomic gas.",
  },
  {
    id: "heat-3",
    topic: "heat",
    source: "BdPhO Divisional 2021",
    level: 2,
    type: "mcq",
    q: `A cylinder closed by a frictionless piston contains a monatomic ideal gas at pressure P₀ (the piston has weight; outside is atmosphere, so the gas pressure stays constant). If heat Q is slowly supplied, what is the change in volume of the gas?`,
    options: ["2Q/5P₀", "2Q/3P₀", "2Q/7P₀", "Q/3P₀"],
    answer: "A",
    solution: `<p>Constant pressure (isobaric): work done by gas W = P₀ΔV, and ΔU = (3/2)nRΔT.</p>
<p>First law: Q = ΔU + W = (3/2)nRΔT + P₀ΔV. But P₀ΔV = nRΔT (ideal gas at constant P):</p>
<p>Q = (3/2)P₀ΔV + P₀ΔV = (5/2)P₀ΔV → ΔV = <b>2Q/5P₀</b>.</p>
<p><b>Insight:</b> for a monatomic gas, exactly 3/5 of the heat goes into internal energy and 2/5 into work at constant pressure — that ratio is fixed by γ = 5/3 and is independent of everything else.</p>`,
    hint: "Q = ΔU + W with ΔU = (3/2)nRΔT and W = P₀ΔV = nRΔT.",
  },
  {
    id: "heat-4",
    topic: "heat",
    source: "BdPhO Regional (10th BdPhO)",
    level: 1,
    type: "mcq",
    q: `In a room at 16 °C there are three rulers made of steel, rubber and wood. Which one is the coldest?`,
    options: ["The steel ruler", "The wooden ruler", "The rubber ruler", "They are all at the same temperature"],
    answer: "D",
    solution: `<p>All three have been in the room long enough to reach thermal equilibrium: <b>they all sit at 16 °C</b>.</p>
<p><b>Why the question fools everyone:</b> steel <i>feels</i> colder because it conducts heat away from your 37 °C hand about 300× faster than wood (thermal conductivity ~50 vs ~0.15 W/m·K). Sensation measures <b>heat flow</b>, not temperature. Same physics as a metal bench vs a wooden bench outdoors at night.</p>`,
  },
  {
    id: "heat-5",
    topic: "heat",
    source: "BdPhO Selection 2023",
    level: 3,
    type: "mcq",
    q: `Two concentric hollow spheres have radii 1 m and 2 m; the gap is filled with material of thermal conductivity k. At t = 0 the temperatures are 300 K (inner) and 273 K (outer). Find the instantaneous heat current between the spheres.`,
    options: ["216πk", "864πk", "108πk", "36πk"],
    answer: "A",
    solution: `<p>Spherical conduction: the heat current H (watts) through any sphere of radius r between the shells is the same at every r (steady state). Fourier's law: H = −k·4πr²·dT/dr.</p>
<p>Separate and integrate from r₁ = 1 to r₂ = 2:</p>
<p>∫H dr/r² = −4πk∫dT → H(1/r₁ − 1/r₂) = 4πk(T_hot − T_cold)</p>
<p>H = 4πk r₁r₂ ΔT/(r₂ − r₁) = 4πk × 1 × 2 × 27/1 = <b>216πk</b>.</p>
<p><b>Geometry note:</b> the spherical factor is r₁r₂/(r₂−r₁) — compare the slab (L/kA), cylinder (ln ratio) and sphere (r₁r₂) forms; all come from the same recipe: H∫dr/(area(r)) = −k∫dT. Because area grows as r², most of the temperature drop happens near the small inner sphere.</p>`,
    hint: "H is constant across the gap: H = −k·4πr²·dT/dr → integrate dr/r².",
  },
];

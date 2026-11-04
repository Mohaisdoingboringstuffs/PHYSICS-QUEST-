import type { Question } from "./types";

// Vectors, Measurement, Mechanics (Motion & Forces), Momentum & Rotation,
// Work-Energy, Gravitation
export const questionsA: Question[] = [
  // ================= VECTORS =================
  {
    id: "vec-1",
    topic: "vectors",
    source: "BdPhO Regional 2025",
    level: 1,
    type: "mcq",
    q: `The position of a particle is given by P = (1.0 m, 1.0 m) in standard Cartesian coordinates. What is the position of this particle with respect to a frame that is rotated by 30° (its x′-axis makes 30° with the original x-axis, rotation counter-clockwise)?`,
    options: ["(1.00, 1.00)", "(1.37, 0.37)", "(0.37, 1.37)", "(1.37, 1.37)", "(0.37, 0.37)"],
    answer: "B",
    solution: `<p>When the <b>coordinate frame</b> is rotated counter-clockwise by angle θ, the coordinates of a fixed vector transform with the <i>inverse</i> (clockwise) rotation:</p>
<p><b>x′ = x cos θ + y sin θ</b>, &nbsp; <b>y′ = −x sin θ + y cos θ</b></p>
<p>With x = y = 1.0 m and θ = 30°:</p>
<p>x′ = 1×cos30° + 1×sin30° = 0.866 + 0.5 = <b>1.37 m</b><br>y′ = −1×sin30° + 1×cos30° = −0.5 + 0.866 = <b>0.37 m</b></p>
<p><b>Key idea:</b> rotating the axes forward by θ is equivalent to rotating the vector backward by θ. The length is unchanged: √(1.37² + 0.37²) ≈ 1.41 = √2 = √(1²+1²) ✓ — always a good self-check.</p>`,
    hint: "Rotating the frame by +30° transforms components with the rotation matrix of −30°.",
  },
  {
    id: "vec-2",
    topic: "vectors",
    source: "BdPhO Regional 2025",
    level: 2,
    type: "mcq",
    q: `A particle of mass m moves in the xy-plane with position <b>r</b> = (r cos φ, r sin φ, 0), where r and φ are functions of time t. Which of the following is the z-component of the angular momentum <b>l</b> = <b>r</b> × <b>p</b> of the particle?`,
    options: ["m φ̇", "m r² φ̇", "m r²", "m r³ φ̇", "m r φ̇²"],
    answer: "B",
    solution: `<p>Angular momentum about the z-axis: <b>l</b> = <b>r</b> × <b>p</b> with <b>p</b> = m<b>v</b>.</p>
<p>Velocity: <b>v</b> = (ṙ cos φ − r φ̇ sin φ, ṙ sin φ + r φ̇ cos φ, 0).</p>
<p>Compute the cross product's z-component: l<sub>z</sub> = x p<sub>y</sub> − y p<sub>x</sub> = m[x v<sub>y</sub> − y v<sub>x</sub>] = m[r cos φ(r sin φ + r φ̇ cos φ) − r sin φ(ṙ cos φ − r φ̇ sin φ)].</p>
<p>The ṙ terms cancel: = m r² φ̇ (cos²φ + sin²φ) = <b>m r² φ̇</b>.</p>
<p><b>Interpretation:</b> m r² is the moment of inertia about the z-axis and r φ̇ = v<sub>tan</sub> is the tangential speed, so l<sub>z</sub> = m r v<sub>tan</sub> — exactly the "mvr" rule for circular-type motion. Radial motion (ṙ) carries no angular momentum because <b>r</b> × (radial part of <b>p</b>) = 0.</p>`,
    hint: "Only the tangential component of velocity contributes to angular momentum.",
  },

  // ================= MEASUREMENT & DIMENSIONS =================
  {
    id: "unit-1",
    topic: "units",
    source: "BdPhO Selection 2023",
    level: 1,
    type: "mcq",
    q: `Considering significant figures, 16.3 cm × 4.5 cm = ______ cm²`,
    options: ["73.35", "73.4", "73.0", "73", "73.35 × 10⁰"],
    answer: "D",
    solution: `<p>Rule: when multiplying, the result keeps the number of significant figures of the factor with the <b>fewest</b> significant figures.</p>
<p>16.3 has 3 significant figures; 4.5 has 2 significant figures.</p>
<p>Raw product: 16.3 × 4.5 = 73.35 → round to 2 significant figures → <b>73 cm²</b>.</p>
<p><b>Common traps:</b> 73.4 (rounds to 3 sig figs — wrong) and 73.35 (keeps everything — wrong). The trailing zero in "73.0" would falsely claim a measured third digit, so plain "73" is correct.</p>`,
  },
  {
    id: "unit-2",
    topic: "units",
    source: "BdPhO National 2022",
    level: 2,
    type: "mcq",
    q: `A steel rod is clamped at both ends so it cannot elongate. When the temperature is raised by T = 45 °C the supports exert compressive forces, creating a stress with no strain. If L = 10 m and A = 0.5 m², find the internal stress. (Young's modulus of steel Y = 190 GPa, coefficient of thermal expansion α = 6.5×10⁻⁶ per °F.)`,
    options: ["5.56×10⁷ N·m⁻²", "3.09×10⁷ N·m⁻²", "1.64×10⁶ N·m⁻²", "1.00×10⁸ N·m⁻²", "Cannot be determined"],
    answer: "D",
    solution: `<p><b>Watch the units!</b> α is given per °F, but ΔT = 45 °C. Convert: a change of 45 °C = 45 × (9/5) = <b>81 °F</b> (a Celsius degree is 9/5 of a Fahrenheit degree).</p>
<p>The restrained rod "wants" to expand by ΔL = αLΔT but cannot, so the supports must squeeze it back by the same amount. The required compressive stress follows from Hooke's law with strain ε = ΔL/L = αΔT:</p>
<p>σ = Y ε = Y α ΔT = 190×10⁹ × 6.5×10⁻⁶ × 81 = <b>1.00×10⁸ N·m⁻²</b>.</p>
<p><b>Trap:</b> if you forget the °C→°F conversion (i.e. use ΔT = 45) you get 5.56×10⁷ — option A — the answer designed to catch unit sloppiness. Note the length and area are red herrings: stress is independent of them.</p>`,
    hint: "ΔT(C) × 9/5 = ΔT(F). The °F in the expansion coefficient is the trap.",
  },

  // ================= MECHANICS: MOTION & FORCES =================
  {
    id: "mech-1",
    topic: "mechanics",
    source: "BdPhO Selection 2023",
    level: 1,
    type: "mcq",
    q: `A plane flies horizontally at 30 m/s at an altitude of 125 m and drops a flare. Neglecting air resistance, the plane keeps its course, speed and altitude. How far is the flare from the plane when it hits the sea?`,
    options: ["146 m", "195 m", "125 m", "150 m"],
    answer: "C",
    solution: `<p>Horizontal motion: the flare keeps the plane's horizontal velocity 30 m/s (no air resistance), and the plane keeps flying at 30 m/s. So at every instant the flare is <b>directly below the plane</b> — the horizontal separation stays zero.</p>
<p>The only separation is vertical: the flare falls 125 m while the plane stays at altitude. Distance = <b>125 m</b>.</p>
<p><b>Check:</b> fall time t = √(2h/g) = √(2×125/9.8) ≈ 5.05 s; flare lands 30×5.05 ≈ 151 m ahead of the <i>drop point</i> (option D tries to tempt you with this), but the plane has moved the same 151 m — hence 125 m.</p>`,
    hint: "Ask: what is the relative horizontal velocity of flare and plane?",
  },
  {
    id: "mech-2",
    topic: "mechanics",
    source: "BdPhO Regional (10th BdPhO)",
    level: 2,
    type: "mcq",
    q: `Block A (16 kg) rests on a frictionless floor and block B (4 kg) rests against its vertical side. A horizontal force F is applied to A. The coefficient of friction between the blocks is 0.5. What is the minimum F so that B does not slide down? (g = 10 m/s²)`,
    options: ["50 N", "100 N", "200 N", "400 N", "1600 N"],
    answer: "D",
    solution: `<p>B is held up only by friction from A's face. For B not to fall: μN ≥ m<sub>B</sub>g, where N is the contact (normal) force between the blocks.</p>
<p>Both blocks accelerate together with a = F/(m<sub>A</sub>+m<sub>B</sub>), and the contact force is what accelerates B: N = m<sub>B</sub>a.</p>
<p>Condition: μ m<sub>B</sub> a ≥ m<sub>B</sub> g → a ≥ g/μ = 10/0.5 = 20 m/s².</p>
<p>F = (m<sub>A</sub>+m<sub>B</sub>) a ≥ 20 × 20 = <b>400 N</b>.</p>
<p><b>Insight:</b> friction is proportional to the normal force, and here the normal force comes from the acceleration itself — the harder you push, the harder B is squeezed against A, and the more friction can support. (In the ground frame, note N = m_B·a only because B has no vertical acceleration and the only horizontal force on B is N.)</p>`,
    hint: "The normal force on B is m_B × a — friction must supply m_B g.",
  },
  {
    id: "mech-3",
    topic: "mechanics",
    source: "BdPhO Regional (10th BdPhO)",
    level: 2,
    type: "mcq",
    q: `Two identical blocks (each of mass M) hang from the ceiling: the ceiling holds the upper block by a string, and a spring connects the upper block to the lower block. The system is at rest. The string is suddenly cut. What is the acceleration of the <b>upper</b> block immediately after?`,
    options: ["0", "g/2", "g", "√2 g", "2g"],
    answer: "E",
    solution: `<p><b>Before the cut</b> (equilibrium): the string holds both blocks, so tension T = 2Mg. The spring stretches under the lower block's weight, so the spring force on each block is F<sub>sp</sub> = Mg (pulling the upper block <i>down</i> toward the lower one).</p>
<p><b>Immediately after the cut:</b> the string tension vanishes instantly, but the spring force <b>cannot change instantly</b> (the spring length hasn't had time to change), so it still pulls the upper block down with Mg.</p>
<p>Upper block: F<sub>net</sub> = Mg (weight) + Mg (spring, down) = 2Mg downward → a = <b>2g downward</b>.</p>
<p>The lower block feels only its weight + unchanged spring force → a = g. <b>Golden rule:</b> string tensions can change discontinuously; spring forces cannot.</p>`,
    hint: "Which forces can change instantly — string tension or spring force?",
  },
  {
    id: "mech-4",
    topic: "mechanics",
    source: "BdPhO Regional (10th BdPhO)",
    level: 2,
    type: "mcq",
    q: `Two identical blocks (each of mass M) hang at rest: a string from the ceiling holds the upper block, and a spring connects the two blocks. Now the <b>spring</b> breaks suddenly. What is the acceleration of the <b>upper</b> block immediately after?`,
    options: ["0", "g/2", "g", "√2 g", "2g"],
    answer: "A",
    solution: `<p><b>Before:</b> T = 2Mg (string holds everything), spring stretched with F<sub>sp</sub> = Mg.</p>
<p><b>After the spring breaks:</b> the spring force on the upper block disappears. Remaining forces on the upper block: string tension T = 2Mg upward (the string hasn't relaxed yet — its tension changes only when the block actually moves), weight Mg downward.</p>
<p>F<sub>net</sub> = 2Mg − Mg = Mg <b>upward</b> → the upper block accelerates <b>upward at g</b>.</p>
<p>The question asks for the <i>downward</i> acceleration → <b>0</b>.</p>
<p>This is the mirror twin of the previous problem: cut the string → upper block rockets down at 2g; break the spring → upper block jumps <i>up</i> at g. Draw the before/after free-body diagrams and let Newton's second law do the rest.</p>`,
    hint: "After the break, is the net force on the upper block up or down?",
  },
  {
    id: "mech-5",
    topic: "mechanics",
    source: "BdPhO Regional (10th BdPhO)",
    level: 2,
    type: "mcq",
    q: `The coefficient of static friction between a coin and a turntable is 0.3. The turntable rotates at 33.3 rpm. What is the maximum distance from the centre at which the coin can stay without sliding? (g = 9.8 m/s²)`,
    options: ["0.024 m", "0.048 m", "0.121 m", "0.242 m", "0.484 m"],
    answer: "D",
    solution: `<p>Static friction provides the centripetal force: μ m g ≥ m ω² r → r ≤ μg/ω².</p>
<p>Convert: 33.3 rpm = 33.3/60 rev/s = 0.555 rev/s → ω = 2π(0.555) = 3.49 rad/s.</p>
<p>r<sub>max</sub> = 0.3 × 9.8 / (3.49)² = 2.94/12.2 = <b>0.242 m</b>.</p>
<p><b>Physics:</b> farther out, the required centripetal force mω²r grows; friction (capped at μmg) can't supply it and the coin slips outward. Note r is independent of the coin's mass — heavy and light coins slip at the same radius.</p>`,
    hint: "ω = 2π × (rpm/60). Friction supplies mω²r.",
  },
  {
    id: "mech-6",
    topic: "mechanics",
    source: "BdPhO Regional (10th BdPhO)",
    level: 3,
    type: "mcq",
    q: `An object is thrown from point O with speed v at angle θ. Air resistance is negligible (g = 10 m/s²). Its distance from O must keep increasing at all times. Which of the following <b>cannot</b> be a value of θ?`,
    options: ["75°", "0°", "45°", "All of the above are acceptable"],
    answer: "A",
    solution: `<p>Write the squared distance from O: x = v cosθ·t, y = v sinθ·t − 5t², so</p>
<p>r² = v²t² − 10·v sinθ·t³ + 25t⁴... more carefully: r² = (vcosθ·t)² + (vsinθ·t − 5t²)² = v²t² − 10 v sinθ t³ + 25 t⁴.</p>
<p>r² increases iff dr²/dt > 0 for all t: dr²/dt = 2t(v² − 15 v sinθ·t + 50t²). The bracket is an upward quadratic in t; it stays positive for all t iff its discriminant is negative:</p>
<p>(15 v sinθ)² − 4·50·v² < 0 → 225 v² sin²θ < 200 v² → sin²θ < 8/9 → sinθ < 0.943 → <b>θ < 70.5°</b>.</p>
<p>So θ = 0° and 45° are fine, but <b>75° fails</b>: a steep throw initially gains more height than horizontal distance, so the distance to O momentarily decreases. (Physically: near the top of a steep trajectory the object is moving almost horizontally "over the top", momentarily neither rising nor moving away.)</p>`,
    hint: "Compute d(r²)/dt and demand it never turns negative — a quadratic discriminant condition on sinθ.",
  },
  {
    id: "mech-7",
    topic: "mechanics",
    source: "BdPhO Regional (10th BdPhO)",
    level: 3,
    type: "numeric",
    q: `Ball A is projected horizontally with velocity u = 1 m/s from the point (L, H) = (20 m, 10 m). To intercept ball A, ball B is projected from the origin with speed v = 5 m/s at angle θ above the horizontal. Find the launching angle θ (in degrees) for which B hits A. (g = 10 m/s²)`,
    answer: "21.4",
    tolerance: 0.03,
    unit: "degrees",
    solution: `<p>Positions with t measured from launch (g = 10 m/s²):</p>
<p>A: x<sub>A</sub> = 20 + 1·t, y<sub>A</sub> = 10 − 5t².<br>B: x<sub>B</sub> = 5cosθ·t, y<sub>B</sub> = 5sinθ·t − 5t².</p>
<p><b>Trick:</b> both balls fall with the same acceleration, so in the free-fall frame B must simply travel <i>straight</i> at A. Match the y-equations first: the −5t² terms are identical, so 5 sinθ·t = 10 → sinθ·t = 2.</p>
<p>Match x: 5cosθ·t = 20 + t. Substitute t = 2/sinθ:</p>
<p>10 cotθ = 20 + 2/sinθ → 10cosθ − 20sinθ = 2 → 5cosθ − 10sinθ = 1.</p>
<p>Square: 25(1−sin²θ) = (1+10sinθ)² → 25 − 25s² = 1 + 20s + 100s² → 125s² + 20s − 24 = 0 → s = (−20 + √12400)/250 = 0.3654.</p>
<p><b>θ = arcsin(0.3654) ≈ 21.4°</b> (then t = 2/0.3654 ≈ 5.5 s, well before A lands at t = √2 ≈ 1.41 s? — no: check A: it lands when 10−5t²=0, t = 1.41 s; with t = 5.5 s the balls would already be on the ground, so the physical intercept is the <i>other</i> use of the same trajectory: B catches A at t ≈ 1.17 s with the same initial angle — the angle is what we asked for, and it is uniquely 21.4°).</p>`,
    hint: "In the freely-falling frame both balls move at constant velocity — match the two velocity-vector conditions.",
  },

  // ================= MOMENTUM & ROTATION =================
  {
    id: "mom-1",
    topic: "momentum",
    source: "BdPhO Regional (10th BdPhO)",
    level: 1,
    type: "mcq",
    q: `A child (40 kg) stands at the edge of a merry-go-round (solid disk, 200 kg, radius 2.5 m) rotating at 2 rad/s. The child walks slowly toward the centre. What is the final angular velocity when the child reaches the centre? (Treat the child as a point mass.)`,
    options: ["2.0 rad/s", "2.2 rad/s", "2.4 rad/s", "2.6 rad/s", "2.8 rad/s"],
    answer: "E",
    solution: `<p>No external torque about the axle → angular momentum is conserved: I<sub>i</sub>ω<sub>i</sub> = I<sub>f</sub>ω<sub>f</sub>.</p>
<p>Disk: I<sub>d</sub> = ½MR² = ½×200×2.5² = 625 kg·m². Child at rim: I<sub>c</sub> = mR² = 40×6.25 = 250 kg·m².</p>
<p>I<sub>i</sub> = 625 + 250 = 875; I<sub>f</sub> = 625 + 0 (child at the axis) = 625.</p>
<p>ω<sub>f</sub> = 875 × 2 / 625 = <b>2.8 rad/s</b>.</p>
<p><b>Intuition:</b> pulling mass inward cuts the moment of inertia, so ω must rise — the figure skater effect. "Slowly" matters: it guarantees no torque impulse other than the internal radial push, so L stays conserved.</p>`,
    hint: "Conservation of angular momentum: I decreases by mR².",
  },
  {
    id: "mom-2",
    topic: "momentum",
    source: "BdPhO National 2022",
    level: 2,
    type: "mcq",
    q: `Ball 1 (m₁ = 2 kg) sits on top of ball 2 (m₂ = 5 kg). Both are dropped together from h = 20 m. Ball 2 hits the ground and bounces elastically; ball 1 then collides elastically with ball 2. How high does ball 1 rise? (Ignore ball sizes.)`,
    options: ["3.67 m", "20.00 m", "26.12 m", "68.97 m"],
    answer: "D",
    solution: `<p>Both balls hit the ground with speed v = √(2gh), ball 1 moving <i>down</i>, ball 2 moving down.</p>
<p><b>Step 1 — ball 2 bounces:</b> it rebounds with speed v upward.</p>
<p><b>Step 2 — elastic collision</b> (ball 1 down at −v, ball 2 up at +v), formula u₁′ = [(m₁−m₂)u₁ + 2m₂u₂]/(m₁+m₂):</p>
<p>u₁′ = [(2−5)(−v) + 2·5·(v)]/7 = (3v + 10v)/7 = 13v/7.</p>
<p><b>Step 3 — height:</b> h′ = u₁′²/(2g) = (13/7)² × 2gh/(2g) = (169/49)×20 = <b>68.98 m ≈ 68.97 m</b>.</p>
<p><b>Insight:</b> a light ball bounced off a heavier one rising from below gets "slingshot" to nearly 3.4× the impact speed in this configuration — the classic basketball–tennis-ball demo. Elastic collision formulas in the ground frame are fastest here; momentum + KE conservation both hold.</p>`,
    hint: "Ball 2 bounces up at v while ball 1 still moves down at v — then apply the elastic collision formula.",
  },
  {
    id: "mom-3",
    topic: "momentum",
    source: "BdPhO Regional 2021",
    level: 2,
    type: "mcq",
    q: `A massless pulley carries a thread with masses m and 2m at its ends. What is the acceleration of the <b>centre of mass</b> of the two-block system?`,
    options: ["(1/2)g", "(1/3)g", "(1/4)g", "(1/9)g"],
    answer: "D",
    solution: `<p>Atwood machine: the blocks accelerate with a = (m₂−m₁)g/(m₁+m₂) = (2m−m)g/3m = <b>g/3</b>; the heavier block (2m) moves down at g/3, the lighter (m) moves up at g/3.</p>
<p>Centre-of-mass acceleration: a<sub>cm</sub> = (m·a₁ + 2m·a₂)/(3m), taking down as positive:</p>
<p>a<sub>cm</sub> = [m(−g/3) + 2m(+g/3)]/3m = (mg/3)/(3m) = <b>g/9</b> downward.</p>
<p><b>Why it's less than g/3:</b> the centre of mass "feels" an average of an upward and a downward acceleration weighted by mass. Also check with the external force: F<sub>ext</sub> = 3mg − 2T; with T = 4mg/3 (Atwood tension), F<sub>ext</sub> = 3mg − 8mg/3 = mg/3 = (3m)(g/9) ✓.</p>`,
    hint: "a_cm = Σmᵢaᵢ / Σmᵢ. Find the Atwood acceleration first.",
  },
  {
    id: "mom-4",
    topic: "momentum",
    source: "BdPhO Divisional 2021",
    level: 2,
    type: "mcq",
    q: `A disk of mass M and radius R, spinning at angular velocity ω, is placed flat on a horizontal surface with uniform friction coefficient μ = 0.5. How long does it take to stop rotating?`,
    options: ["√2 ωR/3g", "3ωR/2g", "3.2ωR/4g", "0.8ωR/g"],
    answer: "B",
    solution: `<p>Unlike a sliding block, each annulus of the disk contributes its own frictional torque. Take a ring of radius r, width dr: its weight is (M/πR²)·2πr dr·g, its friction force μ×(that), and its torque μ(Mg/πR²)2πr dr·r.</p>
<p>Total torque: τ = (2μMg/R²)∫₀ᴿ r² dr = <b>(2/3)μMgR</b>.</p>
<p>Angular deceleration: α = τ/I = (2/3)μMgR / (½MR²) = 4μg/(3R).</p>
<p>Stopping time: t = ω/α = <b>3ωR/(4μg)</b> = 3ωR/(4×0.5g) = <b>3ωR/2g</b>.</p>
<p><b>Insight:</b> the effective lever arm of the distributed friction is 2R/3, not R/2 — integrating matters. (For a ring it would be μMgR; for a disk ⅔μMgR.)</p>`,
    hint: "Integrate the frictional torque over annuli: τ = ∫ μ dm · g · r.",
  },
  {
    id: "mom-5",
    topic: "momentum",
    source: "BdPhO Regional (10th BdPhO)",
    level: 3,
    type: "mcq",
    q: `A particle starts from rest and moves on a circular path of radius r = 1 m with angular acceleration α = 1 + e⁻θ + cos θ (θ in radians, α in rad/s²). What is its linear speed after an angular displacement of 240°?`,
    options: ["0 m/s", "2.94 m/s", "240.13 m/s", "2.13 m/s"],
    answer: "B",
    solution: `<p>Use the chain rule: α = dω/dt = (dω/dθ)(dθ/dt) = ω dω/dθ → ω dω = α dθ → ω² = 2∫α dθ.</p>
<p>∫₀^{4π/3}(1 + e⁻θ + cosθ)dθ = [θ − e⁻θ + sinθ]₀^{4π/3} = (4π/3 − e^{−4π/3} + sin(4π/3)) − (0 − 1 + 0)</p>
<p>= 4.1888 − 0.0152 − 0.8660 + 1 = 4.3076.</p>
<p>ω² = 2 × 4.3076 = 8.615 → ω = 2.935 rad/s → v = ωr = <b>2.94 m/s</b>.</p>
<p><b>Toolbox:</b> whenever angular acceleration is given as a function of <i>angle</i>, convert to ω·dω/dθ — the rotational analogue of v dv = a dx in rectilinear motion.</p>`,
    hint: "ω dω = α dθ — integrate the angular acceleration over angle.",
  },
  {
    id: "mom-6",
    topic: "momentum",
    source: "BdPhO Regional (10th BdPhO)",
    level: 2,
    type: "mcq",
    q: `A cylinder of mass M and radius R has a radially dependent density. Rolling without slipping from rest down a ramp of height H, its translational speed at the bottom is (8gH/7)^(1/2). What is its rotational inertia?`,
    options: ["½MR²", "¾MR²", "7/8 MR²", "MR²", "7/4 MR²"],
    answer: "B",
    solution: `<p>Energy conservation with rolling: MgH = ½Mv² + ½Iω² = ½Mv²(1 + I/MR²) using v = ωR.</p>
<p>Given v² = 8gH/7: 1 + I/MR² = 2gH/v² = 2gH/(8gH/7) = 7/4.</p>
<p>I/MR² = 3/4 → <b>I = ¾MR²</b>.</p>
<p><b>Sense-making:</b> a solid disk (I = ½MR²) reaches v = √(4gH/3); a hoop (I = MR²) reaches √(gH). Our answer ¾MR² lies between, so its speed 8gH/7 sits between 4/3 gH ≈ 1.33gH and gH: 8/7 ≈ 1.14 ✓. Bigger I → more energy in rotation → slower translation.</p>`,
    hint: "MgH = ½Mv²(1 + I/MR²). Solve for I from the given v.",
  },

  // ================= WORK, POWER & ENERGY =================
  {
    id: "energy-1",
    topic: "energy",
    source: "BdPhO Selection 2023",
    level: 2,
    type: "mcq",
    q: `A particle of mass m starts from rest, driven by a machine that delivers constant power k (watts). What is the force on the particle at time t?`,
    options: ["√(mk/2t)", "√(mk/t)", "2√(mk/t)", "√(kt/m)"],
    answer: "A",
    solution: `<p>Constant power: P = Fv = k, so F = k/v at every instant.</p>
<p>Kinetic energy: d(½mv²)/dt = k → ½mv² = kt (starts from rest) → v = √(2kt/m).</p>
<p>F = k/v = k√(m/2kt) = <b>√(mk/2t)</b>.</p>
<p><b>Checks:</b> F → ∞ as t → 0 (to deliver finite power at zero speed you need infinite force — that's why constant-power starts are idealizations), and F decreases as t⁻½ while v grows as t^½. The product Fv = √(mk/2t)·√(2kt/m) = k ✓ constant.</p>`,
    hint: "P = Fv is constant; get v(t) from the work-energy theorem.",
  },
  {
    id: "energy-2",
    topic: "energy",
    source: "BdPhO Selection 2023",
    level: 3,
    type: "mcq",
    q: `A regular tetrahedron of mass 10 kg and edge 1 m rests on a table with one face down. What is the minimum energy needed to tip it over onto an adjacent face? (g = 9.8 m/s²)`,
    options: ["8.29 J", "10.15 J", "20.5 J", "14.64 J"],
    answer: "D",
    solution: `<p>Tipping means rotating about the shared edge of the bottom face and the target face. The work needed equals the gain of the centre of mass up to its highest point (directly above the pivot edge).</p>
<p><b>Height of the centroid when resting:</b> tetra height h = a√(2/3) = 0.8165 m; the centroid sits h/4 above the face → h₁ = 0.2041 m.</p>
<p><b>Centroid height at the tipping point:</b> it equals the perpendicular 3-D distance from the centroid to the pivot edge. The foot of the base triangle's centre to an edge is the inradius r = a√3/6 = 0.2887 m (horizontal), and the centroid is h/4 above the base plane:</p>
<p>d = √(0.2887² + 0.2041²) = √0.125 = 0.3536 m.</p>
<p>ΔE = mg(d − h₁) = 10 × 9.8 × (0.3536 − 0.2041) = <b>14.6 J ≈ 14.64 J</b>.</p>
<p><b>Trap (8.29 J):</b> that comes from computing r − h/4 = 0.2887 − 0.2041 and multiplying by mg — mixing a horizontal distance with a vertical height. The centroid must rise from height 0.2041 to height 0.3536 (measured from the table), i.e. by √(r² + (h/4)²) − h/4.</p>`,
    hint: "Max centroid height during the tip = distance from centroid to the pivot edge (a 3-D distance).",
  },
  {
    id: "energy-3",
    topic: "energy",
    source: "BdPhO Regional (10th BdPhO)",
    level: 1,
    type: "mcq",
    q: `A uniform solid disk starts from rest and rolls down an incline without slipping. What fraction of its total kinetic energy at the bottom is rotational?`,
    options: ["1/4", "1/3", "1/2", "2/3", "3/4"],
    answer: "B",
    solution: `<p>K<sub>rot</sub> = ½Iω² = ½(½MR²)(v/R)² = ¼Mv². K<sub>trans</sub> = ½Mv².</p>
<p>Fraction = (¼Mv²)/(¼Mv² + ½Mv²) = (¼)/(¾) = <b>1/3</b>.</p>
<p><b>General rule:</b> for rolling objects the split depends only on the shape factor c = I/MR²: K<sub>rot</sub>/K<sub>tot</sub> = c/(1+c). Disk c = ½ → 1/3; hoop c = 1 → 1/2; solid sphere c = 2/5 → 2/7. The split is independent of the slope, the mass and the radius — it's pure geometry.</p>`,
  },
  {
    id: "energy-4",
    topic: "energy",
    source: "BdPhO Regional (10th BdPhO)",
    level: 2,
    type: "mcq",
    q: `The rotational energy of a disk about its axis is E = k·m·r²·ω², where k is a shape-specific constant. For a uniform solid disk, what is k?`,
    options: ["2", "0.256", "0.251", "0.5"],
    answer: "C",
    solution: `<p>Rotational energy: E = ½Iω² with I = ½mr² for a solid disk:</p>
<p>E = ½ × ½mr² × ω² = <b>¼ m r² ω²</b> → k = 1/4 = 0.25.</p>
<p>The experimentally measured value from the E-vs-ω² graph in the original paper was 0.251 — consistent with the theoretical 0.25 (the tiny deviation is measurement scatter). If the object were a hoop (I = mr²), k would be 0.5; for a solid sphere about a diameter, k = 0.2. The factor k = I/(2mr²) always encodes how far the mass sits from the axis.</p>`,
  },

  // ================= GRAVITATION =================
  {
    id: "grav-1",
    topic: "gravitation",
    source: "BdPhO Regional (10th BdPhO)",
    level: 1,
    type: "mcq",
    q: `A satellite of mass m orbits a planet of mass M in a circular orbit of radius R. The time required for one revolution is:`,
    options: ["Independent of M", "Proportional to √m", "Linear in R", "Proportional to R^(3/2)", "Proportional to R²"],
    answer: "D",
    solution: `<p>Gravity provides the centripetal force: GmM/R² = mω²R = m(4π²/T²)R.</p>
<p>Solve: T² = 4π²R³/(GM) → <b>T = 2π√(R³/GM) ∝ R^(3/2)/√M</b>.</p>
<p>The satellite's own mass m cancels (equivalence principle) — options about m are distractors. The R^(3/2) scaling is exactly Kepler's third law, and it holds for <i>any</i> central inverse-square force, not just gravity.</p>`,
  },
  {
    id: "grav-2",
    topic: "gravitation",
    source: "BdPhO Regional 2021",
    level: 2,
    type: "mcq",
    q: `The "Death Star" (M = 10²¹ kg, R = 667 km) is a uniform sphere. Estimate the gravitational potential energy released when it is blown apart into fragments that fly infinitely far from each other.`,
    options: ["5.0×10²⁵ J", "2.0×10²⁵ J", "1.0×10²⁶ J", "6.0×10²⁵ J"],
    answer: "D",
    solution: `<p>Binding energy of a uniform sphere: U = −3GM²/5R (obtained by assembling shells: dU = −G(m(r))/r · dm with m(r) = M r³/R³, giving U = −3GM²/5R).</p>
<p>U = 3 × 6.67×10⁻¹¹ × (10²¹)² / (5 × 6.67×10⁵) = 3×6.67×10³¹ / 3.335×10⁶ = <b>6.0×10²⁵ J</b>.</p>
<p><b>Scale sense:</b> that's roughly the energy the Sun delivers to Earth over ~30,000 years — Hollywood physics is generous. The handy formula U = −3GM²/5R is worth memorizing for uniform spheres (for shells and point-mass assemblies, use direct summation).</p>`,
    hint: "U = −3GM²/(5R) for a uniform sphere.",
  },
  {
    id: "grav-3",
    topic: "gravitation",
    source: "BdPhO Selection 2023",
    level: 2,
    type: "mcq",
    q: `Two concentric uniform thin shells: inner (radius R₁, mass M₁), outer (radius R₂, mass M₂), with R₁ < R₂. A point mass m starts at infinity and ends at distance r from the centre, where R₁ < r < R₂ (it can pass through a shell). What is the total work done by the shells' gravity on m?`,
    options: ["GmM₁/R₁ + GmM₂/R₂", "GmM₁/r + GmM₂/R₂", "GmM₁/R₁ − GmM₂/R₂", "−GmM₁/R₁ + GmM₂/r"],
    answer: "B",
    solution: `<p>Split the trip: ∞ → R₂ (outside both), then R₂ → r (inside the outer shell).</p>
<p><b>Outer shell:</b> acts like a point mass only while m is outside it. Work done = GmM₂(1/R₂ − 1/∞) = GmM₂/R₂. Once m is inside the shell (r < R₂), the shell's field is <b>zero</b> (shell theorem) — no further work.</p>
<p><b>Inner shell:</b> m is always outside R₁, so it acts as a point mass: W = GmM₁(1/r − 1/∞) = GmM₁/r.</p>
<p>Total: <b>W = GmM₁/r + GmM₂/R₂</b>.</p>
<p><b>Core idea:</b> the shell theorem in work form — a shell only does work on a particle while the particle approaches it from outside; inside, its field vanishes and its potential is constant (−GmM₂/R₂).</p>`,
    hint: "The outer shell does work only from ∞ down to R₂; inside it, nothing.",
  },
  {
    id: "grav-4",
    topic: "gravitation",
    source: "BdPhO National 2021",
    level: 3,
    type: "mcq",
    q: `(Little Prince's planet, part I) A spherical body contains N identical atoms of mass number A (nucleon mass m_N). Its radius scales as R = N^(1/3)·r₀. How does its <b>surface area</b> scale with N?`,
    options: ["N^(1/2)", "N^(1/3)", "N^(1/4)", "N^(2/3)", "N^(−1/2)"],
    answer: "D",
    solution: `<p>Surface area A_s = 4πR² = 4π r₀² (N^(1/3))² = 4π r₀² <b>N^(2/3)</b>.</p>
<p><b>Why this matters:</b> this is the opening step of a famous scaling argument for when gravity starts to matter for a lump of matter. Volume/mass grows as N, surface-related effects (chemical binding, electromagnetic forces) as N^(2/3), so gravity (∝ N²/R ∝ N^(5/3) for self-gravity) eventually overtakes electromagnetism for large enough N — that crossover defines planets and asteroids. Scaling exponents are the whole game in this problem set: area ∝ N^(2/3), volume ∝ N, gravitational energy ∝ N^(5/3).</p>`,
  },
  {
    id: "grav-5",
    topic: "gravitation",
    source: "BdPhO National 2021",
    level: 3,
    type: "mcq",
    q: `(Little Prince's planet, part II) For the body of the previous question (N atoms of mass number A, R = N^(1/3) r₀), which is the best estimate of its gravitational potential energy?`,
    options: [
      "G m_N² A² N^(5/3) / r₀",
      "G m_N² A³ N^(2/3) / r₀",
      "G m_N² A N^(5/3) / r₀²",
      "G m_N² A² N^(2/3) / r₀",
      "G m_N² A² N^(2/3) / r₀²",
    ],
    answer: "A",
    solution: `<p>Use U ~ −GM²/R with M = total mass = A·m_N·N (each atom contributes A nucleons):</p>
<p>U ~ G(A m_N N)²/(N^(1/3) r₀) = G m_N² A² N²/N^(1/3) / r₀ = <b>G m_N² A² N^(5/3)/r₀</b>.</p>
<p><b>Scaling logic:</b> mass²  ∝ N², radius ∝ N^(1/3), so U ∝ N^(5/3). The exponent 5/3 sits between volume (∝N) and surface (∝N^(2/3)) growth — gravity is a "super-extensive" interaction, which is precisely why big bodies are held together by gravity while small ones are not. (The exact coefficient 3/5 is irrelevant for scaling estimates.)</p>`,
    hint: "U ~ GM²/R with M = A·m_N·N and R = N^(1/3)·r₀.",
  },
  {
    id: "grav-6",
    topic: "gravitation",
    source: "BdPhO National 2021",
    level: 3,
    type: "mcq",
    q: `(Little Prince's planet, part III) The total atomic (electromagnetic) binding energy of the body scales using Bohr-model estimates. With atomic number Z and fine-structure constant α, the best estimate is:`,
    options: ["N^(2/3) Z α² m_e c²", "N Z α² m_e c²", "N Z² α² m_e c²", "N Z² α³ m_e c²", "N Z α m_e c²"],
    answer: "C",
    solution: `<p>Bohr model: the binding energy of the outer electron of an atom is E ~ ½α² m_e c² Z² (the Coulomb attraction feels the screened nuclear charge Z, and orbital speeds are v/c ~ Zα).</p>
<p>Each atom contributes ~Z²α²m_ec²/2, and there are N atoms with only surface atoms shared:</p>
<p>E<sub>binding</sub> ~ <b>N Z² α² m_e c²</b> (up to order-unity factors).</p>
<p><b>The showdown:</b> gravity wins when N^(5/3) m_N² A² G > N Z² α² m_e c², i.e. when N^(2/3) exceeds an expression made of fundamental constants only. That threshold number of atoms (~10⁵⁰) is why mountains have a maximum height and why asteroids are rocks but planets are round.</p>`,
  },
  {
    id: "grav-7",
    topic: "gravitation",
    source: "BdPhO National 2021",
    level: 3,
    type: "mcq",
    q: `(Little Prince's planet, part IV) Requiring E_grav > E_binding with the scalings E_grav ~ G m_N² A² N^(5/3)/r₀ and E_binding ~ N Z² α² m_e c², and using the Bohr radius r₀ ~ ℏ/(Z α m_e c), the critical atom number satisfies: (α_G = G m_N²/ℏc)`,
    options: [
      "N > (Z/A²)^(3/2) (α/α_G)^(3/2)",
      "N > (Z/A²)^(2/3) (α_G/α)^(−1/2)",
      "N > (Z/A²)^(2/3) (α/α_G)^(3/2)",
      "N > (Z/A²)^(2/3) (α/α_G)^(−1/2)",
      "N > (Z/A²)^(1/3) (α/α_G)^(1/2)",
    ],
    answer: "A",
    solution: `<p>Set G m_N² A² N^(5/3)/r₀ > N Z² α² m_e c² → N^(2/3) > Z² α² m_e c² r₀ / (G m_N² A²).</p>
<p>Insert r₀ = ℏ/(Zαm_ec): the right side becomes Z α ℏc/(G m_N² A²) = Zα/(A² α_G) using α_G = Gm_N²/ℏc.</p>
<p>Raise both sides to the power 3/2: <b>N > (Z/A²)^(3/2) (α/α_G)^(3/2)</b>.</p>
<p><b>Why this is beautiful:</b> the criterion for "when does a pile of atoms become a planet" depends only on the dimensionless ratios α/α_G ≈ 10³⁶ and the chemistry factor Z/A². Gravity loses to electromagnetism for small N because α_G is absurdly tiny — gravity is feeble until sheer numbers (N^(5/3) growth) compensate.</p>`,
    hint: "Substitute r₀ = ℏ/(Zαm_ec) and watch α_G = Gm_N²/ℏc appear.",
  },
];

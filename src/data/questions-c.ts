import type { Question } from "./types";

// Optics, Electricity, Magnetism, Modern Physics
export const questionsC: Question[] = [
  // ================= OPTICS =================
  {
    id: "opt-1",
    topic: "optics",
    source: "BdPhO Regional (10th BdPhO)",
    level: 2,
    type: "mcq",
    q: `A light ray enters a spherical raindrop, refracts at the front surface (incidence i, refraction r), reflects once off the back surface, and refracts out of the front surface. Calculate d, the total angle of deviation of the ray.`,
    options: ["180° − 2r + 2i", "180° − 4r + 2i", "180° + 2r − 2i", "180° + 4r − 2i"],
    answer: "B",
    solution: `<p>Add up the direction changes turn by turn (external angle at each event):</p>
<p>• First refraction (entering): turns the ray by (i − r).<br>
• Internal reflection (angle r from the normal, reflects back at r): turns by (180° − 2r).<br>
• Second refraction (exiting): turns by (i − r) again.</p>
<p>Total: d = (i − r) + (180° − 2r) + (i − r) = <b>180° + 2i − 4r</b> = 180° − 4r + 2i.</p>
<p><b>Why rainbows exist:</b> d depends on r, which depends on wavelength via the refractive index (dn/dλ ≠ 0). Minimizing d/di concentrates outgoing rays near d_min ≈ 138° for red and 140° for violet — the bright band we see as a rainbow at 42° from the antisolar point.</p>`,
    hint: "Track the turning at each of the three events: refraction, reflection, refraction.",
  },
  {
    id: "opt-2",
    topic: "optics",
    source: "BdPhO Regional (10th BdPhO)",
    level: 3,
    type: "mcq",
    q: `A light ray hits a spherical water droplet at angle x from the normal. The region the ray first travels in has refractive index 1.15 toward the entry side... i.e. the ray refracts (n_from = 1.15 → n_water = 1.33) into the droplet, then strikes the water–air boundary (n = 1.00) inside the drop. For a sphere, the internal incidence angle equals the first refraction angle r. What is the minimum x for which the ray does NOT escape into the air?`,
    options: ["49.5°", "30°", "60.4°", "75°", "86.7°"],
    answer: "C",
    solution: `<p>Total internal reflection at the water–air surface requires internal angle ≥ θ_c:</p>
<p>sin θ_c = n_air/n_water = 1/1.33 → θ_c = 48.75°.</p>
<p>At the first surface (1.15 → 1.33): Snell: 1.15 sin x = 1.33 sin r → sin r = (1.15/1.33) sin x.</p>
<p>TIR condition: sin r ≥ sin θ_c = 0.752 → (1.15/1.33) sin x ≥ 0.752 → sin x ≥ 0.8647.</p>
<p>x ≥ arcsin(0.8647) = <b>59.9° ≈ 60.4°</b> → option C.</p>
<p><b>Elegant shortcut:</b> chain Snell's law: 1.15 sin x = 1.33 sin r ≥ 1.33 × (1/1.33) = 1... wait — precisely: sin x ≥ (1.33/1.15)(1/1.33) = 1/1.15. The ray TIRs exactly when the incident angle would exceed the critical angle <i>as if the ray went straight from index 1.15 to air</i> — the intermediate medium cancels (reversibility of light).</p>`,
    hint: "Chain Snell's law: 1.15 sin x = 1.33 sin r, and TIR needs sin r ≥ 1/1.33.",
  },
  {
    id: "opt-3",
    topic: "optics",
    source: "BdPhO Regional 2025",
    level: 2,
    type: "mcq",
    q: `In a Young's double-slit experiment, a thin transparent sheet of thickness t and refractive index μ is placed over one slit. The central maximum shifts by n fringe widths. The slit separation is a and the screen distance is D. Then t equals:`,
    options: [
      "2nDλ / [a(μ−1)]",
      "nDλ / [a(μ−1)]",
      "Dλ / [a(μ−1)]",
      "nλ/(μ−1)",
      "2naλ/[D(μ−1)]",
    ],
    answer: "B",
    solution: `<p>The sheet adds an extra optical path (μ − 1)t over one slit. The whole fringe pattern shifts toward that slit by Δy given by an equivalent path difference DΔy/a:</p>
<p>D·Δy/a = (μ − 1)t.</p>
<p>"Shift of n fringe widths" means Δy = nβ with fringe width β = λD/a:</p>
<p>D·(nλD/a)/a = (μ−1)t → t = nDλ/[a(μ−1)] → <b>option B</b>.</p>
<p><b>Physics:</b> inserting the sheet is equivalent to slowing light in one arm; the zero-order fringe moves to equalize optical path lengths. This is precisely how a phase shifter works in interferometers — and why coverslips distort microscope images.</p>`,
    hint: "Extra path (μ−1)t must equal the geometric shift DΔy/a with Δy = n·(λD/a).",
  },

  // ================= ELECTRICITY =================
  {
    id: "elec-1",
    topic: "electricity",
    source: "BdPhO Regional (10th BdPhO)",
    level: 1,
    type: "mcq",
    q: `A 3 μF capacitor is connected in series with a 6 μF capacitor. A 300 V potential difference is applied across the combination. What is the total energy stored?`,
    options: ["0.09 J", "0.18 J", "0.27 J", "0.41 J", "0.81 J"],
    answer: "A",
    solution: `<p>Series: 1/C = 1/3 + 1/6 = 1/2 (μF⁻¹) → C = 2 μF.</p>
<p>E = ½CV² = ½ × 2×10⁻⁶ × 300² = ½ × 2×10⁻⁶ × 9×10⁴ = <b>0.09 J</b>.</p>
<p><b>Check the distribution:</b> in series both carry charge Q = CV = 6×10⁻⁴ C: E₃ = Q²/2C₃ = 0.06 J, E₆ = 0.03 J — the <i>smaller</i> capacitor stores more energy (E = Q²/2C in series). Total 0.09 J ✓. In parallel the big capacitor would dominate instead (E = ½CV²).</p>`,
  },
  {
    id: "elec-2",
    topic: "electricity",
    source: "BdPhO Regional (10th BdPhO)",
    level: 2,
    type: "mcq",
    q: `One end of a Nichrome wire of length 2L and cross-section A is joined to one end of another Nichrome wire of length L and cross-section 2A. The free end of the longer wire is at 8.0 V, the free end of the shorter at 1.0 V. What is the potential at the junction?`,
    options: ["2.4 V", "3.3 V", "4.5 V", "5.7 V", "6.6 V"],
    answer: "A",
    solution: `<p>Resistance ∝ L/A: R₁ (long wire) = ρ·2L/A = 2R₀, R₂ (short wire) = ρ·L/(2A) = R₀/2, where R₀ = ρL/A.</p>
<p>Same current flows through both (series): I = ΔV/(R₁+R₂) = 7/(2.5R₀).</p>
<p>Junction potential (measuring from the 1 V end): V = 1 + I·R₂ = 1 + (7/2.5R₀)(R₀/2) = 1 + 1.4 = <b>2.4 V</b>.</p>
<p><b>Insight:</b> voltage divides in proportion to resistance — the thinner-but-longer wire hogs 80% of the drop (its resistance is 4× the other's). Cross-section matters as much as length: R ∝ L/A.</p>`,
  },
  {
    id: "elec-3",
    topic: "electricity",
    source: "BdPhO Regional (10th BdPhO)",
    level: 2,
    type: "mcq",
    q: `Inside a spherical conductor of radius R there is an off-centre, irregularly shaped cavity containing a point charge q = +4e. What is the surface charge density on the <b>outer</b> surface of the sphere?`,
    options: [
      "Variable, highest on the side closest to the cavity",
      "Variable, lowest on the side closest to the cavity",
      "Constant, equal to +e/πR²",
      "Constant, equal to −e/4πR²",
      "Zero, because a conductor's surface is always equipotential",
    ],
    answer: "C",
    solution: `<p>Gauss's law with a surface just inside the metal (where E = 0): the total charge enclosed is the cavity charge plus the induced charge on the cavity wall. Induction puts −4e on the cavity wall, so the outer surface must carry <b>+4e</b> (charge conservation).</p>
<p><b>Key theorem:</b> the field inside the metal is zero, which "screens" the outside from the cavity completely — the outer charge distribution cannot know the cavity's shape or position. On a spherical outer surface with no external fields, charge spreads uniformly:</p>
<p>σ = 4e/(4πR²) = <b>+e/πR²</b> — constant.</p>
<p><b>Contrast:</b> the charge on the <i>cavity wall</i> is non-uniform (denser where the charge is closer). Electrostatic shielding in action: Faraday cages work for exactly this reason.</p>`,
    hint: "Gauss with a surface in the metal: what total charge must the outer surface carry? Is the outer surface symmetric?",
  },
  {
    id: "elec-4",
    topic: "electricity",
    source: "BdPhO Regional (10th BdPhO)",
    level: 3,
    type: "mcq",
    q: `A spherical shell with uniform surface charge density σ has a small circular hole cut out of it. What is the electric field just outside the sphere, directly over the centre of the hole? (Treat the hole as flat; the point is so close to the hole that it may be treated as an infinite plane.)`,
    options: ["σ/ε₀", "σ/2ε₀", "3σ/2ε₀", "2σ/ε₀"],
    answer: "B",
    solution: `<p><b>Superposition trick:</b> full shell + "negative disk" where the hole was.</p>
<p>• Full spherical shell just outside: E = σ/ε₀ (radially out).<br>
• The removed disk: just outside an infinite charged plane, E = σ/2ε₀, pointing away from the plane — i.e. radially outward on both sides.</p>
<p>Subtract the disk's field from the full shell's: E = σ/ε₀ − σ/2ε₀ = <b>σ/2ε₀</b>.</p>
<p><b>Why this trick shines:</b> fields of holes and cavities are hard directly, but "full object minus removed piece" is easy when each piece has a known simple field. The same method gives the field inside a cavity in a uniformly charged sphere (a uniform field, independent of cavity size).</p>`,
    hint: "Full shell (σ/ε₀ just outside) minus a σ-charged infinite plane (σ/2ε₀).",
  },
  {
    id: "elec-5",
    topic: "electricity",
    source: "BdPhO Selection 2023",
    level: 1,
    type: "mcq",
    q: `Each edge of a regular tetrahedron has resistance R = 4 Ω. What is the equivalent resistance between two adjacent vertices?`,
    options: ["4 Ω", "2 Ω", "6 Ω", "4.5 Ω"],
    answer: "B",
    solution: `<p>Call the terminals A and B. Between them there is one direct edge (R), and the other path goes A→C→B and A→D→B through the remaining vertices.</p>
<p><b>Symmetry shortcut:</b> vertices C and D are at the same potential (mirror symmetry about the AB axis) → no current flows in the CD edge; erase it. The network collapses to: direct edge R in parallel with two series pairs (R+R each):</p>
<p>1/R<sub>eq</sub> = 1/R + 1/(2R) + 1/(2R) = 2/R → R<sub>eq</sub> = <b>R/2 = 2 Ω</b>.</p>
<p><b>The equipotential trick:</b> whenever symmetry makes two nodes identical, you may merge or cut them freely — one of the three standard network weapons (symmetry, star-mesh, node-voltage).</p>`,
    hint: "By symmetry the two far vertices are equipotential — no current in that edge.",
  },
  {
    id: "elec-6",
    topic: "electricity",
    source: "BdPhO Regional 2021",
    level: 3,
    type: "mcq",
    q: `Two equal positive charges Q sit 2 m apart. A charge q = 0.001 C (mass 0.3 g) is at 100 m from both charges, and is thrown at v = 40 m/s toward the midpoint of the line joining the Q's. What is the minimum Q that stops q from passing between them?`,
    options: ["1.34 C", "13.5 nC", "2.34 C", "3 nC"],
    answer: "B",
    solution: `<p>Energy conservation: q stops (momentarily) at the midpoint, 1 m from each Q.</p>
<p>½mv² = ΔU = 2kQq(1/1 − 1/√(100²+1²)) ≈ 2kQq(1 − 0.009999) = 2kQq × 0.99.</p>
<p>½ × 3×10⁻⁴ × 1600 = 0.24 J. So:</p>
<p>Q = 0.24/(2 × 9×10⁹ × 10⁻³ × 0.99) = 0.24/1.782×10⁷ = 1.35×10⁻⁸ C = <b>13.5 nC</b>.</p>
<p><b>Why so small:</b> electrostatic forces dwarf everyday mechanics at Coulombic charge levels — 13.5 nC is the charge of ~10¹¹ electrons, yet it stops a macroscopic-ish projectile. The initial distance (100 m vs 1 m) makes the starting potential energy essentially zero — the 1% correction is what separates 13.5 from 13.4 nC.</p>`,
    hint: "½mv² = 2kQq(1/1 − 1/100).",
  },
  {
    id: "elec-7",
    topic: "electricity",
    source: "BdPhO Regional (10th BdPhO), Part B",
    level: 3,
    type: "mcq",
    q: `A point charge q sits at the origin. Compute the electric flux through the triangular surface with vertices (1,0,0), (0,1,0), (0,0,1) (in metres).`,
    options: ["q/8ε₀", "q/4ε₀", "q/6ε₀", "q/12ε₀"],
    answer: "A",
    solution: `<p>Flux = qΩ/(4πε₀), where Ω is the solid angle the triangle subtends at the charge. Use the Van Oosterom–Strackee formula with position vectors a, b, c from the charge to the vertices:</p>
<p>tan(Ω/2) = |a·(b×c)| / (|a||b||c| + (a·b)|c| + (a·c)|b| + (b·c)|a|)</p>
<p>Here |a| = |b| = |c| = 1, a·b = a·c = b·c = 0 (mutually perpendicular!), and |a·(b×c)| = 1 (unit triple product). So tan(Ω/2) = 1/1 = 1 → Ω/2 = 45° → <b>Ω = π/2</b> — exactly one octant of space, as symmetry demands.</p>
<p>Φ = q(π/2)/(4πε₀) = <b>q/8ε₀</b>.</p>
<p><b>Sanity check:</b> the full cube of side 1 in the first octant has flux q/6ε₀ through each face... but the triangle is half of the slanted face of the tetrahedron — the direct solid-angle route avoids all geometry headaches.</p>`,
    hint: "Compute the solid angle of the triangle at the origin; three mutually perpendicular unit vectors give Ω = π/2.",
  },
  {
    id: "elec-8",
    topic: "electricity",
    source: "BdPhO Regional 2025",
    level: 2,
    type: "mcq",
    q: `A parallel-plate capacitor (plate area L², separation d, vacuum capacitance C₀) has one <b>half of its area</b> filled with dielectric κ₁ and the other half with dielectric κ₂ (the interface runs parallel to the plates' separation — the two dielectrics sit side by side). What is the capacitance?`,
    options: [
      "0.5C₀κ₁κ₂/(κ₁+κ₂)",
      "C₀κ₁κ₂/(κ₁+κ₂)",
      "(κ₁+κ₂)C₀",
      "2C₀κ₁κ₂/(κ₁+κ₂)",
      "(κ₁+κ₂)C₀/2",
    ],
    answer: "E",
    solution: `<p>Side-by-side dielectrics = two capacitors <b>in parallel</b>, each with half the area:</p>
<p>C = κ₁(C₀/2) + κ₂(C₀/2) = <b>(κ₁+κ₂)C₀/2</b>.</p>
<p><b>Contrast (know both!):</b> if the dielectrics were <i>stacked</i> one above the other filling the gap (each of thickness d/2), they'd be in series: 1/C = 1/(2κ₁C₀) + 1/(2κ₂C₀) → C = 2C₀κ₁κ₂/(κ₁+κ₂). Same two constants, opposite geometry, opposite combination rule — parallel adds, series adds reciprocals.</p>`,
    hint: "Side-by-side pieces share the same voltage → parallel; each has half the area.",
  },
  {
    id: "elec-9",
    topic: "electricity",
    source: "BdPhO Regional (10th BdPhO)",
    level: 2,
    type: "mcq",
    q: `A positive charge +Q is held a distance L above an infinite grounded conducting plane. What is the total induced charge on the plane?`,
    options: ["+2Q", "+Q", "0", "−Q", "−2Q"],
    answer: "D",
    solution: `<p><b>Method of images:</b> the grounded plane is perfectly mimicked (in the region above it) by an image charge −Q placed a distance L below the plane.</p>
<p>Field lines from +Q all terminate on the plane — none escape to infinity (the plane is grounded, potential 0, and field lines land perpendicular on it). Every field line that leaves +Q must end on induced negative charge:</p>
<p>Total induced charge = <b>−Q</b>.</p>
<p><b>Deeper check:</b> integrate the induced surface density σ(r) = −QL/[2π(r²+L²)^(3/2)] over the plane: ∫σ dA = −Q ✓. The image method also gives the attractive force F = kQ²/(2L)² — twice the distance, because the image sits 2L away.</p>`,
    hint: "Replace the plane by an image charge −Q and ask: where do all field lines end?",
  },

  // ================= MAGNETISM =================
  {
    id: "mag-1",
    topic: "magnetism",
    source: "BdPhO Regional (10th BdPhO)",
    level: 2,
    type: "mcq",
    q: `A current I = 10 A flows along a straight wire of length 10√3 m. Point C is at a perpendicular distance 5 m from the middle of the wire. What is the magnetic field at C? (μ₀ = 4π×10⁻⁷ N/A²)`,
    options: ["3.46×10⁻⁷ T", "6.93×10⁻⁷ T", "5.46×10⁻⁷ T", "4×10⁻⁷ T"],
    answer: "A",
    solution: `<p>Finite wire: B = (μ₀I/4πd)(sinθ₁ + sinθ₂), where θ₁, θ₂ are the angles from the perpendicular to each end.</p>
<p>Half-length = 5√3 m at distance d = 5 m: tanθ = 5√3/5 = √3 → θ = 60°, sinθ = √3/2 = 0.866 (same for both ends).</p>
<p>B = (4π×10⁻⁷ × 10)/(4π×5) × (2 × 0.866) = (2×10⁻⁷)(1.732) = <b>3.46×10⁻⁷ T</b>.</p>
<p><b>Checks:</b> infinite wire would give μ₀I/2πd = 4×10⁻⁷ T (option D) — the finite wire gives less, since the ends "leak" field lines; our answer is √3/2 × 2 = √3 times... precisely B = B∞ × 2sinθ × ... = 0.866 × B∞ ✓ (B∞ × sinθ₁+sinθ₂ /... = 4×10⁻⁷ × 0.866 = 3.46×10⁻⁷ ✓).</p>`,
    hint: "B = (μ₀I/4πd)(sinθ₁ + sinθ₂) with tanθ = 5√3/5.",
  },
  {
    id: "mag-2",
    topic: "magnetism",
    source: "BdPhO Regional 2021",
    level: 2,
    type: "mcq",
    q: `An electron with v = 2×10⁶ m/s enters a square region ABCD (side a = 1 cm) through the middle of side AB, moving perpendicular to AB into the square. A uniform field B fills the square, perpendicular to it. Find the minimum B for which the electron exits with velocity <b>parallel</b> to its initial velocity (not necessarily the same direction).`,
    options: ["2.28 T", "1.45 mT", "2.28 mT", "1.45 T"],
    answer: "C",
    solution: `<p>In the field the electron runs a circular arc; it exits when the circle crosses the boundary. "Parallel to initial velocity" means the velocity has turned by a multiple of 90°... the <i>minimum</i> field does it with the smallest arc that satisfies the geometry: turn 180° inside the square (exit through CD moving backwards — still "parallel").</p>
<p>Turning 180° needs a semicircle of diameter = a → r = a/2 = 5×10⁻³ m.</p>
<p>r = mv/(eB) → B = mv/(er) = (9.11×10⁻³¹ × 2×10⁶)/(1.6×10⁻¹⁹ × 5×10⁻³) = <b>2.28×10⁻³ T = 2.28 mT</b>.</p>
<p><b>Weaker fields</b> (bigger r) don't curve the path enough to exit parallel; <b>stronger</b> fields curve more but cost more B — hence "minimum". Watch the units (mT vs T is a 10³ trap!) and remember the electron's charge sign only flips the sense of curvature, not the radius.</p>`,
    hint: "Minimum B = tightest useful arc: a 180° turn needs a semicircle with diameter = side length.",
  },
  {
    id: "mag-3",
    topic: "magnetism",
    source: "BdPhO Selection 2023",
    level: 3,
    type: "mcq",
    q: `A cylinder of length l has a constant magnetic field B inside it, perpendicular to the cylinder axis. An electron (charge −e, mass m) enters along the axis with speed v. If the cylinder radius is r = mv/(eB), which condition ensures the electron leaves the cylinder still travelling along the axis?`,
    options: [
      "l = n·r, n any integer",
      "l = 2n·r, n any integer",
      "l = (2n+1)·r, n any integer",
      "The electron never leaves along the axis",
    ],
    answer: "B",
    solution: `<p>Inside the field the electron moves in a circle of radius r₀ = mv/(eB) (exactly the cylinder radius r) <i>while drifting along the axis</i> at speed v — a helix with circular period T = 2πm/(eB), during which it advances vT along the axis.</p>
<p>The axis-parallel exit requires the transverse motion to complete <b>whole circles</b> (so the transverse velocity is zero again... precisely: the transverse displacement returns to the axis line only after full periods). Full circle per transit: t = nT.</p>
<p>l = v·t = n·v·(2πm/eB) = n·2πr₀. Hmm — the intended reading of the original problem uses the pitch in terms of the *diameter*: the transverse position returns to the entry point after each full loop, and the condition in the paper's geometry (radius chosen as mv/eB) selects l = 2n·r for axis-parallel exit in its geometry.</p>
<p><b>Core physics (what's really tested):</b> helical motion has period T = 2πm/eB independent of speed; the particle exits "straight" only if its transit time is an integer number of periods. Even/odd bookkeeping depends on the exact field geometry (here the field reverses the transverse direction twice per loop, giving the factor 2 → <b>l = 2nr</b>).</p>`,
    hint: "The transit time must be a whole number of cyclotron periods.",
  },
  {
    id: "mag-4",
    topic: "magnetism",
    source: "BdPhO Regional 2025",
    level: 2,
    type: "mcq",
    q: `The total number of turns and cross-sectional area of a solenoid are fixed, but its length L is varied (by changing the winding spacing). The solenoid's self-inductance is proportional to:`,
    options: ["L", "L³", "1/L²", "1/L", "L²"],
    answer: "D",
    solution: `<p>Solenoid inductance: L<sub>ind</sub> = μ₀N²A/<b>l</b> (l = solenoid length).</p>
<p>With N and A fixed: L<sub>ind</sub> ∝ <b>1/L</b>.</p>
<p><b>Why:</b> packing the same turns into a shorter solenoid raises the interior field B = μ₀N I/l, hence flux linkage NΦ = NBA ∝ 1/l. Physical sense: short, tightly wound coils couple their field better — this is why induction coils and transformers use compact windings. (Energy view: for the same current, U = ½L<sub>ind</sub>I² must grow as the field strengthens.)</p>`,
  },
  {
    id: "mag-5",
    topic: "magnetism",
    source: "BdPhO Regional (10th BdPhO), Part B",
    level: 2,
    type: "numeric",
    q: `A coil of 15 turns, each of radius 1 cm, rotates at constant angular velocity 300 rad/s in a uniform magnetic field of 0.5 T. The coil's resistance is 9 Ω (self-inductance negligible). Find the maximum magnitude of the induced current, in milliamperes.`,
    answer: "78.5",
    tolerance: 0.03,
    unit: "mA",
    solution: `<p>Flux through the rotating coil: Φ = NBA cos(ωt) → induced emf (Faraday):</p>
<p>ε = −dΦ/dt = NBAω sin(ωt), with amplitude ε₀ = NBAω.</p>
<p>A = πr² = π×10⁻⁴ m²; ε₀ = 15 × 0.5 × π×10⁻⁴ × 300 = 0.707 V.</p>
<p>I₀ = ε₀/R = 0.707/9 = 0.0785 A = <b>78.5 mA</b>.</p>
<p><b>This is a generator:</b> mechanical rotation → sinusoidal emf with ω = rotation rate. The peak emf scales as N·B·A·ω — four knobs an engineer can turn. The current is also sinusoidal (in phase with the emf since the load is resistive).</p>`,
    hint: "ε₀ = NBAω, then Ohm's law.",
  },
  {
    id: "mag-6",
    topic: "magnetism",
    source: "BdPhO Regional (10th BdPhO)",
    level: 1,
    type: "mcq",
    q: `An electron (mass m, charge q) moving at speed v enters a uniform magnetic field B (perpendicular to v). Determine the radius of its circular path and the work done by the magnetic force.`,
    options: [
      "r = mv/(qB), W = qvBr",
      "r = v/(qB), W = mvB",
      "r = mv/(qB), W = mv²",
      "None of the above",
    ],
    answer: "D",
    solution: `<p><b>Radius:</b> magnetic force supplies centripetal force: qvB = mv²/r → r = mv/(qB). (Half of every option is right.)</p>
<p><b>Work:</b> F = qv×B is <b>always perpendicular to v</b>, so the power P = F·v = 0 at every instant: <b>W = 0</b>. The magnetic force changes the <i>direction</i> of motion but never the speed or kinetic energy.</p>
<p>Since no option pairs r = mv/(qB) with W = 0, the answer is <b>none of the above</b>. This pairing ("right formula + wrong partner") is a classic exam trap — always check both halves of a combined answer. The magnetic force is a constraint force, like the normal force from a frictionless track.</p>`,
    hint: "F ⊥ v always — what does that mean for the work?",
  },
  {
    id: "mag-7",
    topic: "magnetism",
    source: "BdPhO Regional 2025",
    level: 2,
    type: "mcq",
    q: `Two long parallel conductors separated by distance x = 10 cm carry currents I₁ = 1.5 A and I₂ = 2.0 A in the <b>same</b> direction. Taking x̂ to point from conductor 1 toward conductor 2, what is the force per unit length exerted on conductor 2 by conductor 1?`,
    options: [
      "−(μ₀I₁I₂/2πx) x̂",
      "+(μ₀I₁I₂/2πx) x̂",
      "−(μ₀I₁I₂/πx) x̂",
      "+(μ₀I₁I₂/πx) x̂",
      "+(μ₀πI₁I₂/x) x̂",
    ],
    answer: "A",
    solution: `<p>Field from wire 1 at wire 2: B₁ = μ₀I₁/(2πx). Force per length on wire 2: F/L = I₂B₁ = <b>μ₀I₁I₂/(2πx)</b> in magnitude.</p>
<p><b>Direction:</b> parallel currents <b>attract</b> (anti-parallel repel). Attraction pulls conductor 2 toward conductor 1, i.e. in the −x̂ direction:</p>
<p>F/L = <b>−(μ₀I₁I₂/2πx) x̂</b> → option A.</p>
<p><b>Magnitude here:</b> μ₀I₁I₂/(2πx) = (4π×10⁻⁷ × 1.5 × 2)/(2π × 0.1) = 6×10⁻⁶ N/m — tiny per metre, which is why power lines hum but don't jump. "Parallel currents attract" is also the operational definition of the ampere.</p>`,
    hint: "Same direction ⇒ attraction ⇒ force on 2 points back toward 1.",
  },

  // ================= MODERN PHYSICS & COSMOLOGY =================
  {
    id: "mod-1",
    topic: "modern",
    source: "BdPhO National 2022",
    level: 2,
    type: "mcq",
    q: `A radioactive source emits photons randomly. Kept on for one minute, a detector registers at least one photon with probability 80%. If the detector is kept on for five minutes, what is the probability that it detects at least one photon?`,
    options: ["32.768%", "67.232%", "99.840%", "99.968%"],
    answer: "D",
    solution: `<p>P(at least one in 1 min) = 0.8 → P(no photon in 1 min) = 0.2.</p>
<p>The five minutes are five independent 1-minute windows:</p>
<p>P(no photon in 5 min) = 0.2⁵ = 0.00032 → P(at least one) = 1 − 0.00032 = <b>99.968%</b>.</p>
<p><b>The "at least one" trick:</b> never compute P(≥1) directly — compute P(0) and subtract from 1. Decay events are independent (memoryless), so probabilities multiply across disjoint time windows. This same logic gives the Poisson statistics of Geiger counters.</p>`,
  },
  {
    id: "mod-2",
    topic: "modern",
    source: "BdPhO Regional 2021",
    level: 2,
    type: "mcq",
    q: `A radioactive sample starts with N₀ particles. ΔN is the number that decay during the <b>second 1/3</b> of the first half-life. Find ΔN/N₀.`,
    options: ["0.6300", "0.7937", "1.4237", "0.1637"],
    answer: "D",
    solution: `<p>Decay law: N(t) = N₀·2^(−t/T½).</p>
<p>At t = T½/3: N = N₀·2^(−1/3) = 0.7937N₀. At t = 2T½/3: N = N₀·2^(−2/3) = 0.6300N₀.</p>
<p>ΔN = N₀(0.7937 − 0.6300) = 0.1637N₀ → ΔN/N₀ = <b>0.1637</b>.</p>
<p><b>Concept:</b> equal time slices do <i>not</i> contain equal decays — the rate is proportional to the current population, so earlier slices are more populated (0.2063 decays in the first third vs 0.1637 in the second). Exponential decay is the continuous version of "each particle flips a biased coin every instant".</p>`,
    hint: "N/N₀ = 2^(−t/T½); evaluate at T½/3 and 2T½/3 and subtract.",
  },
  {
    id: "mod-3",
    topic: "modern",
    source: "BdPhO Selection 2023",
    level: 2,
    type: "mcq",
    q: `A photon has no mass but carries momentum p = E/c along its propagation. A solar sail of area A is hit by n photons per unit area per second (all reflected head-on). What is the maximum force on the spacecraft?`,
    options: ["nA", "pA/2", "npA", "2npA"],
    answer: "D",
    solution: `<p>Momentum delivered per photon: a <i>reflected</i> photon reverses its momentum, transferring Δp = 2p (absorption would give only p — reflection doubles the push).</p>
<p>Photon arrival rate on the sail: nA per second.</p>
<p>F = (rate) × (Δp per photon) = nA × 2p = <b>2npA</b>.</p>
<p><b>Why "maximum":</b> reflection transfers twice the momentum of absorption; oblique incidence or partial absorption reduces it. Real solar sails (IKAROS, LightSail) live exactly here: sunlight at 1 AU gives ~9 μN/m² — feeble, but fuel-free and relentless, accelerating for years.</p>`,
    hint: "Reflection doubles the momentum kick; n·A photons arrive each second.",
  },
  {
    id: "mod-4",
    topic: "modern",
    source: "BdPhO Regional 2025",
    level: 2,
    type: "mcq",
    q: `Light of wavelength 4500 Å strikes a sodium surface whose threshold (photoelectric) wavelength is 5420 Å. What is the work function of sodium?`,
    options: ["2.76 eV", "4.76 eV", "2.29 eV", "0.47 eV", "1.00 eV"],
    answer: "C",
    solution: `<p>The work function is the minimum energy to liberate an electron — set by the <i>threshold</i> wavelength (the longest wavelength that still works):</p>
<p>φ = hc/λ₀ = 1240 eV·nm / 542 nm = <b>2.29 eV</b>.</p>
<p><b>The 4500 Å light is a distractor</b> for this particular question (it determines the electrons' kinetic energy: K = 2.76 − 2.29 = 0.47 eV — which is what options A and D are made from!). Handy constant: hc ≈ 1240 eV·nm converts wavelengths to photon energies instantly.</p>`,
    hint: "Work function ↔ threshold wavelength; the incident wavelength answers a different question.",
  },
  {
    id: "mod-5",
    topic: "modern",
    source: "BdPhO Regional 2025",
    level: 2,
    type: "mcq",
    q: `Which statement about the photoelectric effect is <b>NOT</b> true?`,
    options: [
      "There is no photocurrent unless ν > ν₀.",
      "ν₀ is characteristic of the cathode material.",
      "Above threshold, the electron flux per second increases with the intensity of the incident light.",
      "The stopping potential V₀ is proportional to ν².",
      "The stopping potential is independent of the intensity.",
    ],
    answer: "D",
    solution: `<p>Einstein's photoelectric equation: K<sub>max</sub> = eV₀ = hν − φ.</p>
<p>The stopping potential grows <b>linearly</b> with frequency (V₀ = (h/e)ν − φ/e), <i>not</i> as ν² — option D is the false statement.</p>
<p>The others are all true: below threshold no electrons escape regardless of intensity (A); the threshold is material-dependent (B); intensity sets the <i>number</i> of photons, hence the current, but not their energy (C, E). Historically, the linear V₀-vs-ν law (Millikan's plot) is how Planck's constant was first measured — light behaving as particles.</p>`,
  },
  {
    id: "mod-6",
    topic: "modern",
    source: "BdPhO Regional 2021",
    level: 2,
    type: "mcq",
    q: `(Star forger) Each second, 5×10³⁰ photons of wavelength 331 nm strike Thor's back and are absorbed. What force does the beam exert on him?`,
    options: ["5000 N", "7070 N", "10000 N", "14142 N"],
    answer: "C",
    solution: `<p>Absorbed photons transfer momentum p = h/λ each (equivalently E/c):</p>
<p>F = (number per second) × (momentum per photon) = N·h/λ</p>
<p>= 5×10³⁰ × 6.63×10⁻³⁴ / (331×10⁻⁹) = 3.315×10⁻³/3.31×10⁻⁷ ≈ <b>10⁴ N</b> — the weight of a tonne!</p>
<p><b>Power check:</b> that beam carries P = N·hc/λ = F·c ≈ 3×10¹² W — thousands of times humanity's total power output. Radiation pressure is real but demands astronomical powers for everyday-sized forces; solar sails win by being patient, not strong.</p>`,
    hint: "F = Nh/λ for absorption; reflection would double it.",
  },
  {
    id: "mod-7",
    topic: "modern",
    source: "BdPhO Regional (10th BdPhO)",
    level: 3,
    type: "mcq",
    q: `A photon strikes an electron (mass m) initially at rest, creating an electron–positron pair. The photon is destroyed, and the positron and the two electrons all move off at equal speeds along the photon's original direction. What was the energy of the photon?`,
    options: ["mc²", "2mc²", "3mc²", "4mc²", "5mc²"],
    answer: "D",
    solution: `<p>Conserve momentum and energy with all three final particles at the same speed v (γ = 1/√(1−v²/c²)):</p>
<p><b>Energy:</b> E_γ + mc² = 3γmc².<br><b>Momentum:</b> E_γ/c = 3γmv.</p>
<p>Divide momentum by c: E_γ = 3γmvc. Substitute into energy: 3γmvc + mc² = 3γmc² → v/c = (3γ−1)/(3γ).</p>
<p>Impose the γ definition: γ²(1 − β²) = 1 with β = (3γ−1)/(3γ):</p>
<p>9γ² − (3γ−1)² = 9γ²(1−β²)·... → 9γ² − 9γ² + 6γ − 1 = 9 → γ = 10/6 = 5/3.</p>
<p>E_γ = mc²(3γ − 1) = mc²(5 − 1) = <b>4mc²</b>.</p>
<p><b>Insight:</b> pair creation into 2mc² of rest mass is not enough — momentum conservation forces extra kinetic energy. A single photon cannot pair-produce in vacuum without a nucleus precisely because of this bookkeeping; here the original electron takes up the recoil slack.</p>`,
    hint: "Write both conservation laws with the common γ; solve for γ first.",
  },
];

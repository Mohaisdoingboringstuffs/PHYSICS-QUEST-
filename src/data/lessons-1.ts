// Lessons part 1: vectors, measurement, mechanics
// Schema: see ./lesson-types.ts. Level tags: A = Classes V-VI basics, B = Classes VII-VIII core, C = Classes IX-X advanced.
import type { Lesson } from "./lesson-types";

// Re-export the canonical types so lessons-2/3/4 and lessons.ts keep resolving their imports.
export type { Lesson, LessonSection } from "./lesson-types";

export const lessons1: Lesson[] = [
  {
    topic: "vectors",
    intro:
      "Vectors are the grammar of olympiad physics: displacements, forces, momenta and fields all carry direction, and nearly every later topic begins by decomposing one. The bank holds 13 direct vector questions, including star separations by the law of cosines, coordinates in rotated frames, and polar-basis velocities, but the real payoff is bigger: every mechanics question is a vector question wearing a costume. This lesson covers addition, components, both products, and how components transform when the coordinate frame rotates.",
    bigPicture: [
      "Decomposing a vector into components converts one two-dimensional problem into two independent one-dimensional problems; this single move powers most of mechanics, projectiles and charged-particle motion.",
      "The dot product encodes projection and work, the cross product encodes area and turning effect (torque, angular momentum); knowing which product a quantity uses tells you its geometry instantly.",
      "Coordinates are optional clothing: rotating the axes or switching to polar form never changes the physics, and invariants such as the magnitude and the dot product are built-in checkpoints for your algebra.",
    ],
    sections: [
      {
        kind: "intro",
        body:
          "Work through the concepts in order: levels A and B give the component machinery used daily, and the two level C sections cover rotated frames and polar unit vectors, which appear in national-round questions. Two worked examples show the law of cosines and a frame rotation in action, and the tips collect the shortcuts that save real minutes. Keep pencil and paper ready: vectors are learned by drawing.",
      },
      {
        kind: "concept",
        title: "Scalars, vectors and how they add",
        level: "A",
        body:
          "A scalar is fixed by a number and a unit (mass, time, energy); a vector also carries a direction (displacement, velocity, force), and reversing the direction reverses its effect. Two vectors add head-to-tail, and the resultant of $\\vec{A}$ and $\\vec{B}$ with angle $\\phi$ between them has magnitude $R = \\sqrt{A^2 + B^2 + 2AB\\cos\\phi}$, which is the law of cosines in disguise because the tail-to-tail angle becomes $180^\\circ - \\phi$ when the vectors are joined head-to-tail. The resultant can be anything from $|A - B|$ (antiparallel vectors) up to $A + B$ (parallel vectors), so questions of the form 'can the resultant equal X' are settled by those two bounds. Subtraction is addition of the reversed vector, so $\\vec{A} - \\vec{B}$ has magnitude $\\sqrt{A^2 + B^2 - 2AB\\cos\\phi}$ with the same angle $\\phi$.",
        formulas: [
          "$R = \\sqrt{A^2 + B^2 + 2AB\\cos\\phi}$ (angle $\\phi$ between the vectors)",
          "$|A - B| \\le R \\le A + B$",
          "$|\\vec{A} - \\vec{B}| = \\sqrt{A^2 + B^2 - 2AB\\cos\\phi}$",
        ],
      },
      {
        kind: "concept",
        title: "Components and unit vectors",
        level: "B",
        body:
          "Choose perpendicular axes and split $\\vec{A}$ into $A_x = A\\cos\\theta$ and $A_y = A\\sin\\theta$, with $\\theta$ measured counterclockwise from the $+x$ axis; then $\\vec{A} = A_x\\hat{i} + A_y\\hat{j} + A_z\\hat{k}$ and the magnitude rebuilds as $A = \\sqrt{A_x^2 + A_y^2 + A_z^2}$. A calculator's arctangent only returns angles between $-90^\\circ$ and $+90^\\circ$, so whenever $A_x < 0$ you must add $180^\\circ$ to recover the true quadrant. A unit vector has length 1 and carries pure direction: $\\hat{A} = \\vec{A}/A$. The projection rule works along any tilted axis, not just $x$ and $y$: the component of $\\vec{A}$ along an axis making angle $\\theta$ with $\\vec{A}$ is $A\\cos\\theta$, which is exactly how a block's weight is split along and perpendicular to an incline.",
        formulas: [
          "$A_x = A\\cos\\theta,\\quad A_y = A\\sin\\theta$",
          "$\\vec{A} = A_x\\hat{i} + A_y\\hat{j} + A_z\\hat{k}$",
          "$A = \\sqrt{A_x^2 + A_y^2 + A_z^2}$",
          "$\\hat{A} = \\frac{\\vec{A}}{A}$",
        ],
      },
      {
        kind: "concept",
        title: "The dot product: projection and work",
        level: "B",
        body:
          "The dot product multiplies two vectors into a scalar: $\\vec{A}\\cdot\\vec{B} = AB\\cos\\theta$, or in components $A_xB_x + A_yB_y + A_zB_z$. Geometrically it is the magnitude of one vector times the projection of the other onto it, so it answers the question 'how much of $\\vec{B}$ points along $\\vec{A}$'. It is positive for acute angles, zero for perpendicular vectors and negative for obtuse ones, which makes $\\vec{A}\\cdot\\vec{B} = 0$ the standard perpendicularity test. Work is the dot product $W = \\vec{F}\\cdot\\vec{d}$, so a force perpendicular to the motion does no work, and $\\vec{A}\\cdot\\vec{A} = A^2$ recovers a magnitude from components.",
        formulas: [
          "$\\vec{A}\\cdot\\vec{B} = AB\\cos\\theta = A_xB_x + A_yB_y + A_zB_z$",
          "$\\cos\\theta = \\frac{\\vec{A}\\cdot\\vec{B}}{AB}$",
          "$W = \\vec{F}\\cdot\\vec{d}$",
        ],
      },
      {
        kind: "concept",
        title: "The cross product: area and the right-hand rule",
        level: "B",
        body:
          "The cross product multiplies two vectors into a third vector perpendicular to both, with magnitude $AB\\sin\\theta$, exactly the area of the parallelogram they span. Its direction comes from the right-hand rule: point your fingers along the first vector, curl them toward the second, and the thumb gives the direction of $\\vec{A}\\times\\vec{B}$. It anticommutes, $\\vec{B}\\times\\vec{A} = -\\vec{A}\\times\\vec{B}$, so order matters, and it is maximal ($AB$) for perpendicular vectors but zero for parallel ones. In components use the determinant expansion below; the defining applications are torque $\\vec{\\tau} = \\vec{r}\\times\\vec{F}$, angular momentum $\\vec{L} = \\vec{r}\\times\\vec{p}$ and the magnetic force $\\vec{F} = q\\vec{v}\\times\\vec{B}$.",
        formulas: [
          "$|\\vec{A}\\times\\vec{B}| = AB\\sin\\theta$",
          "$\\vec{A}\\times\\vec{B} = (A_yB_z - A_zB_y)\\hat{i} + (A_zB_x - A_xB_z)\\hat{j} + (A_xB_y - A_yB_x)\\hat{k}$",
          "$\\hat{i}\\times\\hat{j} = \\hat{k},\\quad \\hat{j}\\times\\hat{k} = \\hat{i},\\quad \\hat{k}\\times\\hat{i} = \\hat{j}$",
        ],
      },
      {
        kind: "concept",
        title: "Rotated frames: how components transform",
        level: "C",
        body:
          "When the coordinate axes are rotated counterclockwise by $\\theta$ while the vector stays fixed, the components change to $A_{x'} = A_x\\cos\\theta + A_y\\sin\\theta$ and $A_{y'} = -A_x\\sin\\theta + A_y\\cos\\theta$; this is called a passive transformation. Because the change is a pure rotation, the magnitude is invariant, $A_x^2 + A_y^2 = A_{x'}^2 + A_{y'}^2$, and dot products come out identical in both frames, which makes them instant checks on your algebra. A powerful strategy is to rotate the frame so the $x'$-axis lies along the vector you care about: its components become $(A, 0)$ and the problem often collapses. For example the point $(1.0\\ \\mathrm{m}, 1.0\\ \\mathrm{m})$ viewed in a frame rotated by $45^\\circ$ reads $(\\sqrt{2}\\ \\mathrm{m}, 0)$, because the point sits exactly on the new axis. A frame rotating with time is non-inertial and demands pseudo-forces such as centrifugal and Coriolis terms; that is the physics hiding behind the extra derivatives of the next section.",
        formulas: [
          "$A_{x'} = A_x\\cos\\theta + A_y\\sin\\theta$",
          "$A_{y'} = -A_x\\sin\\theta + A_y\\cos\\theta$",
          "$A_x^2 + A_y^2 = A_{x'}^2 + A_{y'}^2$ (invariance under rotation)",
        ],
      },
      {
        kind: "concept",
        title: "Polar unit vectors and rates of change",
        level: "C",
        body:
          "At a point with polar coordinates $(r, \\theta)$ the natural basis vectors are $\\hat{r} = \\cos\\theta\\hat{i} + \\sin\\theta\\hat{j}$ (outward) and $\\hat{\\theta} = -\\sin\\theta\\hat{i} + \\cos\\theta\\hat{j}$ (along increasing $\\theta$); unlike $\\hat{i}$ and $\\hat{j}$, they rotate as the particle moves. Differentiating $\\vec{r} = r\\hat{r}$ therefore produces extra terms from the rotating basis, giving velocity $\\vec{v} = \\dot{r}\\hat{r} + r\\dot{\\theta}\\hat{\\theta}$. One more derivative gives $\\vec{a} = (\\ddot{r} - r\\dot{\\theta}^2)\\hat{r} + (r\\ddot{\\theta} + 2\\dot{r}\\dot{\\theta})\\hat{\\theta}$, and the term $-r\\dot{\\theta}^2$ is the inward, centripetal acceleration in disguise. Setting $\\dot{r} = 0$ for motion on a circle of radius $r$ recovers $a = r\\omega^2 = v^2/r$, so polar bookkeeping and circular motion are the same physics.",
        formulas: [
          "$\\hat{r} = \\cos\\theta\\hat{i} + \\sin\\theta\\hat{j},\\quad \\hat{\\theta} = -\\sin\\theta\\hat{i} + \\cos\\theta\\hat{j}$",
          "$\\vec{v} = \\dot{r}\\hat{r} + r\\dot{\\theta}\\hat{\\theta}$",
          "$\\vec{a} = (\\ddot{r} - r\\dot{\\theta}^2)\\hat{r} + (r\\ddot{\\theta} + 2\\dot{r}\\dot{\\theta})\\hat{\\theta}$",
        ],
      },
      {
        kind: "example",
        title: "Separating two stars with the law of cosines",
        level: "B",
        problem:
          "Alkaid and Merak are two stars of the Big Dipper visible from Earth. Alkaid is 138 light-years away, Merak is 77 light-years away, and the angle between their directions in the sky is $25.6^\\circ$. How far apart are the two stars?",
        steps: [
          "The two lines of sight from Earth and the line between the stars form a triangle with sides 138 LY and 77 LY enclosing the angle $25.6^\\circ$.",
          "The law of cosines for the third side gives $d^2 = 138^2 + 77^2 - 2(138)(77)\\cos 25.6^\\circ$.",
          "Evaluate the pieces: $138^2 + 77^2 = 19044 + 5929 = 24973$, and $2(138)(77)\\cos 25.6^\\circ = 21252 \\times 0.9018 \\approx 19165$.",
          "So $d^2 = 24973 - 19165 = 5808$ and $d = \\sqrt{5808} \\approx 76.2$ light-years.",
          "Result: the stars are about 76 light-years apart; the minus sign appears because the third side is the difference of the two position vectors, which corresponds to an angle of $180^\\circ - 25.6^\\circ$ in the addition formula.",
        ],
      },
      {
        kind: "example",
        title: "Reading a point in a rotated frame",
        level: "C",
        problem:
          "A particle sits at $P = (1.0\\ \\mathrm{m}, 1.0\\ \\mathrm{m})$ in standard Cartesian coordinates. A second frame shares the same origin but its axes are rotated counterclockwise by $45^\\circ$. Find the coordinates of $P$ in the rotated frame.",
        steps: [
          "A passive rotation by $\\theta$ maps components as $x' = x\\cos\\theta + y\\sin\\theta$ and $y' = -x\\sin\\theta + y\\cos\\theta$.",
          "With $\\theta = 45^\\circ$ both $\\cos\\theta$ and $\\sin\\theta$ equal $1/\\sqrt{2} \\approx 0.7071$.",
          "Then $x' = (1.0 + 1.0)/\\sqrt{2} = \\sqrt{2} \\approx 1.41\\ \\mathrm{m}$ and $y' = (-1.0 + 1.0)/\\sqrt{2} = 0$.",
          "The geometry agrees: the point $(1, 1)$ lies on the line $y = x$ at exactly $45^\\circ$, so the rotated $x'$-axis passes straight through it.",
          "Result: $P$ reads $(\\sqrt{2}\\ \\mathrm{m}, 0)$ in the rotated frame, confirmed by the invariant magnitude $\\sqrt{1^2 + 1^2} = \\sqrt{(\\sqrt{2})^2 + 0^2} = \\sqrt{2}\\ \\mathrm{m}$.",
        ],
      },
      {
        kind: "tips",
        title: "Vector shortcuts that pay for themselves",
        items: [
          {
            tip: "Zero dot product means perpendicular; zero cross product means parallel (or one vector is zero).",
            why: "$\\vec{A}\\cdot\\vec{B} = AB\\cos\\theta$ vanishes only at $\\theta = 90^\\circ$, while $AB\\sin\\theta$ vanishes only at $\\theta = 0^\\circ$ or $180^\\circ$, so each product is an instant geometry test inside algebra problems.",
          },
          {
            tip: "For a component along any direction, dot with the unit vector: $A_{\\parallel} = \\vec{A}\\cdot\\hat{u}$.",
            why: "$\\hat{u}$ already has magnitude 1, so no division is needed; this one move handles projections onto slopes, ropes and velocity directions.",
          },
          {
            tip: "When a problem says the resultant doubles when one vector doubles, square both sides instead of hunting for the angle.",
            why: "Squaring converts magnitudes into dot products: $|\\vec{P} + 2\\vec{Q}|^2 = 4|\\vec{P} + \\vec{Q}|^2$ expands to $P^2 + 4Q^2 + 4\\vec{P}\\cdot\\vec{Q} = 4P^2 + 4Q^2 + 8\\vec{P}\\cdot\\vec{Q}$, a linear condition on $\\vec{P}\\cdot\\vec{Q}$ with no trigonometry.",
          },
          {
            tip: "Memorize the 3-4-5 triangle as $37^\\circ$ and $53^\\circ$: $\\sin 37^\\circ \\approx 3/5$ and $\\cos 37^\\circ \\approx 4/5$.",
            why: "The exact values are $36.87^\\circ$ and $53.13^\\circ$, and olympiad problems recycle these angles constantly because the components come out as clean fractions.",
          },
          {
            tip: "You may rotate your axes freely: put the $x'$-axis along the most important vector and its perpendicular component vanishes.",
            why: "Rotation preserves magnitudes and dot products, so no physics is lost; incline problems are just this trick applied once, with axes along and across the slope.",
          },
          {
            tip: "In 2D the cross product is the single number $A_xB_y - A_yB_x$, the signed area of the parallelogram spanned by the two vectors.",
            why: "The 2D determinant is a parallelogram area by the shoelace argument, and a triangle spanned by the same vectors takes half of it; the same $|\\vec{r}\\times\\vec{v}|$ quantity makes closest-approach problems (see the mechanics lesson) one line long.",
          },
        ],
      },
      {
        kind: "checkpoint",
        question: "Two vectors have magnitudes 3 and 5. Between which bounds can the magnitude of their resultant lie?",
        options: ["0 and 8", "2 and 8", "3 and 5", "2 and 15"],
        answer: 1,
        explain:
          "The extreme cases are parallel ($3 + 5 = 8$) and antiparallel ($|3 - 5| = 2$); every angle in between gives a resultant strictly inside these bounds.",
      },
      {
        kind: "checkpoint",
        question: "For two nonzero perpendicular vectors, which statement is true?",
        options: [
          "Their dot product is maximum",
          "Their cross product is zero",
          "Their dot product is zero and their cross product magnitude is maximum",
          "Both products are zero",
        ],
        answer: 2,
        explain:
          "$\\cos 90^\\circ = 0$ kills the dot product while $\\sin 90^\\circ = 1$ makes $|\\vec{A}\\times\\vec{B}| = AB$, the largest value it can take.",
      },
      {
        kind: "checkpoint",
        question: "A vector has components (3 m, 4 m). In a frame rotated so the x'-axis points along the vector, the components become:",
        options: ["(5 m, 0)", "(0, 5 m)", "(3 m, 4 m)", "(4 m, 3 m)"],
        answer: 0,
        explain:
          "Rotating the frame to align with the vector leaves its magnitude $\\sqrt{3^2 + 4^2} = 5$ m unchanged but concentrates everything on one axis, giving $(5, 0)$.",
      },
    ],
  },
  {
    topic: "measurement",
    intro:
      "Thirty-two bank questions live here, and they are the cheapest points on the paper: units, significant figures, instrument readings and error rules are pure discipline, and dimensional analysis can eliminate wrong answers with no physics at all. This lesson covers the full chain: SI units and conversions, significant figures, vernier calipers and micrometer screw gauges with least count and zero error, averages and spread, error propagation, and dimensional reasoning up to extracting unknown exponents from a radiation law.",
    bigPicture: [
      "Measurement questions are the fastest marks in a regional round: a least count, a rounding rule or an error-propagation formula is worth a full question and takes thirty seconds.",
      "Dimensional analysis doubles as an answer checker for every other topic: if your expression for a speed does not reduce to $L/T$, no amount of correct physics can save it.",
      "Error analysis is honest bookkeeping: absolute errors ride along with sums and differences, relative errors ride along with products and powers; knowing which is which tells you which measurement to refine.",
    ],
    sections: [
      {
        kind: "intro",
        body:
          "Read the concepts in level order: the A-level material (units, significant figures) is pure scoring, the B-level block (instruments, statistics, errors) is the explicit Syllabus B demand, and the C-level dimensional analysis is the olympiad's cheapest weapon. Both worked examples are real question types from the bank. Every rule here is short enough to memorize and precise enough to argue with.",
      },
      {
        kind: "concept",
        title: "SI units, prefixes and conversions",
        level: "A",
        body:
          "The SI base units are metre, kilogram, second, ampere, kelvin, mole and candela; everything else is built from them, so force is $\\mathrm{kg\\,m/s^2}$ (the newton) and energy is $\\mathrm{kg\\,m^2/s^2}$ (the joule). Convert by multiplying with conversion factors written as fractions so the unwanted units cancel, the factor-label method. A few conversions repay memorization: $1\\ \\mathrm{km/h} = \\frac{5}{18}\\ \\mathrm{m/s}$, $1\\ \\mathrm{g/cm^3} = 1000\\ \\mathrm{kg/m^3}$, $1\\ \\mathrm{L} = 10^{-3}\\ \\mathrm{m^3}$, $1\\ \\mathrm{atm} \\approx 10^5\\ \\mathrm{Pa}$, $1\\ \\mathrm{kWh} = 3.6\\times10^6\\ \\mathrm{J}$ and $1\\ \\mathrm{eV} = 1.6\\times10^{-19}\\ \\mathrm{J}$. Prefixes step in thousands: milli $10^{-3}$, micro $10^{-6}$, nano $10^{-9}$, kilo $10^3$, mega $10^6$, giga $10^9$.",
        formulas: [
          "$1\\ \\mathrm{km/h} = \\frac{5}{18}\\ \\mathrm{m/s}$",
          "$1\\ \\mathrm{g/cm^3} = 10^3\\ \\mathrm{kg/m^3}$",
          "$1\\ \\mathrm{kWh} = 3.6\\times10^6\\ \\mathrm{J}$",
        ],
      },
      {
        kind: "concept",
        title: "Significant figures",
        level: "A",
        body:
          "Count significant figures starting from the first nonzero digit: zeros between nonzero digits count, trailing zeros after a decimal point count, and leading zeros never do. When multiplying or dividing, the result keeps the smallest number of significant figures among the inputs, so $16.3\\ \\mathrm{cm} \\times 4.5\\ \\mathrm{cm} = 73.35$ rounds to $73\\ \\mathrm{cm^2}$ because 4.5 has only two. When adding or subtracting, the result keeps the fewest decimal places among the inputs. When a result is quoted as value plus uncertainty, round the uncertainty first (one significant figure, two if it starts with a 1), then round the value to the same decimal place.",
        formulas: [
          "$16.3\\ \\mathrm{cm} \\times 4.5\\ \\mathrm{cm} = 73\\ \\mathrm{cm^2}$ (two significant figures)",
          "$x = (1.900 \\pm 0.003)\\ \\mathrm{m}$: value and uncertainty share the last decimal place",
        ],
      },
      {
        kind: "concept",
        title: "Vernier calipers and the micrometer screw gauge",
        level: "B",
        body:
          "The least count is the smallest value an instrument can resolve: for a vernier calipers it is one main-scale division divided by the number of vernier divisions, typically $1\\ \\mathrm{mm}/10 = 0.1\\ \\mathrm{mm}$; for a micrometer with pitch $0.5\\ \\mathrm{mm}$ and 50 circular divisions it is $0.5/50 = 0.01\\ \\mathrm{mm}$. A vernier reading is main scale plus the coinciding vernier division times the least count; a micrometer reading is main scale plus the aligned circular-scale division times the least count. If the instrument shows a nonzero value with the jaws fully closed it has a zero error, positive when the vernier or circular zero lies ahead of the reference mark. Keep the signs straight with the definition reading = true + zero error, so the correction always equals minus the zero error.",
        formulas: [
          "$\\mathrm{LC} = \\frac{\\text{smallest main-scale division}}{\\text{number of vernier divisions}}$",
          "$\\text{reading} = \\text{main scale} + (\\text{coinciding division}) \\times \\mathrm{LC}$",
          "$\\text{true value} = \\text{reading} - \\text{zero error}$",
        ],
      },
      {
        kind: "concept",
        title: "Averages and spread: mean, median, mode, standard deviation",
        level: "B",
        body:
          "The mean $\\bar{x} = \\frac{1}{N}\\sum x_i$ uses every reading but is dragged by outliers, while the median (middle value) and the mode (most frequent value) survive a few wild readings, which is why judging panels prefer medians. The variance is the mean squared deviation $\\sigma^2 = \\frac{1}{N}\\sum (x_i - \\bar{x})^2$ (a sample estimate replaces $N$ by $N - 1$), and the standard deviation $\\sigma$ is its square root, the natural ruler for scatter. A theory prediction $x_{th}$ is judged against a measurement $x \\pm \\sigma$ by the displacement in sigmas, $n_\\sigma = |x - x_{th}|/\\sigma$: a theory at 910 s against $950 \\pm 20$ s is displaced by $(950 - 910)/20 = 2$ sigmas, borderline but not fatal. For power-law data, taking logarithms straightens the curve: $\\ln y = b\\ln x + \\ln A$ turns a plot of $\\ln y$ against $\\ln x$ into a straight line whose slope is the exponent $b$.",
        formulas: [
          "$\\bar{x} = \\frac{1}{N}\\sum_{i=1}^{N} x_i$",
          "$\\sigma^2 = \\frac{1}{N}\\sum (x_i - \\bar{x})^2$",
          "$n_\\sigma = \\frac{|x - x_{th}|}{\\sigma}$",
          "$\\ln y = b\\ln x + \\ln A$ (slope gives the power-law exponent $b$)",
        ],
      },
      {
        kind: "concept",
        title: "Errors: types and propagation",
        level: "B",
        body:
          "Systematic errors (zero error, miscalibration, parallax) shift every reading the same way and cannot be cured by repetition; random errors scatter both ways and shrink as $1/\\sqrt{N}$ when $N$ trials are averaged. Accuracy means closeness to the true value (a systematic property), precision means closeness of repeats (a random property). When quantities add or subtract, the absolute errors add in the worst case: for $y = a \\pm b$, $\\Delta y = \\Delta a + \\Delta b$. When quantities multiply or divide, the relative errors add, and a power multiplies the relative error by its exponent, so $y = a^n$ gives $\\Delta y/y = n\\,\\Delta a/a$: a 1 percent error in radius becomes 2 percent in area and 3 percent in volume. This is also why subtracting two nearly equal measurements wrecks precision, because the absolute errors add while the difference itself shrinks.",
        formulas: [
          "$y = a \\pm b \\Rightarrow \\Delta y = \\Delta a + \\Delta b$",
          "$y = \\frac{ab}{c} \\Rightarrow \\frac{\\Delta y}{y} = \\frac{\\Delta a}{a} + \\frac{\\Delta b}{b} + \\frac{\\Delta c}{c}$",
          "$y = a^n \\Rightarrow \\frac{\\Delta y}{y} = n\\frac{\\Delta a}{a}$",
          "$\\text{percentage error} = \\frac{\\Delta y}{y} \\times 100\\%$",
        ],
      },
      {
        kind: "concept",
        title: "Dimensional analysis: checking and deriving formulas",
        level: "C",
        body:
          "Every mechanical quantity reduces to powers of $M$, $L$ and $T$ (plus $I$ and $\\Theta$ for electromagnetism and heat): velocity $LT^{-1}$, force $MLT^{-2}$, energy $ML^2T^{-2}$, pressure $ML^{-1}T^{-2}$, and constants carry dimensions too, with $[G] = M^{-1}L^3T^{-2}$, $[h] = ML^2T^{-1}$, $[\\epsilon_0] = M^{-1}L^{-3}T^4I^2$ and $[\\eta] = ML^{-1}T^{-1}$. An equation is meaningful only if every term has the same dimensions, so a candidate formula with mismatched terms can be rejected in seconds. To derive a form, assume $y = k\\,x^a z^b$, match exponents of $M$, $L$ and $T$, and solve: the pendulum period must be $T = k\\sqrt{L/g}$ with $k$ dimensionless ($k = 2\\pi$ comes from real physics) and no mass dependence. The same exponent matching extracts unknown constants from a given law: in $v(t) = \\frac{\\alpha}{3t} + \\beta t^2 + \\gamma e^{-\\sigma t^3}$ matching dimensions forces $[\\alpha] = LT$, $[\\beta] = LT^{-3}$, $[\\gamma] = LT^{-1}$ and $[\\sigma] = T^{-3}$, because arguments of $e$, $\\ln$ and $\\sin$ must be pure numbers. One warning: dimensions fix the form but not the dimensionless constant, since $\\sqrt{GM/r}$ (orbital speed) and $\\sqrt{2GM/r}$ (escape speed) both pass every dimensional test.",
        formulas: [
          "$[G] = M^{-1}L^3T^{-2},\\quad [h] = ML^2T^{-1},\\quad [\\eta] = ML^{-1}T^{-1}$",
          "$[\\epsilon_0] = M^{-1}L^{-3}T^4I^2$ (from $F = \\frac{q_1q_2}{4\\pi\\epsilon_0 r^2}$)",
          "$T = k\\sqrt{L/g}$ (pendulum, $k = 2\\pi$)",
          "$\\text{Stokes drag } F = 6\\pi\\eta rv$ works dimensionally: $\\eta\\,r\\,v \\to MLT^{-2}$",
        ],
      },
      {
        kind: "example",
        title: "Rounding a result with its uncertainty",
        level: "A",
        problem:
          "A student measures a length by a very precise method and records the result as $1.89999679 \\pm 0.00346$ m. Round the result properly before it goes into the report.",
        steps: [
          "Round the uncertainty first, to one significant figure (two if the leading digit is a 1): $0.00346$ becomes $0.003$.",
          "Round the central value to the same decimal place as the uncertainty: $1.89999679$ becomes $1.900$.",
          "The digits beyond the third decimal are meaningless noise, because the uncertainty declares them already lost.",
          "The relative error is $0.003/1.900 \\approx 0.0016$, about $0.16\\%$, if the report asks for percentage error.",
          "Result: the properly reported measurement is $(1.900 \\pm 0.003)$ m.",
        ],
      },
      {
        kind: "example",
        title: "Dimensions of the Larmor radiation formula",
        level: "C",
        problem:
          "An accelerated electron radiates power $P = K\\,e^{x}a^{y}c^{z}\\epsilon_0^{w}$, where $K$ is dimensionless, $e$ is the electron charge, $a$ its acceleration, $c$ the speed of light and $\\epsilon_0$ the permittivity of free space. Find $x$, $y$, $z$ and $w$.",
        steps: [
          "Collect the dimensions: $[P] = ML^2T^{-3}$, $[e] = IT$, $[a] = LT^{-2}$, $[c] = LT^{-1}$ and $[\\epsilon_0] = M^{-1}L^{-3}T^4I^2$.",
          "The product contributes $M^{-w}$, so matching the single power of $M$ in $[P]$ gives $w = -1$.",
          "Current: only $e$ and $\\epsilon_0$ carry $I$, with total $x + 2w$; setting $x + 2w = 0$ gives $x = 2$.",
          "Time: $x - 2y - z + 4w = -3$ becomes $2 - 2y - z - 4 = -3$, so $2y + z = 1$; length: $y + z - 3w = 2$ becomes $y + z = -1$.",
          "Solving the pair $2y + z = 1$ and $y + z = -1$ gives $y = 2$ and $z = -3$.",
          "Result: $x = 2$, $y = 2$, $z = -3$, $w = -1$, so $P = K e^2a^2/(\\epsilon_0 c^3)$, the Larmor law with $K = 1/6\\pi$.",
        ],
      },
      {
        kind: "tips",
        title: "Measurement tricks and sanity checks",
        items: [
          {
            tip: "Carry units through every step and cancel them like fractions.",
            why: "Units obey algebra, so a wrong conversion (km/h against m/s, grams against kilograms) shows up as a unit mismatch before you finish the arithmetic.",
          },
          {
            tip: "Remember the power rule as 1-2-3: a 1 percent error in radius means 2 percent in area and 3 percent in volume.",
            why: "Area scales as $r^2$ and volume as $r^3$, and $\\Delta y/y = n\\,\\Delta r/r$ multiplies the relative error by the exponent $n$.",
          },
          {
            tip: "Differences of nearly equal numbers are relative-error traps: budget twice the absolute error.",
            why: "Absolute errors add under subtraction while the difference itself shrinks, so the relative error explodes; for independent random errors the combination softens to $\\sqrt{\\Delta a^2 + \\Delta b^2}$, about $\\pm 70$ g for two $\\pm 50$ g weighings.",
          },
          {
            tip: "Judge theory against experiment in sigmas: $n = |x - x_{th}|/\\sigma$.",
            why: "For normally distributed scatter about 95 percent of repeated measurements land within $2\\sigma$, so $n \\le 2$ is consistent while $n \\ge 3$ signals a real discrepancy; $950 \\pm 20$ against 910 sits at exactly $2\\sigma$.",
          },
          {
            tip: "Zero-error sign hook: the instrument lies, and the correction is the lie with the opposite sign.",
            why: "By definition reading = true + zero error, so true = reading minus zero error; a micrometer that reads 0.02 mm when closed has zero error $+0.02$ mm and every reading must be reduced by 0.02 mm.",
          },
          {
            tip: "In multiple choice, kill any equation whose terms cannot be added dimensionally, and demand that $\\sin$, $\\ln$ and $e$ eat pure numbers.",
            why: "Only quantities with identical dimensions may be added, and transcendental functions need dimensionless arguments; both tests are instant and cost zero physics.",
          },
        ],
      },
      {
        kind: "checkpoint",
        question: "Considering significant figures, what is 16.3 cm x 4.5 cm?",
        options: ["73.35 cm^2", "73.4 cm^2", "73 cm^2", "70 cm^2"],
        answer: 2,
        explain:
          "The raw product is 73.35, but 4.5 carries only two significant figures, so the result keeps two: $73\\ \\mathrm{cm^2}$.",
      },
      {
        kind: "checkpoint",
        question: "A micrometer has a zero error of +0.02 mm (it reads 0.02 mm with the jaws closed). On a wire it reads 5.37 mm. The true diameter is:",
        options: ["5.35 mm", "5.37 mm", "5.39 mm", "5.41 mm"],
        answer: 0,
        explain:
          "Reading = true + zero error, so true = $5.37 - 0.02 = 5.35$ mm; the correction always carries the sign opposite to the zero error.",
      },
      {
        kind: "checkpoint",
        question: "Which pair of quantities has the same dimensions?",
        options: [
          "work and power",
          "force and impulse",
          "pressure and energy density",
          "Planck's constant and frequency",
        ],
        answer: 2,
        explain:
          "Pressure is $ML^{-1}T^{-2}$ and energy density is $ML^2T^{-2}/L^3 = ML^{-1}T^{-2}$, the same; impulse $MLT^{-1}$ differs from force $MLT^{-2}$, power differs from work by $1/T$, and $h$ ($ML^2T^{-1}$) differs from frequency ($T^{-1}$).",
      },
    ],
  },
  {
    topic: "mechanics",
    intro:
      "Mechanics is the largest topic in the bank, with 198 questions ranging from one-step free-fall numerics to rolling discs, hinged pipes and velocity-dependent drag, and it feeds directly into work-energy, gravitation and oscillations. The through-line is short: kinematics describes motion, Newton's second law connects motion to forces, and momentum or energy conservation takes over when the forces are unknown or too complicated. This lesson walks the whole chain in level order and closes with the rotation machinery that mirrors everything linear.",
    bigPicture: [
      "Almost every mechanics question is a one-dimensional question in disguise: choose axes along and perpendicular to the motion, decompose with the vectors toolkit, and the two resulting equations are independent.",
      "When forces are unknown, impulsive or hopelessly complicated, switch from $\\vec{F} = m\\vec{a}$ to conservation laws: momentum for collisions and explosions, energy for paths, and never set kinetic energy equal across a collision that sticks.",
      "Rotation is linear mechanics with $m \\to I$ and $F \\to \\tau$: learn the dictionary once and every rolling, spinning or hinged question becomes a familiar linear one.",
    ],
    sections: [
      {
        kind: "intro",
        body:
          "Study the concepts in order: the two A-level sections are the daily bread of regional rounds, the three B-level sections carry most of the question bank, and the C-level section closes with rotation. Then work both examples with pencil and paper, because the closest-approach example shows the relative-velocity method that solves a whole family of pursuit questions and the boat example shows how calculus tames a force that changes with speed. The tips collect the shortcuts that separate a two-minute solution from a ten-minute one.",
      },
      {
        kind: "concept",
        title: "Kinematics in one dimension: graphs, equations, free fall",
        level: "A",
        body:
          "On a position-time graph the slope is velocity; on a velocity-time graph the slope is acceleration and the area under the curve is displacement, while the area under an acceleration-time graph is the change in velocity. For constant acceleration pick the single equation that links your three knowns with the unknown: $v = v_0 + at$, $\\Delta x = v_0 t + \\frac{1}{2}at^2$, $v^2 = v_0^2 + 2a\\,\\Delta x$, and the average velocity $\\frac{v_0 + v}{2}$ gives $\\Delta x$ instantly. Free fall is the special case $a = g \\approx 10\\ \\mathrm{m/s^2}$ downward: released from rest, $v = \\sqrt{2gh}$, and the distances travelled in successive equal time intervals stand in the ratio $1:3:5:7$. Fix a sign convention at the start (down positive for drops, up positive for throws) and keep it to the end, because most lost marks here are sign slips. Relative motion along a line is plain subtraction: two trains approaching head-on close at the sum of their speeds, and a chase closes at the difference.",
        formulas: [
          "$v = v_0 + at$",
          "$\\Delta x = v_0 t + \\frac{1}{2}at^2$",
          "$v^2 = v_0^2 + 2a\\,\\Delta x$",
          "$v = \\sqrt{2gh}$ (fall from rest through height $h$)",
          "$v_{rel} = v_1 - v_2$ (motion along one line)",
        ],
      },
      {
        kind: "concept",
        title: "Mass, density, weight and Newton's laws",
        level: "A",
        body:
          "Density is mass per volume, $\\rho = m/V$; for composite bodies the masses add over the total volume, so a sphere containing a denser core has $\\rho_{avg} = \\frac{\\rho_1 V_1 + \\rho_2 V_2}{V_1 + V_2}$ with each $V$ computed from the geometry. Weight is the gravitational force $mg$ and is distinct from mass, which measures inertia. Newton's second law $\\sum \\vec{F} = m\\vec{a}$ is applied axis by axis after drawing every force: weight down, normal force perpendicular to the surface, tension along the string, friction opposing sliding. A normal force is not automatically $mg$: in a lift accelerating up or down it is $N = m(g \\pm a)$, and it vanishes in free fall. For connected bodies (two blocks over a pulley, a ball dangling from a moving platform) apply the second law to the whole system to get the common acceleration, then isolate one body to expose the internal tension; for an Atwood machine with $m_2 > m_1$, $a = \\frac{(m_2 - m_1)g}{m_1 + m_2}$ and $T = \\frac{2m_1m_2 g}{m_1 + m_2}$.",
        formulas: [
          "$\\rho = \\frac{m}{V}$",
          "$\\rho_{avg} = \\frac{\\rho_1 V_1 + \\rho_2 V_2}{V_1 + V_2}$ (composite body)",
          "$\\sum F = ma$ applied per axis",
          "$N = m(g \\pm a)$ (lift, up positive)",
          "$a = \\frac{(m_2 - m_1)g}{m_1 + m_2},\\quad T = \\frac{2m_1m_2 g}{m_1 + m_2}$ (Atwood machine)",
        ],
      },
      {
        kind: "concept",
        title: "Motion in a plane: relative velocity, projectiles, circular motion",
        level: "B",
        body:
          "Relative velocity chains like vectors, $\\vec{v}_{AC} = \\vec{v}_{AB} + \\vec{v}_{BC}$, so subtract components to express 'B as seen by A'; a river crossed heading straight across takes minimum time, while aiming upstream gives the straight-across path. A projectile is two independent one-dimensional problems, constant horizontal velocity plus free-fall vertical motion, which is why a flare dropped from a plane at 125 m with $g = 10$ falls for $t = \\sqrt{2h/g} = 5$ s and lands 150 m ahead if the plane flies at 30 m/s. For a launch at speed $v$ and angle $\\theta$ over level ground the range is $R = \\frac{v^2\\sin 2\\theta}{g}$, maximal at $\\theta = 45^\\circ$, with complementary angles giving equal range and peak height $\\frac{v^2\\sin^2\\theta}{2g}$. Uniform circular motion at speed $v$ on a radius $r$ changes direction continuously, so the acceleration is $a_c = \\frac{v^2}{r} = \\omega^2 r$ pointed at the centre, with $\\omega = 2\\pi/T$ and $v = \\omega r$. Something real must supply $mv^2/r$ as the inward resultant of forces: friction on a flat curve caps the speed at $\\sqrt{\\mu g r}$, and on a vertical circle a string requires $v \\ge \\sqrt{gr}$ at the top or it goes slack.",
        formulas: [
          "$\\vec{v}_{AC} = \\vec{v}_{AB} + \\vec{v}_{BC}$",
          "$R = \\frac{v^2\\sin 2\\theta}{g},\\quad h_{max} = \\frac{v^2\\sin^2\\theta}{2g}$",
          "$a_c = \\frac{v^2}{r} = \\omega^2 r,\\quad \\omega = \\frac{2\\pi}{T},\\quad v = \\omega r$",
          "$v_{max} = \\sqrt{\\mu g r}$ (flat curve, friction limited)",
          "$v_{top} \\ge \\sqrt{gr}$ (vertical circle on a string)",
        ],
      },
      {
        kind: "concept",
        title: "Friction, inclined planes and equilibrium",
        level: "B",
        body:
          "On an incline of angle $\\theta$ take axes along and perpendicular to the slope: the perpendicular balance gives $N = mg\\cos\\theta$ (not $mg$), and gravity pulls along the slope with $mg\\sin\\theta$. Static friction is a range, $0 \\le f_s \\le \\mu_s N$, self-adjusting to prevent sliding, while kinetic friction is fixed at $f_k = \\mu_k N$ opposing the motion. A block on a rough incline starts to slide when $\\tan\\theta$ exceeds $\\mu_s$, and once moving its acceleration is $g(\\sin\\theta - \\mu_k\\cos\\theta)$. Static equilibrium adds $\\sum \\vec{F} = 0$ on each axis (plus no net torque when rotation is possible), and three coplanar forces in equilibrium must be concurrent and satisfy Lami's theorem, each force proportional to the sine of the angle between the other two. Minimum-force problems live exactly at the verge of slipping: pulling a block with force $F$ at angle $\\theta$ above the horizontal gives $F = \\frac{\\mu mg}{\\cos\\theta + \\mu\\sin\\theta}$, minimized when $\\tan\\theta = \\mu$, yielding $F_{min} = \\frac{\\mu mg}{\\sqrt{1+\\mu^2}}$.",
        formulas: [
          "$N = mg\\cos\\theta$ on an incline",
          "$f_s \\le \\mu_s N,\\quad f_k = \\mu_k N$",
          "$\\tan\\theta > \\mu_s$ to start sliding; then $a = g(\\sin\\theta - \\mu_k\\cos\\theta)$",
          "$\\frac{F_1}{\\sin\\alpha} = \\frac{F_2}{\\sin\\beta} = \\frac{F_3}{\\sin\\gamma}$ (Lami's theorem)",
          "$F_{min} = \\frac{\\mu mg}{\\sqrt{1+\\mu^2}}$ applied at $\\tan\\theta = \\mu$",
        ],
      },
      {
        kind: "concept",
        title: "Momentum, impulse and collisions",
        level: "B",
        body:
          "Momentum $\\vec{p} = m\\vec{v}$ is conserved whenever no net external force acts, and this survives every collision because the enormous collision forces are internal while external impulses are negligible over the tiny contact time. The impulse-momentum theorem $\\vec{J} = \\vec{F}_{avg}\\Delta t = \\Delta\\vec{p}$ explains crumple zones and catching: stretching the stopping time cuts the average force in proportion. For a one-dimensional elastic collision into a stationary target, conservation of momentum and kinetic energy give $v_1' = \\frac{m_1 - m_2}{m_1 + m_2}u_1$ and $v_2' = \\frac{2m_1}{m_1 + m_2}u_1$, so equal masses swap velocities exactly. In a perfectly inelastic collision the bodies stick and move at the centre-of-mass velocity $v_{cm} = \\frac{m_1u_1 + m_2u_2}{m_1 + m_2}$, and the kinetic energy lost is $\\frac{1}{2}\\mu u_{rel}^2$ with reduced mass $\\mu = \\frac{m_1m_2}{m_1 + m_2}$. In two dimensions conserve momentum component by component, and grade any one-dimensional collision by the coefficient of restitution $e = \\frac{v_2' - v_1'}{u_1 - u_2}$ with $e = 1$ elastic and $e = 0$ sticking; when a force varies with time or position, integrate, using $J = \\int F\\,dt$ and, for a position-dependent force, $a = v\\,dv/dx$ (a Category C tool).",
        formulas: [
          "$\\vec{J} = \\Delta\\vec{p} = \\vec{F}_{avg}\\Delta t$",
          "$m_1u_1 + m_2u_2 = m_1v_1' + m_2v_2'$",
          "$v_1' = \\frac{m_1 - m_2}{m_1 + m_2}u_1,\\quad v_2' = \\frac{2m_1}{m_1 + m_2}u_1$ (elastic, target at rest)",
          "$v_{cm} = \\frac{m_1u_1 + m_2u_2}{m_1 + m_2},\\quad \\Delta KE = \\frac{1}{2}\\mu u_{rel}^2$ (sticking)",
          "$e = \\frac{v_2' - v_1'}{u_1 - u_2}$",
          "$a = v\\frac{dv}{dx} = \\frac{F(x)}{m}$ (variable force with position)",
        ],
      },
      {
        kind: "concept",
        title: "Rotational dynamics: torque, moment of inertia, rolling, angular momentum",
        level: "C",
        body:
          "Torque is the turning analogue of force, $\\tau = rF\\sin\\theta$ with $r$ the lever arm and $\\theta$ the angle between them, and rotation obeys $\\tau_{net} = I\\alpha$ with moment of inertia $I = \\sum m_ir_i^2$ measuring how far the mass sits from the axis. Memorize the standard set: hoop $MR^2$, disc or cylinder $\\frac{1}{2}MR^2$, solid sphere $\\frac{2}{5}MR^2$, rod about its centre $\\frac{1}{12}ML^2$ and about its end $\\frac{1}{3}ML^2$, shifting any axis with the parallel-axis theorem $I = I_{cm} + Md^2$. Rolling without slipping welds linear to angular motion through $v = \\omega R$, splits kinetic energy as $\\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$, and rolls a body down an incline with $a = \\frac{g\\sin\\theta}{1 + I/mR^2}$, giving $\\frac{5}{7}g\\sin\\theta$ for a solid sphere, $\\frac{2}{3}$ for a disc and $\\frac{1}{2}$ for a hoop, while the rotational share of the kinetic energy is $\\frac{I/mR^2}{1 + I/mR^2}$, namely $\\frac{2}{7}$, $\\frac{1}{3}$ and $\\frac{1}{2}$. Angular momentum $L = I\\omega$ (for a point mass $\\vec{L} = \\vec{r}\\times\\vec{p}$) is conserved when the net torque is zero, which is why a skater pulling in her arms spins faster as $I$ falls. For hinged objects such as a water pipe swinging on a wall bracket, take torques about the hinge and use $\\tau = I\\alpha$, since the hinge reaction exerts no torque about itself.",
        formulas: [
          "$\\tau = rF\\sin\\theta,\\quad \\tau_{net} = I\\alpha$",
          "$I_{hoop} = MR^2,\\quad I_{disc} = \\frac{1}{2}MR^2,\\quad I_{sphere} = \\frac{2}{5}MR^2,\\quad I_{rod,centre} = \\frac{1}{12}ML^2$",
          "$I = I_{cm} + Md^2$ (parallel-axis theorem)",
          "$v = \\omega R,\\quad KE = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$ (rolling)",
          "$a = \\frac{g\\sin\\theta}{1 + I/mR^2}$ (rolling down an incline)",
          "$L = I\\omega = \\text{const}$ when $\\tau_{net} = 0$",
        ],
      },
      {
        kind: "example",
        title: "Closest approach of two cars (relative velocity)",
        level: "B",
        problem:
          "Two straight highways cross at right angles. At noon, car A is 5 km west of the crossing driving east at 80 km/h, and car B is 6 km south of the crossing driving north at 60 km/h. Find the shortest distance between the cars and when it occurs.",
        steps: [
          "Put the crossing at the origin: A starts at $(-5, 0)$ km with velocity $(80, 0)$ km/h, and B starts at $(0, -6)$ km with velocity $(0, 60)$ km/h.",
          "Track B relative to A: $\\vec{r} = (5, -6)$ km and $\\vec{v} = \\vec{v}_B - \\vec{v}_A = (-80, 60)$ km/h, whose magnitude is 100 km/h.",
          "Relative motion is uniform and straight, so the closest distance is the perpendicular distance from the origin to the relative path, $d = |\\vec{r}\\times\\vec{v}|/|\\vec{v}|$.",
          "In 2D the cross product is $r_xv_y - r_yv_x = 5(60) - (-6)(-80) = 300 - 480 = -180$, so $d = 180/100 = 1.8$ km.",
          "The time of closest approach is $t = -\\frac{\\vec{r}\\cdot\\vec{v}}{|\\vec{v}|^2} = -\\frac{5(-80) + (-6)(60)}{100^2} = \\frac{760}{10000} = 0.076$ h, about 4.6 minutes.",
          "Result: the cars never come closer than 1.8 km, reached about 4 minutes 36 seconds after noon.",
        ],
      },
      {
        kind: "example",
        title: "A boat fighting linear drag (variable force)",
        level: "C",
        problem:
          "A 100 kg motorboat glides at 4 m/s when its engine cuts out. Water drag is proportional to speed, $F = -cv$ with $c = 25$ kg/s. Find the speed 4 s later and the total distance the boat travels before effectively stopping.",
        steps: [
          "Newton's second law gives $m\\frac{dv}{dt} = -cv$; separating variables, $\\frac{dv}{v} = -\\frac{c}{m}dt$.",
          "Integrating from $v_0$ to $v$ gives $\\ln\\frac{v}{v_0} = -\\frac{c}{m}t$, so $v(t) = v_0 e^{-ct/m}$.",
          "The time constant is $m/c = 100/25 = 4$ s, so at $t = 4$ s the speed is $v = 4e^{-1} \\approx 1.47$ m/s.",
          "Distance is the integral of speed: $x(t) = \\int_0^t v\\,dt = \\frac{v_0 m}{c}\\left(1 - e^{-ct/m}\\right)$.",
          "As $t$ grows the distance approaches $\\frac{v_0 m}{c} = 4 \\times 100/25 = 16$ m.",
          "Result: the boat keeps 37 percent of its speed after every 4 s interval (one e-folding) and coasts 16 m in total, never quite stopping.",
        ],
      },
      {
        kind: "tips",
        title: "Mechanics tricks that beat brute force",
        items: [
          {
            tip: "Free fall from rest: distances in successive equal intervals are in the ratio 1:3:5:7, and $v = \\sqrt{2gh}$ skips finding the time.",
            why: "$s = \\frac{1}{2}gt^2 \\propto t^2$ makes the per-interval distances the differences of squares $1, 3, 5, ...$, and $v^2 = v_0^2 + 2gh$ with $v_0 = 0$ eliminates $t$ entirely.",
          },
          {
            tip: "Any minimum-force or just-starts-to-slide question sits exactly at $f_s = \\mu_s N$; pull at $\\tan\\theta = \\mu$ above the horizontal to make friction weakest.",
            why: "Tilting the pull upward shrinks the normal force $N = mg - F\\sin\\theta$ and with it the friction budget; maximizing $\\cos\\theta + \\mu\\sin\\theta$ gives $\\sqrt{1+\\mu^2}$ and $F_{min} = \\mu mg/\\sqrt{1+\\mu^2}$.",
          },
          {
            tip: "Equal masses in an elastic head-on collision swap velocities: the incoming ball stops dead.",
            why: "$v_1' = \\frac{m_1 - m_2}{m_1 + m_2}u_1$ vanishes when $m_1 = m_2$; the same fact explains the pulse travelling through a row of touching equal balls in a Newton's cradle.",
          },
          {
            tip: "For a sticking collision skip the algebra: the energy lost is $\\frac{1}{2}\\mu u_{rel}^2$ with $\\mu = \\frac{m_1m_2}{m_1 + m_2}$.",
            why: "The centre-of-mass kinetic energy $\\frac{1}{2}(m_1+m_2)v_{cm}^2$ never changes in a collision, so everything above it, exactly $\\frac{1}{2}\\mu u_{rel}^2$, is what deformation and heat can absorb.",
          },
          {
            tip: "Rolling races depend only on $I/mR^2$: sphere beats disc beats hoop, whatever their masses and radii.",
            why: "$a = \\frac{g\\sin\\theta}{1 + I/mR^2}$ and the rotational energy share $\\frac{I/mR^2}{1+I/mR^2}$ depend only on the shape factors $\\frac{2}{5}$, $\\frac{1}{2}$ and $1$, so mass and radius cancel.",
          },
          {
            tip: "Read graphs by slope and area: slope of x-t is $v$, slope of v-t is $a$, area under v-t is displacement, area under F-x is work.",
            why: "Each is a definition ($v = dx/dt$, $a = dv/dt$, $W = \\int F\\,dx$) in graphical form, and they hold for curved graphs too, which is exactly how variable-force questions are meant to be done fast.",
          },
        ],
      },
      {
        kind: "checkpoint",
        question: "A uniform solid disc rolls without slipping. What fraction of its total kinetic energy is rotational?",
        options: ["1/2", "1/3", "2/7", "2/5"],
        answer: 1,
        explain:
          "With $I = \\frac{1}{2}mR^2$ and $v = \\omega R$, the rotational share is $\\frac{I/mR^2}{1 + I/mR^2} = \\frac{1/2}{3/2} = \\frac{1}{3}$; a hoop gives $1/2$ and a solid sphere $2/7$.",
      },
      {
        kind: "checkpoint",
        question: "You stand on a bathroom scale in a lift accelerating downward at g/2. The scale reads:",
        options: ["mg", "mg/2", "3mg/2", "zero"],
        answer: 1,
        explain:
          "Taking downward as positive, $mg - N = m(g/2)$, so $N = mg/2$; a scale reads the normal force, not the weight.",
      },
      {
        kind: "checkpoint",
        question: "A 2 kg ball moving at 3 m/s hits a stationary 2 kg ball head-on in an elastic collision. After the collision:",
        options: [
          "both move at 1.5 m/s",
          "the first stops and the second moves off at 3 m/s",
          "both rebound",
          "both stop",
        ],
        answer: 1,
        explain:
          "Equal masses exchange velocities in an elastic head-on collision: $v_1' = \\frac{m_1 - m_2}{m_1+m_2}u_1 = 0$ and $v_2' = u_1$.",
      },
    ],
  },
];

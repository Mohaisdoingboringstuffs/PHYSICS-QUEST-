// Lessons part 2: work-energy, gravitation, oscillation, fluids
// Interactive lesson format, conforming to src/data/lesson-types.ts
import type { Lesson } from "./lesson-types";

export const lessons2: Lesson[] = [
  {
    topic: "work-energy",
    intro:
      "Energy methods turn force problems into bookkeeping: instead of following forces along a complicated path, you compare the energy budget at the start and at the end, and friction merely charges a fee you can compute in one line. This lesson builds everything the question bank uses: work by a constant force, kinetic energy with the work-energy theorem, power, potential energy with conservation of mechanical energy, the exact accounting of frictional heat, and finally the potential-energy curve that classifies equilibria and predicts small oscillations.",
    bigPicture: [
      "Energy is a conserved scalar, so kinetic and potential contributions from different forces add inside a single equation; that is why energy methods survive complicated geometry that defeats free-body diagrams.",
      "The work-energy theorem is the bridge between the force picture and the momentum picture: net work changes kinetic energy while impulse changes momentum, and bullet-into-block problems need both, in that order.",
      "The potential-energy curve connects forward to the oscillation topic: every stable minimum of $U(x)$ behaves like a spring of constant $k_{eff} = U''(x_0)$, the idea behind molecular vibrations and the small-oscillation questions in the national papers.",
    ],
    sections: [
      {
        kind: "intro",
        body:
          "We climb from Category A to Category C in seven steps. First come the two Category A pillars: work by a constant force, and kinetic energy with the work-energy theorem. Then the Category B material: power, potential energy with conservation of mechanical energy, and the fate of energy when friction acts. The Category C ideas close the concepts: variable forces read off F-x graphs, and stable or unstable equilibrium extracted from a potential-energy function $U(x)$. Two fully worked numerical examples follow, then six working tricks and three quick checkpoints.",
      },
      {
        kind: "concept",
        title: "Work by a constant force",
        level: "A",
        body:
          "Work measures energy transferred by a force acting through a displacement: $W = \\vec{F}\\cdot\\vec{d} = Fd\\cos\\theta$, with $\\theta$ the angle between force and displacement. Only the force component along the motion counts, so a normal force on a level floor, string tension in uniform circular motion, and gravity acting on a horizontally moving load all do exactly zero work. Work is a signed scalar: positive when the force helps the motion, negative when it opposes it. When several forces act, each does its own work and the total is the algebraic sum.",
        formulas: [
          "W = \\vec{F}\\cdot\\vec{d} = Fd\\cos\\theta",
          "1\\ \\mathrm{J} = 1\\ \\mathrm{N\\,m}",
        ],
      },
      {
        kind: "concept",
        title: "Kinetic energy and the work-energy theorem",
        level: "A",
        body:
          "Kinetic energy is the energy of motion, $KE = \\tfrac12 mv^2$: always positive and quadratic in speed, so doubling the speed quadruples the kinetic energy. The work-energy theorem says the NET work of all forces equals the change in kinetic energy, $W_{net} = \\Delta KE$; it is Newton's second law integrated along the path, which is why it needs no clock, and you can find the speed at the bottom of a hill without ever computing the acceleration. Apply it to one force at a time when you want that force's contribution, and to all forces together when you want the final speed.",
        formulas: [
          "KE = \\tfrac12 mv^2",
          "W_{net} = \\Delta KE = \\tfrac12 mv^2 - \\tfrac12 mv_0^2",
        ],
      },
      {
        kind: "concept",
        title: "Power",
        level: "B",
        body:
          "Power is the rate of energy transfer: instantaneous $P = \\vec{F}\\cdot\\vec{v}$ and average $P_{avg} = W/\\Delta t$, measured in watts ($1\\ \\mathrm{W} = 1\\ \\mathrm{J/s}$). The $\\vec{F}\\cdot\\vec{v}$ form explains a car's top speed, fixed where engine power equals drag force times speed, and the crane rule $P = mgv$ for lifting at constant speed. A machine delivering constant power pushes with the force $F = P/v$, which falls as the speed rises; since the energy delivered in time $t$ is simply $Pt$, constant-power problems collapse to $Pt = \\Delta KE + \\Delta U$. The kilowatt-hour on an electricity bill is a unit of energy ($3.6\\times10^6$ J), not power.",
        formulas: [
          "P = \\vec{F}\\cdot\\vec{v},\\qquad P_{avg} = \\frac{W}{\\Delta t}",
          "\\text{constant power: } Pt = \\Delta KE + \\Delta U",
        ],
      },
      {
        kind: "concept",
        title: "Potential energy and conservation",
        level: "B",
        body:
          "For forces that depend only on position — gravity near Earth, universal gravitation, ideal springs — you can define a potential energy whose DECREASE equals the work the force does: $W_{cons} = -\\Delta U$. The three standard stores are $U_g = mgh$, $U_{spring} = \\tfrac12 kx^2$ and $U_{grav} = -GMm/r$; only differences in $U$ are physical, so place the zero wherever it simplifies the algebra. When only conservative forces act, mechanical energy is conserved: $KE_i + U_i = KE_f + U_f$. This single equation solves falls, pendulum swings, loop-the-loop (minimum top speed $\\sqrt{gr}$) and spring launches without any force diagram.",
        formulas: [
          "U_g = mgh,\\qquad U_{spring} = \\tfrac12 kx^2,\\qquad U_{grav} = -\\frac{GMm}{r}",
          "KE_i + U_i = KE_f + U_f",
        ],
      },
      {
        kind: "concept",
        title: "Friction, heat and honest bookkeeping",
        level: "B",
        body:
          "Kinetic friction converts mechanical energy into thermal energy in an exact amount: $Q = f_k d$, where $d$ is the distance the surfaces slide RELATIVE to each other. The full ledger reads $KE_i + U_i = KE_f + U_f + f_k d$: friction destroys no energy, only usable mechanical energy. When both objects move — a bullet embedding in a block, a crate on an accelerating belt — the heat is $f_k$ times the relative sliding distance, which can exceed the distance travelled by either object alone. And when a collision is inelastic, momentum gives the common speed first; energy conservation applies only after the crash is over.",
        formulas: [
          "KE_i + U_i = KE_f + U_f + f_k d",
          "Q = f_k \\times \\text{relative sliding distance}",
        ],
      },
      {
        kind: "concept",
        title: "Variable forces, F-x graphs and equilibrium from U(x)",
        level: "C",
        body:
          "For a force that varies with position, the work is the area under the F-x curve, $W = \\int F\\,dx$; a linearly varying force is handled with the average, $W = \\tfrac12(F_i + F_f)\\,\\Delta x$, and a spring force integrates to $\\tfrac12 kx^2$. When you know the potential energy instead, the force is minus the slope, $F = -dU/dx$, and the total energy $E = \\tfrac12 mv^2 + U(x)$ draws a horizontal line on the $U(x)$ graph: motion is allowed only where the line lies above the curve, and turning points sit where it touches. Points of zero slope are equilibria — a minimum of $U$ is stable, a maximum is unstable — and small displacements from a stable minimum oscillate at $\\omega = \\sqrt{U''(x_0)/m}$.",
        formulas: [
          "W = \\int_{x_i}^{x_f} F\\,dx = \\text{area under the } F\\text{-}x \\text{ graph}",
          "F = -\\frac{dU}{dx},\\qquad \\text{stable at } x_0:\\ U'(x_0) = 0,\\ U''(x_0) > 0",
          "\\omega_{small} = \\sqrt{\\frac{U''(x_0)}{m}}",
        ],
      },
      {
        kind: "example",
        title: "Rough incline, start to finish",
        level: "B",
        problem:
          "A 2.0 kg block slides from rest down a rough incline of length 5.0 m whose top end is 3.0 m higher than the bottom end. The coefficient of kinetic friction is 0.25 and $g = 10\\ \\mathrm{m/s^2}$. Find the speed at the bottom and the heat generated along the way.",
        steps: [
          "Gravity's work depends only on the vertical drop, $W_g = mgh = 2.0\\times10\\times3.0 = 60$ J.",
          "The 3-4-5 geometry gives $\\cos\\theta = 4/5$, so the normal force is $N = mg\\cos\\theta = 2.0\\times10\\times0.8 = 16$ N and kinetic friction is $f_k = \\mu N = 0.25\\times16 = 4.0$ N.",
          "Friction opposes 5.0 m of sliding and therefore does $W_f = -4.0\\times5.0 = -20$ J of work.",
          "The net work is $60 - 20 = 40$ J, which equals the kinetic energy at the bottom: $\\tfrac12\\times2.0\\times v^2 = 40$ gives $v^2 = 40$ and $v = \\sqrt{40} \\approx 6.3$ m/s.",
          "The heat generated is exactly the mechanical energy friction removed, $Q = f_k d = 4.0\\times5.0 = 20$ J, which the ledger confirms as $60 - 40 = 20$ J.",
        ],
      },
      {
        kind: "example",
        title: "Reading stability off a potential-energy curve",
        level: "C",
        problem:
          "A particle of mass 0.50 kg moves along the x-axis under the potential energy $U(x) = 2x^2 - \\tfrac14 x^4$, with $U$ in joules and $x$ in metres. Find the equilibrium points and their stability, the angular frequency of small oscillations about the stable point, and the turning points of a particle whose total energy is 2.0 J.",
        steps: [
          "The force is the negative slope of the potential, $F = -dU/dx = -(4x - x^3) = x^3 - 4x$, which vanishes at $x = 0$ and $x = \\pm2$ m.",
          "The curvature is $U'' = 4 - 3x^2$: at $x = 0$ it equals $+4 > 0$ (a minimum, stable), while at $x = \\pm2$ it equals $4 - 12 = -8 < 0$ (maxima, unstable).",
          "Near the minimum, $U \\approx U(0) + \\tfrac12 U''(0)x^2 = 2x^2$, so the effective spring constant is $k_{eff} = U''(0) = 4$ N/m.",
          "The small-oscillation angular frequency is $\\omega = \\sqrt{k_{eff}/m} = \\sqrt{4/0.5} = \\sqrt{8} \\approx 2.8$ rad/s, a period of $T = 2\\pi/\\sqrt{8} \\approx 2.2$ s.",
          "Turning points for $E = 2.0$ J lie where the kinetic energy vanishes, that is where $U(x) = 2$: solving $2x^2 - x^4/4 = 2$ gives $x^2 = 4 \\pm 2\\sqrt{2}$.",
          "A particle inside the central well therefore turns at $x \\approx \\pm1.08$ m and can never cross the 4 J barriers at $x = \\pm2$ m, while the outer pair of turning points $x \\approx \\pm2.61$ m belongs to the unbounded region beyond the hills.",
        ],
      },
      {
        kind: "tips",
        title: "Tricks that save minutes",
        items: [
          {
            tip: "Delete zero-work forces from the ledger immediately: normal forces on fixed floors, string tension in circular motion, the magnetic force, and gravity during horizontal motion.",
            why: "Work needs a force component along the displacement, $\\cos 90° = 0$; removing these forces at the start halves the bookkeeping and prevents sign slips later.",
          },
          {
            tip: "Close the friction ledger with $Q = E_{mech,initial} - E_{mech,final}$, and count the sliding distance as the RELATIVE distance between surfaces.",
            why: "Friction acts at the interface and heats both surfaces; in a bullet-into-block problem the sliding distance is the penetration depth, not the block's recoil, and the difference can be a factor of several.",
          },
          {
            tip: "For any linearly varying force, use the average: $W = \\tfrac12(F_i + F_f)\\,\\Delta x$.",
            why: "The F-x graph is then a trapezoid whose area is mean force times interval — the integral of a linear function is its average value, so no calculus is needed.",
          },
          {
            tip: "In constant-power problems, write $Pt = \\Delta KE + \\Delta U$ first and only compute $F = P/v$ if the force itself is asked.",
            why: "$dW = P\\,dt$ integrates to $Pt$ in one step, whereas $F = P/v$ diverges as $v \\to 0$, which is a common source of confusion at the initial instant.",
          },
          {
            tip: "Minimum work to tip an object over an edge equals $mg$ times the rise of its centre of mass to the highest point of the tipping arc.",
            why: "Tipping quasi-statically means moving through positions of stable equilibrium; the hardest point is where the centre of mass sits directly above the pivot edge, so the energy barrier is $mg\\,\\Delta h_{cm}$ — exactly the tetrahedron-tipping questions in the bank.",
          },
          {
            tip: "Classify equilibria by eye from the $U(x)$ graph: flat spots are equilibria, valleys stable, peaks unstable, and the well curvature gives the wiggle frequency $\\sqrt{U''/m}$ directly.",
            why: "Since $F = -dU/dx$, zero slope means zero force, and a Taylor expansion $U \\approx U(x_0) + \\tfrac12 U''(x_0)(x-x_0)^2$ shows every valley is a spring of constant $U''(x_0)$.",
          },
        ],
      },
      {
        kind: "checkpoint",
        question:
          "A ball is whirled at constant speed on a string in a horizontal circle. How much work does the tension do during one full revolution?",
        options: [
          "Zero",
          "Tension times the circumference",
          "Equal to the ball's kinetic energy",
          "Impossible to tell without the radius",
        ],
        answer: 0,
        explain:
          "The tension is centripetal, always perpendicular to the velocity, so $\\cos\\theta = 0$ at every instant. The kinetic energy is constant, and the work-energy theorem then demands zero net work.",
      },
      {
        kind: "checkpoint",
        question:
          "A machine delivers constant power $P$ to a particle of mass $m$ starting from rest, with no resistance. The kinetic energy after time $t$ is",
        options: ["$Pt$", "$Pt/2$", "$2Pt$", "$Pt/m$"],
        answer: 0,
        explain:
          "Constant power means energy flows in at rate $P$, so in time $t$ the machine supplies $Pt$ and, with no losses, all of it becomes kinetic energy. The speed follows from $\\tfrac12 mv^2 = Pt$.",
      },
      {
        kind: "checkpoint",
        question:
          "A particle moves in a potential $U(x)$ that has a smooth minimum at $x_0$. If the particle is displaced slightly from $x_0$ and released, it will",
        options: [
          "Stay at the new position",
          "Move away and never return",
          "Oscillate about $x_0$",
          "Stop after half an oscillation",
        ],
        answer: 2,
        explain:
          "A minimum of $U$ is a stable equilibrium: the force $F = -dU/dx$ points back toward $x_0$ from both sides, so small disturbances produce small oscillations with $\\omega = \\sqrt{U''(x_0)/m}$.",
      },
    ],
  },
  {
    topic: "gravitation",
    intro:
      "One law, $F = Gm_1m_2/r^2$, governs the falling apple, the Moon, every satellite overhead and every star in the galaxy. This lesson climbs the ladder Newton built: from weight and $g$ near the surface, through the shell theorem that lets a whole planet act like a point mass, to apparent weight in lifts and orbiting spacecraft, circular orbits, escape velocity, gravitational potential energy at astronomical distances, and Kepler's three laws. The question bank probes every rung, from quick weight-on-the-Moon items to tunnel-through-the-planet and density-scaling problems.",
    bigPicture: [
      "Gravitation is the paradigm of a conservative inverse-square attraction: everything here about fields, potentials and orbits transfers directly to electric forces between charges, where the same $1/r^2$ law appears with the sign flipped for repulsion.",
      "The shell theorem is why spherically symmetric planets, stars and shells may be replaced by point masses outside, and its inside-a-shell consequences (zero field, constant potential) decide the whole family of hollow-planet and nested-shell questions.",
      "Escape velocity and orbital energy tie back to the work-energy lesson (energy bookkeeping with the potential $-GMm/r$) and forward to oscillation: a straight tunnel through a uniform planet has a linear restoring force, so the falling mass executes SHM.",
    ],
    sections: [
      {
        kind: "intro",
        body:
          "The concepts run from A to C. Category A: weight versus mass and the meaning of $g$. Category B: Newton's universal law with the shell theorem, and apparent weight in accelerating lifts and orbiting spacecraft. Category C: circular orbits with their speed, period and energy, escape velocity together with far-field potential energy, and Kepler's laws. Two worked examples follow — a scale in a lift, then a complete orbit-at-altitude calculation — and the lesson closes with six tricks and three checkpoints.",
      },
      {
        kind: "concept",
        title: "Weight, mass and the value of g",
        level: "A",
        body:
          "Mass measures the amount of matter in kilograms and is the same everywhere; weight is the gravitational force on it, $W = mg$ in newtons, and changes from place to place. Near Earth's surface $g = GM/R^2 \\approx 9.8\\ \\mathrm{m/s^2}$, so a 60 kg person weighs about 590 N on Earth but only one sixth of that on the Moon, while the mass stays 60 kg. Because $g = GM/R^2$, knowing any planet's mass and radius fixes its surface gravity — and for planets of equal density, $g \\propto R$. Different masses fall with the same acceleration because weight itself is proportional to mass, so $m$ cancels out of $ma = mg$.",
        formulas: [
          "W = mg,\\qquad g = \\frac{GM}{R^2}",
          "\\text{fixed density: } g = \\frac{4\\pi}{3}G\\rho R \\propto R",
        ],
      },
      {
        kind: "concept",
        title: "Newton's law of universal gravitation and the shell theorem",
        level: "B",
        body:
          "Every pair of point masses attracts along their line of centres with $F = Gm_1m_2/r^2$, where $G = 6.67\\times10^{-11}\\ \\mathrm{N\\,m^2/kg^2}$. The shell theorem does the heavy lifting for extended bodies: a uniform spherical shell attracts external masses exactly as if all its mass sat at its centre, while the field INSIDE the shell is exactly zero. Stacking shells then shows that outside any spherically symmetric planet the field is $GM/r^2$ with all mass as if concentrated at the centre, while inside a uniform planet only the mass within radius $r$ pulls, giving $g(r) = g_s\\,r/R$: the field grows linearly from zero at the centre to $g_s$ at the surface.",
        formulas: [
          "F = \\frac{Gm_1m_2}{r^2},\\qquad G = 6.67\\times10^{-11}\\ \\mathrm{N\\,m^2/kg^2}",
          "g(r) = \\frac{GM}{r^2}\\ (r \\ge R),\\qquad g(r) = g_s\\frac{r}{R}\\ (r < R)",
        ],
      },
      {
        kind: "concept",
        title: "Apparent weight: lifts, satellites and free fall",
        level: "B",
        body:
          "What you feel as weight is the normal force $N$ pushing up on you, not gravity itself. In a lift accelerating with $a$ (upward positive), Newton's law gives $N - mg = ma$, so $N = m(g + a)$: heavier when accelerating upward, lighter when accelerating downward, and exactly zero in free fall. An orbiting spacecraft is in permanent free fall — gravity there is still about 90 percent of its surface value — but it is entirely spent providing the centripetal acceleration $v^2/r$, so everything inside falls together and floats. The same apparent-weight bookkeeping handles ropes, floors and spring balances in any accelerating frame.",
        formulas: [
          "N = m(g \\pm a)\\ \\text{(lift or accelerating support)}",
          "\\text{orbit: } \\frac{GMm}{r^2} = \\frac{mv^2}{r}\\ \\Rightarrow\\ \\text{apparent weight zero}",
        ],
      },
      {
        kind: "concept",
        title: "Circular orbits: speed, period and energy",
        level: "C",
        body:
          "For a circular orbit of radius $r$ around mass $M$, gravity supplies the centripetal force: $GMm/r^2 = mv^2/r$, so $v = \\sqrt{GM/r}$, set by the central mass and the radius alone, independent of the satellite's own mass. The period follows from $T = 2\\pi r/v$, giving Kepler's scaling $T^2 = 4\\pi^2 r^3/(GM)$. The total orbital energy is $E = \\tfrac12 mv^2 - GMm/r = -GMm/(2r)$: negative for a bound orbit, with the kinetic energy equal to minus half the potential energy. Larger orbits are slower ($v \\propto r^{-1/2}$) yet take longer ($T \\propto r^{3/2}$), and raising a satellite to a bigger orbit needs net input energy even though the orbital speed drops.",
        formulas: [
          "v = \\sqrt{\\frac{GM}{r}},\\qquad T = 2\\pi\\sqrt{\\frac{r^3}{GM}}",
          "E_{orb} = \\tfrac12 mv^2 - \\frac{GMm}{r} = -\\frac{GMm}{2r}",
        ],
      },
      {
        kind: "concept",
        title: "Escape velocity and gravitational potential energy",
        level: "C",
        body:
          "Gravitational potential energy with its zero at infinity is $U = -GMm/r$; the negative sign means a bound object must GAIN energy to escape. Escape velocity is the launch speed that arrives at infinity with nothing left: $\\tfrac12 mv_e^2 = GMm/R$, giving $v_e = \\sqrt{2GM/R} = \\sqrt{2gR}$, about 11.2 km/s for Earth, independent of launch direction and of the projectile's mass. Two ratios are worth memorising: $v_e = \\sqrt{2}\\,v_{orb}$ at the same radius, and for a planet of fixed density $v_e \\propto R$, which decides the jump-off-a-small-planet questions. A projectile launched with a fraction of $v_e$ simply climbs until its kinetic energy runs out and then falls back.",
        formulas: [
          "U = -\\frac{GMm}{r}",
          "v_e = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2gR} \\approx 11.2\\ \\mathrm{km/s}\\ \\text{(Earth)}",
        ],
      },
      {
        kind: "concept",
        title: "Kepler's laws",
        level: "C",
        body:
          "Kepler's three laws describe every two-body gravitational orbit. First, orbits are ellipses with the central body at one focus. Second, the line from the central body sweeps equal areas in equal times — angular momentum conservation, so the satellite moves fastest at perigee and slowest at apogee, with $v r$ constant exactly at those two endpoints. Third, $T^2 \\propto a^3$ where $a$ is the semi-major axis, with $T = 2\\pi\\sqrt{a^3/(GM)}$, the circular-orbit formula with $r$ replaced by $a$. Total energy is constant along the ellipse too: $\\tfrac12 mv^2 - GMm/r = -GMm/(2a)$ at every point, which links speed and distance in one line.",
        formulas: [
          "T^2 = \\frac{4\\pi^2}{GM}\\,a^3",
          "\\text{apsides: } v_p\\,r_p = v_a\\,r_a",
          "\\tfrac12 mv^2 - \\frac{GMm}{r} = -\\frac{GMm}{2a}\\ \\text{(any point of the ellipse)}",
        ],
      },
      {
        kind: "example",
        title: "A scale in a lift",
        level: "B",
        problem:
          "A 50 kg student stands on a bathroom scale inside a lift ($g = 10\\ \\mathrm{m/s^2}$). During one phase of the ride the scale reads 550 N, during a later phase 450 N. Find the acceleration in each phase, and what the scale reads if the cable snaps and the lift falls freely.",
        steps: [
          "The true weight is $mg = 50\\times10 = 500$ N, so the first reading of 550 N sits 50 N above it.",
          "Newton's second law along the vertical gives $N - mg = ma$, hence $a = (550 - 500)/50 = +1.0\\ \\mathrm{m/s^2}$: the lift is accelerating upward.",
          "The later reading of 450 N gives $a = (450 - 500)/50 = -1.0\\ \\mathrm{m/s^2}$: the acceleration points downward, which could be an upward-moving lift slowing down or a downward-moving lift speeding up — the scale cannot tell which.",
          "With the cable snapped, lift and student fall freely with $a = -g$, so $N = m(g + a) = 50\\times(10 - 10) = 0$: the student is weightless and the scale reads zero.",
          "The lesson of the numbers: the scale reads $m(g + a)$ and therefore measures acceleration, not gravity — a lift accelerating upward in deep space can mimic an ordinary lift at rest on Earth.",
        ],
      },
      {
        kind: "example",
        title: "Orbiting at altitude R",
        level: "C",
        problem:
          "A satellite is placed in a circular orbit of radius $2R$, where $R = 6400$ km is Earth's radius; take $g = 10\\ \\mathrm{m/s^2}$ at the surface. Find the orbital speed, the orbital period, and compare the orbital energy per kilogram with that of a satellite merely held at rest at the same altitude.",
        steps: [
          "From the surface gravity, $GM = gR^2 = 10\\times(6.4\\times10^6)^2 = 4.1\\times10^{14}\\ \\mathrm{m^3/s^2}$.",
          "The orbital speed at $r = 2R$ is $v = \\sqrt{GM/2R} = \\sqrt{3.2\\times10^7} \\approx 5.7$ km/s, exactly half the surface escape velocity $\\sqrt{2gR} \\approx 11.3$ km/s.",
          "The period is $T = 2\\pi\\sqrt{r^3/GM} = 2\\pi\\sqrt{5.12\\times10^6}\\ \\mathrm{s} \\approx 1.42\\times10^4$ s, about 3.9 hours.",
          "The orbital energy per kilogram is $E/m = -GM/(2r) = -4.1\\times10^{14}/2.56\\times10^7 \\approx -1.6\\times10^7$ J/kg.",
          "Held at rest at altitude $2R$, the same satellite would have only the potential part, $-GM/(2R) = -3.2\\times10^7$ J/kg.",
          "Orbiting is therefore $1.6\\times10^7$ J/kg more expensive than just being hoisted there, and the difference is exactly the orbital kinetic energy $\\tfrac12 v^2$ — a satellite released from rest at that altitude would fall straight back instead of orbiting.",
        ],
      },
      {
        kind: "tips",
        title: "Ratio tricks and sanity checks",
        items: [
          {
            tip: "Answer with ratios, not absolutes: write $T^2 \\propto r^3$, $v \\propto r^{-1/2}$, $v_e \\propto \\sqrt{M/R}$ and let the unknown $GM$ cancel.",
            why: "Olympiad options are usually ratios, and every proportionality here follows from $g = GM/R^2$ without a single numerical evaluation of $G$.",
          },
          {
            tip: "For planets of equal density, remember the chain $g \\propto R$, $v_e \\propto R$, and tunnel period $T = \\sqrt{3\\pi/(G\\rho)}$ independent of size.",
            why: "Substituting $M = (4\\pi/3)\\rho R^3$ into $g = GM/R^2$ and $v_e = \\sqrt{2gR}$ leaves only $R$, while the tunnel period $2\\pi\\sqrt{R/g} = \\sqrt{3\\pi/(G\\rho)}$ depends on density alone — about 84 minutes for Earth.",
          },
          {
            tip: "Keep the speed family straight at one radius: $v_{orb} = \\sqrt{GM/r}$, escape speed $v_e = \\sqrt{2}\\,v_{orb}$, and a surface-grazing orbit moves at $v_e/\\sqrt{2}$ of the local escape value.",
            why: "All three come from the same bookkeeping $\\tfrac12 mv^2 - GMm/r$ with different right-hand sides; mixing them up shifts every answer by 41 percent, the size of $\\sqrt{2} - 1$.",
          },
          {
            tip: "At perigee and apogee the velocity is exactly perpendicular to the radius, so $v_p r_p = v_a r_a$ gives speed ratios with no energy equation.",
            why: "Angular momentum $L = mrv$ is conserved everywhere on the orbit, and at the apsides the velocity has no radial component, making $L = mrv$ exact at those two points.",
          },
          {
            tip: "Inside a shell the FIELD vanishes but the POTENTIAL does not: it stays constant at $-GM/R$ everywhere within.",
            why: "Field is the gradient of potential, and a constant has zero gradient; nested-shell problems hinge on keeping the two statements separate, since the potential still feeds the energy ledger even where no force acts.",
          },
          {
            tip: "Check every orbit for sign: a bound orbit needs $E < 0$, with $KE = -E$ and $U = 2E$.",
            why: "The circular-orbit algebra $\\tfrac12 mv^2 = GMm/(2r)$ forces $E = U/2$ (the virial relation); if your computed orbit comes out with $E \\ge 0$, the object is not orbiting at all — it is escaping.",
          },
        ],
      },
      {
        kind: "checkpoint",
        question: "An astronaut inside the International Space Station feels weightless because",
        options: [
          "There is no gravity in space",
          "The station and astronaut fall freely around Earth together",
          "The Moon's pull cancels Earth's",
          "The astronaut's mass is zero there",
        ],
        answer: 1,
        explain:
          "At the station's altitude gravity is still about 90 percent of its surface strength; it supplies exactly the centripetal acceleration of the orbit. Everything falls with the same acceleration, so nothing presses on anything else: apparent weight is zero while gravity is not.",
      },
      {
        kind: "checkpoint",
        question:
          "Two satellites circle Earth in circular orbits of radii $r$ and $4r$. The ratio of their orbital speeds, inner to outer, is",
        options: ["4", "2", "1/2", "1/4"],
        answer: 1,
        explain:
          "With $v = \\sqrt{GM/r}$ the speed scales as $r^{-1/2}$, so the ratio is $\\sqrt{4} = 2$: the inner satellite moves twice as fast. Its period, by contrast, is $4^{3/2} = 8$ times shorter.",
      },
      {
        kind: "checkpoint",
        question:
          "A projectile is fired straight up from Earth's surface with exactly half the escape speed. Ignoring air resistance, it",
        options: [
          "Escapes with reduced speed",
          "Rises to a maximum height and falls back",
          "Settles into a low circular orbit",
          "Escapes only because it is light",
        ],
        answer: 1,
        explain:
          "With $v = v_e/2$ the kinetic energy $\\tfrac12 mv^2 = GMm/(4R)$ is a quarter of what escape requires; the projectile climbs until $-GMm/r$ balances, reaching $r = 4R/3$ (about $R/3$ above the surface) and then falls back. Escape demands the full $v_e$.",
      },
    ],
  },
  {
    topic: "oscillation",
    intro:
      "Simple harmonic motion is the recurring melody of physics: a mass on a spring, a pendulum clock, a vibrating guitar string, atoms in a crystal, even charge sloshing in an LC circuit all obey the same equation, $a = -\\omega^2 x$. Learn one oscillator and you have learned them all. This lesson starts with the vocabulary of periodic motion, builds Hooke's law into the full solution $x = A\\cos(\\omega t)$, accounts for the energy sloshing between spring and mass, derives the pendulum's period in the small-angle limit, and then handles the two olympiad favourites: vertical springs solved by the equilibrium method, and spring networks with combined blocks.",
    bigPicture: [
      "SHM is the universal response of any system near a stable equilibrium: whatever the true force law, as long as it points back toward equilibrium it is locally linear, so every small vibration — molecule, bridge, atom in a lattice — is harmonic with $\\omega^2 = U''(x_0)/m$.",
      "Oscillation ties directly back to the work-energy lesson: a spring is a device that trades kinetic and potential energy reversibly, and the total $\\tfrac12 kA^2$ is just the area under its F-x graph.",
      "Frequency thinking extends forward to waves: a vibrating source imposes its frequency $f = 1/T$ on the waves it launches, so every wave question begins with an oscillator question.",
    ],
    sections: [
      {
        kind: "intro",
        body:
          "The route is: periodic motion and its vocabulary (B); Hooke's law and the SHM equation with its cosine solution (B); energy in a spring-mass system (B); the simple pendulum in the small-angle limit (B); vertical springs and the equilibrium trick that erases gravity (C); and series-parallel spring networks with combined blocks (C). A numerical example at each level follows, then six working tricks and three checkpoints to test the key reflexes.",
      },
      {
        kind: "concept",
        title: "Periodic motion: period, frequency, amplitude",
        level: "B",
        body:
          "Motion that repeats after a fixed time is periodic; that time is the period $T$, and its reciprocal is the frequency $f = 1/T$, measured in hertz (one cycle per second). The amplitude $A$ is the maximum displacement from equilibrium: it sets the energy of the oscillation but, for linear oscillators, not the period. The angular frequency $\\omega = 2\\pi f = 2\\pi/T$ is measured in rad/s and is the quantity the equations naturally use. A useful mental picture: SHM is the shadow of uniform circular motion — a point sweeping steadily around a circle of radius $A$ casts a shadow that moves as $x = A\\cos(\\omega t)$.",
        formulas: [
          "f = \\frac{1}{T},\\qquad \\omega = 2\\pi f = \\frac{2\\pi}{T}",
          "x = A\\cos(\\omega t)\\ \\text{(shadow of uniform circular motion)}",
        ],
      },
      {
        kind: "concept",
        title: "Hooke's law and the SHM equation",
        level: "B",
        body:
          "An ideal spring pulls or pushes with a restoring force proportional to its extension from natural length: $F = -kx$, with $k$ the spring constant in N/m and the minus sign declaring that the force always points back toward equilibrium. Newton's second law then gives $m\\ddot{x} = -kx$, or $\\ddot{x} = -\\omega^2 x$ with $\\omega^2 = k/m$: acceleration proportional to displacement and oppositely directed, the defining property of SHM. The solution is sinusoidal, $x(t) = A\\cos(\\omega t + \\phi)$, with maximum speed $v_{max} = A\\omega$ at equilibrium and maximum acceleration $a_{max} = A\\omega^2$ at the turning points. The period $T = 2\\pi\\sqrt{m/k}$ is independent of amplitude.",
        formulas: [
          "F = -kx,\\qquad \\omega = \\sqrt{\\frac{k}{m}},\\qquad T = 2\\pi\\sqrt{\\frac{m}{k}}",
          "x = A\\cos(\\omega t + \\phi),\\qquad v_{max} = A\\omega,\\qquad a_{max} = A\\omega^2",
        ],
      },
      {
        kind: "concept",
        title: "Energy in a spring-mass oscillator",
        level: "B",
        body:
          "The spring stores potential energy $U = \\tfrac12 kx^2$ and the mass carries $KE = \\tfrac12 mv^2$; their sum is constant and equals $\\tfrac12 kA^2$, set by the amplitude alone. Energy sloshes between the two forms twice per cycle: all potential at the extremes, all kinetic as the mass passes equilibrium, and averaged over time each form holds exactly half the total. Energy conservation instantly gives the speed at any displacement: $\\tfrac12 mv^2 = \\tfrac12 k(A^2 - x^2)$, so $v = \\omega\\sqrt{A^2 - x^2}$. Doubling the amplitude quadruples the total energy and doubles the maximum speed while leaving the period untouched.",
        formulas: [
          "E = \\tfrac12 kA^2 = \\tfrac12 mv^2 + \\tfrac12 kx^2",
          "v = \\omega\\sqrt{A^2 - x^2},\\qquad \\langle KE\\rangle = \\langle U\\rangle = \\tfrac14 kA^2",
        ],
      },
      {
        kind: "concept",
        title: "The simple pendulum and the small-angle limit",
        level: "B",
        body:
          "A point mass on a light string of length $L$, pulled aside by angle $\\theta$, feels a restoring force $mg\\sin\\theta$ along the arc. For small angles, $\\sin\\theta \\approx \\theta$ with $\\theta$ in radians (the error is under half a percent even at 10 degrees), so the restoring force becomes $mg\\theta = mg\\,x/L$, linear in displacement: exactly a spring of constant $k_{eff} = mg/L$. The period is $T = 2\\pi\\sqrt{L/g}$, independent of mass and (for small swings) of amplitude, but set by local gravity, which is why pendulum clocks run slow on a mountain where $g$ is smaller. In a lift or rocket accelerating with $a$, replace $g$ by the effective gravity $g_{eff} = g \\pm a$; in free fall $g_{eff} = 0$ and the pendulum stops swinging.",
        formulas: [
          "\\sin\\theta \\approx \\theta\\ \\text{(radians)},\\qquad T = 2\\pi\\sqrt{\\frac{L}{g}}",
          "g_{eff} = g \\pm a\\ \\text{(accelerating support)}",
        ],
      },
      {
        kind: "concept",
        title: "Vertical springs and the equilibrium method",
        level: "C",
        body:
          "Hang a mass $m$ on a spring of constant $k$ and the spring stretches by $x_0 = mg/k$ to a new equilibrium where the spring force balances the weight. Measuring displacement $y$ FROM that new equilibrium makes gravity disappear from the equations: $ma = -k(y + x_0) + mg = -ky$, since $kx_0 = mg$. The mass therefore executes perfect SHM about the stretched equilibrium with $\\omega = \\sqrt{k/m}$, exactly as if it were horizontal. The method works for any constant force added to a spring — extra weights, buoyancy, a uniform electric field — but watch one physical constraint: if the amplitude exceeds the static stretch $x_0$, the spring goes slack near the top and the motion is no longer simple harmonic.",
        formulas: [
          "x_0 = \\frac{mg}{k}\\ \\text{(static stretch)}",
          "ma = -ky\\ \\text{(about the shifted equilibrium)}",
        ],
      },
      {
        kind: "concept",
        title: "Spring networks and combined blocks",
        level: "C",
        body:
          "Springs combine like capacitors, opposite to resistors. In series the same tension flows through both and the extensions add: $1/k_{eq} = 1/k_1 + 1/k_2$, a combination SOFTER than either spring. In parallel both springs share the same extension and the forces add: $k_{eq} = k_1 + k_2$, stiffer than either. Cutting a spring shortens it, and stiffness scales as $k \\propto 1/L$, so a spring cut into lengths $L_1$ and $L_2$ yields constants with $k_1/k_2 = L_2/L_1$: the shorter piece is stiffer. For two free blocks joined by one spring, the relative separation oscillates with the reduced mass $\\mu = m_1m_2/(m_1 + m_2)$, giving $\\omega = \\sqrt{k/\\mu}$; if one end is a fixed wall, this reduces to the single-mass result.",
        formulas: [
          "\\text{series: } \\frac{1}{k_{eq}} = \\frac{1}{k_1} + \\frac{1}{k_2},\\qquad \\text{parallel: } k_{eq} = k_1 + k_2",
          "k \\propto \\frac{1}{L}\\ \\text{(same spring, shorter piece)}",
          "\\omega = \\sqrt{\\frac{k}{\\mu}},\\qquad \\mu = \\frac{m_1m_2}{m_1 + m_2}\\ \\text{(two free blocks)}",
        ],
      },
      {
        kind: "example",
        title: "A horizontal oscillator, end to end",
        level: "B",
        problem:
          "A 0.50 kg block on a frictionless table is attached to a spring of constant $k = 50$ N/m. The block is pulled 8.0 cm from equilibrium and released from rest. Find the period, the maximum speed, the maximum acceleration, and the total energy of the oscillation.",
        steps: [
          "The angular frequency is $\\omega = \\sqrt{k/m} = \\sqrt{50/0.5} = \\sqrt{100} = 10$ rad/s, so the period is $T = 2\\pi/\\omega \\approx 0.63$ s.",
          "Released from rest 8.0 cm from equilibrium, the block starts at a turning point, so the amplitude is $A = 0.08$ m and the motion is $x = A\\cos(\\omega t)$.",
          "The maximum speed occurs as the block passes equilibrium: $v_{max} = A\\omega = 0.08\\times10 = 0.8$ m/s.",
          "The maximum acceleration occurs at the extremes: $a_{max} = A\\omega^2 = 0.08\\times100 = 8.0\\ \\mathrm{m/s^2}$, which matches the spring force there, $kA = 50\\times0.08 = 4.0$ N, divided by 0.5 kg.",
          "The total energy is $E = \\tfrac12 kA^2 = 0.5\\times50\\times0.0064 = 0.16$ J, and the cross-check $\\tfrac12 mv_{max}^2 = 0.25\\times0.64 = 0.16$ J confirms it.",
        ],
      },
      {
        kind: "example",
        title: "A vertical spring by the equilibrium method",
        level: "C",
        problem:
          "A 2.0 kg mass hangs from a spring of constant $k = 800$ N/m ($g = 10\\ \\mathrm{m/s^2}$). The mass is pulled 4.0 cm below its static equilibrium position and released from rest. Find the static stretch, the period, the maximum speed, and the acceleration at the highest point of the motion.",
        steps: [
          "The static stretch is $x_0 = mg/k = 20/800 = 0.025$ m: at equilibrium the spring pulls up with 20 N, exactly balancing the weight.",
          "Measured from the new equilibrium the equation is $ma = -ky$, so $\\omega = \\sqrt{k/m} = \\sqrt{400} = 20$ rad/s and $T = 2\\pi/20 \\approx 0.31$ s.",
          "The amplitude is $A = 0.04$ m, so the maximum speed at the equilibrium point is $v_{max} = A\\omega = 0.04\\times20 = 0.8$ m/s.",
          "At the highest point the spring's extension is $x_0 - A = 0.025 - 0.040 = -0.015$ m: the spring is actually compressed 1.5 cm and pushes DOWN with $800\\times0.015 = 12$ N.",
          "The net downward force at the top is then 12 N of spring push plus 20 N of weight, giving $a = 32/2.0 = 16\\ \\mathrm{m/s^2}$ — exactly $A\\omega^2 = 0.04\\times400 = 16$, confirming the equilibrium method.",
          "Because the amplitude 4.0 cm exceeds the static stretch 2.5 cm, the spring is compressed at the top of each cycle; the motion stays SHM only because this spring can push as well as pull.",
        ],
      },
      {
        kind: "tips",
        title: "Fast routes through SHM problems",
        items: [
          {
            tip: "Get speeds from energy, not trigonometry: $v = \\omega\\sqrt{A^2 - x^2}$ gives the speed at displacement $x$ in one line.",
            why: "It is just $\\tfrac12 mv^2 = \\tfrac12 k(A^2 - x^2)$ rearranged; the velocity formula $v(t) = -A\\omega\\sin(\\omega t + \\phi)$ carries the same information but forces you to resolve a phase.",
          },
          {
            tip: "Treat spring combinations like capacitors: series adds reciprocals, parallel adds directly, and a cut spring has $k \\propto 1/L$.",
            why: "Series springs carry the same tension (extensions add at fixed force) and parallel springs share the same extension (forces add), which are exactly the duals of the capacitor rules.",
          },
          {
            tip: "Whenever a spring is combined with gravity, buoyancy or any constant force, shift the origin to the NEW equilibrium first: the constant force then cancels from the oscillation equation.",
            why: "A constant force only moves the centre of oscillation: $ma = -k(y + x_0) + F_0$ with $kx_0 = F_0$ reduces to $ma = -ky$, leaving $\\omega = \\sqrt{k/m}$ unchanged.",
          },
          {
            tip: "Pendulums in accelerating frames: replace $g$ by $g_{eff} = g \\pm a$, and test the sign on the free-fall limit where the pendulum must stop swinging.",
            why: "The string tension responds to the effective weight $m(g \\pm a)$ and the restoring torque is proportional to $g_{eff}$; at $g_{eff} = 0$ there is no restoring tendency at all, so the sign that yields zero is correct.",
          },
          {
            tip: "Sanity-check every answer against amplitude-independence: for a linear oscillator the period must NOT contain the amplitude $A$.",
            why: "The equation $\\ddot{x} = -\\omega^2 x$ has no amplitude in its coefficients, so isochronism is the experimental signature of a linear restoring force; an amplitude in your $T$ means the spring went slack, the angle is not small, or you slipped.",
          },
          {
            tip: "For oscillations about an arbitrary potential minimum, jump straight to $\\omega = \\sqrt{U''(x_0)/m}$ instead of rederiving the force.",
            why: "The Taylor expansion $U \\approx U(x_0) + \\tfrac12 U''(x_0)(x - x_0)^2$ identifies the effective spring constant $k_{eff} = U''(x_0)$, so differentiating twice replaces an entire force analysis — this is how the $V(x) = A(1 - \\cos kx)$ questions collapse in one line.",
          },
        ],
      },
      {
        kind: "checkpoint",
        question:
          "A mass on a spring oscillates on Earth with period $T$. The same mass on the same spring on the Moon (gravity about one sixth of Earth's) has period",
        options: [
          "$T$",
          "$T/6$",
          "$6T$",
          "It depends on the amplitude",
        ],
        answer: 0,
        explain:
          "The period $T = 2\\pi\\sqrt{m/k}$ contains no $g$: a spring-mass system oscillates identically about its (shifted) equilibrium on the Moon. Gravity only decides where the equilibrium sits, not how fast the mass oscillates about it.",
      },
      {
        kind: "checkpoint",
        question: "In simple harmonic motion, the speed of the particle is maximum",
        options: [
          "At maximum displacement",
          "Halfway between equilibrium and the extreme",
          "At equilibrium",
          "Equally at all points",
        ],
        answer: 2,
        explain:
          "Energy conservation puts the entire energy into kinetic form at the equilibrium point, where the potential $\\tfrac12 kx^2$ vanishes, giving $v_{max} = A\\omega$. At the extremes the speed is zero and the acceleration is largest.",
      },
      {
        kind: "checkpoint",
        question:
          "A block sits between two identical springs of constant $k$, one anchored to each of two fixed walls on opposite sides. The effective spring constant for motion of the block is",
        options: ["$k/2$", "$k$", "$2k$", "$k^2$"],
        answer: 2,
        explain:
          "Displace the block by $x$: one spring stretches by $x$ and pulls it back with $kx$ while the other compresses by $x$ and pushes it back with $kx$. The forces add, $k_{eq} = 2k$ — a parallel combination, since both springs experience the same displacement.",
      },
    ],
  },
  {
    topic: "fluids",
    intro:
      "Fluids at rest cannot support shear, so every force they exert is a perpendicular push fully described by pressure. That single fact generates hydrostatic pressure $P = \\rho g h$, Pascal's transmission of pressure, and Archimedes' buoyancy; adding motion brings in the continuity equation and Bernoulli's energy budget. This lesson climbs from density and pressure (Category A) through floating bodies and atmospheric-pressure instruments (Category B) to flowing fluids, Torricelli's law and venturi-style pressure drops (Category C), in exactly the style of the regional question bank, from wooden blocks in pools to syringes and narrowing pipes.",
    bigPicture: [
      "Pressure and buoyancy are the fluid incarnation of Newton's laws: Archimedes' principle is just the weight of displaced fluid replacing the object, and every floating condition is a force balance you already know how to write.",
      "Bernoulli's equation is the work-energy theorem divided by volume: $P$ is flow work per unit volume, $\\tfrac12\\rho v^2$ is kinetic energy per unit volume and $\\rho g y$ is potential energy per unit volume, so all your energy intuition from mechanics transfers.",
      "Fluid questions connect to daily engineering — hydraulic jacks, water towers, barometers, wings — and forward to the oscillation topic, since a floating object pushed down and released bobs in SHM with $\\omega^2 = \\rho_w g A/m$.",
    ],
    sections: [
      {
        kind: "intro",
        body:
          "The concepts proceed from density and hydrostatic pressure (A) to Pascal's law and hydraulic machines (A), then buoyancy with floating conditions (B), atmospheric pressure with barometers and manometers (B), the continuity equation (C), and Bernoulli's equation with Torricelli's law (C). Two worked examples — a floating block pushed under, and a venturi pipe — are followed by six estimation tricks and three checkpoints.",
      },
      {
        kind: "concept",
        title: "Density, pressure and hydrostatics",
        level: "A",
        body:
          "Density is mass per volume, $\\rho = m/V$ (water: $1000\\ \\mathrm{kg/m^3}$; mercury: $13600\\ \\mathrm{kg/m^3}$). Pressure is perpendicular force per area, $P = F/A$, a scalar measured in pascals ($1\\ \\mathrm{Pa} = 1\\ \\mathrm{N/m^2}$). In a static fluid, the pressure at depth $h$ below a surface open to pressure $P_0$ is $P = P_0 + \\rho g h$: the excess equals the weight of the fluid column above, divided by its area. Depth is the only variable that matters — container shape and total amount of fluid are irrelevant, the hydrostatic paradox that a thin 10 m tube and a 10 m lake push equally hard on their bottoms.",
        formulas: [
          "\\rho = \\frac{m}{V},\\qquad P = \\frac{F}{A}",
          "P = P_0 + \\rho g h",
        ],
      },
      {
        kind: "concept",
        title: "Pascal's law and hydraulic machines",
        level: "A",
        body:
          "An enclosed fluid at rest transmits a pressure change applied at any point equally to every point: Pascal's principle. In a hydraulic press with a small piston of area $A_1$ and a large piston of area $A_2$, equal pressure means $F_1/A_1 = F_2/A_2$, so a modest force on the small piston balances a large load on the big one, with force ratio $A_2/A_1$. Energy is not multiplied: the small piston must move $A_2/A_1$ times farther, so the work in equals the work out — conservation of energy dressed as fluid. The same logic runs car lifts, hydraulic brakes and syringes, where the applied force balances the pressure difference times the piston area.",
        formulas: [
          "\\frac{F_1}{A_1} = \\frac{F_2}{A_2}",
          "F_1 d_1 = F_2 d_2\\ \\text{(work in equals work out)}",
        ],
      },
      {
        kind: "concept",
        title: "Buoyancy and Archimedes' principle",
        level: "B",
        body:
          "A body immersed in a fluid feels an upward buoyant force equal to the WEIGHT of the fluid it displaces: $F_b = \\rho_{fluid} V_{disp} g$. For a fully submerged body $V_{disp}$ is the whole volume; for a floater it is only the submerged part. Floating equilibrium, $\\rho_{obj} V_{tot} g = \\rho_{fluid} V_{sub} g$, makes the submerged fraction equal the density ratio: wood of density $600\\ \\mathrm{kg/m^3}$ floats 60 percent under, and an iceberg ($917\\ \\mathrm{kg/m^3}$) shows barely 8 percent above water. Weighing a body in air and again submerged gives its density without measuring volume, since the apparent weight loss is $\\rho_{fluid} V g$.",
        formulas: [
          "F_b = \\rho_{fluid} V_{disp}\\, g",
          "\\text{floating: } \\frac{V_{sub}}{V_{tot}} = \\frac{\\rho_{obj}}{\\rho_{fluid}}",
          "\\rho_{obj} = \\frac{W_{air}}{W_{air} - W_{fluid}}\\,\\rho_{fluid}",
        ],
      },
      {
        kind: "concept",
        title: "Atmospheric pressure, barometers and manometers",
        level: "B",
        body:
          "The atmosphere is a fluid column roughly 10 km deep pressing on everything with $P_{atm} \\approx 1.01\\times10^5$ Pa — about 10 newtons on every square centimetre. A mercury barometer balances it against a column: $P_{atm} = \\rho_{Hg}\\,g\\,h$ with $h \\approx 0.76$ m; water would need 10.3 m because it is 13.6 times less dense. Gauge pressure is measured relative to atmospheric ($P_{gauge} = \\rho g h$), and absolute pressure is gauge plus $P_{atm}$; a manometer reads a gas pressure through the height difference of a U-tube. Suction cups and drinking straws work because atmospheric pressure, not vacuum, does the pushing.",
        formulas: [
          "P_{atm} = \\rho_{Hg}\\,g\\,h \\approx 1.01\\times10^5\\ \\mathrm{Pa}\\ \\text{at}\\ h = 0.76\\ \\mathrm{m}",
          "P_{abs} = P_{gauge} + P_{atm}",
        ],
      },
      {
        kind: "concept",
        title: "The continuity equation",
        level: "C",
        body:
          "For steady flow of an incompressible fluid, whatever enters a pipe per second must leave: the volume flow rate $Q = Av$ is constant along the pipe, with $A$ the cross-sectional area and $v$ the average speed there. Narrowing the pipe therefore speeds the fluid up in inverse proportion — half the area, double the speed, the garden-hose pinch. The rate $Q$ comes in $\\mathrm{m^3/s}$ (multiply by density for mass flow), and for a compressible gas the conserved quantity is $\\rho A v$ instead. Continuity is pure bookkeeping with no forces involved, so it holds even in messy real flows as long as the flow is steady and the pipe runs full.",
        formulas: [
          "Q = Av = \\text{constant along the pipe}",
          "\\text{compressible gas: } \\rho A v = \\text{constant}",
        ],
      },
      {
        kind: "concept",
        title: "Bernoulli's equation and Torricelli's law",
        level: "C",
        body:
          "Bernoulli's equation is energy conservation per unit volume along a streamline: $P + \\tfrac12\\rho v^2 + \\rho g y = \\text{constant}$, valid for steady, non-viscous, incompressible flow. Read it as a competition: where the fluid speeds up, the pressure must drop, and vice versa — the physics of venturi meters, spraying shower curtains and aerofoil lift. Apply it between two well-chosen points, usually the free surface of a tank and a small exit hole; the atmosphere pushes equally on both, its terms cancel, and the equation collapses to Torricelli's law, $v_{exit} = \\sqrt{2gh}$: water leaves a hole at depth $h$ exactly with the speed of free fall from rest through $h$.",
        formulas: [
          "P_1 + \\tfrac12\\rho v_1^2 + \\rho g y_1 = P_2 + \\tfrac12\\rho v_2^2 + \\rho g y_2",
          "v_{Torricelli} = \\sqrt{2gh}",
        ],
      },
      {
        kind: "example",
        title: "Pushing a floating block under",
        level: "B",
        problem:
          "A wooden block of density $600\\ \\mathrm{kg/m^3}$, height 40 cm and square base 50 cm by 50 cm floats in water ($\\rho_w = 1000\\ \\mathrm{kg/m^3}$, $g = 10\\ \\mathrm{m/s^2}$). How deep does it sit, and how much work is needed to push it slowly down until its top face is level with the water surface?",
        steps: [
          "The block's mass is $\\rho V = 600\\times(0.50\\times0.50\\times0.40) = 60$ kg, so it weighs 600 N.",
          "Floating balance, $\\rho_w g A h_{sub} = mg$, gives $h_{sub} = 600/(1000\\times10\\times0.25) = 0.24$ m: 24 cm under water, 16 cm above, the density ratio 0.6 exactly.",
          "Pushing the block down an extra depth $y$ submerges an extra strip and adds buoyant force $\\rho_w g A y = 2500y$ N, rising linearly to $2500\\times0.16 = 400$ N when the top reaches the surface.",
          "Because the hand's force grows linearly from 0 to 400 N over 0.16 m, the work is the triangle area $\\tfrac12\\times400\\times0.16 = 32$ J.",
          "Cross-check: buoyancy acts like a spring of constant $k_{eff} = \\rho_w g A = 2500$ N/m, and $\\tfrac12 k_{eff} d^2 = 0.5\\times2500\\times0.0256 = 32$ J — released there, the block would bob in SHM carrying exactly this energy.",
        ],
      },
      {
        kind: "example",
        title: "A venturi pipe",
        level: "C",
        problem:
          "Water ($\\rho = 1000\\ \\mathrm{kg/m^3}$) flows steadily through a horizontal pipe that narrows from a cross-section of $10\\ \\mathrm{cm^2}$ to $5\\ \\mathrm{cm^2}$. The speed in the wide section is 3.0 m/s. Find the volume flow rate, the speed in the narrow section, and the pressure difference between the two sections.",
        steps: [
          "Continuity first: $Q = A_1 v_1 = 10\\times10^{-4}\\times3.0 = 3.0\\times10^{-3}\\ \\mathrm{m^3/s}$, three litres per second.",
          "The narrow section must carry the same flow: $v_2 = Q/A_2 = 3.0\\times10^{-3}/(5\\times10^{-4}) = 6.0$ m/s — half the area, double the speed.",
          "The pipe is horizontal, so $y_1 = y_2$ and gravity drops out of Bernoulli's equation.",
          "Bernoulli between wide and narrow gives $P_1 - P_2 = \\tfrac12\\rho(v_2^2 - v_1^2) = 0.5\\times1000\\times(36 - 9) = 1.35\\times10^4$ Pa.",
          "The pressure in the narrow section is lower by 13.5 kPa, about 13 percent of atmospheric pressure — this pressure drop is precisely what a venturi meter converts into a speed reading.",
        ],
      },
      {
        kind: "tips",
        title: "Shortcuts and sanity checks with fluids",
        items: [
          {
            tip: "Answer floating questions with the density ratio first: submerged fraction equals $\\rho_{obj}/\\rho_{fluid}$, then worry about geometry.",
            why: "The balance $\\rho_{obj} V_{tot} = \\rho_f V_{sub}$ divides straight through by $g$ and by the base area, so the fraction is fixed before any dimension is used.",
          },
          {
            tip: "Get density from two weighings: $\\rho_{obj} = W_{air}\\,\\rho_f/(W_{air} - W_f)$, no volume measurement needed.",
            why: "The apparent weight loss $W_{air} - W_f$ equals $\\rho_f V g$, so dividing it into the true weight $\\rho_{obj} V g$ cancels the unknown $V$ and $g$ in one stroke — the immersed-in-water-versus-glycerine questions are this formula twice.",
          },
          {
            tip: "In tank and pipe problems, write Bernoulli between the two points where you know the most (free surface and open jet, or two gauge points) and let the atmosphere cancel.",
            why: "Both the free surface and the open jet sit at $P_{atm}$, so the pressure terms cancel exactly and the equation collapses to free-fall energy, $v = \\sqrt{2gh}$ — adding an extra atmospheric term double-counts.",
          },
          {
            tip: "Cross-check flow direction with continuity: wherever the pipe narrows, $v$ rises and $P$ falls.",
            why: "Continuity is bookkeeping ($Q = Av$) and Bernoulli is energy; if your working ever shows higher pressure at a pinch, a sign has flipped somewhere.",
          },
          {
            tip: "Pressure depends only on depth, never on container shape or total water weight; for the force on a vertical wall use the pressure at the wall's centroid, $F = \\rho g h_c A$.",
            why: "Hydrostatic pressure comes from the weight of the vertical column above the point, so lateral extent is irrelevant, and the linear growth $\\rho g h$ with depth makes the centroid the correct average for a rectangular wall.",
          },
          {
            tip: "Estimate with the water barometer: 10 m of water is one atmosphere, so every 10 m of depth adds about $10^5$ Pa.",
            why: "$P = \\rho g h$ with $\\rho = 1000$ and $g = 10$ gives $10^5$ Pa at 10 m; scaling from this benchmark is faster and safer than full arithmetic in multiple-choice settings.",
          },
        ],
      },
      {
        kind: "checkpoint",
        question:
          "An ice cube floats in a glass of water filled exactly to the brim. After the ice melts, the water level",
        options: [
          "Rises and overflows",
          "Falls",
          "Stays exactly at the brim",
          "Depends on the shape of the cube",
        ],
        answer: 2,
        explain:
          "Floating ice displaces exactly its own WEIGHT of water, and on melting it becomes exactly that weight of water. The meltwater therefore fills the hollow the ice left below the waterline, and the level stays at the brim; level changes require something denser (or something thrown overboard), not pure melting ice.",
      },
      {
        kind: "checkpoint",
        question:
          "Water flows steadily through a horizontal pipe that narrows to half its cross-sectional area. In the narrow section, compared with the wide one,",
        options: [
          "Speed halves and pressure rises",
          "Speed doubles and pressure falls",
          "Speed doubles and pressure rises",
          "Speed and pressure both stay the same",
        ],
        answer: 1,
        explain:
          "Continuity, $Av = $ constant, doubles the speed where the area halves; Bernoulli then requires the pressure to drop by $\\tfrac12\\rho(v_2^2 - v_1^2)$ to keep the energy per unit volume balanced.",
      },
      {
        kind: "checkpoint",
        question:
          "A hydraulic lift has a small piston of area $A$ pushed with force $F$; the large piston has area $50A$. The largest load the lift can support is",
        options: ["$F$", "$50F$", "$F/50$", "$2500F$"],
        answer: 1,
        explain:
          "Pascal's law equalizes pressure: $F/A = F_2/(50A)$ gives $F_2 = 50F$. The price is distance — the small piston must travel 50 times farther — so the work done is unchanged.",
      },
    ],
  },
];

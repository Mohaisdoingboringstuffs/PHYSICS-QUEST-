// Lessons part 4: electricity, magnetism, modern
// Schema conforms to ./lesson-types.ts (intro, concept, example, tips, checkpoint)
import type { Lesson } from "./lesson-types";

export const lessons4: Lesson[] = [
  {
    topic: "electricity",
    intro:
      "Electricity splits into two connected halves: electrostatics, where charges at rest set up fields and potentials in space, and current electricity, where charges drift through wires, resistors and capacitors under the push of a battery. Both halves rest on the same two ideas: charges push each other with $F = kq_1q_2/r^2$, and energy per unit charge (the potential) is what really drives everything. Regional papers reliably draw a large block of questions from here, with internal resistance and power, symmetric charge arrangements, capacitor combinations and network reduction appearing year after year. The saving grace is that every formula is short, and the gravity toolkit transfers directly once you swap mass for charge.",
    bigPicture: [
      "Every electric formula is a gravity formula with charge in place of mass and $k = 9\\times10^9\\ \\text{N·m}^2/\\text{C}^2$ in place of $G$, except that charges can repel as well as attract, and electric forces outrank gravity by a factor near $10^{36}$, which is why neutral matter still binds, sparks and conducts.",
      "Circuits are conservation laws in disguise: the junction rule is charge conservation, the loop rule is energy conservation, and a power balance $\\mathcal{E}I = I^2R + I^2r$ catches almost every sign error you can make.",
      "Fields and potentials are two views of one thing: the field is the downhill slope of the potential. Since potential is a scalar you can add without components, smart solvers compute $V$ first and extract $E$ second.",
    ],
    sections: [
      {
        kind: "intro",
        body:
          "The route runs from a single charge to a complete circuit. First charge itself and its two laws (conservation and quantization), then Coulomb's law with the field and field-line pictures, then potential and equipotentials, real cells with internal resistance, capacitors as charge containers, and finally networks solved by systematic reduction, Kirchhoff's laws and RC timing. Two fully worked examples show the method end to end, the tips collect the symmetry tricks and duality patterns that save minutes in an exam, and the checkpoints rehearse the classic traps.",
      },
      {
        kind: "concept",
        title: "Charge: conservation and quantization",
        level: "B",
        body:
          "Charge is the fundamental electrical quantity, carried by the proton ($+e$) and the electron ($-e$) with $e = 1.6\\times10^{-19}$ C, and every macroscopic charge is an integer multiple of $e$: rubbing a rod does not create charge, it transfers electrons, so one body's gain is exactly the other's loss. Conservation says the total charge of an isolated system never changes, even through reactions and decays. Conductors contain charges free to move, so any excess charge on a conductor spreads over its surface and the field inside settles to zero, while insulators pin charge in place. Because ordinary matter holds equal numbers of protons and electrons, everyday bodies are neutral, and the enormous electric forces usually cancel at a distance.",
        formulas: [
          "q = ne",
          "e = 1.6\\times10^{-19}\\ \\text{C}",
          "q_{total} = \\text{constant}",
        ],
      },
      {
        kind: "concept",
        title: "Coulomb's law, superposition and the electric field",
        level: "B",
        body:
          "Point charges interact along the line joining them with $F = kq_1q_2/r^2$, where $k = 9\\times10^9$ N·m²/C², repulsive for like charges and attractive for unlike ones; the two forces form a Newton's-third-law pair even when the charges differ in size. For several charges, superpose vectorially, component by component, and let symmetry do the work: five equal charges evenly spaced on a circle give exactly zero field at the centre, so removing one leaves a field equal in size to a single charge's contribution $kq/r^2$, aimed at the gap. When two opposite charges circle each other, the Coulomb attraction supplies the centripetal force, $kq^2/r^2 = mv^2/r$. The electric field $\\vec{E} = \\vec{F}/q$ is the force per unit test charge, $E = kq/r^2$ for a point charge, pointing away from positive and toward negative charge; field lines never cross, start on positive and end on negative charge, and crowd together where the field is strong. A dipole of moment $p = qd$ (charges $\\pm q$ a distance $d$ apart) has a field falling as $1/r^3$, namely $2kp/r^3$ on its axis and $kp/r^3$ on its equator, and it feels a torque $pE\\sin\\theta$ in a uniform field.",
        formulas: [
          "F = \\frac{kq_1q_2}{r^2}",
          "E_{point} = \\frac{kq}{r^2}",
          "p = qd",
          "E_{axis} = \\frac{2kp}{r^3}",
          "E_{equatorial} = \\frac{kp}{r^3}",
          "\\tau = pE\\sin\\theta",
        ],
      },
      {
        kind: "concept",
        title: "Work, potential and equipotentials",
        level: "B",
        body:
          "Moving a charge $q$ through a potential difference $\\Delta V$ transfers energy $W = q\\Delta V$, where the potential $V = U/q$ is potential energy per unit charge; the practical unit is the electron-volt, $1\\ \\text{eV} = 1.6\\times10^{-19}$ J, the energy a charge $e$ gains crossing one volt. Potential is a scalar: for point charges just add $V = kq/r$ with signs and no components, so at the midpoint between $+q$ and $-q$ the potential is zero while the two fields reinforce, meaning $V = 0$ never implies $E = 0$. The field is the downhill gradient of potential; in the uniform field between parallel plates $E = V/d$, and an electron released there converts $eV$ of potential energy into kinetic energy. Equipotential surfaces are perpendicular to field lines everywhere, and sliding a charge along one costs no work. A conducting sphere of radius $R$ held at potential $V$ acts outside like a point charge $Q = 4\\pi\\epsilon_0RV$, so the smaller the sphere at a given potential, the fiercer its surface field, which is the physics behind lightning conductors.",
        formulas: [
          "W = q\\,\\Delta V",
          "V_{point} = \\frac{kq}{r}",
          "E = \\frac{V}{d}",
          "1\\ \\text{eV} = 1.6\\times10^{-19}\\ \\text{J}",
        ],
      },
      {
        kind: "concept",
        title: "Current, emf, resistance and power",
        level: "B",
        body:
          "Current is the rate of charge flow, $I = Q/t$ in amperes, and it needs a closed conducting loop. A source's emf $\\mathcal{E}$ is the energy it delivers per unit charge; a real cell also has internal resistance $r$, so while delivering current $I$ its terminal voltage drops to $\\mathcal{E} - Ir$, and batteries in series add their emfs algebraically, so one cell inserted backward subtracts its emf while all the internal resistances still add. Ohm's law $V = IR$ connects current and voltage through the resistance, which for a uniform wire is $R = \\rho L/A$: double the length and $R$ doubles, double the cross-section and $R$ halves, with the resistivity $\\rho$ a material property that rises with temperature in metals. Dissipated power has three faces, $P = IV = I^2R = V^2/R$; use $I^2R$ when branches share a current, $V^2/R$ when elements share a voltage, and for maximum power in an external load choose $R = r$. Meters must not disturb the circuit they measure: an ammeter sits in series with very low resistance, a voltmeter in parallel with very high resistance.",
        formulas: [
          "I = \\frac{Q}{t}",
          "V = IR",
          "R = \\frac{\\rho L}{A}",
          "V_{terminal} = \\mathcal{E} - Ir",
          "P = IV = I^2R = \\frac{V^2}{R}",
        ],
      },
      {
        kind: "concept",
        title: "Capacitors: storing charge and energy",
        level: "C",
        body:
          "A capacitor is two conductors separated by an insulator, storing charge in the ratio $Q = CV$; for parallel plates $C = \\epsilon_r\\epsilon_0A/d$, so wider plates and narrower gaps mean more capacitance. Combinations mirror resistors in reverse: parallel capacitors add directly as $C_1 + C_2$ because they share voltage, while series capacitors combine by reciprocals and all carry the SAME charge, with the smallest capacitance forced to hold the largest voltage. The stored energy is $U = \\tfrac12CV^2 = \\tfrac12QV = Q^2/2C$, held in the electric field with density $\\tfrac12\\epsilon_0E^2$. Inserting a dielectric of constant $\\epsilon_r$ multiplies $C$: with the battery connected (fixed $V$) the charge and stored energy rise, but with the battery disconnected (fixed $Q$) the voltage and energy fall.",
        formulas: [
          "Q = CV",
          "C = \\frac{\\epsilon_r\\epsilon_0 A}{d}",
          "C_{parallel} = C_1 + C_2",
          "\\frac{1}{C_{series}} = \\frac{1}{C_1} + \\frac{1}{C_2}",
          "U = \\frac{1}{2}CV^2 = \\frac{Q^2}{2C}",
        ],
      },
      {
        kind: "concept",
        title: "Networks, Kirchhoff's laws and RC transients",
        level: "C",
        body:
          "Reduce any network by repeatedly collapsing series pairs (resistances add) and parallel pairs (reciprocals add), always working from the corners farthest from the source; the valid test is shared nodes, not shared drawing, since two elements are in series only if the SAME unavoidable current passes through both. Symmetry halves the work: in a regular tetrahedron of six equal resistors $R$ measured between adjacent vertices, the opposite vertex sits at the midpoint potential, its edges carry no current, and the answer collapses to $R/2$. When reduction fails (two sources, bridges), Kirchhoff takes over: the junction rule $\\sum I_{in} = \\sum I_{out}$ is charge conservation and the loop rule $\\sum\\Delta V = 0$ is energy conservation, so assign current directions once and keep the sign discipline to the end. A capacitor plus resistor charges with time constant $\\tau = RC$, the charge approaching $C\\mathcal{E}$ as $Q(t) = C\\mathcal{E}(1 - e^{-t/\\tau})$ and reaching 63% in one $\\tau$; the quick test is the limiting behaviour, an uncharged capacitor acting as a wire at $t = 0$ and as an open switch at $t \\to \\infty$. Household AC adds one formula worth knowing: for $V = V_0\\sin(2\\pi ft)$ the rms value is $V_0/\\sqrt{2}$ and the frequency $f$ sits inside the sine's argument.",
        formulas: [
          "\\sum I_{in} = \\sum I_{out}",
          "\\sum_{loop} \\Delta V = 0",
          "\\tau = RC",
          "Q(t) = C\\mathcal{E}\\left(1 - e^{-t/RC}\\right)",
          "V_{rms} = \\frac{V_0}{\\sqrt{2}}",
        ],
      },
      {
        kind: "example",
        title: "Midpoint of a charge pair: field versus potential",
        level: "B",
        problem:
          "Charges $q_1 = +2\\ \\mu\\text{C}$ at $x = -12$ cm and $q_2 = -2\\ \\mu\\text{C}$ at $x = +12$ cm sit on the x-axis. Find the electric field and the potential at the origin, and the force on a $-1\\ \\mu\\text{C}$ charge placed at the origin.",
        steps: [
          "Each charge is $r = 0.12$ m from the origin, and one alone contributes $E = kq/r^2 = (9\\times10^9)(2\\times10^{-6})/(0.12)^2 = 1.25\\times10^6$ N/C.",
          "Both fields point from the positive charge toward the negative one, so they reinforce to $E = 2.5\\times10^6$ N/C along $+x$.",
          "Potential is a signed scalar sum: $V = (9\\times10^9)(2\\times10^{-6})/0.12 - (9\\times10^9)(2\\times10^{-6})/0.12 = 0$.",
          "The force on the test charge is $F = qE = (1\\times10^{-6})(2.5\\times10^6) = 2.5$ N, and because the charge is negative it points opposite to $\\vec{E}$, that is toward $q_1$.",
          "Result: at the origin the field is $2.5\\times10^6$ N/C toward the negative charge, the potential is zero, and the test charge feels 2.5 N pulling it toward the positive charge.",
        ],
      },
      {
        kind: "example",
        title: "A real cell feeding a mixed network",
        level: "C",
        problem:
          "A cell of emf $\\mathcal{E} = 14$ V and internal resistance $r = 0.5\\ \\Omega$ drives a $4.5\\ \\Omega$ resistor in series with a parallel pair of $6\\ \\Omega$ and $3\\ \\Omega$. Find the cell current, the terminal voltage, each branch current, and the power wasted inside the cell.",
        steps: [
          "Collapse the parallel pair first: $1/R_p = 1/6 + 1/3 = 1/2$ gives $R_p = 2\\ \\Omega$.",
          "The full loop resistance is $R = r + 4.5 + 2 = 7\\ \\Omega$, so the cell delivers $I = \\mathcal{E}/R = 14/7 = 2$ A.",
          "The terminal voltage is $V = \\mathcal{E} - Ir = 14 - (2)(0.5) = 13$ V, of which $(2)(2) = 4$ V lies across the parallel pair.",
          "Branch currents share that 4 V: $I_6 = 4/6 = 0.67$ A and $I_3 = 4/3 = 1.33$ A, which sum back to 2 A.",
          "Power wasted inside the cell is $P = I^2r = (4)(0.5) = 2$ W, while the cell generates $\\mathcal{E}I = 28$ W, so 26 W reaches the external resistors.",
          "Result: current 2 A, terminal voltage 13 V, branch currents 0.67 A and 1.33 A, and 2 W lost as heat inside the cell.",
        ],
      },
      {
        kind: "tips",
        title: "Tricks that pay for themselves",
        items: [
          {
            tip: "Use the remove-one trick on symmetric rings and polygons: the full set gives zero field at the centre, so deleting one charge leaves a field exactly equal to one charge's contribution $kq/r^2$, aimed at the gap.",
            why: "Superposition is linear: the remaining charges must produce the exact negative of the missing charge's field, since together with it they summed to zero.",
          },
          {
            tip: "Add potentials before fields: $V$ is a scalar sum $\\sum kq/r$ with no components, and $E$ then follows from the slope of $V$ instead of from vector algebra.",
            why: "Scalar addition cannot point the wrong way, and a zero $V$ with nonzero $E$ (dipole midpoint) or a zero $E$ with nonzero $V$ (centre of a charged ring) stops being a surprise once the two operations are separated.",
          },
          {
            tip: "Remember the duality: series capacitors and parallel resistors both combine by reciprocals, and in each case the SMALLEST element dominates, so the small capacitor holds the big voltage and the small resistor draws the big current.",
            why: "Series capacitors share one charge $Q$, so $V = Q/C$ peaks at small $C$; parallel resistors share one voltage, so $I = V/R$ peaks at small $R$. One mental picture covers both.",
          },
          {
            tip: "Only call two elements series or parallel when they share the right nodes: series means the same unavoidable current, parallel means the same two nodes, no matter how the drawing lies.",
            why: "Wrong merges happen when elements merely look parallel; tracing actual junctions, as in the tetrahedron where one edge carries no current, is what makes hard networks collapse.",
          },
          {
            tip: "Test RC answers with the limits $t = 0$ and $t \\to \\infty$: an uncharged capacitor is a wire at $t = 0$ and an open switch at $t \\to \\infty$, and after one $\\tau = RC$ it has covered 63% of its journey.",
            why: "The factor $(1 - e^{-t/\\tau})$ equals 0, then $1 - 1/e \\approx 0.63$, then 1 at those three times, so the exponential reduces to plain resistor circuits you can check in seconds.",
          },
          {
            tip: "Balance every watt: $\\mathcal{E}I$ generated must equal $I^2R$ outside plus $I^2r$ inside, and maximum external power occurs exactly at $R = r$.",
            why: "The balance is energy conservation and instantly flags sign slips in loop equations; maximizing $I^2R = \\mathcal{E}^2R/(R+r)^2$ with respect to $R$ gives $R = r$.",
          },
        ],
      },
      {
        kind: "checkpoint",
        question:
          "Five equal positive charges sit evenly spaced on a circle of radius $r$. One charge is removed. The field at the centre is now:",
        options: [
          "zero, by the remaining symmetry",
          "$kq/r^2$, pointing toward the gap",
          "$kq/r^2$, pointing away from the gap",
          "$4kq/r^2$",
        ],
        answer: 1,
        explain:
          "The complete pentagon gives zero at the centre, so the four survivors produce exactly minus the removed charge's field: magnitude $kq/r^2$, directed toward the gap.",
      },
      {
        kind: "checkpoint",
        question:
          "A $3\\ \\mu\\text{F}$ and a $6\\ \\mu\\text{F}$ capacitor are connected in series across a 300 V battery. Which statement is true?",
        options: [
          "$600\\ \\mu\\text{C}$ each; the $3\\ \\mu\\text{F}$ gets 200 V",
          "$900\\ \\mu\\text{C}$ each; 150 V each",
          "the $6\\ \\mu\\text{F}$ has more charge and more voltage",
          "$600\\ \\mu\\text{C}$ each; the $6\\ \\mu\\text{F}$ gets 200 V",
        ],
        answer: 0,
        explain:
          "Series capacitors carry the same charge, $Q = C_{eq}V$ with $C_{eq} = 2\\ \\mu\\text{F}$, so $Q = 600\\ \\mu\\text{C}$; the smaller capacitor takes the larger voltage, $V = Q/C = 200$ V against 100 V.",
      },
      {
        kind: "checkpoint",
        question:
          "Mains voltage quoted as 230 V is the rms value. The peak voltage is about:",
        options: ["163 V", "230 V", "325 V", "460 V"],
        answer: 2,
        explain:
          "For $V = V_0\\sin(2\\pi ft)$ the rms value is $V_0/\\sqrt{2}$, so the peak is $\\sqrt{2}\\times230 \\approx 325$ V; rms is for heating and power, peak for insulation.",
      },
    ],
  },
  {
    topic: "magnetism",
    intro:
      "Magnetism is electricity in motion: every magnetic field is made by a moving charge or a spinning electron, and every magnetic force acts only on charges that move. That single idea organizes the whole topic: currents make fields (Biot-Savart and Ampere), fields push on currents and charges (the Lorentz force), and changing fields push back on their makers (Faraday and Lenz), which is how generators, transformers and induction cooktops earn their living. Regional papers love direction questions, loops and solenoids, and the arithmetic is friendly because $\\mu_0 = 4\\pi\\times10^{-7}$ absorbs the factors of $\\pi$.",
    bigPicture: [
      "The magnetic force $q\\vec{v}\\times\\vec{B}$ is always perpendicular to the velocity, so it does no work: magnetic fields steer particles but never change their speed. Whenever a magnetic problem seems to create kinetic energy, an electric field or a battery is hiding somewhere.",
      "One law generates every standard field: a wire gives $B \\propto 1/r$ circling the current, a loop gives $\\mu_0I/2R$ at its centre, and a solenoid gives a uniform $\\mu_0nI$ inside. Learn these three geometries and most field questions are one substitution away.",
      "Induction closes the loop between electricity and magnetism: change the flux through a circuit and an emf appears, $\\mathcal{E} = -N\\,d\\Phi/dt$, opposing the change (Lenz). This is the working principle of every generator and transformer, and the reason motion through a field costs mechanical power.",
    ],
    sections: [
      {
        kind: "intro",
        body:
          "We build the subject in logical order. First the field concept, field lines and Earth's own magnetism with its neutral points. Then the force laws, on a moving charge, on a current, and on a loop, followed by the fields made by wires, loops and solenoids. Finally the payoff: Faraday's and Lenz's laws, motional emf, inductors with their stored energy, and the LC oscillator that mirrors a mass on a spring. Work the two examples with a pencil, and use the checkpoints to drill right-hand-rule discipline.",
      },
      {
        kind: "concept",
        title: "Magnetic fields, field lines and Earth's magnetism",
        level: "B",
        body:
          "A magnetic field $\\vec{B}$, measured in tesla, is drawn with lines that run from a magnet's north pole to its south pole outside the magnet and continue through the body, forming closed loops, so unlike electric lines they never begin or end. A compass needle simply aligns with the local field. The Earth behaves like a huge bar magnet tilted slightly from the rotation axis, with its magnetic south pole facing geographic north, which is why the north tip of a compass points north; the field strength is about $3\\times10^{-5}$ T, and the field dives into the ground near the poles at the dip angle. A neutral point is a spot where a nearby magnet's field exactly cancels Earth's, leaving a compass free to point anywhere; for a magnet aligned with Earth's field it lies on the magnet's equatorial line, where the magnet's own field runs opposite to its moment.",
        formulas: [
          "B_{Earth} \\approx 3\\times10^{-5}\\ \\text{T}",
          "B_{net} = 0 \\Rightarrow B_{magnet} = B_{Earth}",
        ],
      },
      {
        kind: "concept",
        title: "Force on a moving charge and circular motion",
        level: "C",
        body:
          "A charge $q$ moving with velocity $\\vec{v}$ in field $\\vec{B}$ feels $\\vec{F} = q\\vec{v}\\times\\vec{B}$, of magnitude $qvB\\sin\\theta$: zero along the field, maximum when perpendicular, direction from the right-hand rule and REVERSED for negative charges such as electrons. Since the force is always perpendicular to $\\vec{v}$ it does no work, so speed and kinetic energy stay fixed while the path curves. A charge entering perpendicular to $\\vec{B}$ circulates with radius $r = mv/(qB)$, the magnetic force playing the centripetal role $qvB = mv^2/r$, and the period $T = 2\\pi m/(qB)$ is independent of speed, which is why the cyclotron works. At an angle to the field the particle spirals, and in crossed uniform fields the electric and magnetic forces cancel for the single speed $v = E/B$, the velocity selector behind mass spectrometers and the Hall effect, where the sideways voltage across a current-carrying strip even reveals the sign of the charge carriers.",
        formulas: [
          "F = qvB\\sin\\theta",
          "r = \\frac{mv}{qB}",
          "T = \\frac{2\\pi m}{qB}",
          "v = \\frac{E}{B}",
        ],
      },
      {
        kind: "concept",
        title: "Forces on currents, wires and loops",
        level: "C",
        body:
          "A current is a parade of moving charges, so a straight wire of length $L$ carrying $I$ in field $\\vec{B}$ feels $F = ILB\\sin\\theta$ in the direction the right-hand rule gives for the conventional current. Two long parallel wires a distance $d$ apart interact with force per unit length $F/L = \\mu_0I_1I_2/(2\\pi d)$, ATTRACTING when the currents run the same way, the exact opposite of charges and a favourite trick question. A flat loop of $N$ turns and area $A$ carrying $I$ has magnetic moment $\\mu = NIA$ and feels a torque $\\tau = NIAB\\sin\\phi$, where $\\phi$ is measured between the loop's normal (the area vector) and $\\vec{B}$; the torque turns the moment toward alignment with the field, which is how motors and moving-coil galvanometers work. The alignment energy is $U = -\\mu B\\cos\\phi$, lowest when the moment points along the field.",
        formulas: [
          "F = ILB\\sin\\theta",
          "\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}",
          "\\mu = NIA",
          "\\tau = NIAB\\sin\\phi",
          "U = -\\mu B\\cos\\phi",
        ],
      },
      {
        kind: "concept",
        title: "Fields of wires, loops and solenoids",
        level: "C",
        body:
          "Biot-Savart's rule (add up contributions proportional to $I\\,dl\\sin\\theta/r^2$ from each current element) and Ampere's law $\\oint\\vec{B}\\cdot d\\vec{l} = \\mu_0I_{enc}$ produce the three geometries worth memorizing. A long straight wire makes concentric circles of strength $B = \\mu_0I/(2\\pi r)$, curled around the current by the right-hand grip. At the centre of a circular loop of radius $R$ the field is $B = \\mu_0I/(2R)$, which is $\\pi$ times what a straight wire would give at the same distance. Inside a long solenoid with $n$ turns per metre the field is uniform, axial and strong, $B = \\mu_0nI$, and nearly zero outside; wrapping the coil around iron multiplies it by the relative permeability $\\mu_r$, often in the hundreds, which is why electromagnets have cores.",
        formulas: [
          "B_{wire} = \\frac{\\mu_0 I}{2\\pi r}",
          "B_{loop,centre} = \\frac{\\mu_0 I}{2R}",
          "B_{solenoid} = \\mu_0 nI",
          "\\mu_0 = 4\\pi\\times10^{-7}\\ \\text{T·m/A}",
        ],
      },
      {
        kind: "concept",
        title: "Electromagnetic induction: Faraday and Lenz",
        level: "C",
        body:
          "Magnetic flux $\\Phi = BA\\cos\\phi$ counts the field lines threading a loop, with $\\phi$ measured from the loop's normal, and ONLY a change in flux creates an emf: $\\mathcal{E} = -N\\,d\\Phi/dt$, Faraday's law, whose minus sign states Lenz's law, that the induced current fights the change that made it. You can change flux three ways: move a magnet, rotate the loop (a generator gives $\\mathcal{E} = NAB\\omega\\sin\\omega t$), or slide a rod along rails in a field, where the motional emf is $\\mathcal{E} = BLv$. Even an isolated rod moving across a field polarizes: charges pile up at its ends until $qE = qvB$, giving an end-to-end voltage $BLv$ with no current flowing. The induced current always converts mechanical work into electrical energy at matching rates, because the magnetic force on the induced current brakes whatever is moving.",
        formulas: [
          "\\Phi = BA\\cos\\phi",
          "\\mathcal{E} = -N\\frac{d\\Phi}{dt}",
          "\\mathcal{E} = BLv",
          "\\mathcal{E}_{gen} = NAB\\omega\\sin\\omega t",
        ],
      },
      {
        kind: "concept",
        title: "Inductance, LR circuits and LC oscillations",
        level: "C",
        body:
          "A coil resists changes in its own current: the self-induced back-emf is $\\mathcal{E} = -L\\,dI/dt$, and for a solenoid $L = \\mu_0\\mu_rn^2A\\ell$, which at fixed turns reads $L = \\mu_0N^2A/\\ell$, so stretching the same winding to twice the length HALVES the inductance. In an LR circuit the current climbs toward $\\mathcal{E}/R$ with time constant $\\tau = L/R$, while the inductor stores energy in its magnetic field, $U = \\tfrac12LI^2$, the twin of the capacitor's $\\tfrac12CV^2$. Discharging a capacitor through a coil makes the energy slosh between electric and magnetic form at $\\omega_0 = 1/\\sqrt{LC}$: the LC oscillator, the exact electrical image of a mass on a spring with $L$ as the mass and $1/C$ as the spring constant. Transformers use mutual induction to trade voltage for current, $V_s/V_p = N_s/N_p$ ideally, which is how the grid moves power at high voltage and low loss.",
        formulas: [
          "\\mathcal{E} = -L\\frac{dI}{dt}",
          "L = \\frac{\\mu_0 N^2 A}{\\ell}",
          "\\tau = \\frac{L}{R}",
          "U = \\frac{1}{2}LI^2",
          "\\omega_0 = \\frac{1}{\\sqrt{LC}}",
          "\\frac{V_s}{V_p} = \\frac{N_s}{N_p}",
        ],
      },
      {
        kind: "example",
        title: "Bending an electron beam",
        level: "C",
        problem:
          "An electron is accelerated from rest through 100 V, then enters a uniform field $B = 1.0$ mT perpendicular to its motion ($m_e = 9.1\\times10^{-31}$ kg, $e = 1.6\\times10^{-19}$ C). Find its speed, the radius of its circular path, and the circulation period.",
        steps: [
          "The electric field does work $W = eV = (1.6\\times10^{-19})(100) = 1.6\\times10^{-17}$ J, which is 100 eV of kinetic energy.",
          "Speed from kinetic energy: $v = \\sqrt{2K/m_e} = \\sqrt{(2)(1.6\\times10^{-17})/(9.1\\times10^{-31})} = 5.9\\times10^6$ m/s.",
          "Magnetic force as centripetal force gives $r = m_ev/(eB) = (9.1\\times10^{-31})(5.9\\times10^6)/[(1.6\\times10^{-19})(1.0\\times10^{-3})] = 3.4\\times10^{-2}$ m.",
          "The period is $T = 2\\pi m_e/(eB) = 2\\pi(9.1\\times10^{-31})/(1.6\\times10^{-22}) = 3.6\\times10^{-8}$ s, independent of the speed.",
          "Result: speed $5.9\\times10^6$ m/s, radius about 3.4 cm, period $3.6\\times10^{-8}$ s, and the field bent the path without adding a single joule of energy.",
        ],
      },
      {
        kind: "example",
        title: "A rod on rails: push becomes power",
        level: "C",
        problem:
          "A rod of length $L = 0.50$ m slides at a steady $v = 4.0$ m/s on rails closed through a resistor $R = 0.80\\ \\Omega$, with a uniform field $B = 0.20$ T perpendicular to the circuit's plane. Find the emf, the current, the force needed to keep the rod moving, and verify the power balance.",
        steps: [
          "The motional emf is $\\mathcal{E} = BLv = (0.20)(0.50)(4.0) = 0.40$ V.",
          "Current in the loop: $I = \\mathcal{E}/R = 0.40/0.80 = 0.50$ A.",
          "That current feels a braking force $F = BIL = (0.20)(0.50)(0.50) = 0.050$ N, so the hand must push with exactly 0.050 N.",
          "Mechanical power supplied: $P = Fv = (0.050)(4.0) = 0.20$ W.",
          "Electrical power delivered: $P = \\mathcal{E}I = (0.40)(0.50) = 0.20$ W, matching the mechanical input and appearing as heat in $R$.",
          "Result: emf 0.40 V, current 0.50 A, required force 0.050 N, and 0.20 W converted from mechanical work into electrical energy.",
        ],
      },
      {
        kind: "tips",
        title: "Right-hand rules and flux bookkeeping",
        items: [
          {
            tip: "Do the right-hand rule twice for electrons: get the $\\vec{v}\\times\\vec{B}$ direction with fingers and thumb, then reverse it, because $q$ carries its own sign into $\\vec{F} = q\\vec{v}\\times\\vec{B}$.",
            why: "The Lorentz force flips sign between positive and negative carriers, and skipping the flip is the single most common lost mark in force-direction questions.",
          },
          {
            tip: "Use the no-work test as a lie detector: in a purely magnetic field the speed cannot change, so any option with changing kinetic energy needs an electric field or a battery to be true.",
            why: "$\\vec{F}\\perp\\vec{v}$ always, so the magnetic power $\\vec{F}\\cdot\\vec{v}$ is identically zero, and the energy bookkeeping must close through other agents.",
          },
          {
            tip: "Treat neutral points as a tug-of-war: set the magnet's field equal and opposite to Earth's field, and look on the line where the magnet's contribution points against Earth's, which for a compass-aligned bar magnet is its equatorial line.",
            why: "Fields are vectors, so cancellation needs equal magnitude and opposite direction; a bar magnet's axial and equatorial fields point oppositely relative to its moment, which selects the line.",
          },
          {
            tip: "Book-keep flux with the area vector: $\\Phi = BA\\cos\\phi$ is maximal when the loop's plane is perpendicular to $\\vec{B}$ and zero when the plane is parallel, and a generator's emf peaks exactly when the flux passes through zero.",
            why: "Only the field component along the normal threads the loop; in $\\mathcal{E} = NAB\\omega\\sin\\omega t$ the sine peaks where the cosine flux is momentarily zero because the flux is changing fastest there.",
          },
          {
            tip: "For solenoid scaling at fixed turns use $L = \\mu_0N^2A/\\ell$: halving the length doubles the inductance even though the field formula $B = \\mu_0nI$ seems to care about $n$.",
            why: "Substituting $n = N/\\ell$ into $\\mu_0n^2A\\ell$ collapses the length dependence to $1/\\ell$, and questions love this apparent paradox.",
          },
          {
            tip: "Apply Lenz in two deliberate steps: first state how the flux is changing, then ask which induced current would oppose exactly that change; an approaching north pole makes the near face north to repel, a receding one makes it south to hold on.",
            why: "The induced current opposes the CHANGE of flux, not the field itself, and the repulsion or attraction you feel is precisely where your mechanical effort turns into electrical energy.",
          },
        ],
      },
      {
        kind: "checkpoint",
        question:
          "A positive charge moves in the $+x$ direction through a field pointing in the $+y$ direction. The magnetic force on it points:",
        options: [
          "in the $+z$ direction",
          "in the $-z$ direction",
          "along $+x$",
          "it is zero",
        ],
        answer: 0,
        explain:
          "$\\hat{x}\\times\\hat{y} = \\hat{z}$, the angle is 90 degrees so the force is maximal, and a positive charge needs no reversal: $\\vec{F} = q\\vec{v}\\times\\vec{B}$ points along $+z$.",
      },
      {
        kind: "checkpoint",
        question:
          "The north pole of a magnet is pushed toward a conducting loop. While it approaches, the near face of the loop acts as:",
        options: [
          "a north pole, to repel the magnet",
          "a south pole, to attract the magnet",
          "no pole, since the field is steady",
          "either pole, depending on the resistance",
        ],
        answer: 0,
        explain:
          "Lenz's law: the loop opposes the growing flux, so the induced current makes the near face a north pole that repels the approach, and overcoming that repulsion is what supplies the induced electrical energy.",
      },
      {
        kind: "checkpoint",
        question:
          "A solenoid has fixed turns and cross-sectional area, but its length is doubled by spreading the windings out. Its self-inductance:",
        options: ["doubles", "halves", "quadruples", "stays the same"],
        answer: 1,
        explain:
          "At fixed $N$, $L = \\mu_0N^2A/\\ell$; doubling $\\ell$ halves the inductance, because the turns per metre halve and the square of $n$ dominates.",
      },
    ],
  },
  {
    topic: "modern",
    intro:
      "Modern physics is the physics of extremes: speeds close to $c$, sizes close to atoms, and the universe as a whole. It looks like a pile of unrelated formulas, but one idea ties it together, namely that energy comes in quanta. Light arrives in photons of energy $hf$ and momentum $h/\\lambda$, matter travels as waves of wavelength $h/p$, mass itself is frozen energy $mc^2$, and the cosmic redshift is the stretching of every photon's wavelength by the expansion of space. The regional questions here are formula-driven and friendly to careful arithmetic: time-dilated pions, photoelectric thresholds, half-life fractions and Hubble-law speeds are the recurring guests.",
    bigPicture: [
      "Three constants run the whole topic: $h = 6.63\\times10^{-34}$ J·s rules quanta, $c = 3\\times10^8$ m/s rules relativity, and $1\\ \\text{u} = 931.5$ MeV rules nuclei. Almost every modern-physics question is a one-formula substitution once you know which regime you are in.",
      "The photon is the hinge connecting everything: the photoelectric effect, Compton scattering, radiation pressure on solar sails, atomic spectral lines and cosmological redshift are all problems about a carrier with $E = hf$ and $p = E/c$ in different costumes.",
      "Relativity and quantum behaviour replace, not extend, classical intuition: use $\\gamma$ factors when speeds approach $c$, and wavelengths $h/p$ when masses approach atomic size. Below $0.1c$ and above molecular scales, Newton remains perfectly fine.",
    ],
    sections: [
      {
        kind: "intro",
        body:
          "The lesson runs as follows: photons and the photoelectric effect first, then matter waves with Bohr's atomic levels, then special relativity in two passes (spacetime, then energy), then the nucleus with its binding energy and decay clock, and finally cosmology with redshift and Hubble's law. Two worked examples, a complete photoelectric calculation and a pion followed in both frames, show the standard exam patterns. The tips focus on unit discipline, proper time, and the limiting cases that catch wrong formulas.",
      },
      {
        kind: "concept",
        title: "Photons and the photoelectric effect",
        level: "C",
        body:
          "Light delivers energy in indivisible packets: each photon carries $E = hf = hc/\\lambda$ and momentum $p = E/c = h/\\lambda$, so a beam of $N$ photons per second carries momentum flux $Nhf/c$, doubled on reflection, which is the physics of radiation pressure and solar sails. The photoelectric effect proves the packet picture: an electron escapes a metal only when a SINGLE photon exceeds the work function $\\phi$, giving $K_{max} = hf - \\phi$ with a sharp threshold frequency $f_0 = \\phi/h$; intensity changes only the COUNT of electrons, never their maximum energy. Fast arithmetic: $hc = 1240$ eV·nm, so 450 nm light is a 2.76 eV photon and a 542 nm threshold means $\\phi = 2.29$ eV. In Compton scattering a photon glances off an electron and lengthens by $\\Delta\\lambda = (h/m_ec)(1 - \\cos\\theta)$, at most $2h/m_ec = 4.9$ pm, which is pure billiards with energy and momentum conserved.",
        formulas: [
          "E = hf = \\frac{hc}{\\lambda}",
          "p = \\frac{h}{\\lambda} = \\frac{E}{c}",
          "K_{max} = hf - \\phi",
          "f_0 = \\frac{\\phi}{h}",
          "\\Delta\\lambda = \\frac{h}{m_ec}(1 - \\cos\\theta)",
          "hc = 1240\\ \\text{eV·nm}",
        ],
      },
      {
        kind: "concept",
        title: "Matter waves and Bohr's atomic levels",
        level: "C",
        body:
          "De Broglie's symmetry: if light waves act like particles, particles act like waves, with $\\lambda = h/p$; an electron accelerated through $V$ volts has $\\lambda = h/\\sqrt{2m_eeV} \\approx 1.23/\\sqrt{V}$ nm, which is why electron microscopes resolve far more than light microscopes. Bohr's model tames this wave into orbits: angular momentum comes in units of $\\hbar$, and hydrogen's levels are $E_n = -13.6/n^2$ eV with radii $r_n = 0.53n^2$ Å, the negative sign meaning the electron is bound and ionizing hydrogen from the ground state costs exactly 13.6 eV. Light is emitted or absorbed only on jumps, $hf = E_i - E_f$, giving the sharp spectral series. For a hydrogen-like ion of nuclear charge $Z$ the energies scale as $Z^2$ (the helium ion ionizes at $4\\times13.6 = 54.4$ eV) and radii as $1/Z$, and swapping in a heavier orbiting particle shrinks the orbit in proportion to its mass, so a muonic atom has a Bohr radius about 207 times smaller.",
        formulas: [
          "\\lambda = \\frac{h}{p}",
          "\\lambda_{e} = \\frac{1.23}{\\sqrt{V}}\\ \\text{nm}",
          "E_n = -\\frac{13.6\\ \\text{eV}}{n^2}",
          "r_n = 0.53\\,n^2\\ \\text{Å}",
          "hf = E_i - E_f",
        ],
      },
      {
        kind: "concept",
        title: "Special relativity: time dilation and length contraction",
        level: "C",
        body:
          "Two postulates, identical laws in every inertial frame and light moving at $c$ for every observer, force the Lorentz factor $\\gamma = 1/\\sqrt{1 - v^2/c^2}$ into every measurement of time and length. Moving clocks run slow: $\\Delta t = \\gamma\\,\\Delta\\tau$, where $\\Delta\\tau$ is the PROPER time measured by the clock present at both events (the pion's own lifetime); a pion resting for $1.0\\times10^{-8}$ s but surviving $3.91\\times10^{-8}$ s in the lab has $\\gamma = 3.91$, hence $v = c\\sqrt{1 - 1/\\gamma^2} \\approx 0.967c$. Lengths contract along the motion by the same factor, $L = L_0/\\gamma$: at $0.8c$ ($\\gamma = 5/3$) a sphere becomes an ellipsoid of volume $0.6V_0$, and a 2 m stick seen as 1 m means $\\gamma = 2$ and $v = (\\sqrt{3}/2)c \\approx 0.866c$. Velocities compose as $w = (u + v)/(1 + uv/c^2)$, the Fizeau formula, and nothing massive reaches $c$ because $\\gamma$ blows up. Switch these formulas on for $v \\gtrsim 0.1c$; below that, classical physics is accurate enough.",
        formulas: [
          "\\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}}",
          "\\Delta t = \\gamma\\,\\Delta\\tau",
          "L = \\frac{L_0}{\\gamma}",
          "w = \\frac{u + v}{1 + uv/c^2}",
        ],
      },
      {
        kind: "concept",
        title: "Relativistic energy: $E = mc^2$",
        level: "C",
        body:
          "Mass is a form of energy: every mass $m$ at rest holds $E_0 = mc^2$ (0.511 MeV for an electron, 938 MeV for a proton), and a moving body's total energy is $E = \\gamma mc^2 = E_0 + K$. Energy, momentum and mass lock together through $E^2 = (pc)^2 + (mc^2)^2$, the relativistic Pythagorean theorem. A photon has no mass, so for it $E = pc$ exactly, which is why a beam of power $P$ carries momentum per second $P/c$, doubled to $2P/c$ by a mirror, and why a photon can create a particle-antiparticle pair only if its energy exceeds $2mc^2$ (1.022 MeV for an electron pair). Rest energy also explains the nucleus: percent-level mass deficits correspond to the MeV-scale binding energies that hold nuclei together.",
        formulas: [
          "E_0 = mc^2",
          "E = \\gamma mc^2 = E_0 + K",
          "E^2 = (pc)^2 + (mc^2)^2",
          "F = \\frac{P}{c}",
          "F = \\frac{2P}{c}",
        ],
      },
      {
        kind: "concept",
        title: "The nucleus: binding energy, decay and half-life",
        level: "C",
        body:
          "A nucleus of $Z$ protons and $N$ neutrons weighs LESS than its parts; the missing mass, the mass defect $\\Delta m$, is the binding energy $E_b = \\Delta mc^2$, worth 931.5 MeV per atomic mass unit and about 8 MeV per nucleon near iron at the peak of the stability curve. Decay conserves charge and nucleon number: alpha emission removes a $^4_2$He nucleus ($A \\to A-4$, $Z \\to Z-2$), beta-minus converts a neutron into a proton ($Z \\to Z+1$ with $A$ unchanged, plus an antineutrino), and gamma radiation carries away energy without touching $Z$ or $A$. Radioactive decay is a memoryless lottery: $N = N_0e^{-\\lambda t}$ with $\\lambda = \\ln 2/T_{1/2}$ and activity $A = \\lambda N$, so after $n = t/T_{1/2}$ half-lives the surviving fraction is exactly $2^{-n}$, and 105 hours on a 60-hour clock is $n = 1.75$, leaving $2^{-1.75} \\approx 30\\%$. Penetration tracks the particle: alpha stops in paper, beta in a few millimetres of metal, gamma needs centimetres of lead.",
        formulas: [
          "E_b = \\Delta m\\,c^2",
          "1\\ \\text{u} = 931.5\\ \\text{MeV}",
          "N = N_0e^{-\\lambda t}",
          "\\lambda = \\frac{\\ln 2}{T_{1/2}}",
          "A = \\lambda N",
          "\\frac{N}{N_0} = 2^{-t/T_{1/2}}",
        ],
      },
      {
        kind: "concept",
        title: "Cosmology: redshift and Hubble's law",
        level: "C",
        body:
          "Galaxies recede with speed proportional to distance, $v = H_0d$ with $H_0 \\approx 70$ km/s per megaparsec, not because galaxies fly through space but because space itself stretches, so there is no centre and no edge. The stretching shows in every photon: redshift $z = (\\lambda_{obs} - \\lambda_{emit})/\\lambda_{emit}$ with $v \\approx cz$ for nearby galaxies, and in general $1 + z$ is the factor by which the universe has grown since the light set out, while each photon's energy has fallen by $1/(1+z)$. Consequences worth quoting: the cosmic microwave background is the cooled afterglow of the hot, dense early universe, now at 2.7 K, and the age of the universe is of order $1/H_0 \\approx 14$ billion years. Watch units: $H_0$ mixes km/s with Mpc ($1\\ \\text{Mpc} = 3.09\\times10^{22}$ m), and if $H_0$ were suddenly zero the expansion would stop and the universe would simply coast.",
        formulas: [
          "v = H_0d",
          "z = \\frac{\\lambda_{obs} - \\lambda_{emit}}{\\lambda_{emit}}",
          "v \\approx cz",
          "1 + z = \\frac{a_{now}}{a_{then}}",
          "t_{age} \\sim \\frac{1}{H_0}",
        ],
      },
      {
        kind: "example",
        title: "A complete photoelectric calculation",
        level: "C",
        problem:
          "Light of wavelength 450 nm falls on a sodium surface whose photoelectric threshold is 542 nm. Find the work function of sodium, the maximum kinetic energy of the ejected electrons, and the stopping potential.",
        steps: [
          "Work function from the threshold wavelength: $\\phi = hc/\\lambda_0 = 1240/542 = 2.29$ eV.",
          "Photon energy of the incident light: $E = hc/\\lambda = 1240/450 = 2.76$ eV.",
          "Einstein's photoelectric equation: $K_{max} = E - \\phi = 2.76 - 2.29 = 0.47$ eV.",
          "The stopping potential $V_s$ just turns back the fastest electrons, $eV_s = K_{max}$, so $V_s = 0.47$ V.",
          "Result: work function 2.29 eV, maximum kinetic energy 0.47 eV, stopping potential 0.47 V; brightening the lamp would add electrons, never electron volts.",
        ],
      },
      {
        kind: "example",
        title: "The pion, watched from both frames",
        level: "C",
        problem:
          "A pion's rest-frame lifetime is $1.0\\times10^{-8}$ s, but in the laboratory it survives $3.91\\times10^{-8}$ s before decaying. Find its speed, the distance it covers in the lab, and verify the story from the pion's own frame.",
        steps: [
          "The pion's own clock reads the proper time, $\\Delta\\tau = 1.0\\times10^{-8}$ s, so $\\gamma = \\Delta t/\\Delta\\tau = 3.91$.",
          "Invert the Lorentz factor: $v = c\\sqrt{1 - 1/\\gamma^2} = c\\sqrt{1 - 1/15.3} = 0.967c$.",
          "Lab-frame distance: $d = v\\,\\Delta t = (0.967)(3.0\\times10^8)(3.91\\times10^{-8}) = 11.3$ m.",
          "In the pion's frame the same distance is length-contracted: $d' = d/\\gamma = 11.3/3.91 = 2.9$ m.",
          "Cross-check: crossing 2.9 m at $0.967c \\approx 2.9\\times10^8$ m/s takes $2.9/(2.9\\times10^8) = 1.0\\times10^{-8}$ s, exactly the pion's own lifetime, so both accounts agree.",
          "Result: speed $0.967c$, about 11.3 m of lab travel, which the pion sees as 2.9 m crossed within its own $10^{-8}$ s lifetime.",
        ],
      },
      {
        kind: "tips",
        title: "Constants, units and sanity checks",
        items: [
          {
            tip: "Do light calculations in eV and nm: $hc = 1240$ eV·nm turns any wavelength into photon energy with one division, and you switch to joules only when mechanics (forces, speeds) enters.",
            why: "Photoelectric, Bohr and nuclear data come quoted in eV or MeV, and mixing joules with eV mid-problem is the leading arithmetic killer in this topic.",
          },
          {
            tip: "Identify proper time before touching $\\gamma$: it is the interval measured where both events happen at the same place, the travelling particle's own clock, and it is always the SHORTER time.",
            why: "$\\Delta t = \\gamma\\Delta\\tau$ with $\\gamma \\geq 1$; swapping the two intervals inverts the dilation and every downstream answer with it.",
          },
          {
            tip: "For hydrogen-like systems scale instead of recomputing: $E_n \\propto Z^2$ and $r_n \\propto 1/Z$, and both scale inversely with the orbiting particle's mass, so the helium ion ionizes at 54.4 eV and a muonic orbit is about 207 times tighter.",
            why: "Bohr's derivation keeps $m$ and $Z$ explicit ($E \\propto mZ^2$, $r \\propto 1/mZ$), so ratios to hydrogen need no new calculation.",
          },
          {
            tip: "Bracket relativity answers with limits: every correct formula must give the classical result as $v \\to 0$ and must behave correctly (diverge or vanish) as $v \\to c$.",
            why: "$\\gamma \\to 1$ recovers Newton and $\\gamma \\to \\infty$ forbids $c$; a formula failing either limit is misremembered, and multiple-choice options usually include exactly such a trap.",
          },
          {
            tip: "Convert elapsed time to half-lives, then use $2^{-n}$: with $n = t/T_{1/2}$ possibly fractional, 105 hours on a 60-hour clock gives $2^{-1.75} \\approx 0.30$ without any exponential button.",
            why: "$e^{-\\lambda t}$ with $\\lambda = \\ln 2/T_{1/2}$ is exactly a power of one half, so the fraction always sits between neighbouring powers of two, above 1/4 and below 1/2 here.",
          },
          {
            tip: "Read decay equations as two ledgers: balance nucleon number on top and charge on the bottom, and the unknown particle identifies itself (alpha removes 4 and 2; beta-minus raises $Z$ by 1 at fixed $A$).",
            why: "Decay conserves both totals exactly, and the leftover that changes neither row is the gamma photon or neutrino, which is how those particles were first predicted.",
          },
        ],
      },
      {
        kind: "checkpoint",
        question:
          "A spherical ball moves at $0.8c$ along the x-axis. What volume does a ground observer measure?",
        options: [
          "the same volume",
          "$0.6V$",
          "$0.8V$",
          "$0.36V$",
        ],
        answer: 1,
        explain:
          "$\\gamma = 1/\\sqrt{1 - 0.64} = 5/3$; only the dimension along the motion contracts, so $V' = V/\\gamma = 0.6V$.",
      },
      {
        kind: "checkpoint",
        question:
          "In the photoelectric effect, doubling the intensity of light above the threshold (same frequency) does what to the emitted electrons?",
        options: [
          "doubles their maximum kinetic energy",
          "doubles both their energy and their number",
          "keeps their maximum energy the same and roughly doubles their number",
          "halves the stopping potential",
        ],
        answer: 2,
        explain:
          "Each photon carries $hf$, so $K_{max} = hf - \\phi$ is fixed by frequency alone; intensity adds photons per second, so only the electron count rises.",
      },
      {
        kind: "checkpoint",
        question:
          "A nuclide has a half-life of 60 hours. What fraction of its initial activity remains after 105 hours?",
        options: ["about 50%", "about 30%", "about 25%", "about 12%"],
        answer: 1,
        explain:
          "105 h is $n = 105/60 = 1.75$ half-lives, so the surviving fraction is $2^{-1.75} \\approx 0.30$, above one quarter and below one half.",
      },
    ],
  },
];

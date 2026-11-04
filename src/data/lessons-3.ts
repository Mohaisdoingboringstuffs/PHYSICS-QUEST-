// Lessons part 3: waves, heat, optics
import type { Lesson } from "./lesson-types";

export const lessons3: Lesson[] = [
  {
    topic: "waves",
    intro:
      "A wave is a travelling disturbance that carries energy and momentum from place to place while the medium itself goes nowhere: after a ripple or a sound passes, every particle of the medium is back where it started. One mathematical framework describes ripples on a pond, sound in air, vibrations on a string and even light, so mastering waves pays off across the whole syllabus. This lesson builds the description of travelling waves, sound and echoes, standing waves on strings and pipes, beats, intensity, and the Doppler effect, in the order olympiad problems use them.",
    bigPicture: [
      "Waves are the syllabus shared language: the same $v = f\\lambda$, superposition and Doppler ideas reappear in sound, water waves, the interference fringes of the optics topic, and the phase language $\\omega = 2\\pi f$ of oscillations.",
      "Reading a wave equation is a tested skill almost every regional year: given a formula like $y = A\\sin(kx - \\omega t)$ or a Gaussian pulse, you must extract frequency, wavelength, speed and direction mechanically and fast.",
      "The applications are everywhere: ultrasound scans, sonar, noise-cancelling headphones, musical instruments and radar speed guns are all direct uses of the physics in this lesson.",
    ],
    sections: [
      {
        kind: "intro",
        body:
          "By the end of this lesson you should be able to read a wave equation and extract its speed, wavelength and direction, handle echo and ultrasound calculations, predict the harmonic series of strings and pipes, count beats, apply the inverse-square intensity law, and compute Doppler shifts for moving sources and observers. Work through the concepts in order, then rehearse with the worked examples and checkpoints.",
      },
      {
        kind: "concept",
        title: "What a wave transports",
        level: "B",
        body:
          "A wave transports energy and momentum through a medium without transporting matter: each particle only oscillates about its own equilibrium position. Mechanical waves need a material medium, which is why sound cannot cross vacuum, while light needs none. In a transverse wave the particles oscillate perpendicular to the direction of travel, like a plucked string or a light wave; in a longitudinal wave they oscillate along the direction of travel, compressing and stretching the medium as sound does. Water ripples are a mixture of both: surface particles move in small ellipses, which is why a floating leaf bobs in place instead of riding the wave.",
        formulas: [
          "\\text{transverse: displacement} \\perp \\text{propagation};\\qquad \\text{longitudinal: displacement} \\parallel \\text{propagation}",
          "\\text{wave speed} = \\sqrt{\\frac{\\text{elastic property}}{\\text{inertial property}}}",
        ],
      },
      {
        kind: "concept",
        title: "Frequency, wavelength and wave speed",
        level: "B",
        body:
          "A sinusoidal travelling wave is written $y(x,t) = A\\sin(kx - \\omega t)$, where $A$ is the amplitude, $k = 2\\pi/\\lambda$ the wavenumber and $\\omega = 2\\pi f$ the angular frequency; the sign of the $\\omega t$ term fixes the direction, here toward $+x$. The wave speed obeys $v = f\\lambda = \\omega/k$ and is set by the MEDIUM: $v = \\sqrt{F_T/\\mu}$ on a stretched string (tension over mass per unit length) and $v = \\sqrt{\\gamma P/\\rho}$ for sound in a gas. The source sets the frequency, so when a wave crosses into a new medium its frequency is unchanged and only the wavelength adapts through $\\lambda = v/f$. To find the speed of any pulse from its formula, track a point of constant phase: for the Gaussian $\\psi = A\\,e^{-a(bx+ct)^2}$ the peak sits where $bx + ct = 0$, so it moves toward $-x$ with speed $c/b$.",
        formulas: [
          "y(x,t) = A\\sin(kx - \\omega t)",
          "v = f\\lambda = \\frac{\\omega}{k}",
          "v_{string} = \\sqrt{\\frac{F_T}{\\mu}},\\qquad v_{sound} = \\sqrt{\\frac{\\gamma P}{\\rho}}",
        ],
      },
      {
        kind: "concept",
        title: "Sound: hearing ranges and echoes",
        level: "B",
        body:
          "The human ear hears frequencies from about 20 Hz up to 20 kHz; below that lies infrasound (earthquake waves) and above it ultrasound (bats, sonar, medical scans), which is useful precisely because its short wavelength gives fine resolution. Sound in air travels at roughly 343 m/s at 20 degrees C, increasing by about 0.6 m/s per degree because warmer air is less dense; the speed depends on the gas and its temperature, not on frequency or loudness. An echo is reflected sound: the wave covers the distance to the obstacle and back, so the obstacle distance is $d = vt/2$. The ear keeps a sensation for about 0.1 s, so a distinct echo needs a round trip of at least 0.1 s, which means the wall must be at least about 17 m away.",
        formulas: [
          "d = \\frac{v\\,t}{2}\\ \\text{(echo)}",
          "v \\approx 331 + 0.6\\,T_{\\circ C}\\ \\text{m/s in air}",
          "\\text{audible range: } 20\\ \\text{Hz} \\le f \\le 20\\ \\text{kHz}",
        ],
      },
      {
        kind: "concept",
        title: "Superposition: standing waves, harmonics and beats",
        level: "C",
        body:
          "Overlapping waves add displacement by displacement (superposition), and this single rule produces three exam favourites. Two identical waves travelling in opposite directions form a standing wave $y = 2A\\sin(kx)\\cos(\\omega t)$ with fixed nodes spaced $\\lambda/2$ apart and antinodes midway between; reading such an equation gives $f = \\omega/2\\pi$ and $\\lambda = 2\\pi/k$ straight from the coefficients. A string fixed at both ends supports only wavelengths that fit a whole number of loops, $\\lambda_n = 2L/n$, giving $f_n = nv/2L$ with all harmonics $n = 1, 2, 3, ...$ (a pipe open at both ends behaves the same way). A pipe closed at one end has a node at the closed end and an antinode at the open end, giving $f_n = nv/4L$ with ODD $n$ only, so its second resonance is $3f_1$, not $2f_1$. Two waves of nearby frequencies $f_1$ and $f_2$ produce beats, a slow loud-soft throbbing at $f_{beat} = |f_1 - f_2|$, which is how musicians tune: adjust until the beats disappear.",
        formulas: [
          "y = 2A\\sin(kx)\\cos(\\omega t)\\ \\text{(standing wave)}",
          "f_n = \\frac{nv}{2L}\\ \\text{(string or open pipe, all } n\\text{)}",
          "f_n = \\frac{nv}{4L},\\quad n\\ \\text{odd}\\ \\text{(closed pipe)}",
          "f_{beat} = |f_1 - f_2|",
        ],
      },
      {
        kind: "concept",
        title: "Intensity and the inverse-square law",
        level: "C",
        body:
          "Intensity is power per unit area, $I = P/A$, and for a point source radiating equally in all directions the power spreads over spheres of area $4\\pi r^2$, so $I = P/(4\\pi r^2)$. Doubling the distance cuts intensity to one quarter, and since intensity is proportional to amplitude squared ($I \\propto A^2$), the amplitude itself only halves. Comparisons never need the absolute power: the ratio $I_1/I_2 = (r_2/r_1)^2$ does the job alone. Loudness is quoted in decibels, $\\beta = 10\\log_{10}(I/I_0)$ with $I_0 = 10^{-12}$ W/m$^2$ at the threshold of hearing; every factor of ten in intensity adds 10 dB, and doubling the distance subtracts about 6 dB.",
        formulas: [
          "I = \\frac{P}{4\\pi r^2},\\qquad \\frac{I_1}{I_2} = \\left(\\frac{r_2}{r_1}\\right)^2",
          "\\beta = 10\\log_{10}\\frac{I}{I_0},\\qquad I_0 = 10^{-12}\\ \\text{W/m}^2",
          "I \\propto A^2",
        ],
      },
      {
        kind: "concept",
        title: "The Doppler effect",
        level: "C",
        body:
          "Relative motion between source and observer shifts the received frequency: $f' = f\\,(v \\pm v_o)/(v \\mp v_s)$, with $v$ the wave speed in the medium and $v_o$, $v_s$ the observer and source speeds along the line joining them. Sign logic: approach always raises the pitch, so put $+v_o$ in the numerator when the observer moves toward the source and $-v_s$ in the denominator when the source moves toward the observer, and reverse both signs for receding. A stationary 500 Hz siren heard by an observer moving away at 34 m/s with $v = 340$ m/s gives $f' = 500(340 - 34)/340 = 450$ Hz. When both move, apply both corrections: a 5000 Hz siren chasing an observer ahead, source at 30 m/s and observer at 45 m/s in the same direction, gives $f' = 5000(340 - 45)/(340 - 30) \\approx 4758$ Hz. For light the non-relativistic shift is $\\Delta f/f \\approx v/c$ (redshift for recession), the tool behind radar speed guns and the expanding-universe redshift.",
        formulas: [
          "f' = f\\,\\frac{v \\pm v_o}{v \\mp v_s}",
          "\\text{toward: } f' = f\\frac{v + v_o}{v - v_s};\\qquad \\text{away: } f' = f\\frac{v - v_o}{v + v_s}",
          "\\text{light: } \\frac{\\Delta f}{f} \\approx \\frac{v}{c}",
        ],
      },
      {
        kind: "example",
        title: "Echo range and clap wavelength",
        level: "B",
        problem:
          "A boy standing 85 m from a tall wall claps once and hears the echo 0.5 s later. Take the speed of sound as 340 m/s. Verify the distance from the echo timing and find the wavelength of the 680 Hz clap.",
        steps: [
          "The clap must travel to the wall and back, so the total path length is $2d = vt$.",
          "Substituting, $2d = 340 \\times 0.5 = 170$ m, which gives $d = 85$ m, exactly the stated distance.",
          "The wavelength follows from $\\lambda = v/f$ using the same speed $v = 340$ m/s.",
          "$\\lambda = 340/680 = 0.5$ m, a wavelength comfortably inside the audible band.",
          "Result: the wall is 85 m away and the clap has a wavelength of 0.5 m.",
        ],
      },
      {
        kind: "example",
        title: "String harmonics meet a tuning fork",
        level: "C",
        problem:
          "A 0.6 m guitar string is under tension so that waves travel along it at 240 m/s. A 610 Hz tuning fork sounds together with the string vibrating at its third harmonic. Find the fundamental frequency, the third harmonic, and the beat frequency heard.",
        steps: [
          "The fundamental of a string fixed at both ends is $f_1 = v/2L$.",
          "$f_1 = 240/(2 \\times 0.6) = 240/1.2 = 200$ Hz.",
          "The third harmonic is $3f_1 = 600$ Hz, the frequency at which the string actually vibrates.",
          "Beats between string and fork occur at $f_{beat} = |610 - 600| = 10$ Hz.",
          "Result: the fundamental is 200 Hz, the string sounds 600 Hz, and the listener hears 10 beats per second.",
        ],
      },
      {
        kind: "tips",
        title: "Tricks for wave problems",
        items: [
          {
            tip: "Pin the frequency first: across a boundary between media the frequency never changes, and the wavelength rebuilds itself through $\\lambda = v/f$.",
            why: "The incoming wave drives the boundary to oscillate at the source rate; the new medium only decides how far each cycle travels.",
          },
          {
            tip: "Count loops to name a harmonic: on a string $L = n\\lambda/2$, in a closed pipe $L = n\\lambda/4$ with $n$ odd, so sketch the nodes first and the formula follows.",
            why: "Fixed ends and closed pipe ends must be nodes, and each node-to-node span is exactly half a wavelength.",
          },
          {
            tip: "For Doppler problems write the sentence first (who moves, approaching or receding), then choose signs so that approaching always raises $f'$; test your answer by setting a receding observer at $v_o = v$, where the frequency must collapse toward zero.",
            why: "The sign structure of $f' = f(v \\pm v_o)/(v \\mp v_s)$ is the top error source in this topic; a physical sanity test catches a flipped sign instantly.",
          },
          {
            tip: "Work intensity comparisons as pure ratios: $I_1/I_2 = (r_2/r_1)^2$ needs no absolute power, every doubling of distance is minus about 6 dB, and every factor of ten is plus 10 dB.",
            why: "Power spreads over the sphere area $4\\pi r^2$, and the logarithm in $\\beta$ converts multiplicative factors into additions.",
          },
          {
            tip: "Read wave equations mechanically: the coefficient of $t$ is $\\omega$, the coefficient of $x$ is $k$, so $f = \\omega/2\\pi$, $\\lambda = 2\\pi/k$, $v = \\omega/k$, and the sign between $kx$ and $\\omega t$ gives the direction of travel.",
            why: "For a Gaussian $e^{-a(bx+ct)^2}$ the crest satisfies $bx + ct = 0$, giving $x(t) = -ct/b$: motion toward $-x$ at speed $c/b$.",
          },
          {
            tip: "Treat beats as a tuning tool: $f_{beat} = |f_1 - f_2|$ is a difference, never a sum, and it vanishes when the two frequencies match.",
            why: "Two close frequencies drift in and out of phase once per cycle of their difference, loud where they add and silent where they cancel.",
          },
        ],
      },
      {
        kind: "checkpoint",
        question: "A water wave slows down as it enters shallow water. Which quantity stays the same?",
        options: ["Speed", "Wavelength", "Frequency", "Amplitude"],
        answer: 2,
        explain:
          "The source sets the frequency and no medium can change it; the slower speed only shrinks the wavelength through $\\lambda = v/f$.",
      },
      {
        kind: "checkpoint",
        question: "A pipe closed at one end resonates at 220 Hz as its fundamental. At what frequency is its next resonance?",
        options: ["330 Hz", "440 Hz", "550 Hz", "660 Hz"],
        answer: 3,
        explain:
          "Closed pipes support only odd harmonics, so the next resonance is $3 \\times 220 = 660$ Hz; 440 Hz would need an even harmonic, whose pattern puts a node where the closed end demands an antinode.",
      },
      {
        kind: "checkpoint",
        question: "A wind blows steadily from a stationary siren toward a stationary listener. What frequency does the listener hear?",
        options: ["Higher than emitted", "Lower than emitted", "The same as emitted", "Nothing, wind blocks sound"],
        answer: 2,
        explain:
          "Doppler shifts need relative motion between source and observer through the medium; here both move at the same speed relative to the air, so the numerator and denominator corrections cancel and the pitch is unchanged (only the effective wave speed differs).",
      },
    ],
  },
  {
    topic: "heat",
    intro:
      "Heat is energy in transit; temperature measures how hot something is, set by the average kinetic energy of its particles. Keeping the two apart, then tracking energy with specific heats, latent heats and the gas laws, carries you from Class V arithmetic all the way to the Carnot limit. This lesson runs that full ladder: scales and conversion, calorimetry, the three transfer modes, thermal expansion, phase change, ideal gases with kinetic theory, the first law and engine efficiency.",
    bigPicture: [
      "Energy bookkeeping is the spine of the whole topic: whether the question mixes liquids, melts ice, compresses a gas or radiates from a hot body, everything reduces to counting joules with $Q = mc\\Delta T$, $Q = mL$, $W = P\\Delta V$ and $P = e\\sigma A T^4$.",
      "Gas questions enforce one habit: convert to kelvin first, because every proportionality in the gas laws, kinetic theory and Carnot efficiency is anchored at absolute zero.",
      "Thermodynamics connects forward to engines and weather and backward to mechanics through the mechanical equivalent of heat: work and heat are the same currency counted in different units.",
    ],
    sections: [
      {
        kind: "intro",
        body:
          "This lesson climbs from reading thermometers to the Carnot limit: scales and conversion, calorimetry with specific and latent heats, the three transfer modes, thermal expansion, gas laws with kinetic theory, and finally the first law with engine efficiency. Each concept carries a level tag showing which class band needs it, so younger students can stop at their tagged level while older students should treat every section as required.",
      },
      {
        kind: "concept",
        title: "Temperature, scales and conversion",
        level: "A",
        body:
          "Temperature measures the average kinetic energy of microscopic motion, while heat is energy transferred because of a temperature difference; a spark at 1000 degrees C carries far less heat than a cup of tea at 80 degrees C. Three scales matter: Celsius, Fahrenheit and the absolute kelvin scale, whose zero (0 K = -273.15 degrees C) is the temperature at which classical particle motion is minimal. The conversions are $T_F = \\frac{9}{5}T_C + 32$ and $T_K = T_C + 273.15$; a temperature DIFFERENCE of one degree C equals a difference of one kelvin, so $\\Delta T$ never needs converting. Gas laws, kinetic theory and Carnot efficiency all demand kelvin, never degrees C.",
        formulas: [
          "T_K = T_C + 273.15",
          "T_F = \\frac{9}{5}T_C + 32",
          "\\Delta T: \\ 1^{\\circ}\\text{C} = 1\\ \\text{K}",
        ],
      },
      {
        kind: "concept",
        title: "Specific heat, calorimetry and the mechanical equivalent",
        level: "B",
        body:
          "Changing a body's temperature by $\\Delta T$ costs $Q = mc\\Delta T$, where $c$ is the specific heat; water's $c = 4186$ J/(kg degrees C) is unusually large, which is why coastal climates stay mild and why water is the standard coolant. In a mixing problem energy is conserved: heat gained by the cold bodies equals heat lost by the hot bodies, and when both are water the same $c$ cancels from both sides. Work and heat are interchangeable at a fixed rate, Joule's mechanical equivalent: 1 calorie = 4.186 J, so one food Calorie (kcal) is about 4200 J of mechanical energy. An immersion heater converts electrical energy $Pt$ into heat, and any real device loses part of it, so measured heating times always run longer than the ideal calculation.",
        formulas: [
          "Q = mc\\Delta T",
          "\\sum Q_{gained} = \\sum Q_{lost}",
          "1\\ \\text{cal} = 4.186\\ \\text{J},\\qquad c_{water} = 4186\\ \\text{J/(kg K)}",
        ],
      },
      {
        kind: "concept",
        title: "The three modes of heat transfer",
        level: "A",
        body:
          "Conduction passes energy particle-to-particle through matter at a rate $Q/t = kA\\Delta T/L$ for a slab of conductivity $k$, area $A$ and thickness $L$; metals conduct best because free electrons ferry the energy. Convection moves heat by bulk motion of a fluid (sea breeze, boiling water, radiator loops), so it needs a fluid and cannot operate inside a solid. Radiation needs no medium at all: every body radiates $P = e\\sigma A T^4$ with emissivity $e \\le 1$, and the net exchange with surroundings at $T_s$ is $e\\sigma A(T^4 - T_s^4)$. The fourth-power law is dramatic: tripling the absolute temperature multiplies the radiated power by $3^4 = 81$.",
        formulas: [
          "\\frac{Q}{t} = \\frac{kA\\,\\Delta T}{L}",
          "P = e\\sigma A T^4,\\qquad P_{net} = e\\sigma A(T^4 - T_s^4)",
          "\\sigma = 5.67\\times10^{-8}\\ \\text{W/(m}^2\\text{K}^4)",
        ],
      },
      {
        kind: "concept",
        title: "Thermal expansion",
        level: "B",
        body:
          "Heated solids expand in every dimension: lengths grow by $\\Delta L = \\alpha L_0\\Delta T$, areas by $\\Delta A = \\beta A_0\\Delta T$ and volumes by $\\Delta V = \\gamma V_0\\Delta T$, with the coefficients locked together as $\\beta = 2\\alpha$ and $\\gamma = 3\\alpha$ because every linear dimension scales at once. A hole in an expanding plate grows as if it were filled with plate material, and a pendulum clock slows when its rod lengthens. Liquids have only volume expansion (no fixed shape defines a length), quoted as $\\beta$; water is the famous exception, contracting from 0 up to 4 degrees C, so lakes freeze from the top while 4 degrees C water sinks to the bottom. Bimetallic strips bend because two metals with different $\\alpha$ expand unequally, which is how old thermostats work.",
        formulas: [
          "\\Delta L = \\alpha L_0\\Delta T",
          "\\beta = 2\\alpha,\\qquad \\gamma = 3\\alpha",
          "\\Delta A = \\beta A_0\\Delta T,\\qquad \\Delta V = \\gamma V_0\\Delta T",
        ],
      },
      {
        kind: "concept",
        title: "Latent heat and phase change",
        level: "B",
        body:
          "During a phase change the temperature stays constant while the added energy breaks bonds rather than speeding molecules up: $Q = mL$, with latent heat of fusion $L_f$ (ice to water, 334 kJ/kg) and of vaporization $L_v$ (water to steam, 2260 kJ/kg). These numbers dwarf specific heats: melting 1 g of ice absorbs as much heat as heating the melted water by 80 degrees C, and steam scalds worse than boiling water because condensation releases $L_v$ on top of the cooling. A heating curve of temperature against time shows flat plateaus exactly at the phase changes, and a full calorimetry sum may chain several segments: warm the ice to 0 degrees C, melt it, then warm the resulting water. Always check whether the available heat is enough to finish the phase change; if not, the final state is a mixture sitting at the transition temperature, not a single higher temperature.",
        formulas: [
          "Q = mL_f,\\qquad Q = mL_v",
          "L_f^{water} = 334\\ \\text{kJ/kg},\\qquad L_v^{water} = 2260\\ \\text{kJ/kg}",
          "\\text{heating curve: plateaus at } 0^{\\circ}\\text{C and } 100^{\\circ}\\text{C}",
        ],
      },
      {
        kind: "concept",
        title: "Ideal gases, kinetic theory, first law and Carnot",
        level: "C",
        body:
          "Gas laws in kelvin: Boyle gives $P_1V_1 = P_2V_2$ at fixed $T$, Charles gives $V/T$ constant at fixed $P$, Gay-Lussac gives $P/T$ constant at fixed $V$, and all three unify into $PV = nRT$ with $R = 8.31$ J/(mol K). Kinetic theory explains pressure as molecular bombardment and yields the mean translational energy per molecule $\\langle KE \\rangle = \\tfrac{3}{2}k_BT$, internal energy $U = \\tfrac{3}{2}nRT$ for a monatomic gas, and speeds $v_{rms} = \\sqrt{3RT/M}$ (mean speed $\\sqrt{8RT/\\pi M}$, most probable $\\sqrt{2RT/M}$), so lighter molecules move faster at the same temperature. The first law $\\Delta U = Q - W$, with $W$ the work done BY the gas (the area under the $P$-$V$ curve), sorts the four processes: isobaric $W = P\\Delta V$, isochoric $W = 0$, isothermal $\\Delta U = 0$ so $Q = W = nRT\\ln(V_f/V_i)$, and adiabatic $Q = 0$ so $\\Delta U = -W$ along $PV^{\\gamma} = $ const. An adiabatic expansion that lets a gas do 500 J of work therefore cools it by exactly 500 J of internal energy. No engine working between reservoirs $T_h$ and $T_c$ can beat the Carnot efficiency $\\eta = 1 - T_c/T_h$ in kelvin, because that ceiling is set by entropy, not by engineering.",
        formulas: [
          "PV = nRT",
          "\\langle KE \\rangle = \\tfrac{3}{2}k_BT,\\qquad U = \\tfrac{3}{2}nRT,\\qquad v_{rms} = \\sqrt{\\frac{3RT}{M}}",
          "\\Delta U = Q - W,\\qquad W = \\int P\\,dV",
          "PV^{\\gamma} = \\text{const (adiabatic)},\\qquad \\gamma = \\frac{C_P}{C_V}",
          "\\eta_{Carnot} = 1 - \\frac{T_c}{T_h}",
        ],
      },
      {
        kind: "example",
        title: "Mixing hot and cold water",
        level: "B",
        problem:
          "0.4 kg of water at 60 degrees C is poured into 0.2 kg of water at 20 degrees C in an insulated container. Find the final temperature, ignoring the container and all losses.",
        steps: [
          "Energy conservation says heat lost by the hot water equals heat gained by the cold: $m_h c (T_h - T) = m_c c (T - T_c)$.",
          "The specific heat $c$ is the same on both sides and cancels: $0.4(60 - T) = 0.2(T - 20)$.",
          "Expanding both sides gives $24 - 0.4T = 0.2T - 4$, so $28 = 0.6T$.",
          "$T = 28/0.6 = 46.7$ degrees C, closer to the hot temperature because the hot sample has twice the mass.",
          "Result: the mixture settles at about 46.7 degrees C, the mass-weighted average of 60 and 20.",
        ],
      },
      {
        kind: "example",
        title: "Ice dropped into warm water",
        level: "C",
        problem:
          "50 g of ice at 0 degrees C is dropped into 200 g of water at 30 degrees C in an insulated cup. Take $L_f = 334$ J/g and $c = 4.186$ J/(g degrees C). Find the final temperature.",
        steps: [
          "First ask whether all the ice can melt: melting it needs $Q_1 = mL_f = 50 \\times 334 = 16700$ J.",
          "The warm water can give at most $Q_2 = mc\\Delta T = 200 \\times 4.186 \\times 30 = 25116$ J, if it cooled all the way to 0 degrees C.",
          "Since $25116 > 16700$, all the ice melts and a surplus of $25116 - 16700 = 8416$ J remains.",
          "The surplus warms the combined 250 g of water: $\\Delta T = 8416/(250 \\times 4.186) = 8.0$ degrees C.",
          "Result: the final temperature is about 8 degrees C, with no ice left.",
        ],
      },
      {
        kind: "tips",
        title: "Tricks for heat problems",
        items: [
          {
            tip: "Convert to kelvin before any gas law, kinetic theory or Carnot calculation, but leave $\\Delta T$ alone: a change of 1 degree C is a change of 1 K.",
            why: "Every gas-law and efficiency relation is a proportionality anchored at absolute zero; degrees C would produce negative and meaningless ratios.",
          },
          {
            tip: "For mixing the same substance, the final temperature is the mass-weighted average $T = (m_1T_1 + m_2T_2)/(m_1 + m_2)$, so any calorimetry answer can be sanity-checked in one line.",
            why: "Equal specific heats on both sides of the heat-balance equation cancel, leaving a plain weighted mean that must lie between the two starting temperatures.",
          },
          {
            tip: "Respect the scale of latent heat: melting 1 g of ice absorbs as much heat as heating the melt by 80 degrees C, and vaporizing absorbs almost seven times the melting heat per gram.",
            why: "$L_f/c = 334/4.186 \\approx 80$ degrees C for water, so plateaus dominate heating curves and steam burns are far worse than hot-water burns.",
          },
          {
            tip: "Expansion coefficients travel in the ratio 1:2:3 ($\\alpha$, $\\beta = 2\\alpha$, $\\gamma = 3\\alpha$), and a hole or cavity expands exactly as the surrounding material would.",
            why: "Every linear dimension multiplies by $(1 + \\alpha\\Delta T)$, so areas and volumes pick up the square and the cube of that factor to first order; a photographic enlargement keeps holes proportional.",
          },
          {
            tip: "Radiation is a fourth-power problem: triple the absolute temperature means 81 times the power, double means 16 times.",
            why: "Stefan-Boltzmann gives $P \\propto T^4$, and the exponent punishes any linear intuition about temperature.",
          },
          {
            tip: "Sort the four gas processes by their signature: isothermal has $\\Delta U = 0$ so $Q = W$; adiabatic has $Q = 0$ so $\\Delta U = -W$; isochoric has $W = 0$ so $Q = \\Delta U$; isobaric has $W = P\\Delta V$.",
            why: "The first law $\\Delta U = Q - W$ plus the one defining constraint of each process instantly fixes which of $Q$, $W$, $\\Delta U$ is zero.",
          },
        ],
      },
      {
        kind: "checkpoint",
        question: "Expressed in kelvin, 0 degrees C is closest to which value?",
        options: ["-273 K", "0 K", "100 K", "273 K"],
        answer: 3,
        explain:
          "$T_K = T_C + 273$, so the ice point 0 degrees C is 273 K; the kelvin scale only shifts by a constant, which is why temperature differences are identical on both scales.",
      },
      {
        kind: "checkpoint",
        question: "A metal plate with a circular hole at its centre is heated uniformly. The hole becomes...",
        options: ["Smaller", "Larger", "Unchanged", "Elliptical"],
        answer: 1,
        explain:
          "Every distance between any two points of the plate scales up by the same factor $(1 + \\alpha\\Delta T)$, so the hole grows exactly as if it were filled with metal; think of a photographic enlargement.",
      },
      {
        kind: "checkpoint",
        question: "An ideal gas expands adiabatically and does 500 J of work on its surroundings. The change in its internal energy is...",
        options: ["+500 J", "-500 J", "0 J", "Depends on the gas"],
        answer: 1,
        explain:
          "Adiabatic means $Q = 0$, so the first law gives $\\Delta U = -W = -500$ J: the gas cools because the energy for the work came out of its own internal energy.",
      },
    ],
  },
  {
    topic: "optics",
    intro:
      "Optics works on two levels: geometric optics treats light as rays that reflect and refract, building mirrors, lenses, prisms and fibre optics, while wave optics treats light as a wave and explains interference fringes and diffraction patterns that rays can never account for. Regional papers lean hard on refraction, total internal reflection and the lens equation, while national papers reach for Young's double slit and diffraction gratings. This lesson covers both levels in the order you need them: light's speed, mirrors, refraction and TIR, lenses, then interference and diffraction.",
    bigPicture: [
      "One imaging equation, $1/f = 1/d_o + 1/d_i$ with $m = -d_i/d_o$, solves every spherical mirror and thin lens problem: memorize the sign convention once and reuse it everywhere.",
      "Refraction is the gateway to a surprising share of questions: Snell's law, critical angle, prisms, mirages, lenses and even rainbows are all the same bending rule $n_1\\sin\\theta_1 = n_2\\sin\\theta_2$.",
      "Interference and diffraction are the wave nature of light made visible; the fringe formulas $d\\sin\\theta = m\\lambda$ and $a\\sin\\theta = m\\lambda$ are the same mathematics as the water-wave superposition of the waves topic.",
    ],
    sections: [
      {
        kind: "intro",
        body:
          "First the ray picture: speed of light, plane and curved mirrors, Snell's law, total internal reflection and thin lenses, all governed by one imaging equation and one bending law. Then the wave picture: Young's double slit, single-slit diffraction, gratings and polarization. The examples and checkpoints use the same style of numbers as the question bank, so treat them as rehearsal.",
      },
      {
        kind: "concept",
        title: "Light's speed and plane mirrors",
        level: "A",
        body:
          "Light travels at $c = 3\\times10^8$ m/s in vacuum and slows to $v = c/n$ inside a medium of refractive index $n$: about $2.25\\times10^8$ m/s in water ($n = 1.33$) and $2\\times10^8$ m/s in glass ($n = 1.5$). On reflection the angle of incidence equals the angle of reflection, both measured from the normal. A plane mirror forms a virtual, upright, same-size image as far behind the mirror as the object is in front, and it reverses front and back, not left and right. Two mirrors at angle $\\theta$ produce $360/\\theta - 1$ images when $360/\\theta$ is a whole number (three images at 90 degrees, five at 60 degrees), the counting principle behind the kaleidoscope, while parallel mirrors give infinitely many.",
        formulas: [
          "v = \\frac{c}{n},\\qquad c = 3\\times10^8\\ \\text{m/s}",
          "\\theta_{incidence} = \\theta_{reflection}",
          "N = \\frac{360^{\\circ}}{\\theta} - 1\\ \\text{(two inclined mirrors)}",
        ],
      },
      {
        kind: "concept",
        title: "Curved mirrors and ray diagrams",
        level: "B",
        body:
          "A concave mirror converges light to its focal point, a convex mirror diverges it, and both satisfy $f = R/2$ with radius of curvature $R$. Two rays are enough for any diagram: a ray parallel to the axis reflects through $f$, and a ray through the centre of curvature $C$ returns along itself. All mirrors and lenses share the equation $1/f = 1/d_o + 1/d_i$ with magnification $m = -d_i/d_o$: positive $d_i$ means a real image (in front of the mirror, catchable on a screen), negative $d_i$ a virtual image behind it. A convex mirror always gives a virtual, upright, diminished image (the wide-angle safety mirror), while a concave mirror gives a real inverted image for objects beyond $f$ and a virtual enlarged one for objects inside $f$ (the shaving mirror).",
        formulas: [
          "f = \\frac{R}{2}",
          "\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i}",
          "m = -\\frac{d_i}{d_o} = \\frac{h_i}{h_o}",
        ],
      },
      {
        kind: "concept",
        title: "Refraction, Snell's law and total internal reflection",
        level: "B",
        body:
          "Refraction bends light because its speed changes: $n = c/v$, and Snell's law $n_1\\sin\\theta_1 = n_2\\sin\\theta_2$ governs the angles measured from the normal, so entering a slower (optically denser) medium bends the ray toward the normal. The frequency never changes across a boundary, so the wavelength scales as $\\lambda_n = \\lambda/n$. Going from denser to rarer, rays beyond the critical angle $\\sin\\theta_c = n_2/n_1$ are completely reflected back inside: total internal reflection, the engine of optical fibres and prism binoculars (water to air gives 48.8 degrees, glass to air about 42 degrees, and a ray hitting a surface at 45 degrees from inside needs $n > \\sqrt{2}$ to be trapped). A prism deviates light once at each face, with minimum deviation when the ray crosses symmetrically, and a mirage on a hot road is refraction through the graded hot air, bending skylight upward so the shimmering pool ahead is really an image of the sky.",
        formulas: [
          "n = \\frac{c}{v},\\qquad n_1\\sin\\theta_1 = n_2\\sin\\theta_2",
          "\\sin\\theta_c = \\frac{n_2}{n_1}\\quad (n_1 > n_2)",
          "\\lambda_n = \\frac{\\lambda}{n},\\qquad f\\ \\text{unchanged}",
        ],
      },
      {
        kind: "concept",
        title: "Thin lenses and magnification",
        level: "B",
        body:
          "Thin lenses obey the same equation as mirrors, $1/f = 1/d_o + 1/d_i$ with $m = -d_i/d_o$, where $f > 0$ for converging (convex) lenses and $f < 0$ for diverging (concave) ones; positive $d_i$ is on the transmission side and marks a real image. A converging lens with the object beyond $f$ gives a real inverted image, while an object inside $f$ turns it into a magnifying glass with a virtual, upright, enlarged image. Lens power is $P = 1/f$ in dioptres with $f$ in metres, and thin lenses in contact simply add powers, $P = P_1 + P_2$. The lens-maker formula $1/f = (n_{rel} - 1)(1/R_1 - 1/R_2)$ explains why a lens focusing at 20 cm in air focuses farther out in water: with $n_{rel} = (3/2)/(4/3) = 9/8$ instead of $3/2$, the focal length multiplies by $(n - 1)/(n_{rel} - 1)$ to 80 cm.",
        formulas: [
          "\\frac{1}{f} = \\frac{1}{d_o} + \\frac{1}{d_i},\\qquad m = -\\frac{d_i}{d_o}",
          "P = \\frac{1}{f_{(m)}}\\ \\text{(dioptres)},\\qquad P_{total} = P_1 + P_2",
          "\\frac{1}{f} = (n_{rel} - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)",
        ],
      },
      {
        kind: "concept",
        title: "Interference: Young's double slit",
        level: "C",
        body:
          "Two slits separated by $d$, illuminated by coherent light, paint equally spaced fringes on a screen at distance $L$: bright where the path difference is a whole wavelength, $d\\sin\\theta = m\\lambda$, and dark at half-integers $(m + \\tfrac{1}{2})\\lambda$. For small angles the fringe spacing is $\\Delta y = \\lambda L/d$, so red light spreads wider than blue, a smaller $d$ spreads the pattern wider, and the spacing is the same for every order $m$. Inserting a thin sheet of thickness $t$ and refractive index $\\mu$ over one slit adds an optical path $(\\mu - 1)t$ and shifts the whole pattern toward that slit by $(\\mu - 1)tL/d$, a favourite problem type. Coherence (a steady phase relation) is what keeps the pattern visible; two independent lamps show no fringes because their phases wander randomly.",
        formulas: [
          "d\\sin\\theta = m\\lambda\\ \\text{(bright)},\\qquad d\\sin\\theta = \\left(m + \\tfrac{1}{2}\\right)\\lambda\\ \\text{(dark)}",
          "\\Delta y = \\frac{\\lambda L}{d}",
          "\\text{sheet shift} = \\frac{(\\mu - 1)\\,t\\,L}{d}",
        ],
      },
      {
        kind: "concept",
        title: "Diffraction, gratings and polarization",
        level: "C",
        body:
          "A single slit of width $a$ spreads light into a central maximum with minima at $a\\sin\\theta = m\\lambda$ for $m = 1, 2, ...$; the central maximum is twice as wide as the others, and the narrower the slit, the wider the spread. A diffraction grating with $N$ lines per metre replaces the two slits with thousands: the same equation $d\\sin\\theta = m\\lambda$ with $d = 1/N$ now gives sharp, bright orders, which is how gratings separate spectral lines precisely. Polarization proves light is a transverse wave: a polarizer passes $I = I_0\\cos^2\\theta$ (Malus's law) for angle $\\theta$ between its axis and the light's polarization, while unpolarized light loses exactly half at the first polarizer. Three stacked polarizers oriented 45 degrees apart transmit $I_0/2 \\times \\cos^2 45^{\\circ} \\times \\cos^2 45^{\\circ} = I_0/8$.",
        formulas: [
          "a\\sin\\theta = m\\lambda\\ \\text{(single-slit minima)}",
          "d\\sin\\theta = m\\lambda,\\qquad d = \\frac{1}{N}\\ \\text{(grating)}",
          "I = I_0\\cos^2\\theta\\ \\text{(Malus)}",
        ],
      },
      {
        kind: "example",
        title: "Image in a concave mirror",
        level: "B",
        problem:
          "An object stands 30 cm in front of a concave mirror of focal length 20 cm. Locate the image, give its magnification, and state its nature.",
        steps: [
          "The mirror equation gives $1/d_i = 1/f - 1/d_o = 1/20 - 1/30 = (3 - 2)/60 = 1/60$ per cm.",
          "So $d_i = 60$ cm, positive, meaning a real image 60 cm in front of the mirror.",
          "The magnification is $m = -d_i/d_o = -60/30 = -2$.",
          "The negative sign means the image is inverted, and $|m| = 2$ means it is twice the object's size.",
          "Result: a real, inverted, double-size image 60 cm in front of the mirror; with $R = 2f = 40$ cm the object sits between $f$ and $C$, exactly where enlarged real images form.",
        ],
      },
      {
        kind: "example",
        title: "Double-slit fringe spacing",
        level: "C",
        problem:
          "Light of wavelength 500 nm passes through two slits separated by 0.25 mm and falls on a screen 2.0 m away. Find the fringe spacing on the screen and the angle of the second bright fringe.",
        steps: [
          "The fringe spacing is $\\Delta y = \\lambda L/d$.",
          "Substituting, $\\Delta y = (500\\times10^{-9} \\times 2.0)/(0.25\\times10^{-3}) = 4\\times10^{-3}$ m, that is 4 mm.",
          "For the second bright fringe, $d\\sin\\theta = 2\\lambda$, so $\\sin\\theta = 2 \\times 500\\times10^{-9}/(0.25\\times10^{-3}) = 4\\times10^{-3}$.",
          "This value is far below 1, so the small-angle approximation holds: $\\theta \\approx 4\\times10^{-3}$ rad, about 0.23 degrees.",
          "Result: bright fringes every 4 mm on the screen, with the second order at about 0.23 degrees.",
        ],
      },
      {
        kind: "tips",
        title: "Tricks for optics problems",
        items: [
          {
            tip: "Adopt one sign convention and never bend it: distances on the real side are positive, so a negative $d_i$ immediately means a virtual image and $m = -d_i/d_o$ then automatically reports upright or inverted.",
            why: "The negative sign in $m$ encodes the real-inverted versus virtual-upright pairing; overriding signs by hand is exactly where flipped answers come from.",
          },
          {
            tip: "Test any mirror or lens result on the limits: object at infinity gives the image at $f$, object at $f$ throws the image to infinity, and a plane mirror is the $f \\to \\infty$ case where $d_i = -d_o$.",
            why: "One imaging equation covers all elements, so its limiting cases are fast reality checks on both sign and size.",
          },
          {
            tip: "Memorize two critical-angle facts: from water to air $\\theta_c = 48.8$ degrees, and any ray hitting a surface at 45 degrees from inside needs $n > \\sqrt{2} \\approx 1.41$ for total internal reflection.",
            why: "$\\sin 45^{\\circ} = 1/\\sqrt{2}$, so TIR requires $n > 1/\\sin 45^{\\circ}$; glass (1.5) traps the ray, water (1.33) does not.",
          },
          {
            tip: "Across a boundary the frequency is untouchable; only $v$ and $\\lambda$ scale by $1/n$, so red light stays red underwater.",
            why: "The boundary oscillates in step with the incoming wave, fixing the cycles-per-second rate while the wave's speed and spacing change.",
          },
          {
            tip: "Scale fringe problems by ratios instead of recomputing: $\\Delta y = \\lambda L/d$ means doubling $d$ halves the spacing, doubling $L$ doubles it, and red fringes are half again as wide as blue ones.",
            why: "All Young-type patterns are linear in $\\lambda$ and $L$ and inverse in $d$, so ratios isolate the changed variable with no arithmetic risk.",
          },
          {
            tip: "For intensity at a distance from a point source, never recompute from the power: $I_1/I_2 = (r_2/r_1)^2$, so going from 2 m to 4 m quarters the intensity.",
            why: "Power spreads over the sphere of area $4\\pi r^2$, and the ratio form cancels the unknown power entirely.",
          },
        ],
      },
      {
        kind: "checkpoint",
        question: "The image formed by a plane mirror is always...",
        options: ["Real and inverted", "Virtual, upright and same size", "Virtual and magnified", "Real, upright and smaller"],
        answer: 1,
        explain:
          "Rays only appear to come from behind the mirror, so the image is virtual; it is upright, unmagnified, and exactly as far behind the mirror as the object is in front.",
      },
      {
        kind: "checkpoint",
        question: "A ray of light passes from air into glass. Which quantity stays exactly the same?",
        options: ["Speed", "Wavelength", "Frequency", "Direction"],
        answer: 2,
        explain:
          "The glass responds in step with the incoming wave, so frequency is preserved while speed drops to $c/n$ and wavelength to $\\lambda/n$; only the direction changes, as Snell's law dictates.",
      },
      {
        kind: "checkpoint",
        question: "In Young's double-slit experiment the slit separation is doubled while $\\lambda$ and $L$ stay fixed. The fringe spacing...",
        options: ["Doubles", "Halves", "Stays the same", "Quadruples"],
        answer: 1,
        explain:
          "$\\Delta y = \\lambda L/d$ is inversely proportional to $d$, so doubling the slit separation packs the fringes twice as close together.",
      },
    ],
  },
];

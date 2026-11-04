import type { Lesson } from "./lesson-types";
import { lessons1 } from "./lessons-1";
import { lessons2 } from "./lessons-2";
import { lessons3 } from "./lessons-3";
import { lessons4 } from "./lessons-4";

export type { Lesson, LessonSection, LevelTag } from "./lesson-types";

export const ALL_LESSONS: Lesson[] = [...lessons1, ...lessons2, ...lessons3, ...lessons4];

export const LESSONS: Record<string, Lesson> = Object.fromEntries(
  ALL_LESSONS.map((l) => [l.topic, l]),
);

// Display metadata per topic (order follows the syllabus).
// `img` points at a photo in /public/topics; no emoji icons anywhere.
export const TOPIC_META: Record<
  string,
  { label: string; num: string; blurb: string; img: string; cats: ("A" | "B" | "C")[] }
> = {
  measurement: { label: "Measurement & Errors", num: "I", blurb: "Units, vernier & micrometer, statistics of data, dimensions", img: "/topics/measurement.jpg", cats: ["A", "B", "C"] },
  mechanics: { label: "Mechanics", num: "II", blurb: "Kinematics, Newton's laws, momentum, friction, rotation", img: "/topics/mechanics.jpg", cats: ["A", "B", "C"] },
  vectors: { label: "Vectors & Frames", num: "III", blurb: "Components, dot & cross products, rotating coordinate frames", img: "/topics/vectors.jpg", cats: ["B", "C"] },
  "work-energy": { label: "Work & Energy", num: "IV", blurb: "Work–energy theorem, power, potential energy, equilibrium", img: "/topics/work-energy.jpg", cats: ["A", "B", "C"] },
  gravitation: { label: "Gravitation", num: "V", blurb: "Universal law, shell theorem, orbits, escape velocity", img: "/topics/gravitation.jpg", cats: ["B", "C"] },
  oscillation: { label: "Oscillations", num: "VI", blurb: "Hooke's law, SHM, pendulums, spring networks", img: "/topics/oscillation.jpg", cats: ["B", "C"] },
  fluids: { label: "Fluids", num: "VII", blurb: "Pressure, Pascal, Archimedes, barometers, Bernoulli", img: "/topics/fluids.jpg", cats: ["A", "B", "C"] },
  heat: { label: "Heat & Gases", num: "VIII", blurb: "Calorimetry, expansion, latent heat, gas laws, Carnot", img: "/topics/heat.jpg", cats: ["A", "B", "C"] },
  waves: { label: "Waves & Sound", num: "IX", blurb: "v = fλ, echo, standing waves, beats, Doppler", img: "/topics/waves.jpg", cats: ["B", "C"] },
  optics: { label: "Optics", num: "X", blurb: "Mirrors, Snell's law, lenses, interference, diffraction", img: "/topics/optics.jpg", cats: ["A", "B", "C"] },
  electricity: { label: "Electricity", num: "XI", blurb: "Coulomb, fields & potential, Ohm, networks, capacitors", img: "/topics/electricity.jpg", cats: ["B", "C"] },
  magnetism: { label: "Magnetism", num: "XII", blurb: "Earth's field, Lorentz force, induction, LR/LC", img: "/topics/magnetism.jpg", cats: ["B", "C"] },
  modern: { label: "Modern Physics", num: "XIII", blurb: "Photons, relativity, Bohr, nuclei, cosmology", img: "/topics/modern.jpg", cats: ["C"] },
};

export const TOPIC_ORDER = Object.keys(TOPIC_META);

export type CategoryId = "A" | "B" | "C";

export const CATEGORIES: {
  id: CategoryId;
  name: string;
  classes: string;
  desc: string;
}[] = [
  { id: "A", name: "Category A", classes: "Classes V–VI", desc: "Units, motion in one dimension, force, density, basic energy, pressure, heat & temperature, reflection of light." },
  { id: "B", name: "Category B", classes: "Classes VII–VIII", desc: "Adds vernier & statistics, 2-D motion, momentum, oscillations, gas laws, buoyancy, gravitation, sound, circuits & magnetism basics." },
  { id: "C", name: "Category C", classes: "Classes IX–X", desc: "The full olympiad toolkit: rotation, wave optics, thermodynamic processes, electromagnetism, relativity and modern physics." },
];

export type Question = {
  id: string;
  topic: string;
  source: string;
  level: 1 | 2 | 3; // 1 = warm-up, 2 = core, 3 = challenge
  type: "mcq" | "numeric";
  q: string;
  options?: string[];
  answer: string; // letter for MCQ, numeric value for numeric
  tolerance?: number; // relative tolerance (numeric)
  unit?: string;
  solution: string;
  hint?: string;
};

export type Topic = {
  id: string;
  name: string;
  short: string;
  icon: string;
  color: string;
  blurb: string;
};

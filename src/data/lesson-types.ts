export type LevelTag = "A" | "B" | "C";

export type LessonSection =
  | { kind: "intro"; body: string }
  | {
      kind: "concept";
      title: string;
      level: LevelTag;
      body: string;
      formulas?: string[];
    }
  | {
      kind: "example";
      title: string;
      level: LevelTag;
      problem: string;
      steps: string[];
    }
  | { kind: "tips"; title: string; items: { tip: string; why: string }[] }
  | {
      kind: "checkpoint";
      question: string;
      options: string[];
      answer: number;
      explain: string;
    };

export type Lesson = {
  topic: string;
  intro: string;
  bigPicture: string[];
  sections: LessonSection[];
};

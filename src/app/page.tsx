"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { MathText } from "@/components/math-text";
import {
  CATEGORIES,
  LESSONS,
  TOPIC_META,
  TOPIC_ORDER,
  type CategoryId,
  type Lesson,
  type LessonSection,
} from "@/data/lessons";

/* ---------------------------------- data ---------------------------------- */

type Question = {
  id: string;
  topic: string;
  tier: "regional" | "national" | "usapho";
  source: string;
  year: number;
  type: "mcq" | "numeric";
  question: string;
  options: string[] | null;
  answer: string | number;
  tolerance: number | null;
  unit: string | null;
  hint: string;
  solution: string;
  difficulty: number;
  figureNote: string | null;
  order: number;
  cats: ("A" | "B" | "C")[];
};

import questionsData from "@/data/questions.json";
const QUESTIONS = (questionsData as { questions: Question[] }).questions;

const BY_TOPIC: Record<string, Question[]> = {};
for (const q of QUESTIONS) {
  (BY_TOPIC[q.topic] ||= []).push(q);
}
for (const t of Object.keys(BY_TOPIC)) BY_TOPIC[t].sort((a, b) => a.order - b.order);

const tierLabel: Record<string, string> = {
  regional: "Divisional / Regional",
  national: "National Round",
  usapho: "USAPhO",
};

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV"];
const roman = (n: number) => ROMAN[n - 1] ?? String(n);

/* ---------------------------------- icons ---------------------------------- */

function IconBolt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13 2 4.6 13.2h5.2L9.4 22l8.9-11.6h-5.4L13 2z" />
    </svg>
  );
}

function IconStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.5l2.83 6.1 6.67.68-5 4.47 1.4 6.55L12 16.9l-5.9 3.4 1.4-6.55-5-4.47 6.67-.68L12 2.5z" />
    </svg>
  );
}

function IconFlame({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2c.8 3-1.2 4.6-2.5 6C8 9.6 6.5 11.4 6.5 14a5.5 5.5 0 0 0 11 0c0-1.7-.7-3.2-1.6-4.6-.4.8-1 1.5-1.9 1.8.6-3-.4-6.6-2-9.2z" />
    </svg>
  );
}

function IconCheck({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4 12.5l5 5L20 6.5" />
    </svg>
  );
}

function IconX({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className={className} aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function IconChevronRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}

function IconLightbulb({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.55 1.1 1.35 1.1 2.2h5a2.8 2.8 0 0 1 1.1-2.2A6 6 0 0 0 12 3z" />
    </svg>
  );
}

/* --------------------------------- progress -------------------------------- */

type QStat = { status: "mastered" | "learned"; attempts: number };
type Progress = { xp: number; bestStreak: number; questions: Record<string, QStat> };

const STORE_KEY = "pq-progress-v2";
const CAT_KEY = "pq-cat";

function loadProgress(): Progress {
  if (typeof window === "undefined") return { xp: 0, bestStreak: 0, questions: {} };
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) {
      const p = JSON.parse(raw);
      return { xp: p.xp || 0, bestStreak: p.bestStreak || 0, questions: p.questions || {} };
    }
  } catch {}
  return { xp: 0, bestStreak: 0, questions: {} };
}

const levelOf = (xp: number) => Math.floor(xp / 150) + 1;
const levelFloor = (lvl: number) => (lvl - 1) * 150;

/* ---------------------------------- views ---------------------------------- */

type View =
  | { name: "home" }
  | { name: "topic"; topic: string; tab: "learn" | "practice" }
  | { name: "session"; topic: string; ids: string[] }
  | { name: "results"; topic: string; correct: number; total: number; xpGained: number };

export default function Home() {
  const [view, setView] = useState<View>({ name: "home" });
  const [prog, setProg] = useState<Progress>({ xp: 0, bestStreak: 0, questions: {} });
  const [streak, setStreak] = useState(0);
  const [cat, setCat] = useState<CategoryId>("C");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const p = loadProgress();
    const c = (localStorage.getItem(CAT_KEY) as CategoryId) || "C";
    requestAnimationFrame(() => {
      setProg(p);
      setCat(c);
      setLoaded(true);
    });
  }, []);

  const update = useCallback((fn: (p: Progress) => Progress) => {
    setProg((prev) => {
      const next = fn(prev);
      try {
        localStorage.setItem(STORE_KEY, JSON.stringify(next));
      } catch {}
      return next;
    });
  }, []);

  const switchCat = (c: CategoryId) => {
    setCat(c);
    try {
      localStorage.setItem(CAT_KEY, c);
    } catch {}
  };

  const lvl = levelOf(prog.xp);
  const lvlPct = ((prog.xp - levelFloor(lvl)) / 150) * 100;

  const catMeta = CATEGORIES.find((c) => c.id === cat)!;
  const topicsForCat = TOPIC_ORDER.filter((t) => TOPIC_META[t]?.cats.includes(cat));
  const qsFor = (t: string) => (BY_TOPIC[t] || []).filter((q) => q.cats.includes(cat));
  const totalForCat = topicsForCat.reduce((n, t) => n + qsFor(t).length, 0);

  return (
    <div className="pq min-h-screen">
      {/* navbar */}
      <header className="sticky top-0 z-40 border-b pq-rule bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-5">
          <button onClick={() => setView({ name: "home" })} className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--pq-green)] text-white shadow-sm">
              <IconBolt className="h-4 w-4" />
            </span>
            <span className="pq-display text-[20px] font-bold tracking-tight">PhysicsQuest</span>
            <span className="hidden rounded-full border pq-rule px-2.5 py-0.5 text-[11px] font-bold text-[var(--pq-muted)] lg:inline">
              BdPhO · Categories A, B &amp; C
            </span>
          </button>
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5 rounded-full bg-[var(--pq-gold-bg)] px-3 py-1.5 text-[13px] font-bold tabular-nums text-[var(--pq-gold)]">
              <IconStar className="h-3.5 w-3.5" />
              {prog.xp}
              <span className="hidden font-bold sm:inline">XP</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-[#fff0e8] px-3 py-1.5 text-[13px] font-bold tabular-nums text-[var(--pq-flame)]">
              <IconFlame className="h-3.5 w-3.5" />
              {streak}
            </div>
            <div className="hidden w-32 sm:block">
              <div className="flex items-baseline justify-between text-[11px] font-bold">
                <span>Level {roman(lvl)}</span>
                <span className="font-bold text-[var(--pq-muted)]">{prog.xp - levelFloor(lvl)}/150</span>
              </div>
              <div className="pq-bar mt-1" style={{ height: 6 }}>
                <div style={{ width: `${lvlPct}%` }} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {view.name === "home" && (
        <HomePage
          cat={cat}
          catMeta={catMeta}
          topics={topicsForCat}
          qsFor={qsFor}
          prog={prog}
          loaded={loaded}
          totalForCat={totalForCat}
          onCat={switchCat}
          onOpen={(t, tab) => setView({ name: "topic", topic: t, tab })}
        />
      )}

      {view.name === "topic" && (
        <TopicPage
          topic={view.topic}
          tab={view.tab}
          cat={cat}
          qsFor={qsFor}
          prog={prog}
          onTab={(tab) => setView({ name: "topic", topic: view.topic, tab })}
          onBack={() => setView({ name: "home" })}
          onStart={(ids) => setView({ name: "session", topic: view.topic, ids })}
        />
      )}

      {view.name === "session" && (
        <SessionPage
          topic={view.topic}
          ids={view.ids}
          prog={prog}
          setStreak={setStreak}
          record={(id, ok, first) =>
            update((p) => {
              const cur = p.questions[id];
              const prevBest = p.bestStreak;
              const newStreak = ok ? streak + 1 : 0;
              const bestStreak = ok ? Math.max(prevBest, newStreak) : prevBest;
              return {
                xp: p.xp + (ok ? (first ? 10 : 4) : 0),
                bestStreak,
                questions: {
                  ...p.questions,
                  [id]: {
                    status: ok && first ? "mastered" : "learned",
                    attempts: (cur?.attempts || 0) + 1,
                  },
                },
              };
            })
          }
          onDone={(correct, total, xpGained) =>
            setView({ name: "results", topic: view.topic, correct, total, xpGained })
          }
          onExit={() => setView({ name: "topic", topic: view.topic, tab: "practice" })}
        />
      )}

      {view.name === "results" && (
        <ResultsPage
          topic={view.topic}
          correct={view.correct}
          total={view.total}
          xpGained={view.xpGained}
          onAgain={() => setView({ name: "topic", topic: view.topic, tab: "practice" })}
          onHome={() => setView({ name: "home" })}
          onNext={(t) => setView({ name: "topic", topic: t, tab: "learn" })}
        />
      )}

      <footer className="mt-20 border-t pq-rule bg-[var(--pq-wash)]">
        <div className="mx-auto max-w-6xl px-5 py-10 text-[13px] leading-relaxed text-[var(--pq-muted)]">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[var(--pq-green)] text-white">
              <IconBolt className="h-3 w-3" />
            </span>
            <span className="pq-display text-[16px] font-bold text-[var(--pq-ink)]">PhysicsQuest</span>
          </div>
          <div className="mt-5 grid gap-8 md:grid-cols-3">
            <div>
              <div className="font-bold text-[var(--pq-ink-soft)]">Sources</div>
              <p className="mt-1.5">
                BdPhO Divisional, Regional &amp; National Rounds 2012–2026 · USAPhO 2006–2026. Filtered to the
                official Category A, B and C syllabi of the Bangladesh Physics Olympiad.
              </p>
            </div>
            <div>
              <div className="font-bold text-[var(--pq-ink-soft)]">Method</div>
              <p className="mt-1.5">
                Chapters follow the syllabus. Inside every chapter the problems run from the gentlest
                divisional round to the hardest USAPhO semifinal — with the full solution on every miss.
              </p>
            </div>
            <div>
              <div className="font-bold text-[var(--pq-ink-soft)]">Your data</div>
              <p className="mt-1.5">
                Progress, XP and streaks are saved in this browser only — no account, no server.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* --------------------------------- pieces ---------------------------------- */

function CatSwitcher({
  cat,
  onCat,
  counts,
}: {
  cat: CategoryId;
  onCat: (c: CategoryId) => void;
  counts: Record<CategoryId, string>;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {CATEGORIES.map((c) => {
        const active = c.id === cat;
        return (
          <button
            key={c.id}
            onClick={() => onCat(c.id)}
            className={`flex items-center gap-2 rounded-full border px-5 py-2.5 transition-colors ${
              active
                ? "border-[var(--pq-ink)] bg-[var(--pq-ink)] text-white"
                : "pq-rule bg-white text-[var(--pq-ink-soft)] hover:bg-[var(--pq-wash)]"
            }`}
          >
            <span className="text-[14px] font-bold">Category {c.id}</span>
            <span className={`text-[13px] font-semibold ${active ? "text-white/70" : "text-[var(--pq-muted)]"}`}>
              {c.classes} · {counts[c.id]}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function ProgressBar({ done, total }: { done: number; total: number }) {
  const pct = total ? (done / total) * 100 : 0;
  return (
    <div className="w-full">
      <div className="pq-bar">
        <div style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

/* ---------------------------------- home ----------------------------------- */

function HomePage({
  cat,
  catMeta,
  topics,
  qsFor,
  prog,
  loaded,
  totalForCat,
  onCat,
  onOpen,
}: {
  cat: CategoryId;
  catMeta: (typeof CATEGORIES)[number];
  topics: string[];
  qsFor: (t: string) => Question[];
  prog: Progress;
  loaded: boolean;
  totalForCat: number;
  onCat: (c: CategoryId) => void;
  onOpen: (t: string, tab: "learn" | "practice") => void;
}) {
  const counts: Record<CategoryId, string> = {
    A: `${QUESTIONS.filter((q) => q.cats.includes("A")).length} problems`,
    B: `${QUESTIONS.filter((q) => q.cats.includes("B")).length} problems`,
    C: `${QUESTIONS.filter((q) => q.cats.includes("C")).length} problems`,
  };
  const firstUndone = topics.find((t) => {
    const qs = qsFor(t);
    return qs.some((q) => prog.questions[q.id]?.status !== "mastered");
  });
  const doneTotal = topics.reduce(
    (n, t) => n + qsFor(t).filter((q) => prog.questions[q.id]?.status === "mastered").length,
    0,
  );

  return (
    <main>
      {/* course banner */}
      <section className="pq-grid-bg border-b pq-rule">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.35fr_1fr] md:items-center">
          <div>
            <div className="text-[12px] font-bold uppercase tracking-[0.08em] text-[var(--pq-green-dark)]">
              Bangladesh Physics Olympiad · Categories A, B &amp; C
            </div>
            <h1 className="pq-display mt-3 text-[36px] leading-[1.08] md:text-[46px]">
              Master olympiad physics, chapter by chapter.
            </h1>
            <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-[var(--pq-ink-soft)]">
              {QUESTIONS.length} real problems from Bangladesh Physics Olympiad divisional,
              regional and national rounds plus USAPhO — filtered to the official Category A, B
              and C syllabi. Read a chapter, then work its problems from the gentlest divisional
              round to the hardest USAPhO semifinal. Wrong answers open the full solution, every time.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-5">
              {firstUndone && (
                <button className="pq-btn" onClick={() => onOpen(firstUndone, "learn")}>
                  Continue: {TOPIC_META[firstUndone].label}
                </button>
              )}
              <div className="text-[13px] font-bold text-[var(--pq-muted)]">
                {totalForCat} problems in your syllabus · {doneTotal} mastered
              </div>
            </div>
          </div>
          <figure className="w-full justify-self-end md:max-w-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/topics/hero.jpg"
              alt="High-speed photograph of a milk drop coronet"
              className="h-56 w-full rounded-xl object-cover shadow-sm md:h-72"
            />
          </figure>
        </div>
      </section>

      {/* category switcher */}
      <section className="mx-auto max-w-6xl px-5 pt-10">
        <h2 className="text-[15px] font-bold">Pick your syllabus</h2>
        <div className="mt-3">
          <CatSwitcher cat={cat} onCat={onCat} counts={counts} />
        </div>
      </section>

      {/* chapter index */}
      <section className="mx-auto max-w-6xl px-5 pt-12">
        <div className="flex items-baseline justify-between">
          <h2 className="text-[15px] font-bold">Course chapters</h2>
          <span className="text-[13px] font-bold text-[var(--pq-muted)]">{topics.length} chapters</span>
        </div>
        <div className="mt-5 grid gap-4">
          {topics.map((t, i) => {
            const meta = TOPIC_META[t];
            const qs = qsFor(t);
            const mastered = qs.filter((q) => prog.questions[q.id]?.status === "mastered").length;
            const lesson = LESSONS[t];
            const complete = qs.length > 0 && mastered === qs.length;
            return (
              <div
                key={t}
                className="pq-topicrow pq-cardhover group grid cursor-pointer grid-cols-[1fr_auto] items-center gap-4 rounded-xl border pq-rule bg-white p-4 md:grid-cols-[130px_1fr_240px_auto] md:gap-5"
                onClick={() => onOpen(t, "learn")}
              >
                <div className="hidden overflow-hidden rounded-lg md:block">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={meta.img} alt="" className="pq-thumb h-[84px] w-[130px] object-cover" loading="lazy" />
                </div>
                <div className="min-w-0">
                  <div className="text-[12px] font-bold text-[var(--pq-muted)]">Chapter {roman(i + 1)}</div>
                  <div className="pq-display text-[20px] leading-snug">{meta.label}</div>
                  <div className="mt-0.5 line-clamp-1 text-[13.5px] text-[var(--pq-muted)]">
                    {meta.blurb}
                  </div>
                  <div className="mt-1.5 flex flex-wrap items-center gap-2 text-[12.5px] font-bold text-[var(--pq-ink-soft)]">
                    <span>{lesson ? `${lesson.sections.length} lesson parts` : "Lesson"}</span>
                    <span className="text-[var(--pq-line)]">·</span>
                    <span>{qs.length} problems</span>
                    {complete && <span className="pq-chip pq-chip-good">Mastered</span>}
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="mb-1.5 flex justify-between text-[12px] font-bold">
                    <span>
                      {mastered}/{qs.length}
                    </span>
                    <span className="font-bold text-[var(--pq-muted)]">
                      {qs.length ? Math.round((mastered / qs.length) * 100) : 0}%
                    </span>
                  </div>
                  <ProgressBar done={mastered} total={qs.length} />
                  <div className="mt-1.5 text-[11px] font-bold text-[var(--pq-muted)]">
                    {complete ? "Chapter complete" : loaded ? "Read first, then practice" : ""}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="pq-btn-ghost pq-btn-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpen(t, "practice");
                    }}
                  >
                    Practice
                  </button>
                  <span className="hidden text-[var(--pq-muted)] group-hover:text-[var(--pq-green-dark)] md:block">
                    <IconChevronRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

/* ------------------------------- topic page -------------------------------- */

function TopicPage({
  topic,
  tab,
  cat,
  qsFor,
  prog,
  onTab,
  onBack,
  onStart,
}: {
  topic: string;
  tab: "learn" | "practice";
  cat: CategoryId;
  qsFor: (t: string) => Question[];
  prog: Progress;
  onTab: (tab: "learn" | "practice") => void;
  onBack: () => void;
  onStart: (ids: string[]) => void;
}) {
  const meta = TOPIC_META[topic];
  const qs = qsFor(topic);
  const mastered = qs.filter((q) => prog.questions[q.id]?.status === "mastered").length;
  const learned = qs.filter((q) => prog.questions[q.id]?.status === "learned").length;
  const lesson = LESSONS[topic];
  const nextUp = qs.find((q) => prog.questions[q.id]?.status !== "mastered");

  const startSession = (mode: "continue" | "review") => {
    const list =
      mode === "continue"
        ? qs.filter((q) => prog.questions[q.id]?.status !== "mastered")
        : qs;
    if (!list.length) return;
    onStart(list.map((q) => q.id));
  };

  return (
    <main className="mx-auto max-w-6xl px-5 pt-8">
      <button onClick={onBack} className="pq-link-arrow">← Index</button>

      <div className="mt-6 grid gap-8 border-b pq-rule pb-8 md:grid-cols-[1fr_260px]">
        <div>
          <div className="text-[12px] font-bold uppercase tracking-[0.08em] text-[var(--pq-green-dark)]">
            Chapter {meta.num} · {meta.cats.map((c) => `Category ${c}`).join(" · ")}
          </div>
          <h1 className="pq-display mt-2 text-[34px] leading-tight md:text-[38px]">
            {meta.label}
          </h1>
          <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-[var(--pq-ink-soft)]">
            {lesson?.intro || meta.blurb}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <button
              onClick={() => onTab("learn")}
              className={`rounded-full border px-5 py-2 text-[13.5px] font-bold transition-colors ${
                tab === "learn"
                  ? "border-[var(--pq-ink)] bg-[var(--pq-ink)] text-white"
                  : "pq-rule bg-white text-[var(--pq-ink-soft)] hover:bg-[var(--pq-wash)]"
              }`}
            >
              Learn
            </button>
            <button
              onClick={() => onTab("practice")}
              className={`rounded-full border px-5 py-2 text-[13.5px] font-bold transition-colors ${
                tab === "practice"
                  ? "border-[var(--pq-ink)] bg-[var(--pq-ink)] text-white"
                  : "pq-rule bg-white text-[var(--pq-ink-soft)] hover:bg-[var(--pq-wash)]"
              }`}
            >
              Practice · {qs.length}
            </button>
          </div>
        </div>
        <figure>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={meta.img} alt="" className="h-44 w-full rounded-xl object-cover shadow-sm" />
          <figcaption className="mt-2 text-[12px] font-bold text-[var(--pq-muted)]">
            {meta.blurb.toLowerCase()}
          </figcaption>
        </figure>
      </div>

      {tab === "learn" && lesson && <LessonView lesson={lesson} cat={cat} />}

      {tab === "practice" && (
        <section className="py-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="pq-display text-[24px] font-semibold">Work the problems</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-[var(--pq-ink-soft)]">
                {qs.length} problems for your syllabus, ordered from the gentlest to the hardest.
                MCQs and numerical answers — numerical entries accept a tolerance, so estimate
                like a physicist. A first-try correct answer is worth 10 XP; a retry, 4.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="pq-btn" disabled={!nextUp} onClick={() => startSession("continue")}>
                  {mastered > 0 ? "Continue from where you stopped" : "Start the chapter"}
                </button>
                <button className="pq-btn-ghost" onClick={() => startSession("review")}>
                  Full review
                </button>
              </div>
            </div>
            <div className="rounded-xl border pq-rule bg-white p-5 shadow-sm">
              <div className="text-[12px] font-bold text-[var(--pq-muted)]">Your record here</div>
              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="pq-display text-[26px]">{qs.length}</div>
                  <div className="mt-1 text-[11px] font-bold text-[var(--pq-muted)]">Problems</div>
                </div>
                <div>
                  <div className="pq-display text-[26px] text-[var(--pq-purple)]">{mastered}</div>
                  <div className="mt-1 text-[11px] font-bold text-[var(--pq-muted)]">Mastered</div>
                </div>
                <div>
                  <div className="pq-display text-[26px] text-[var(--pq-blue)]">{learned}</div>
                  <div className="mt-1 text-[11px] font-bold text-[var(--pq-muted)]">Familiar</div>
                </div>
              </div>
              <div className="mt-5">
                <ProgressBar done={mastered} total={qs.length} />
              </div>
              <div className="mt-3 text-[12px] font-bold text-[var(--pq-muted)]">
                {mastered === qs.length
                  ? "Everything mastered — try a full review to keep it sharp."
                  : `${qs.length - mastered} still unmastered.`}
              </div>
            </div>
          </div>

          {/* problem list */}
          <div className="mt-12">
            <div className="mb-3 border-b pq-rule pb-2 text-[13px] font-bold">
              Problem set
            </div>
            <div className="divide-y pq-rule-soft">
              {qs.map((q, i) => {
                const st = prog.questions[q.id]?.status;
                return (
                  <div key={q.id} className="grid grid-cols-[36px_1fr_auto] items-baseline gap-3 py-2.5 text-[14px]">
                    <div className="pq-mono-none text-[12px] text-[var(--pq-muted)]">{String(i + 1).padStart(2, "0")}</div>
                    <div className="truncate text-[var(--pq-ink-soft)]">
                      <MathText text={q.question.replace(/\$/g, "")} />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="pq-mono-none text-[11px] text-[var(--pq-muted)]">
                        {tierLabel[q.tier]} {q.year || ""}
                      </span>
                      <span className={`pq-chip ${st === "mastered" ? "pq-chip-good" : st ? "pq-chip-blue" : ""}`}>
                        {st === "mastered" ? "Mastered" : st ? "Familiar" : "Not started"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

/* ------------------------------- lesson view ------------------------------- */

function LessonView({ lesson, cat }: { lesson: Lesson; cat: CategoryId }) {
  const toc = lesson.sections.map((s, i) => ({
    i,
    label: sectionLabel(s),
    kind: s.kind,
    level: s.kind === "concept" || s.kind === "example" ? s.level : null,
  }));

  return (
    <div className="grid gap-10 py-10 lg:grid-cols-[230px_1fr]">
      {/* toc */}
      <aside className="hidden lg:block">
        <div className="sticky top-20 rounded-xl border pq-rule bg-white p-4 shadow-sm">
          <div className="mb-3 text-[12px] font-bold text-[var(--pq-muted)]">In this chapter</div>
          <ol className="space-y-1">
            {toc.map((t) => (
              <li key={t.i}>
                <a href={`#sec-${t.i}`} className="flex items-baseline gap-2 rounded-lg px-2 py-1.5 text-[13px] font-bold text-[var(--pq-ink-soft)] hover:bg-[var(--pq-wash)] hover:text-[var(--pq-green-dark)]">
                  <span className="text-[11px] font-bold text-[var(--pq-muted)]">{t.i + 1}</span>
                  <span className="truncate">{t.label}</span>
                  {t.level && <span className="pq-chip ml-auto shrink-0">{t.level}</span>}
                </a>
              </li>
            ))}
          </ol>
          <div className="mt-4 rounded-lg bg-[var(--pq-wash)] p-3 text-[12px] leading-relaxed text-[var(--pq-muted)]">
            Sections marked <span className="pq-chip">A</span> are needed for Category A
            (Classes V–VI), <span className="pq-chip">B</span> adds Category B, and{" "}
            <span className="pq-chip">C</span> completes Category C. Read everything up to your
            level — the rest is a preview of what comes next.
          </div>
        </div>
      </aside>

      {/* sections */}
      <div className="max-w-3xl">
        {lesson.bigPicture.length > 0 && (
          <div className="mb-10 rounded-xl bg-[var(--pq-green-tint)] p-5">
            <div className="mb-2 text-[12px] font-bold uppercase tracking-[0.06em] text-[var(--pq-green-dark)]">
              Why this chapter exists
            </div>
            {lesson.bigPicture.map((b, i) => (
              <p key={i} className="pq-prose text-[15.5px] leading-relaxed text-[var(--pq-ink-soft)]">
                <MathText text={b} />
              </p>
            ))}
          </div>
        )}

        {lesson.sections.map((s, i) => (
          <SectionView key={i} s={s} idx={i} cat={cat} />
        ))}
      </div>
    </div>
  );
}

function sectionLabel(s: LessonSection): string {
  if (s.kind === "intro") return "Introduction";
  if (s.kind === "concept") return s.title;
  if (s.kind === "example") return "Worked example";
  if (s.kind === "tips") return s.title;
  return "Checkpoint";
}

function SectionView({ s, idx, cat }: { s: LessonSection; idx: number; cat: CategoryId }) {
  if (s.kind === "intro") {
    return (
      <section id={`sec-${idx}`} className="mb-12 scroll-mt-20">
        <p className="text-[17.5px] leading-[1.75] text-[var(--pq-ink)]">{s.body}</p>
      </section>
    );
  }

  if (s.kind === "concept") {
    return (
      <section id={`sec-${idx}`} className="mb-12 scroll-mt-20">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="pq-display text-[22px]">{s.title}</h3>
          <span className={`pq-chip ${s.level === cat ? "pq-chip-accent" : ""}`}>{s.level}</span>
        </div>
        <p className="pq-prose mt-3 text-[16.5px] leading-[1.75] text-[var(--pq-ink-soft)]">
          <MathText text={s.body} />
        </p>
        {s.formulas && s.formulas.length > 0 && (
          <div className="pq-plate mt-5 grid gap-2 px-5 py-4 sm:grid-cols-2">
            {s.formulas.map((f, i) => (
              <div key={i} className="pq-display text-[16.5px]">
                <MathText text={f.includes("$") ? f : `$${f}$`} />
              </div>
            ))}
          </div>
        )}
      </section>
    );
  }

  if (s.kind === "example") {
    return <ExampleSection key={idx} s={s} idx={idx} />;
  }

  if (s.kind === "tips") {
    return (
      <section id={`sec-${idx}`} className="mb-12 scroll-mt-20">
        <h3 className="pq-display text-[22px]">{s.title}</h3>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {s.items.map((item, i) => (
            <div key={i} className="rounded-xl border pq-rule bg-white p-4">
              <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.06em] text-[var(--pq-green-dark)]">
                <IconLightbulb className="h-3.5 w-3.5" />
                Shortcut {i + 1}
              </div>
              <div className="pq-prose mt-1.5 text-[15px] font-bold leading-snug">
                <MathText text={item.tip} />
              </div>
              <div className="pq-prose mt-1.5 text-[13px] leading-relaxed text-[var(--pq-muted)]">
                <MathText text={item.why} />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // checkpoint
  return (
    <section id={`sec-${idx}`} className="mb-12 scroll-mt-20">
      <div className="flex items-center gap-3">
        <h3 className="pq-display text-[22px]">Checkpoint</h3>
        <span className="pq-chip">Quick check</span>
      </div>
      <Checkpoint key={idx} s={s} />
    </section>
  );
}

function ExampleSection({ s, idx }: { s: { kind: "example"; title: string; level: "A" | "B" | "C"; problem: string; steps: string[] }; idx: number }) {
  const [shown, setShown] = useState(1);
  const done = shown >= s.steps.length;
  return (
    <section id={`sec-${idx}`} className="mb-12 scroll-mt-20">
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="pq-display text-[22px]">{s.title}</h3>
        <span className={`pq-chip ${s.level === "C" ? "pq-chip-accent" : ""}`}>{s.level}</span>
      </div>
      <div className="mt-4 overflow-hidden rounded-xl border pq-rule bg-white shadow-sm">
        <div className="border-b pq-rule-soft bg-[var(--pq-wash)] px-5 py-4">
          <div className="text-[11px] font-bold uppercase tracking-[0.06em] text-[var(--pq-muted)]">The problem</div>
          <div className="pq-prose mt-1 text-[16px] leading-relaxed">
            <MathText text={s.problem} />
          </div>
        </div>
        <div className="px-5 py-4">
          <div className="mb-3 flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.06em] text-[var(--pq-muted)]">
            <span>Worked solution</span>
            <span className="tracking-normal">
              {shown} / {s.steps.length}
            </span>
          </div>
          <ol className="space-y-3">
            {s.steps.slice(0, shown).map((st, i) => (
              <li key={i} className="grid grid-cols-[28px_1fr] gap-3">
                <div className="mt-0.5 text-[12px] font-bold text-[var(--pq-green-dark)]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="pq-prose text-[15.5px] leading-relaxed text-[var(--pq-ink-soft)]">
                  <MathText text={st} />
                </div>
              </li>
            ))}
          </ol>
          {!done && (
            <button className="pq-btn mt-5" onClick={() => setShown((n) => n + 1)}>
              Show next step
            </button>
          )}
          {done && (
            <div className="mt-4 flex items-center gap-1.5 border-t pq-rule-soft pt-3 text-[12px] font-bold text-[var(--pq-good)]">
              <IconCheck className="h-4 w-4" />
              Solved — now try hiding the steps and rebuilding it from memory.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Checkpoint({ s }: { s: Extract<LessonSection, { kind: "checkpoint" }> }) {
  const [picked, setPicked] = useState<number | null>(null);
  const correct = picked === s.answer;
  return (
    <div className="mt-4 rounded-xl border pq-rule bg-white px-5 py-5 shadow-sm">
      <div className="pq-prose text-[16px] leading-relaxed">
        <MathText text={s.question} />
      </div>
      <div className="mt-4 grid gap-2">
        {s.options.map((o, i) => {
          const isAns = picked !== null && i === s.answer;
          const isWrongPick = picked === i && !correct;
          return (
            <button
              key={i}
              disabled={picked !== null}
              onClick={() => setPicked(i)}
              className={`pq-opt ${isAns ? "border-[var(--pq-good)] bg-[var(--pq-good-bg)]" : isWrongPick ? "border-[var(--pq-bad)] bg-[var(--pq-bad-bg)]" : ""}`}
            >
              <span className={`pq-key ${isAns ? "border-[var(--pq-good)] bg-[var(--pq-good)] text-white" : isWrongPick ? "border-[var(--pq-bad)] bg-[var(--pq-bad)] text-white" : ""}`}>
                {"ABCD"[i]}
              </span>
              <span className="text-[15px]">{o}</span>
            </button>
          );
        })}
      </div>
      {picked !== null && (
        <div className={`mt-4 border-l-2 pl-4 ${correct ? "border-[var(--pq-good)]" : "border-[var(--pq-bad)]"}`}>
          <div className="pq-mono text-[10px] text-[var(--pq-ink-soft)]">
            {correct ? "Correct" : "Not quite"}
          </div>
          <div className="pq-prose mt-1 text-[14.5px] leading-relaxed text-[var(--pq-ink-soft)]">
            <MathText text={s.explain} />
          </div>
          {!correct && (
            <button className="pq-link-arrow mt-2" onClick={() => setPicked(null)}>
              try again
            </button>
          )}
        </div>
      )}
    </div>
  );
}

/* --------------------------------- session --------------------------------- */

function SessionPage({
  topic,
  ids,
  prog,
  record,
  setStreak,
  onDone,
  onExit,
}: {
  topic: string;
  ids: string[];
  prog: Progress;
  record: (id: string, ok: boolean, first: boolean) => void;
  setStreak: React.Dispatch<React.SetStateAction<number>>;
  onDone: (correct: number, total: number, xpGained: number) => void;
  onExit: () => void;
}) {
  const all = useMemo(() => ids.map((id) => BY_TOPIC[topic].find((q) => q.id === id)!).filter(Boolean), [ids, topic]);
  const [idx, setIdx] = useState(() => {
    const firstUnmastered = all.findIndex((q) => prog.questions[q.id]?.status !== "mastered");
    return firstUnmastered === -1 ? 0 : firstUnmastered;
  });
  const [selected, setSelected] = useState<string | null>(null);
  const [numInput, setNumInput] = useState("");
  const [checked, setChecked] = useState<boolean | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [stats, setStats] = useState({ correct: 0, xp: 0 });
  const triedRef = useRef(false);
  const recordedRef = useRef(false);

  const q = all[idx];
  const total = all.length;

  useEffect(() => {
    triedRef.current = false;
    recordedRef.current = false;
    setSelected(null);
    setNumInput("");
    setChecked(null);
    setShowHint(false);
  }, [idx]);

  const check = () => {
    if (checked !== null) return;
    let correct = false;
    if (q.type === "mcq") {
      correct = selected === q.answer;
    } else {
      const val = parseFloat(numInput.replace(/,/g, "").replace(/×10\^/g, "e").replace(/x10\^/g, "e"));
      const target = q.answer as number;
      const tol = (q.tolerance ?? 0.03) * Math.abs(target);
      correct = isFinite(val) && Math.abs(val - target) <= Math.max(tol, 1e-12);
    }
    const firstTry = !triedRef.current;
    triedRef.current = true;
    setChecked(correct);
    if (correct) {
      const gained = firstTry ? 10 : 4;
      setLastGained(gained);
      setStats((s) => ({ correct: s.correct + 1, xp: s.xp + gained }));
      setStreak((s) => s + 1);
    } else {
      setStreak(0);
    }
    if (!recordedRef.current) {
      recordedRef.current = true;
      record(q.id, correct, firstTry);
    }
  };

  const [lastGained, setLastGained] = useState(0);

  const retry = () => {
    setChecked(null);
    if (q.type === "mcq") setSelected(null);
    else setNumInput("");
  };

  const next = () => {
    if (idx + 1 >= total) {
      onDone(stats.correct, total, stats.xp);
    } else {
      setIdx((i) => i + 1);
    }
  };

  if (!q) return null;

  const unitTex = (u: string) => u.replace(/\\/g, "");

  return (
    <main className="mx-auto max-w-3xl px-5 pt-8">
      <div className="flex items-center justify-between">
        <button onClick={onExit} className="pq-link-arrow inline-flex items-center gap-1.5">
          <IconChevronRight className="h-4 w-4 rotate-180" />
          {TOPIC_META[topic].label}
        </button>
        <div className="flex items-center gap-4 text-[13px] font-bold text-[var(--pq-muted)]">
          <span className="tabular-nums">
            {idx + 1} of {total}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-[var(--pq-gold-bg)] px-2.5 py-1 text-[12px] font-bold text-[var(--pq-gold)]">
            <IconStar className="h-3 w-3" />
            +{stats.xp} XP
          </span>
        </div>
      </div>
      <div className="pq-bar mt-3">
        <div style={{ width: `${((idx + (checked !== null ? 1 : 0)) / total) * 100}%` }} />
      </div>

      <article className="mt-8 rounded-xl border pq-rule bg-white px-6 py-7 shadow-sm md:px-9 md:py-9">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="pq-chip">{tierLabel[q.tier]}{q.year ? ` · ${q.year}` : ""}</span>
            <span className="pq-chip">{q.type === "mcq" ? "Multiple choice" : "Numerical"}</span>
          </div>
          <span className="flex items-center gap-1" title={`Difficulty ${q.difficulty} of 5`}>
            {[1, 2, 3, 4, 5].map((n) => (
              <span key={n} className={`pq-dot ${n <= q.difficulty ? "bg-[var(--pq-purple)]" : "bg-[var(--pq-line)]"}`} />
            ))}
          </span>
        </div>
        <div className="mt-2 text-[12px] font-bold text-[var(--pq-muted)]">{q.source}</div>

        {q.figureNote && (
          <div className="mt-4 rounded-lg bg-[var(--pq-wash)] px-4 py-2.5 text-[13px] font-semibold text-[var(--pq-muted)]">
            <span className="text-[11px] font-bold uppercase tracking-[0.06em]">Figure — </span>
            <MathText text={q.figureNote} />
          </div>
        )}

        <div className="pq-prose mt-5 text-[18.5px] leading-[1.7]">
          <MathText text={q.question} />
        </div>

        {q.type === "mcq" ? (
          <div className="mt-6 grid gap-2">
            {q.options!.map((opt, i) => {
              const letter = "ABCDE"[i];
              const isSel = selected === letter;
              const isAns = checked !== null && letter === q.answer;
              const isWrongSel = checked === false && isSel;
              return (
                <button
                  key={i}
                  disabled={checked !== null}
                  onClick={() => setSelected(letter)}
                  className={`pq-opt ${
                    checked !== null
                      ? isAns
                        ? "border-[var(--pq-good)] bg-[var(--pq-good-bg)]"
                        : isWrongSel
                          ? "border-[var(--pq-bad)] bg-[var(--pq-bad-bg)]"
                          : "opacity-55"
                      : isSel
                        ? "border-[var(--pq-ink)]"
                        : ""
                  }`}
                >
                  <span
                    className={`pq-key ${
                      isAns
                        ? "border-[var(--pq-good)] bg-[var(--pq-good)] text-white"
                        : isWrongSel
                          ? "border-[var(--pq-bad)] bg-[var(--pq-bad)] text-white"
                          : isSel
                            ? "border-[var(--pq-ink)] bg-[var(--pq-ink)] text-[var(--pq-paper)]"
                            : ""
                    }`}
                  >
                    {letter}
                  </span>
                  <span className="pq-prose text-[15.5px] leading-relaxed">
                    <MathText text={opt} />
                  </span>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="mt-6">
            <div className="flex items-baseline gap-3">
              <input
                value={numInput}
                disabled={checked !== null}
                onChange={(e) => setNumInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && checked === null && numInput && check()}
                placeholder="Your numerical answer"
                className="w-full max-w-xs rounded-lg border pq-rule bg-white px-4 py-2.5 text-[18px] font-bold tabular-nums outline-none transition-colors placeholder:text-[var(--pq-line)] focus:border-[var(--pq-green)] focus:ring-2 focus:ring-[#14bf9629]"
              />
              {q.unit && (
                <span className="pq-prose text-[16px] text-[var(--pq-ink-soft)]">
                  <MathText text={`$\\mathrm{${q.unit}}$`} />
                </span>
              )}
            </div>
            <div className="mt-2 text-[11.5px] font-bold text-[var(--pq-muted)]">
              Tolerance ±{Math.round(((q.tolerance ?? 0.03) * 100))}% — scientific notation like 3.9e-8 works
            </div>
          </div>
        )}

        {/* hint */}
        {!showHint && checked === null && q.hint && (
          <button className="pq-link-arrow mt-6 inline-flex items-center gap-1.5" onClick={() => setShowHint(true)}>
            <IconLightbulb className="h-4 w-4" />
            Get a hint
          </button>
        )}
        {showHint && q.hint && (
          <div className="mt-4 rounded-lg bg-[#fff8e6] px-4 py-3 text-[14.5px] leading-relaxed text-[var(--pq-ink-soft)]">
            <div className="mb-1 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.06em] text-[var(--pq-gold)]">
              <IconLightbulb className="h-3.5 w-3.5" />
              Hint
            </div>
            <MathText text={q.hint} />
          </div>
        )}

        {/* verdict + actions */}
        {checked !== null && (
          <div className="mt-6">
            <div
              className={`flex items-start gap-3 rounded-lg px-4 py-3 ${
                checked ? "bg-[var(--pq-good-bg)]" : "bg-[var(--pq-bad-bg)]"
              }`}
            >
              <span className={`mt-0.5 ${checked ? "text-[var(--pq-good)]" : "text-[var(--pq-bad)]"}`}>
                {checked ? <IconCheck className="h-5 w-5" /> : <IconX className="h-5 w-5" />}
              </span>
              <div>
                <div className="pq-display text-[18px]">
                  {checked ? (
                    <>Correct — +{lastGained} XP</>
                  ) : (
                    <>Not quite — here is how to solve it</>
                  )}
                </div>
                {!checked && (
                  <div className="pq-prose mt-0.5 text-[14.5px] text-[var(--pq-ink-soft)]">
                    Correct answer:{" "}
                    {q.type === "mcq" ? (
                      <strong>({q.answer as string})</strong>
                    ) : (
                      <MathText text={`$${q.answer}${q.unit ? "\\," + unitTex(q.unit) : ""}$`} />
                    )}
                    {q.type === "numeric" && (
                      <span className="ml-2 text-[11px] font-bold text-[var(--pq-muted)]">
                        ±{Math.round(((q.tolerance ?? 0.03) * 100))}%
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-4 rounded-lg bg-[var(--pq-wash)] px-5 py-4">
              <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.06em] text-[var(--pq-muted)]">Step-by-step solution</div>
              <div className="pq-prose text-[15.5px] leading-[1.75] text-[var(--pq-ink)]">
                <MathText text={q.solution} />
              </div>
            </div>

            <div className="mt-5 flex flex-wrap justify-end gap-3">
              {!checked && <button className="pq-btn-ghost" onClick={retry}>Try again</button>}
              {checked && <button className="pq-btn" onClick={next}>{idx + 1 >= total ? "Finish session" : "Next problem"}</button>}
            </div>
          </div>
        )}

        {checked === null && (
          <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t pq-rule pt-5">
            <button className="pq-link-arrow" onClick={next}>
              Skip this one
            </button>
            <button
              className="pq-btn"
              disabled={q.type === "mcq" ? !selected : !numInput}
              onClick={check}
            >
              Check
            </button>
          </div>
        )}
      </article>

      <div className="flex items-center justify-center gap-1.5 py-6 text-[12px] font-bold text-[var(--pq-muted)]">
        <IconFlame className="h-3.5 w-3.5 text-[var(--pq-flame)]" />
        Best streak {prog.bestStreak} — a wrong answer resets the current run
      </div>
    </main>
  );
}

/* --------------------------------- results --------------------------------- */

function Ring({ pct, size = 148, stroke = 12 }: { pct: number; size?: number; stroke?: number }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const color = pct >= 80 ? "var(--pq-green)" : pct >= 50 ? "var(--pq-blue)" : "var(--pq-bad)";
  return (
    <svg width={size} height={size} className="-rotate-90">
      <circle cx={size / 2} cy={size / 2} r={r} stroke="var(--pq-line-soft)" strokeWidth={stroke} fill="none" />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        stroke={color}
        strokeWidth={stroke}
        fill="none"
        strokeDasharray={c}
        strokeDashoffset={c * (1 - pct / 100)}
        strokeLinecap="round"
      />
    </svg>
  );
}

function ResultsPage({
  topic,
  correct,
  total,
  xpGained,
  onAgain,
  onHome,
  onNext,
}: {
  topic: string;
  correct: number;
  total: number;
  xpGained: number;
  onAgain: () => void;
  onHome: () => void;
  onNext: (t: string) => void;
}) {
  const meta = TOPIC_META[topic];
  const order = TOPIC_ORDER.filter((t) => TOPIC_META[t]?.cats.includes("C"));
  const nextTopic = order[order.indexOf(topic) + 1];
  const pct = total ? Math.round((correct / total) * 100) : 0;
  return (
    <main className="mx-auto max-w-2xl px-5 pt-14 text-center">
      <div className="text-[12px] font-bold uppercase tracking-[0.08em] text-[var(--pq-green-dark)]">
        Chapter {meta.num} · Session complete
      </div>
      <h1 className="pq-display mt-3 text-[34px] md:text-[40px]">
        {pct >= 80 ? "Great work" : pct >= 50 ? "Solid progress" : "Worth another pass"}
      </h1>
      <p className="mt-2 text-[15px] font-bold text-[var(--pq-muted)]">
        {pct >= 80
          ? "You clearly know this chapter."
          : pct >= 50
            ? "You are getting there — review the misses and go again."
            : "Read the chapter once more, then retry the problems."}
      </p>

      <div className="relative mx-auto mt-8 w-fit">
        <Ring pct={pct} />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="pq-display text-[30px]">{pct}%</div>
          <div className="text-[11px] font-bold uppercase tracking-wide text-[var(--pq-muted)]">accuracy</div>
        </div>
      </div>

      <div className="mx-auto mt-8 grid max-w-sm grid-cols-2 gap-3">
        <div className="rounded-xl border pq-rule bg-white p-4 shadow-sm">
          <div className="pq-display text-[24px]">
            {correct}/{total}
          </div>
          <div className="mt-1 text-[11px] font-bold text-[var(--pq-muted)]">Correct</div>
        </div>
        <div className="rounded-xl border pq-rule bg-white p-4 shadow-sm">
          <div className="pq-display text-[24px] text-[var(--pq-gold)]">+{xpGained}</div>
          <div className="mt-1 text-[11px] font-bold text-[var(--pq-muted)]">XP earned</div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button className="pq-btn" onClick={onAgain}>Practice this chapter again</button>
        {nextTopic && (
          <button className="pq-btn-ghost" onClick={() => onNext(nextTopic)}>
            Next: {TOPIC_META[nextTopic].label}
          </button>
        )}
        <button className="pq-btn-ghost" onClick={onHome}>Back to chapters</button>
      </div>
    </main>
  );
}

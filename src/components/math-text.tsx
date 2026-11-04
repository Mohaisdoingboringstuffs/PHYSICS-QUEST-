"use client";

import katex from "katex";
import { useMemo } from "react";

/** Render a string containing $inline$ and $$display$$ math via KaTeX. */
export function MathText({ text, className }: { text: string; className?: string }) {
  const parts = useMemo(() => splitMath(text), [text]);
  return (
    <span className={className}>
      {parts.map((p, i) =>
        p.kind === "math" ? (
          <MathSpan key={i} tex={p.content} display={p.display} />
        ) : (
          <span key={i}>{p.content}</span>
        ),
      )}
    </span>
  );
}

type Part = { kind: "text" | "math"; content: string; display?: boolean };

function splitMath(text: string): Part[] {
  const parts: Part[] = [];
  let buf = "";
  let i = 0;
  while (i < text.length) {
    if (text.startsWith("$$", i)) {
      const end = text.indexOf("$$", i + 2);
      if (end > -1) {
        if (buf) parts.push({ kind: "text", content: buf });
        buf = "";
        parts.push({ kind: "math", content: text.slice(i + 2, end), display: true });
        i = end + 2;
        continue;
      }
    }
    if (text[i] === "$" && text[i - 1] !== "\\") {
      const end = text.indexOf("$", i + 1);
      if (end > -1) {
        if (buf) parts.push({ kind: "text", content: buf });
        buf = "";
        parts.push({ kind: "math", content: text.slice(i + 1, end), display: false });
        i = end + 1;
        continue;
      }
    }
    buf += text[i];
    i++;
  }
  if (buf) parts.push({ kind: "text", content: buf });
  return parts;
}

function MathSpan({ tex, display }: { tex: string; display?: boolean }) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(tex.replace(/\$\$/g, ""), {
        displayMode: display,
        throwOnError: false,
        strict: false,
        output: "html",
      });
    } catch {
      return `<span style="color:#b91c1c">${escapeHtml(tex)}</span>`;
    }
  }, [tex, display]);
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

function escapeHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

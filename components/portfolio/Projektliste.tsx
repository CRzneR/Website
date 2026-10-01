"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { FiArrowUpRight, FiChevronDown } from "react-icons/fi";
import Reveal from "@/components/Effects/Reveal";
import { FILTERS, projects, type Project } from "./Projects";

type Filter = (typeof FILTERS)[number];
type Sort = "newest" | "oldest";

const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

/* ---------- Eine Projektzeile ---------- */
function ProjectRow({
  project,
  number,
  flipped,
}: {
  project: Project;
  number: number;
  flipped: boolean;
}) {
  const external = project.href ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Reveal
      as="article"
      stagger={0.15}
      distance={40}
      className="grid items-center gap-8 border-b border-white/10 py-10 md:grid-cols-[1.15fr_1fr_auto] md:gap-10 md:py-14"
    >
      {/* Bild im Leuchtrahmen – bei jeder zweiten Zeile rechts */}
      <div
        className={`relative overflow-hidden rounded-xl border border-accent/40 bg-[#101010] shadow-[0_0_50px_-15px_rgba(245,252,123,0.45)] ${
          flipped ? "md:order-2" : ""
        }`}
      >
        <div className="relative aspect-[16/10]">
          <Image
            src={project.image}
            alt={`Screenshot von ${project.title}`}
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.03]"
          />
        </div>
        {/* Leuchtende Kante an der Außenseite */}
        <span
          aria-hidden="true"
          className={`absolute top-6 h-24 w-[2px] rounded-full bg-accent shadow-[0_0_12px_rgba(245,252,123,0.9)] ${
            flipped ? "right-0" : "left-0"
          }`}
        />
      </div>

      {/* Text */}
      <div className={flipped ? "md:order-1" : ""}>
        <p className="font-mono text-sm text-soft">
          {`// ${String(number).padStart(2, "0")}`}
          <span className="ml-4 uppercase tracking-widest text-accent">{project.type}</span>
        </p>
        <h2 className="mt-3 font-display text-3xl text-white md:text-4xl">{project.title}</h2>
        <p className="mt-4 max-w-md text-base leading-relaxed text-soft">{project.description}</p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs text-white/80"
            >
              {tag}
            </li>
          ))}
        </ul>

        {project.href && (
          <a
            href={project.href}
            {...external}
            className={`group mt-8 inline-flex items-center gap-3 border-b border-accent/40 pb-1 text-sm font-semibold text-accent transition-colors hover:border-accent ${focus}`}
          >
            Projekt ansehen
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        )}
      </div>

      {/* Jahr + runder Pfeil */}
      <div
        className={`flex items-center justify-between gap-6 md:order-3 md:h-full md:flex-col md:justify-center md:border-l md:border-white/10 md:pl-10`}
      >
        <p className="font-mono text-sm text-soft">{project.year}</p>
        <span aria-hidden="true" className="hidden h-px w-6 bg-white/20 md:block" />
        {project.href ? (
          <a
            href={project.href}
            {...external}
            aria-label={`${project.title} öffnen (neues Fenster)`}
            className={`flex h-12 w-12 items-center justify-center rounded-full border border-accent/60 text-accent transition-colors duration-300 hover:bg-accent hover:text-[#151515] ${focus}`}
          >
            <FiArrowUpRight className="h-5 w-5" />
          </a>
        ) : (
          <span className="h-12 w-12" aria-hidden="true" />
        )}
      </div>
    </Reveal>
  );
}

/* ---------- Liste mit Filter und Sortierung ---------- */
export default function ProjektListe() {
  const [filter, setFilter] = useState<Filter>("Alle Projekte");
  const [sort, setSort] = useState<Sort>("newest");

  const visible = useMemo(() => {
    const filtered =
      filter === "Alle Projekte"
        ? projects
        : projects.filter((project) => project.categories.includes(filter));
    // sort() ist stabil: Projekte mit gleichem Jahr behalten ihre Reihenfolge aus projects.ts
    return [...filtered].sort((a, b) => (sort === "newest" ? b.year - a.year : a.year - b.year));
  }, [filter, sort]);

  return (
    <section className="px-5 pb-24 md:px-[6.5vw] md:pb-32">
      {/* Filter + Sortierung */}
      <div className="flex flex-col gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
        <div role="group" aria-label="Projekte filtern" className="flex flex-wrap gap-2 md:gap-3">
          {FILTERS.map((f) => {
            const active = f === filter;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={active}
                className={`rounded-full px-5 py-2.5 text-sm transition-colors duration-300 ${focus} ${
                  active
                    ? "bg-accent font-semibold text-[#151515] shadow-[0_0_24px_-6px_rgba(245,252,123,0.7)]"
                    : "border border-white/20 text-white hover:border-accent/60 hover:text-accent"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        <label className="flex items-center gap-4 text-sm">
          <span className="font-mono text-xs uppercase tracking-widest text-soft">
            {"// Sortieren"}
          </span>
          <span className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
              className={`cursor-pointer appearance-none bg-transparent pr-7 text-white ${focus}`}
            >
              <option value="newest" className="bg-[#151515]">
                Neueste zuerst
              </option>
              <option value="oldest" className="bg-[#151515]">
                Älteste zuerst
              </option>
            </select>
            <FiChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-accent"
            />
          </span>
        </label>
      </div>

      {/* Projekte */}
      <div aria-live="polite">
        {visible.length > 0 ? (
          // Nummer = Position in der aktuellen Ansicht (// 01, // 02 …)
          visible.map((project, i) => (
            <ProjectRow
              key={project.title}
              project={project}
              number={i + 1}
              flipped={i % 2 === 1}
            />
          ))
        ) : (
          <p className="py-16 text-center text-soft">
            In dieser Kategorie gibt es noch keine Projekte.
          </p>
        )}
      </div>
    </section>
  );
}

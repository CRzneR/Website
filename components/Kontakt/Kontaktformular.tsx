import { FiArrowUpRight } from "react-icons/fi";
import Reveal from "@/components/Effects/Reveal";
import ContactForm from "./ContactForm";
import { contacts, linkProps } from "./contacts";

const panel =
  "relative rounded-2xl border border-accent/25 bg-white/[0.02] shadow-[0_0_50px_-25px_rgba(245,252,123,0.35)]";
const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export default function KontaktFormular() {
  return (
    <section className="px-5 py-12 md:px-[6.5vw] md:py-16">
      <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
        {/* ---------- Formular ---------- */}
        <Reveal className={`${panel} p-6 md:p-10`}>
          {/* Leuchtende Kante links oben */}
          <span
            aria-hidden="true"
            className="absolute -left-px top-6 h-20 w-[2px] rounded-full bg-accent shadow-[0_0_12px_rgba(245,252,123,0.9)]"
          />
          <div className="flex items-start justify-between gap-4">
            <h2 className="font-display text-2xl text-white md:text-3xl">
              Schreib mir eine <span className="text-accent">Nachricht.</span>
            </h2>
            <p className="shrink-0 font-mono text-xs uppercase text-soft">{"// Form"}</p>
          </div>

          <ContactForm />
        </Reveal>

        {/* ---------- Rechte Spalte ---------- */}
        <div className="flex flex-col gap-5 lg:gap-6">
          {/* Kontaktliste im Code-Stil */}
          <Reveal delay={0.1} className={`${panel} p-6 md:p-8`}>
            <h2 className="border-b border-white/10 pb-5 font-mono text-sm uppercase tracking-widest text-accent">
              {"// Kontakt Liste {"}
            </h2>

            <ul className="mt-5 flex flex-col gap-3 md:gap-4">
              {contacts.map((contact, i) => (
                <li key={contact.label}>
                  <a
                    href={contact.href}
                    {...linkProps(contact.href)}
                    className={`group grid grid-cols-[1fr_auto] items-baseline gap-x-3 rounded-md md:grid-cols-[1.75rem_5rem_3rem_0.75rem_1fr_auto] ${focus}`}
                  >
                    <span className="hidden font-mono text-sm text-accent/80 md:inline">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-white">{contact.label}</span>
                    <span className="hidden whitespace-pre font-mono text-sm text-soft md:inline">
                      [ <span className="text-accent">{i}</span> ]
                    </span>
                    <span className="hidden text-soft md:inline">=</span>
                    <span className="col-start-1 min-w-0 truncate text-sm text-soft transition-colors duration-300 group-hover:text-accent md:col-start-auto xl:text-base">
                      &quot;{contact.value}&quot;
                    </span>
                    <FiArrowUpRight
                      aria-hidden="true"
                      className="col-start-2 row-span-2 row-start-1 h-4 w-4 self-center text-accent transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 md:col-start-auto md:row-span-1 md:row-start-auto"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Icon-Leiste */}
          <Reveal delay={0.2} className={`${panel} flex-1 p-6 md:p-8`}>
            <h2 className="font-mono text-sm uppercase tracking-widest text-accent">
              {"// Direkt kontaktieren"}
            </h2>
            <div className="mt-6 flex items-center justify-between gap-3 sm:justify-start sm:gap-6">
              {contacts
                .filter((c) => c.quick)
                .map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    {...linkProps(href)}
                    aria-label={label}
                    title={label}
                    className={`flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-[#101010] text-white transition-[border-color,box-shadow,color] duration-300 hover:border-accent/80 hover:text-accent hover:shadow-[0_0_24px_-4px_rgba(245,252,123,0.6)] md:h-16 md:w-16 ${focus}`}
                  >
                    <Icon className="h-6 w-6 md:h-7 md:w-7" />
                  </a>
                ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

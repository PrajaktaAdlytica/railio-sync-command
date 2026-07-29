import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ArrowDown, Pause, Play, SkipForward } from "lucide-react";
import { RailixaLogo } from "./railixa-logo";

const VIDEO_DURATION = 10;

export function EntryExperience() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();
  const [time, setTime] = useState(0);
  const [paused, setPaused] = useState(false);
  const [finished, setFinished] = useState(Boolean(reduceMotion));

  const isLight = !reduceMotion && (time >= 9.15 || finished);
  const showSystemLine = reduceMotion || time >= 3.3;

  useEffect(() => {
    if (reduceMotion && videoRef.current) {
      videoRef.current.pause();
    }
  }, [reduceMotion]);

  const enterSite = () => {
    document
      .querySelector("#railixa-main")
      ?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  };

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video || finished) return;

    if (video.paused) {
      await video.play();
      setPaused(false);
      return;
    }

    video.pause();
    setPaused(true);
  };

  const skipMotion = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = Math.max(0, VIDEO_DURATION - 0.08);
      video.pause();
    }
    setTime(VIDEO_DURATION);
    setPaused(false);
    setFinished(true);
  };

  return (
    <section
      aria-labelledby="entry-title"
      className={`relative isolate min-h-[calc(100svh-4rem)] overflow-hidden transition-colors duration-700 ${
        isLight ? "bg-background text-primary" : "bg-[#07131e] text-white"
      }`}
    >
      <div aria-hidden="true" className="absolute inset-0">
        {reduceMotion ? (
          <img
            src="/motion/railixa-entry-poster.jpg"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        ) : (
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            preload="metadata"
            poster="/motion/railixa-entry-poster.jpg"
            onTimeUpdate={(event) => setTime(event.currentTarget.currentTime)}
            onPause={() => {
              if (!finished) setPaused(true);
            }}
            onPlay={() => setPaused(false)}
            onEnded={() => {
              setTime(VIDEO_DURATION);
              setFinished(true);
              setPaused(false);
            }}
            className="h-full w-full object-cover object-center"
          >
            <source src="/motion/railixa-entry.mp4" type="video/mp4" />
          </video>
        )}
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${
            isLight
              ? "bg-gradient-to-b from-background/10 via-transparent to-background/70 opacity-55"
              : "bg-[linear-gradient(90deg,rgba(3,10,16,0.72)_0%,rgba(3,10,16,0.24)_52%,rgba(3,10,16,0.16)_100%),linear-gradient(180deg,rgba(3,10,16,0.18)_0%,transparent_56%,rgba(3,10,16,0.66)_100%)] opacity-100"
          }`}
        />
      </div>

      <div className="container-x relative flex min-h-[calc(100svh-4rem)] flex-col py-6 sm:py-8">
        <div className="flex items-start justify-between gap-6">
          <div
            className={`inline-flex items-center gap-3 whitespace-nowrap text-[8px] font-semibold uppercase tracking-[0.14em] transition-all duration-700 sm:text-xs sm:tracking-[0.18em] ${
              isLight ? "text-primary/58 opacity-100" : "text-white/58 opacity-0"
            }`}
          >
            <span
              className={`h-2 w-2 rounded-full ${
                isLight
                  ? "bg-accent shadow-[0_0_0_5px_rgba(217,79,48,0.11)]"
                  : "bg-accent shadow-[0_0_20px_rgba(217,79,48,0.9)]"
              }`}
            />
            <span>Polska · regional operations · 06:42 CET</span>
          </div>

          {!reduceMotion && (
            <div className="flex items-center gap-2">
              {!finished && (
                <button
                  type="button"
                  onClick={togglePlayback}
                  className={`inline-flex h-10 items-center gap-2 rounded-full border px-3.5 text-xs font-medium backdrop-blur-xl transition-colors ${
                    isLight
                      ? "border-primary/12 bg-white/65 text-primary hover:bg-white"
                      : "border-white/15 bg-black/20 text-white/75 hover:bg-white/10 hover:text-white"
                  }`}
                  aria-label={paused ? "Play entry motion" : "Pause entry motion"}
                >
                  {paused ? (
                    <Play className="h-3.5 w-3.5 fill-current" />
                  ) : (
                    <Pause className="h-3.5 w-3.5" />
                  )}
                  <span className="hidden sm:inline">{paused ? "Play" : "Pause"}</span>
                </button>
              )}
              {!finished && (
                <button
                  type="button"
                  onClick={skipMotion}
                  className={`inline-flex h-10 items-center gap-2 rounded-full border px-3.5 text-xs font-medium backdrop-blur-xl transition-colors ${
                    isLight
                      ? "border-primary/12 bg-white/65 text-primary hover:bg-white"
                      : "border-white/15 bg-black/20 text-white/75 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <SkipForward className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Skip motion</span>
                </button>
              )}
            </div>
          )}
        </div>

        <div className="flex flex-1 items-end pb-20 pt-24 sm:pb-24 lg:pb-20">
          <div className="max-w-[1050px]">
            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`mb-5 text-xs font-semibold uppercase tracking-[0.2em] transition-colors duration-700 sm:text-sm ${
                isLight ? "text-accent" : "text-[#f18968]"
              }`}
            >
              One shared operational picture
            </motion.p>

            <h1
              id="entry-title"
              className={`text-balance text-[clamp(3.6rem,8.7vw,9.4rem)] font-semibold leading-[0.84] tracking-[-0.065em] transition-colors duration-700 ${
                isLight ? "text-primary" : "text-white"
              }`}
            >
              <span className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  className="block"
                  initial={reduceMotion ? false : { y: "108%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.05, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
                >
                  Regional rail,
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-[0.12em]">
                <motion.span
                  className="block font-normal italic"
                  initial={reduceMotion ? false : { y: "108%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.05, delay: 0.44, ease: [0.16, 1, 0.3, 1] }}
                >
                  coordinated.
                </motion.span>
              </span>
            </h1>

            <AnimatePresence mode="wait">
              {showSystemLine && (
                <motion.div
                  key="system-line"
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  className={`mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm transition-colors duration-700 sm:mt-9 sm:text-base ${
                    isLight ? "text-primary/62" : "text-white/62"
                  }`}
                >
                  <span>Railixa Incidents</span>
                  <span
                    aria-hidden="true"
                    className={isLight ? "text-primary/24" : "text-white/22"}
                  >
                    —
                  </span>
                  <span>Railixa Assets</span>
                  <span
                    aria-hidden="true"
                    className={isLight ? "text-primary/24" : "text-white/22"}
                  >
                    —
                  </span>
                  <span>Railixa Crew</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-6 flex items-end justify-between px-5 sm:bottom-8 sm:px-8 lg:px-12">
          <div
            className={`hidden items-center gap-2 text-[10px] font-medium uppercase tracking-[0.17em] transition-colors duration-700 sm:flex ${
              isLight ? "text-primary/44" : "text-white/42"
            }`}
          >
            <RailixaLogo className="h-6 w-6" tone={isLight ? "dark" : "light"} />
            Operational coordination infrastructure
          </div>

          <motion.button
            type="button"
            onClick={enterSite}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`group ml-auto inline-flex items-center gap-3 rounded-full border py-2.5 pl-4 pr-2.5 text-xs font-semibold uppercase tracking-[0.13em] backdrop-blur-xl transition-colors ${
              isLight
                ? "border-primary/14 bg-white/72 text-primary hover:bg-white"
                : "border-white/15 bg-black/20 text-white/78 hover:bg-white/10 hover:text-white"
            }`}
          >
            Enter Railixa
            <span
              className={`inline-flex h-8 w-8 items-center justify-center rounded-full transition-transform group-hover:translate-y-0.5 ${
                isLight ? "bg-primary text-white" : "bg-white text-primary"
              }`}
            >
              <ArrowDown className="h-3.5 w-3.5" />
            </span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}

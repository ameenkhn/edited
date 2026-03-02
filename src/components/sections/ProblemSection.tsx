import { motion } from "framer-motion";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const problems = [
  { icon: "🔗", title: "Tool Fragmentation", desc: "Zoom + JustPay + Mailchimp + Notion + Calendly + WhatsApp. Nothing talks to each other." },
  { icon: "💸", title: "Revenue Leakage", desc: "Every disconnected tool is a point of failure. Payments drop. Leads slip. Data is lost." },
  { icon: "⏱", title: "Time Drain", desc: "Creators spend 60% of time on operations instead of creating and connecting with their audience." },
  { icon: "📉", title: "Invisible Growth Ceiling", desc: "Without unified analytics, you can't see what's working. Growth stalls without knowing why." },
];

const ProblemSection = () => (
  <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-8">
    <motion.div variants={fadeUp}>
      <span className="text-xs font-semibold uppercase tracking-widest text-destructive">Problem Analysis</span>
    </motion.div>
    <motion.h2 variants={fadeUp} className="text-4xl font-bold text-foreground">
      The Creator Stack Is Broken
    </motion.h2>
    <motion.p variants={fadeUp} className="text-muted-foreground text-lg max-w-2xl">
      Most creators operate on a patchwork of 6–10 tools that don't integrate. The cost isn't just financial — it's strategic.
    </motion.p>
    <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
      {problems.map((p, i) => (
        <motion.div
          key={i}
          variants={fadeUp}
          className="rounded-2xl bg-secondary/50 p-6 hover:bg-secondary transition-colors group cursor-default"
          whileHover={{ scale: 1.03 }}
        >
          <div className="text-2xl mb-3">{p.icon}</div>
          <h3 className="text-base font-semibold text-foreground mb-1">{p.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
);

export default ProblemSection;

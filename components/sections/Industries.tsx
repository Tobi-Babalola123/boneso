"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Star,
  Home,
  Building2,
  Factory,
  Truck,
  Snowflake,
  Leaf,
  Layers,
  HardHat,
  Hammer,
  Shield,
  Award,
  Users,
  Zap,
  Check,
  MessageSquare,
} from "lucide-react";
import { Landmark, Wheat, Flame } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

export default function Industries() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  const industries = [
    {
      icon: Home,
      title: "Residential",
      desc: "Custom homes, renovations, and residential developments.",
    },
    {
      icon: Building2,
      title: "Commercial",
      desc: "Retail, office buildings, and commercial complexes.",
    },
    {
      icon: Factory,
      title: "Industrial",
      desc: "Warehouses, manufacturing facilities, and industrial parks.",
    },
    {
      icon: Users,
      title: "Municipal",
      desc: "Government infrastructure and civic construction projects.",
    },
    {
      icon: Layers,
      title: "Agricultural",
      desc: "Farm structures, grain bins, and agricultural infrastructure.",
    },
    {
      icon: Hammer,
      title: "Concrete",
      desc: "Specialized concrete services across all sectors and applications.",
    },
  ];

  return (
    <section className="bg-[#111111] py-24 md:py-36">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-[#F4B400] font-bold text-xs uppercase tracking-widest mb-4">
            Sectors
          </div>
          <h2 className="font-display text-[clamp(3rem,7vw,5rem)] font-black text-white uppercase leading-tight">
            INDUSTRIES WE <span className="text-[#F4B400]">SERVE</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              custom={i}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group bg-white/[0.04] hover:bg-[#F4B400]/8 border border-white/8 hover:border-[#F4B400]/30 rounded-xl p-5 sm:p-6 lg:p-8 transition-all duration-200 cursor-pointer"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#F4B400]/10 group-hover:bg-[#F4B400]/20 flex items-center justify-center mb-4 sm:mb-5 transition-colors duration-200">
                <ind.icon size={20} className="text-[#F4B400]" />
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-black text-white uppercase mb-2 leading-tight">
                {ind.title}
              </h3>

              <p className="text-white/40 text-sm leading-relaxed">
                {ind.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

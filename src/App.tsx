/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Code, 
  Smartphone, 
  Layout, 
  Globe, 
  Mail, 
  Phone, 
  ArrowRight, 
  Github, 
  Linkedin, 
  ExternalLink,
  ChevronRight
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Building high-performance, scalable web applications using the latest technologies and best practices.",
    icon: <Code className="w-6 h-6" />,
    tags: ["React", "Next.js", "Node.js"]
  },
  {
    title: "Application Development",
    description: "Developing cross-platform mobile applications that provide seamless user experiences on iOS and Android.",
    icon: <Smartphone className="w-6 h-6" />,
    tags: ["React Native", "Flutter", "iOS/Android"]
  },
  {
    title: "UI/UX Design",
    description: "Crafting intuitive and visually stunning interfaces that engage users and drive conversions.",
    icon: <Layout className="w-6 h-6" />,
    tags: ["Figma", "Adobe XD", "Prototyping"]
  },
  {
    title: "E-commerce Solutions",
    description: "Creating robust online stores with secure payment integrations and streamlined management systems.",
    icon: <Globe className="w-6 h-6" />,
    tags: ["Shopify", "Custom CMS", "Stripe"]
  }
];

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-brand selection:bg-accent selection:text-white flex flex-col relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-800/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 px-12 py-8 bg-brand/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center text-white font-bold text-xs">CH</div>
            <span className="text-white font-medium tracking-tight uppercase text-sm">Conain.dev</span>
          </div>
          <nav className="hidden md:flex gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
            <a href="#services" className="hover:text-accent transition-colors text-accent">Services</a>
            <a href="#projects" className="hover:text-accent transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </nav>
          <a 
            href="mailto:Conainhassan1@gmail.com" 
            className="text-[10px] uppercase tracking-widest font-bold border border-slate-700 px-6 py-2 hover:bg-white hover:text-brand hover:border-white transition-all"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section className="relative pt-64 pb-32 px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-16"
            >
              <div className="lg:col-span-7 flex flex-col justify-center gap-8">
                <div>
                  <h2 className="text-accent text-sm font-bold uppercase tracking-[0.3em] mb-6">Full-Stack Web Architect</h2>
                  <h1 className="text-7xl md:text-8xl font-bold text-white leading-[0.9] tracking-tighter mb-8">
                    Muhammad <br/>
                    <span className="text-slate-500">Conain Hassan</span>
                  </h1>
                  <p className="text-xl leading-relaxed text-slate-400 max-w-lg">
                    Crafting high-performance digital experiences for businesses looking to scale their online presence through bespoke engineering.
                  </p>
                </div>

                <div className="flex items-center gap-8">
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-10 py-5 bg-accent text-white font-bold rounded-none hover:bg-blue-700 transition-all active:scale-95 cursor-pointer uppercase text-xs tracking-widest"
                  >
                    Book a Consultation
                  </button>
                  <button className="text-xs font-bold border-b border-slate-700 pb-1 hover:border-white transition-all uppercase tracking-widest text-white">
                    View My Work
                  </button>
                </div>
              </div>

              {/* Services Grid Integration into Hero for that 12-column feel */}
              <div className="lg:col-span-5 flex flex-col justify-center gap-4">
                {services.map((service, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (idx * 0.1) }}
                    className="p-8 border border-slate-800 bg-slate-900/40 backdrop-blur-sm group hover:border-slate-700 transition-all"
                  >
                    <div className="text-accent mb-3 font-mono text-xs font-bold">0{idx + 1}</div>
                    <h3 className="text-white font-bold text-xl mb-3 tracking-tight">{service.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Highlight Section (Refined) */}
        <section id="services" className="py-32 px-12 bg-zinc-950/20 border-y border-slate-800/50">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-20">
            <div className="max-w-xl">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tighter leading-tight">
                Engineering websites that <span className="text-accent">convert</span> and <span className="text-slate-500">last</span>.
              </h3>
              <p className="text-slate-400 leading-relaxed mb-10 text-lg">
                I specialize in high-stakes web development where performance and scalability are non-negotiable. 
                My workflow is built on transparency, technical rigor, and design excellence.
              </p>
              <div className="flex gap-4">
                {["Node.js", "React", "PostgreSQL", "Next.js"].map(tech => (
                  <span key={tech} className="px-4 py-2 bg-slate-900/50 border border-slate-800 text-[10px] font-bold text-slate-500 uppercase tracking-widest rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-x-20 gap-y-12 shrink-0">
              {[
                { label: "Completed Projects", value: "50+" },
                { label: "Active Clients", value: "12" },
                { label: "Technical Stack", value: "Modern" },
                { label: "Satisfaction", value: "100%" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <span className="text-4xl font-bold text-white tracking-tighter">{stat.value}</span>
                  <span className="text-[10px] uppercase tracking-widest text-slate-600 font-bold">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Contact Section / Footer */}
      <footer id="contact" className="py-20 px-12 border-t border-slate-800 mt-auto bg-brand">
        <div className="max-w-7xl mx-auto flex flex-col gap-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
            <div className="group">
              <div className="text-[10px] text-slate-600 uppercase font-bold tracking-widest mb-4">Phone</div>
              <a href="tel:03152469120" className="text-white font-medium text-lg border-b border-transparent group-hover:border-accent transition-all inline-block">
                0315-2469120
              </a>
            </div>
            <div className="group">
              <div className="text-[10px] text-slate-600 uppercase font-bold tracking-widest mb-4">Email</div>
              <a href="mailto:Conainhassan1@gmail.com" className="text-white font-medium text-lg border-b border-transparent group-hover:border-accent transition-all inline-block">
                Conainhassan1@gmail.com
              </a>
            </div>
            <div>
              <div className="text-[10px] text-slate-600 uppercase font-bold tracking-widest mb-4">Location</div>
              <div className="text-white font-medium text-lg">Remote / Global</div>
            </div>
            <div className="flex flex-col items-center lg:items-end justify-end">
              <div className="flex gap-4 mb-6">
                <a href="#" className="w-8 h-8 flex items-center justify-center text-slate-500 hover:text-white transition-colors border border-slate-800 hover:border-slate-600">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center text-slate-500 hover:text-white transition-colors border border-slate-800 hover:border-slate-600">
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-slate-800/50 gap-4">
            <div className="text-[10px] text-slate-700 tracking-widest font-bold">
              &copy; {new Date().getFullYear()} CONAIN HASSAN. ALL RIGHTS RESERVED.
            </div>
            <div className="text-[10px] text-slate-700 tracking-widest font-bold">
              DESIGNED FOR PERFORMANCE
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

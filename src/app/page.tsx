"use client"

import React, { useState } from "react"
import Link from "next/link"
import { 
  Download, 
  Zap, 
  Monitor, 
  Cpu, 
  Globe, 
  CheckCircle2, 
  ArrowRight,
  Menu,
  X,
  Mic,
  BookOpen,
  Layout,
  Radio,
  Heart,
  ChevronRight,
  Github,
  Twitter,
  Instagram
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500/30">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="glass w-full max-w-7xl rounded-2xl px-6 py-4 flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <div className="size-8 bg-orange-500 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/20">
              <Zap className="size-5 text-white fill-white" />
            </div>
            <span className="text-xl font-serif font-semibold tracking-tight">Kairos</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {["Features", "Download", "Docs"].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
            <Link 
              href="https://kairos-web-app.vercel.app" // Placeholder for actual web app link
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-6 py-2 text-sm font-semibold transition-all hover:scale-105"
            >
              Launch Web App
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </motion.div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-24 left-4 right-4 glass rounded-2xl p-6 md:hidden z-40"
            >
              <div className="flex flex-col gap-4">
                {["Features", "Download", "Docs"].map((item) => (
                  <Link 
                    key={item} 
                    href={`#${item.toLowerCase()}`} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                ))}
                <Link 
                  href="https://kairos-web-app.vercel.app"
                  className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl py-4 text-center text-lg font-semibold"
                >
                  Launch Web App
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-64 md:pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/20 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-bold uppercase tracking-widest mb-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              Kairos v0.1.0 — Free & Open Source
            </div>
            
            <h1 className="text-6xl md:text-9xl font-serif font-normal tracking-tight mb-8 leading-[0.9]">
              Presenting the Word, <br />
              <span className="text-gradient font-sans font-bold">Effortlessly.</span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-14 leading-relaxed">
              Kairos listens as you preach, detects Bible verses in real-time, 
              and displays them on screen instantly. <strong>No typing, no searching — just preach.</strong>
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link 
                href="/downloads/Setup_Kairos_v0.1.0_x64.exe"
                className="w-full md:w-auto bg-white text-black hover:bg-gray-200 rounded-2xl px-12 py-6 text-lg font-bold flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/10"
              >
                <Download className="mr-3 size-6" />
                Download for Windows
              </Link>
              <Link 
                href="#how-it-works"
                className="w-full md:w-auto glass border-white/10 hover:bg-white/5 rounded-2xl px-12 py-6 text-lg font-bold flex items-center justify-center transition-all hover:scale-105 active:scale-95"
              >
                How it works
                <ArrowRight className="ml-3 size-6 opacity-30" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Highlight Section */}
      <section className="py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
               <div className="size-16 rounded-3xl bg-orange-500/10 flex items-center justify-center mb-8">
                  <Mic className="size-8 text-orange-500" />
               </div>
               <h3 className="text-2xl font-serif font-bold mb-4">Real-Time Transcription</h3>
               <p className="text-gray-500 leading-relaxed">High-fidelity speech-to-text that captures every word of the message with minimal latency.</p>
            </div>
            <div className="flex flex-col items-center text-center">
               <div className="size-16 rounded-3xl bg-orange-500/10 flex items-center justify-center mb-8">
                  <BookOpen className="size-8 text-orange-500" />
               </div>
               <h3 className="text-2xl font-serif font-bold mb-4">Semantic Detection</h3>
               <p className="text-gray-500 leading-relaxed">Understands context and meaning to find the exact scripture even when you paraphrase.</p>
            </div>
            <div className="flex flex-col items-center text-center">
               <div className="size-16 rounded-3xl bg-orange-500/10 flex items-center justify-center mb-8">
                  <Radio className="size-8 text-orange-500" />
               </div>
               <h3 className="text-2xl font-serif font-bold mb-4">NDI Output</h3>
               <p className="text-gray-500 leading-relaxed">Broadcast slides directly to OBS or vMix with full alpha transparency for live streams.</p>
            </div>
        </div>
      </section>

      {/* Empowerment Section */}
      <section id="features" className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center mb-40">
              <div>
                 <Badge className="bg-orange-500/10 text-orange-500 mb-6">Empowering Ministries</Badge>
                 <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
                    Built to restore flow, focus, and confidence.
                 </h2>
                 <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                    Kairos is a ministry companion built to ensure every word and verse is delivered clearly, 
                    without distraction, so nothing is lost between pulpit and pew.
                 </p>
                 <ul className="space-y-4">
                    {[
                       "Preach with uninterrupted flow",
                       "Keep slides perfectly synced",
                       "Deliver a distraction-free experience"
                    ].map(item => (
                       <li key={item} className="flex items-center gap-3 text-gray-300">
                          <CheckCircle2 className="size-5 text-orange-500" />
                          {item}
                       </li>
                    ))}
                 </ul>
              </div>
              <div className="glass rounded-[3rem] p-4 aspect-square flex items-center justify-center relative group overflow-hidden border-orange-500/10 shadow-[0_0_100px_rgba(249,115,22,0.1)]">
                 <Monitor className="size-48 text-zinc-900 group-hover:text-orange-500/20 transition-colors duration-500" />
                 <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 to-transparent transition-opacity opacity-0 group-hover:opacity-100" />
              </div>
           </div>

           {/* How It Works */}
           <div id="how-it-works" className="text-center mb-24">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-16">How it works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 <StepCard number="01" title="Listen" description="Sermon is transcribed in real time" />
                 <StepCard number="02" title="Understand" description="AI detects relevant verses instantly" />
                 <StepCard number="03" title="Display" description="Verse shown beautifully on projector" />
              </div>
           </div>
        </div>
      </section>

      {/* Pricing - Free Forever */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 blur-[100px] rounded-full -z-10" />
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-6xl font-serif font-bold mb-8">Free For Everyone</h2>
            <p className="text-gray-400 text-xl mb-16">
               We believe the word of God should be accessible to every church, regardless of budget. 
               Kairos is and will always be free.
            </p>
            
            <div className="p-1 rounded-[3rem] bg-gradient-to-br from-white/20 via-white/5 to-transparent">
               <div className="bg-zinc-950 rounded-[2.8rem] p-12 md:p-20 text-center">
                  <div className="text-xl font-mono text-orange-500 uppercase tracking-widest mb-4">Standard License</div>
                  <div className="text-8xl font-serif font-bold mb-8">$0<span className="text-2xl text-gray-500">/mo</span></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-xl mx-auto mb-16">
                     {[
                        "Full AI Detection Pipeline",
                        "Unlimited Transcription",
                        "All Premium Themes",
                        "Offline Desktop App",
                        "NDI Output Support",
                        "Community Support"
                     ].map(feat => (
                        <div key={feat} className="flex items-center gap-3 text-gray-400">
                           <CheckCircle2 className="size-5 text-orange-500 shrink-0" />
                           {feat}
                        </div>
                     ))}
                  </div>
                  <Link 
                    href="/download"
                    className="inline-flex items-center gap-3 bg-white text-black font-bold px-12 py-6 rounded-2xl hover:bg-gray-200 transition-all hover:scale-105"
                  >
                     Get Started Free
                     <ChevronRight className="size-5" />
                  </Link>
               </div>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 border-t border-white/5 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
              <div className="col-span-1 md:col-span-1">
                 <div className="flex items-center gap-2 mb-8">
                    <Zap className="size-6 text-orange-500 fill-orange-500" />
                    <span className="text-2xl font-serif font-bold tracking-tight">Kairos</span>
                 </div>
                 <p className="text-gray-500 leading-relaxed mb-8">
                    Revolutionizing church presentations with AI-driven flow and focus.
                 </p>
                 <div className="flex gap-4">
                    <SocialLink href="#"><Twitter className="size-5" /></SocialLink>
                    <SocialLink href="#"><Instagram className="size-5" /></SocialLink>
                    <SocialLink href="#"><Github className="size-5" /></SocialLink>
                 </div>
              </div>
              
              <div>
                 <h4 className="font-bold mb-8 text-gray-300">Product</h4>
                 <ul className="space-y-4 text-gray-500">
                    <li><Link href="#features" className="hover:text-white">Features</Link></li>
                    <li><Link href="#how-it-works" className="hover:text-white">How it works</Link></li>
                    <li><Link href="/download" className="hover:text-white">Download</Link></li>
                 </ul>
              </div>

              <div>
                 <h4 className="font-bold mb-8 text-gray-300">Legal</h4>
                 <ul className="space-y-4 text-gray-500">
                    <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
                    <li><Link href="#" className="hover:text-white">Terms of Service</Link></li>
                 </ul>
              </div>

              <div>
                 <h4 className="font-bold mb-8 text-gray-300">Stay in touch</h4>
                 <p className="text-gray-500 text-sm mb-6">Get updates on new releases and features.</p>
                 <div className="flex gap-2">
                    <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 flex-1 focus:outline-none focus:border-orange-500/50" />
                    <button className="bg-orange-500/20 text-orange-500 p-2 rounded-xl hover:bg-orange-500/30 transition-colors">
                       <ArrowRight className="size-5" />
                    </button>
                 </div>
              </div>
           </div>
           
           <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 text-sm text-gray-600 font-mono">
              <p>© 2026 KAIROS OPEN SOURCE. ALL RIGHTS RESERVED.</p>
              <div className="flex gap-2 mt-4 md:mt-0">
                 <Heart className="size-4 text-orange-500 fill-orange-500" />
                 <span>Crafted for the Kingdom</span>
              </div>
           </div>
        </div>
      </footer>
    </div>
  )
}

function StepCard({ number, title, description }: { number: string, title: string, description: string }) {
  return (
    <div className="flex flex-col items-center">
       <div className="text-5xl font-mono text-white/5 font-black mb-[-1.5rem] select-none">{number}</div>
       <div className="glass p-10 rounded-3xl w-full group hover:border-orange-500/20 transition-all duration-500">
          <h4 className="text-2xl font-serif font-bold mb-4 group-hover:text-orange-500 transition-colors">{title}</h4>
          <p className="text-gray-500">{description}</p>
       </div>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
   return (
      <div className="glass p-8 rounded-3xl hover:bg-white/5 transition-all group">
         <div className="size-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-500/10 transition-all duration-300">
            {icon}
         </div>
         <h4 className="text-xl font-bold mb-3">{title}</h4>
         <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      </div>
   )
}

function SocialLink({ href, children }: { href: string, children: React.ReactNode }) {
   return (
      <Link href={href} className="size-10 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
         {children}
      </Link>
   )
}

function Badge({ children, className }: { children: React.ReactNode, className?: string }) {
   return (
      <div className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-current ${className}`}>
         {children}
      </div>
   )
}

'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Twitter, 
  ExternalLink,
  ChevronDown,
  Sparkles,
  Zap,
  Target,
  Brain
} from 'lucide-react';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleOnHover = {
  whileHover: { scale: 1.05, transition: { duration: 0.2 } },
  whileTap: { scale: 0.95 }
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <motion.div 
        className="fixed inset-0 opacity-20"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse" />
      </motion.div>

      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            >
              Siddhant Badola
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Testimonials', 'Contact'].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <img 
              src="https://media.giphy.com/media/debCoZ6a5aFuSHY1S5/giphy.gif" 
              alt="Header Animation" 
              className="w-64 h-64 mx-auto rounded-full border-4 border-blue-400/50 shadow-2xl"
            />
          </motion.div>

          <motion.h1 
            {...fadeInUp}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Hi, I&apos;m Siddhant 👋
          </motion.h1>

          <motion.p 
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            AI/ML Tech Lead &amp; Technical Product Manager crafting intelligent systems that scale. 
            5+ years driving innovation in AI, mobile development, and product strategy.
          </motion.p>

          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {[
              { href: "https://www.linkedin.com/in/sbadola5/", icon: Linkedin, label: "LinkedIn" },
              { href: "https://github.com/sidhunt", icon: Github, label: "GitHub" },
              { href: "mailto:siddhantbadola5@gmail.com", icon: Mail, label: "Email" },
              { href: "https://twitter.com/sidhunt_b", icon: Twitter, label: "Twitter" }
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                {...scaleOnHover}
                className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <social.icon size={20} />
                <span className="hidden sm:inline">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.button
            {...fadeInUp}
            transition={{ delay: 0.6 }}
            onClick={() => scrollToSection('about')}
            className="animate-bounce"
          >
            <ChevronDown size={32} className="mx-auto text-blue-400" />
          </motion.button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              I&apos;m an AI/ML Tech Lead and Technical Product Manager based in Toronto, Canada, with over 5 years of experience 
              leading cross-functional teams and architecting intelligent systems. I specialize in designing and implementing 
              agentic AI solutions with RAG, deploying LLM-based models, and driving end-to-end product strategy that generates 
              significant business impact.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: Brain, title: "AI/ML Leadership", desc: "Leading agentic AI systems and LLM-powered applications" },
              { icon: Sparkles, title: "MLOps Expert", desc: "Computer Vision, intelligent automation pipelines" },
              { icon: Target, title: "Product Strategy", desc: "5+ enterprise apps generating $2M+/month revenue" },
              { icon: Zap, title: "Innovation", desc: "Advancing multimodal AI and RAG implementations" }
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 text-center"
              >
                <item.icon size={48} className="mx-auto mb-4 text-blue-400" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="skills" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Tech Stack & Tools
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <img 
              src="https://skillicons.dev/icons?i=python,tensorflow,pytorch,dart,flutter,fastapi,gcp,aws,firebase,docker,git,github,linux,vscode&theme=dark" 
              alt="Tech Stack" 
              className="mx-auto"
            />
          </motion.div>

          {/* Core Competencies */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              {
                title: "🤖 MLOps & Agentic AI",
                skills: [
                  "Agentic AI systems design with RAG architectures",
                  "LLM fine-tuning and deployment (LM Studio, Langchain)",
                  "Computer Vision (YOLO, OpenCV) and multimodal AI",
                  "AI agents using Langchain & ElevenLabs"
                ]
              },
              {
                title: "📱 Mobile Development Leadership", 
                skills: [
                  "Advanced Flutter + Firebase integration at scale",
                  "BLoC & GetX state management for enterprise apps",
                  "Team leadership and technical mentorship",
                  "Custom animations and native performance optimization"
                ]
              },
              {
                title: "🌐 Product & Strategy",
                skills: [
                  "Product Management and stakeholder communication",
                  "System optimization and business operations analysis", 
                  "Product roadmap definition and user interviewing",
                  "Go-to-market strategy and revenue generation"
                ]
              },
              {
                title: "🚀 Cloud & DevOps",
                skills: [
                  "FastAPI and backend automation with Python",
                  "GCP, AWS & Firebase deployments",
                  "CI/CD pipelines with GitHub Actions",
                  "Docker for ML model serving and containerization"
                ]
              }
            ].map((competency, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10"
              >
                <h3 className="text-2xl font-semibold mb-4">{competency.title}</h3>
                <ul className="space-y-2">
                  {competency.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.1 }}
                      className="text-gray-300 flex items-start"
                    >
                      <span className="text-blue-400 mr-2">•</span>
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </motion.div>

          {/* App Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl font-semibold mb-8">App Showcase</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                "https://github.com/sidhunt/SchoolERP-showcase/raw/main/Parent.gif",
                "https://github.com/sidhunt/Hand-Gesture-Media-Controller/raw/main/demo.gif", 
                "https://github.com/sidhunt/bak-bak/raw/main/bakbak.gif",
                "https://github.com/sidhunt/News-App-Showcase/raw/main/feed2.gif"
              ].map((gif, index) => (
                <motion.img
                  key={index}
                  src={gif}
                  alt={`App showcase ${index + 1}`}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  className="w-40 h-40 object-cover rounded-2xl border-2 border-blue-400/50 shadow-lg"
                />
              ))}
            </div>
          </motion.div>

          {/* Project Categories */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {/* AI/ML Projects */}
            <div>
              <h3 className="text-3xl font-semibold mb-8 text-center">🤖 AI/ML Leadership Projects</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "🤖 ML Demos & AI Implementations",
                    description: "Architected agentic AI solutions including traffic sign detection and computer vision models. Leading AI innovation initiatives.",
                    link: "https://github.com/sidhunt/ML-implementations"
                  },
                  {
                    title: "🖐 Gesture Media Controller", 
                    description: "Led development of Python+OpenCV project enabling hands-free media control. Reduced manual interaction by 70% through AI-powered gesture recognition.",
                    link: "https://github.com/sidhunt/Hand-Gesture-Media-Controller",
                    preview: "https://github.com/sidhunt/Hand-Gesture-Media-Controller/raw/main/demo.gif"
                  }
                ].map((project, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-xl font-semibold">{project.title}</h4>
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="text-blue-400 hover:text-blue-300"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    </div>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    {project.preview && (
                      <img 
                        src={project.preview} 
                        alt={project.title}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile Projects */}
            <div>
              <h3 className="text-3xl font-semibold mb-8 text-center">📱 Enterprise Mobile Solutions</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "🏫 SchoolERP",
                    description: "Led product development for role-based education platform with real-time syncing. Increased user retention from 20% to 80% through strategic UI/UX enhancements.",
                    link: "https://github.com/sidhunt/SchoolERP-showcase",
                    preview: "https://github.com/sidhunt/SchoolERP-showcase/raw/main/Parent.gif"
                  },
                  {
                    title: "👾 BakBak",
                    description: "Directed technical architecture for Firebase-powered gaming community. Mentored team of 2 developers, scaling to 500+ daily active users.",
                    link: "https://github.com/sidhunt/bak-bak", 
                    preview: "https://github.com/sidhunt/bak-bak/raw/main/bakbak.gif"
                  },
                  {
                    title: "🌎 News Aggregator",
                    description: "Product-led development of personalized news platform. Implemented ML-driven content recommendations enhancing user engagement.",
                    link: "https://github.com/sidhunt/News-App-Showcase",
                    preview: "https://github.com/sidhunt/News-App-Showcase/raw/main/feed2.gif"
                  },
                  {
                    title: "🇮🇳 Sarkari Yojana", 
                    description: "Led mobile team for government services app. Contributed to expanding company's mobile technology footprint serving 1,200+ monthly users.",
                    link: "https://github.com/sidhunt/SarkariYojanaDemo",
                    preview: "https://github.com/sidhunt/SarkariYojanaDemo/raw/main/yojna.gif"
                  },
                  {
                    title: "🎬 Movie App",
                    description: "Flutter application demonstrating scalable architecture patterns. Showcased advanced state management and API integration best practices.",
                    link: "https://github.com/sidhunt/Movie-Design-App",
                    preview: "https://github.com/sidhunt/Movie-Design-App/raw/main/g1.gif"
                  }
                ].map((project, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-lg font-semibold">{project.title}</h4>
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="text-blue-400 hover:text-blue-300"
                      >
                        <ExternalLink size={16} />
                      </motion.a>
                    </div>
                    <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                    {project.preview && (
                      <img 
                        src={project.preview} 
                        alt={project.title}
                        className="w-full h-24 object-cover rounded-lg"
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GitHub Stats */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              GitHub Stats
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8"
          >
            <img 
              src="https://github-readme-stats.vercel.app/api?username=sidhunt&show_icons=true&count_private=true&theme=tokyonight&hide_border=true" 
              alt="GitHub Stats"
              className="rounded-lg"
            />
            <img 
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=sidhunt&hide=jupyter%20notebook&layout=compact&theme=tokyonight&hide_border=true" 
              alt="Top Languages"
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Testimonials
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                quote: "Siddhant transformed our internal asset intake process with a seamless Flutter interface and an AI-powered backend. His leadership in architecting the agentic AI solution reduced manual verification time by 70%.",
                author: "Project Lead, Equip App"
              },
              {
                quote: "His strategic approach to AI integration wasn't just technically sound—it drove significant operational efficiency. Under his technical leadership, our team delivered enterprise applications generating over $2M in monthly recurring revenue.",
                author: "CTO, SLAM Technologies"
              },
              {
                quote: "Siddhant's ability to blend hands-on AI/ML development with strategic product management is exceptional. He mentored our junior developers while executing complex product roadmaps that increased user retention from 20% to 80%.",
                author: "Product Manager, Roth IAMS"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, rotateY: 2 }}
                className="p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10"
              >
                <p className="text-gray-300 mb-4 italic">&quot;{testimonial.quote}&quot;</p>
                <p className="text-blue-400 font-semibold">— {testimonial.author}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Connect With Me
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Let&apos;s collaborate on innovative AI/ML projects and build something extraordinary together!
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            {[
              { href: "mailto:siddhantbadola5@gmail.com", icon: Mail, label: "siddhantbadola5@gmail.com", type: "email" },
              { href: "https://www.linkedin.com/in/sbadola5/", icon: Linkedin, label: "LinkedIn Profile", type: "linkedin" },
              { href: "https://github.com/sidhunt", icon: Github, label: "GitHub Profile", type: "github" },
              { href: "https://twitter.com/sidhunt_b", icon: Twitter, label: "@sidhunt_b", type: "twitter" }
            ].map((contact, index) => (
              <motion.a
                key={index}
                variants={fadeInUp}
                href={contact.href}
                target={contact.type === 'email' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-300"
              >
                <contact.icon size={24} className="text-blue-400" />
                <span>{contact.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Animated typing text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="text-xl text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-mono">
              AI/ML Tech Lead | Agentic AI Expert<br />
              Building intelligent systems that scale.<br />
              Mobile. AI. Product. Let&apos;s innovate together!
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Siddhant Badola. Built with Next.js, Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </footer>
    </div>
  );
}

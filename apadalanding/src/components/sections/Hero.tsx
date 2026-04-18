import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';
import { LANDING_CONTENT } from '../../core/constants/landing-content';

export const Hero = () => {
  const { hero } = LANDING_CONTENT;

  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center bg-slate-50">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob" />
        <div className="absolute top-40 left-10 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob delay-200" />
        <div className="absolute -bottom-8 left-40 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob delay-400" />
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={fadeUpVariant}>
              <div className="inline-flex items-center px-5 py-2.5 rounded-full glass border border-blue-100 text-blue-800 text-sm font-bold tracking-widest uppercase shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse" />
                {hero.tagline}
              </div>
            </motion.div>

            <motion.div variants={fadeUpVariant}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                {hero.title}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 relative inline-block whitespace-nowrap">
                  {hero.titleHighlight}
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-orange-400/60" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                  </svg>
                </span>
              </h1>
            </motion.div>

            <motion.div variants={fadeUpVariant}>
              <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed font-light">
                {hero.description}
              </p>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-5 pt-6">
              <a
                href={hero.primaryLink}
                className="group relative inline-flex justify-center items-center gap-3 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 rounded-2xl shadow-xl shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
                <span className="relative z-10 flex items-center gap-2">
                  <Heart className="w-5 h-5 fill-white/20" />
                  {hero.primaryButton}
                </span>
              </a>
              <a
                href={hero.secondaryLink}
                className="inline-flex justify-center items-center gap-2 px-8 py-4 text-base font-bold text-slate-700 glass hover:bg-white rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md group"
              >
                {hero.secondaryButton}
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-white/50 animate-float-slow">
              <img 
                src="https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&q=80&w=1200&h=900" 
                alt={hero.imageAlt}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-8 -left-8 md:-left-12 glass p-5 rounded-3xl shadow-2xl border border-white flex items-center gap-5 animate-float z-20"
            >
              <div className="bg-gradient-to-br from-green-400 to-green-500 p-4 rounded-2xl text-white shadow-lg shadow-green-500/30">
                <Heart className="w-7 h-7 fill-white/20" />
              </div>
              <div className="pr-2">
                <p className="text-xl font-black text-slate-900 tracking-tight">
                  {hero.stats.number}
                </p>
                <p className="text-sm text-slate-600 font-medium">{hero.stats.text}</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

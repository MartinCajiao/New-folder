import { motion, type Variants } from 'framer-motion';
import { Palette, Scale, Users, PlayCircle, ScrollText, BookOpen, Mic, ArrowRight } from 'lucide-react';
import { LANDING_CONTENT } from '../../core/constants/landing-content';

const iconMap: Record<string, any> = {
  Palette, Scale, Users, PlayCircle, ScrollText, BookOpen, Mic
};

export const Features = () => {
  const { pillars, resources } = LANDING_CONTENT;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="w-full">
      {/* Pillars Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.span variants={itemVariants} className="inline-block px-5 py-2 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
              {pillars.tag}
            </motion.span>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              {pillars.title} 
              <span className="text-blue-600 relative inline-block">
                {pillars.titleHighlight}
                <svg className="absolute w-full h-4 -bottom-2 left-0 text-orange-400" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </svg>
              </span>
            </motion.h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {pillars.items.map((pillar, index) => {
              const Icon = iconMap[pillar.icon] || Users;
              return (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="group p-10 rounded-[2.5rem] glass hover:bg-white shadow-lg shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-transparent opacity-50 rounded-bl-[100px] -mr-10 -mt-10 transition-transform group-hover:scale-110" />
                  
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 transform group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300 shadow-sm relative z-10">
                    <Icon className="w-8 h-8" strokeWidth={2} />
                  </div>
                  
                  <span className="block text-xs font-extrabold text-orange-500 uppercase tracking-widest mb-3 relative z-10">
                    {pillar.detail}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">{pillar.title}</h3>
                  <p className="text-slate-600 leading-relaxed relative z-10">{pillar.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Resources Bento Grid */}
      <section className="py-24 bg-slate-900 text-white rounded-[3rem] mx-4 sm:mx-8 my-8 overflow-hidden relative border-t-4 border-orange-500 shadow-2xl">
        <div className="absolute inset-0 z-0 pointer-events-none">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -mr-48 -mt-48 animate-pulse" />
           <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px] -ml-48 -mb-48" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-[1.1]">
                {resources.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">{resources.titleHighlight}</span>
              </h2>
              <p className="text-slate-300 text-lg md:text-xl mb-10 leading-relaxed font-light">
                {resources.description}
              </p>
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-1">
                {resources.button}
              </button>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid sm:grid-cols-2 gap-6"
            >
              {resources.items.map((resource, index) => {
                const Icon = iconMap[resource.icon] || BookOpen;
                return (
                  <motion.a 
                    href={resource.link} 
                    key={index}
                    variants={itemVariants}
                    className="p-8 glass-dark rounded-[2rem] hover:bg-white/10 hover:border-white/20 transition-all duration-300 group relative overflow-hidden flex flex-col h-full"
                  >
                    <div className={`w-14 h-14 rounded-2xl ${resource.color} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                      <Icon className="w-7 h-7" strokeWidth={2.5} />
                    </div>
                    <h4 className="font-bold text-xl mb-3 text-white group-hover:text-blue-300 transition-colors">{resource.title}</h4>
                    <p className="text-slate-400 text-sm mb-6 leading-relaxed group-hover:text-slate-300 transition-colors flex-grow">{resource.description}</p>
                    
                    <div className="flex items-center text-sm font-bold text-blue-400 group-hover:text-blue-300 mt-auto">
                      {resource.label} 
                      <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

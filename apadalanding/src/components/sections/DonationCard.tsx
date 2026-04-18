import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Heart, Building2, User, FileText, Mail } from "lucide-react";
import { BANK_INFO } from "../../core/constants/site-info";

export const DonationCard = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, fieldId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldId);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      className="max-w-4xl mx-auto"
    >
      <motion.div variants={itemVariants} className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-500 mb-6 shadow-sm">
          <Heart className="w-8 h-8 fill-current" />
        </div>
        <h3 className="text-3xl font-black text-slate-900 mb-4">Transferencia Bancaria</h3>
        <p className="text-slate-600 max-w-xl mx-auto text-lg leading-relaxed">
          Tu contribución directa permite continuar con talleres gratuitos, asesorías legales y creación de materiales inclusivos.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div variants={itemVariants} className="glass p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 hover:bg-white transition-colors duration-500 border border-white relative group overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-10 -mt-10 opacity-50 transition-transform duration-500 group-hover:scale-110 pointer-events-none" />
          
          <User className="w-8 h-8 text-blue-500 mb-6" />
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Titular de la Cuenta</p>
          <p className="text-xl font-bold text-slate-900">{BANK_INFO.accountHolder}</p>
          <p className="text-sm text-slate-500 mt-2 line-clamp-2" title={BANK_INFO.longAccountHolder}>
            {BANK_INFO.longAccountHolder}
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="glass p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 hover:bg-white transition-colors duration-500 border border-white relative group overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -mr-10 -mt-10 opacity-50 transition-transform duration-500 group-hover:scale-110 pointer-events-none" />
          
          <Building2 className="w-8 h-8 text-orange-500 mb-6" />
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Entidad Bancaria</p>
          <p className="text-xl font-bold text-slate-900">{BANK_INFO.bankName}</p>
          <p className="text-sm text-slate-500 mt-2 font-medium bg-orange-100 text-orange-700 inline-block px-3 py-1 rounded-full">
            {BANK_INFO.accountType}
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="glass p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 hover:bg-white transition-colors duration-500 border border-white flex flex-col justify-between">
          <div>
            <FileText className="w-8 h-8 text-teal-500 mb-6" />
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Número de Cuenta</p>
            <p className="text-2xl font-black text-slate-900 tracking-wider font-mono">{BANK_INFO.accountNumber}</p>
          </div>
          <button 
            onClick={() => handleCopy(BANK_INFO.accountNumber, "accountNumber")}
            className="mt-6 w-full flex items-center justify-center gap-2 py-3 px-4 bg-slate-100 hover:bg-teal-50 text-slate-700 hover:text-teal-700 rounded-xl font-bold transition-colors"
          >
            {copiedField === "accountNumber" ? <><Check className="w-5 h-5 text-green-500" /> ¡Copiado!</> : <><Copy className="w-5 h-5" /> Copiar Número</>}
          </button>
        </motion.div>

        <motion.div variants={itemVariants} className="glass p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 hover:bg-white transition-colors duration-500 border border-white flex flex-col justify-between">
          <div>
            <FileText className="w-8 h-8 text-purple-500 mb-6" />
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">RUC / Identificación</p>
            <p className="text-2xl font-black text-slate-900 tracking-wider font-mono">{BANK_INFO.taxId}</p>
          </div>
          <button 
            onClick={() => handleCopy(BANK_INFO.taxId, "taxId")}
            className="mt-6 w-full flex items-center justify-center gap-2 py-3 px-4 bg-slate-100 hover:bg-purple-50 text-slate-700 hover:text-purple-700 rounded-xl font-bold transition-colors"
          >
            {copiedField === "taxId" ? <><Check className="w-5 h-5 text-green-500" /> ¡Copiado!</> : <><Copy className="w-5 h-5" /> Copiar RUC</>}
          </button>
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="mt-8 bg-blue-900 rounded-[2rem] p-8 text-center text-white relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/30 rounded-full blur-[80px]" />
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <Mail className="w-10 h-10 text-blue-300 mb-4" />
          <h4 className="text-xl font-bold mb-2">Envío de Comprobantes</h4>
          <p className="text-blue-200 mb-6">Por favor envía tu comprobante de transferencia para llevar un registro contable adecuado.</p>
          <a href={`mailto:${BANK_INFO.receiptEmail}`} className="inline-flex items-center gap-2 bg-white/10 hover:bg-white hover:text-blue-900 backdrop-blur-md px-6 py-3 rounded-full font-bold transition-all duration-300 ring-1 ring-white/30">
            {BANK_INFO.receiptEmail}
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

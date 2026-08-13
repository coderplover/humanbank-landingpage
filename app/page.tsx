"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Terminal as TerminalIcon, 
  Shield, 
  Download, 
  Cpu, 
  WifiOff, 
  Database, 
  HardDrive, 
  ArrowRight, 
  LockKeyhole, 
  ExternalLink, 
  Check, 
  Info,
  Server,
  Share2,
  Lock,
  Layers,
  Sparkles,
  HelpCircle,
  Code
} from "lucide-react";
import InteractiveTerminal from "./components/interactive-terminal";
import InteractiveDashboard from "./components/interactive-dashboard";
import SecurityHex from "./components/security-hex";

export default function Home() {
  const [downloadProgress, setDownloadProgress] = useState(false);
  const [progressVal, setProgressVal] = useState(0);
  const [showChecksum, setShowChecksum] = useState(false);

  const startFakeDownload = () => {
    if (downloadProgress) return;
    setDownloadProgress(true);
    setProgressVal(0);
    const interval = setInterval(() => {
      setProgressVal((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDownloadProgress(false);
            alert("Humanbank Desktop App (v1.2.0) indirme paketi simüle edildi.\nGerçek bir projede bu buton doğrudan .exe dosyasını indirecektir.");
          }, 450);
          return 100;
        }
        return prev + 10;
      });
    }, 150);
  };

  return (
    <div className="min-h-screen bg-[#020204] text-zinc-105 font-sans overflow-x-hidden relative selection:bg-cyan-500 selection:text-black">
      
      {/* Background Cyber Glowing Orbs */}
      <div className="absolute top-[10%] left-[-10%] w-[35rem] h-[35rem] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-[40%] right-[-10%] w-[40rem] h-[40rem] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[10%] w-[30rem] h-[30rem] bg-indigo-500/5 rounded-full blur-[130px] pointer-events-none"></div>

      {/* Modern High-Tech Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-zinc-950/80 border-b border-zinc-900/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/30 rounded-lg blur-sm animate-pulse"></div>
              <div className="relative w-9 h-9 rounded-lg bg-[#07130e] border border-emerald-500 flex items-center justify-center">
                <LockKeyhole className="w-5 h-5 text-emerald-450" />
              </div>
            </div>
            <div>
              <span className="text-base font-black tracking-widest text-zinc-100 flex items-center gap-1 font-mono">
                Human<span className="text-emerald-400">BANK</span>
              </span>
              <div className="flex items-center gap-1 text-[9px] text-zinc-550 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span>SECURE DAEMON STABLE</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Linkages */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-semibold text-zinc-400 tracking-wider">
            <a href="#about" className="hover:text-emerald-450 transition-colors uppercase">Genel Bakış</a>
            <a href="#cli-sim" className="hover:text-emerald-450 transition-colors uppercase">Terminal CLI</a>
            <a href="#dashboard-sec" className="hover:text-emerald-450 transition-colors uppercase">Web Dashboard</a>
            <a href="#security" className="hover:text-emerald-450 transition-colors uppercase">Kriptoloji</a>
            <a href="#faq" className="hover:text-emerald-450 transition-colors uppercase">S.S.S.</a>
          </nav>

          <div className="flex items-center space-x-3">
            <a 
              href="#download" 
              className="px-4 py-2 border border-zinc-800 rounded-lg hover:border-zinc-700 bg-zinc-950 text-zinc-300 text-xs font-semibold transition-all hover:text-zinc-100 cursor-pointer hidden sm:block"
            >
              Kaynak Kodu
            </a>
            <a 
              href="#download" 
              className="px-4 py-2 bg-emerald-500 hover:bg-emerald-450 text-black text-xs font-bold rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" /> İndir
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero text items */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/20 border border-emerald-800/40 text-[11px] font-mono font-semibold text-emerald-400"
            >
              <Shield className="w-3.5 h-3.5" /> %100 ÇEVRİMDIŞI & LOKAL MASAÜSTÜ KASASI
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white"
            >
              Sizin Bilgisayarınız,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-500">
                Sizin Kurallarınız.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans"
            >
              Çevrenizdeki kişilerle ilgili hassas verileri (iletişim, TCKN, adres ve özel notları) bulut sunuculara göndermeden, tamamen kendi diskinizde **şifrelenmiş tek bir JSON** dosyasında saklayın. Eklediğiniz fotoğraf ve medya kanıtları ise ayrı ayrı şifrelenmiş **.bin** dosyaları halinde lokal diskte saklanır. Bilgilerinize sizden başka hiç kimse erişemez.
            </motion.p>

            {/* CTA action center */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                id="hero-download-btn"
                onClick={startFakeDownload}
                className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black font-extrabold rounded-xl transition-all shadow-lg shadow-emerald-500/10 flex items-center justify-center gap-2 cursor-pointer text-sm font-mono tracking-wide"
              >
                {downloadProgress ? (
                  <>
                    <Cpu className="w-4 h-4 animate-spin" /> İndiriliyor... {progressVal}%
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" /> HUMANBANK .EXE İNDİR
                  </>
                )}
              </button>
              
              <a
                href="#about"
                className="w-full sm:w-auto px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-semibold rounded-xl transition-all border border-zinc-800 hover:border-zinc-700 flex items-center justify-center gap-1.5 cursor-pointer text-sm"
              >
                Mimarisi & Özellikler <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Checksums / Hashes */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-2"
            >
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-zinc-650 font-mono">
                <div>Uyumlu Sürümler: <span className="text-zinc-500 font-sans">Windows 10 / 11 (x64)</span></div>
                <div>Boyut: <span className="text-zinc-500">~ 42.4 MB</span></div>
                <div>
                  <button 
                    onClick={() => setShowChecksum(!showChecksum)} 
                    className="hover:text-cyan-400 transition-colors underline flex items-center gap-1 cursor-pointer"
                  >
                    SHA-256 Checksum <Info className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              {showChecksum && (
                <div className="mt-2 p-2.5 bg-zinc-950/80 border border-zinc-900 rounded-lg text-[10px] text-zinc-500 font-mono break-all max-w-md mx-auto lg:mx-0">
                  SHA256: <span className="text-cyan-500">8f92a34ee983cb1e227dd129cb32e983424dcaed8924b12fe983c21fb819c991</span>
                </div>
              )}
            </motion.div>
          </div>

          {/* Right Hero Image/Terminal CLI Component (Takes 6 cols) */}
          <div className="lg:col-span-6 z-10 w-full">
            <InteractiveTerminal />
          </div>

        </div>
      </section>

      {/* Cyber stats banner */}
      <section className="bg-zinc-950/50 border-y border-zinc-900/60 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-extrabold text-white font-mono">0%</div>
            <div className="text-xs text-zinc-500 mt-1 uppercase font-semibold">Bulut Depolama (Sıfır Risk)</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-white font-mono">256-bit</div>
            <div className="text-xs text-zinc-500 mt-1 uppercase font-semibold">AES-GCM Disk Kriptolama</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-white font-mono">100%</div>
            <div className="text-xs text-zinc-500 mt-1 uppercase font-semibold">Bellek RAM Tabanlı İşleme</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-white font-mono">&lt; 1 Sn</div>
            <div className="text-xs text-zinc-500 mt-1 uppercase font-semibold">Zero-Trace Güvenli Çıkış Süresi</div>
          </div>
        </div>
      </section>

      {/* Core Concept / Gizlilik ve Güvenlik Vurgusu */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-xs text-emerald-450 tracking-widest font-mono uppercase font-bold">GİZLİLİK VE VERİ GÜVENLİĞİ POLİTİKASI</h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">Güvenliğin Altın Kuralları</h3>
          <p className="text-sm text-zinc-400 leading-relaxed font-sans">
            Humanbank, verilerinizin gizliliğini en katı kurallarla korur. Kar amacı güden büyük bulut şirketlerinin veri toplama iştahına karşı kendi bilgisayarınızı bir kaleye çevirir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-[#050608]/90 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-800 transition-all hover:translate-y-[-2px] duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400">
                <WifiOff className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-zinc-200">Sıfır Bulut (%100 İnternetsiz)</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Uygulama dış ağ portlarını dinlemez veya dışarıya istek atmaz. Verileriniz hiçbir şirketin sunucusuna gitmez. Tamamen izole ve internete bağımlı olmadan çalışır.
              </p>
            </div>
            <div className="text-[10px] font-mono text-zinc-650 mt-4 border-t border-zinc-900 pt-3">
              DAEMON STAT: RESTRICTED PORT
            </div>
          </div>

          <div className="bg-[#050608]/90 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-800 transition-all hover:translate-y-[-2px] duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-cyan-400">
                <HardDrive className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-zinc-200">Kripto JSON & .BIN Bölünmesi</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Verileriniz diske kaydedilirken ikiye bölünür: Metin tabanlı siber iz kayıtları şifrelenmiş tek bir JSON dosyasında tutulurken; resimler, fotoğraflar ve medya kanıtları ayrı ayrı AES-256 şifreli `.bin` dosyası olarak kaydedilir.
              </p>
            </div>
            <div className="text-[10px] font-mono text-zinc-650 mt-4 border-t border-zinc-900 pt-3">
              CIPHER ALGO: AES-256-GCM
            </div>
          </div>

          <div className="bg-[#050608]/90 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-800 transition-all hover:translate-y-[-2px] duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-indigo-400">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-zinc-200">Geçici RAM-Disk Yönetimi</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Şifre çözüldüğünde veriler sabit diske geçici dosya (temp) olarak yazılmaz. SQLite veritabanı RAM bellekte (`:memory:`) açılır. Uygulama kapandığı an, veri işletim sistemi bellek temizleyicisi ile RAM'den silinir.
              </p>
            </div>
            <div className="text-[10px] font-mono text-zinc-650 mt-4 border-t border-zinc-900 pt-3">
              MEM STATE: RAM VOLATILE ONLY
            </div>
          </div>

        </div>
      </section>

      {/* Hybrid Experience Showcase Header */}
      <section id="cli-sim" className="py-12 bg-zinc-950/20 border-t border-zinc-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs text-cyan-400 tracking-widest font-mono uppercase font-bold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> HİBRİT ÇALIŞMA EKOSİSTEMİ
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-50">
                CLI Hızını Web Dashboard<br />Görselliğiyle Birleştirin.
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Verileri hızlıca girmek, aramak veya güvenli giriş/çıkış yapmak için siyah terminal panelini kullanın. 
                İşinizi bitirince terminal üzerinden <code className="bg-zinc-900 border border-zinc-800 text-yellow-400 px-1 py-0.5 rounded font-mono text-xs">6</code> tuşuna basarak localhost sunucusunu tetikleyin ve modern internet tarayıcınızda visual komuta merkezinin kapılarını aralayın.
              </p>
              
              <ul className="space-y-2 text-xs text-zinc-300">
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-450 shrink-0" />
                  <span>Terminal üzerinden anında kayıt ekleme / silme</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-450 shrink-0" />
                  <span>RAM üzerinde şifreli fotoğraf deşifre animasyonu</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-450 shrink-0" />
                  <span>Kayıtlar arası ilişki analiz aracı (Node Network)</span>
                </li>
              </ul>
            </div>
            
            {/* Displaying features in interactive grid */}
            <div className="lg:col-span-7 bg-zinc-950 border border-zinc-900 rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#050608] border border-zinc-900 rounded-xl p-4 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-250">
                  <TerminalIcon className="w-4 h-4 text-emerald-400" />
                  Terminal CLI Modülü
                </div>
                <p className="text-[11px] text-zinc-500 leading-relaxed">
                  ASCII Art karşılama ekranı, master şifre doğrulama ara katmanı ve sistem imha protokolünü tutan yüksek güvenlikli terminal mimarisi.
                </p>
              </div>

              <div className="bg-[#050608] border border-zinc-900 rounded-xl p-4 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-250">
                  <Server className="w-4 h-4 text-cyan-400" />
                  Arka Plan Flask Sunucu
                </div>
                <p className="text-[11px] text-zinc-500 leading-relaxed">
                  Sadece localhost üzerinde çalışan, dış dünyaya tamamen kapalı API servisleri. Web Dashboard ile RAM veritabanını birbirine bağlar.
                </p>
              </div>

              <div className="bg-[#050608] border border-zinc-900 rounded-xl p-4 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-250">
                  <Share2 className="w-4 h-4 text-indigo-400" />
                  Node Network Graph
                </div>
                <p className="text-[11px] text-zinc-500 leading-relaxed">
                  İstihbarat hedeflerinin birbirleriyle kurduğu ticari, ailevi veya operasyonel bağları haritalayan görsel grafik analiz sistemi.
                </p>
              </div>

              <div className="bg-[#050608] border border-zinc-900 rounded-xl p-4 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-250">
                  <Layers className="w-4 h-4 text-teal-400" />
                  Zero Overwrite İmha
                </div>
                <p className="text-[11px] text-zinc-500 leading-relaxed">
                  İmha edilen bir veri bloğunun diskin üzerinde random bitlerle 3 tur ezilerek sıfırlanması ve veri kurtarmayı imkansızlaştırması.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Web Dashboard Showroom Section */}
      <section id="dashboard-sec" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-xs text-cyan-400 tracking-widest font-mono uppercase font-bold">FLASK WEB KOMUTA MERKEZİ</h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">Dashboard Canlı Simüle Panel</h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Aşağıdaki arayüz, terminalde <code className="bg-zinc-900 px-1 py-0.5 rounded text-cyan-400 font-mono">6</code> tuşuna basılıp başlatılan Flask Dashboard'unun birebir web yansımasıdır. Kartlar üzerinde düzenleme yapabilir, Leaflet takip koordinatlarını görebilir ve Node Network ilişkiler ekleyebilirsiniz.
          </p>
        </div>

        {/* Placing Interactive Flask Dashboard here */}
        <div className="max-w-5xl mx-auto">
          <InteractiveDashboard />
        </div>
      </section>

      {/* Encryption Technical Section */}
      <section id="security" className="py-20 bg-zinc-950/20 border-t border-zinc-900/60 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Security Hex Visualizer container */}
          <div className="lg:col-span-6 w-full">
            <SecurityHex />
          </div>

          {/* Explanation Text */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs text-emerald-450 tracking-widest font-mono uppercase font-bold flex items-center gap-1">
              <Lock className="w-3.5 h-3.5" /> KRİPTOGRAFİK GÜVENLİK ARŞİV MİMARİSİ
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Sıradan Dosyaları Askeri Kilit Kutularına Dönüştürün.
            </h3>
            <p className="text-sm text-zinc-450 leading-relaxed font-sans">
              Humanbank, standart bir veri şablon yöneticisinden çok daha fazlasıdır. Veritabanının şifrelenme şeması şu şekilde çalışır:
            </p>
            
            <div className="space-y-4 text-xs">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center font-bold text-[10px] text-zinc-450 shrink-0 font-mono">1</div>
                <div>
                  <h4 className="font-bold text-zinc-200">PBKDF2 SHA-256 Anahtar Yayılımı</h4>
                  <p className="text-zinc-500 leading-normal mt-0.5">Belirlediğiniz master şifre doğrudan şifreleyiciye verilmez. 100.000 iterasyon PBKDF2 turlarından geçirilerek bilgisayar üzerinde yapay bir gecikmeyle brute-force atakları bloke eder.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center font-bold text-[10px] text-zinc-450 shrink-0 font-mono">2</div>
                <div>
                  <h4 className="font-bold text-zinc-200">AES-256-GCM Bütünlük Kontrolü</h4>
                  <p className="text-zinc-500 leading-normal mt-0.5">Dosyaların sadece okunması engellenmez; dışarıdan değiştirilmesi veya bozulması durumunda veri bütünlük tag'i (Authentication Tag) sayesinde uygulama dosyaya müdahale edildiğini anında tespit edip kilitlenir.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center font-bold text-[10px] text-zinc-450 shrink-0 font-mono">3</div>
                <div>
                  <h4 className="font-bold text-zinc-200">Çevre İrtibatlarında Entropi / Rastgeleliğin Artırılması</h4>
                  <p className="text-zinc-500 leading-normal mt-0.5">Diske yazılan her .bin dosyasının başına 16 Byte rastgelelik (Salt) eklenir. Şifreniz aynı olsa bile iki farklı yedekleme dosyasının hex şifresi tamamen farklı görünür.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <HelpCircle className="w-8 h-8 text-indigo-400 mx-auto" />
          <h2 className="text-xs text-indigo-400 tracking-widest font-mono uppercase font-bold">SIKÇA SORULAN SORULAR</h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">Siber Arşiv Hakkında Bilmeniz Gerekenler</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
          
          <div className="bg-[#050608]/80 border border-zinc-900 rounded-xl p-5 space-y-2">
            <h4 className="text-sm font-semibold text-zinc-200">Master Şifremi / Parolamı unuttum, verileri kurtarabilir miyim?</h4>
            <p className="text-xs text-zinc-450 leading-relaxed">
              **Hayır, kesinlikle kurtaramazsınız.** Sunucu olmadığından "Şifremi Unuttum" linki veya mail servisi bulunmaz. Veriler şifrelenmiş JSON veritabanınızda ve şifreli `.bin` medya dosyaları halinde sadece diskinizdedir. Şifreyi unutursanız verileriniz kalıcı olarak kilitli kalır.
            </p>
          </div>

          <div className="bg-[#050608]/80 border border-zinc-900 rounded-xl p-5 space-y-2">
            <h4 className="text-sm font-semibold text-zinc-200">Dosya yedeklemeleri ve taşınabilirlik nasıl oluyor?</h4>
            <p className="text-xs text-zinc-450 leading-relaxed">
              Verileriniz tek tıkla taşınabilir formatta tasarlanmıştır. Uygulamanın olduğu dizindeki şifreli JSON dosyasını ve `.bin` uzantılı medya klasörünü kopyalayıp USB belleğe atarak veya bulutunuza şifreli zip halinde yükleyerek dilediğinizce yedekleyebilirsiniz.
            </p>
          </div>

          <div className="bg-[#050608]/80 border border-zinc-900 rounded-xl p-5 space-y-2">
            <h4 className="text-sm font-semibold text-zinc-200">Open-Source mu? Kaynak kodlarını inceleyebilir miyim?</h4>
            <p className="text-xs text-zinc-450 leading-relaxed">
              Evet. Yerel arşivleme araçlarında güven çok önemlidir. Humanbank çekirdek CLI ve Flask motoru açık kaynak kodlu olarak paylaşılmaktadır. İnternet erişimi olmayan temiz ortamlarda kendiniz de compile edebilirsiniz.
            </p>
          </div>

          <div className="bg-[#050608]/80 border border-zinc-900 rounded-xl p-5 space-y-2">
            <h4 className="text-sm font-semibold text-zinc-200">Piyasada olan Şifre Yöneticilerinden farkı nedir?</h4>
            <p className="text-xs text-zinc-450 leading-relaxed">
              Klasik şifre yöneticileri kullanıcı girişlerini saklar. Humanbank ise hedeflenen verileri harita entegrasyonu, kişilerin soyağaçları / ilişki ağları ve siber istihbarat notları gibi daha karmaşık ilişkisel veri yapılarıyla beraber arşivlemek için kurgulanmıştır.
            </p>
          </div>

        </div>
      </section>

      {/* Main Download Call To Action (Windows EXE) */}
      <section id="download" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 rounded-3xl blur-2xl pointer-events-none"></div>
        
        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 md:p-16 text-center space-y-8 relative overflow-hidden">
          {/* Subtle grid in container */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
          
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#081510] border border-emerald-500 flex items-center justify-center text-emerald-400 mx-auto">
              <Download className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-extrabold text-white tracking-tight">Kendi Dijital Kasanızı Şimdi Kurun</h3>
            <p className="text-sm text-zinc-400 font-sans">
              Tek tıkla çalıştırılabilir masaüstü uygulamasını hemen indirin. Kurulum gerektirmez, doğrudan tıklayıp master parolanızı bellek üzerinde tanımlayarak kullanmaya başlayabilirsiniz.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <button
              onClick={startFakeDownload}
              className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-450 text-black font-extrabold rounded-xl transition-all shadow-xl shadow-emerald-500/10 flex items-center justify-center gap-2 cursor-pointer font-mono tracking-wide"
            >
              {downloadProgress ? (
                <>
                  <Cpu className="w-5 h-5 animate-spin" /> Yükleniyor... {progressVal}%
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" /> Humanbank .exe İndir (v1.2.0)
                </>
              )}
            </button>
            
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-zinc-550 font-mono">
              <span>SHA256: 8f92a34ee983...819c991</span>
              <span>•</span>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-350 transition-colors inline-flex items-center gap-0.5">
                GitHub Repository <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span>•</span>
              <span className="text-emerald-500 flex items-center gap-0.5">
                <Check className="w-3.5 h-3.5" /> Microsoft Defender Onaylı
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#020204] border-t border-zinc-900/60 py-12 px-4 sm:px-6 lg:px-8 text-xs text-zinc-550">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded bg-[#07130e] border border-emerald-950 flex items-center justify-center text-emerald-450">
              <LockKeyhole className="w-3.5 h-3.5" />
            </div>
            <span className="font-bold tracking-widest text-zinc-350 font-mono">HUMANBANK ARCHIVE</span>
          </div>

          <div className="text-center md:text-left leading-relaxed">
            <p>© {new Date().getFullYear()} Humanbank Security Project. Tüm hakları saklıdır.</p>
            <p className="text-[10px] text-zinc-650 mt-1">Uygulama askeri kriptolojik standartlara bağlı kalınarak lokal siber istihbarat amaçları doğrultusunda geliştirilmiştir.</p>
          </div>

          <div className="flex items-center space-x-6 font-mono text-[10px]">
            <span className="text-emerald-500 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
              SECURE DEPLOY ONLINE
            </span>
            <a href="#about" className="hover:text-zinc-350 transition-colors uppercase">MİMARİ</a>
            <a href="#security" className="hover:text-zinc-350 transition-colors uppercase">HAKKINDA</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

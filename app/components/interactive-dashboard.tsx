"use client";

import React, { useState } from "react";
import { Plus, X, Search, Shield, ArrowLeft, Edit3, Trash2, MapPin, Image as ImageIcon, Link2 } from "lucide-react";

interface Target {
  id: number;
  firstName: string;
  lastName: string;
  tckn: string;
  gsm: string;
  city: string;
  birthday: string;
  address: string;
  email: string;
  instagram: string;
  facebook: string;
  twitter: string;
  tiktok: string;
  photo: string;
  education: string;
  history: string;
  notes: string;
  coords: string;
  parents: {
    motherId: string;
    fatherId: string;
    motherName: string;
    motherLocation: string;
  };
}

export default function InteractiveDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTargetId, setSelectedTargetId] = useState<number | null>(null);
  
  // Completely Randomized Turkish Target Data (No screenshot names used)
  const [targets, setTargets] = useState<Target[]>([
    {
      id: 4,
      firstName: "Burak",
      lastName: "Aksoy",
      tckn: "39420846194",
      gsm: "05327491024",
      city: "İzmir/Bornova",
      birthday: "12.04.1994",
      address: "Bornova Merkez Mah. 412 Sok. No: 8",
      email: "burak.aksoy94@localmail.net",
      instagram: "burak_aksoy",
      facebook: "burak.aksoy.fb",
      twitter: "aksoy_burak",
      tiktok: "b_aksoy",
      photo: "Kilitli Kasa (media_42bf8ae9.bin)",
      education: "Ege Üniversitesi Bilgisayar Programcılığı",
      history: "Ağ Güvenlik Stajyeri (2016-2018)",
      notes: "Siber güvenlik alanında yerel ağ izleme notları mevcuttur.",
      coords: "38.46, 27.22",
      parents: { motherId: "7", fatherId: "-", motherName: "Gamze Şen", motherLocation: "Kocaeli | Gebze" }
    },
    {
      id: 7,
      firstName: "Gamze",
      lastName: "Şen",
      tckn: "11942083610",
      gsm: "05448102934",
      city: "Kocaeli/Gebze",
      birthday: "28.09.1989",
      address: "Hacıhalil Mah. 1205 Sok. Gebze",
      email: "gamzese89@webmail.org",
      instagram: "gamzessen",
      facebook: "-",
      twitter: "gamze_sen",
      tiktok: "gamzesen_tiktok",
      photo: "Kilitli Kasa (media_77ca48d2.bin)",
      education: "Kocaeli Üniversitesi İşletme Bölümü",
      history: "Finansal Analist, Gebze Organize Sanayi",
      notes: "Dış ticaret ve yerel lojistik firma kayıt arşivleri yöneticisi.",
      coords: "40.80, 29.43",
      parents: { motherId: "-", fatherId: "-", motherName: "-", motherLocation: "-" }
    },
    {
      id: 10,
      firstName: "Yusuf",
      lastName: "Karan",
      tckn: "-",
      gsm: "-",
      city: "-",
      birthday: "-",
      address: "-",
      email: "-",
      instagram: "-",
      facebook: "-",
      twitter: "-",
      tiktok: "-",
      photo: "Kilitli Kasa (media_10ff2b3a.bin)",
      education: "-",
      history: "-",
      notes: "Sistemde sadece temel kayıt kaydı var, detaylı istihbarat eksik.",
      coords: "",
      parents: { motherId: "-", fatherId: "-", motherName: "-", motherLocation: "-" }
    },
    {
      id: 15,
      firstName: "Pelin",
      lastName: "Yılmaz",
      tckn: "50193847291",
      gsm: "05332810492",
      city: "Antalya/Alanya",
      birthday: "05.11.1996",
      address: "Güller Pınarı Mah. Şahin Sok. Alanya",
      email: "pelin.yilmaz96@mail.tr",
      instagram: "pelin_y",
      facebook: "pelin.yilmaz.39",
      twitter: "peliny_tw",
      tiktok: "pelin.yilmaz96",
      photo: "Kilitli Kasa (media_15ab321c.bin)",
      education: "Akdeniz Üniversitesi Turizm İşletmeciliği",
      history: "Otel Rezervasyon Acentesi Sorumlusu (2020-2024)",
      notes: "Yerel lojistik ve turizm giriş kaydı verileri.",
      coords: "36.54, 32.00",
      parents: { motherId: "-", fatherId: "-", motherName: "-", motherLocation: "-" }
    },
    {
      id: 18,
      firstName: "Tufan",
      lastName: "Karaca",
      tckn: "22194830184",
      gsm: "05527183920",
      city: "Eskişehir/Tepebaşı",
      birthday: "19.06.1991",
      address: "Eskibağlar Mah. Yılmaz Sok. Tepebaşı",
      email: "tufan_karaca91@fastmail.com",
      instagram: "tufan_karaca",
      facebook: "-",
      twitter: "tufankaraca",
      tiktok: "tufank_91",
      photo: "Kilitli Kasa (media_18dd73fa.bin)",
      education: "Anadolu Üniversitesi Makine Mühendisliği",
      history: "Üretim Planlama Sorumlusu, Eskişehir OSB",
      notes: "Endüstriyel parça üretim ve lojistik nakliye bağlantıları.",
      coords: "39.78, 30.51",
      parents: { motherId: "-", fatherId: "-", motherName: "-", motherLocation: "-" }
    },
    {
      id: 32,
      firstName: "Banu",
      lastName: "Ege",
      tckn: "40958102934",
      gsm: "05063928471",
      city: "Adana/Seyhan",
      birthday: "02.02.1995",
      address: "Reşatbey Mah. Gazipaşa Bulv. Seyhan",
      email: "banu.ege@postmail.com",
      instagram: "banu_ege",
      facebook: "banuege.fb",
      twitter: "banuege_tw",
      tiktok: "banuege_95",
      photo: "Kilitli Kasa (media_32ee12bc.bin)",
      education: "Çukurova Üniversitesi Tarım Gıda Geliştirme",
      history: "Analiz laboratuvarı uzman yardımcısı",
      notes: "Bölgesel gıda tedarik zinciri lojistik ağ sorumlusu.",
      coords: "36.99, 35.32",
      parents: { motherId: "-", fatherId: "-", motherName: "-", motherLocation: "-" }
    }
  ]);

  const handleAddNewTarget = () => {
    const nextId = Math.max(...targets.map(t => t.id), 0) + 1;
    const newT: Target = {
      id: nextId,
      firstName: "Yeni",
      lastName: `Analiz #${nextId}`,
      tckn: "-",
      gsm: "0539 000 00 00",
      city: "Ankara/Çankaya",
      birthday: "-",
      address: "-",
      email: "-",
      instagram: "-",
      facebook: "-",
      twitter: "-",
      tiktok: "-",
      photo: "Kilitli Kasa (media_temp.bin)",
      education: "-",
      history: "-",
      notes: "Sisteme manuel eklenmiş siber arşiv verisi.",
      coords: "39.92, 32.85",
      parents: { motherId: "-", fatherId: "-", motherName: "-", motherLocation: "-" }
    };
    setTargets(prev => [...prev, newT]);
  };

  const handleEditTarget = (id: number) => {
    alert("Dossier Düzenleme Modu Aktif. Grid alanlarını düzenleyip kaydedebilirsiniz.");
  };

  const handleDeleteTarget = (id: number) => {
    if (confirm("Hedef verisini diskten kalıcı olarak imha etmek istediğinize emin misiniz?")) {
      setTargets(prev => prev.filter(t => t.id !== id));
      setSelectedTargetId(null);
    }
  };

  const filteredTargets = targets.filter(t => 
    `${t.firstName} ${t.lastName}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.gsm.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedTarget = targets.find(t => t.id === selectedTargetId);

  return (
    <div id="dashboard-preview" className="w-full bg-[#02040b] border border-[#0d224d] rounded-2xl overflow-hidden shadow-2xl flex flex-col min-h-[600px] text-zinc-100">
      
      {selectedTargetId === null ? (
        // DASHBOARD GRID VIEW (Screenshot 5 Style)
        <>
          <div className="bg-[#030612] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#0f2142]">
            <div className="flex items-center space-x-2 shrink-0">
              <span className="text-cyan-400 text-sm font-extrabold flex items-center gap-1.5 uppercase font-mono tracking-widest">
                ⚡ HUMANBANK // WEB_COMMAND
              </span>
            </div>

            <div className="relative w-full max-w-sm">
              <input
                type="text"
                placeholder="Canlı İstihbarat Ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#05070e] border border-[#0e2142] rounded-lg px-3 py-2 pl-9 text-xs text-zinc-105 placeholder-zinc-650 outline-none focus:border-cyan-500 transition-colors font-mono"
              />
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-650">
                <Search className="w-3.5 h-3.5" />
              </span>
            </div>

            <button
              onClick={handleAddNewTarget}
              className="bg-[#0cf299] hover:bg-[#0ae08b] text-black font-extrabold text-xs px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer font-mono shrink-0"
            >
              <Plus className="w-4 h-4 stroke-[3]" /> YENİ HEDEF KİLİTLE
            </button>
          </div>

          <div className="p-6 md:p-8 flex-grow">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {filteredTargets.map((t) => (
                <div 
                  key={t.id}
                  className="bg-[#050917] border border-[#0d224d]/80 rounded-xl p-5 hover:border-cyan-505/40 hover:shadow-cyan-950/20 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono mb-3">
                      <span className="text-[#a755e0] font-bold">ID: #{t.id}</span>
                      <button 
                        onClick={() => setSelectedTargetId(t.id)}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-0.5 cursor-pointer font-semibold uppercase tracking-wider text-[10px]"
                      >
                        DOSYAYI İNCELE ➔
                      </button>
                    </div>

                    <h4 className="text-base font-extrabold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                      {t.firstName} {t.lastName}
                    </h4>

                    <div className="space-y-1 text-xs font-mono">
                      <div className="flex">
                        <span className="text-zinc-600 w-16">TC:</span>
                        <span className="text-zinc-400">{t.tckn || "-"}</span>
                      </div>
                      <div className="flex">
                        <span className="text-zinc-650 w-16">GSM:</span>
                        <span className="text-[#4198f2] font-semibold">{t.gsm}</span>
                      </div>
                      <div className="flex">
                        <span className="text-zinc-650 w-16">ŞEHİR:</span>
                        <span className="text-zinc-400">{t.city}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        // DOSSIER DETAIL VIEW (Screenshots 1 & 2 Style of Detail Page)
        selectedTarget && (
          <div className="flex-grow flex flex-col bg-[#030510]">
            
            {/* Top action header bar from Screenshot 1 */}
            <div className="bg-[#04081b] px-6 py-4 border-b border-[#0f2142] flex items-center justify-between">
              <button 
                onClick={() => setSelectedTargetId(null)}
                className="bg-[#09152b] hover:bg-[#112447] text-zinc-300 hover:text-white border border-[#0d224d] rounded-lg px-4 py-2 text-xs font-bold font-mono transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                ← LİSTEYE GERİ DÖN
              </button>

              <div className="flex items-center space-x-3">
                <button 
                  onClick={() => handleEditTarget(selectedTarget.id)}
                  className="bg-[#f0851f] hover:bg-[#d67011] text-white font-extrabold text-xs px-4 py-2 rounded-lg transition-colors flex items-center gap-1 cursor-pointer font-mono"
                >
                  ✏️ DOSYAYI DÜZENLE
                </button>
                <button 
                  onClick={() => handleDeleteTarget(selectedTarget.id)}
                  className="bg-[#d92323] hover:bg-[#a81414] text-white font-extrabold text-xs px-4 py-2 rounded-lg transition-colors flex items-center gap-1 cursor-pointer font-mono"
                >
                  🗑️ DOSYAYI İMHA ET
                </button>
              </div>
            </div>

            {/* Dossier Workspace Container */}
            <div className="p-6 md:p-8 max-w-5xl mx-auto w-full space-y-8">
              
              {/* Box Containing Target Name & ID */}
              <div className="bg-[#050a22]/30 border border-[#0f2142] rounded-2xl p-6 md:p-8 space-y-6">
                
                {/* Header row: Portrait & Name */}
                <div className="flex items-center space-x-6 border-b border-[#0f2142] pb-6">
                  <div className="w-18 h-18 rounded-xl border border-[#0d224d] bg-[#02050f] overflow-hidden flex items-center justify-center text-zinc-600 shrink-0">
                    <svg viewBox="0 0 100 100" fill="none" className="w-12 h-12 text-[#a855f7]/60">
                      <circle cx="50" cy="40" r="22" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3 3"/>
                      <path d="M15 88C15 72.8 30.6 62 50 62C69.4 62 85 72.8 85 88" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3 3"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white flex gap-3 font-sans">
                      <span>{selectedTarget.firstName}</span> <span>{selectedTarget.lastName}</span>
                    </h3>
                    <p className="text-xs text-sky-400 font-mono mt-1 font-semibold uppercase tracking-wider">
                      SİSTEM KAYIT NO: #{selectedTarget.id}
                    </p>
                  </div>
                </div>

                {/* Grid Split: Kimlik & Lokasyon vs Özgeçmiş & Sosyal Medya */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs font-mono">
                  
                  {/* Left Column: Kimlik ve Lokasyon */}
                  <div className="space-y-4">
                    <h5 className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider pb-1 border-b border-[#0e2142]">
                      KİMLİK & LOKASYON
                    </h5>
                    
                    <div className="space-y-3">
                      <div>
                        <label className="text-[10px] text-zinc-600 block mb-1">TC KİMLİK</label>
                        <input 
                          type="text" 
                          readOnly 
                          value={selectedTarget.tckn} 
                          className="w-full bg-[#02050f] border border-[#0f2142] rounded px-3 py-2 text-zinc-300 placeholder-zinc-800 outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-zinc-650 block mb-1">GSM NO</label>
                        <input 
                          type="text" 
                          readOnly 
                          value={selectedTarget.gsm} 
                          className="w-full bg-[#02050f] border border-[#0f2142] rounded px-3 py-2 text-cyan-404 font-bold outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-zinc-650 block mb-1">E-POSTA</label>
                        <input 
                          type="text" 
                          readOnly 
                          value={selectedTarget.email} 
                          className="w-full bg-[#02050f] border border-[#0f2142] rounded px-3 py-2 text-zinc-300 outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-zinc-655 block mb-1">ŞEHİR</label>
                        <input 
                          type="text" 
                          readOnly 
                          value={selectedTarget.city} 
                          className="w-full bg-[#02050f] border border-[#0f2142] rounded px-3 py-2 text-zinc-300 outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-zinc-655 block mb-1">TAM ADRES</label>
                        <input 
                          type="text" 
                          readOnly 
                          value={selectedTarget.address} 
                          className="w-full bg-[#02050f] border border-[#0f2142] rounded px-3 py-2 text-zinc-300 outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-zinc-550 block mb-1 uppercase">📍 COĞRAFİ KOORDİNAT (Enlem, Boylam)</label>
                        <input 
                          type="text" 
                          readOnly 
                          value={selectedTarget.coords ? selectedTarget.coords : "Örn: 41.28, 27.97"} 
                          className="w-full bg-[#02050f] border border-[#0f2142] rounded px-3 py-2 text-zinc-500 outline-none"
                        />
                      </div>
                    </div>

                    {/* Dark/Cyber Geographic Tracker Map elements */}
                    <div className="space-y-2 mt-4">
                      <label className="text-[10px] text-zinc-550 uppercase tracking-widest block font-bold">🗺️ COĞRAFİ LOKASYON RADARI</label>
                      <div className="h-44 bg-[#030612] border border-[#0f2142] rounded-lg relative overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 bg-grid-pattern opacity-15"></div>
                        <div className="absolute inset-0 bg-radial-gradient opacity-20"></div>
                        
                        {/* Simulation maps paths */}
                        <svg className="absolute inset-0 w-full h-full text-zinc-800 opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <path d="M 0 30 Q 30 50 60 20 T 100 80" stroke="currentColor" fill="none" strokeWidth="1"/>
                          <path d="M 10 0 Q 40 80 80 50" stroke="currentColor" fill="none" strokeWidth="1"/>
                        </svg>

                        {/* Sonar Pulse tracking circle */}
                        <div className="absolute w-10 h-10 rounded-full border border-cyan-500/40 bg-cyan-950/10 animate-ping"></div>
                        <div className="w-2 h-2 bg-cyan-400 rounded-full neon-pulse-cyan relative group">
                          {/* Map Pin Hover Popup */}
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black border border-cyan-500 px-2.5 py-1 rounded text-[9px] text-cyan-300 font-mono whitespace-nowrap z-20">
                            Hedef İz Noktası: {selectedTarget.coords || "Konum Yok"}
                          </div>
                      </div>

                      {/* Map Controls */}
                      <div className="absolute bottom-2 left-2 flex flex-col bg-black/80 border border-[#0f2142] rounded text-[8px] text-zinc-500 px-1 py-0.5">
                        <span>Leaflet | © OpenStreetMap</span>
                      </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Özgeçmiş ve Sosyal Medya */}
                  <div className="space-y-4">
                    <h5 className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider pb-1 border-b border-[#0e2142]">
                      ÖZGEÇMİŞ & SOSYAL MEDYA
                    </h5>
                    
                    <div className="space-y-3">
                      <div>
                        <label className="text-[10px] text-zinc-650 block mb-1">EĞİTİM BİLGİSİ</label>
                        <input 
                          type="text" 
                          readOnly 
                          value={selectedTarget.education} 
                          className="w-full bg-[#02050f] border border-[#0f2142] rounded px-3 py-2 text-zinc-300 outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] text-zinc-650 block mb-1">İŞ DENEYİMİ</label>
                        <input 
                          type="text" 
                          readOnly 
                          value={selectedTarget.history} 
                          className="w-full bg-[#02050f] border border-[#0f2142] rounded px-3 py-2 text-zinc-300 outline-none"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-[10px] text-zinc-700 block mb-1">INSTAGRAM</label>
                          <input 
                            type="text" 
                            readOnly 
                            value={selectedTarget.instagram} 
                            className="w-full bg-[#02050f] border border-[#0f2142] rounded px-3 py-2 text-zinc-300 outline-none"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] text-zinc-700 block mb-1">FACEBOOK</label>
                          <input 
                            type="text" 
                            readOnly 
                            value={selectedTarget.facebook} 
                            className="w-full bg-[#02050f] border border-[#0f2142] rounded px-3 py-2 text-zinc-300 outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-[10px] text-zinc-700 block mb-1">TWITTER</label>
                          <input 
                            type="text" 
                            readOnly 
                            value={selectedTarget.twitter} 
                            className="w-full bg-[#02050f] border border-[#0f2142] rounded px-3 py-2 text-zinc-300 outline-none"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] text-zinc-700 block mb-1">TIKTOK</label>
                          <input 
                            type="text" 
                            readOnly 
                            value={selectedTarget.tiktok} 
                            className="w-full bg-[#02050f] border border-[#0f2142] rounded px-3 py-2 text-zinc-300 outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Evidence Media files from screen 2 */}
                <div className="border-t border-[#0f2142] pt-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-1.5">
                      📂 KRİPTO MEDYA VE SAFHA KANITLARI
                    </span>
                    <button className="bg-[#0091ff] hover:bg-[#007fe3] text-white font-extrabold text-[10px] px-3 py-1 rounded transition-colors flex items-center gap-1 cursor-pointer font-mono">
                      + ÇOKLU MEDYA ENJEKTE ET
                    </button>
                  </div>
                  
                  {/* simulated thumbnail lists */}
                  <div className="grid grid-cols-4 gap-4 max-w-md">
                    <div className="aspect-square border border-[#0f2142] bg-[#02050f] rounded-lg overflow-hidden flex items-center justify-center relative group">
                      <ImageIcon className="w-6 h-6 text-zinc-700" />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-[8px] text-zinc-400 font-mono transition-opacity">
                        Enkripte_01.bin
                      </div>
                    </div>
                    <div className="aspect-square border border-[#0f2142] bg-[#02050f] rounded-lg overflow-hidden flex items-center justify-center relative group">
                      <ImageIcon className="w-6 h-6 text-zinc-700" />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center text-[8px] text-zinc-400 font-mono transition-opacity">
                        Enkripte_02.bin
                      </div>
                    </div>
                  </div>
                </div>

                {/* Notes Container */}
                <div className="border-t border-[#0f2142] pt-6 space-y-2">
                  <span className="text-[10px] text-zinc-400 font-mono font-bold uppercase tracking-widest block">🔒 SİSTEM ARAŞTIRMA NOTLARI</span>
                  <textarea 
                    readOnly
                    rows={4} 
                    value={selectedTarget.notes}
                    className="w-full bg-[#02050f] border border-[#0f2142] rounded-lg p-3 text-yellow-101 outline-none text-xs italic resize-none font-sans"
                  />
                </div>

                {/* Dropdowns connection settings from screen 2 */}
                <div className="border-t border-[#0f2142] pt-6 grid grid-cols-2 gap-6 text-xs font-mono">
                  <div>
                    <label className="text-[10px] text-[#f59e0b] font-bold block mb-1">👩 ANNE BAĞLANTISI</label>
                    <select className="w-full bg-[#02050f] border border-[#0f2142] rounded px-3 py-2 text-zinc-350 outline-none">
                      <option>{selectedTarget.parents.motherName !== "-" ? selectedTarget.parents.motherName : "Seçilmedi (Yok)"}</option>
                      <option>Gamze Şen</option>
                      <option>Banu Ege</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] text-[#f59e0b] font-bold block mb-1">👨 BABA BAĞLANTISI</label>
                    <select className="w-full bg-[#02050f] border border-[#0f2142] rounded px-3 py-2 text-zinc-350 outline-none">
                      <option>Seçilmedi (Yok)</option>
                      <option>Burak Aksoy</option>
                      <option>Tufan Karaca</option>
                    </select>
                  </div>
                </div>

              </div>

              {/* Soyağacı İlişki Grafiği (Node Network Analysis Diagram from Screen 2) */}
              <div className="bg-[#050a22]/30 border border-[#0f2142] rounded-2xl p-6 space-y-4">
                <span className="text-[10px] font-mono font-bold text-zinc-450 uppercase tracking-widest block font-sans">
                  🌳 SOYAĞACI İLİŞKİ GRAFİĞİ (NODE NETWORK ANALYSIS)
                </span>
                
                {/* SVG Visual Relationship map exactly like screen 2 */}
                <div className="h-64 bg-[#030612] border border-[#0f2142] rounded-xl flex items-center justify-center p-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-radial-grid opacity-10"></div>
                  
                  {selectedTarget.parents.motherName !== "-" ? (
                    <svg className="w-full h-full max-w-sm" viewBox="0 0 200 180" fill="none">
                      {/* Connection pointing down */}
                      <g>
                        <line x1="100" y1="50" x2="100" y2="120" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="3 3" />
                        <polygon points="100,120 96,114 104,114" fill="#6366f1" />
                        <text x="106" y="88" fill="#818cf8" className="text-[8px] font-mono font-bold rotate-90 origin-left">Anne Bağı</text>
                      </g>

                      {/* Parent node */}
                      <g>
                        <rect x="35" y="10" width="130" height="36" rx="5" fill="#02050f" stroke="#00d8f6" strokeWidth="1.5" />
                        <text x="100" y="24" textAnchor="middle" fill="#d97706" className="text-[8px] font-mono font-bold">👩 ANNESİ</text>
                        <text x="100" y="36" textAnchor="middle" fill="#ffffff" className="text-[9px] font-mono font-bold">{selectedTarget.parents.motherName}</text>
                      </g>

                      {/* Child Node */}
                      <g>
                        <rect x="35" y="125" width="130" height="36" rx="5" fill="#02050f" stroke="#e0a96d" strokeWidth="1.5" />
                        <text x="100" y="139" textAnchor="middle" fill="#f43f5e" className="text-[8px] font-mono font-bold">🎯 HEDEF (ÇOCUK)</text>
                        <text x="100" y="151" textAnchor="middle" fill="#ffffff" className="text-[9px] font-mono font-bold">{selectedTarget.firstName} {selectedTarget.lastName}</text>
                      </g>
                    </svg>
                  ) : (
                    <div className="text-zinc-600 text-xs italic font-mono uppercase tracking-widest text-center">
                      İlişki Haritası Eksik (Ebeveyn seçilmedi)
                    </div>
                  )}
                </div>
              </div>

            </div>

          </div>
        )
      )}

      {/* Info status indicators matching real local application aesthetics */}
      <div className="bg-[#02040a] px-6 py-3 border-t border-[#0f2142] flex flex-wrap items-center justify-between text-[11px] font-mono text-zinc-550 gap-2">
        <div className="flex items-center gap-1 text-emerald-500">
          <Shield className="w-3.5 h-3.5 fill-emerald-950" />
          <span>Şifreli SQLite-Bin Yerel Alan Modu</span>
        </div>
        <div className="flex items-center gap-4">
          <span>Toplam Siber İz: <span className="text-zinc-300 font-bold">{targets.length}</span></span>
          <span className="hidden sm:inline">•</span>
          <span className="text-cyan-405">Daemon: Active localhost:5000</span>
        </div>
      </div>

    </div>
  );
}

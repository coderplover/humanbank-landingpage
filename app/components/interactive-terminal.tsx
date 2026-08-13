"use client";

import React, { useState, useEffect, useRef } from "react";
import { Lock, Shield, ChevronRight } from "lucide-react";

export default function InteractiveTerminal() {
  const [screen, setScreen] = useState<"auth" | "menu" | "list" | "detail" | "exit">("auth");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authStep, setAuthStep] = useState<"username" | "password">("username");
  const [authAttempts, setAuthAttempts] = useState(1);
  const [authError, setAuthError] = useState(false);
  const [commandInput, setCommandInput] = useState("");
  const [selectedTargetId, setSelectedTargetId] = useState<number | null>(null);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Targets aligned with dashboard (completely randomized, no actual screenshot data used)
  const [targets, setTargets] = useState([
    { 
      id: 4, 
      name: "Burak Aksoy", 
      city: "İzmir/Bornova", 
      gsm: "05327491024",
      tckn: "39420846194",
      birthday: "12.04.1994",
      address: "Bornova Merkez Mah. 412 Sok. No: 8",
      email: "burak.aksoy94@localmail.net",
      instagram: "burak_aksoy",
      tiktok: "b_aksoy",
      photo: "Kilitli Kasa (media_42bf8ae9.bin)",
      education: "Ege Üniversitesi Bilgisayar Programcılığı",
      history: "Ağ Güvenlik Stajyeri (2016-2018)",
      notes: "Siber güvenlik alanında yerel ağ izleme notları mevcuttur.",
      parents: { motherId: "7", fatherId: "-", motherName: "Gamze Şen", motherLocation: "Kocaeli | Gebze" }
    },
    { 
      id: 7, 
      name: "Gamze Şen", 
      city: "Kocaeli/Gebze", 
      gsm: "05448102934",
      tckn: "11942083610",
      birthday: "28.09.1989",
      address: "Hacıhalil Mah. 1205 Sok. Gebze",
      email: "gamzese89@webmail.org",
      instagram: "gamzessen",
      tiktok: "gamzesen_tiktok",
      photo: "Kilitli Kasa (media_77ca48d2.bin)",
      education: "Kocaeli Üniversitesi İşletme Bölümü",
      history: "Finansal Analist, Gebze Organize Sanayi",
      notes: "Dış ticaret ve yerel lojistik firma kayıt arşivleri yöneticisi.",
      parents: { motherId: "-", fatherId: "-", motherName: "-", motherLocation: "-" }
    },
    { 
      id: 10, 
      name: "Yusuf Karan", 
      city: "-", 
      gsm: "-",
      tckn: "-",
      birthday: "-",
      address: "-",
      email: "-",
      instagram: "-",
      tiktok: "-",
      photo: "Kilitli Kasa (media_10ff2b3a.bin)",
      education: "-",
      history: "-",
      notes: "Sistemde sadece temel kayıt kaydı var, detaylı istihbarat eksik.",
      parents: { motherId: "-", fatherId: "-", motherName: "-", motherLocation: "-" }
    },
    { 
      id: 15, 
      name: "Pelin Yılmaz", 
      city: "Antalya/Alanya", 
      gsm: "05332810492",
      tckn: "50193847291",
      birthday: "05.11.1996",
      address: "Güller Pınarı Mah. Şahin Sok. Alanya",
      email: "pelin.yilmaz96@mail.tr",
      instagram: "pelin_y",
      tiktok: "pelin.yilmaz96",
      photo: "Kilitli Kasa (media_15ab321c.bin)",
      education: "Akdeniz Üniversitesi Turizm İşletmeciliği",
      history: "Otel Rezervasyon Acentesi Sorumlusu (2020-2024)",
      notes: "Yerel lojistik ve turizm giriş kaydı verileri.",
      parents: { motherId: "-", fatherId: "-", motherName: "-", motherLocation: "-" }
    },
    { 
      id: 18, 
      name: "Tufan Karaca", 
      city: "Eskişehir/Tepebaşı", 
      gsm: "05527183920",
      tckn: "22194830184",
      birthday: "19.06.1991",
      address: "Eskibağlar Mah. Yılmaz Sok. Tepebaşı",
      email: "tufan_karaca91@fastmail.com",
      instagram: "tufan_karaca",
      tiktok: "tufank_91",
      photo: "Kilitli Kasa (media_18dd73fa.bin)",
      education: "Anadolu Üniversitesi Makine Mühendisliği",
      history: "Üretim Planlama Sorumlusu, Eskişehir OSB",
      notes: "Endüstriyel parça üretim ve lojistik nakliye bağlantıları.",
      parents: { motherId: "-", fatherId: "-", motherName: "-", motherLocation: "-" }
    },
    { 
      id: 32, 
      name: "Banu Ege", 
      city: "Adana/Seyhan", 
      gsm: "05063928471",
      tckn: "40958102934",
      birthday: "02.02.1995",
      address: "Reşatbey Mah. Gazipaşa Bulv. Seyhan",
      email: "banu.ege@postmail.com",
      instagram: "banu_ege",
      tiktok: "banuege_95",
      photo: "Kilitli Kasa (media_32ee12bc.bin)",
      education: "Çukurova Üniversitesi Tarım Gıda Geliştirme",
      history: "Analiz laboratuvarı uzman yardımcısı",
      notes: "Bölgesel gıda tedarik zinciri lojistik ağ sorumlusu.",
      parents: { motherId: "-", fatherId: "-", motherName: "-", motherLocation: "-" }
    }
  ]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [screen, authStep, selectedTargetId]);

  const handleUsernameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      setAuthStep("password");
    }
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Allow demo entry or admin password check
    if (password.trim() === "admin123" || password.trim().toLowerCase() === "volper" || password.length >= 4) {
      setAuthError(false);
      setScreen("menu");
    } else {
      setAuthError(true);
      if (authAttempts >= 3) {
        alert("Yetkilendirme deneme sınırı aşıldı! Sistem kilitlendi.");
        setAuthAttempts(1);
        setUsername("");
        setPassword("");
        setAuthStep("username");
      } else {
        setAuthAttempts(prev => prev + 1);
        setPassword("");
      }
    }
  };

  const handleCommandInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = commandInput.trim();
    setCommandInput("");

    if (screen === "menu") {
      switch (cmd) {
        case "1":
          alert("CLI üzerinden Kişi Ekleme Modülü (Yeni İstihbarat Hedefi) simüle ediliyor. Lütfen dashboard üzerinden yeni hedefler kilitleyin.");
          break;
        case "2":
          setScreen("list");
          break;
        case "3":
          setScreen("list");
          alert("Kayıt Kalıcı İmha Protokolü: Silmek istediğiniz kaydın üzerine tıklayın veya listeden ID girin.");
          break;
        case "4":
          alert("=== SYSTEM INFODOC ===\nHumanbank v2.6 - Powered by Flask Local Engine.");
          break;
        case "5":
          alert("Şifreli fotoğraf okuma ve RAM-disk deşifresi doğrulanıyor.");
          break;
        case "6":
          // Smooth jump to Dashboard anchor
          const dashboardSec = document.getElementById("dashboard-preview");
          if (dashboardSec) {
            dashboardSec.scrollIntoView({ behavior: "smooth" });
          }
          break;
        case "7":
          setScreen("exit");
          break;
        default:
          break;
      }
    } else if (screen === "list") {
      if (cmd === "0") {
        setScreen("menu");
      } else {
        const idNum = parseInt(cmd, 10);
        const exists = targets.some(t => t.id === idNum);
        if (exists) {
          setSelectedTargetId(idNum);
          setScreen("detail");
        } else {
          alert("Hatalı Seçim veya Kayıt Bulunamadı.");
        }
      }
    } else if (screen === "detail") {
      if (cmd === "0" || cmd.toLowerCase() === "kp") {
        setScreen("menu");
      } else if (cmd.toLowerCase() === "list" || cmd === "2") {
        setScreen("list");
      }
    }
  };

  // HumanBANK ASCII Art Magenta
  const renderAsciiArt = () => {
    return (
      <pre className="text-fuchsia-500 font-mono text-[9px] sm:text-xs leading-none select-none my-4">
{` _   _                                ____    _    _   _ _  __
| | | |_   _ _ __ ___   __ _ _ __  | __ )  / \\  | \\ | | |/ /
| |_| | | | | '_ \` _ \\ / _\` | '_ \\ |  _ \\ / _ \\ |  \\| | ' / 
|  _  | |_| | | | | | | (_| | | | || |_) / ___ \\| |\\  | . \\ 
|_| |_|\\__,_|_| |_| |_|\\__,_|_| |_||____/_/   \\_\\_| \\_|_|\\_\\`}
      </pre>
    );
  };

  return (
    <div className="w-full bg-black rounded-xl border border-zinc-700 shadow-2xl overflow-hidden font-mono text-[11px] sm:text-xs leading-relaxed text-zinc-300">
      
      {/* OS Windows PowerShell Window Title bar */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-[#17171d] border-b border-zinc-800">
        <div className="flex items-center space-x-2">
          {/* Windows PowerShell Icon Mockup */}
          <span className="text-[10px] bg-[#002451] text-sky-400 p-0.5 rounded font-black leading-none drop-shadow">❯_</span>
          <span className="text-zinc-400 text-[11px] font-sans">Windows PowerShell</span>
        </div>
        <div className="flex space-x-2.5 text-zinc-500 text-xs">
          <span>—</span>
          <span>❑</span>
          <span className="hover:text-red-500 cursor-pointer">✕</span>
        </div>
      </div>

      {/* Terminal Content Screen Block */}
      <div ref={scrollContainerRef} className="p-4 sm:p-6 bg-black min-h-[420px] max-h-[500px] overflow-y-auto flex flex-col justify-between">
        
        <div className="space-y-4">
          
          {/* Authentic Authenticate Frame */}
          {screen === "auth" && (
            <div className="space-y-4">
              {renderAsciiArt()}
              <div className="text-rose-500 font-bold mb-4">Created by Volper.</div>

              {/* Cyan Header Box */}
              <div className="border border-cyan-500 bg-black/60 py-2.5 px-4 mb-4 text-center">
                <span className="text-zinc-150 font-bold tracking-widest uppercase">
                  HUMANBANK v2.6 – GÜVENLİ ERİŞİM PANELİ
                </span>
              </div>

              {/* Gold Security Message */}
              <div className="text-amber-500 font-bold flex items-center gap-1.5 pb-2 border-b border-[#1e40af]/30">
                🔒 Yetkilendirme Gerekli (Deneme: {authAttempts}/3)
              </div>

              {/* Dynamic User Credential Interactivity */}
              <div className="space-y-2 mt-4">
                {authStep === "username" ? (
                  <form onSubmit={handleUsernameSubmit} className="flex items-center gap-1">
                    <span className="text-zinc-100 font-bold mr-1">❯ Kullanıcı Adı:</span>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="bg-transparent text-emerald-450 border-none outline-none focus:ring-0 p-0 flex-grow font-mono"
                      autoFocus
                    />
                  </form>
                ) : (
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="text-zinc-100 font-bold mr-1">❯ Kullanıcı Adı:</span>
                      <span className="text-zinc-350">{username}</span>
                    </div>
                    <form onSubmit={handlePasswordSubmit} className="flex items-center gap-1">
                      <span className="text-zinc-100 font-bold mr-1">❯ Master Şifre:</span>
                      <input
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-transparent text-fuchsia-450 border-none outline-none focus:ring-0 p-0 flex-grow font-mono"
                        autoFocus
                      />
                    </form>
                  </div>
                )}
              </div>

              <div className="text-[10px] text-zinc-600 mt-4">
                İpucu: Giriş yapmak için herhangi bir kullanıcı adı yazıp Enter'layın, ardından şifre ekranında <span className="text-zinc-550 border border-zinc-800 px-1 py-0.2 rounded font-sans">volper</span> yazın.
              </div>

              {authError && (
                <div className="text-rose-500 font-bold animate-pulse mt-2">
                  [HATA] Geçersiz oturum açma kimlik bilgileri!
                </div>
              )}
            </div>
          )}

          {/* Main Dashboard Command Panel Menu view */}
          {screen === "menu" && (
            <div className="space-y-4">
              {renderAsciiArt()}
              <div className="text-rose-500 font-bold mb-4">Created by Volper.</div>

              {/* Selection board in thin blue bounds */}
              <div className="border border-blue-600/80 p-4 rounded-sm space-y-2.5 max-w-lg bg-zinc-950/20">
                <div onClick={() => setScreen("list")} className="text-sky-400 hover:text-sky-350 transition-colors cursor-pointer">
                  1 - Kişi Ekle (Yeni İstihbarat Hedefi)
                </div>
                <div onClick={() => setScreen("list")} className="text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer">
                  2 - Kişileri Listele & Komuta Paneli
                </div>
                <div onClick={() => setScreen("list")} className="text-rose-500 hover:text-rose-450 transition-colors cursor-pointer">
                  3 - Kişi Sil (Kayıt Kalıcı İmha)
                </div>
                <div onClick={() => alert("Sistem bilgileri ve şifreli .bin mimarı kılavuzu.")} className="text-green-400 hover:text-green-300 transition-colors cursor-pointer">
                  4 - Sistem Hakkında & Dokümantasyon
                </div>
                <div onClick={() => alert("RAM tabanlı geçici fotoğraf deşifre katmanı.")} className="text-fuchsia-400 hover:text-fuchsia-350 transition-colors cursor-pointer">
                  5 - Şifreli Fotoğraf Görüntüle (RAM)
                </div>
                <div 
                  onClick={() => {
                    const dashboardSec = document.getElementById("dashboard-preview");
                    dashboardSec?.scrollIntoView({ behavior: "smooth" });
                  }} 
                  className="text-purple-400 hover:text-purple-350 transition-colors cursor-pointer"
                >
                  6 - Web Dashboard Komuta Merkezini Başlat
                </div>
                <div onClick={() => setScreen("exit")} className="text-amber-500 hover:text-amber-400 transition-colors cursor-pointer">
                  7 - Güvenli Çıkış Yap
                </div>
              </div>

              <form onSubmit={handleCommandInputSubmit} className="flex items-center gap-1 pt-2">
                <span className="text-fuchsia-500 font-bold">❯ Seçiminiz (1-7):</span>
                <input
                  type="text"
                  value={commandInput}
                  onChange={(e) => setCommandInput(e.target.value)}
                  className="bg-transparent border-none outline-none focus:ring-0 p-0 text-white w-20"
                  autoFocus
                />
              </form>
            </div>
          )}

          {/* List Targets component with specific layout matching screenshots */}
          {screen === "list" && (
            <div className="space-y-4">
              <div className="border border-cyan-500 bg-[#0d0d0f]/60 py-1.5 px-4 text-center max-w-xl">
                <span className="text-cyan-400 font-bold uppercase tracking-wider text-xs">
                  VERİTABANINDAKİ AKTİF HEDEFLER (ÖZET)
                </span>
              </div>

              {/* Real Screenshot Table columns */}
              <div className="border-b border-blue-500/80 max-w-xl">
                <table className="w-full text-left font-mono">
                  <thead>
                    <tr className="text-fuchsia-500 border-b border-blue-500/80">
                      <th className="py-2 w-10">ID</th>
                      <th className="py-2 w-40">HEDEF AD SOYAD</th>
                      <th className="py-2 w-48">ŞEHİR</th>
                      <th className="py-2">GSM NUMARASI</th>
                    </tr>
                  </thead>
                  <tbody>
                    {targets.map((t) => (
                      <tr 
                        key={t.id} 
                        onClick={() => {
                          setSelectedTargetId(t.id);
                          setScreen("detail");
                        }}
                        className="hover:bg-zinc-900/60 cursor-pointer transition-colors border-b border-zinc-950"
                      >
                        <td className="py-2 text-green-450 font-bold">{t.id}</td>
                        <td className="py-2 text-white font-semibold">{t.name}</td>
                        <td className="py-2 text-zinc-400">{t.city}</td>
                        <td className="py-2 text-cyan-400 font-bold">{t.gsm}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Total Active targets count */}
              <div className="flex items-center gap-1.5 text-zinc-100 font-bold mt-2">
                🗂️ Sistemdeki Toplam Siber İz Sayısı: <span className="text-cyan-400 pl-1">{targets.length}</span>
              </div>

              {/* Yellow Tip Info box */}
              <div className="text-amber-500 text-xs font-semibold py-1">
                💡 İpucu: Detay için ID yazın, Ana menü için '0' yazın.
              </div>

              <form onSubmit={handleCommandInputSubmit} className="flex items-center gap-1 pt-2">
                <span className="text-fuchsia-500 font-bold">❯ Seçiminiz (ID / 0):</span>
                <input
                  type="text"
                  value={commandInput}
                  onChange={(e) => setCommandInput(e.target.value)}
                  className="bg-transparent border-none outline-none focus:ring-0 p-0 text-white w-20"
                  autoFocus
                />
              </form>
            </div>
          )}

          {/* Target details profile card screen matching screenshot 4 */}
          {screen === "detail" && selectedTargetId !== null && (
            (() => {
              const currentT = targets.find(t => t.id === selectedTargetId) || targets[3];
              return (
                <div className="space-y-4 max-w-xl">
                  
                  {/* Portrait File Header */}
                  <div className="border-double border-4 border-fuchsia-600 bg-black py-1 px-4 my-2 text-center text-fuchsia-400 font-bold text-xs uppercase flex items-center justify-center gap-1">
                    👤 HEDEF PROFİL DOSYASI: {currentT.name}
                  </div>

                  {/* Cyan Grid Box Details */}
                  <div className="border border-cyan-500 p-4 bg-zinc-950/20 rounded-sm space-y-4 text-zinc-200">
                    
                    {/* section 1 */}
                    <div className="space-y-1">
                      <div className="text-cyan-455 text-[10px] font-bold">
                        ─── KİMLİK & LOKASYON BİLGİLERİ ──────────────────
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <span className="text-zinc-500">Sistem ID:</span>
                        <span className="col-span-2 text-green-400 font-bold">{currentT.id}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <span className="text-zinc-500">T.C. Kimlik:</span>
                        <span className="col-span-2 text-zinc-200">{currentT.tckn}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <span className="text-zinc-500">Doğum Tarihi:</span>
                        <span className="col-span-2 text-zinc-400">{currentT.birthday}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <span className="text-zinc-500">Ülke / Şehir:</span>
                        <span className="col-span-2 text-zinc-200">/ {currentT.city}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <span className="text-zinc-500">Tam Adres:</span>
                        <span className="col-span-2 text-zinc-400">{currentT.address}</span>
                      </div>
                    </div>

                    {/* section 2 */}
                    <div className="space-y-1">
                      <div className="text-cyan-455 text-[10px] font-bold">
                        ─── İLETİŞİM & SOSYAL MEDYA ──────────────────────
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <span className="text-zinc-500">GSM No:</span>
                        <span className="col-span-2 text-cyan-400 font-bold">{currentT.gsm}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <span className="text-zinc-500">E-Posta:</span>
                        <span className="col-span-2 text-zinc-200">{currentT.email}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <span className="text-zinc-500">Instagram:</span>
                        <span className="col-span-2 text-zinc-200">{currentT.instagram}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <span className="text-zinc-500">TikTok:</span>
                        <span className="col-span-2 text-zinc-200">{currentT.tiktok}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <span className="text-zinc-500">Fotoğraf:</span>
                        <span className="col-span-2 text-yellow-500 font-bold">{currentT.photo}</span>
                      </div>
                    </div>

                    {/* section 3 */}
                    <div className="space-y-1">
                      <div className="text-cyan-455 text-[10px] font-bold">
                        ─── ÖZGEÇMİŞ & ARAŞTIRMA NOTLARI ──────────────────
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <span className="text-zinc-500">Eğitim:</span>
                        <span className="col-span-2 text-zinc-250 leading-tight">{currentT.education}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <span className="text-zinc-500">İş Geçmişi:</span>
                        <span className="col-span-2 text-zinc-400">{currentT.history}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <span className="text-zinc-500">Özel Notlar:</span>
                        <span className="col-span-2 text-yellow-100 font-sans italic">"{currentT.notes}"</span>
                      </div>
                    </div>

                  </div>

                  {/* Soyağacı section */}
                  <div className="text-zinc-300 font-medium py-1">
                    🌳 Soyağacı Bağlantıları: Anne ID: {currentT.parents.motherId} | Baba ID: {currentT.parents.fatherId}
                  </div>

                  {/* Anne Bilgi Kartı */}
                  <div className="border-l-2 border-green-500 pl-3 py-1 space-y-1">
                    <div className="text-green-500 text-[10px] font-bold">
                      👩 ANNE BİLGİ KARTI ──────────────────────────────
                    </div>
                    <div>Ad Soyad: <span className="text-white font-bold">{currentT.parents.motherName}</span></div>
                    <div>TC / GSM: <span className="text-zinc-500">/</span></div>
                    <div>Lokasyon: <span className="text-zinc-350">{currentT.parents.motherLocation}</span></div>
                  </div>

                  {/* Footer Box */}
                  <div className="border border-cyan-550 py-1.5 px-4 text-center mt-4">
                    <span className="text-cyan-400 font-bold uppercase tracking-wider text-[10px] block">
                      KOMUTA PANELİ
                    </span>
                  </div>

                  <form onSubmit={handleCommandInputSubmit} className="flex items-center gap-1 pt-2">
                    <span className="text-fuchsia-500 font-bold">❯ Seçiminiz (0 / list):</span>
                    <input
                      type="text"
                      value={commandInput}
                      onChange={(e) => setCommandInput(e.target.value)}
                      className="bg-transparent border-none outline-none focus:ring-0 p-0 text-white w-20"
                      autoFocus
                    />
                  </form>
                </div>
              );
            })()
          )}

          {/* Secure Logout Sequence */}
          {screen === "exit" && (
            <div className="border border-red-500 p-6 bg-red-950/10 rounded space-y-3 max-w-md text-center">
              <div className="text-red-500 font-bold text-sm tracking-widest">
                🔒 GÜVENLİ ÇIKILDI
              </div>
              <p className="text-zinc-400 text-xs font-sans">
                RAM verileri boşaltıldı, oturum kapatıldı. Dosyalar .bin içinde şifreli kalmaya devam ediyor.
              </p>
              <button
                onClick={() => {
                  setScreen("auth");
                  setUsername("");
                  setPassword("");
                  setAuthStep("username");
                  setAuthAttempts(1);
                }}
                className="bg-zinc-800 hover:bg-zinc-700 text-zinc-150 border border-zinc-700 px-3 py-1.5 text-xs rounded transition-all cursor-pointer"
              >
                Yeni Oturum Aç
              </button>
            </div>
          )}

        </div>

        {/* Console operational status info */}
        <div className="border-t border-zinc-900 pt-3 mt-6 flex items-center justify-between text-[10px] text-zinc-500 select-none">
          <span className="flex items-center gap-1 text-emerald-500">
            <Shield className="w-3.5 h-3.5 fill-emerald-950" /> Yerel Güvenli Oturum
          </span>
          <span className="opacity-60">Humanv2.6 @Volper</span>
        </div>

      </div>
    </div>
  );
}

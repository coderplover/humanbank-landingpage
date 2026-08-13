"use client";

import React, { useState, useEffect } from "react";
import { Shield, Key, EyeOff, Lock, Unlock, RefreshCw, FileText, Image as ImageIcon } from "lucide-react";

export default function SecurityHex() {
  const [fileType, setFileType] = useState<"json" | "bin">("json");
  const [viewState, setViewState] = useState<"plain" | "process" | "hex">("plain");
  const [isProcessing, setIsProcessing] = useState(false);

  // Mock text JSON data
  const plainJsonString = JSON.stringify({
    kayit_no: 4,
    ad_soyad: "Burak Aksoy",
    tc_kimlik: "39420846194",
    konum: "İzmir/Bornova",
    soyagaci: { anne_id: "7", baba_id: "-" },
    arastirma_notlari: "Siber güvenlik alanında yerel ağ izleme notları mevcuttur."
  }, null, 2);

  // Mock encrypted strings
  const encryptedJson = "U2FsdGVkX1+zTzHjM3JmN8kXg2U9h0QkE3rJyW/FlsZ7t9W1qP+Ecl9k1w3uJ4iOh8FhM3y4P1bL9G+w6Z...";
  
  const mockHexBytes = [
    "4B", "69", "6C", "69", "74", "6C", "69", "25", "4A", "47", "43", "4D", "FF", "0E", "2A", "9C",
    "8B", "7A", "6D", "5C", "4B", "3A", "29", "18", "07", "D6", "E5", "F4", "A3", "B2", "C1", "D0",
    "E9", "A1", "3F", "8B"
  ];

  const triggerEncryption = () => {
    setIsProcessing(true);
    setViewState("process");
    setTimeout(() => {
      setViewState("hex");
      setIsProcessing(false);
    }, 1200);
  };

  const triggerDecryption = () => {
    setIsProcessing(true);
    setViewState("process");
    setTimeout(() => {
      setViewState("plain");
      setIsProcessing(false);
    }, 1200);
  };

  return (
    <div className="w-full bg-[#030612] border border-[#0d224d] rounded-2xl p-6 shadow-2xl space-y-6 text-zinc-300 font-mono text-xs">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#0f2142] pb-4">
        
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-950/60 border border-emerald-500/50 flex items-center justify-center text-emerald-450 shrink-0">
            <Lock className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white tracking-wide font-sans">Humanbank Kriptoloji Analiz Laboratuvarı</h4>
            <p className="text-[10px] text-zinc-550">AES-256-GCM & PBKDF2 Şifreleme Altyapısı</p>
          </div>
        </div>

        {/* Toggle between JSON and BIN file simulation */}
        <div className="flex bg-[#02040a] p-1 rounded-lg border border-[#0e2142] text-[10px] text-zinc-500 font-mono">
          <button
            onClick={() => {
              setFileType("json");
              setViewState("plain");
            }}
            className={`px-3 py-1.5 rounded transition-all cursor-pointer flex items-center gap-1 ${
              fileType === "json" ? "bg-cyan-600 text-black font-bold" : "hover:text-zinc-300"
            }`}
          >
            <FileText className="w-3.5 h-3.5" /> Metin Verileri (.json)
          </button>
          <button
            onClick={() => {
              setFileType("bin");
              setViewState("plain");
            }}
            className={`px-3 py-1.5 rounded transition-all cursor-pointer flex items-center gap-1 ${
              fileType === "bin" ? "bg-cyan-600 text-black font-bold" : "hover:text-zinc-300"
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" /> Medya Dosyaları (.bin)
          </button>
        </div>

      </div>

      {/* Description Info Banner */}
      <div className="bg-[#030612] border-l-2 border-cyan-500 p-3 text-[11px] text-zinc-400 font-sans leading-normal">
        {fileType === "json" ? (
          <span>
            <strong>Metin Tabanlı Arşiv (.json):</strong> TCKN, telefon numaraları, anne/baba bağlantıları ve araştırma notları tek bir JSON yapısı içinde saklanır ve diske şifreli yazılarak yetkisiz erişimlerin önüne geçilir.
          </span>
        ) : (
          <span>
            <strong>Şifreli Medya Kanıtları (.bin):</strong> Çekilen/eklenen fotoğraflar disk üzerinde ayrı dosyalar halinde şifreli `.bin` formatında tutulur. Sadece uygulama içinde geçici olarak deşifre edilip RAM'e yüklenirler.
          </span>
        )}
      </div>

      {/* Visual Workspace Screen */}
      <div className="relative bg-[#02040a] border border-[#0f2142] rounded-xl p-4 min-h-[200px] flex items-center justify-center overflow-hidden">
        
        {/* State 1: Plain view (Ham veri) */}
        {viewState === "plain" && (
          <div className="w-full space-y-3 z-10">
            <span className="text-[10px] text-zinc-650 block uppercase tracking-wider">Deşifre Edilmiş Ham Veri (RAM Bellek Sınırı)</span>
            
            {fileType === "json" ? (
              <pre className="bg-[#060b18] border border-[#0d224d] p-3 rounded-lg text-cyan-400 text-[10px] leading-relaxed overflow-x-auto whitespace-pre">
                {plainJsonString}
              </pre>
            ) : (
              <div className="bg-[#060b18] border border-[#0d224d] p-4 rounded-lg flex flex-col items-center justify-center text-center space-y-3">
                <div className="w-16 h-16 rounded border border-emerald-500/20 bg-[#02050f] flex items-center justify-center text-emerald-400">
                  <ImageIcon className="w-8 h-8" />
                </div>
                <div className="text-[10px] text-zinc-400">
                  <span className="text-zinc-550 block">Dosya Adı: kanit_burak_aksoy.png</span>
                  <span>Boyut: 412 KB | Format: Image/PNG</span>
                </div>
              </div>
            )}
            
            <p className="text-[10px] text-amber-500 font-sans text-center">
              ⚠️ Bu veriler RAM'dedir. Güvenli kilit sistemi kapatıldığında bu haliyle diske kaydedilmez.
            </p>
          </div>
        )}

        {/* State 2: Key Derivation Processing */}
        {viewState === "process" && (
          <div className="w-full space-y-4 z-10 max-w-md text-center py-6">
            <div className="flex items-center justify-center gap-3">
              <RefreshCw className="w-5 h-5 text-cyan-400 animate-spin" />
              <span className="text-cyan-400 font-bold uppercase tracking-wider text-xs">
                AES-256-GCM İşlemci Modu Aktif
              </span>
            </div>
            
            <div className="grid grid-cols-3 gap-2 text-[10px] mt-2 h-auto text-left">
              <div className="bg-[#05070e] border border-[#0e2142] p-2 rounded">
                <span className="text-[#a755e0] font-bold block mb-0.5">1. Master Şifre</span>
                <span className="text-zinc-500">Tuzlanarak (Salt) benzersiz kılınır.</span>
              </div>
              <div className="bg-[#05070e] border border-[#0e2142] p-2 rounded">
                <span className="text-amber-500 font-bold block mb-0.5">2. PBKDF2</span>
                <span className="text-zinc-500">100.000 iterasyonla anahtar türetilir.</span>
              </div>
              <div className="bg-[#05070e] border border-[#0e2142] p-2 rounded">
                <span className="text-emerald-500 font-bold block mb-0.5">3. AES Blok</span>
                <span className="text-zinc-500">GCM kimlik doğrulamalı veri şifrelenir.</span>
              </div>
            </div>
          </div>
        )}

        {/* State 3: Encrypted Output */}
        {viewState === "hex" && (
          <div className="w-full space-y-3 z-10">
            <div className="flex justify-between items-center text-[10px] text-zinc-500 border-b border-[#0f2142] pb-1.5">
              <span className="uppercase font-bold text-red-500">
                {fileType === "json" ? "ŞİFRELENMİŞ DOSYA: database.json" : "ŞİFRELENMİŞ DOSYA: media_42bf8ae9.bin"}
              </span>
              <span className="font-semibold text-red-400 flex items-center gap-1 uppercase">
                <EyeOff className="w-3.5 h-3.5" /> Okunamaz / Bloklanmış
              </span>
            </div>

            {fileType === "json" ? (
              <div className="bg-[#060b18] border border-[#0d224d] p-3 rounded-lg text-red-500 font-bold break-all text-[10px]">
                {encryptedJson}
              </div>
            ) : (
              <div className="grid grid-cols-6 sm:grid-cols-12 gap-1.5 text-center font-bold text-red-500 text-[10px]">
                {mockHexBytes.map((byte, i) => (
                  <span 
                    key={i} 
                    className="bg-red-950/20 border border-red-900/20 rounded py-1 transition-all select-all font-mono"
                    title={`Offset: 0x${(i * 2).toString(16).toUpperCase().padStart(4, "0")}`}
                  >
                    {byte}
                  </span>
                ))}
                <span className="col-span-full text-zinc-650 tracking-widest pt-2">... byte veri akışı devam ediyor ...</span>
              </div>
            )}

            <p className="text-[10px] text-zinc-550 text-center font-sans">
              Disk üzerinde saklanan kilitli dosya verisi yukarıdaki gibidir. Çift katmanlı şifre anahtarı olmadan bu bloklar çözülemez.
            </p>
          </div>
        )}

      </div>

      {/* Action Controls */}
      <div className="flex items-center justify-center gap-3">
        {viewState === "plain" && (
          <button
            onClick={triggerEncryption}
            className="bg-cyan-600 hover:bg-cyan-500 text-black font-extrabold rounded-lg px-4 py-2.5 transition-colors flex items-center gap-1.5 cursor-pointer uppercase text-[10px]"
          >
            <Shield className="w-4 h-4" /> Diske Güvenli Kaydet ve Şifrele
          </button>
        )}
        
        {viewState === "hex" && (
          <button
            onClick={triggerDecryption}
            className="bg-emerald-600 hover:bg-emerald-500 text-black font-extrabold rounded-lg px-4 py-2.5 transition-colors flex items-center gap-1.5 cursor-pointer uppercase text-[10px]"
          >
            <Unlock className="w-4 h-4" /> RAM Bellekte Geçici Şifreyi Çöz
          </button>
        )}

        {viewState === "process" && (
          <button
            disabled
            className="opacity-50 bg-[#05070e] text-zinc-600 border border-[#0e2142] font-semibold rounded-lg px-4 py-2.5 transition-colors flex items-center gap-1.5 text-[10px]"
          >
            <RefreshCw className="w-4 h-4 animate-spin" /> Kripto Katman İşleniyor...
          </button>
        )}
      </div>

    </div>
  );
}

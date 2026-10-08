"use client";

import React, { useState } from "react";
import { Heart, MessageSquare, BookOpen, Wind, PhoneCall, Sparkles } from "lucide-react";

export default function MenteaApp() {
  const [activeTab, setActiveTab] = useState("home");
  const [mood, setMood] = useState<string | null>(null);

  const moods = [
    { label: "Radiante", emoji: "✨" },
    { label: "Tranquilo", emoji: "🌿" },
    { label: "Ansioso", emoji: "🌪️" },
    { label: "Abrumado", emoji: "🌧️" },
  ];

  return (
    <div className="min-h-screen bg-[#F9F8FC] text-[#2E1065] flex flex-col justify-between max-w-md mx-auto shadow-xl border-x border-purple-100">
      <header className="p-4 bg-white border-b border-purple-100 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">M</div>
          <h1 className="text-xl font-bold text-purple-900 tracking-tight">Mentea</h1>
        </div>
        <button className="flex items-center gap-1 text-xs bg-red-50 text-red-600 font-semibold px-3 py-1.5 rounded-full border border-red-200">
          <PhoneCall size={14} /> Crisis 24/7
        </button>
      </header>

      <main className="p-4 flex-1 space-y-6">
        {activeTab === "home" && (
          <>
            <section className="bg-gradient-to-br from-purple-700 to-purple-900 text-white p-5 rounded-2xl shadow-sm">
              <span className="text-xs font-medium bg-purple-500/30 px-2.5 py-1 rounded-full text-purple-100 border border-purple-400/20">Tu espacio seguro</span>
              <h2 className="text-xl font-bold mt-2">¿Cómo te sientes hoy?</h2>
              <p className="text-purple-200 text-sm mt-1">Registra tu emoción para personalizar tu día.</p>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {moods.map((m) => (
                  <button key={m.label} onClick={() => setMood(m.label)} className={`p-3 rounded-xl flex items-center gap-2 font-medium text-sm transition-all ${mood === m.label ? "bg-white text-purple-900 font-bold" : "bg-purple-800/40 text-white"}`}>
                    <span>{m.emoji}</span>{m.label}
                  </button>
                ))}
              </div>
            </section>

            <section className="space-y-3">
              <h3 className="font-bold text-purple-900 text-sm tracking-wide uppercase">Herramientas rápidas</h3>
              <div className="grid grid-cols-2 gap-3">
                <button onClick={() => setActiveTab("breath")} className="p-4 bg-white rounded-2xl border border-purple-100 shadow-sm text-left">
                  <Wind className="text-purple-600 mb-2" size={24} />
                  <p className="font-bold text-sm text-purple-900">Respiración</p>
                  <p className="text-xs text-purple-600/70 mt-0.5">Calma tu mente</p>
                </button>
                <button onClick={() => setActiveTab("chat")} className="p-4 bg-white rounded-2xl border border-purple-100 shadow-sm text-left">
                  <MessageSquare className="text-purple-600 mb-2" size={24} />
                  <p className="font-bold text-sm text-purple-900">Asistente IA</p>
                  <p className="text-xs text-purple-600/70 mt-0.5">Desahógate</p>
                </button>
              </div>
            </section>
          </>
        )}

        {activeTab === "breath" && (
          <section className="text-center py-10 space-y-6">
            <h2 className="text-2xl font-bold text-purple-900">Respiración 4-7-8</h2>
            <div className="w-40 h-40 bg-purple-200 rounded-full mx-auto flex items-center justify-center animate-pulse border-4 border-purple-400">
              <span className="text-purple-900 font-bold text-lg">Inhala / Exhala</span>
            </div>
            <button onClick={() => setActiveTab("home")} className="text-xs text-purple-600 underline font-medium">Volver</button>
          </section>
        )}

        {activeTab === "chat" && (
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-purple-900">Chat de Apoyo</h2>
            <div className="bg-white p-4 rounded-2xl border border-purple-100 h-64 flex items-center justify-center text-purple-500 text-sm">
              Escribe lo que sientes. Estoy aquí para escucharte.
            </div>
            <div className="flex gap-2">
              <input type="text" placeholder="Escribe un mensaje..." className="flex-1 p-3 rounded-xl border border-purple-200 text-sm" />
              <button className="bg-purple-700 text-white px-4 py-3 rounded-xl font-bold text-sm">Enviar</button>
            </div>
          </section>
        )}
      </main>

      <nav className="bg-white border-t border-purple-100 p-3 flex justify-around sticky bottom-0 z-10">
        {[
          { id: "home", label: "Inicio", icon: Sparkles },
          { id: "chat", label: "Chat IA", icon: MessageSquare },
          { id: "breath", label: "Calma", icon: Wind },
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex flex-col items-center gap-1 text-xs ${activeTab === tab.id ? "text-purple-700 font-bold" : "text-purple-400"}`}>
              <Icon size={20} />{tab.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
}

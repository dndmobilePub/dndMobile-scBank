"use client";
import { useState, useMemo, type ReactNode } from "react";
import {
  Search,
  ExternalLink,
  CheckCircle2,
  Clock,
  AlertCircle,
  ChevronDown,
  LayoutGrid,
  List as ListIcon,
  FileText,
  Smartphone,
  X,
  Maximize2,
} from "lucide-react";

import { ScBox, ScVFlex, ScHFlex, ScText } from "../scBank-components/component/index";

import { motion, AnimatePresence } from "motion/react";
import { PAGES_DATA, Status, PageItem } from "./index";

const STATUS_COLORS: Record<Status, string> = {
  Complete: "bg-emerald-50 text-emerald-700 border-emerald-200",
  "In Progress": "bg-blue-50 text-blue-700 border-blue-200",
  Pending: "bg-slate-50 text-slate-500 border-slate-200",
  Review: "bg-amber-50 text-amber-700 border-amber-200",
};

const STATUS_ICONS: Record<Status, ReactNode> = {
  Complete: <CheckCircle2 size={14} />,
  "In Progress": <Clock size={14} />,
  Pending: <AlertCircle size={14} />,
  Review: <FileText size={14} />,
};

export default function App() {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<Status | "All">("All");
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [selectedPage, setSelectedPage] = useState<PageItem | null>(null);

  const filteredPages = useMemo(() => {
    return PAGES_DATA.filter((page) => {
      const matchesSearch =
        page.pageName.toLowerCase().includes(search.toLowerCase()) ||
        page.category.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = filterStatus === "All" || page.status === filterStatus;
      return matchesSearch && matchesStatus;
    });
  }, [search, filterStatus]);

  const stats = useMemo(() => {
    const total = PAGES_DATA.length;
    const complete = PAGES_DATA.filter((p) => p.status === "Complete").length;
    const progress = Math.round((complete / total) * 100);
    return { total, complete, progress };
  }, []);

  return (
    <div className="h-screen bg-[#F8F9FA] text-[#1A1A1A] font-sans selection:bg-black selection:text-white flex flex-col overflow-hidden">
      {/* Header */}
      <header className="bg-white border-b border-black/5 shrink-0 z-50">
        <ScHFlex className="max-w-[1600px] mx-auto px-6 h-20 items-center justify-between">
          <ScHFlex g={8} className="items-center">
            <ScVFlex className="w-10 h-10 bg-black rounded-lg items-center justify-center text-white font-bold italic">
              SC
            </ScVFlex>
            <ScBox>
              <ScText as="h1" className="text-lg font-bold tracking-tight" value="퍼블 리스트" />
              <ScText
                as="p"
                className="text-[10px] uppercase tracking-widest text-black/40 font-mono"
                value="Ver 1.0.6 / 2026-03-30"
              />
            </ScBox>
          </ScHFlex>

          <ScBox>
            <ScHFlex g={20} className="items-center text-xs font-mono">
              <ScVFlex className="flex-col items-end">
                <ScText as="span" className="opacity-40 uppercase" value="Total" />
                <ScText as="span" className="font-bold" value={stats.total} />
              </ScVFlex>
              <ScVFlex className="flex-col items-end">
                <ScText as="span" className="opacity-40 uppercase" value="Complete" />
                <ScText as="span" className="font-bold text-emerald-600" value={stats.complete} />
              </ScVFlex>
              <ScVFlex className="flex-col items-end">
                <ScText as="span" className="opacity-40 uppercase" value="Progress" />
                <ScText as="span" className="font-bold" value={`${stats.progress}%`} />
              </ScVFlex>
            </ScHFlex>
            <div className="w-px h-8 bg-black/5 hidden lg:block" />
            {/* <button className="px-4 py-2 bg-black text-white text-xs font-medium rounded-md hover:opacity-80 transition-opacity">
              Export CSV
            </button> */}
          </ScBox>
        </ScHFlex>
      </header>

      <ScHFlex className="flex-1 overflow-hidden">
        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto custom-scrollbar">
          <ScBox className="max-w-[1600px] mx-auto px-6 py-10 pb-32">
            {/* Controls */}
            <ScHFlex className="flex-col md:flex-row gap-4 mb-8 items-center justify-between">
              <ScBox className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-black/30" size={18} />
                <input
                  type="text"
                  placeholder="Search by page name or category..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-black/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 transition-all text-sm"
                />
              </ScBox>

              <ScHFlex className="items-center gap-3 w-full md:w-auto">
                <ScHFlex className=" items-center gap-2 bg-white border border-black/5 p-1 rounded-lg">
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-1.5 rounded-md transition-all ${viewMode === "list" ? "bg-black text-white shadow-sm" : "text-black/40 hover:text-black"}`}
                  >
                    <ListIcon size={18} />
                  </button>
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-1.5 rounded-md transition-all ${viewMode === "grid" ? "bg-black text-white shadow-sm" : "text-black/40 hover:text-black"}`}
                  >
                    <LayoutGrid size={18} />
                  </button>
                </ScHFlex>

                <ScBox className="relative group flex-1 md:flex-none">
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value as Status | "All")}
                    className="appearance-none w-full md:w-40 pl-4 pr-10 py-2.5 bg-white border border-black/5 rounded-lg text-sm focus:outline-none cursor-pointer"
                  >
                    <option value="All">All Status</option>
                    <option value="Complete">Complete</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Review">Review</option>
                    <option value="Pending">Pending</option>
                  </select>
                  <ChevronDown
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-black/30 pointer-events-none"
                    size={16}
                  />
                </ScBox>
              </ScHFlex>
            </ScHFlex>

            {/* List View */}
            <AnimatePresence mode="wait">
              {viewMode === "list" ? (
                <motion.div
                  key="list"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-white border border-black/5 rounded-xl overflow-hidden shadow-sm"
                >
                  <ScBox className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-[#F1F3F5] border-b border-black/5">
                          <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-mono text-black/40">
                            No.
                          </th>
                          <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-mono text-black/40">
                            Category
                          </th>
                          <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-mono text-black/40">
                            Page Name
                          </th>
                          <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-mono text-black/40">
                            Path
                          </th>
                          <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-mono text-black/40">
                            Status
                          </th>
                          <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-mono text-black/40">
                            Date
                          </th>
                          <th className="px-6 py-4 text-[10px] uppercase tracking-widest font-mono text-black/40 text-right">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-black/5">
                        {filteredPages.map((page) => (
                          <tr
                            key={page.id}
                            className={`hover:bg-black/1 transition-colors group cursor-pointer ${selectedPage?.id === page.id ? "bg-black/3" : ""}`}
                          >
                            <td className="px-6 py-4 text-xs font-mono opacity-40">
                              {String(page.id).padStart(2, "0")}
                            </td>
                            <td className="px-6 py-4">
                              <span className="text-[10px] px-2 py-1 bg-black/5 rounded font-mono uppercase tracking-wider">
                                {page.category}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex flex-col">
                                <span
                                  className="text-sm font-bold group-hover:underline decoration-black/20 underline-offset-4"
                                  onClick={() => {
                                    console.log("1234");
                                  }}
                                >
                                  {page.pageName}
                                </span>
                                {/* <span className="text-[10px] text-black/40 mt-0.5">{page.memo}</span> */}
                              </div>
                            </td>
                            <td className="px-6 py-4 text-xs font-mono text-black/60">{page.path}</td>
                            <td className="px-6 py-4">
                              <div
                                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-bold uppercase tracking-wider ${STATUS_COLORS[page.status]}`}
                              >
                                {STATUS_ICONS[page.status]}
                                {page.status}
                              </div>
                            </td>
                            <td className="px-6 py-4 text-xs font-mono opacity-60">{page.completionDate}</td>
                            <td className="px-6 py-4 text-right">
                              <div className="flex items-center justify-end gap-3">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedPage(page);
                                  }}
                                  className="p-1.5 text-black/20 hover:text-black transition-colors"
                                  title="Preview"
                                >
                                  <Smartphone size={16} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </ScBox>
                  {filteredPages.length === 0 && (
                    <div className="py-20 text-center">
                      <p className="text-sm text-black/40 italic font-serif">검색된 페이지 없음.</p>
                    </div>
                  )}
                </motion.div>
              ) : (
                /* Grid View */
                <motion.div
                  key="grid"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                  {filteredPages.map((page) => (
                    <div
                      key={page.id}
                      onClick={() => setSelectedPage(page)}
                      className={`bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition-all group cursor-pointer ${selectedPage?.id === page.id ? "border-black ring-1 ring-black" : "border-black/5"}`}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-[10px] px-2 py-1 bg-black/5 rounded font-mono uppercase tracking-wider">
                          {page.category}
                        </span>
                        <div className={`p-1.5 rounded-full border ${STATUS_COLORS[page.status]}`}>
                          {STATUS_ICONS[page.status]}
                        </div>
                      </div>
                      <h3 className="font-bold text-base mb-1">{page.pageName}</h3>
                      <p className="text-xs text-black/40 mb-4 line-clamp-1">{page.memo}</p>
                      <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                        <span className="text-[10px] font-mono opacity-40">{page.path}</span>
                        <div className="flex items-center gap-2">
                          <Smartphone size={14} className="text-black/20 group-hover:text-black transition-colors" />
                          <ExternalLink size={14} className="text-black/20 group-hover:text-black transition-colors" />
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Footer inside scroll area for better UX */}
            <footer className="mt-20 py-12 border-t border-black/5 flex justify-between items-center">
              <p className="text-[10px] font-mono opacity-40 uppercase tracking-widest">
                © 2026 Internal Publishing Dashboard
              </p>
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-[10px] font-mono opacity-40 uppercase tracking-widest">Server Online</span>
                </div>
              </div>
            </footer>
          </ScBox>
        </main>

        {/* Mobile Preview Sidebar - Fixed to the right */}
        <AnimatePresence>
          {selectedPage && (
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute md:relative top-0 right-0 h-full w-full md:w-[450px] bg-white border-l border-black/5 shadow-2xl z-40 flex flex-col shrink-0"
            >
              <div className="p-6 border-b border-black/5 flex items-center justify-between bg-white shrink-0">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg border ${STATUS_COLORS[selectedPage.status]}`}>
                    {STATUS_ICONS[selectedPage.status]}
                  </div>
                  <div>
                    <h2 className="text-sm font-bold leading-tight">{selectedPage.pageName}</h2>
                    <p className="text-[10px] font-mono opacity-40 uppercase tracking-widest">
                      {selectedPage.category}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => window.open(selectedPage.path, "_blank")}
                    className="p-2 hover:bg-black/5 rounded-full transition-colors"
                    title="Open in new tab"
                  >
                    <Maximize2 size={18} />
                  </button>
                  <button
                    onClick={() => setSelectedPage(null)}
                    className="p-2 hover:bg-black/5 rounded-full transition-colors"
                    title="Close"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-8 bg-[#F1F3F5] flex flex-col items-center custom-scrollbar">
                {/* Device Frame */}
                <div className="sticky top-0 flex flex-col items-center">
                  <div className="relative w-[320px] h-[640px] bg-black rounded-[40px] border-8 border-black shadow-2xl overflow-hidden ring-4 ring-black/5">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20" />
                    {/* Screen Content */}
                    <div className="w-full h-full bg-white relative flex flex-col overflow-y-auto custom-scrollbar">
                      {/* Mobile Status Bar Mockup */}
                      <div className="h-12 w-full flex items-center justify-between px-8 shrink-0">
                        <span className="text-[10px] font-bold">9:41</span>
                        <div className="flex items-center gap-1.5">
                          <div className="w-3.5 h-2 border border-black/20 rounded-sm" />
                          <div className="w-3 h-3 bg-black/20 rounded-full" />
                        </div>
                      </div>

                      {/* Dynamic Mock Content */}
                      <div className="flex-1 px-5 pb-10">
                        {selectedPage.category === "Main" ? (
                          <div className="text-left">
                            <div className="w-full aspect-4/3 bg-black/5 rounded-2xl mb-6 flex items-center justify-center">
                              <Smartphone size={40} className="text-black/10" />
                            </div>
                            <h2 className="text-2xl font-serif font-bold mb-2 leading-tight">
                              Welcome to {selectedPage.pageName}
                            </h2>
                            <p className="text-xs text-black/40 mb-8 leading-relaxed">
                              Experience the new standard of digital publishing with our latest updates.
                            </p>
                            <div className="grid grid-cols-2 gap-3 mb-8">
                              <div className="aspect-square bg-black/5 rounded-xl p-4 flex flex-col justify-end">
                                <div className="w-8 h-8 bg-black/10 rounded-lg mb-2" />
                                <span className="text-[10px] font-bold uppercase tracking-wider">Features</span>
                              </div>
                              <div className="aspect-square bg-black/5 rounded-xl p-4 flex flex-col justify-end">
                                <div className="w-8 h-8 bg-black/10 rounded-lg mb-2" />
                                <span className="text-[10px] font-bold uppercase tracking-wider">Services</span>
                              </div>
                            </div>
                            <button className="w-full py-4 bg-black text-white text-[10px] font-bold uppercase tracking-widest rounded-xl">
                              Get Started
                            </button>
                          </div>
                        ) : selectedPage.category === "Sub" ? (
                          <div className="text-left">
                            <div className="flex items-center gap-2 mb-8">
                              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white text-[10px] font-bold">
                                P.
                              </div>
                              <span className="text-xs font-bold uppercase tracking-widest">Navigation</span>
                            </div>
                            <h2 className="text-xl font-bold mb-6">{selectedPage.pageName}</h2>
                            <div className="space-y-4">
                              {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="flex items-center justify-between py-4 border-b border-black/5">
                                  <span className="text-sm font-medium">Menu Item 0{i}</span>
                                  <ChevronDown className="-rotate-90 text-black/20" size={14} />
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <div className="text-left">
                            <div className="flex items-center justify-between mb-8">
                              <h2 className="text-xl font-bold">{selectedPage.pageName}</h2>
                              <div className="w-8 h-8 bg-black/5 rounded-full flex items-center justify-center">
                                <LayoutGrid size={14} className="text-black/40" />
                              </div>
                            </div>
                            <div className="space-y-6">
                              {[1, 2, 3].map((i) => (
                                <div key={i} className="group">
                                  <div className="w-full aspect-video bg-black/5 rounded-xl mb-3" />
                                  <div className="w-1/3 h-2 bg-black/20 rounded mb-2" />
                                  <div className="w-full h-2 bg-black/5 rounded" />
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Mobile Bottom Bar Mockup */}
                      <div className="h-16 border-t border-black/5 flex items-center justify-around px-4 shrink-0 bg-white/80 backdrop-blur-md">
                        <div className="w-6 h-6 bg-black rounded-sm" />
                        <div className="w-6 h-6 bg-black/10 rounded-sm" />
                        <div className="w-6 h-6 bg-black/10 rounded-sm" />
                        <div className="w-6 h-6 bg-black/10 rounded-sm" />
                      </div>
                    </div>
                  </div>

                  {/* <div className="mt-6 text-center">
                    <p className="text-[10px] font-mono opacity-40 uppercase tracking-widest mb-1">
                      Device: iPhone 14 Pro Mockup
                    </p>
                    <p className="text-[10px] font-mono opacity-40 uppercase tracking-widest">Resolution: 393 x 852</p>
                  </div> */}
                </div>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>
      </ScHFlex>
    </div>
  );
}

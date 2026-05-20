"use client";

import { ReactNode, useState } from "react";
import { IconType } from "react-icons";
import { CgSmartHomeLight } from "react-icons/cg";
import { FaLaptopCode } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { IoMdFitness } from "react-icons/io";
import { IoGameControllerOutline } from "react-icons/io5";
import { LuAudioWaveform } from "react-icons/lu";
import { MdOutlineKeyboardAlt } from "react-icons/md";
import { PiOfficeChairLight } from "react-icons/pi";
import { RiPlantLine } from "react-icons/ri";
import { TbDesk } from "react-icons/tb";

// ─── Types ────────────────────────────────────────────────────────────────────

interface LeftSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

interface NavItem {
  icon: ReactNode;
  label: string;
  children?: ReactNode;
}

interface ActivityItem {
  color: string;
  label: string;
  time: string;
}

interface ProgressItem {
  label: string;
  value: string;
  bar: string;
  color: string;
}

type TagKey = "Design" | "Backend" | "Frontend" | "DevOps";

interface TaskCard {
  title: string;
  tag: TagKey;
  status: string;
  progress: number;
}

interface StatItem {
  label: string;
  value: string;
  delta: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const tagColorMap: Record<TagKey, string> = {
  Design: "text-violet-300 bg-violet-500/10",
  Backend: "text-emerald-300 bg-emerald-500/10",
  Frontend: "text-sky-300 bg-sky-500/10",
  DevOps: "text-amber-300 bg-amber-500/10",
};

// ─── Left Sidebar ─────────────────────────────────────────────────────────────

function LeftSidebar({ collapsed, onToggle }: LeftSidebarProps) {
  const [activeTab, setActiveTab] = useState<string>("Monitors");
  const navItems: NavItem[] = [
    { icon: <FiMonitor />, label: "Monitors", children: <>Monitors</> },
    {
      icon: <PiOfficeChairLight />,
      label: "Furniture",
      children: <>Furniture</>,
    },
    {
      icon: <MdOutlineKeyboardAlt />,
      label: "Office Accesories",
      children: <>Office Accessories</>,
    },
    {
      icon: <CgSmartHomeLight />,
      label: "Smart Home",
      children: <>Smart Home</>,
    },
    { icon: <FaLaptopCode />, label: "Computer", children: <>Computer</> },
    {
      icon: <IoGameControllerOutline />,
      label: "Gaming",
      children: <>Gaming</>,
    },
    {
      icon: <LuAudioWaveform />,
      label: "Audio & Video",
      children: <>Audio & Video</>,
    },
    {
      icon: <IoMdFitness />,
      label: "Health & Fitness",
      children: <>Health & Fitness</>,
    },
  ];

  return (
    <aside
      className={`
        relative flex flex-col h-full
        bg-[#0f0f13] border-r border-white/[0.06]
        transition-all duration-300 ease-in-out
        ${collapsed ? "w-0 p-0" : "w-[400px] p-2"}
      `}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 py-5 border-b border-white/[0.06]">
        <span className="flex-shrink-0 w-7 h-7 rounded-md bg-violet-500 flex items-center justify-center text-xs font-bold text-white">
          M
        </span>
        {!collapsed && (
          <span className="text-white font-semibold tracking-tight truncate">
            Monis - See Your Dream Workspace
          </span>
        )}
      </div>

      {/* Nav */}
      <nav className="flex flex-row py-4 space-y-0.5 overflow-auto nav-scroll">
        {navItems.map(({ icon, label }) => (
          <button
            key={label}
            onClick={() => setActiveTab(label)}
            className={`
              w-full flex items-center gap-3 px-2 py-2 rounded-md text-sm
              transition-colors duration-150
              ${
                activeTab === label
                  ? "bg-violet-500/15 text-violet-300"
                  : "text-white/40 hover:text-white/80 hover:bg-white/[0.04]"
              }
            `}
          >
            <span className="flex-shrink-0 text-base text-center">{icon}</span>
            <span className="truncate">{label}</span>
          </button>
        ))}
      </nav>

      <div className="overflow-y-auto">
        {navItems.find((item) => item.label === activeTab)?.children}
      </div>

      {/* Collapse toggle */}
      <button
        onClick={onToggle}
        className="
          absolute -right-5 top-1/2 -translate-y-1/2 z-10
          w-10 h-10 rounded-full pl-1 pb-1
          bg-[#1a1a22] border border-white/[0.12]
          flex items-center justify-center
          text-white/40 hover:text-white/80
          transition-colors duration-150
          text-[30px]
        "
      >
        {collapsed ? "›" : "‹"}
      </button>
    </aside>
  );
}

// ─── Right Sidebar ────────────────────────────────────────────────────────────

function RightSidebar() {
  const activity: ActivityItem[] = [
    { color: "bg-violet-400", label: "Design review pushed", time: "2m ago" },
    { color: "bg-emerald-400", label: "Sprint #12 started", time: "1h ago" },
    { color: "bg-amber-400", label: "API quota at 80%", time: "3h ago" },
    { color: "bg-pink-400", label: "New member joined", time: "5h ago" },
  ];

  const progressItems: ProgressItem[] = [
    { label: "Tasks done", value: "24", bar: "w-3/4", color: "bg-violet-500" },
    { label: "PRs merged", value: "8", bar: "w-1/2", color: "bg-emerald-500" },
    { label: "Issues open", value: "3", bar: "w-1/4", color: "bg-amber-500" },
  ];

  return (
    <aside className="w-[260px] flex-shrink-0 h-full bg-[#0f0f13] border-l border-white/[0.06] flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="px-4 py-5 border-b border-white/[0.06]">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-white/30">
          Activity
        </h2>
      </div>

      {/* Activity feed */}
      <div className="flex-1 px-4 py-4 space-y-4">
        {activity.map(({ color, label, time }) => (
          <div key={label} className="flex items-start gap-3">
            <span
              className={`mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full ${color}`}
            />
            <div>
              <p className="text-white/60 text-xs leading-snug">{label}</p>
              <p className="text-white/25 text-[10px] mt-0.5">{time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Stats widget */}
      <div className="m-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
        <p className="text-white/30 text-[10px] uppercase tracking-widest mb-3">
          This week
        </p>
        {progressItems.map(({ label, value, bar, color }) => (
          <div key={label} className="mb-3 last:mb-0">
            <div className="flex justify-between mb-1">
              <span className="text-white/40 text-[11px]">{label}</span>
              <span className="text-white/70 text-[11px] font-semibold">
                {value}
              </span>
            </div>
            <div className="h-1 rounded-full bg-white/[0.06]">
              <div className={`h-full rounded-full ${bar} ${color}`} />
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

// ─── Main Content ─────────────────────────────────────────────────────────────

function MainContent() {
  const cards: TaskCard[] = [
    {
      title: "Redesign landing page",
      tag: "Design",
      status: "In progress",
      progress: 65,
    },
    {
      title: "Auth API integration",
      tag: "Backend",
      status: "Review",
      progress: 90,
    },
    {
      title: "Mobile responsive fixes",
      tag: "Frontend",
      status: "Todo",
      progress: 20,
    },
    {
      title: "Performance audit",
      tag: "DevOps",
      status: "In progress",
      progress: 45,
    },
  ];

  const stats: StatItem[] = [
    { label: "Total tasks", value: "142", delta: "+12 this week" },
    { label: "Completed", value: "118", delta: "83% rate" },
    { label: "Team members", value: "9", delta: "2 online now" },
  ];

  return (
    <main className="flex-1 h-full overflow-y-auto bg-[#111116]">
      {/* Top bar */}
      <header className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#111116]/90 backdrop-blur border-b border-white/[0.05]">
        <div>
          <h1 className="text-white font-semibold text-lg leading-tight">
            Dashboard
          </h1>
          <p className="text-white/30 text-xs mt-0.5">Wednesday, 20 May 2026</p>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search…"
            className="w-44 bg-white/[0.05] border border-white/[0.08] rounded-lg px-3 py-1.5 text-sm text-white/60 placeholder-white/20 outline-none focus:border-violet-500/50 transition-colors"
          />
          <button className="px-3 py-1.5 rounded-lg bg-violet-500 hover:bg-violet-400 transition-colors text-white text-sm font-medium">
            + New task
          </button>
        </div>
      </header>

      {/* Body */}
      <div className="px-6 py-6 space-y-6">
        {/* Stat row */}
        <div className="grid grid-cols-3 gap-4">
          {stats.map(({ label, value, delta }) => (
            <div
              key={label}
              className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-4"
            >
              <p className="text-white/30 text-xs uppercase tracking-widest">
                {label}
              </p>
              <p className="text-white text-3xl font-bold mt-1">{value}</p>
              <p className="text-white/30 text-xs mt-1">{delta}</p>
            </div>
          ))}
        </div>

        {/* Task cards */}
        <div>
          <h2 className="text-white/50 text-xs uppercase tracking-widest mb-3">
            Active tasks
          </h2>
          <div className="space-y-2">
            {cards.map(({ title, tag, status, progress }) => (
              <div
                key={title}
                className="flex items-center gap-4 rounded-xl bg-white/[0.03] border border-white/[0.06] px-4 py-3 hover:bg-white/[0.05] transition-colors cursor-pointer group"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-white/80 text-sm font-medium truncate group-hover:text-white transition-colors">
                    {title}
                  </p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-md font-medium ${tagColorMap[tag]}`}
                    >
                      {tag}
                    </span>
                    <span className="text-white/25 text-[10px]">{status}</span>
                  </div>
                </div>
                <div className="w-24 flex-shrink-0">
                  <div className="flex justify-between mb-1">
                    <span className="text-white/25 text-[10px]">Progress</span>
                    <span className="text-white/50 text-[10px]">
                      {progress}%
                    </span>
                  </div>
                  <div className="h-1 rounded-full bg-white/[0.06]">
                    <div
                      className="h-full rounded-full bg-violet-500 transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

// ─── Root Layout ──────────────────────────────────────────────────────────────

export default function ThreeColumnLayout() {
  const [leftCollapsed, setLeftCollapsed] = useState<boolean>(false);

  return (
    <div className="flex h-screen w-full overflow-hidden font-sans antialiased">
      <LeftSidebar
        collapsed={leftCollapsed}
        onToggle={() => setLeftCollapsed((v) => !v)}
      />
      <MainContent />
      <RightSidebar />
    </div>
  );
}

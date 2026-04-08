import { WIDGET_REGISTRY, WidgetId } from "../config/widgets";

interface SidebarProps {
  activeWidget: WidgetId;
  sdkLoaded: boolean;
  isOpen: boolean;
  onSelect: (id: WidgetId) => void;
  onClose: () => void;
}

export default function Sidebar({
  activeWidget,
  sdkLoaded,
  isOpen,
  onSelect,
  onClose,
}: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-screen w-72
          bg-white/70 backdrop-blur-xl border-r border-white/50 shadow-sm
          flex flex-col p-8 z-30
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center font-black text-white text-sm shadow-lg shadow-blue-500/30">
            S
          </div>
          <span className="text-xl font-black tracking-tight">
            Simpoo<span className="text-blue-600">Widgets</span>
          </span>
        </div>

        {/* Nav */}
        <nav className="flex-1 space-y-1">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.18em] mb-4 px-3">
            Available Widgets
          </p>

          {WIDGET_REGISTRY.map((widget) => {
            const isActive = activeWidget === widget.id;
            return (
              <button
                key={widget.id}
                id={`nav-${widget.id}`}
                onClick={() => {
                  onSelect(widget.id);
                  onClose();
                }}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-xl
                  transition-all duration-200 outline-none text-left
                  ${
                    isActive
                      ? "bg-blue-50 text-blue-600 border border-blue-100 shadow-sm"
                      : "text-slate-500 hover:bg-white/70 border border-transparent hover:border-slate-200"
                  }
                `}
              >
                <span className="text-lg leading-none">{widget.icon}</span>
                <span className="font-semibold text-sm">{widget.label}</span>
                {isActive && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-500" />
                )}
              </button>
            );
          })}

          {/* Coming-soon placeholder */}
          <div className="px-4 py-3 rounded-xl border border-dashed border-slate-200 text-slate-400 flex items-center gap-3 mt-4">
            <span className="text-lg leading-none opacity-50">🔮</span>
            <span className="text-xs font-semibold">More coming soon…</span>
          </div>
        </nav>

        {/* Footer */}
        <div className="pt-8 mt-auto border-t border-slate-200/60 space-y-4">
          <div className="p-4 rounded-2xl bg-white/60 border border-slate-200 shadow-sm">
            <p className="text-[10px] uppercase font-black text-slate-400 mb-2 tracking-widest">
              SDK Status
            </p>
            <div className="flex items-center gap-2">
              <div
                className={`w-2 h-2 rounded-full ${
                  sdkLoaded ? "bg-emerald-500 animate-pulse" : "bg-orange-400"
                }`}
              />
              <span className="text-sm font-bold">
                {sdkLoaded ? "Online" : "Connecting…"}
              </span>
            </div>
          </div>
          <p className="text-[10px] text-slate-400 text-center font-medium">
            Version {sdkLoaded ? ((window as any).SimpooSDK?.version || "2.0.87") : "Dev"}
          </p>
        </div>
      </aside>
    </>
  );
}

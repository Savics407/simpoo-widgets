// ─────────────────────────────────────────────────────────────────────────────
// Widget Registry
// To add a new widget: push a new entry to the array below.
// `id` must match what SimpooSDK.renderWidget() expects.
// ─────────────────────────────────────────────────────────────────────────────

export const WIDGET_REGISTRY = [
  {
    id: "inventory",
    label: "Inventory",
    icon: "📦",
    title: "Inventory Management",
    description:
      "Live view of the inventory widget. Track stock levels, categories, and item details in real time.",
  },
  {
    id: "sales_report",
    label: "Sales Report",
    icon: "📊",
    title: "Sales Analytics",
    description:
      "Live view of the sales report widget. Analyse revenue trends, top sellers, and period comparisons.",
  },
  // ⬇  Add future widgets here — the UI picks them up automatically
  // {
  //   id: "customers",
  //   label: "Customers",
  //   icon: "👥",
  //   title: "Customer Management",
  //   description: "Manage and segment your customer base.",
  // },
] as const;

export type WidgetId = (typeof WIDGET_REGISTRY)[number]["id"];
export type WidgetConfig = (typeof WIDGET_REGISTRY)[number];

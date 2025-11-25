// src/lib/store.ts
import { create } from "zustand";
import { Dataset, ChartConfig, DashboardItem } from "./types";

interface AppState {
  dataset: Dataset | null;
  charts: ChartConfig[];
  dashboardItems: DashboardItem[];

  setDataset: (dataset: Dataset | null) => void;
  addChart: (chart: ChartConfig) => void;
  updateChart: (chart: ChartConfig) => void;
  removeChart: (id: string) => void;

  addDashboardItem: (item: DashboardItem) => void;
  updateDashboardItem: (item: DashboardItem) => void;
}

export const useAppStore = create<AppState>((set) => ({
  dataset: null,
  charts: [],
  dashboardItems: [],

  setDataset: (dataset) => set({ dataset, charts: [], dashboardItems: [] }),

  addChart: (chart) =>
    set((state) => ({ charts: [...state.charts, chart] })),

  updateChart: (chart) =>
    set((state) => ({
      charts: state.charts.map((c) => (c.id === chart.id ? chart : c)),
    })),

  removeChart: (id) =>
    set((state) => ({
      charts: state.charts.filter((c) => c.id !== id),
      dashboardItems: state.dashboardItems.filter((d) => d.chartId !== id),
    })),

  addDashboardItem: (item) =>
    set((state) => ({ dashboardItems: [...state.dashboardItems, item] })),

  updateDashboardItem: (item) =>
    set((state) => ({
      dashboardItems: state.dashboardItems.map((d) =>
        d.id === item.id ? item : d
      ),
    })),
}));

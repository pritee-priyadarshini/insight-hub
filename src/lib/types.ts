// src/lib/types.ts

export type ColumnType = "numeric" | "categorical" | "date" | "unknown";

export interface ColumnMeta {
  name: string;
  type: ColumnType;
  uniqueCount: number;
  sampleValues: string[];
}

export interface DatasetRow {
  // key-value map: column name -> value (string | number | null)
  [key: string]: string | number | null;
}

export interface Dataset {
  id: string;
  name: string;
  rowCount: number;
  columns: ColumnMeta[];
  rows: DatasetRow[];
}

export type ChartType = "bar" | "line" | "pie" | "scatter";

export interface ChartConfig {
  id: string;
  title: string;
  type: ChartType;
  xField: string;
  yField: string;
  aggregation?: "sum" | "avg" | "count";
  color?: string;
}

export interface DashboardItem {
  id: string;
  chartId: string;
  // grid layout info, we can refine later
  x: number;
  y: number;
  w: number;
  h: number;
}

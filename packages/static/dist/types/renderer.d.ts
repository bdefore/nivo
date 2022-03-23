/// <reference types="react" />
import { ChartProps } from './mappings';
export declare const renderChart: <T extends "bar" | "circle_packing" | "calendar" | "chord" | "heatmap" | "line" | "pie" | "radar" | "sankey" | "sunburst" | "treemap">({ type, props, }: {
    type: T;
    props: import("./mappings").ChartComponent<T> extends import("react").FunctionComponent<infer P> ? P : never;
}, override: Partial<import("./mappings").ChartComponent<T> extends import("react").FunctionComponent<infer P> ? P : never>) => string;
//# sourceMappingURL=renderer.d.ts.map
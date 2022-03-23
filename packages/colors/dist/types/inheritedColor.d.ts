/// <reference types="react" />
import { RGBColor } from 'd3-color';
export declare type ColorModifierBrightness = ['brighter', number];
export declare type ColorModifierDarkness = ['darker', number];
export declare type ColorModifierOpacity = ['opacity', number];
export declare type ColorModifier = ColorModifierBrightness | ColorModifierDarkness | ColorModifierOpacity;
export declare type ColorModifierFunction = (color: RGBColor) => RGBColor;
export declare type InheritedColorConfigStaticColor = string;
export declare type InheritedColorConfigCustomFunction<Datum> = (d: Datum, ...drest: Datum[]) => string;
export interface InheritedColorConfigFromTheme {
    theme: string;
}
export interface InheritedColorConfigFromContext {
    from: string;
    modifiers?: ColorModifier[];
}
export declare type InheritedColorConfig<Datum> = InheritedColorConfigStaticColor | InheritedColorConfigCustomFunction<Datum> | InheritedColorConfigFromTheme | InheritedColorConfigFromContext;
/**
 * Create a color generator for items which
 * might inherit from parent context,
 * for example labels, outlines…
 *
 * Support the following strategies:
 * - custom function
 * - color from theme
 * - color from parent, with optional color modifiers
 * - static color
 */
export declare const getInheritedColorGenerator: <Datum = any>(config: InheritedColorConfig<Datum>, theme?: Partial<Pick<import("@nivo/core").CompleteTheme, "background" | "fontFamily" | "fontSize" | "textColor"> & {
    crosshair: Partial<{
        line: Partial<{
            stroke: string;
            strokeWidth: number;
            strokeOpacity: number;
            strokeDasharray: string;
        }>;
    }>;
    axis: Partial<{
        domain: Partial<{
            line: Partial<Partial<import("react").CSSProperties>>;
        }>;
        ticks: Partial<{
            line: Partial<Partial<import("react").CSSProperties>>;
            text: Partial<Partial<import("react").CSSProperties>>;
        }>;
        legend: Partial<{
            text: Partial<Partial<import("react").CSSProperties>>;
        }>;
    }>;
    grid: Partial<{
        line: Partial<Partial<import("react").CSSProperties>>;
    }>;
    legends: Partial<{
        hidden: Partial<{
            symbol: Partial<{
                fill: string;
                opacity: number;
            }>;
            text: Partial<import("react").CSSProperties>;
        }>;
        title: Partial<{
            text: Partial<Partial<import("react").CSSProperties>>;
        }>;
        text: Partial<Partial<import("react").CSSProperties>>;
        ticks: Partial<{
            line: Partial<Partial<import("react").CSSProperties>>;
            text: Partial<Partial<import("react").CSSProperties>>;
        }>;
    }>;
    labels: Partial<{
        text: Partial<Partial<import("react").CSSProperties>>;
    }>;
    markers: Partial<{
        lineColor: string;
        lineStrokeWidth: number;
        textColor: string;
        fontSize: string | 0;
        text: Partial<import("react").CSSProperties>;
    }>;
    dots: Partial<{
        text: Partial<Partial<import("react").CSSProperties>>;
    }>;
    tooltip: Partial<{
        container: Partial<import("react").CSSProperties>;
        basic: Partial<import("react").CSSProperties>;
        chip: Partial<import("react").CSSProperties>;
        table: Partial<import("react").CSSProperties>;
        tableCell: Partial<import("react").CSSProperties>;
        tableCellValue: Partial<import("react").CSSProperties>;
    }>;
    annotations: Partial<{
        text: Partial<{
            fill: string;
            outlineWidth: number;
            outlineColor: string;
            outlineOpacity: number;
        } & Partial<Omit<import("react").CSSProperties, "fill">>>;
        link: Partial<{
            stroke: string;
            strokeWidth: number;
            outlineWidth: number;
            outlineColor: string;
            outlineOpacity: number;
        } & Partial<Omit<import("react").CSSProperties, "stroke" | "strokeWidth">>>;
        outline: Partial<{
            stroke: string;
            strokeWidth: number;
            outlineWidth: number;
            outlineColor: string;
            outlineOpacity: number;
        } & Partial<Omit<import("react").CSSProperties, "stroke" | "strokeWidth">>>;
        symbol: Partial<{
            fill: string;
            outlineWidth: number;
            outlineColor: string;
            outlineOpacity: number;
        } & Partial<Omit<import("react").CSSProperties, "fill">>>;
    }>;
}> | undefined) => InheritedColorConfigCustomFunction<Datum> | ((d: Datum) => any);
export declare const useInheritedColor: <Datum = any>(config: InheritedColorConfig<Datum>, theme?: Partial<Pick<import("@nivo/core").CompleteTheme, "background" | "fontFamily" | "fontSize" | "textColor"> & {
    crosshair: Partial<{
        line: Partial<{
            stroke: string;
            strokeWidth: number;
            strokeOpacity: number;
            strokeDasharray: string;
        }>;
    }>;
    axis: Partial<{
        domain: Partial<{
            line: Partial<Partial<import("react").CSSProperties>>;
        }>;
        ticks: Partial<{
            line: Partial<Partial<import("react").CSSProperties>>;
            text: Partial<Partial<import("react").CSSProperties>>;
        }>;
        legend: Partial<{
            text: Partial<Partial<import("react").CSSProperties>>;
        }>;
    }>;
    grid: Partial<{
        line: Partial<Partial<import("react").CSSProperties>>;
    }>;
    legends: Partial<{
        hidden: Partial<{
            symbol: Partial<{
                fill: string;
                opacity: number;
            }>;
            text: Partial<import("react").CSSProperties>;
        }>;
        title: Partial<{
            text: Partial<Partial<import("react").CSSProperties>>;
        }>;
        text: Partial<Partial<import("react").CSSProperties>>;
        ticks: Partial<{
            line: Partial<Partial<import("react").CSSProperties>>;
            text: Partial<Partial<import("react").CSSProperties>>;
        }>;
    }>;
    labels: Partial<{
        text: Partial<Partial<import("react").CSSProperties>>;
    }>;
    markers: Partial<{
        lineColor: string;
        lineStrokeWidth: number;
        textColor: string;
        fontSize: string | 0;
        text: Partial<import("react").CSSProperties>;
    }>;
    dots: Partial<{
        text: Partial<Partial<import("react").CSSProperties>>;
    }>;
    tooltip: Partial<{
        container: Partial<import("react").CSSProperties>;
        basic: Partial<import("react").CSSProperties>;
        chip: Partial<import("react").CSSProperties>;
        table: Partial<import("react").CSSProperties>;
        tableCell: Partial<import("react").CSSProperties>;
        tableCellValue: Partial<import("react").CSSProperties>;
    }>;
    annotations: Partial<{
        text: Partial<{
            fill: string;
            outlineWidth: number;
            outlineColor: string;
            outlineOpacity: number;
        } & Partial<Omit<import("react").CSSProperties, "fill">>>;
        link: Partial<{
            stroke: string;
            strokeWidth: number;
            outlineWidth: number;
            outlineColor: string;
            outlineOpacity: number;
        } & Partial<Omit<import("react").CSSProperties, "stroke" | "strokeWidth">>>;
        outline: Partial<{
            stroke: string;
            strokeWidth: number;
            outlineWidth: number;
            outlineColor: string;
            outlineOpacity: number;
        } & Partial<Omit<import("react").CSSProperties, "stroke" | "strokeWidth">>>;
        symbol: Partial<{
            fill: string;
            outlineWidth: number;
            outlineColor: string;
            outlineOpacity: number;
        } & Partial<Omit<import("react").CSSProperties, "fill">>>;
    }>;
}> | undefined) => InheritedColorConfigCustomFunction<Datum> | ((d: Datum) => any);
//# sourceMappingURL=inheritedColor.d.ts.map
import { FunctionComponent } from 'react';
export declare const chartsMapping: {
    readonly bar: {
        component: FunctionComponent<Pick<import("@nivo/bar").BarSvgProps<any>, "theme" | "indexBy" | "keys" | "maxValue" | "minValue" | "margin" | "innerPadding" | "padding" | "valueScale" | "indexScale" | "enableGridX" | "gridXValues" | "enableGridY" | "gridYValues" | "borderColor" | "borderRadius" | "borderWidth" | "enableLabel" | "label" | "labelFormat" | "labelSkipWidth" | "labelSkipHeight" | "labelTextColor" | "valueFormat" | "legendLabel" | "groupMode" | "layout" | "reverse" | "colorBy" | "colors" | "annotations" | "legends" | "axisBottom" | "axisLeft" | "axisRight" | "axisTop" | "barComponent" | "markers" | "data" | keyof import("@nivo/core").SvgDefsAndFill<import("@nivo/bar").ComputedBarDatum<any>> | keyof import("@nivo/core").Dimensions>>;
        schema: import("joi").ObjectSchema<Pick<import("@nivo/bar").BarSvgProps<any>, "theme" | "indexBy" | "keys" | "maxValue" | "minValue" | "margin" | "innerPadding" | "padding" | "valueScale" | "indexScale" | "enableGridX" | "gridXValues" | "enableGridY" | "gridYValues" | "borderColor" | "borderRadius" | "borderWidth" | "enableLabel" | "label" | "labelFormat" | "labelSkipWidth" | "labelSkipHeight" | "labelTextColor" | "valueFormat" | "legendLabel" | "groupMode" | "layout" | "reverse" | "colorBy" | "colors" | "annotations" | "legends" | "axisBottom" | "axisLeft" | "axisRight" | "axisTop" | "barComponent" | "markers" | "data" | keyof import("@nivo/core").SvgDefsAndFill<import("@nivo/bar").ComputedBarDatum<any>> | keyof import("@nivo/core").Dimensions>>;
        runtimeProps: string[];
        defaults: {
            margin: {
                top: number;
                right: number;
                bottom: number;
                left: number;
            };
        };
    };
    readonly circle_packing: {
        component: FunctionComponent<Pick<import("@nivo/circle-packing").CirclePackingSvgProps<any>, "value" | "theme" | "tooltip" | "layers" | "role" | "renderWrapper" | "margin" | "padding" | "borderColor" | "borderWidth" | "label" | "labelTextColor" | "valueFormat" | "colorBy" | "colors" | "data" | "height" | "width" | "id" | "leavesOnly" | "inheritColorFromParent" | "childColor" | "circleComponent" | "enableLabels" | "labelsFilter" | "labelsSkipRadius" | "labelComponent" | keyof import("@nivo/core").SvgDefsAndFill<import("@nivo/circle-packing").ComputedDatum<any>>>>;
        schema: import("joi").ObjectSchema<Pick<import("@nivo/circle-packing").CirclePackingSvgProps<any>, "value" | "theme" | "tooltip" | "layers" | "role" | "renderWrapper" | "margin" | "padding" | "borderColor" | "borderWidth" | "label" | "labelTextColor" | "valueFormat" | "colorBy" | "colors" | "data" | "height" | "width" | "id" | "leavesOnly" | "inheritColorFromParent" | "childColor" | "circleComponent" | "enableLabels" | "labelsFilter" | "labelsSkipRadius" | "labelComponent" | keyof import("@nivo/core").SvgDefsAndFill<import("@nivo/circle-packing").ComputedDatum<any>>>>;
        runtimeProps: string[];
        defaults: {
            margin: {
                top: number;
                right: number;
                bottom: number;
                left: number;
            };
        };
    };
    readonly calendar: {
        component: FunctionComponent<Pick<import("@nivo/calendar").CalendarSvgProps, "theme" | "onMouseEnter" | "onMouseLeave" | "maxValue" | "minValue" | "margin" | "valueFormat" | "colors" | "legends" | keyof import("@nivo/core").Dimensions | "onMouseMove" | "direction" | "colorScale" | "align" | "yearLegend" | "yearSpacing" | "yearLegendOffset" | "yearLegendPosition" | "monthSpacing" | "monthBorderWidth" | "monthBorderColor" | "monthLegend" | "monthLegendOffset" | "monthLegendPosition" | "daySpacing" | "dayBorderWidth" | "dayBorderColor" | "emptyColor" | "legendFormat" | keyof import("@nivo/calendar").CalendarData>>;
        schema: import("joi").ObjectSchema<Pick<import("@nivo/calendar").CalendarSvgProps, "theme" | "onMouseEnter" | "onMouseLeave" | "maxValue" | "minValue" | "margin" | "valueFormat" | "colors" | "legends" | keyof import("@nivo/core").Dimensions | "onMouseMove" | "direction" | "colorScale" | "align" | "yearLegend" | "yearSpacing" | "yearLegendOffset" | "yearLegendPosition" | "monthSpacing" | "monthBorderWidth" | "monthBorderColor" | "monthLegend" | "monthLegendOffset" | "monthLegendPosition" | "daySpacing" | "dayBorderWidth" | "dayBorderColor" | "emptyColor" | "legendFormat" | keyof import("@nivo/calendar").CalendarData>>;
        runtimeProps: string[];
        defaults: {
            animate: boolean;
            margin: {
                top: number;
                right: number;
                bottom: number;
                left: number;
            };
        };
    };
    readonly chord: {
        component: FunctionComponent<Pick<Partial<import("@nivo/chord").ChordCommonProps> & import("@nivo/chord").ChordDataProps & import("@nivo/core").Dimensions & {
            onRibbonMouseEnter?: import("@nivo/chord").ChordRibbonMouseHandler | undefined;
            onRibbonMouseMove?: import("@nivo/chord").ChordRibbonMouseHandler | undefined;
            onRibbonMouseLeave?: import("@nivo/chord").ChordRibbonMouseHandler | undefined;
            onRibbonClick?: import("@nivo/chord").ChordRibbonMouseHandler | undefined;
            ribbonTooltip?: import("@nivo/chord").RibbonTooltipComponent | undefined;
            layers?: (import("@nivo/chord").LayerId | import("@nivo/chord").CustomLayer)[] | undefined;
        }, "theme" | "role" | "ariaLabel" | "ariaLabelledBy" | "ariaDescribedBy" | "renderWrapper" | "margin" | "enableLabel" | "label" | "labelTextColor" | "valueFormat" | "colors" | "legends" | keyof import("@nivo/core").Dimensions | "padAngle" | "innerRadiusRatio" | "innerRadiusOffset" | "arcOpacity" | "arcBorderWidth" | "arcBorderColor" | "ribbonBlendMode" | "ribbonOpacity" | "ribbonBorderWidth" | "ribbonBorderColor" | "labelOffset" | "labelRotation" | keyof import("@nivo/chord").ChordDataProps>>;
        schema: import("joi").ObjectSchema<Pick<Partial<import("@nivo/chord").ChordCommonProps> & import("@nivo/chord").ChordDataProps & import("@nivo/core").Dimensions & {
            onRibbonMouseEnter?: import("@nivo/chord").ChordRibbonMouseHandler | undefined;
            onRibbonMouseMove?: import("@nivo/chord").ChordRibbonMouseHandler | undefined;
            onRibbonMouseLeave?: import("@nivo/chord").ChordRibbonMouseHandler | undefined;
            onRibbonClick?: import("@nivo/chord").ChordRibbonMouseHandler | undefined;
            ribbonTooltip?: import("@nivo/chord").RibbonTooltipComponent | undefined;
            layers?: (import("@nivo/chord").LayerId | import("@nivo/chord").CustomLayer)[] | undefined;
        }, "theme" | "role" | "ariaLabel" | "ariaLabelledBy" | "ariaDescribedBy" | "renderWrapper" | "margin" | "enableLabel" | "label" | "labelTextColor" | "valueFormat" | "colors" | "legends" | keyof import("@nivo/core").Dimensions | "padAngle" | "innerRadiusRatio" | "innerRadiusOffset" | "arcOpacity" | "arcBorderWidth" | "arcBorderColor" | "ribbonBlendMode" | "ribbonOpacity" | "ribbonBorderWidth" | "ribbonBorderColor" | "labelOffset" | "labelRotation" | keyof import("@nivo/chord").ChordDataProps>>;
        runtimeProps: string[];
        defaults: {
            margin: {
                top: number;
                right: number;
                bottom: number;
                left: number;
            };
        };
    };
    readonly heatmap: {
        component: FunctionComponent<Pick<import("@nivo/heatmap").HeatMapSvgProps<import("@nivo/heatmap").DefaultHeatMapDatum, Record<string, never>>, "theme" | "motionConfig" | "onMouseEnter" | "onMouseLeave" | "tooltip" | "layers" | "role" | "ariaLabel" | "ariaLabelledBy" | "ariaDescribedBy" | "renderWrapper" | "margin" | "enableGridX" | "enableGridY" | "borderColor" | "borderRadius" | "borderWidth" | "label" | "labelTextColor" | "valueFormat" | "colors" | "annotations" | "legends" | "axisBottom" | "axisLeft" | "axisRight" | "axisTop" | "data" | keyof import("@nivo/core").Dimensions | "onMouseMove" | "enableLabels" | "emptyColor" | "forceSquare" | "sizeVariation" | "xInnerPadding" | "xOuterPadding" | "yInnerPadding" | "yOuterPadding" | "opacity" | "cellComponent">>;
        schema: import("joi").ObjectSchema<Pick<import("@nivo/heatmap").HeatMapSvgProps<import("@nivo/heatmap").DefaultHeatMapDatum, Record<string, never>>, "theme" | "motionConfig" | "onMouseEnter" | "onMouseLeave" | "tooltip" | "layers" | "role" | "ariaLabel" | "ariaLabelledBy" | "ariaDescribedBy" | "renderWrapper" | "margin" | "enableGridX" | "enableGridY" | "borderColor" | "borderRadius" | "borderWidth" | "label" | "labelTextColor" | "valueFormat" | "colors" | "annotations" | "legends" | "axisBottom" | "axisLeft" | "axisRight" | "axisTop" | "data" | keyof import("@nivo/core").Dimensions | "onMouseMove" | "enableLabels" | "emptyColor" | "forceSquare" | "sizeVariation" | "xInnerPadding" | "xOuterPadding" | "yInnerPadding" | "yOuterPadding" | "opacity" | "cellComponent">>;
        runtimeProps: string[];
        defaults: {
            margin: {
                top: number;
                right: number;
                bottom: number;
                left: number;
            };
        };
    };
    readonly line: {
        component: FunctionComponent<Pick<import("@nivo/line").LineSvgProps & import("@nivo/core").Dimensions, "theme" | "role" | "margin" | "enableGridX" | "gridXValues" | "enableGridY" | "gridYValues" | "colors" | "legends" | "axisBottom" | "axisLeft" | "axisRight" | "axisTop" | "markers" | "data" | "defs" | "fill" | keyof import("@nivo/core").Dimensions | "enablePointLabel" | "pointLabel" | "pointLabelYOffset" | "areaBlendMode" | "xScale" | "xFormat" | "yScale" | "yFormat" | "curve" | "lineWidth" | "enablePoints" | "pointSize" | "pointColor" | "pointBorderWidth" | "pointBorderColor" | "enableArea" | "areaOpacity" | "areaBaselineValue" | "tooltipFormat" | "enableCrosshair">>;
        schema: import("joi").ObjectSchema<Pick<import("@nivo/line").LineSvgProps & import("@nivo/core").Dimensions, "theme" | "role" | "margin" | "enableGridX" | "gridXValues" | "enableGridY" | "gridYValues" | "colors" | "legends" | "axisBottom" | "axisLeft" | "axisRight" | "axisTop" | "markers" | "data" | "defs" | "fill" | keyof import("@nivo/core").Dimensions | "enablePointLabel" | "pointLabel" | "pointLabelYOffset" | "areaBlendMode" | "xScale" | "xFormat" | "yScale" | "yFormat" | "curve" | "lineWidth" | "enablePoints" | "pointSize" | "pointColor" | "pointBorderWidth" | "pointBorderColor" | "enableArea" | "areaOpacity" | "areaBaselineValue" | "tooltipFormat" | "enableCrosshair">>;
        runtimeProps: string[];
        defaults: {
            margin: {
                top: number;
                right: number;
                bottom: number;
                left: number;
            };
        };
    };
    readonly pie: {
        component: FunctionComponent<Pick<import("@nivo/pie").PieSvgProps<any>, "value" | "theme" | "role" | "margin" | "borderColor" | "borderWidth" | "valueFormat" | "colors" | "legends" | "data" | keyof import("@nivo/core").Dimensions | "id" | "padAngle" | keyof import("@nivo/arcs").ArcLabelsProps<import("@nivo/pie").ComputedDatum<any>> | keyof import("@nivo/arcs").ArcLinkLabelsProps<import("@nivo/pie").ComputedDatum<any>> | "sortByValue" | "innerRadius" | "cornerRadius" | "startAngle" | "endAngle" | "fit" | "enableArcLabels" | "enableArcLinkLabels" | keyof import("@nivo/core").SvgDefsAndFill<import("@nivo/pie").ComputedDatum<any>> | "arcLinkLabelComponent">>;
        schema: import("joi").ObjectSchema<Pick<import("@nivo/pie").PieSvgProps<any>, "value" | "theme" | "role" | "margin" | "borderColor" | "borderWidth" | "valueFormat" | "colors" | "legends" | "data" | keyof import("@nivo/core").Dimensions | "id" | "padAngle" | keyof import("@nivo/arcs").ArcLabelsProps<import("@nivo/pie").ComputedDatum<any>> | keyof import("@nivo/arcs").ArcLinkLabelsProps<import("@nivo/pie").ComputedDatum<any>> | "sortByValue" | "innerRadius" | "cornerRadius" | "startAngle" | "endAngle" | "fit" | "enableArcLabels" | "enableArcLinkLabels" | keyof import("@nivo/core").SvgDefsAndFill<import("@nivo/pie").ComputedDatum<any>> | "arcLinkLabelComponent">>;
        runtimeProps: string[];
        defaults: {
            margin: {
                top: number;
                right: number;
                bottom: number;
                left: number;
            };
        };
    };
    readonly radar: {
        component: FunctionComponent<Pick<import("@nivo/radar").RadarSvgProps<any>, "theme" | "role" | "ariaLabel" | "ariaLabelledBy" | "ariaDescribedBy" | "maxValue" | "margin" | "borderColor" | "borderWidth" | "valueFormat" | "colors" | "legends" | keyof import("@nivo/core").Dimensions | "curve" | "gridLevels" | "gridShape" | "gridLabel" | "gridLabelOffset" | "enableDots" | "dotSymbol" | "dotSize" | "dotColor" | "dotBorderWidth" | "dotBorderColor" | "enableDotLabel" | "dotLabel" | "dotLabelFormat" | "dotLabelYOffset" | "fillOpacity" | "blendMode" | keyof import("@nivo/radar").RadarDataProps<any> | keyof import("@nivo/core").SvgDefsAndFill<import("@nivo/radar").RadarSvgFillMatcherDatum<any>>>>;
        schema: import("joi").ObjectSchema<Pick<import("@nivo/radar").RadarSvgProps<any>, "theme" | "role" | "ariaLabel" | "ariaLabelledBy" | "ariaDescribedBy" | "maxValue" | "margin" | "borderColor" | "borderWidth" | "valueFormat" | "colors" | "legends" | keyof import("@nivo/core").Dimensions | "curve" | "gridLevels" | "gridShape" | "gridLabel" | "gridLabelOffset" | "enableDots" | "dotSymbol" | "dotSize" | "dotColor" | "dotBorderWidth" | "dotBorderColor" | "enableDotLabel" | "dotLabel" | "dotLabelFormat" | "dotLabelYOffset" | "fillOpacity" | "blendMode" | keyof import("@nivo/radar").RadarDataProps<any> | keyof import("@nivo/core").SvgDefsAndFill<import("@nivo/radar").RadarSvgFillMatcherDatum<any>>>>;
        runtimeProps: string[];
        defaults: {
            margin: {
                top: number;
                right: number;
                bottom: number;
                left: number;
            };
        };
    };
    readonly sankey: {
        component: FunctionComponent<Pick<import("@nivo/sankey").SankeySvgProps<any, any>, "theme" | "animate" | "motionConfig" | "margin" | "label" | "labelTextColor" | "valueFormat" | "layout" | "colors" | "legends" | "data" | keyof import("@nivo/core").Dimensions | "enableLabels" | "align" | "sort" | "nodeOpacity" | "nodeThickness" | "nodeSpacing" | "nodeInnerPadding" | "nodeBorderWidth" | "nodeBorderColor" | "nodeBorderRadius" | "linkOpacity" | "linkContract" | "linkBlendMode" | "enableLinkGradient" | "labelPosition" | "labelPadding" | "labelOrientation">>;
        schema: import("joi").ObjectSchema<Pick<import("@nivo/sankey").SankeySvgProps<any, any>, "theme" | "animate" | "motionConfig" | "margin" | "label" | "labelTextColor" | "valueFormat" | "layout" | "colors" | "legends" | "data" | keyof import("@nivo/core").Dimensions | "enableLabels" | "align" | "sort" | "nodeOpacity" | "nodeThickness" | "nodeSpacing" | "nodeInnerPadding" | "nodeBorderWidth" | "nodeBorderColor" | "nodeBorderRadius" | "linkOpacity" | "linkContract" | "linkBlendMode" | "enableLinkGradient" | "labelPosition" | "labelPadding" | "labelOrientation">>;
        runtimeProps: string[];
        defaults: {
            margin: {
                top: number;
                right: number;
                bottom: number;
                left: number;
            };
            linkBlendMode: string;
        };
    };
    readonly sunburst: {
        component: FunctionComponent<Pick<import("@nivo/sunburst").SunburstSvgProps<any>, "value" | "theme" | "onMouseEnter" | "onMouseLeave" | "layers" | "role" | "margin" | "borderColor" | "borderWidth" | "valueFormat" | "colorBy" | "colors" | "data" | "height" | "width" | "id" | "onMouseMove" | "inheritColorFromParent" | "childColor" | "cornerRadius" | "enableArcLabels" | keyof import("@nivo/arcs").ArcLabelsProps<import("@nivo/sunburst").ComputedDatum<any>> | keyof import("@nivo/core").SvgDefsAndFill<any>>>;
        schema: import("joi").ObjectSchema<Pick<import("@nivo/sunburst").SunburstSvgProps<any>, "value" | "theme" | "onMouseEnter" | "onMouseLeave" | "layers" | "role" | "margin" | "borderColor" | "borderWidth" | "valueFormat" | "colorBy" | "colors" | "data" | "height" | "width" | "id" | "onMouseMove" | "inheritColorFromParent" | "childColor" | "cornerRadius" | "enableArcLabels" | keyof import("@nivo/arcs").ArcLabelsProps<import("@nivo/sunburst").ComputedDatum<any>> | keyof import("@nivo/core").SvgDefsAndFill<any>>>;
        runtimeProps: string[];
        defaults: {
            margin: {
                top: number;
                right: number;
                bottom: number;
                left: number;
            };
        };
    };
    readonly treemap: {
        component: FunctionComponent<Pick<Partial<import("@nivo/treemap").TreeMapCommonProps<object>> & import("@nivo/treemap").TreeMapDataProps<object> & import("@nivo/core").Dimensions & import("@nivo/core").SvgDefsAndFill<import("@nivo/treemap").ComputedNode<object>> & {
            nodeComponent?: import("@nivo/treemap").NodeComponent<object> | undefined;
            layers?: ("nodes" | import("@nivo/treemap").CustomSvgLayer<object>)[] | undefined;
        }, "value" | "theme" | "motionConfig" | "tooltip" | "layers" | "role" | "ariaLabel" | "ariaLabelledBy" | "ariaDescribedBy" | "margin" | "innerPadding" | "borderColor" | "borderWidth" | "enableLabel" | "label" | "labelFormat" | "labelTextColor" | "valueFormat" | "colorBy" | "colors" | "data" | keyof import("@nivo/core").Dimensions | "leavesOnly" | "nodeOpacity" | "identity" | "tile" | "outerPadding" | "labelSkipSize" | "orientLabel" | "enableParentLabel" | "parentLabel" | "parentLabelSize" | "parentLabelPosition" | "parentLabelPadding" | "parentLabelTextColor" | keyof import("@nivo/core").SvgDefsAndFill<import("@nivo/treemap").ComputedNode<object>> | "nodeComponent">>;
        schema: import("joi").ObjectSchema<Pick<Partial<import("@nivo/treemap").TreeMapCommonProps<object>> & import("@nivo/treemap").TreeMapDataProps<object> & import("@nivo/core").Dimensions & import("@nivo/core").SvgDefsAndFill<import("@nivo/treemap").ComputedNode<object>> & {
            nodeComponent?: import("@nivo/treemap").NodeComponent<object> | undefined;
            layers?: ("nodes" | import("@nivo/treemap").CustomSvgLayer<object>)[] | undefined;
        }, "value" | "theme" | "motionConfig" | "tooltip" | "layers" | "role" | "ariaLabel" | "ariaLabelledBy" | "ariaDescribedBy" | "margin" | "innerPadding" | "borderColor" | "borderWidth" | "enableLabel" | "label" | "labelFormat" | "labelTextColor" | "valueFormat" | "colorBy" | "colors" | "data" | keyof import("@nivo/core").Dimensions | "leavesOnly" | "nodeOpacity" | "identity" | "tile" | "outerPadding" | "labelSkipSize" | "orientLabel" | "enableParentLabel" | "parentLabel" | "parentLabelSize" | "parentLabelPosition" | "parentLabelPadding" | "parentLabelTextColor" | keyof import("@nivo/core").SvgDefsAndFill<import("@nivo/treemap").ComputedNode<object>> | "nodeComponent">>;
        runtimeProps: string[];
        defaults: {
            margin: {
                top: number;
                right: number;
                bottom: number;
                left: number;
            };
        };
    };
};
declare type ExtractProps<T> = T extends FunctionComponent<infer P> ? P : never;
export declare type ChartType = keyof typeof chartsMapping;
export declare type ChartComponent<T extends ChartType> = typeof chartsMapping[T]['component'];
export declare type ChartProps<T extends ChartType> = ExtractProps<ChartComponent<T>>;
export * from './bar';
export * from './calendar';
export * from './chord';
export * from './circle_packing';
export * from './heatmap';
export * from './line';
export * from './pie';
export * from './radar';
export * from './sankey';
export * from './treemap';
//# sourceMappingURL=index.d.ts.map
import { FunctionComponent } from 'react';
import Joi from 'joi';
import { DefaultHeatMapDatum, HeatMapDatum, HeatMapSvgProps } from '@nivo/heatmap';
import { OmitStrict } from '../types';
export declare type HeatMapApiProps<Datum extends HeatMapDatum = DefaultHeatMapDatum, ExtraProps extends object = Record<string, never>> = OmitStrict<HeatMapSvgProps<Datum, ExtraProps>, 'isInteractive' | 'onClick' | 'hoverTarget' | 'activeOpacity' | 'inactiveOpacity' | 'animate'>;
export declare const heatmapMapping: {
    component: FunctionComponent<Pick<HeatMapSvgProps<DefaultHeatMapDatum, Record<string, never>>, "theme" | "motionConfig" | "onMouseEnter" | "onMouseLeave" | "tooltip" | "layers" | "role" | "ariaLabel" | "ariaLabelledBy" | "ariaDescribedBy" | "renderWrapper" | "margin" | "enableGridX" | "enableGridY" | "borderColor" | "borderRadius" | "borderWidth" | "label" | "labelTextColor" | "valueFormat" | "colors" | "annotations" | "legends" | "axisBottom" | "axisLeft" | "axisRight" | "axisTop" | "data" | keyof import("@nivo/core").Dimensions | "onMouseMove" | "enableLabels" | "emptyColor" | "forceSquare" | "sizeVariation" | "xInnerPadding" | "xOuterPadding" | "yInnerPadding" | "yOuterPadding" | "opacity" | "cellComponent">>;
    schema: Joi.ObjectSchema<Pick<HeatMapSvgProps<DefaultHeatMapDatum, Record<string, never>>, "theme" | "motionConfig" | "onMouseEnter" | "onMouseLeave" | "tooltip" | "layers" | "role" | "ariaLabel" | "ariaLabelledBy" | "ariaDescribedBy" | "renderWrapper" | "margin" | "enableGridX" | "enableGridY" | "borderColor" | "borderRadius" | "borderWidth" | "label" | "labelTextColor" | "valueFormat" | "colors" | "annotations" | "legends" | "axisBottom" | "axisLeft" | "axisRight" | "axisTop" | "data" | keyof import("@nivo/core").Dimensions | "onMouseMove" | "enableLabels" | "emptyColor" | "forceSquare" | "sizeVariation" | "xInnerPadding" | "xOuterPadding" | "yInnerPadding" | "yOuterPadding" | "opacity" | "cellComponent">>;
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
//# sourceMappingURL=heatmap.d.ts.map
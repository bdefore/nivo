import Joi from 'joi';
import { Dimensions } from '@nivo/core';
import { LineSvgProps } from '@nivo/line';
import { OmitStrict } from '../types';
import { FunctionComponent } from 'react';
export declare type LineApiProps = OmitStrict<LineSvgProps & Dimensions, 'layers' | 'pointSymbol' | 'isInteractive' | 'useMesh' | 'debugMesh' | 'onMouseEnter' | 'onMouseMove' | 'onMouseLeave' | 'onClick' | 'tooltip' | 'enableSlices' | 'debugSlices' | 'sliceTooltip' | 'crosshairType' | 'animate' | 'motionConfig'>;
export declare const lineMapping: {
    component: FunctionComponent<Pick<LineSvgProps & Dimensions, "theme" | "role" | "margin" | "enableGridX" | "gridXValues" | "enableGridY" | "gridYValues" | "colors" | "legends" | "axisBottom" | "axisLeft" | "axisRight" | "axisTop" | "markers" | "data" | "defs" | "fill" | keyof Dimensions | "enablePointLabel" | "pointLabel" | "pointLabelYOffset" | "areaBlendMode" | "xScale" | "xFormat" | "yScale" | "yFormat" | "curve" | "lineWidth" | "enablePoints" | "pointSize" | "pointColor" | "pointBorderWidth" | "pointBorderColor" | "enableArea" | "areaOpacity" | "areaBaselineValue" | "tooltipFormat" | "enableCrosshair">>;
    schema: Joi.ObjectSchema<Pick<LineSvgProps & Dimensions, "theme" | "role" | "margin" | "enableGridX" | "gridXValues" | "enableGridY" | "gridYValues" | "colors" | "legends" | "axisBottom" | "axisLeft" | "axisRight" | "axisTop" | "markers" | "data" | "defs" | "fill" | keyof Dimensions | "enablePointLabel" | "pointLabel" | "pointLabelYOffset" | "areaBlendMode" | "xScale" | "xFormat" | "yScale" | "yFormat" | "curve" | "lineWidth" | "enablePoints" | "pointSize" | "pointColor" | "pointBorderWidth" | "pointBorderColor" | "enableArea" | "areaOpacity" | "areaBaselineValue" | "tooltipFormat" | "enableCrosshair">>;
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
//# sourceMappingURL=line.d.ts.map
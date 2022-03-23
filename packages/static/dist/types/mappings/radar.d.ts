import { FunctionComponent } from 'react';
import Joi from 'joi';
import { RadarSvgProps } from '@nivo/radar';
import { OmitStrict } from '../types';
export declare type RadarApiProps = OmitStrict<RadarSvgProps<any>, 'renderWrapper' | 'layers' | 'isInteractive' | 'sliceTooltip' | 'animate' | 'motionConfig'>;
export declare const radarMapping: {
    component: FunctionComponent<Pick<RadarSvgProps<any>, "theme" | "role" | "ariaLabel" | "ariaLabelledBy" | "ariaDescribedBy" | "maxValue" | "margin" | "borderColor" | "borderWidth" | "valueFormat" | "colors" | "legends" | keyof import("@nivo/core").Dimensions | "curve" | "gridLevels" | "gridShape" | "gridLabel" | "gridLabelOffset" | "enableDots" | "dotSymbol" | "dotSize" | "dotColor" | "dotBorderWidth" | "dotBorderColor" | "enableDotLabel" | "dotLabel" | "dotLabelFormat" | "dotLabelYOffset" | "fillOpacity" | "blendMode" | keyof import("@nivo/radar").RadarDataProps<any> | keyof import("@nivo/core").SvgDefsAndFill<import("@nivo/radar").RadarSvgFillMatcherDatum<any>>>>;
    schema: Joi.ObjectSchema<Pick<RadarSvgProps<any>, "theme" | "role" | "ariaLabel" | "ariaLabelledBy" | "ariaDescribedBy" | "maxValue" | "margin" | "borderColor" | "borderWidth" | "valueFormat" | "colors" | "legends" | keyof import("@nivo/core").Dimensions | "curve" | "gridLevels" | "gridShape" | "gridLabel" | "gridLabelOffset" | "enableDots" | "dotSymbol" | "dotSize" | "dotColor" | "dotBorderWidth" | "dotBorderColor" | "enableDotLabel" | "dotLabel" | "dotLabelFormat" | "dotLabelYOffset" | "fillOpacity" | "blendMode" | keyof import("@nivo/radar").RadarDataProps<any> | keyof import("@nivo/core").SvgDefsAndFill<import("@nivo/radar").RadarSvgFillMatcherDatum<any>>>>;
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
//# sourceMappingURL=radar.d.ts.map
import { FunctionComponent } from 'react';
import Joi from 'joi';
import { BarSvgProps } from '@nivo/bar';
import { OmitStrict } from '../types';
export declare type BarApiProps = OmitStrict<BarSvgProps<any>, 'isInteractive' | 'animate' | 'motionConfig' | 'onClick' | 'onMouseEnter' | 'onMouseLeave' | 'tooltip' | 'tooltipLabel' | 'layers' | 'role' | 'ariaLabel' | 'ariaLabelledBy' | 'ariaDescribedBy' | 'isFocusable' | 'barAriaLabel' | 'barAriaLabelledBy' | 'barAriaDescribedBy' | 'renderWrapper' | 'initialHiddenIds'>;
export declare const barMapping: {
    component: FunctionComponent<Pick<BarSvgProps<any>, "theme" | "indexBy" | "keys" | "maxValue" | "minValue" | "margin" | "innerPadding" | "padding" | "valueScale" | "indexScale" | "enableGridX" | "gridXValues" | "enableGridY" | "gridYValues" | "borderColor" | "borderRadius" | "borderWidth" | "enableLabel" | "label" | "labelFormat" | "labelSkipWidth" | "labelSkipHeight" | "labelTextColor" | "valueFormat" | "legendLabel" | "groupMode" | "layout" | "reverse" | "colorBy" | "colors" | "annotations" | "legends" | "axisBottom" | "axisLeft" | "axisRight" | "axisTop" | "barComponent" | "markers" | "data" | keyof import("@nivo/core").SvgDefsAndFill<import("@nivo/bar").ComputedBarDatum<any>> | keyof import("@nivo/core").Dimensions>>;
    schema: Joi.ObjectSchema<Pick<BarSvgProps<any>, "theme" | "indexBy" | "keys" | "maxValue" | "minValue" | "margin" | "innerPadding" | "padding" | "valueScale" | "indexScale" | "enableGridX" | "gridXValues" | "enableGridY" | "gridYValues" | "borderColor" | "borderRadius" | "borderWidth" | "enableLabel" | "label" | "labelFormat" | "labelSkipWidth" | "labelSkipHeight" | "labelTextColor" | "valueFormat" | "legendLabel" | "groupMode" | "layout" | "reverse" | "colorBy" | "colors" | "annotations" | "legends" | "axisBottom" | "axisLeft" | "axisRight" | "axisTop" | "barComponent" | "markers" | "data" | keyof import("@nivo/core").SvgDefsAndFill<import("@nivo/bar").ComputedBarDatum<any>> | keyof import("@nivo/core").Dimensions>>;
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
//# sourceMappingURL=bar.d.ts.map
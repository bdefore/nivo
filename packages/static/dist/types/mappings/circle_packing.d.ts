import { FunctionComponent } from 'react';
import Joi from 'joi';
import { CirclePackingSvgProps } from '@nivo/circle-packing';
import { OmitStrict } from '../types';
export declare type CirclePackingApiProps = OmitStrict<CirclePackingSvgProps<any>, 'isInteractive' | 'onMouseEnter' | 'onMouseMove' | 'onMouseLeave' | 'onClick' | 'zoomedId' | 'animate' | 'motionConfig'>;
export declare const circlePackingMapping: {
    component: FunctionComponent<Pick<CirclePackingSvgProps<any>, "value" | "theme" | "tooltip" | "layers" | "role" | "renderWrapper" | "margin" | "padding" | "borderColor" | "borderWidth" | "label" | "labelTextColor" | "valueFormat" | "colorBy" | "colors" | "data" | "height" | "width" | "id" | "leavesOnly" | "inheritColorFromParent" | "childColor" | "circleComponent" | "enableLabels" | "labelsFilter" | "labelsSkipRadius" | "labelComponent" | keyof import("@nivo/core").SvgDefsAndFill<import("@nivo/circle-packing").ComputedDatum<any>>>>;
    schema: Joi.ObjectSchema<Pick<CirclePackingSvgProps<any>, "value" | "theme" | "tooltip" | "layers" | "role" | "renderWrapper" | "margin" | "padding" | "borderColor" | "borderWidth" | "label" | "labelTextColor" | "valueFormat" | "colorBy" | "colors" | "data" | "height" | "width" | "id" | "leavesOnly" | "inheritColorFromParent" | "childColor" | "circleComponent" | "enableLabels" | "labelsFilter" | "labelsSkipRadius" | "labelComponent" | keyof import("@nivo/core").SvgDefsAndFill<import("@nivo/circle-packing").ComputedDatum<any>>>>;
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
//# sourceMappingURL=circle_packing.d.ts.map
import { FunctionComponent } from 'react';
import Joi from 'joi';
import { SunburstSvgProps } from '@nivo/sunburst';
import { OmitStrict } from '../types';
export declare type SunburstApiProps = OmitStrict<SunburstSvgProps<any>, 'isInteractive' | 'tooltip' | 'onClick' | 'animate' | 'motionConfig' | 'transitionMode' | 'renderWrapper'>;
export declare const sunburstMapping: {
    component: FunctionComponent<Pick<SunburstSvgProps<any>, "value" | "theme" | "onMouseEnter" | "onMouseLeave" | "layers" | "role" | "margin" | "borderColor" | "borderWidth" | "valueFormat" | "colorBy" | "colors" | "data" | "height" | "width" | "id" | "onMouseMove" | "inheritColorFromParent" | "childColor" | "cornerRadius" | "enableArcLabels" | keyof import("@nivo/arcs").ArcLabelsProps<import("@nivo/sunburst").ComputedDatum<any>> | keyof import("@nivo/core").SvgDefsAndFill<any>>>;
    schema: Joi.ObjectSchema<Pick<SunburstSvgProps<any>, "value" | "theme" | "onMouseEnter" | "onMouseLeave" | "layers" | "role" | "margin" | "borderColor" | "borderWidth" | "valueFormat" | "colorBy" | "colors" | "data" | "height" | "width" | "id" | "onMouseMove" | "inheritColorFromParent" | "childColor" | "cornerRadius" | "enableArcLabels" | keyof import("@nivo/arcs").ArcLabelsProps<import("@nivo/sunburst").ComputedDatum<any>> | keyof import("@nivo/core").SvgDefsAndFill<any>>>;
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
//# sourceMappingURL=sunburst.d.ts.map
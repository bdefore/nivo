import { FunctionComponent } from 'react';
import Joi from 'joi';
import { Dimensions } from '@nivo/core';
import { TreeMapSvgProps } from '@nivo/treemap';
import { OmitStrict } from '../types';
export declare type TreeMapApiProps = OmitStrict<TreeMapSvgProps<object> & Dimensions, 'isInteractive' | 'onMouseEnter' | 'onMouseMove' | 'onMouseLeave' | 'onClick' | 'animate' | 'renderWrapper'>;
export declare const treemapMapping: {
    component: FunctionComponent<Pick<Partial<import("@nivo/treemap").TreeMapCommonProps<object>> & import("@nivo/treemap").TreeMapDataProps<object> & Dimensions & import("@nivo/core").SvgDefsAndFill<import("@nivo/treemap").ComputedNode<object>> & {
        nodeComponent?: import("@nivo/treemap").NodeComponent<object> | undefined;
        layers?: ("nodes" | import("@nivo/treemap").CustomSvgLayer<object>)[] | undefined;
    }, "value" | "theme" | "motionConfig" | "tooltip" | "layers" | "role" | "ariaLabel" | "ariaLabelledBy" | "ariaDescribedBy" | "margin" | "innerPadding" | "borderColor" | "borderWidth" | "enableLabel" | "label" | "labelFormat" | "labelTextColor" | "valueFormat" | "colorBy" | "colors" | "data" | keyof Dimensions | "leavesOnly" | "nodeOpacity" | "identity" | "tile" | "outerPadding" | "labelSkipSize" | "orientLabel" | "enableParentLabel" | "parentLabel" | "parentLabelSize" | "parentLabelPosition" | "parentLabelPadding" | "parentLabelTextColor" | keyof import("@nivo/core").SvgDefsAndFill<import("@nivo/treemap").ComputedNode<object>> | "nodeComponent">>;
    schema: Joi.ObjectSchema<Pick<Partial<import("@nivo/treemap").TreeMapCommonProps<object>> & import("@nivo/treemap").TreeMapDataProps<object> & Dimensions & import("@nivo/core").SvgDefsAndFill<import("@nivo/treemap").ComputedNode<object>> & {
        nodeComponent?: import("@nivo/treemap").NodeComponent<object> | undefined;
        layers?: ("nodes" | import("@nivo/treemap").CustomSvgLayer<object>)[] | undefined;
    }, "value" | "theme" | "motionConfig" | "tooltip" | "layers" | "role" | "ariaLabel" | "ariaLabelledBy" | "ariaDescribedBy" | "margin" | "innerPadding" | "borderColor" | "borderWidth" | "enableLabel" | "label" | "labelFormat" | "labelTextColor" | "valueFormat" | "colorBy" | "colors" | "data" | keyof Dimensions | "leavesOnly" | "nodeOpacity" | "identity" | "tile" | "outerPadding" | "labelSkipSize" | "orientLabel" | "enableParentLabel" | "parentLabel" | "parentLabelSize" | "parentLabelPosition" | "parentLabelPadding" | "parentLabelTextColor" | keyof import("@nivo/core").SvgDefsAndFill<import("@nivo/treemap").ComputedNode<object>> | "nodeComponent">>;
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
//# sourceMappingURL=treemap.d.ts.map
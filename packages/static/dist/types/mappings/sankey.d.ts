import { FunctionComponent } from 'react';
import Joi from 'joi';
import { SankeySvgProps } from '@nivo/sankey';
import { OmitStrict } from '../types';
export declare type SankeyApiProps = OmitStrict<SankeySvgProps<any, any>, 'layers' | 'nodeHoverOpacity' | 'nodeHoverOthersOpacity' | 'linkHoverOpacity' | 'linkHoverOthersOpacity' | 'isInteractive' | 'onClick' | 'nodeTooltip' | 'linkTooltip' | 'renderWrapper' | 'role' | 'ariaLabel' | 'ariaLabelledBy' | 'ariaDescribedBy'>;
export declare const sankeyMapping: {
    component: FunctionComponent<Pick<SankeySvgProps<any, any>, "theme" | "animate" | "motionConfig" | "margin" | "label" | "labelTextColor" | "valueFormat" | "layout" | "colors" | "legends" | "data" | keyof import("@nivo/core").Dimensions | "enableLabels" | "align" | "sort" | "nodeOpacity" | "nodeThickness" | "nodeSpacing" | "nodeInnerPadding" | "nodeBorderWidth" | "nodeBorderColor" | "nodeBorderRadius" | "linkOpacity" | "linkContract" | "linkBlendMode" | "enableLinkGradient" | "labelPosition" | "labelPadding" | "labelOrientation">>;
    schema: Joi.ObjectSchema<Pick<SankeySvgProps<any, any>, "theme" | "animate" | "motionConfig" | "margin" | "label" | "labelTextColor" | "valueFormat" | "layout" | "colors" | "legends" | "data" | keyof import("@nivo/core").Dimensions | "enableLabels" | "align" | "sort" | "nodeOpacity" | "nodeThickness" | "nodeSpacing" | "nodeInnerPadding" | "nodeBorderWidth" | "nodeBorderColor" | "nodeBorderRadius" | "linkOpacity" | "linkContract" | "linkBlendMode" | "enableLinkGradient" | "labelPosition" | "labelPadding" | "labelOrientation">>;
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
//# sourceMappingURL=sankey.d.ts.map
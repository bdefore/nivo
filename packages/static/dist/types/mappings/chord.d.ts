import { FunctionComponent } from 'react';
import Joi from 'joi';
import { Dimensions } from '@nivo/core';
import { ChordSvgProps } from '@nivo/chord';
import { OmitStrict } from '../types';
export declare type ChordApiProps = OmitStrict<ChordSvgProps & Dimensions, 'isInteractive' | 'animate' | 'motionConfig' | 'onRibbonMouseEnter' | 'onRibbonMouseMove' | 'onRibbonMouseLeave' | 'onRibbonClick' | 'ribbonTooltip' | 'activeRibbonOpacity' | 'inactiveRibbonOpacity' | 'onArcMouseEnter' | 'onArcMouseMove' | 'onArcMouseLeave' | 'arcTooltip' | 'activeArcOpacity' | 'inactiveArcOpacity' | 'onArcClick' | 'layers'>;
export declare const chordMapping: {
    component: FunctionComponent<Pick<Partial<import("@nivo/chord").ChordCommonProps> & import("@nivo/chord").ChordDataProps & Dimensions & {
        onRibbonMouseEnter?: import("@nivo/chord").ChordRibbonMouseHandler | undefined;
        onRibbonMouseMove?: import("@nivo/chord").ChordRibbonMouseHandler | undefined;
        onRibbonMouseLeave?: import("@nivo/chord").ChordRibbonMouseHandler | undefined;
        onRibbonClick?: import("@nivo/chord").ChordRibbonMouseHandler | undefined;
        ribbonTooltip?: import("@nivo/chord").RibbonTooltipComponent | undefined;
        layers?: (import("@nivo/chord").LayerId | import("@nivo/chord").CustomLayer)[] | undefined;
    }, "theme" | "role" | "ariaLabel" | "ariaLabelledBy" | "ariaDescribedBy" | "renderWrapper" | "margin" | "enableLabel" | "label" | "labelTextColor" | "valueFormat" | "colors" | "legends" | keyof Dimensions | "padAngle" | "innerRadiusRatio" | "innerRadiusOffset" | "arcOpacity" | "arcBorderWidth" | "arcBorderColor" | "ribbonBlendMode" | "ribbonOpacity" | "ribbonBorderWidth" | "ribbonBorderColor" | "labelOffset" | "labelRotation" | keyof import("@nivo/chord").ChordDataProps>>;
    schema: Joi.ObjectSchema<Pick<Partial<import("@nivo/chord").ChordCommonProps> & import("@nivo/chord").ChordDataProps & Dimensions & {
        onRibbonMouseEnter?: import("@nivo/chord").ChordRibbonMouseHandler | undefined;
        onRibbonMouseMove?: import("@nivo/chord").ChordRibbonMouseHandler | undefined;
        onRibbonMouseLeave?: import("@nivo/chord").ChordRibbonMouseHandler | undefined;
        onRibbonClick?: import("@nivo/chord").ChordRibbonMouseHandler | undefined;
        ribbonTooltip?: import("@nivo/chord").RibbonTooltipComponent | undefined;
        layers?: (import("@nivo/chord").LayerId | import("@nivo/chord").CustomLayer)[] | undefined;
    }, "theme" | "role" | "ariaLabel" | "ariaLabelledBy" | "ariaDescribedBy" | "renderWrapper" | "margin" | "enableLabel" | "label" | "labelTextColor" | "valueFormat" | "colors" | "legends" | keyof Dimensions | "padAngle" | "innerRadiusRatio" | "innerRadiusOffset" | "arcOpacity" | "arcBorderWidth" | "arcBorderColor" | "ribbonBlendMode" | "ribbonOpacity" | "ribbonBorderWidth" | "ribbonBorderColor" | "labelOffset" | "labelRotation" | keyof import("@nivo/chord").ChordDataProps>>;
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
//# sourceMappingURL=chord.d.ts.map
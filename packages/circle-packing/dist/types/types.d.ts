import * as React from 'react';
import { Interpolation, SpringValue } from '@react-spring/web';
import { Box, ModernMotionProps, Theme, PropertyAccessor, ValueFormat, SvgDefsAndFill } from '@nivo/core';
import { InheritedColorConfig, OrdinalColorScaleConfig } from '@nivo/colors';
export interface ComputedDatum<RawDatum> {
    id: string;
    path: string[];
    value: number;
    percentage: number;
    formattedValue: string;
    x: number;
    y: number;
    radius: number;
    color: string;
    fill?: string;
    data: RawDatum;
    depth: number;
    height: number;
    parent?: ComputedDatum<RawDatum>;
}
export declare type CirclePackingLayerId = 'circles' | 'labels';
export interface CirclePackingCustomLayerProps<RawDatum> {
    nodes: ComputedDatum<RawDatum>[];
}
export declare type CirclePackingCustomLayer<RawDatum> = React.FC<CirclePackingCustomLayerProps<RawDatum>>;
export declare type CirclePackingLayer<RawDatum> = CirclePackingLayerId | CirclePackingCustomLayer<RawDatum>;
export declare type MouseHandler<RawDatum> = (datum: ComputedDatum<RawDatum>, event: React.MouseEvent) => void;
export declare type MouseHandlers<RawDatum> = {
    onClick?: MouseHandler<RawDatum>;
    onMouseEnter?: MouseHandler<RawDatum>;
    onMouseMove?: MouseHandler<RawDatum>;
    onMouseLeave?: MouseHandler<RawDatum>;
};
export interface CirclePackingCommonProps<RawDatum> {
    data: RawDatum;
    id: PropertyAccessor<RawDatum, string>;
    value: PropertyAccessor<RawDatum, number>;
    valueFormat?: ValueFormat<number>;
    width: number;
    height: number;
    margin?: Box;
    padding: number;
    leavesOnly: boolean;
    theme?: Theme;
    colors: OrdinalColorScaleConfig<Omit<ComputedDatum<RawDatum>, 'color' | 'fill'>>;
    colorBy: 'id' | 'depth';
    inheritColorFromParent: boolean;
    childColor: InheritedColorConfig<ComputedDatum<RawDatum>>;
    borderWidth: number;
    borderColor: InheritedColorConfig<ComputedDatum<RawDatum>>;
    circleComponent: CircleComponent<RawDatum>;
    enableLabels: boolean;
    label: PropertyAccessor<ComputedDatum<RawDatum>, string>;
    labelsFilter?: (label: ComputedLabel<RawDatum>) => boolean;
    labelsSkipRadius: number;
    labelTextColor: InheritedColorConfig<ComputedDatum<RawDatum>>;
    labelComponent: LabelComponent<RawDatum>;
    layers: CirclePackingLayer<RawDatum>[];
    isInteractive: boolean;
    tooltip: (props: ComputedDatum<RawDatum>) => JSX.Element;
    zoomedId?: string | null;
    animate: boolean;
    motionConfig: ModernMotionProps['motionConfig'];
    role: string;
    renderWrapper?: boolean;
}
export declare type CirclePackingSvgProps<RawDatum> = CirclePackingCommonProps<RawDatum> & MouseHandlers<RawDatum> & SvgDefsAndFill<ComputedDatum<RawDatum>>;
export declare type CirclePackingHtmlProps<RawDatum> = CirclePackingCommonProps<RawDatum> & MouseHandlers<RawDatum>;
export declare type CirclePackingCanvasProps<RawDatum> = CirclePackingCommonProps<RawDatum> & Pick<MouseHandlers<RawDatum>, 'onMouseMove' | 'onClick'> & {
    pixelRatio: number;
};
export declare type CircleProps<RawDatum> = {
    node: ComputedDatum<RawDatum>;
    style: {
        x: SpringValue<number>;
        y: SpringValue<number>;
        radius: Interpolation<number>;
        color: SpringValue<string>;
        opacity: SpringValue<number>;
        borderWidth: number;
        borderColor: SpringValue<string>;
    };
} & MouseHandlers<RawDatum>;
export declare type CircleComponent<RawDatum> = (props: CircleProps<RawDatum>) => JSX.Element;
export interface ComputedLabel<RawDatum> {
    label: string | number;
    textColor: string;
    node: ComputedDatum<RawDatum>;
}
export interface LabelProps<RawDatum> {
    node: ComputedDatum<RawDatum>;
    label: string | number;
    style: {
        x: SpringValue<number>;
        y: SpringValue<number>;
        radius: Interpolation<number>;
        textColor: SpringValue<string>;
        opacity: SpringValue<number>;
    };
}
export declare type LabelComponent<RawDatum> = (props: LabelProps<RawDatum>) => JSX.Element;
//# sourceMappingURL=types.d.ts.map
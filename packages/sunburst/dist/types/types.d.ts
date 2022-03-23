/// <reference types="react" />
import { Arc, ArcGenerator, ArcLabelsProps, ArcTransitionMode } from '@nivo/arcs';
import { OrdinalColorScaleConfig, InheritedColorConfig } from '@nivo/colors';
import { Theme, Box, ValueFormat, SvgDefsAndFill, ModernMotionProps, PropertyAccessor } from '@nivo/core';
export declare type DatumId = string | number;
export declare type SunburstLayerId = 'arcs' | 'arcLabels';
export interface SunburstCustomLayerProps<RawDatum> {
    nodes: ComputedDatum<RawDatum>[];
    centerX: number;
    centerY: number;
    radius: number;
    arcGenerator: ArcGenerator;
}
export declare type SunburstCustomLayer<RawDatum> = React.FC<SunburstCustomLayerProps<RawDatum>>;
export declare type SunburstLayer<RawDatum> = SunburstLayerId | SunburstCustomLayer<RawDatum>;
export interface DataProps<RawDatum> {
    data: RawDatum;
    id?: PropertyAccessor<RawDatum, DatumId>;
    value?: PropertyAccessor<RawDatum, number>;
    valueFormat?: ValueFormat<number>;
}
export interface ChildrenDatum<RawDatum> {
    children?: Array<RawDatum & ChildrenDatum<RawDatum>>;
}
export interface ComputedDatum<RawDatum> {
    id: DatumId;
    path: DatumId[];
    value: number;
    percentage: number;
    formattedValue: string;
    color: string;
    fill?: string;
    arc: Arc;
    data: RawDatum;
    depth: number;
    height: number;
    parent?: ComputedDatum<RawDatum>;
}
export declare type SunburstCommonProps<RawDatum> = {
    data: RawDatum;
    id: PropertyAccessor<RawDatum, DatumId>;
    value: PropertyAccessor<RawDatum, number>;
    valueFormat?: ValueFormat<number>;
    width: number;
    height: number;
    margin?: Box;
    cornerRadius: number;
    theme: Theme;
    colors: OrdinalColorScaleConfig<Omit<ComputedDatum<RawDatum>, 'color' | 'fill'>>;
    colorBy: 'id' | 'depth';
    inheritColorFromParent: boolean;
    childColor: InheritedColorConfig<ComputedDatum<RawDatum>>;
    borderWidth: number;
    borderColor: InheritedColorConfig<ComputedDatum<RawDatum>>;
    enableArcLabels: boolean;
    layers: SunburstLayer<RawDatum>[];
    role: string;
    renderWrapper: boolean;
    transitionMode: ArcTransitionMode;
    isInteractive: boolean;
    tooltip: (props: ComputedDatum<RawDatum>) => JSX.Element;
    animate: boolean;
    motionConfig: ModernMotionProps['motionConfig'];
} & ArcLabelsProps<ComputedDatum<RawDatum>>;
export declare type MouseHandler<RawDatum> = (datum: ComputedDatum<RawDatum>, event: React.MouseEvent) => void;
export declare type MouseHandlers<RawDatum> = Partial<{
    onClick: MouseHandler<RawDatum>;
    onMouseEnter: MouseHandler<RawDatum>;
    onMouseLeave: MouseHandler<RawDatum>;
    onMouseMove: MouseHandler<RawDatum>;
}>;
export declare type SunburstSvgProps<RawDatum> = SunburstCommonProps<RawDatum> & SvgDefsAndFill<RawDatum> & MouseHandlers<RawDatum>;
//# sourceMappingURL=types.d.ts.map
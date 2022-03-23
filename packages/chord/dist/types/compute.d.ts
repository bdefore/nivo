import { SpringValues } from '@react-spring/web';
import { ChordLayout } from 'd3-chord';
import { ArcDatum, ChordCommonProps, ChordDataProps, RibbonAnimatedProps, RibbonDatum, RibbonGenerator, ArcGenerator, ArcAnimatedProps } from './types';
import { OrdinalColorScale } from '@nivo/colors';
export declare const computeChordLayout: ({ padAngle }: {
    padAngle: ChordCommonProps['padAngle'];
}) => ChordLayout;
export declare const computeChordGenerators: ({ width, height, innerRadiusRatio, innerRadiusOffset, }: {
    width: number;
    height: number;
    innerRadiusRatio: ChordCommonProps['innerRadiusRatio'];
    innerRadiusOffset: ChordCommonProps['innerRadiusOffset'];
}) => {
    center: [number, number];
    radius: number;
    innerRadius: number;
    arcGenerator: ArcGenerator;
    ribbonGenerator: RibbonGenerator;
};
export declare const computeChordArcsAndRibbons: ({ chord, data, keys, getLabel, formatValue, getColor, }: {
    chord: ChordLayout;
    data: ChordDataProps['data'];
    keys: ChordDataProps['keys'];
    getLabel: (arc: Omit<ArcDatum, 'label' | 'color'>) => string;
    formatValue: (value: number) => string;
    getColor: OrdinalColorScale<Omit<ArcDatum, 'label' | 'color'>>;
}) => {
    arcs: ArcDatum[];
    ribbons: RibbonDatum[];
};
export declare const computeArcPath: ({ startAngle, endAngle, arcGenerator, }: {
    startAngle: import("@react-spring/web").SpringValue<number>;
    endAngle: import("@react-spring/web").SpringValue<number>;
} & {
    arcGenerator: ArcGenerator;
}) => import("@react-spring/web").Interpolation<string | null, any>;
export declare const computeRibbonPath: ({ sourceStartAngle, sourceEndAngle, targetStartAngle, targetEndAngle, ribbonGenerator, }: {
    sourceStartAngle: import("@react-spring/web").SpringValue<number>;
    sourceEndAngle: import("@react-spring/web").SpringValue<number>;
    targetStartAngle: import("@react-spring/web").SpringValue<number>;
    targetEndAngle: import("@react-spring/web").SpringValue<number>;
} & {
    ribbonGenerator: RibbonGenerator;
}) => import("@react-spring/web").Interpolation<void, any>;
//# sourceMappingURL=compute.d.ts.map
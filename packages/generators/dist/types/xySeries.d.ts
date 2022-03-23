interface XYRangeStaticValues {
    values: string[] | number[];
}
interface XYRandomNumericValues {
    length: number;
    min: number;
    max: number;
    round?: boolean;
}
declare type XYRangeValues = XYRangeStaticValues | XYRandomNumericValues;
export declare const generateXYSeries: ({ serieIds, x, y, }: {
    serieIds: string[];
    x: XYRangeValues;
    y: XYRangeValues;
}) => {
    id: string;
    data: {
        x: string | number;
        y: string | number;
    }[];
}[];
export {};
//# sourceMappingURL=xySeries.d.ts.map
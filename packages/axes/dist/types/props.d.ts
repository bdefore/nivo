import PropTypes from 'prop-types';
export declare const axisPropTypes: {
    ticksPosition: PropTypes.Requireable<string>;
    tickValues: PropTypes.Requireable<string | number | (string | number | Date | null | undefined)[]>;
    tickSize: PropTypes.Requireable<number>;
    tickPadding: PropTypes.Requireable<number>;
    tickRotation: PropTypes.Requireable<number>;
    format: PropTypes.Requireable<string | ((...args: any[]) => any)>;
    renderTick: PropTypes.Requireable<(...args: any[]) => any>;
    legend: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    legendPosition: PropTypes.Requireable<string>;
    legendOffset: PropTypes.Requireable<number>;
    ariaHidden: PropTypes.Requireable<boolean>;
};
export declare const axisPropType: PropTypes.Requireable<PropTypes.InferProps<{
    ticksPosition: PropTypes.Requireable<string>;
    tickValues: PropTypes.Requireable<string | number | (string | number | Date | null | undefined)[]>;
    tickSize: PropTypes.Requireable<number>;
    tickPadding: PropTypes.Requireable<number>;
    tickRotation: PropTypes.Requireable<number>;
    format: PropTypes.Requireable<string | ((...args: any[]) => any)>;
    renderTick: PropTypes.Requireable<(...args: any[]) => any>;
    legend: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    legendPosition: PropTypes.Requireable<string>;
    legendOffset: PropTypes.Requireable<number>;
    ariaHidden: PropTypes.Requireable<boolean>;
}>>;
export declare const positions: readonly ["top", "right", "bottom", "left"];
//# sourceMappingURL=props.d.ts.map
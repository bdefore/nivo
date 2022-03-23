declare type Link = {
    source: string;
    target: string;
    distance: number;
};
export declare const generateNetworkData: ({ rootSize, midSize, leafSize, minMidNodes, maxMidNodes, minLeaves, maxLeaves, }?: {
    rootSize?: number | undefined;
    midSize?: number | undefined;
    leafSize?: number | undefined;
    minMidNodes?: number | undefined;
    maxMidNodes?: number | undefined;
    minLeaves?: number | undefined;
    maxLeaves?: number | undefined;
}) => {
    nodes: {
        id: string;
        height: number;
        size: number;
        color: string;
    }[];
    links: Link[];
};
export {};
//# sourceMappingURL=network.d.ts.map
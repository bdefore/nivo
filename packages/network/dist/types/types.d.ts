import { AriaAttributes, MouseEvent, FunctionComponent } from 'react';
import { AnimatedProps } from '@react-spring/web';
import { Box, Theme, Dimensions, ModernMotionProps, CssMixBlendMode } from '@nivo/core';
import { InheritedColorConfig } from '@nivo/colors';
import { AnnotationMatcher } from '@nivo/annotations';
export interface InputNode {
    id: string;
}
export interface ComputedNode<Node extends InputNode> {
    id: string;
    data: Node;
    index: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
    borderWidth: number;
    borderColor: string;
}
export declare type TransientNode<Node extends InputNode> = Omit<ComputedNode<Node>, 'size' | 'color' | 'borderWidth' | 'borderColor'>;
export interface NodeAnimatedProps {
    x: number;
    y: number;
    size: number;
    color: string;
    borderWidth: number;
    borderColor: string;
    opacity: number;
    scale: number;
}
export interface NodeProps<Node extends InputNode> {
    node: ComputedNode<Node>;
    animated: AnimatedProps<NodeAnimatedProps>;
    onClick?: (node: ComputedNode<Node>, event: MouseEvent) => void;
    onMouseEnter?: (node: ComputedNode<Node>, event: MouseEvent) => void;
    onMouseMove?: (node: ComputedNode<Node>, event: MouseEvent) => void;
    onMouseLeave?: (node: ComputedNode<Node>, event: MouseEvent) => void;
}
export declare type NodeComponent<Node extends InputNode> = FunctionComponent<NodeProps<Node>>;
export declare type NodeCanvasRenderer<Node extends InputNode> = (ctx: CanvasRenderingContext2D, node: ComputedNode<Node>) => void;
export interface InputLink {
    source: string;
    target: string;
}
export interface ComputedLink<Node extends InputNode, Link extends InputLink> {
    id: string;
    data: Link;
    index: number;
    source: ComputedNode<Node>;
    target: ComputedNode<Node>;
    thickness: number;
    color: string;
}
export interface TransientLink<Node extends InputNode, Link extends InputLink> {
    data: Link;
    index: number;
    source: TransientNode<Node>;
    target: TransientNode<Node>;
}
export interface LinkAnimatedProps {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    color: string;
    opacity: number;
}
export interface LinkProps<Node extends InputNode, Link extends InputLink> {
    link: ComputedLink<Node, Link>;
    animated: AnimatedProps<LinkAnimatedProps>;
    blendMode: NonNullable<NetworkSvgProps<Node, Link>['linkBlendMode']>;
}
export declare type LinkComponent<Node extends InputNode, Link extends InputLink> = FunctionComponent<LinkProps<Node, Link>>;
export declare type LinkCanvasRenderer<Node extends InputNode, Link extends InputLink> = (ctx: CanvasRenderingContext2D, node: ComputedLink<Node, Link>) => void;
export interface NetworkDataProps<Node extends InputNode, Link extends InputLink> {
    data: {
        nodes: Node[];
        links: Link[];
    };
}
export declare type LayerId = 'links' | 'nodes' | 'annotations';
export interface CustomLayerProps<Node extends InputNode, Link extends InputLink> {
    nodes: ComputedNode<Node>[];
    links: ComputedLink<Node, Link>[];
    activeNodeIds: string[];
    setActiveNodeIds: (nodeIds: string[]) => void;
}
export declare type CustomLayer<Node extends InputNode, Link extends InputLink> = FunctionComponent<CustomLayerProps<Node, Link>>;
export declare type CustomCanvasLayer<Node extends InputNode, Link extends InputLink> = (ctx: CanvasRenderingContext2D, props: CustomLayerProps<Node, Link>) => void;
export interface NodeTooltipProps<Node extends InputNode> {
    node: ComputedNode<Node>;
}
export declare type NodeTooltip<Node extends InputNode> = FunctionComponent<NodeTooltipProps<Node>>;
export declare type DerivedProp<Target, Output extends number | string> = Output | ((target: Target) => Output);
export declare type NetworkCommonProps<Node extends InputNode, Link extends InputLink> = {
    margin: Box;
    linkDistance: DerivedProp<Link, number>;
    centeringStrength: number;
    repulsivity: number;
    distanceMin: number;
    distanceMax: number;
    iterations: number;
    theme: Theme;
    nodeSize: DerivedProp<Node, number>;
    activeNodeSize: DerivedProp<Node, number>;
    inactiveNodeSize: DerivedProp<Node, number>;
    nodeColor: DerivedProp<Node, string>;
    nodeBorderWidth: DerivedProp<Node, number>;
    nodeBorderColor: InheritedColorConfig<Omit<ComputedNode<Node>, 'size' | 'borderWidth' | 'borderColor'>>;
    linkThickness: DerivedProp<Omit<ComputedLink<Node, Link>, 'color' | 'thickness'>, number>;
    linkColor: InheritedColorConfig<Omit<ComputedLink<Node, Link>, 'color' | 'thickness'>>;
    annotations: AnnotationMatcher<ComputedNode<Node>>[];
    isInteractive: boolean;
    defaultActiveNodeIds: string[];
    nodeTooltip: NodeTooltip<Node>;
    onClick: (node: ComputedNode<Node>, event: MouseEvent) => void;
    renderWrapper: boolean;
    role: string;
    ariaLabel: AriaAttributes['aria-label'];
    ariaLabelledBy: AriaAttributes['aria-labelledby'];
    ariaDescribedBy: AriaAttributes['aria-describedby'];
} & Required<ModernMotionProps>;
export declare type NetworkSvgProps<Node extends InputNode, Link extends InputLink> = Partial<NetworkCommonProps<Node, Link>> & NetworkDataProps<Node, Link> & Dimensions & {
    layers?: (LayerId | CustomLayer<Node, Link>)[];
    nodeComponent?: NodeComponent<Node>;
    linkComponent?: LinkComponent<Node, Link>;
    linkBlendMode?: CssMixBlendMode;
    onMouseEnter?: (node: ComputedNode<Node>, event: MouseEvent) => void;
    onMouseMove?: (node: ComputedNode<Node>, event: MouseEvent) => void;
    onMouseLeave?: (node: ComputedNode<Node>, event: MouseEvent) => void;
};
export declare type NetworkCanvasProps<Node extends InputNode, Link extends InputLink> = Partial<NetworkCommonProps<Node, Link>> & NetworkDataProps<Node, Link> & Dimensions & {
    layers?: (LayerId | CustomCanvasLayer<Node, Link>)[];
    renderNode?: NodeCanvasRenderer<Node>;
    renderLink?: LinkCanvasRenderer<Node, Link>;
    pixelRatio?: number;
};
//# sourceMappingURL=types.d.ts.map
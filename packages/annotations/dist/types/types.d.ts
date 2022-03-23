import { CompleteTheme } from '@nivo/core';
import { ReactElement } from 'react';
declare type PartialShallow<T> = {
    [P in keyof T]?: T[P] extends object ? object : T[P];
};
declare type PropertyName = string | number | symbol;
declare type IterateeShorthand<T> = PropertyName | [PropertyName, any] | PartialShallow<T>;
declare type ListIterator<T, TResult> = (value: T, index: number, collection: ArrayLike<T>) => TResult;
declare type ListIterateeCustom<T, TResult> = ListIterator<T, TResult> | IterateeShorthand<T>;
export declare type RelativeOrAbsolutePosition = number | {
    abs: number;
};
export declare type AnnotationPositionGetter<Datum> = (datum: Datum) => {
    x: number;
    y: number;
};
export declare type AnnotationDimensionsGetter<Datum> = (datum: Datum) => {
    size: number;
    width: number;
    height: number;
};
export declare type NoteComponent<Datum> = (props: {
    datum: Datum;
    x: number;
    y: number;
}) => JSX.Element;
export declare type NoteSvg<Datum> = string | ReactElement | NoteComponent<Datum>;
export declare type NoteCanvasRenderer<Datum> = (ctx: CanvasRenderingContext2D, props: {
    datum: Datum;
    x: number;
    y: number;
    theme: CompleteTheme;
}) => void;
export declare type NoteCanvas<Datum> = string | NoteCanvasRenderer<Datum>;
export declare type Note<Datum> = NoteSvg<Datum> | NoteCanvas<Datum>;
export interface BaseAnnotationSpec<Datum> {
    x?: number;
    y?: number;
    note: Note<Datum>;
    noteX: RelativeOrAbsolutePosition;
    noteY: RelativeOrAbsolutePosition;
    noteWidth?: number;
    noteTextOffset?: number;
}
export declare type CircleAnnotationSpec<Datum> = BaseAnnotationSpec<Datum> & {
    type: 'circle';
    size?: number;
    offset?: number;
    height?: never;
    width?: never;
};
export declare type DotAnnotationSpec<Datum> = BaseAnnotationSpec<Datum> & {
    type: 'dot';
    size: number;
    offset?: number;
    height?: never;
    width?: never;
};
export declare type RectAnnotationSpec<Datum> = BaseAnnotationSpec<Datum> & {
    type: 'rect';
    width?: number;
    height?: number;
    offset?: number;
    size?: never;
    borderRadius?: number;
};
export declare type AnnotationSpec<Datum> = CircleAnnotationSpec<Datum> | DotAnnotationSpec<Datum> | RectAnnotationSpec<Datum>;
export declare type AnnotationType = AnnotationSpec<unknown>['type'];
export declare type AnnotationMatcher<Datum> = AnnotationSpec<Datum> & {
    match: ListIterateeCustom<Datum, boolean>;
    offset?: number;
};
export declare type BoundAnnotation<Datum> = Required<AnnotationSpec<Datum>> & {
    x: number;
    y: number;
    datum: Datum;
};
export declare type AnnotationInstructions = {
    points: [number, number][];
    text: [number, number];
    angle: number;
};
export declare type ComputedAnnotation<Datum> = BoundAnnotation<Datum> & {
    computed: AnnotationInstructions;
};
export {};
//# sourceMappingURL=types.d.ts.map
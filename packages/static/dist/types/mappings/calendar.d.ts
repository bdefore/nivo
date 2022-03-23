import { FunctionComponent } from 'react';
import Joi from 'joi';
import { CalendarSvgProps } from '@nivo/calendar';
import { OmitStrict } from '../types';
export declare type CalendarApiProps = OmitStrict<CalendarSvgProps, 'isInteractive' | 'onClick' | 'tooltip' | 'renderWrapper' | 'role'>;
export declare const calendarMapping: {
    component: FunctionComponent<Pick<CalendarSvgProps, "theme" | "onMouseEnter" | "onMouseLeave" | "maxValue" | "minValue" | "margin" | "valueFormat" | "colors" | "legends" | keyof import("@nivo/core").Dimensions | "onMouseMove" | "direction" | "colorScale" | "align" | "yearLegend" | "yearSpacing" | "yearLegendOffset" | "yearLegendPosition" | "monthSpacing" | "monthBorderWidth" | "monthBorderColor" | "monthLegend" | "monthLegendOffset" | "monthLegendPosition" | "daySpacing" | "dayBorderWidth" | "dayBorderColor" | "emptyColor" | "legendFormat" | keyof import("@nivo/calendar").CalendarData>>;
    schema: Joi.ObjectSchema<Pick<CalendarSvgProps, "theme" | "onMouseEnter" | "onMouseLeave" | "maxValue" | "minValue" | "margin" | "valueFormat" | "colors" | "legends" | keyof import("@nivo/core").Dimensions | "onMouseMove" | "direction" | "colorScale" | "align" | "yearLegend" | "yearSpacing" | "yearLegendOffset" | "yearLegendPosition" | "monthSpacing" | "monthBorderWidth" | "monthBorderColor" | "monthLegend" | "monthLegendOffset" | "monthLegendPosition" | "daySpacing" | "dayBorderWidth" | "dayBorderColor" | "emptyColor" | "legendFormat" | keyof import("@nivo/calendar").CalendarData>>;
    runtimeProps: string[];
    defaults: {
        animate: boolean;
        margin: {
            top: number;
            right: number;
            bottom: number;
            left: number;
        };
    };
};
//# sourceMappingURL=calendar.d.ts.map
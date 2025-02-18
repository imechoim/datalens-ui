import type {
    BarXSeries,
    BarXSeriesData,
    ChartKitWidgetData,
} from '@gravity-ui/chartkit/build/types/widget-data';

import {
    LabelsPositions,
    PlaceholderId,
    ServerField,
    getFakeTitleOrTitle,
} from '../../../../../../../shared';
import {getAxisType} from '../../d3/utils';
import {getFormattedLabel} from '../../d3/utils/dataLabels';
import {PrepareFunctionArgs} from '../types';

import {prepareBarX} from './prepareBarX';

type OldBarXDataItem = {
    y: number;
    x?: number;
    label?: string | number;
} | null;

export function prepareD3BarX(args: PrepareFunctionArgs): ChartKitWidgetData {
    const {shared, labels, placeholders, disableDefaultSorting = false} = args;
    const xPlaceholder = placeholders.find((p) => p.id === PlaceholderId.X);
    const xField: ServerField | undefined = xPlaceholder?.items?.[0];
    const yPlaceholder = placeholders.find((p) => p.id === PlaceholderId.Y);
    const yField: ServerField | undefined = yPlaceholder?.items?.[0];
    const labelField = labels?.[0];
    const isDataLabelsEnabled = Boolean(labelField);
    const isCategoriesXAxis =
        !xField ||
        getAxisType(xField, xPlaceholder?.settings) === 'category' ||
        disableDefaultSorting;

    if (!xField && !yField) {
        return {
            series: {
                data: [],
            },
        };
    }

    const preparedData = prepareBarX(args);
    const xCategories = xField
        ? preparedData.categories
        : yField
        ? [getFakeTitleOrTitle(yField)]
        : [];

    const seriesData = preparedData.graphs.map<BarXSeries>((graph) => {
        return {
            name: graph.title,
            type: 'bar-x',
            color: graph.color,
            stackId: graph.stack,
            stacking: 'normal',
            data: graph.data.reduce(
                (acc: BarXSeriesData[], item: OldBarXDataItem, index: number) => {
                    const dataItem: BarXSeriesData = {
                        y: item?.y || 0,
                    };

                    if (isDataLabelsEnabled) {
                        dataItem.label =
                            item?.y === null ? ' ' : getFormattedLabel(item?.label, labelField);
                    }

                    if (isCategoriesXAxis) {
                        dataItem.x = index;
                    } else if (!item && xCategories) {
                        dataItem.x = xCategories[index];
                    } else {
                        dataItem.x = item?.x;
                    }

                    acc.push(dataItem);

                    return acc;
                },
                [],
            ),
            custom: {},
            dataLabels: {
                enabled: isDataLabelsEnabled,
                inside: shared.extraSettings?.labelsPosition !== LabelsPositions.Outside,
            },
        };
    });

    const config: ChartKitWidgetData = {
        series: {
            data: seriesData,
        },
        yAxis: [
            {
                min: 0,
            },
        ],
    };

    if (config.series.data.length <= 1) {
        config.legend = {enabled: false};
    }

    if (isCategoriesXAxis) {
        config.xAxis = {
            type: 'category',
            categories: xCategories?.map(String),
        };
    }

    return config;
}

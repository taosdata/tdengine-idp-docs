---
title: Data Visualization
---

IDMP comes with a built-in Grafana-style data visualization module, which provides panels and dashboards. Dashboards consist of a series of panels, all managed via drag-and-drop operations, making the process simple and intuitive—so this document does not go into further detail on how to use them.

Every element in the system can have its own panels and dashboards. In the tree structure, elements at different levels focus on different metrics based on their position in the hierarchy. For example, at the power group level, the dashboard might focus on total power generation and overall cost, while at the wind turbine level, it might focus on operational status and generation efficiency of a specific turbine. This design in IDMP aligns well with enterprise management structures.

## Basic Panel Operations

IDMP panels support a variety of visualization types, including trend charts, bar charts, pie charts, gauges, statistical values, rich text, and tables. Future updates will also support scatter plots, maps, SCADA views, heatmaps, and event analysis charts.

When viewing a panel, you can click the icons in the action bar at the top of the panel to perform actions such as: edit, favorite, set the time range, adjust refresh frequency, download as an image, zoom in on a specific display area, or enter full-screen mode. Below the panel is a legend, where clicking an item will toggle the visibility of that metric.

Click the edit button to enter panel editing mode. The following section provides a more detailed explanation of panel editing operations.

## Types of Data Displayed in Panels

Each element contains many attributes that can be displayed in a panel. In addition, an element may have multiple child elements, and those children may also have their own children. Aggregated calculations across these child elements can generate new metrics, which can also be visualized. When creating a panel for an element, the left-side tree structure allows you to choose from:

1. Element: You can select attributes of the current element, or attributes of its child elements, to use as display metrics. The system only lists attributes whose data reference type is TDengine Metric, as only these represent time-series data that is meaningful to visualize.
1. Child Element Aggregation: You can select a child element template from the children of the current element, then choose which attribute of that template to aggregate. You can also select one or more dimension metrics for grouping.

The default option is "Element". In the left-hand tree, simply double-click on a specific attribute or tag to select it.

## Panel Metric Configuration

For each selected metric, you can configure the following options:

1. Name: This is the name displayed on the panel for the metric. By default, it uses the attribute name.
1. Expression: IDMP allows you to apply expressions to the selected attribute, or even perform calculations across multiple attributes.
1. Function: When a time window is set or dimension-based grouping is applied, this specifies the aggregation function, with the default being AVG.
1. Conditions: These are filter conditions applied to the raw data, allowing you to refine which data points are used.
1. Time Shift: Offsets the timestamps of the displayed metric, useful for comparing trends across different time periods. For example, setting it to -1d means the panel will show data from the same time one day earlier.
1. Prediction: Click to configure time-series forecasting for the selected metric.
1. Order By: Click to apply sorting to the metric. By default, no sorting is applied.

For all displayed metrics, you can also configure the following options in the top-right corner of the metric list:

1. Window: Applies a sliding window aggregation to the metric. You can set both the slide interval and the window duration. By default, no window is applied.
1. Limit: Sets a maximum number of data points to be displayed for the metric.

## Panel Dimensions Configuration

TBD

## Panel Visualization Settings

While a panel is in edit mode, you can click the rightmost button in the panel’s action bar to access various display configuration options. The visualization settings for each panel type are highly consistent with Grafana, and since any changes you make are immediately reflected in the preview (what-you-see-is-what-you-get), this document does not provide a detailed walkthrough of these settings.

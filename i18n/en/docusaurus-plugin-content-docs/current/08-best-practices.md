# Best Practices

IDMP provides powerful data modeling capabilities, enabling data standardization and contextualization, which allows better utilization of AI technologies to extract business value from data. However, data modeling itself is a task that is difficult to accomplish solely with AI.

To minimize the cost of modeling, TDengine recommends performing basic data governance at the data source side. Here are some suggestions:

1. Each collected metric should be named in a standardized and globally consistent way.
2. For physical quantities collected simultaneously (sharing the same timestamp), use a multi-column model whenever possible.
3. For each data collection point, whether single-column or multi-column, configure the hierarchical structure as metadata and send it to TDengine TSDB. For example: `Factory-1.ProductionLine-A.Device-X`

The taosX module in TDengine TSDB can automatically create super tables and sub-tables when reading these collected data, perform data transformation, and add more tags to save the hierarchical information of devices. Based on the metadata in TSDB, IDMP can automatically build a tree-like hierarchical structure and automatically create element templates and elements.

For data collected from PLCs, since it is a single-column model and a device often has multiple metrics, these metrics need to be grouped under one device. This grouping can only be done in IDMP. You can refer to the [Data Import/Export - TSDB Asset Model](/operation/data-import-export#tdengine-tsdb-asset-model) section for details.

Once the tree-like hierarchical model is established in IDMP, you can supplement more descriptive information and business semantics through element and attribute templates, providing better data context and making the entire data platform AI-Ready, which facilitates better utilization of AI.

Below, we have selected typical application scenarios from different industries to illustrate how to use TDengine IDMP for your reference:

1. [TDengine IDMP Application Scenario: Microgrid Monitoring](https://www.taosdata.com/sparkplug-microgrid-autonomous)
1. [TDengine IDMP Application Scenario: Tobacco Processing](https://www.taosdata.com/tobacco-autonomous-monitoring)
1. [TDengine IDMP Application Scenario: Industrial Boiler Monitoring](https://www.taosdata.com/industrial-boiler-autopilot)
1. [TDengine IDMP Application Scenario: IT System Monitoring](https://www.taosdata.com/telegraf-tdengine-idmp-monitoring)
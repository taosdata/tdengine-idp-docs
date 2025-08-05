---
title: Data Standardization
---

TDengine IDMP can handle heterogeneous data from disparate sources and databases, apart from TDengine TSDB-Enterprise. Considering the lack of unified standards for data collection, data standardization is an essential process.

TDengine IDMP provides standardization through the following approaches:

1. Templates are available for elements, attributes, analyses, panels, dashboards, events, and notification rules. These templates make management easier and encourage consistency and standardization across the system.
2. Physical unit conversion is supported for element attributes. The unit of the stored data can differ from the displayed unit, and dimensional checks and automatic unit conversion are performed when expressions are evaluated.
3. Through data references, TDengine IDMP allows attributes from different data sources with different names to be mapped to a single standardized attribute name. For example, one database might label a value as `Temperature`, while another uses `temp`, but both can be unified under the attribute `Indoor Temperature`.
4. Using expression-based and string-construction-based data references, TDengine IDMP provides flexible data transformation capabilities. For instance, if one data source records power while another records current and voltage, you can define a formula in TDengine IDMP to calculate power in the first data source by multiplying current and voltage from the second data source.

However, TDengine IDMP cannot enforce data standardization. This relies on your organization’s management processes.

Data modeling is essentially a process of standardizing data. Standardization is essential for analyzing data, extracting value from it, and especially for incorporating AI technology.

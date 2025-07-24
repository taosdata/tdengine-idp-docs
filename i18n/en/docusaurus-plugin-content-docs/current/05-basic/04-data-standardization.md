---
title: Data Standardization
---

IDMP is capable of handling multi-source heterogeneous data, which may come from different databases—including those beyond TDengine TSDB. Given the lack of unified standards on the data collection side, data standardization becomes essential. Currently, IDMP provides standardization through the following approaches:

1. Templates are available for elements, attributes, analytics, panels, dashboards, events, and notifications. These templates not only facilitate management but also promote consistency and standardization across the entire system.
1. Physical unit conversion is supported for element attributes. The unit of the stored data can differ from the displayed unit, and dimensional checks and automatic unit conversion are performed during expression evaluations.
1. Through data references, IDMP allows attributes from different data sources with different names to be mapped to a single standardized attribute name. For example, one database might label a value as “Temperature,” while another uses “WD,” but both can be unified under the attribute “Indoor Temperature.”
1. Using expression-based and string-construction-based data references, IDMP provides flexible data transformation capabilities. For instance, if Data Source A records power while Data Source B records current and voltage, you can define a formula in IDMP to calculate power by multiplying current and voltage from Source B.

Without data standardization, data analysis and value extraction become extremely difficult. Efforts like data integration, data lakes, or data warehouses become meaningless, and AI technologies cannot assist in uncovering business value. The entire modeling process is essentially a process of data standardization, which depends heavily on the organization’s internal management practices. IDMP provides the tools—but cannot enforce execution.

---
title: Introduction to TDengine IDMP
---

TDengine IDMP is an AI-native IoT and industrial data management system. It organizes sensor and device-collected data using a classic hierarchical tree structure, builds a data catalog, and provides contextualized and standardized data processing. In addition, it offers real-time analytics, visualization, event management, and alerting capabilities—all aimed at helping enterprises quickly and efficiently extract business value from operational data.

IDMP fully leverages AI technology to intelligently perceive application scenarios based on collected data. Without requiring users to ask questions, it automatically generates the real-time analytics and visualization dashboards needed for those scenarios. This dramatically lowers the barrier to use, reduces dependence on data analysts and IT engineers, and enables business users to gain insights more efficiently. This “Insight Without Asking” capability makes TDengine IDMP a truly AI-native system for IoT and industrial data management.

## Main Features

Specifically, TDengine IDMP offers the following capabilities:

1. **Data Modeling:** IDMP manages data using a classic tree-structured hierarchy. Each node in the tree represents a sensor, device, production line, factory, or logical entity. These nodes are referred to as elements in IDMP. Each element has its own attributes, real-time analytics, visualization dashboards, events, and more.
1. **Contextualization:** IDMP allows configuration of descriptive information, categories, locations, physical units, and threshold values for each node and its associated attributes, analytics, dashboards, and alerts. This enriches the data with context and business semantics, enabling meaningful data interpretation.
1. **Standardization:** Through templates for elements, attributes, analytics, dashboards, and events—along with data mapping, calculation expressions, and automatic unit conversions—IDMP provides powerful data standardization. This allows heterogeneous data from multiple sources to be unified and used consistently.
1. **Data Visualization:** IDMP comes with a built-in Grafana-style visualization module that offers dashboards and panels for data display. Supported visualization types include trend charts, bar charts, pie charts, gauges, statistical values, rich text, and tables. Additional types such as scatter plots, maps, SCADA-style displays, and heatmaps will be supported in the future.
1. **Real-Time Analytics:** Powered by TDengine’s stream processing capabilities, IDMP supports real-time analytics. Trigger types include sliding windows, scheduled windows, event windows, state windows, and count windows. Calculations can be simple expressions or aggregations over time windows or across devices.
1. **Event Management:** Real-time analytics can trigger events, and based on severity and configuration, IDMP immediately notifies the relevant personnel. Events can be acknowledged or escalated. Users can easily view the trend of relevant attributes at the time of the event to help analyze root causes.
1. **Insight Without Asking:** Leveraging AI large models, IDMP intelligently perceives business scenarios based on collected data and proactively recommends the necessary dashboards and real-time analytics—without requiring users to ask. This allows users to gain business insights without deep domain knowledge or IT skills.
1. **Smart Data Query:** For users with strong business knowledge, IDMP allows them to actively request the system to automatically generate the required visual dashboards and real-time analytics. Users can also ask any question related to the system’s data. No IT skills are needed, enabling business personnel to gain insights at any time.
1. **Enterprise-Grade Services:** IDMP supports role-based access control, version control for data models (coming in the next release), single sign-on (SSO), data import/export, backup, and other essential features for enterprise operations.

It is important to note:

1. TDengine IDMP does not store any time-series data internally. It fully relies on external sources such as TDengine TSDB or other databases. However, to support data dictionaries and some metadata queries, IDMP maintains its own two-dimensional tables and can also dynamically retrieve them from external relational databases.
1. TDengine IDMP is a data management platform, designed to help users gain insights into system operations. It is not a full-fledged IoT or Industrial Internet platform—therefore, it does not offer features such as command dispatching, device connection management, or firmware updates. However, it can integrate seamlessly with industrial internet platforms.
1. TDengine IDMP does not include personnel management, shift scheduling, or maintenance work order features typically needed for enterprise management. However, it supports seamless integration with such systems through SDKs or by directly accessing their databases for metadata.

## Application Scenarios

TDengine IDMP can be widely applied across IoT, industrial, and other domains, including:

1. **Industrial Process Monitoring and Optimization**
   1. Manufacturing: Real-time monitoring of production line equipment status (e.g., temperature, pressure, vibration), optimizing production efficiency and reducing downtime.
   1. Chemical / Petrochemical: Tracking real-time data from reactors, pipelines, and storage tanks to ensure process safety and energy efficiency.
   1. Power and Energy: Managing the real-time performance of generator units, grid loads, and renewable energy sources such as wind and solar power.
1. **Equipment Health and Predictive Maintenance**
   1. Predict equipment failures by analyzing sensor data (e.g., vibration, current, temperature), preventing unexpected downtime.
   1. Lifecycle management of critical assets in industries such as aviation, power generation, and rail transportation.
1. **Energy Management and Sustainability**
   1. Monitor consumption of resources such as water, electricity, and gas in real time to identify energy-saving opportunities (e.g., building energy efficiency, factory carbon footprint).
   1. Support carbon emission tracking to help enterprises achieve their ESG goals.
1. **Infrastructure and Smart Cities**
   1. Utilities: Real-time monitoring of water, gas, and electricity networks; pipeline leak detection.
   1. Smart Buildings: Real-time data integration for building automation systems (HVAC, lighting, etc.).
   1. Transportation Infrastructure: Real-time monitoring and maintenance of tunnels, bridges, high-speed rail, subways, airports, and other critical facilities.
1. **Life Sciences and Pharmaceuticals**
   1. Monitoring of biopharmaceutical production processes, such as fermentation, cell culture, purification, and downstream workflows.
   1. Batch production monitoring under strict regulatory environments (e.g., GMP) to ensure manufacturing parameters meet compliance standards.
1. **Data Centers and IT Operations**
   1. Real-time performance monitoring of servers and network devices (CPU, memory, bandwidth), enabling optimized resource allocation.
   1. Environmental and energy monitoring within data centers.
   1. Real-time performance monitoring of various internet services.

TDengine IDMP serves a wide range of industries including smart manufacturing, power generation, electric grids, oil and petrochemicals, automotive, mining, renewable energy, pharmaceuticals, and IT infrastructure.

## Relationship with TDengine TSDB

TDengine TSDB is a high-performance, horizontally scalable time-series database. While it supports up to 128 tags, it does not fully handle the diverse types of metadata required in enterprise operations—such as the measurement unit, upper and lower limits, or target values of a specific time-series column. Additionally, its built-in stream processing lacks comprehensive management, and it does not offer visualization, alerting, or similar features.

TDengine IDMP serves as a complement to TDengine TSDB. It enhances metadata management and provides data standardization and contextualization capabilities, transforming the data platform into an AI-ready system—enabling features like “Insight Without Asking” and “Smart Data Query.” It also brings TDengine’s powerful stream processing capabilities to life through an intuitive user interface, acting as an application layer built on top of the TSDB.

While TDengine IDMP plans to support other time-series databases, its integration with TDengine TSDB remains the most efficient.

## Comparison with Similar Products

In terms of functionality, TDengine IDMP is comparable to the combination of PI Asset Framework and PI Vision in the PI System. The combination of TDengine TSDB + TDengine IDMP is equivalent to the full PI System, including PI Interface, PI Data Archive, PI Asset Framework, and PI Vision. **We refer to the combination of TDengine TSDB and TDengine IDMP simply as "TDengine."**

Many real-time data platforms on the market are positioned as alternatives to the PI System. Compared with the PI System and other real-time databases, TDengine offers the following advantages:

1. An AI-ready data platform, with capabilities such as Insight Without Asking and Smart Data Query.
1. Exceptional horizontal scalability, supporting over 1 billion data points.
1. Openness and interoperability, with support for JDBC, ODBC, REST API, and seamless integration with a wide range of third-party software.
1. Data subscription support, enabling data to not only stream in but also flow out in real time—ensuring no vendor lock-in.
1. Flexible deployment options, including support for Linux and Windows, and compatibility with containers, virtual machines, physical servers, and private cloud environments.

One limitation is that the range of supported data sources is still limited—currently, only OPC-UA / OPC-DA and MQTT are supported.

Compared with general-purpose big data platforms, TDengine offers the following advantages:

1. An AI-ready data platform, with capabilities such as Insight Without Asking and Smart Data Query.
1. By fully leveraging the characteristics of time-series data, it delivers write and query performance over 10 times higher than general-purpose platforms.
1. Its unique "one device, one table" design achieves data compression rates 10 times better than traditional solutions.
1. It provides an end-to-end solution—from data collection, cleaning, and governance to storage, analysis, real-time processing, visualization, and event management.
1. Supports no-code configuration-based data ingestion directly from industrial gateways.

Compared with general-purpose data management platforms, TDengine's main limitation is that it is optimized exclusively for time-series data and may not handle other data types as efficiently.

---
slug: /
---

# Product Overview

## What is TDengine AI?

TDengine Asset Intelligence (TDengine AI) is an IoT and industrial data management system. It organizes sensor and device-collected data using a classic tree structure, enabling data contextualization and standardization, and provides real-time analytics, visualization, event management, and alerting. Its goal is to help enterprises extract business value from operational data. Leveraging large AI models, it can automatically sense application scenarios based on collected data, generate real-time analytics, reports, and dashboards, greatly lowering the usage threshold. It helps users discover novel reports and dashboards, significantly reducing the need for and reliance on data analysts and process engineers, shortening the distance from raw data to business insight and decision-making, and improving data consumption efficiency.

## Core Features

### TDengine AI offers the following features

1. Provides an asset model, using a classic tree structure to manage physical or logical elements in enterprise operations.
2. For any element, various static and dynamic attributes can be configured. Any attribute can be mapped to a specific column in a database table, and metadata such as target value, limit value, location, prediction algorithm, physical unit, and decimal places can be set, achieving data contextualization.
3. For any element, you can create real-time analytics, build visualization dashboards, generate periodic reports, and set up event notification templates. Analytics can target the element itself or its child elements.
4. For any element, AI large models are used to automatically sense application scenarios based on collected data and recommend dashboards, reports, and real-time analytics. TDengine AI is a self-learning system that lets the data speak for itself.
5. Since there are often many elements of the same type, to reduce configuration effort, it provides element templates. Any element can be created from a template, improving configuration efficiency and achieving data standardization.
6. Real-time analytics can be triggered by new data input, events, time, status, sessions, etc. The triggered computation can be a simple expression, a time window aggregation, or aggregation across multiple entities. Analysis results can be saved and can also generate events.
7. Based on TDgpt, it provides data prediction, completion, and anomaly detection.
8. Provides automatic physical unit conversion. New units can be defined based on basic physical units.
9. Offers version management for system configuration, allowing multiple users to modify the system simultaneously for better collaboration.
10. Provides enterprise-grade security features such as single sign-on and role-based access control.

### Special Notes

1. TDengine AI does not store any time-series data internally; it relies entirely on external TDengine or other databases. However, to support data dictionaries and some metadata queries, it provides its own two-dimensional tables, which can also be dynamically obtained from external relational databases.
2. TDengine AI is a data management platform to help users gain operational insights. It is not a complete IoT or Industrial Internet platform, so it does not provide control command issuance, device connection management, firmware updates, etc. However, it can be seamlessly integrated with industrial internet platforms.
3. TDengine AI does not provide personnel, scheduling, or maintenance work order management required for enterprise management, but supports seamless integration with these systems via SDKs or direct database connections to obtain metadata.

## Application Scenarios

TDengine AI can be widely used in IoT, industrial, and other fields, including:

1. Industrial Process Monitoring and Optimization

- Manufacturing: Real-time monitoring of production line equipment status (such as temperature, pressure, vibration), optimizing production efficiency, and reducing downtime.
- Chemical/Petrochemical: Tracking real-time data of reactors, pipelines, and storage tanks to ensure process safety and energy efficiency.
- Power and Energy: Managing real-time performance of generators, grid loads, and renewable energy (wind, solar).

2. Equipment Health and Predictive Maintenance

- Predicting failure risks by analyzing equipment sensor data (such as vibration, current, temperature) to avoid unexpected downtime.
- Lifecycle management of critical equipment in aviation, power generation, rail transit, etc.

3. Energy Management and Sustainability

- Real-time monitoring of resource consumption (water, electricity, gas), identifying energy-saving opportunities (such as building efficiency, factory carbon footprint).
- Supporting carbon emission data tracking to help enterprises achieve ESG goals.

4. Infrastructure and Smart Cities

- Utilities: Real-time monitoring of water, gas, electricity, and pipeline leak detection.
- Smart Buildings: Integration of real-time data from building automation systems (HVAC, lighting, etc.).
- Transportation Infrastructure: Real-time monitoring and maintenance of tunnels, bridges, high-speed rail, subways, airports, etc.

5. Life Sciences and Pharmaceuticals

- Monitoring of biopharmaceutical production, such as fermentation and cell culture processes, purification, and downstream processes.
- Batch production monitoring in strictly regulated environments (such as GMP) to ensure pharmaceutical production parameters meet standards.

6. Data Centers and IT Operations

- Monitoring real-time performance of servers and network devices (CPU, memory, traffic), optimizing resource allocation.
- Environmental and energy monitoring of data centers.
- Monitoring real-time performance of various internet services.

It covers many fields such as smart manufacturing, power generation, power grids, oil, petrochemicals, automotive, mining, new energy, pharmaceuticals, and IT facilities.

## Relationship with TDengine

TDengine is a highly efficient, horizontally scalable time-series database. Although it supports up to 128 tags, it cannot fully support all types of enterprise operational metadata, such as measurement units, upper and lower limits, and target values for a time-series column. Its stream processing capabilities also lack good management, and it does not provide visualization or alerting. TDengine AI complements TDengine by enhancing metadata management and making TDengine's powerful stream processing capabilities accessible through simple user interactions. It is an application system built on top of TDengine. TDengine AI plans to support other time-series databases, but its integration with TDengine is the most efficient.

## Comparison with Other Products

In terms of functionality alone, TDengine AI corresponds to PI Asset Framework + PI Vision in the PI System. If TDengine is included, then TDengine + TDengine AI is equivalent to PI System (including PI Interface + PI Data Archive + PI Asset Framework + PI Vision). Many real-time databases on the market are also benchmarked against the PI System.

Compared with PI System and other real-time databases, the advantages of TDengine + TDengine AI are:

1. With the help of AI, TDengine AI can automatically generate real-time analytics, dashboards, and reports.
2. It has strong horizontal scalability, supporting more than 1 billion measurement points.
3. It is highly open, supporting JDBC, ODBC, REST API, and seamless integration with many third-party software.
4. Supports data subscription, allowing data to flow in and out in real time, ensuring the system is not vendor-locked.
5. Supports more operating environments, including Linux and Windows, containers, virtual machines, physical machines, and private cloud deployments.

The only disadvantage is that the types of supported data sources are still limited, currently only supporting OPC-UA/OPC-DA, MQTT, etc.

Compared with general data management platforms, TDengine AI has the following advantages:

1. By fully utilizing the characteristics of time-series data, it has more than ten times the write and query performance of general platforms.
2. Its unique "one device, one table" design achieves a data compression rate ten times higher than general platforms.
3. Provides an end-to-end solution from data collection, cleaning, storage, analysis, governance, real-time analytics, visualization, to event management.
4. Supports configuration-based, no-code data acquisition directly from industrial gateways.

The only disadvantage compared to general data management platforms is that TDengine AI is only efficient for time-series data.
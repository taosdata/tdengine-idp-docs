---
title: Real-Time Analytics
---

In IoT and industrial scenarios, real-time analytics is critically important. IDMP allows real-time analysis for each element, whether it's to monitor the operational status of a specific device or to evaluate key performance indicators across an entire enterprise group—supporting analytics needs at all levels. IDMP’s real-time analysis is fully built on TDengine TSDB’s stream processing engine, but is configured through a graphical interface to lower the barrier to use.

Real-time analytics runs in the background on TDengine TSDB. It can generate new data and write it back to the TSDB, or trigger events, which IDMP then uses to notify the appropriate personnel. Created analytics tasks can be stopped or restarted as needed. At its core, an analysis is simply a SQL query that runs based on a specific business need, and the query result is the analysis output. For real-time analytics, these queries are not triggered manually but are executed automatically based on defined trigger conditions. TDengine fully decouples the trigger mechanism from the analytics logic, providing a high degree of flexibility. The following section provides a more detailed guide on how to create real-time analytics tasks.

## Basic Analytics Configuration

When creating an analysis task, you can configure the name, category, and description. You can also choose whether to start the analysis immediately and whether to recalculate in case of out-of-order data.

## Trigger Types

TDengine provides multiple trigger types for real-time analytics. Except for the Periodic Time Window, all other triggers depend on the element’s attributes, and these attributes must have a data reference of type TDengine Metric. In other words, if an attribute is not of the TDengine Metric type, it cannot be used to trigger real-time analytics—except via periodic scheduling. TDengine supports the following trigger types:

1. Sliding Window: Based on the event time of collected data, the analysis is triggered at fixed intervals. You can configure the slide duration.
1. Periodic Time Window: Based on TDengine's system time (wall clock), the analysis runs periodically at a fixed interval. You can also configure a time offset, which delays the analysis by a specified amount after the end of each period. For example, if you want to generate a daily report with a 1-day period and a 2-hour offset, the analysis will start at 2:00 AM. This trigger is functionally equivalent to a scheduled task in other systems.
1. Data Input: The analysis is triggered whenever new data is written to a specified attribute of the element. You can specify exactly which attribute should trigger the analysis upon receiving new data.
1. State Window: Triggers the analysis when the value of a specified attribute changes. The attribute’s data type must be integer.
1. Event Window: You must define both a start condition and an end condition for the event. Each condition is a computed expression based on an element’s attribute. If the result of the expression is greater than 0, the condition is considered met; if less than 0, it is not met. For the start condition, you can optionally set a duration requirement to prevent false triggers caused by data jitter. If the condition is met but does not persist for the configured duration, the event will not be triggered.
1. Count Window: Triggers the analysis when the number of new records for an element’s attribute in the database reaches a specified threshold. You can specify a particular attribute; if not specified, the count includes all new records across attributes.
1. Session Window: Triggers the analysis when no new data has been written to any attribute of an element for a specified period of time.

## Event Generation

Once an analysis is triggered and executed, you can choose whether to generate an event. If event generation is enabled, you can configure whether the event requires acknowledgment and specify its severity level. More details about events will be covered in the Event Management section.

## Calculation Logic

When the trigger condition is met, TDengine initiates the analysis computation. In IDMP, you can specify the target of the analysis, whether to apply time window aggregation, the timestamp for the output result, the expression used for computation, and the destination where the result will be stored.

1. **Calculation On:**

   The analysis can be performed either on the attributes of the element itself, or on aggregated data from its child elements. When performing aggregation on child elements, you need to select the corresponding child element template and may also define filter conditions for the child elements. This design is especially useful for statistical analysis of data collected from child elements.

2. **Rollup on Windows:**

   The analysis can perform aggregation over a time window. You need to specify the start and end time of the window. The actual aggregation logic is defined in the expression for result output.

   For Periodic Window, Event Window, State Window, Session Window, and Count Window, the window is already implicitly defined by the trigger type—with Window Start and Window End provided by the system. On top of that, you can specify a time offset to further customize the window boundaries.

   For a Sliding Window, you can specify an interval. If the analysis is triggered at time T, the window is defined as the period from T - interval to T.

1. **Output Timestamp:**

   Each analysis result must have a timestamp, and you can configure how this timestamp is generated.

   For Data Input and Sliding Window triggers, the trigger time is used as the result’s timestamp by default, but you can also apply a time offset.

   For other trigger types that are window-based, you can choose to use either the start or end time of the window as the timestamp, and optionally apply an offset.

1. **Output Attributes:**

   The result of the analysis must be saved to one or more attributes of the element. If an event is generated, the result can also be saved to the event’s attributes.

   Click “+” to create a new analysis computation. You can define multiple computations under the same trigger.

   Click the expression field to define the computation logic. Click on element attributes to choose where to store the result—or create a new attribute on the fly. If the result is tied to an event, you can click event attributes to save the result there.

## Other

When the computation is performed on child elements, the system aggregates data from all child elements that meet the specified conditions. There are two possible scenarios:

1. No time window aggregation selected: In this case, the aggregation is performed on a snapshot of the qualifying child elements at the trigger time. For example, you might calculate the maximum or average power output of all wind turbines at a specific moment.
1. Time window aggregation selected: Here, the aggregation is applied to data from the qualifying child elements over a defined time window. For example, you might calculate the average power output over the past 10 minutes for all wind turbines.

The real-time analysis itself is executed within the TDengine TSDB stream processing engine, so it does not consume IDMP’s computing resources—but you configure and manage it through the IDMP interface.

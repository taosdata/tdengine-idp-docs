---
title: Event Management
---

In addition to real-time dashboards and reports, one of the most critical aspects of business operations is handling various events. That’s why IDMP provides event management features, along with basic root cause analysis capabilities. In IDMP, events can be generated automatically through real-time analytics, or they can also be manually created. Each element has its own event list, but you can also view all events across all elements by going to the "Events" section in the main menu.

1. **General Event Information**

   Each event contains basic information such as its name, description, and category. More importantly, it also includes the start time, end time, severity level, the associated element, and the analysis that generated it. Events can also carry attributes, allowing analysis results to be written directly into the event’s properties. Additional collaboration features include the ability to add comments and view the notification history for each event.

   Events can be configured to require acknowledgment. If an event is set to require acknowledgment, and it is not confirmed within the defined resend interval, the system will automatically resend the notification to remind users to respond. You can acknowledge the event either from the event detail page or directly from the event list view.

1. **Event Attributes**

   An event can also have multiple attributes, which are used to record specific values at the time the event occurred—helpful for post-event analysis. When configuring real-time analytics, you can choose to output the analysis results directly into the event’s attributes.

1. **Trend Chart Analysis**

   From the event detail page, or by clicking the three-dot menu on the right side of the event list and selecting "Trend Chart Analysis", you can automatically add the event-related attributes to a trend chart, with the start and end times clearly marked. You can also add any other time-series data to the chart, making it easier to observe trend changes before and after the event and analyze the possible causes of the event.

1. **Active Events**

   If an event has occurred but has not yet been closed, it is considered an active event. During this time, you can acknowledge the event, view its trend chart, and analyze the root cause. The event list will clearly indicate whether an event is still active. Once an event is closed, the system will no longer send any notification messages related to it.

1. **Event Notification Messages**

   When an event occurs, the system can automatically send a message to the designated contact based on its severity level and the configured notification rules. If the event requires acknowledgment and is not acknowledged within the specified Resend Interval, and the event is still open, the system will resend the notification. If an escalation contact is defined in the notification rule, and the event is still unacknowledged and not closed within the configured Escalation Interval, the system will send a message to the escalation contact.

1. **Event Notification Rules**

   For any given element, all of its events share a single notification rule. Within the rule, you can specify the contact point, resend interval, escalation contact, and escalation interval. The message body is a text template, but the system comes with predefined content and supports placeholder variables for dynamic substitution.

   Every event is tied to an event template. Whether a notification is sent depends on the severity level configured in the event template. A notification is only sent if the event’s severity level is equal to or higher than the threshold defined for the device. This design ensures that even events from the same template can have different severity levels, helping to prevent notification overload.

   To simplify management, child elements automatically inherit the parent element’s notification rule at the time of creation. However, you can modify the rule afterward—once modified, the new notification rule will apply to that element and all its descendants.

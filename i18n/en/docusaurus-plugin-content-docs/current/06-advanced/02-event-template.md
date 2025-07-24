---
title: Event Template
---

Real-time analytics in IDMP can generate events. To better manage these events, IDMP requires that an event template be provided when creating a real-time analysis task.

Event templates support inheritance, so you can define base templates. An event template can also be marked as “base template only,” in which case it cannot be used directly to create events.

An event consists of two parts: general information and attributes. Therefore, an event template consists of both an event general template and an event attribute template.

Event templates are managed under the “Knowledge Base” section in the main menu.

## General Event Template

To create a new event template, go to the Knowledge Base, click Event Templates, then click the “+” button.

For a new event template, you need to provide a name and description, and select its category, base template, and severity level. You can also configure whether the template is base-only, allows extension, or requires acknowledgment, among other settings.

Every event must have a name, so you need to define a naming pattern. In the input field, you can enter static text and click the “+” icon on the right to insert replacement strings, such as element name, analysis name, start time, end time, etc. It’s recommended to include the element name, analysis name, and start time in the pattern, so the event name clearly shows which element and analysis generated it and when.

## Event Attribute Template

An event can have associated attributes that record relevant values at the time the event occurs. You can configure the name, category, data type, and default value for each attribute. You can also set whether the attribute is a constant, whether it should be hidden, or excluded.

Event attributes do not support data reference settings, because all event-related data is stored in IDMP’s built-in relational database.

When configuring real-time analysis, you can specify that the output of a calculation be saved to a particular event attribute.

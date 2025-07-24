---
title: Using the GUI
---

In IoT and industrial scenarios, there are often large numbers of devices or logical entities of the same type. To reduce modeling and maintenance workload and to ensure data standardization, IDMP provides Element Templates. When creating a new element, users can choose to base it on an existing template. This feature is available under the “Knowledge Base” section in the main menu.

Element templates support inheritance, meaning you can create a new template based on an existing one. For example, you might create a general template for vehicles, then create a template for electric vehicles based on that, and further derive a template for the Tesla brand from the electric vehicle template.

Since an element consists of various components—general info, attributes, analytics, panels, dashboards, and notifications—an element template also includes a general element template, attribute templates, analytics templates, panel templates, dashboard templates, and a notification template. When creating a new element template, the general element template is created first.

## Placeholder Variables

When creating templates—whether for data references, element names, event names, or others—it's important that these values are not hardcoded, but instead dynamically generated based on the actual instance being created. To ensure flexibility and automation, IDMP provides a set of placeholder variables, such as:

- Template name: `${Template#name}`
- Element name: `${elementName}`
- Analysis name: `${analysisName}`
- Start time: `${startTime}`
­ End time: `${endTime}`

There are many more placeholder variables available, but you don’t need to memorize them. In any input field, IDMP will automatically display the valid placeholder variables that can be used in that context, along with readable descriptions, so there’s no need to refer back to the user manual.

The placeholders listed above are system-provided, but for even greater flexibility, IDMP also allows you to define custom placeholder keywords within element templates—and you can define multiple custom keywords. To facilitate collaboration, when creating a custom KEYWORD placeholder, you’re also required to provide a descriptive help message. When someone uses that custom keyword later, IDMP will show your help message to guide them in entering the correct value.

## General Element Template

To create a General Element Template, click “Create Element Template” from the three-dot menu in the left-side tree structure, or click the “+” button on the element template list page. There are a few important configuration options to note:

1. "Base Template Only": If selected, this template serves only as a base and cannot be used directly to create elements.
1. "Allow Extension":
If selected, this template allows customization when used—such as adding personalized attributes, analytics, panels, etc. If not selected, any element created from this template must strictly follow the template definition, with no personalized extensions allowed.
1. "Element Naming Pattern" defines how the name of an element created from this template is automatically generated. You can enter any text, and by clicking the “+” button next to the input field, you’ll see a list of available system placeholder variables (e.g., "Template Name"). Clicking on it will insert the placeholder `${Template#name}` into the input box. When you later create an element from this template, its name will automatically include the template name.
   Clicking the “+” button will also show “KEYWORD”, which is a special user-defined placeholder. When you select it, `${KEYWORD1}` is inserted into the input box, and you’ll be prompted to enter a description—this is a help message that will appear whenever this KEYWORD is used. If a template includes a KEYWORD, then whenever you use that template to create an element, the system will prompt you to enter a value for that KEYWORD. These custom KEYWORD placeholders can be used not only in the element name but also throughout the attribute templates, analytics templates, and panel templates of the element—providing maximum flexibility for string construction. For more detailed usage, please refer to the examples in later sections.
1. You can also enter location information and additional properties for the template.

## Attribute Templates

Once you’ve created an element template, you need to define attribute templates within it. To do this, click on the element template, then go to the dropdown menu at the end of the breadcrumb bar, select “Attribute Templates”, and click “+” to create a new one.

When creating an attribute template, you’ll need to fill in the usual fields such as attribute name, category, data type, unit of measurement, default value, and description—these are straightforward and require no further explanation.

More importantly, you’ll need to set the data reference type. The default is None, but if you select “TDengine Tag” or “TDengine Metric”, it means that this attribute maps to a specific column in a table within a TDengine TSDB database. Since templates are reusable, you cannot hardcode fixed table names or column names, as that would cause every element created from the template to point to the exact same location. Instead, you must use placeholder variables. When configuring the data reference, the system will pop up a dialog where you choose the TDengine connection, and select the database. You also need to enter the “Table Name Pattern”. Click “+” to insert available placeholders or define a custom KEYWORD if needed. Then enter the column name, which can also include placeholder variables. Click “Check”, and the system will verify whether the configuration is valid.

## Panel, Analysis, Dashboard, and Notification Templates

After creating the general element template and attribute templates, you can proceed to create panel templates, analysis templates, dashboard templates, and notification templates. To do so, click on the element template, then go to the dropdown menu at the end of the breadcrumb bar, select the desired section, and click “+” to create a new template.

The process of creating these templates is identical to creating standard panels, analyses, dashboards, and notifications, so it will not be explained in detail here.

## An Example Element Template

Suppose in the TSDB database smdb, there is a supertable called SMeter, which contains two time-series columns: current and voltage, and a tag column called model. This supertable has subtables like smeter-1, smeter-2, etc. In IDMP, we want to create an element template called “Smart Meter”, with three attributes: Current, Voltage, and Model, and we want each sub-table in the TSDB SMeter to correspond to one element in IDMP based on the “Smart Meter” template. We want the element naming rule to follow the pattern `DEV-<subtable-name>`. The simplest way to achieve this is to use a custom placeholder keyword (KEYWORD), where the KEYWORD represents the subtable name. So, when creating the element template, we should proceed as follows:

1. Click “Create Element Template”, and set the name to “Smart Meter”. In the “Element Naming Pattern” input box, enter "DEV-", then click the “+” button and select "KEYWORD". The system will prompt you to enter a help message—you can enter “Please enter the sub-table name from the SMeter super table in the smdb database”. This will serve as a helpful reminder in the future. The “Element Naming Pattern” input box will now contain `DEV-${KEYWORD1}`.
1. After creating the general element template “Smart Meter”, start creating its attribute templates. We’ll use “Current” as an example: Set the attribute name to “Current” and choose a data type consistent with the TSDB, e.g., float. Set the Data Reference Type to TDengine Metric and click to configure the data reference. In the pop-up window, select the appropriate TDengine connection and choose the smdb database. In the “Table Name Pattern” input box, click “+” and select KEYWORD1. In the Column Name input box, enter "current". Click “Check” and enter the name of an existing sub-table—if everything is correct, the validation should pass.
1. Repeat step 2 to create the “Voltage” attribute template. For the “Model” attribute, set the Data Reference Type to TDengine Tag. All other configurations are the same as in step 2.

With that, the element template and its associated attribute templates have been successfully created. When you create a new element based on the “Smart Meter” template, the system will display a prompt asking for KEYWORD1, with the input field showing the hint "Please enter the subtable name from the SMeter super table in the smdb database.” At this point, if you enter an existing subtable name in TSDB, such as smeter-1, the element will be automatically created with the name DEV-smeter-1. If you check its three attributes, their data reference configurations should look like this:

- Current: `connections['TDengine']/databases['smdb']/smeter-1/columns[current]`
- Voltage: `connections['TDengine']/databases['smdb']/smeter-1/columns[voltage]`
- Model: `connections['TDengine']/databases['smdb']/smeter-1/columns[model]`

The custom placeholder (KEYWORD) mechanism provided by IDMP is highly flexible and powerful, making it easy to automatically and efficiently map data from TSDB into IDMP in bulk. The automatic import of asset models from TDengine connections is precisely enabled through the use of KEYWORDs.

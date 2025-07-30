## Load Example Scenarios

To help you get started quickly, TDengine IDMP comes with the following seven built-in example scenarios. You can load these datasets to explore the powerful capabilities of the system.

1. Utilities: Smart electricity meters and water meters

1. Vehicle Management: Fleet management for logistics companies
1. Photovoltaic: Power generation monitoring for solar power stations
1. Oil Wells: Production monitoring of oil wells in oilfields
1. Wastewater Treatment: Aeration process in wastewater treatment plants
1. Renewable Energy: Centralized monitoring of renewable energy sources

In the following example, we will use data from the "Utilities" scenario for demonstration. Please select the "Utilities" scenario and click the Confirm button. The system will automatically load the scenario data. This process may take a few minutes—thank you for your patience.

## View Element Information

After loading the demo scenario, you will be taken to the main web interface of TDengine IDMP. By default, you’ll land on the Element Browser page, where you can view and manage the imported element data.

1. In the sidebar, select Elements. Once the "Utilities" scenario is fully loaded, you’ll be able to browse the specific element data under it.
1. The "Utilities" scenario includes electricity and water meter data from California, Georgia, New York, and their respective cities or counties. You can explore different geographical locations via the tree structure on the left.
1. Select the element California > San Diego County > Chula Vista > em-10, which represents electricity meter number 10 in Chula Vista, California. Click the dropdown in the breadcrumb navigation bar at the top and select General to view its general information, including its description. Then select Attributes from the dropdown to view its attribute data such as current and voltage.

![attributes](/docs-img/get-started/attributes.png)

## Try AI-Generated Panels

One of the most powerful features in TDengine IDMP is the ability to automatically generate data panels using AI.

1. Select the element California > San Diego County > Chula Vista > em-10, then use the dropdown in the breadcrumb navigation at the top and choose Panel.
1. If AI Recommendations is enabled, you’ll see a set of AI-recommended panels on the Panel page. Click the + More Recommendations button to generate additional panel suggestions.
1. You can also describe the panel you want in natural language using the input box below the recommendations. For example, you might enter: “Show a line chart of the voltage and current changes every minute for electricity meter em-10 over the past 24 hours.” Then click Ask Me, and the AI will automatically generate the panel you described.

![panels](/docs-img/get-started/panels.png)

## Try AI-Powered Analysis

TDengine IDMP’s AI Analysis feature helps you detect data changes in real time. When anomalies occur, the system can automatically generate related events and trigger alert notifications.

1. Select the element California > San Diego County > Chula Vista > em-10, then use the dropdown in the breadcrumb navigation at the top and choose Analysis.
1. If AI Recommendations is enabled, you’ll see a set of AI-recommended analyses on the Analysis page. Click the + More Recommendations button to generate additional suggestions.
1. If you're interested in a specific suggestion, click the link to open the analysis creation page. There, you can fine-tune the AI-generated configuration. Once ready, click Save to complete the setup.
1. You can also describe your analysis in natural language using the input box next to the recommendations.
   For example: “If power fluctuation for electricity meter em-10 exceeds ±20% for 30 minutes, generate a ‘warning’ level alert and calculate the fluctuation range.” Press Enter, and the AI will automatically generate the desired analysis for you.

![analysis](/docs-img/get-started/analysis.png)

## What to Do Next

At this point, you’ve successfully explored how to view element data and use AI to automatically generate dashboards and perform analysis using the sample dataset. Next, we encourage you to dive deeper into TDengine IDMP’s full capabilities and best practices to make the most of its powerful data management and analytics features.

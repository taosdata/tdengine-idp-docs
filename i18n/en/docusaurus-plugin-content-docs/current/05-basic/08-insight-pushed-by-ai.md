---
title: AI Insights
---

Creating panels and real-time analytics manually requires a certain level of learning and a solid understanding of business context. To address this, IDMP leverages AI technology to intelligently perceive business scenarios based on collected data and configured business semantics and context. It can then proactively recommend the necessary dashboards and real-time analytics for business operations—significantly reducing the learning curve and the reliance on deep business knowledge.

1. **Basic Usage**

   If you're not satisfied with a recommended analysis or panel, you can click "Dislike", and the system will generate a new recommendation.

   If you're interested in a recommended panel, click the three-dot icon in the top-right corner of the panel thumbnail and select "Generate". The IDMP AI agent will automatically generate the final panel. You can then edit and modify the panel as needed and click Save to permanently store it.
   
   If you're interested in a recommended analysis, simply click on it. The IDMP AI agent will automatically populate all required fields for the real-time analysis and open it in edit mode. You can review, adjust, and save it—after which the analysis is officially stored.
   
1. **Composite Metrics**
   
   For any given scenario, IDMP uses AI to automatically generate a standardized set of composite metrics, which serve as the foundation for further panel and real-time analysis recommendations. To access them, go to the main menu, click “Knowledge Base”, then select “Composite Metrics”, and choose a tree structure. All information shown here is AI-generated. If you find any inaccuracies or missing content, you can download the file, make corrections, and upload it again.
   
   The accuracy of AI-generated metrics depends entirely on how much contextual information you provided during modeling. If you've made significant updates to your context, you can click the “Regenerate” button in the top right of the composite metrics list page. Generating composite metrics typically takes 5 to 10 minutes, so please be patient and avoid clicking the button multiple times.
   
1. **Reset Recommendation Cache**
   
   To save AI computing resources and improve user experience, IDMP caches each batch of recommended panels or real-time analytics. To start fresh, click the avatar icon in the top-right corner of the browser, and select “Reset AI Cached Data”. This will clear all cached AI recommendations, allowing the system to generate a new set from scratch.
   
1. **AI Compute and Model Requirements**
   
   IDMP has no significant requirements for AI computing power. AI resources are only needed when generating composite metrics, recommended panels, or real-time analytics. Normal use of IDMP does not consume any AI compute. The AI server can be public or privately deployed.
   
   IDMP supports all major language models, as long as you provide the model’s URL and token. Model fine-tuning is not required. To configure the AI connection, click the avatar icon in the top-right corner of the browser and enter the Admin Console.
   
1. **Disable AI** 
   
   To disable AI system-wide, simply click the avatar icon in the top-right corner of the browser, go to the Admin Console, and either pause or remove the AI connection.
   
   You can also disable AI recommendations directly from the analysis list or panel list pages.

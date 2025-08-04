---
title: Insights Pushed by AI
---

TDengine IDMP provides insights pushed by AI. Creating panels and real-time analytics manually requires a certain level of learning and a solid understanding of business context. To address this, TDengine IDMP leverages AI technology to intelligently perceive business scenarios based on collected data and configured business semantics and context. It can then proactively recommend the necessary dashboards and real-time analytics for business operations, significantly reducing the learning curve and the reliance on domain expertise.

## Basic Usage

If you are not satisfied with a recommended analysis or panel, you can click **Dislike** and the system will generate a new recommendation.

If you are interested in a recommended panel, click the three-dot icon in the top-right corner of the panel thumbnail and select **Generate**. The AI agent will automatically generate the panel. You can then edit and modify the panel as needed and click **Save** to permanently store it.

If you are interested in a recommended analysis, click on it. The AI agent will automatically populate all required fields for the analysis and open it in edit mode. You can review, modify, and save it.

## Composite Metrics

TDengine IDMP uses AI to generate a standardized set of composite metrics for an application scenario. These serve as the foundation for further panel and analysis recommendations. To access them, click **Libraries** in the main menu and select **Composite Metrics** in the sidebar. All information in the composite metrics page is AI-generated. If you find any inaccuracies or missing content, you can download the file, make corrections, and upload it again.

The accuracy of AI-generated metrics depends on how much contextual information you provide during modeling. If you have made significant updates to your context, you can click the **Regenerate** button in the top right of the composite metrics page to update your composite metrics accordingly. Regenerating composite metrics typically takes 5 to 10 minutes.

## Reset Recommendation Cache

To save AI computing resources and improve user experience, TDengine IDMP caches each batch of recommended panels or real-time analytics. To reset these recommendations, click your profile in the top right and select **Reset AI Cached Data**. This removes all cached AI recommendations and generates a new set from scratch.

## AI Compute and Model Requirements

TDengine IDMP has no significant requirements for AI compute power. AI resources are needed only when generating composite metrics, recommended panels, and recommended analytics. Normal use of TDengine IDMP does not consume any AI compute. You can use a public or privately deployed AI server.

TDengine IDMP supports all major language models as long as you provide the URL and token of the model. Model fine-tuning is not required. To configure an AI connection, click your profile in the top right and select **Admin Console**.

To disable AI system-wide, click your profile in the top right corner and select **Admin Console**. In the sidebar, click **Connections** and either disable or delete the AI connection.

You can also disable AI recommendations from the analysis or panel pages.

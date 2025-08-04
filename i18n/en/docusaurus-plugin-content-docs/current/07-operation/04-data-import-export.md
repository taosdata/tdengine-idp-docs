---
title: Importing and Exporting Data
---

TDengine IDMP can import metadata from TDengine TSDB to generate a data model.

## TDengine TSDB Data Import

From the outset, TDengine TSDB was designed with a clear distinction between static tags and dynamic time-series data. It also supports hierarchical structures in static tags using “.” as a delimiter. Additionally, TDengine introduced the concept of supertables—templates for similar types of devices—where a single supertable can have multiple subtable instances. This design aligns perfectly with IDMP’s tree-based modeling and element templates, making data import extremely straightforward when good data modeling is already in place within TDengine.

Each super table in TSDB corresponds to an element template in IDMP. Each sub-table under a super table maps to an instance of that element template in IDMP, with the sub-table name used as the element name. Sub-table tag values are mapped to the element’s static properties (with data reference type set to TDengine Tag), and the time-series data is mapped to dynamic data (data reference type set to TDengine Metric). Hierarchical tags in sub-tables (such as the location tag Location) are used directly as the element’s tree path. With this mapping, importing metadata from TSDB into IDMP becomes highly efficient.

The specific import steps are as follows:

1. In the Admin Console, create a connection to the TDengine TSDB.
2. On the connection list page or from the sidebar, click the three-dot menu and select **Data Import**.
3. At the top of the data import page, a drop-down menu displays all databases under the selected connection. After you choose a database, the drop-down menu on the right will show all supertables within the database.
4. Each supertable must be configured individually. If you do not wish to import a specific supertable, choose **Ignore** in the top right corner. If you do want to import it, proceed with the following steps:
    * The system will display the list of tags for the selected supertable. Choose one or more tags to serve as the tree structure path. If multiple tags are suitable, you can select more than one—this way, the same element will appear in multiple tree structures. For tags not used in the path, you may choose to map them as static attributes of the element. You can also leave a tag unmapped to discard it entirely.
    * The system will list all time-series columns in the super table. You can choose which ones to import. Imported columns will become dynamic attributes of the element.
    * By default, each attribute name matches the column name in the TSDB, but you may rename them as needed.
5. After configuring a supertable, click **Next Supertable**. Once all supertables are configured, click the **Finish** icon in the action bar or the Finish button at the bottom to officially create the data import task. You can also click Finish at any time to accept the system's default configuration and proceed with the import immediately.
6. A popup will appear showing the import progress. When complete, the system will display statistics such as the number of element templates and elements created.

**Auto Sync:** After the import task is completed, IDMP will monitor metadata changes in the TDengine TSDB. For configured supertables, if new subtables are added or existing ones are removed, IDMP will automatically synchronize those changes.

**Reconfigure:** If new supertables are added to the TSDB or previously ignored ones need to be included, you can click Rebuild to reconfigure. Existing settings will be loaded for editing.

**Data:** After importing, it’s recommended to enrich the data whenever possible. This includes adding physical units, categories, descriptions, and limit values to each element, as well as adding metadata to non-leaf nodes. By assigning business semantics to your data, you make your data platform AI-ready, allowing AI to better recommend dashboards and real-time analyses.

## TDengine TSDB Asset Model

If data has already been written into TSDB but lacks proper modeling—such as missing hierarchical tags, or using a single-column model despite each device having multiple data points— then the data cannot be directly imported into IDMP. In such cases, IDMP offers a flexible yet more complex configuration method that allows you to consolidate multiple super tables into a single element template. By using string builders and naming patterns, you can construct a hierarchical structure manually. This approach effectively resolves the limitations of single-column models and enables data from the OT domain (e.g., PLC-collected data) to be better structured and semantically enriched in the IT domain—making it easier to extract meaningful business insights.

In this scenario, you first need to create the element template and define its attributes. Each supertable in TSDB may only cover a portion of the attributes in the element template, and each subtable may only correspond to part of a single element’s attributes. To handle this, IDMP automatically creates virtual supertables and virtual subtables internally—merging multiple subtables into a virtual table and combining multiple supertables into a virtual supertable. This process is completely transparent to the user.
The overall data import workflow includes: selecting the database and supertables, choosing the corresponding element template, configuring the element name and path, and then mapping the tags and time-series data from the supertables to the attributes of the element template.

The specific steps are as follows:

1. In the Admin Console, create a connection to the TDengine TSDB.
2. On the connection list page, or from the left-side tree structure view, click the three-dot menu and select **Asset Model**.
3. At the top of the import page, a drop-down menu will display all databases under the selected connection. After choosing a database, the drop-down menu on the right will show all supertables within that database.
4. Select an element template.
5. Configure the element name. Click the + button to see available replacement strings, such as subtable tag values. You can assemble the name using these dynamic parts along with fixed strings, prefixes, or suffixes. Click **Preview** to see the resulting element names and confirm they are correct.
6. Configure the element path. Click the + button to see available replacement strings, such as subtable tag values. You can assemble the name using these dynamic parts along with fixed strings, prefixes, or suffixes. Click **Preview** to see the resulting element paths and confirm they are correct..
7. Map tag values: You can map the supertable’s tag values to the element’s properties, or choose **None** to skip mapping.
8. Map metric values: You can map the supertable’s time-series data to the element’s properties, or choose **None** to skip mapping.
9. Set subtable filtering conditions: Not all subtables under a supertable need to be mapped to the same element template. For example, in single-point models, users may group subtables by data type. Subtables in the same supertable might come from different device types. In such cases, you need to use tag values to filter them appropriately.
10. Click **Finish**. The system will then create a data import task.

The steps above only complete the mapping configuration for a single supertable or just a portion of its metrics. To complete a full data import, you must to create multiple asset models. In extreme cases, such as single-column models, if each device type has 100 attributes and there are 10 different device types, you may need to create 100 × 10 asset models.

**Automatic synchronization:** Once an asset model is created, if new subtables are added in TDengine TSDB, they will be automatically synced to IDMP without manual intervention.

**New supertables:** After asset models are created, if new supertables are added in TDengine TSDB, new asset models must be created. Otherwise, metadata from the new supertables cannot be imported into IDMP, and new data assets will not be visible.

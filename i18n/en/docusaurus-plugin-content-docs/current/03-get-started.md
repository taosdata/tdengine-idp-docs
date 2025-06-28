# Quick Start

TDengine Industrial Data Management Platform fully leverages large AI models to automatically sense application scenarios based on collected data, automatically generate real-time analytics, reports, and visualization dashboards, greatly lowering the usage threshold. It helps users discover many novel reports and dashboards, significantly reducing the need for and reliance on data analysts and process engineers, shortening the distance from raw data to business insights and decisions, and improving data consumption efficiency.

This section will guide you through the complete process from downloading, installing, and starting the service to completing configuration and analysis operations via the web interface.

:::info
TDengine IDMP not only provides containerized deployment and installation packages, but also offers a fully managed TDengine IDMP Cloud service. You can easily experience the data management services provided by TDengine IDMP with just a few registration steps. Welcome to try it out on the TDengine IDMP Cloud registration page.
:::

## Quick Installation

TDengine IDMP supports multiple installation and deployment methods, and you can experience its powerful features and convenience on different operating systems and architectures. For supported operating systems and architectures, see [Installation Package Introduction](./operation/installation/installer). Below, we introduce two common installation and deployment methods.

### Running with Docker Container

TDengine IDMP provides a Docker image, allowing users to quickly start the TDengine IDMP service using Docker. The steps are as follows:

1. Clone the [tdengine-idmp-deployment](https://github.com/taosdata/tdengine-idmp-deployment) repository
   ```bash
   git clone https://github.com/taosdata/tdengine-idmp-deployment.git
   ```
2. Use Docker Compose to start TDengine IDMP
   ```bash
   cd tdengine-idmp-deployment/docker
   docker compose up -d
   ```

This command will automatically pull the required images (if not present locally) and start **TDengine IDMP service and TDengine TSDB service** in the background. By default, the TDengine IDMP service will start on port 6042 of the host: [http://localhost:6042](http://localhost:6042)
:::tip
To change the port, edit the `ports` configuration in the `docker-compose.yml` file.
:::

### Running with Installation Package

TDengine IDMP provides installation packages for multiple platforms. The following steps use Linux as an example to demonstrate how to download and install TDengine IDMP.
1. Go to the [Version List](./release-history/version) page
2. Select the latest `.tar.gz` installation package and click the download link
3. Unzip and execute the installation script to complete the installation (replace `<version>` with the actual version number)
   ```bash
   tar zxvf tdengine-idmp-enterprise-<version>-linux.tar.gz 
   cd tdengine-idmp-enterprise-<version>
   ./install.sh
   ```
4. After installation, run the following command to start the TDengine IDMP service:
   ```bash
   svc-tdengine-idmp start
   ```
At this point, the TDengine IDMP service has started on port 6042 of the host: [http://localhost:6042](http://localhost:6042).

## Quick Start

In TDengine IDMP, you can quickly experience features such as data import, element browsing, and AI panel generation through the web interface.

:::tip
Preparation

1. In this demo, we will use TDengine TSDB as the data source for TDengine IDMP;
2. If you are running with Docker, make sure a TDengine TSDB service is already running in your environment;
3. If you are using the installation package, you need to install and deploy the TDengine TSDB service. For details, see: [Quick Start with Installation Package for TDengine](https://docs.taosdata.com/get-started/package/).

:::

### Create a Connection

1. Enter [http://localhost:6042](http://localhost:6042) in your browser to access the TDengine IDMP service. The default username and password are: `jhtao@taosdata.com/123456`;
2. After logging in, you will first enter the element browser page. Once the data is imported, you can use AI to automatically generate data panels here. Next, let's create a data connection;
3. Hover your mouse over the user avatar in the upper right corner of the page to open the dropdown menu, then select "Admin Console";
4. On the admin console page, select "Connections" from the menu on the left, then click the "+" button to add a new connection;
5. On the create connection page, fill in the following information:
   - Name: Name of the connection, e.g., TDengine
   - Type: Type of the connection, please select TDengine
   - Host: TDengine service address, please enter your local IP address
   - Port: TDengine HTTP service port, default is `6041`
   - Authentication Type: Username and password
   - Username: Username for the TDengine database, default is `root`
   - Password: Password for the TDengine database user, default is `taosdata`
6. After filling in the information, click the "Check" button to verify the configuration;
7. If the check passes, click Save.

### Import Sample Data

TDengine IDMP provides sample data for the following 7 scenarios:
- Utilities: Smart electricity meters, smart water meters
- Cigarette processing: Cigarette factory processing
- Vehicle management: Logistics company vehicle management
- Photovoltaic: Power generation monitoring for photovoltaic power stations
- Oil well: Oil well production monitoring in oil fields
- Sewage treatment: Aeration process in sewage treatment plants
- New energy control: Centralized monitoring of new energy

Next, we will use the "Utilities" scenario data for demonstration:
1. Enter the "Admin Console" page;
2. Click "Sample Data" in the menu on the left;
3. Find the "Utilities" row and click the button on the far right, then select "Load";
4. Wait until the status changes from UNLOADED to LOADED, indicating that the data has been successfully imported.

### View Imported Element Information

After importing the data, you can go to the "Element Browser" page to view the imported data attributes:

1. Click "Element Browser" in the top navigation bar;
2. In the tree structure on the left, you can see the element information of the imported "Utilities" sample data;
3. Under the "Utilities" element, there are three regions: Beijing, Hebei, and Henan, each containing their respective cities or districts;
4. Select the element `Beijing-Chaoyang-Sanyuanqiao Street-em-21`, which represents the electricity meter No. 21 in Sanyuanqiao Street, Chaoyang District, Beijing. You can view its general information (it's a smart electricity meter) and its attribute information (such as current, voltage, etc.).
[![Attribute](/docs-img/get-started/attribute.png)](/docs-img/get-started/attribute.png)

### Experience AI Panel Generation

One of the most powerful features of TDengine IDMP is the automatic generation of data panels by AI:
1. Still select the element `Beijing-Chaoyang-Sanyuanqiao Street-emf-21`, and you will be automatically redirected to the panel page of this element, where AI panel generation will automatically start. Each time, AI will recommend at least 5 panels. If you are not satisfied with the recommended panels, you can tell AI your desired template in the dialog box below;
[![Panels](/docs-img/get-started/panels.png)](/docs-img/get-started/panels.png)
2. In the AI-recommended panels, select the first recommended panel "em-21 average current and voltage per day for the past week, line chart", and click Generate;
3. Wait for a while, and AI will generate the corresponding panel;
4. Select the generated panel and click Details to go to the panel details page for more information.
[![Panel Detail](/docs-img/get-started/paneldetail.png)](/docs-img/get-started/paneldetail.png)

## Quick Experience via Cloud Service

TDengine IDMP provides a fully managed cloud service version, allowing users to quickly experience the powerful features of TDengine IDMP through the cloud, without local installation and configuration.

## Next Steps

At this point, you have completed the basic installation and startup of TDengine IDMP, and experienced element import and AI auto panel generation with sample data. You can continue to explore features such as [Dashboard](feature/dashboard) and [Analysis](feature/analysis).
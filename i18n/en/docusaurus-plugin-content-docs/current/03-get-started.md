# Quick Start

TDengine Asset Intelligence fully leverages large AI models to automatically sense application scenarios based on collected data, automatically generate real-time analytics, reports, and visualization dashboards, greatly lowering the usage threshold. It helps users discover many novel reports and dashboards, significantly reducing the need for and reliance on data analysts and process engineers, shortening the distance from raw data to business insights and decisions, and improving data consumption efficiency.

This section will guide you through the complete process from downloading, installing, and starting the service to completing configuration and analysis operations via the web interface.

:::info
TDengine AI not only provides containerized deployment and installation packages, but also offers a fully managed TDengine AI Cloud service. You can easily experience the data management services provided by TDengine AI with just a few registration steps. Welcome to try it out on the TDengine AI Cloud registration page.
:::

## Quick Installation

TDengine AI supports multiple installation methods, including containerized deployment and installation packages on physical servers or virtual machines. For installation packages, we currently support the following operating systems:

- RedHat
- CentOS
- SUSE
- Ubuntu
- Debian
- Linux
- macOS
- Windows

If you need to adapt to other hardware platforms or operating systems, please [contact us](https://www.taosdata.com/contactus) for support.

### Running with Docker Container

TDengine AI provides a Docker image, allowing users to quickly start the TDengine AI service using Docker. The steps are as follows:

1. Clone the [tdengine-ai-deployment](https://github.com/taosdata/tdengine-ai-deployment) repository
   ```bash
   git clone https://github.com/taosdata/tdengine-ai-deployment.git
   ```
2. Use Docker Compose to start TDengine AI
   ```bash
   cd tdengine-ai-deployment/docker
   docker compose up -d
   ```

This command will automatically pull the required images (if not present locally) and start **TDengine AI service and TDengine TSDB service** in the background. By default, the TDengine AI service will start on port 6042 of the host: [http://localhost:6042](http://localhost:6042)
:::tip
To change the port, edit the `ports` configuration in the `docker-compose.yml` file.
:::

### Running with Installation Package

TDengine AI provides installation packages for multiple platforms. The following steps demonstrate how to download and install TDengine AI on a Linux system.
1. Go to the [TDengine AI download page](./release-history/version).
2. Select the tar.gz installation package, choose the latest version, and click the link to download.
3. Extract and run the installation script to complete the installation (replace `<version>` with the actual version number).
   ```bash
   tar xf tdengine-ai-enterprise-<version>-linux.tar.gz 
   cd tdengine-ai-enterprise-<version>
   ./install.sh
   ```
4. After installation, run the following command to start the TDengine AI service:
   ```bash
   svc-tdengine-ai start
   ```
At this point, the TDengine AI service has started on port 6042 of the host: [http://localhost:6042](http://localhost:6042)

## Quick Experience

## Quick Experience via Cloud Service

TDengine AI provides a cloud service version, allowing users to quickly experience the powerful features of TDengine AI through the cloud without local installation and configuration.
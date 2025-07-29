import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get Started in Docker

TDengine IDMP offers a wide range of features. This guide will walk you through how to start the TDengine IDMP service using Docker Compose. After importing sample scenario data, you can easily explore key features such as element browsing, AI-generated dashboards, and AI-powered analytics.

## Start TDengine IDMP

TDengine IDMP provides Docker images, allowing users to quickly launch the service using Docker Compose. The specific steps are as follows:

1. Clone the [tdengine-idmp-deployment](https://github.com/taosdata/tdengine-idmp-deployment) repository:

   ```bash
   git clone https://github.com/taosdata/tdengine-idmp-deployment.git
   ```

2. Start Docker Compose.

   ```bash
   cd tdengine-idmp-deployment/docker
   docker compose up -d
   ```

   This command will automatically pull the required images (if not already available locally) and start both the TDengine IDMP service and TDengine TSDB service in detached mode. By default, the TDengine IDMP service runs on port 6042 of the host. To change the port mapping, edit the ports configuration in the `docker-compose.yml` file.

3. Once you’ve completed your evaluation, you can stop and remove the containers using the following command:

   ```bash
   docker compose down
   ```

   When the services start, Docker volumes are automatically created to persist data. You can review the relevant configurations in the `docker-compose.yml` file. If you wish to clear the data while stopping the services, use the following command:

   ```bash
   docker compose down -v
   ```

:::tip

1. In this demonstration, we will use TDengine TSDB as the data source for TDengine IDMP.
1. After executing the above commands, a fully functional TDengine TSDB service will be running in your environment.

:::

import Init from './_init.md'

<Init />

import Getstarted from './_get_started.md'

<Getstarted />
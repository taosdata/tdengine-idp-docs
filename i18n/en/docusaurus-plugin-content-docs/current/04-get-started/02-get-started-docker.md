---
title: Get Started in Docker
sidebar_label: Docker
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Init from './_init.md';
import Getstarted from './_get_started.md';

TDengine IDMP is offered as a Docker image, and a Docker Compose setup is also provided to make deployment easy. This Docker Compose setup installs TDengine TSDB-Enterprise along with TDengine IDMP and automatically establishes a connection between them.

## Prerequisites

- Install Docker Engine 20.10 or later on your local machine. For instructions, see [Install Docker Engine](https://docs.docker.com/engine/install/) in the Docker documentation.
- Install Docker Compose 1.29.2 or later on your local machine. For instructions, see [Overview of installing Docker Compose](https://docs.docker.com/compose/install/) in the Docker documentation.
- Install Git on your local machine. For more information, see the [Git website](https://git-scm.com/).

## Deploy TDengine IDMP

1. Clone the [tdengine-idmp-deployment](https://github.com/taosdata/tdengine-idmp-deployment) repository:

   ```bash
   git clone https://github.com/taosdata/tdengine-idmp-deployment.git
   ```

2. Start Docker Compose:

   ```bash
   cd tdengine-idmp-deployment/docker
   docker compose up -d
   ```

   This command will automatically pull the required images and start both the TDengine IDMP service and TDengine TSDB-Enterprise service in detached mode.

   :::note

   By default, the TDengine IDMP service runs on port 6042 of the host. To change the port mapping, edit the ports configuration in the `docker-compose.yml` file.

   :::

<Init />

<Getstarted />

## Uninstall TDengine IDMP

Once you’ve completed your evaluation, you can stop and remove the TDengine containers by running the following command:

```bash
docker compose down
```

If you also wish to remove the volumes created by TDengine, use the following command.

```bash
docker compose down -v
```

For more detailed instructions on starting and stopping the service, see [Docker Deployment](../07-operation/02-installation/03-docker-guide.md).
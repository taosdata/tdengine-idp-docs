import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 通过 Docker 快速体验

TDengine IDMP 提供了丰富的功能，本文档将带领您通过 Docker Compose 的方式启动 TDengine IDMP 服务。在导入示例场景数据后，即可轻松体验元素浏览、AI 面板生成和 AI 分析等功能。

## 启动

TDengine IDMP 提供了 Docker 镜像，用户可以通过 Docker Compose 快速启动 TDengine IDMP 服务。具体步骤如下：

1. 克隆 [tdengine-idmp-deployment](https://github.com/taosdata/tdengine-idmp-deployment) 仓库

   ```bash
   git clone https://github.com/taosdata/tdengine-idmp-deployment.git
   ```

2. 使用 Docker Compose 启动 TDengine IDMP

   ```bash
   cd tdengine-idmp-deployment/docker
   docker compose up -d
   ```

   该命令会自动拉取所需镜像（如本地不存在），并以后台模式启动 **TDengine IDMP 服务和 TDengine TSDB 服务**。默认情况下，TDengine IDMP 服务会启动在主机的 6042 端口，如需修改端口映射，可编辑 `docker-compose.yml` 文件中的 `ports` 配置。

3. 当您体验完成后，您可以使用以下命令停止并删除容器：

   ```bash
   docker compose down
   ```

   服务启动时，会自动创建 Docker Volume 来持久化数据，您可以在 `docker-compose.yml` 文件中查看相关配置。如果您期望在停止服务的同时，清除数据，可以使用以下命令：

   ```bash
   docker compose down -v
   ```

:::tip

1. 在这个演示中，我们将使用 TDengine TSDB 作为 TDengine IDMP 的数据源；
1. 执行以上命令后，则在您的环境中，已启动了一个可用的 TDengine TSDB 服务。

:::

import Init from './_init.md'

<Init />

import Getstarted from './_get_started.md'

<Getstarted />
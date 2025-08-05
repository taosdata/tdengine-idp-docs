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

   该命令会自动拉取所需镜像（如本地不存在），并以后台模式启动 TDengine IDMP 和 TDengine TSDB-Enterprise 服务。

3. 如果您期望体验时序数据预测，可以使用包含 TDgpt 的 Docker Compose 文件启动（可选）

   ```bash
   cd tdengine-idmp-deployment/docker
   docker compose -f docker-compose-tdgpt.yml up -d
   ```

   该命令会启动包含 TDgpt 的服务，您可以在 AI 面板中体验时序数据预测功能。

至此，TDengine IDMP 服务已成功启动。您可以在浏览器输入以下地址访问：[http://ip:6042](http://ip:6042),
请将 `ip` 替换为真实的主机 IP 地址，如果在本地运行，则可以直接访问 [http://localhost:6042](http://localhost:6042)。关于服务启动、停止更详细的操作指南，请您参考[使用 Docker 部署](../operation/installation/docker-guide)章节。


import Init from './_init.md'

<Init />

import Getstarted from './_get_started.md'

<Getstarted />
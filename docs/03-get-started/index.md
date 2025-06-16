# 快速体验

TDengine AI 完整的软件包包括 TDengine AI 的数据库、前端 web 服务 以及后端 Java 服务。用户可以通过简单的安装步骤快速体验 TDengine AI 的强大功能。

import DocCardList from '@theme/DocCardList';

## 安装

### 通过 Docker 容器运行

TDengine AI 提供了 Docker 镜像，用户可以通过 Docker 快速启动 TDengine AI 服务。以下是启动步骤：

1. 克隆 tdengine-ai-deployment 仓库

    从 GitHub 克隆 TDengine AI 部署仓库：

    ```bash
    git clone https://github.com/taosdata/tdengine-ai-deployment.git
    ``` 

2. 使用 Docker Compose 启动 TDengine AI

    ```bash
    cd tdengine-ai-deployment/docker
    docker compose up -d
    ```

    该命令会自动拉取所需镜像（如本地不存在），并以后台模式启动 TDengine AI 服务：
   - 默认情况下，服务会启动在主机的 6042 端口：[http://localhost:6042](http://localhost:6042)
   - 如需修改端口，可编辑 `docker-compose.yml` 文件中的 `ports` 配置

### 通过安装包运行

TDengine AI 提供了多平台安装包，以下步骤将以 macOS 15 arm64 为例演示如何下载并安装 TDengine AI。

1. 下载

   前往 [TDengine AI 官方下载页面](../release-history/release)。

2. 安装

   选择macOS 安装，选择最新版本，点击链接下载。

   双击安装包进行安装，按照提示完成安装

3. 启动服务

   安装完成后运行以下命令启动 TDengine AI服务。

   bash
   ```
   svc-tdengine-ai start
   ```

   服务启动后您可通过浏览器访问 http://localhost:6042/（localhost 可替换为您的实际 IP 地址），进行数据管理与分析。

   默认用户名/密码：admin/public

4. 停止服务

运行以下命令停止 TDengine AI 服务。。

   bash
   ```
   svc-tdengine-ai stop
   ```

### 用云服务快速体验

TDengine AI 提供了云服务版本，用户可以通过云服务快速体验 TDengine AI 的强大功能，而无需进行本地安装和配置。

## 快速验证
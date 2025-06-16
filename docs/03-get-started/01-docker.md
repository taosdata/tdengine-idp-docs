# 用 Docker 快速体验

本节首先介绍如何通过 Docker 快速体验 TDengine AI，然后介绍如何在 Docker 环境下体验 TDengine 的写入和查询功能。如果你不熟悉 Docker，请使用安装包的方式快速体验。如果您希望为 TDengine 贡献代码或对内部技术实现感兴趣，请参考 TDengine GitHub 主页下载源码构建和安装。

## 启动 TDengine AI Docker 容器

TDengine AI 提供了 Docker 镜像，用户可以通过 Docker 快速启动 TDengine AI 服务。以下是启动步骤：

1. 确保你的系统上已经安装了 Docker。可以通过以下命令检查 Docker 是否已安装：

   ```bash
   docker --version
   ```

2. 使用以下命令拉取 TDengine AI 的 Docker 镜像：

   ```bash
   docker pull tdengine/tdengine-ai
   ```

3. 使用以下命令启动 TDengine AI 的 Docker 容器：

   ```bash
    docker run -d --name tdengine-ai 
   ```

4. 启动后，你可以通过浏览器访问 TDengine AI 的 Web 界面，默认地址为 `http://localhost:6042`。

## 在 Docker 环境下体验 TDengine AI
   如果Docker服务。

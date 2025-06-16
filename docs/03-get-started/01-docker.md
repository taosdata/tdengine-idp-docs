# 用 Docker 快速体验

本指南介绍如何使用 Docker Compose 快速部署 TDengine-AI 服务。

## 启动 TDengine AI Docker 容器

### 1. 下载 tdengine-ai-deployment 仓库代码

从 GitHub 克隆官方部署仓库：

```bash
git clone https://github.com/taosdata/tdengine-ai-deployment.git
```

### 2. 进入 docker 目录

```bash
cd tdengine-ai-deployment/docker
```

### 3. 使用 Docker Compose 启动 TDengine-AI

```bash
docker compose -f docker-compose.yml up -d
```

该命令会自动拉取所需镜像（如本地未存在），并以后台模式启动 TDengine-AI 服务。
- 默认情况下，服务会在主机的 [http://localhost:6042](http://localhost:6042) 提供访问。
- 如需修改端口，可编辑 `docker-compose.yml` 文件中的 `ports` 配置。
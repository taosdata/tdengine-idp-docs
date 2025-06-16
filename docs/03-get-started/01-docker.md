# 用 Docker 快速体验

本指南介绍如何使用 Docker Compose 快速部署 TDengine AI 服务。

## 启动 TDengine AI Docker 容器

### 1. 克隆 tdengine-ai-deployment 仓库

从 GitHub 克隆 TDengine AI 部署仓库：

```bash
git clone https://github.com/taosdata/tdengine-ai-deployment.git
```

### 2. 使用 Docker Compose 启动 TDengine AI

```bash
cd tdengine-ai-deployment/docker
docker compose up -d
```

该命令会自动拉取所需镜像（如本地不存在），并以后台模式启动 TDengine AI 服务：
- 默认情况下，服务会启动在主机的 6042 端口：[http://localhost:6042](http://localhost:6042)
- 如需修改端口，可编辑 `docker-compose.yml` 文件中的 `ports` 配置
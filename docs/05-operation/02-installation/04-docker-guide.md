# 使用 Docker 部署

本指南介绍如何使用 Docker 镜像快速启动 TDengine IDMP 服务并使用 docker compose 实现 TDengine IDMP 服务和 TDengine TSDB 服务的搭建。

## 前置条件

1. 本文适用 Docker 20.10 以上版本 
1. 本文适用 Docker Compose v1.29.2 以上版本

## 部署 TDengine IDMP 服务

### 1. 拉取 TDengine  IDMP 镜像
```bash
docker pull tdengine/tdengine-idmp
```

### 2. 启动 TDengine IDMP 容器
```bash
docker run -d --name tdengine-idmp \
   -p 6042:6042 tdengine/tdengine-idmp
```
> 如需自定义端口，请将 `-p 6042:6042` 中前面的端口号修改为你需要的端口。

### 3. 访问 TDengine IDMP 服务

默认情况下，服务监听主机的 6042 端口。可在浏览器访问：
- [http://localhost:6042](http://localhost:6042)
- 或在其他设备通过 [http://ip:6042](http://ip:6042) 访问

### 4. 停止并移除容器
```bash
docker stop tdengine-idmp
docker rm tdengine-idmp
```
> 停止后数据不会保留，如需持久化数据请挂载数据卷

## 部署 TDengine TSDB 与 IDMP 服务

### 1. 克隆部署仓库
```bash
git clone https://github.com/taosdata/tdengine-idmp-deployment.git
``` 
> 该仓库包含了 TDengine IDMP 与 TSDB 的 Docker Compose 配置文件。
   
### 2. 启动服务
```bash
cd tdengine-idmp-deployment/docker
docker compose up -d
```
> 执行上述命令会自动拉取所需镜像并以后台方式启动所有服务容器。

### 3. 访问服务

默认情况下，TDengine IDMP 服务监听主机的 6042 端口。可通过以下地址访问管理界面：

- [http://localhost:6042](http://localhost:6042)
- [http://ip:6042](http://ip:6042)

:::tip
如需修改端口，请编辑 `docker-compose.yml` 文件中的 `ports` 配置项。
:::

### 4. 停止服务
```bash
docker compose down
```
> 该命令会停止并移除所有通过 Compose 启动的容器，但不会删除数据卷。如需清理数据，可加上 `-v` 参数：
>
> `docker compose down -v`
# 快速体验

TDengine AI 完整的软件包包括 TDengine AI 的数据库、前端 web 服务 以及后端 Java 服务。用户可以通过简单的安装步骤快速体验 TDengine AI 的强大功能。

本章节将带您体验下载、安装、启动服务，到通过 Web 页面完成配置、分析等操作的完整流程。

:::info

TDengine AI 不仅提供容器化部署、安装包部署，还提供全托管的 TDengine AI Cloud 服务，您只需几步注册即可轻松体验 TDengine AI 提供的数据管理服务，欢迎前往 TDengine AI Cloud 注册页面试用。
:::

## 安装

TDengine AI 支持多种安装方式，包括容器化部署、安装包部署在物理服务器或虚拟机上，针对安装包部署形式，目前我们支持以下操作系统：

- RedHat
- CentOS
- SUSE
- Ubuntu
- Debian
- Linux
- macOS
- Windows

如您需要适配其他硬件平台或操作系统，可以[联系我们](https://www.taosdata.com/contactus)获取支持。

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

   该命令会自动拉取所需镜像（如本地不存在），并以后台模式启动 **TDengine-AI 服务和 TDengine 数据库服务**：
   - 默认情况下，TDengine-AI 服务会启动在主机的 6042 端口：[http://localhost:6042](http://localhost:6042)
   - 如需修改端口，可编辑 `docker-compose.yml` 文件中的 `ports` 配置

### 通过安装包运行

TDengine AI 提供了多平台安装包，以下步骤将以 Linux 系统为例演示如何下载并安装 TDengine AI。

1. 前往 [TDengine AI 官方下载页面](./release-history/release)。

2. 选择 tar.gz 安装包，选择最新版本，点击链接下载。

3. 解压并执行安装脚本完成安装（请将 `<version>` 替换为实际版本号）。

   ```bash
   tar xf tdengine-ai-enterprise-<version>-linux.tar.gz 
   cd tdengine-ai-enterprise-<version>
   ./install.sh
   ```

3. 安装完成后运行以下命令启动 TDengine AI 服务。

   ```bash
   svc-tdengine-ai start
   ```

   服务启动后您就可以通过浏览器访问 TDengine AI：
   - 登录页面地址：[http://localhost:6042](http://localhost:6042)（localhost 可替换为您的实际 IP 地址），登录成功后就可以进行数据管理与分析等操作。

   - 登录默认用户名/密码：root/taosdata


### 用云服务快速体验

TDengine AI 提供了云服务版本，用户可以通过云服务快速体验 TDengine AI 的强大功能，而无需进行本地安装和配置。

## 快速验证
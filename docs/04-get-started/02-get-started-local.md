import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 通过本地部署快速体验

TDengine IDMP 提供了丰富的功能，本文档将带领您完成 TDengine IDMP 安装和启动，
在导入示例场景数据后，即可轻松体验元素浏览、AI 面板生成和 AI 分析等功能。

:::info
TDengine IDMP 不仅提供容器化部署、安装包部署，还提供全托管的 TDengine IDMP Cloud 服务，您只需几步注册即可轻松体验 TDengine IDMP 提供的数据管理服务，欢迎前往 TDengine IDMP Cloud 注册页面试用。
:::

## 安装

TDengine IDMP 支持多种安装、部署方式，在不同的操作系统和架构下，都能够体验其强大的功能带来的便利。对操作系统和架构的支持，详见[安装包介绍](../operation/installation/installer)。下面，我们将介绍两种常用的安装部署方式。

<Tabs>
<TabItem label="使用容器" value="docker">
TDengine IDMP 提供了 Docker 镜像，用户可以通过 Docker 快速启动 TDengine IDMP 服务。以下是启动步骤：

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

</TabItem>

<TabItem label="使用安装包" value="installer">
TDengine IDMP 提供了多平台安装包，以下步骤将以 Linux 系统为例，演示如何下载、安装并启动 TDengine IDMP.

1. 前往[版本列表](../release-history/version)页面
2. 选择最新版本的 `.tar.gz` 安装包，点击下载链接
3. 解压并执行安装脚本，完成安装（请将 `<version>` 替换为实际版本号）

   ```bash
   tar zxvf tdengine-idmp-enterprise-<version>-linux.tar.gz 
   cd tdengine-idmp-enterprise-<version>
   ./install.sh
   ```

4. 安装完成后，运行以下命令启动 TDengine IDMP 服务：

   ```bash
   svc-tdengine-idmp start
   ```

</TabItem>
</Tabs>

至此，TDengine IDMP 服务已成功启动。您可以在浏览器输入以下地址访问：[http://ip:6042](http://ip:6042),
请将 `ip` 替换为真实的主机 IP 地址，如果在本地运行，则可以直接访问 [http://localhost:6042](http://localhost:6042)。

:::tip

1. 在这个演示中，我们将使用 TDengine TSDB 作为 TDengine IDMP 的数据源；
1. 如果使用 Docker 容器安装方式运行，则在您的环境中，已启动了一个可用的 TDengine TSDB 服务；
1. 如果使用安装包的方式，则需要安装部署 TDengine TSDB 服务，详见：[使用安装包快速体验 TDengine](https://docs.taosdata.com/get-started/package/).

:::

## 激活

1. 首次访问时，您需要激活服务。在填写“邮箱”和“组织”后，点击“获取激活码”按钮，系统会向您填写的邮箱发送一封激活邮件，输入邮件中的激活码后，点击“激活”按钮，即可完成激活，您将获得 15 天的免费试用期。
1. 激活码验证通过后，会弹出“隐私配置”对话框，您可以根据需求选择信息采集项，采集的信息将帮助我们改进产品，您的业务及生产数据绝不会被采集，配置完成后，请点击“同意”按钮。

## 配置用户信息

1. 激活产品后，将进入用户信息配置页面，系统会提示您配置姓名等用户信息。
2. 填写姓名后，请填写正确的手机号，然后点击“获取验证码”，系统会向您填写的手机号码发送一条验证短信，请输入短信中的验证码。
3. 请设置系统的登录密码。
4. 在短信验证码和密码验证通过后，就完成了用户信息的配置，点击“继续”，系统将自动跳转到加载示例场景页面。

import Getstarted from './_get_started.md'

<Getstarted />
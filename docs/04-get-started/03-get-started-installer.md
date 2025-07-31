import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 通过安装包快速体验

TDengine IDMP 提供了丰富的功能，本文档将带领您通过安装包完成 TDengine IDMP 的安装和启动。在导入示例场景数据后，即可轻松体验元素浏览、AI 面板生成和 AI 分析等功能。

## 安装

TDengine IDMP 支持多种安装、部署方式，在不同的操作系统和架构下，都能够体验其强大的功能带来的便利。对操作系统和架构的支持，详见[部署规划](../operation/planning)。以下步骤将以 Linux 系统为例，演示如何下载、安装并启动 TDengine IDMP.

:::warning
TDengine IDMP 依赖 TDengine TSDB-Enterprise 3.3.7.0+, 在安装 TDengine IDMP 前，请确保您已安装并启动了 TDengine TSDB 服务。
:::

1. 前往 TDengine 下载中心的 [TDengine IDMP](https://www.taosdata.com/download-center?product=TDengine+IDMP-Enterprise) 页面。
1. 选择最新版本的 `.tar.gz` 类型的装包下载。
1. 解压并执行安装脚本，以完成安装（请将 `<version>` 替换为实际版本号）。
   ```bash
   tar zxvf tdengine-idmp-enterprise-<version>-linux.tar.gz 
   cd tdengine-idmp-enterprise-<version>
   ./install.sh
   ```
1. 配置 TDengine TSDB 连接。用编辑器打开 TDengine IDMP 的配置文件，默认位于 `/usr/local/taos/idmp/config/application.yml`，在 `tda.default-connection` 下，配置 TDengine TSDB 的连接信息，示例如下：
   ```yaml
   tda:
     default-connection:
       enable: true
       auth-type: UserPassword # can be set to UserPassword or Token
       url: http://192.168.1.100:6041
       username: root
       password: taosdata
   ```
   其中：
     - auth-type: 认证方式，支持 UserPassword 和 Token 两种方式，默认为方式 UserPassword
     - url: 为 TDengine TSDB 中 taosAdapter 组件的 IP 地址和端口号，端口号默认为 6041
     - username 和 password: 为 TDengine TSDB 的用户名和密码，默认为 root 和 taosdata
1. 测试 TDengine TSDB 连接。在终端中，可以使用 `curl` 命令测试 TDengine TSDB 连接的连通性，示例如下：
   ```bash
   curl --request POST \
     --user root:taosdata \
     --url http://192.168.1.100:6041/rest/sql \
     --data 'show databases;'
   ```
   如果连接成功，您将看到 TDengine TSDB 的数据库列表。
1. 启动 TDengine IDMP 服务：
   ```bash
   svc-tdengine-idmp start
   ```

至此，TDengine IDMP 服务已成功启动。您可以在浏览器输入以下地址访问：[http://ip:6042](http://ip:6042),
请将 `ip` 替换为真实的主机 IP 地址，如果在本地运行，则可以直接访问 [http://localhost:6042](http://localhost:6042)。

关于服务启动、停止更详细的操作指南，请您参考[使用安装包部署](../operation/installation/install-guide)章节。为了简化安装包的部署，您还可以使用我们提供的 Ansible Playbook 来完成安装和配置，具体步骤请参考[使用 Ansible Playbook 部署](../operation/installation/ansible-guide)章节。

:::tip

在安装过程中，安装程序会自动下载并安装 AI 相关的 Python 依赖，请确保您的系统已连接互联网，在国内的网络中还可以通过替换 PyPI 镜像源，例如：[清华大学的 PyPI 镜像源](https://pypi.tuna.tsinghua.edu.cn/)，来加速下载。

:::

import Init from './_init.md'

<Init />

import Getstarted from './_get_started.md'

<Getstarted />
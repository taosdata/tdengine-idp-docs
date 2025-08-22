
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 通过安装包快速体验

TDengine IDMP 提供了丰富的功能，本文档将带领您通过安装包完成 TDengine IDMP 的安装和启动。在导入示例场景数据后，即可轻松体验元素浏览、AI 面板生成和 AI 分析等功能。

## 安装

TDengine IDMP 支持多种安装、部署方式，在不同的操作系统和架构下，都能够体验其强大的功能带来的便利。对操作系统和架构的支持，详见[部署规划](../operation/planning)。
TDengine IDMP 的运行还需要满足以下先决条件：
   * Python: 3.10-3.12 版本
   * Java: 21 及以上版本
   * glibc: 2.25 及以上版本

TDengine IDMP 依赖 TDengine TSDB-Enterprise 3.3.7.0+, 在安装 TDengine IDMP 前，请确保您已安装并启动了 TDengine TSDB-Enterprise 服务。如果尚未安装，请参考：[使用安装包快速体验 TDengine TSDB](https://docs.taosdata.com/get-started/package/)。

<Tabs>

<TabItem label="tar.gz 安装" value="tar">
1. 从 TDengine 产品下载中心的 [TDengine IDMP](https://www.taosdata.com/download-center?product=TDengine+IDMP-Enterprise) 页面下载获得最新的 `.tar.gz` 安装包，在弹出的对话框中，填写您的邮箱，我们会将下载链接发送到您的邮箱
2. 执行以下命令，解压并安装
   ```bash
   tar zxvf tdengine-idmp-enterprise-1.0.1.2-linux-generic.tar.gz
   cd tdengine-idmp-enterprise-1.0.1.2
   ./install.sh
   ```
3. TDengine IDMP 的默认安装路径为 `/usr/local/taos/idmp`, 安装成功后，可以看到终端展示 "TDengine IDMP has been installed successfully!"
4. 可以通过以下命令查看更多安装选项
   ```bash
   ./install.sh -h
   ```
</TabItem>

<TabItem label="deb 安装" value="deb">
1. 从 TDengine 产品下载中心的 [TDengine IDMP](https://www.taosdata.com/download-center?product=TDengine+IDMP-Enterprise) 页面下载获得最新的 `.deb` 安装包，在弹出的对话框中，填写您的邮箱，我们会将下载链接发送到您的邮箱
2. 执行以下命令，安装 deb 包
   ```bash
   dpkg -i tdengine-idmp-enterprise-1.0.1.2-linux-generic.deb
   ```
3. TDengine IDMP 的默认安装路径为 `/usr/local/taos/idmp`, 安装成功后，可以看到终端展示 "TDengine IDMP has been installed successfully!"
</TabItem>

<TabItem label="rpm 安装" value="rpm">
1. 从 TDengine 产品下载中心的 [TDengine IDMP](https://www.taosdata.com/download-center?product=TDengine+IDMP-Enterprise) 页面下载获得最新的 `.rpm` 安装包，在弹出的对话框中，填写您的邮箱，我们会将下载链接发送到您的邮箱
2. 执行以下命令，安装 rpm 包
   ```bash
   rpm -ivh --nodeps tdengine-idmp-enterprise-1.0.1.2-linux-generic.rpm
   ```
3. TDengine IDMP 的默认安装路径为 `/usr/local/taos/idmp`, 安装成功后，可以看到终端展示 "TDengine IDMP has been installed successfully!"
</TabItem>

<TabItem label="macOS 安装" value="macos">
1. 从 TDengine 产品下载中心的 [TDengine IDMP](https://www.taosdata.com/download-center?product=TDengine+IDMP-Enterprise) 页面下载获得最新的 macOS 安装包 (.pkg)，在弹出的对话框中，填写您的邮箱，我们会将下载链接发送到您的邮箱
1. 双击安装包，按照提示完成安装
1. TDengine IDMP 的默认安装路径为 `/usr/local/taos/idmp`
</TabItem>

</Tabs>

:::warning
   1. 如果您期望体验时序数据预测的功能，则需要安装 TDgpt, 请参考：[安装包部署 TDgpt](https://docs.taosdata.com/advanced/TDgpt/tutorial/#%E5%AE%89%E8%A3%85%E5%8C%85%E9%83%A8%E7%BD%B2-tdgpt).
:::

:::tip
IDMP 的正常运行，依赖指定版本的 Python 和 Java 环境。在安装过程中，安装脚本会对依赖进行检查。常见错误如下，以 Java 为例：

1. 安装过程中，如果遇到以下错误 "Java Version 21+ is required, but not found at: ...", 应该如何解决？
   - Java 没有安装，请安装 Java 21 或更高版本。
   - Java 已安装，但安装程序没有找到，可以通过创建软链接的方式来解决，例如：`ln -s /path/to/your-java-executable /usr/local/bin/java`.

2. 安装过程中，如果遇到以下错误 "Java Version 21+ is required, but version X is found at: ...", 应该如何解决？ 
   - Java 版本过低，请安装 Java 21 或更高版本。
   - 满足要求的 Java 已安装，但安装程序没有找到，可以通过创建软链接的方式来解决，例如：`ln -s /path/to/your-java-executable /usr/local/bin/java`, 如果系统中存在多个 Java 版本，请注意 PATH 的优先级。在以上报错信息中，会打印 PATH 的搜索路径，请您确保满足要求的 Java 可执行文件在 PATH 中的优先级最高。
:::

## 启动
以下步骤将演示如何启动 TDengine IDMP.

1. 配置 TDengine TSDB-Enterprise 连接：用编辑器打开 TDengine IDMP 的配置文件，默认位于 `/usr/local/taos/idmp/config/application.yml`，在 `tda.default-connection` 下，配置 TDengine TSDB-Enterprise 的连接信息，示例如下：
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
     * auth-type: 认证方式，支持 UserPassword 和 Token 两种方式，默认为方式 UserPassword
     * url: 为 TDengine TSDB-Enterprise 中 taosAdapter 组件的 IP 地址和端口号，端口号默认为 6041
     * username 和 password: 为 TDengine TSDB-Enterprise 的用户名和密码，默认为 root 和 taosdata
1. 测试 TDengine TSDB-Enterprise 连接：在终端中，可以使用 `curl` 命令测试 TDengine TSDB-Enterprise 连接的连通性，示例如下：
   ```bash
   curl --request POST \
     --user root:taosdata \
     --url http://192.168.1.100:6041/rest/sql \
     --data 'show databases;'
   ```
   如果连接成功，您将看到 TDengine TSDB-Enterprise 的数据库列表。
   
1. 启动 TDengine IDMP 服务：
   ```bash
   svc-tdengine-idmp start
   ```

至此，TDengine IDMP 服务已成功启动。您可以在浏览器输入以下地址访问：[http://ip:6042](http://ip:6042),
请将 `ip` 替换为真实的主机 IP 地址，如果在本地运行，则可以直接访问 [http://localhost:6042](http://localhost:6042)。

关于服务启动、停止更详细的操作指南，请您参考[使用安装包部署](../operation/installation/install-guide)章节。

为了简化安装包的部署，您还可以使用我们提供的 Ansible Playbook 来完成安装和配置，具体步骤请参考[使用 Ansible Playbook 部署](../operation/installation/ansible-guide)章节。

:::tip
1. 安装过程中，如果遇到以下错误 "Failed to install TDengine IDMP dependencies from /usr/local/taos/idmp/chat/requirements.txt", 应该如何解决？

   * IDMP 安装过程中，需要访问互联网，以安装 AI 相关的 Python 依赖，请确保您的系统已连接互联网。
   * 网络连接正常的情况下，请确保 PyPI 仓库可以正常访问。在国内的网络中，建议配置 PyPI 镜像源来加速下载，例如：[清华大学的 PyPI 镜像源](https://pypi.tuna.tsinghua.edu.cn/)，具体命令如下：

     ```bash
     pip config set global.index-url https://mirrors.tuna.tsinghua.edu.cn/pypi/web/simple
     ```
   * 更详细的安装日志，请参考：/tmp/tdengine_chat_dep_install.log
:::

import Init from './_init.md'

<Init />

import Getstarted from './_get_started.md'

<Getstarted />
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 使用安装包部署

## 先决条件

TDengine IDMP 的运行需要满足以下先决条件：

1. Python: 3.10-3.12 版本
1. Java: 21 及以上版本
1. glibc: 2.25 及以上版本

## 安装

请根据您的操作系统类型，选择合适的安装方式，安装 TDengine IDMP。以下是不同安装方式的详细步骤：

<Tabs>

<TabItem label="tar.gz 安装" value="tar">
1. 从 TDengine 产品下载中心的 [TDengine IDMP](https://www.taosdata.com/download-center?product=TDengine+IDMP-Enterprise) 页面下载获得最新的 `.tar.gz` 安装包
1. 执行以下命令，解压并安装，请将 `<version>` 替换为实际版本号
   ```bash
   tar zxvf tdengine-idmp-enterprise-<version>-linux-generic.tar.gz
   cd tdengine-idmp-enterprise-<version>
   ./install.sh
   ```
1. TDengine IDMP 的默认安装路径为 `/usr/local/taos/idmp`, 安装成功后，可以看到终端展示 "TDengine IDMP has been installed successfully!".
1. 可以通过以下命令查看更多安装选项
   ```bash
   ./install.sh -h
   ```
</TabItem>

<TabItem label="deb 安装" value="deb">
1. 从 TDengine 产品下载中心的 [TDengine IDMP](https://www.taosdata.com/download-center?product=TDengine+IDMP-Enterprise) 页面下载获得最新的 `.deb` 安装包
1. 执行以下命令，安装 deb 包，请将 `<version>` 替换为实际版本号
   ```bash
   dpkg -i tdengine-idmp-enterprise-<version>-linux-generic.deb
   ```
1. TDengine IDMP 的默认安装路径为 `/usr/local/taos/idmp`, 安装成功后，可以看到终端展示 "TDengine IDMP has been installed successfully!".
</TabItem>

<TabItem label="rpm 安装" value="rpm">
1. 从 TDengine 产品下载中心的 [TDengine IDMP](https://www.taosdata.com/download-center?product=TDengine+IDMP-Enterprise) 页面下载获得最新的 `.rpm` 安装包
1. 执行以下命令，安装 rpm 包，请将 `<version>` 替换为实际版本号
   ```bash
   rpm -ivh --nodeps tdengine-idmp-enterprise-<version>-linux-generic.rpm
   ```
1. TDengine IDMP 的默认安装路径为 `/usr/local/taos/idmp`, 安装成功后，可以看到终端展示 "TDengine IDMP has been installed successfully!".
</TabItem>

<TabItem label="macOS 安装" value="macos">
1. 从 TDengine 产品下载中心的 [TDengine IDMP](https://www.taosdata.com/download-center?product=TDengine+IDMP-Enterprise) 页面下载获得最新的 macOS 安装包 (.pkg)
1. 双击安装包，按照提示完成安装
1. TDengine IDMP 的默认安装路径为 `/usr/local/taos/idmp`
</TabItem>

</Tabs>

## 启动

<Tabs>

<TabItem label="Linux 系统" value="linux">
安装完成后，您可以使用 `svc-tdengine-idmp` 命令来启动 TDengine IDMP 的服务进程。
```bash
sudo svc-tdengine-idmp start
```

您也可以用 `svc-tdengine-idmp` 的其他命令来查看服务状态、停止服务等操作，例如：

```bash
sudo svc-tdengine-idmp status # 查看服务状态
sudo svc-tdengine-idmp stop   # 停止服务
```

您还可以直接使用 `systemctl` 命令，手动管理这些服务，以 `tdengine-idmp` 服务为例：

```bash
sudo systemctl start tdengine-idmp
sudo systemctl stop tdengine-idmp
sudo systemctl status tdengine-idmp
sudo systemctl restart tdengine-idmp
```

:::info

- 执行 `systemctl` 和 `svc-tdengine-idmp` 命令时，需要 _root_ 权限，对于非 _root_ 用户，请在命令前添加 `sudo`。

:::
</TabItem>

<TabItem label="macOS 系统" value="macos">
安装完成后，您可以使用 `svc-tdengine-idmp` 命令来启动 TDengine IDMP 的服务进程。

```bash
sudo svc-tdengine-idmp start
```

您也可以用 `svc-tdengine-idmp` 的其他命令来查看服务状态、停止服务等操作：

```bash
sudo svc-tdengine-idmp status
sudo svc-tdengine-idmp stop
```

如果想手动管理这些服务，可以使用以下命令，以下示例使用 `tdengine-idmp`:

```bash
sudo launchctl start com.taosdata.tdengine-idmp
sudo launchctl stop com.taosdata.tdengine-idmp
sudo launchctl list | grep tdengine-idmp
sudo launchctl print system/com.taosdata.tdengine-idmp
```

:::info

- `launchctl` 命令管理 `com.taosdata.tdengine-idmp` 需要管理员权限，务必在前面加 `sudo` 来增强安全性。
- `sudo launchctl list | grep tdengine-idmp` 指令返回的第一列是 `tdengine-idmp` 启动的 java 程序的 PID, 若为 `-` 则说明 tdengine-idmp 服务未运行。
- 如果服务异常，请查看系统日志 `launchd.log` 或者 `/usr/local/taos/idmp/logs` 目录下的日志，获取更多信息。

:::
</TabItem>


</Tabs>

TDengine IDMP 正常启动后，包括以下三个服务：

- `tdengine-idmp-h2`：用于存储 TDengine IDMP 的元数据和配置。
- `tdengine-idmp-chat`：用于处理 AI 相关的任务和分析。
- `tdengine-idmp`：核心服务，负责管理和提供数据访问。

## 卸载

1. 在 Linux/macOS 系统，可以通过如下命令卸载 TDengine IDMP 服务：

```bash
rmtdengine-idmp -e yes
```

如果期望保留数据、日志和配置等，可以执行：

```bash
rmtdengine-idmp -e no
```

2. 在 Linux 系统，如果是通过 rpm 方式安装，请使用如下命令卸载：

```bash
rpm -e tdengine-idmp
```

3. 在 Linux 系统，如果是通过 deb 方式安装，请使用如下命令卸载：

```bash
dpkg -r tdengine-idmp
```

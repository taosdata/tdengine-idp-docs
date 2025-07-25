import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 通过安装包快速体验

TDengine IDMP 提供了丰富的功能，本文档将带领您通过安装包完成 TDengine IDMP 的安装和启动。在导入示例场景数据后，即可轻松体验元素浏览、AI 面板生成和 AI 分析等功能。

## 安装

TDengine IDMP 支持多种安装、部署方式，在不同的操作系统和架构下，都能够体验其强大的功能带来的便利。对操作系统和架构的支持，详见[部署规划](../operation/planning)。以下步骤将以 Linux 系统为例，演示如何下载、安装并启动 TDengine IDMP.

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

:::tip

1. 在这个演示中，我们将使用 TDengine TSDB 作为 TDengine IDMP 的数据源；
1. 使用安装包的方式时，在启动 TDengine IDMP 之前，需要安装部署 TDengine TSDB 服务，详见：[使用安装包快速体验 TDengine](https://docs.taosdata.com/get-started/package/).

:::

import Init from './_init.md'

<Init />

import Getstarted from './_get_started.md'

<Getstarted />
# 安装包简介

## 支持的操作系统与平台
TDengine AI 可以跨平台的在多种操作系统和硬件平台上运行，以下是支持情况：
|操作系统|支持版本|x86_64|arm64|
|---|---|:---:|:---:|
| Ubuntu | Ubuntu 20.04<br />Ubuntu 22.04 | 是 | 是 |
| Debian | Debian 10<br />Debian 11<br />Debian 12 | 是 | 是 |
| CentOS | CentOS 8 | 是 | 是 |
| macOS 13 | macOS 13<br />macOS 14<br />macOS 15 | 是 | 是 |
| Windows | Windows Server 2019<br />Windows Server 2022<br />Windows 11 | 是 | 否 |

## 端口占用
TDengine AI 默认使用以下端口，请确保这些端口未被其他应用程序占用，并按照需求开放防火墙以保证 TDengine AI 正常运行。

| 端口 | 协议 | 描述 |
|---------|---------|---------|
|6042 | HTTP | TDengine AI Web 页面 和 REST API 端口，用于浏览器访问页面和 API 接口。 |
|9092 | TCP | TDengine AI 内部 H2 数据库服务监听端口，用于访问内部 H2 数据库。 |
|8082 | HTTP | TDengine AI 内部 H2 数据库服务 Web 页面端口，用于浏览器访问内部 H2 数据库。 |
|8777 | HTTP | TDengine AI 内部 chat 服务 API 端口，用于访问内部chat 服务。 |


## 文件和目录
TDengine AI 安装完成后会创建一些目录用来存放运行文件和配置文件，存储数据以及记录日志。

安装目录下各子目录描述如下:

| 目录         | 描述	|
|------------|---|
| app        | 软链接到standalone/app目录 |
| backend    | 存放后端服务文件 |
| bin        | 存放启动/停止服务脚本 |
| chat       | 存放chat服务文件 |
| config     | 存放TDengine AI服务配置文件 |
| data       | 存放数据文件 |
| frontend   | 存放前端服务文件 |
| lib        | 存放后端服务依赖库文件 |
| logs       | 存放日志文件 |
| quarkus    | 存放后端服务框架文件 |
| service    | 系统服务配置文件 |
| standalone | 存放前后端集成服务文件 |

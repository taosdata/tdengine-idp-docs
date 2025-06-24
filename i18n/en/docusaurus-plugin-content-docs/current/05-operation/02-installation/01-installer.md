# Installer Overview

## Operating Systems and Architectures

Currently, TDengine IDP supports the following operating systems and architectures. If you wish to use it on other systems or architectures, please [contact us](https://www.taosdata.com/contactus) for support.

| Operating System | Supported Versions | x86_64 | arm64 |
|---|---|:---:|:---:|
| Ubuntu   | Ubuntu 20.04<br/>Ubuntu 22.04 | Yes | Yes |
| Debian   | Debian 10<br/>Debian 11<br/>Debian 12 | Yes | Yes |
| CentOS   | CentOS 8 | Yes | Yes |
| macOS 13 | macOS 13<br/>macOS 14<br/>macOS 15 | Yes | Yes |
| Windows  | Windows Server 2019<br/>Windows Server 2022<br/>Windows 11 | Yes | No |

## Port Usage

TDengine IDP uses the following ports by default. Please ensure these ports are not occupied by other applications.

| Port | Protocol | Description |
|------|------|---------|
| 6042 | HTTP | External port for TDengine IDP Web page and REST API, used for browser access and API calls. Please ensure your firewall allows access to this port. |
| 8082 | HTTP | Internal port for TDengine IDP's internal H2 database service web page. |
| 8777 | HTTP | Internal port for TDengine IDP's internal chat service API. |
| 9092 | TCP  | Internal port for TDengine IDP's internal H2 database service. |

## Installation Directory

After installation, TDengine IDP will, by default, create the following directories under `/usr/local/taos/idp` to store executables, configuration files, data files, and logs. The subdirectories are described as follows:

| Directory   | Description |
|-------------|-------------|
| app         | Symlink to the standalone/app directory |
| backend     | Backend service files |
| bin         | Scripts for starting/stopping services |
| chat        | Chat service files |
| config      | TDengine IDP service configuration files |
| data        | Data files |
| frontend    | Frontend service files |
| lib         | Backend service dependency libraries |
| logs        | Log files |
| quarkus     | Backend service framework files |
| service     | System service configuration files |
| standalone  | Integrated frontend and backend service files |
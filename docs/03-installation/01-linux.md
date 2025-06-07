# Linux 上安装 TDengine Asset Intelligence
TDengine Asset Intelligence 在 Linux 上的安装方式有多种，用户可以根据自己的需求选择合适的方式进行安装。以下是不同安装方式的详细步骤：

## 通过 Deb 安装
1. 从列表中下载获得 Deb 安装包：

2. 使用 `dpkg` 命令安装 Deb 包：
> 请将 `<version>` 替换为下载的安装包版本

 ```bash
dpkg -i TDasset-<version>.deb
```

## 通过 RPM 安装

1. 从列表中下载获得 Deb 安装包：

2. 使用 `rpm` 命令安装 RPM 包：
> 请将 `<version>` 替换为下载的安装包版本

 ```bash
rpm -i TDasset-<version>.rpm 
```

通过 `./svc-tdasset status ` 查看服务状态

## 通过 tar.gz 安装
 
1. 从列表中下载获得 tar.gz 安装包：


2. 进入到安装包所在目录，先解压文件后，进入子目录，执行其中的 install.sh 安装脚本。
> 请将 `<version>` 替换为下载的安装包版本

 ```bash
tar xf TDasset-<version>.tar.gz && cd TDasset-<version> \
./install.sh -s 
```

3. 安装完成后，TDasset 的默认安装路径为 `/usr/local/tdasset`
更多安装选项可以通过 `./install.sh -h` 查看。


# 启动并查看状态
可通过如下命令启动 TDasset 的服务

 ```bash
./svc-tdasset start 
```

通过 `./svc-tdasset status ` 查看服务状态

# 停止服务
可通过如下命令停止 TDasset 的服务

 ```bash
./svc-tdasset stop
```

# 卸载 TDasset
可通过如下命令卸载 TDasset 的服务

 ```bash
rmtdasset -e yes
```
# 或者保留数据、日志和配置
 ```bash
rmtdasset -e no
```
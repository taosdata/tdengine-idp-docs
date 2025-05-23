# 在 Debian/Ubuntu 上安装




## 通过 tar.gz 安装
前往官方下载页面，选择 Ubuntu 页签。
选择最新版本 1.0，在安装包类型中根据需要的版本和 CPU 架构选择 tar.gz


 ```bash
tar xf TDasset-0.9.4.tar.gz && cd TDasset-0.9.4 \
./install.sh
```

安装完成后，可通过如下命令启动 TDasset 的服务

 ```bash
./svc-start start 
```

通过 `./svc-start status ` 查看服务状态

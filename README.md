# TDasset 文档

TDasset 是一款工业互联网全量设备的元数据可视化管理系统。本文档网站基于 [Docusaurus](https://docusaurus.io/) 构建，提供了 TDasset 的使用指南、开发文档和相关资源。

---

## 安装

在开始之前，请确保已安装 [Node.js](https://nodejs.org/)

```bash
$ pnmp install  
```

此命令将安装项目所需的所有依赖项。

---

## 本地开发

```bash
$ pnmp start  --host 0.0.0.0
```

此命令将启动本地开发服务器，并自动打开浏览器窗口。大多数更改会实时反映，无需重启服务器。

---

## 构建

```bash
$ pnmp build
```

此命令会将静态内容生成到 `build` 目录中，生成的内容可以通过任何静态内容托管服务进行部署。

---



---

## 目录结构

- **`docs/`**: 文档的 md 源文件。
- **`src/`**: 网站的源代码，包括页面、组件和样式。
- **`static/`**: 静态资源文件（如图片、文档等）。
- **`build/`**: 构建后的静态文件目录。
- **`docusaurus.config.js`**: 网站的配置文件。
- **`sidebars.js`**: 文档的侧边栏配置。


---

## 贡献

欢迎为 TDasset 文档贡献内容！请提交 Pull Request 或报告问题。

---

## 社区支持

如果您在使用 TDasset 或阅读文档时遇到问题，请通过以下方式联系我们：
- [GitHub Issues](https://github.com/tdasset-docs/issues)
- [官方支持邮箱](mailto:it@taosdata.com)

---

## 许可证

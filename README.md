# TDengine AI Documentation

TDengine Asset Intelligence ( TDengine AI ) 是一款工业互联网全量设备的元数据可视化管理系统。本文档网站基于 [Docusaurus](https://docusaurus.io/) 构建，提供了 TDengine AI 的使用指南、开发文档和相关资源。

---

## 安装依赖工具

本项目需要安装 [Node.js](https://nodejs.org/), 版本 18.0 或以上（可以通过运行 node -v 来检查）。你可以使用 nvm 来管理安装的单台计算机上的多个 Node 版本。再通过 npm 全局安装 pnpm：

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
source ~/.bashrc
nvm install node
npm install -g pnpm
pnpm --version
```

## 安装项目依赖

```bash
pnpm install  
```

此命令将安装项目所需的所有依赖项。

## 本地开发项目

### 启动中文

```bash
pnpm start  --host 0.0.0.0
```

### 启动英文

```bash
pnpm start --host 0.0.0.0 --locale en
```

此命令将启动本地开发服务器，并自动打开浏览器窗口。大多数更改会实时反映，无需重启服务器。

## 构建及部署

```bash
pnpm build
```

此命令会将静态内容生成到 `build` 目录中，生成的内容可以通过任何静态内容托管服务进行部署。

## 本地预览

```bash
pnpm  serve 
```

## 目录结构

- **`docs/`**: 文档的 md 源文件。
- **`src/`**: 网站的源代码，包括页面、组件和样式。
- **`static/`**: 静态资源文件（如图片、文档等）。
- **`build/`**: 构建后的静态文件目录。
- **`docusaurus.config.js`**: 网站的配置文件。
- **`sidebars.js`**: 文档的侧边栏配置。
- **`i18n/`**: 国际化配置文件，支持多语言文档。
- **`package.json`**: 项目的依赖和脚本配置。
- **`.github/workflows/`**: GitHub Actions 工作流配置文件。
- **`sidebars.js`**: 定义文档侧边栏的结构和内容。



## 贡献

欢迎为 TDengine AI 文档贡献内容！请提交 Pull Request 或报告问题。

## 社区支持

如果您在使用 TDengine AI 或阅读文档时遇到问题，请通过以下方式联系我们：
- [GitHub Issues](https://github.com/taosdata/tdengine-ai-docs/issues)
- [官方支持邮箱](mailto:it@taosdata.com)

## 许可证

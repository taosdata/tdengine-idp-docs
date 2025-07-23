# TDengine IDMP Documentation

TDengine Industrial Data Management Platform (TDengine IDMP) is a metadata visualization management system for industrial internet full-device data. This documentation site is built with [Docusaurus](https://docusaurus.io/) and provides user guides, development documentation, and related resources for TDengine IDMP.

---

## Install Dependencies

This project requires [Node.js](https://nodejs.org/) version 18.0 or above (check with `node -v`). You can use nvm to manage multiple Node versions on a single machine. Then, install pnpm globally via npm:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
source ~/.bashrc
nvm install node
npm install -g pnpm
pnpm --version
```

## Install Project Dependencies

```bash
pnpm install  
```

This command will install all dependencies required for the project.

## Local Development

### Start in Chinese

```bash
pnpm start --host 0.0.0.0
```

### Start in English

```bash
pnpm start --host 0.0.0.0 --locale en
```

This command will start the local development server and automatically open the browser window. Most changes will be reflected in real time without restarting the server.

## Build and Deploy

```bash
pnpm build
```

This command will generate static content in the `build` directory, which can be deployed using any static content hosting service.

## Local Preview

```bash
pnpm serve
```

## Directory Structure

- **`docs/`**: Markdown source files for documentation.
- **`src/`**: Website source code, including pages, components, and styles.
- **`static/`**: Static resource files (such as images, documents, etc.).
- **`build/`**: Directory for built static files.
- **`docusaurus.config.js`**: Website configuration file.
- **`sidebars.js`**: Sidebar configuration for documentation.
- **`i18n/`**: Internationalization configuration files, supporting multi-language documentation.
- **`package.json`**: Project dependencies and script configuration.
- **`.github/workflows/`**: GitHub Actions workflow configuration files.
- **`.docsearch/`**: DocSearch configuration files for search functionality.
- **`pnpm-lock.yaml`**: Dependency lock file for the project.
- **`README-CN.md`**: Chinese version of the project README.
- **`README.md`**: Project README file.

## Contribution

Contributions to TDengine IDMP documentation are welcome! Please submit a Pull Request or report issues.

## Community Support

If you encounter any problems while using TDengine IDMP or reading the documentation, please contact us via:
- [GitHub Issues](https://github.com/taosdata/tdengine-idmp-docs/issues)
- [Official Support Email](mailto:it@taosdata.com)

## License
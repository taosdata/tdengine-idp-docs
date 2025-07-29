import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get Started with Local Install

TDengine IDMP offers a rich set of features. This guide will walk you through installing and starting TDengine IDMP using the installation package. After importing sample scenario data, you can easily explore elements, generate AI-powered dashboards, and perform AI analysis.

## Installation

TDengine IDMP supports multiple installation and deployment methods, allowing you to experience its powerful capabilities across different operating systems and architectures. For details on supported systems and architectures, refer to the [Deployment Planning](../operation/planning). The following steps use a Linux system as an example to demonstrate how to download, install, and start TDengine IDMP.

1. Access the [TDengine Download Center](https://www.taosdata.com/download-center?product=TDengine+IDMP-Enterprise).
1. Select the latest Linux-Generic installation package and download it.
1. Extract the package and run the installation script to complete the installation (replace <version> with the actual version number):
   ```bash
   tar zxvf tdengine-idmp-enterprise-<version>-linux.tar.gz 
   cd tdengine-idmp-enterprise-<version>
   ./install.sh
   ```
1. Configure the TDengine TSDB connection. Open the TDengine IDMP configuration file with a text editor. The default location is `/usr/local/taos/idmp/config/application.yml`. Under the `tda.default-connection` section, set the TDengine TSDB connection details as shown in the following example:
   ```yaml
   tda:
     default-connection:
       enable: true
       auth-type: UserPassword # can be set to UerPassword or Token
       url: http://192.168.1.100:6041
       username: root
       password: taosdata
   ```
   Details of the configuration options:
     - auth-type: Authentication method. Supports UserPassword (default) and Token.
     - url: The IP address and port of the taosAdapter component in TDengine TSDB. The default port is 6041.
     - username and password: Credentials for accessing TDengine TSDB. Default values are root and taosdata.
1. To test the connection to TDengine TSDB, you can use the curl command in the terminal. Example:
   ```bash
   curl --request POST \
     --user root:taosdata \
     --url http://192.168.1.100:6041/rest/sql \
     --data 'show databases;'
   ```
   If the connection is successful, you will see the list of databases in TDengine TSDB.
1. Start TDengine IDMP.
   ```bash
   svc-tdengine-idmp start
   ```

:::tip

1. During the installation process, the installer will automatically download and install AI-related Python dependencies. Please ensure your system is connected to the internet.
1. Before starting TDengine IDMP, you need to install and deploy the TDengine TSDB service.

:::

import Init from './_init.md'

<Init />

import Getstarted from './_get_started.md'

<Getstarted />
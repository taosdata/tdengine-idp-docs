---
title: Get Started with Local Install
sidebar_label: Local Install
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Init from './_init.md';
import Getstarted from './_get_started.md';

You can install TDengine IDMP locally on a Linux or macOS machine. In this document, Linux is used as an example.

## Prerequisites

- Ensure that your local machine meets the minimum requirements for TDengine IDMP. For details, see [Planning Your Deployment](../07-operation/01-planning.md).
- Install TDengine TSDB-Enterprise version 3.3.7.0 or higher. For instructions, see [Deploy TDengine TSDB-Enterprise Enterprise](https://docs.tdengine.com/get-started/deploy-enterprise-edition/).
- Install Java 21 or later.
- Install glibc 2.25 or later.
- On Debian and Ubuntu systems, install the `python3-venv` package.

## Install TDengine IDMP

1. In a web browser, access the [TDengine Download Center](https://tdengine.com/downloads/?product=TDengine+IDMP-Enterprise&platform=Linux-Generic).

1. Select the latest **Linux-Generic** installation package and download it.

1. Follow the instructions in the Download Center to install TDengine IDMP.

   :::tip

   Your machine must be connected to the internet when you install TDengine IDMP. Dependencies are downloaded and installed during the TDengine IDMP installation process. 

   :::

1. Configure the TDengine TSDB-Enterprise connection in TDengine IDMP:

   1. Open the TDengine IDMP configuration file with a text editor. The default location is `/usr/local/taos/idmp/config/application.yml`.
   1. Under the `tda.default-connection` section, set the TDengine TSDB-Enterprise connection details as shown in the following example:

      ```yaml
      tda:
        default-connection:
          enable: true
          auth-type: UserPassword
          url: http://localhost:6041
          username: root
          password: taosdata
      ```

1. (Optional) Run the following command to test the connection to TDengine TSDB-Enterprise:

   ```bash
   curl --request POST \
     --user root:taosdata \
     --url http://localhost:6041/rest/sql \
     --data 'show databases;'
   ```
   If the connection is successful, the list of databases in TDengine TSDB-Enterprise will be displayed.

1. Start TDengine IDMP.
   ```bash
   svc-tdengine-idmp start
   ```

<Init />

<Getstarted />

## Uninstall TDengine IDMP

Once you’ve completed your evaluation, you can uninstall TDengine IDMP by running the following command:

```bash
sudo rmtdengine-idmp
```

For more detailed instructions on starting and stopping the service, see [Local Deployment](../07-operation/02-installation/01-install-guide.md).
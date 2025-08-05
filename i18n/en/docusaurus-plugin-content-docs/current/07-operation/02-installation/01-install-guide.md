---
title: Local Deployment
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This document describes how to install TDengine IDMP on your local machine.

## Prerequisites

- Ensure that your local machine meets the minimum requirements for TDengine IDMP. For details, see [Planning Your Deployment](../01-planning.md).
- Install TDengine TSDB-Enterprise version 3.3.7.0 or higher. For instructions, see [Deploy TDengine TSDB-Enterprise Enterprise](https://docs.tdengine.com/get-started/deploy-enterprise-edition/).
- Install Java 21 or later.
- Install glibc 2.25 or later.
- On Debian and Ubuntu systems, install the `python3-venv` package.

## Install TDengine IDMP

Select your operating system to display the appropriate installation procedure.

:::tip

Your machine must be connected to the internet when you install TDengine IDMP. Dependencies are downloaded and installed during the TDengine IDMP installation process. 

:::

1. In a web browser, access the [TDengine Download Center](https://tdengine.com/downloads/?product=TDengine+IDMP-Enterprise&platform=Linux-Generic).

1. Select the installation package for your operating system and download it.

1. Follow the instructions in the Download Center to install TDengine IDMP.

:::important

Do not start TDengine IDMP until you have configured the TDengine TSDB-Enterprise connection as described in the following section.

:::

## Configure TSDB Connection

1. Configure the TDengine TSDB-Enterprise connection in TDengine IDMP:

   1. Open the TDengine IDMP configuration file with a text editor. The default location is `/usr/local/taos/idmp/config/application.yml`.

   1. Under the `tda.default-connection` section, set the TDengine TSDB-Enterprise connection details as shown in the following example:

      ```yaml
      tda:
        default-connection:
          enable: true
          auth-type: UserPassword
          url: http://<hostname>:<port>
          username: <username>
          password: <password>
      ```
      
      - **url:** Specify the URL and port number of your taosAdapter instance.
      
      - **username:** Enter a TDengine TSDB-Enterprise user.
      
      - **password:** Enter the password for the TDengine TSDB-Enterprise user.

1. (Optional) Run the following command to test the connection to TDengine TSDB-Enterprise:

   ```bash
   curl --request POST \
     --user <username>:<password> \
     --url http://<hostname>:<port>/rest/sql \
     --data 'show databases;'
   ```

   If the connection is successful, the list of databases in TDengine TSDB-Enterprise will be displayed.

## Start TDengine IDMP

<Tabs>

<TabItem label="Linux" value="linux">

Run the following command to start TDengine IDMP:
```bash
sudo svc-tdengine-idmp start
```

You can also use other `svc-tdengine-idmp` commands to check the service status, stop the service, and perform other operations:

```bash
sudo svc-tdengine-idmp status # Check service status
sudo svc-tdengine-idmp stop   # Stop service
```

You can manually manage the TDengine IDMP service using `systemctl`. For example:

```bash
sudo systemctl start tdengine-idmp
sudo systemctl stop tdengine-idmp
sudo systemctl status tdengine-idmp
sudo systemctl restart tdengine-idmp
```

:::info

Root permissions are required to run these commands.

:::

</TabItem>

<TabItem label="macOS" value="macos">

Run the following command to start TDengine IDMP:

```bash
sudo svc-tdengine-idmp start
```

You can also use other `svc-tdengine-idmp` commands to check the service status, stop the service, and perform other operations:

```bash
sudo svc-tdengine-idmp status # Check service status
sudo svc-tdengine-idmp stop   # Stop service
```

You can manually manage the TDengine IDMP service using `launchctl`. For example:

```bash
sudo launchctl start com.taosdata.tdengine-idmp
sudo launchctl stop com.taosdata.tdengine-idmp
sudo launchctl list | grep tdengine-idmp
sudo launchctl print system/com.taosdata.tdengine-idmp
```

:::info

- Root privileges are required to run these commands.
- The command `sudo launchctl list | grep tdengine-idmp` returns the PID of the TDengine IDMP Java process in the first column. If the command returns `-`, the TDengine IDMP service is not running.
- If the service is not working properly, check the system log (`launchd.log`) or the logs located in the `/usr/local/taos/idmp/logs` directory for more information.

:::

</TabItem>
</Tabs>

Once TDengine IDMP starts successfully, it includes the following three services:

- `tdengine-idmp-h2`: Stores metadata and configuration for TDengine IDMP.
- `tdengine-idmp-chat`: Handles AI-related tasks and analytics.
- `tdengine-idmp`: The core service responsible for managing and providing data access.

## Uninstall TDengine IDMP

<Tabs>
<TabItem label="Linux-Generic" value="targz">
Run the following command to uninstall TDengine IDMP:

```bash
rmtdengine-idmp -e [yes | no]
```
To retain data, log, and configuration files, specify `no`. To delete these files, specify `yes`.

</TabItem>
<TabItem label="Linux-Red Hat" value="rpm">

Run the following command to uninstall TDengine IDMP:

```bash
rpm -e tdengine-idmp
```

</TabItem>
<TabItem label="Linux-Ubuntu" value="deb">
Run the following command to uninstall TDengine IDMP:

```bash
dpkg -r tdengine-idmp
```

</TabItem>
<TabItem label="macOS" value="macos">
Run the following command to uninstall TDengine IDMP:

```bash
rmtdengine-idmp -e [yes | no]
```
To retain data, log, and configuration files, specify `no`. To delete these files, specify `yes`.

</TabItem>
</Tabs>

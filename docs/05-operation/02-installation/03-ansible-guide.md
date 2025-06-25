# 使用 Ansible 部署
Ansible 是一个开源的自动化工具，用于配置管理、应用部署、云服务编排等。本指南介绍如何使用 Ansible 实现 TDengine IDP 的自动化部署。通过这套工具，可以轻松地在多台服务器上完成 TDengine IDP 的安装和配置。

## 前置条件

1. 本文适用 Ansible 2.10 以上版本 
1. 本文适用 Python 3.6 以上版本
1. 所有目标服务器可以通过 SSH 访问

## 安装 Ansible

如未安装 Ansible，请参考 [Ansible 官方文档](https://docs.ansible.com/ansible/latest/getting_started/index.html)。

## 部署 TDengine IDP 服务

> **安全提示：**
> 本部署方案使用 `ansible-vault` 管理敏感信息，以确保密码等敏感数据在版本控制中安全存储。

### 1. **克隆部署仓库**
   ```bash
   git clone https://github.com/taosdata/tdengine-idp-deployment.git
   ``` 
   > 该仓库包含了 TDengine IDP 部署的 playbook。

### 2. **编辑 hosts 文件**

编辑 `inventory/hosts` 文件，配置目标服务器信息。请根据实际环境修改服务器地址和连接信息。例如：

```ini
[tdengine_idp_servers]
server1 ansible_host=192.168.1.*
server2 ansible_host=192.168.2.*

[tdengine_idp_servers:vars]
ansible_user={{ ansible_ssh_user }}
ansible_ssh_pass={{ vault_ssh_password }}
```

- `[tdengine_idp_servers]`：定义服务器组，`server1` 和 `server2` 为主机别名，`ansible_host` 指定实际 IP。
- `[tdengine_idp_servers:vars]`：为该组定义变量，`ansible_user` 和 `ansible_ssh_pass` 可通过加密变量引用（如 `group_vars/public.yml` 中定义）。

请根据实际环境修改服务器地址和连接参数。

### 3. **配置服务器密码**

使用以下命令编辑加密的配置文件：

```bash
ansible-vault edit inventory/group_vars/public.yml
```

当系统提示输入 `Vault password` 时，请输入：`taosdata`

在该文件中，配置所有服务器的用户名和密码信息。请注意：
- 所有服务器必须使用相同的密码
- 请妥善保管密码信息

### 4. **执行部署**

运行以下命令开始部署：

```bash
ansible-playbook playbooks/tdengine-idp.yml --ask-vault-pass
```

当系统提示输入 `Vault password` 时，请输入：`taosdata`
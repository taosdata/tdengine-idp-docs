# Troubleshooting

## Confirming Issues

When encountering issues while using TDengine IDP, please first disable browser cache and refresh the page to retry. The specific steps are as follows:

1. Open the browser's developer tools
2. Switch to the "Network" tab
3. Check the "Disable cache" option
4. Refresh the page and check if the issue still exists

If the issue persists, please follow the steps below to collect frontend and backend error information for us to troubleshoot.

## Collecting Frontend Information

Please follow these steps to collect browser console error information and network request information:

### Collecting Console Error Information

1. Open the browser's developer tools
2. Switch to the "Console" tab
3. If there are errors in the console, right-click on the console error and select "Save as" to save the error to a file

### Collecting Network Request Information

1. Open the browser's developer tools
2. Switch to the "Network" tab
3. If there are failed requests, right-click on the failed request and select "Copy"
4. Copy the request headers, response headers, response, and stack trace (if available) and save them to a file

## Collecting Backend Logs

Please follow these steps to collect logs from TDengine IDP and TDengine TSDB:

## Local Installation Method

If you deployed TDengine IDP through local installation, log files can be found in the following locations:

| Component | Log File Path |
|-----------|---------------|
| TDengine IDP Log | /var/log/taos/tda.log |
| TDengine IDP Error Log | /var/log/taos/tda-error.log |
| TDengine TSDB Log | /var/log/taos/taosdlog.* |

## Containerized Deployment Method

If you deployed TDengine IDP through containerized deployment, log files can be copied from containers to local using the following commands:

```bash
docker cp tdengine:/var/log/taos/taosdlog.*        ./
docker cp tdengine-idp:/var/log/taos/tda.log       ./
docker cp tdengine-idp:/var/log/taos/tda-error.log ./
```

## Submitting Issues

We use [Github Issues](https://github.com/taosdata/tdengine-idp-docs/issues/new/choose) to track and manage issues. Please follow the Github Issues template and submit the information collected above. Our support team will respond as soon as possible and help you resolve the issue.


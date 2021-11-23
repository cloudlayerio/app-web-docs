---
sidebar_position: 1
slug: /
---

# Introduction
```html title="API Base URL"
https://api.cloudlayer.io/v1
```

cloudlayer.io is a service that lets you generate PDFs and Images from a Url or Html. In addition, we offer conversion and manipulation services to convert a document to another format, such as a Word Document to Html.

In simple steps:
1. [Create](https://cloudlayer.io/auth/register) an account, or [login](https://cloudlayer.io/auth/login).
2. Get your API Key from the Dashboard.
3. Find the API Endpoint you want to use.
4. Call the API using your API Key.

## Authentication
cloudlayer.io authenticates your API requests using your account's API keys. If you don't include your key when making an API request or use an incorrect one, a 401 Unauthorized response gets returned.

To obtain your API Key, you will need to log into your account.  Go to the API Management tab, and by default, a single API Key gets generated for you. Up to 5 API Keys are allowed at any given time.  

Each API request will record the API Key used for that request, which can help you secure your keys and track their usage if you're using them from multiple locations.

## Using Your API Key
The API Key needs to get added to the header of each request. The name of the header is ```X-API-Key``` and the value will be the key which begins with ```cl-```.

```yaml title="API Key Example"
X-API-Key: <YOUR-API-KEY>
```

## Make a Test Request
```shell
curl --request GET \
  --url https://api.cloudlayer.io/v1/getStatus \
  --header 'x-api-key: <YOUR-API-KEY>'
```

If everything worked correctly, you should get the following JSON response back. 

```json
{ "status": "ok" }
```

*<sup>Note: Requests against informational endpoints such as this one do not count against your API Credits.</sup>*

## HTTP Status Codes

| Code  | Description |
|:---:|:--- |
| `200` | OK |
| `201` | Received when using the synchronous API call and successfully getting back a result. | 
| `202` | Received when using the asynchronous API call and successfully getting back a result. |
| `400` | Bad request. Such as malformed JSON in the request, missing parameters, etc. |
| `401` | Unauthorized. Incorrect or revoked API Key or your account is delinquent and requires payment. |
| `404` | Not found. The endpoint path you are using is incorrect. |
| `429` | Too many requests.  You have exceeded your request rate and need to slow your requests down. |
| `500` | Internal Server Error. An exception occurred while processing the request. Try it again or adjust the parameters. |
| `503` | Service Unavailable. Our service is down or experiencing trouble. Contact support if you continue to receive this status code. |

## Webhooks

*** This feature is coming in the future. ***

## Async & Sync
All calls made to the current API are synchronous by default. 

*** Asynchronous calling and webhook support coming in the future. ***

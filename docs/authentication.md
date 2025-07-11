---
id: authentication
title: Authentication
sidebar_label: Authentication / API Key
slug: /authentication
description: Learn how to generate and use your CIQ API key for authentication with the NineBit CIQ SDK.
keywords: [CIQ, authentication, API key, NineBit]
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 🔐 Authentication & API Key

To access the **NineBit CIQ SDK**, you need a valid API key. This key authorizes your requests and links them to your account.

---

## 📥 How to Get Your API Key

1. Visit the official CIQ platform: [**ciq.ninebit.in**](https://ciq.ninebit.in/)
2. Click **“Register”** (or **Login** if you already have an account)
3. After logging in, you'll find your **API key in the bottom-left corner** of the dashboard

> 📌 This key is unique to your account — keep it secure!

---

## 🔧 Using the API Key in SDKs

<Tabs>
<TabItem value="python" label="Python" default>

```python
client = NineBitCIQClient(
    api_key="<your-api-key>"
)
```
</TabItem>      

<TabItem value="js" label="JavaScript" default>

```js
const apiKey = process.env.API_KEY || '';
const client = new CIQClient(apiKey);
```
</TabItem>  
</Tabs> 

### 🧪 Test Your Authentication

To check if your API key is working, try uploading a test file or sending a query. If the key is invalid, the SDK will return an authentication error.

#### Example

<Tabs>
<TabItem value="python" label="Python" default>

```python
response = client.rag_query("Hello?")
print(response)
```
</TabItem>      

<TabItem value="js" label="JavaScript" default>

```js
const response = await client.ragQuery("Hello?");
console.log(response);
```
</TabItem>  
</Tabs>


🙋 Need Help?
If your key isn’t working or you’ve lost it:

Re-login to regenerate

Or contact support@ninebit.in


---
id: quickstart
title: Quickstart
sidebar_label: CIQ SDK Installation
description: Learn how to install and use the NineBit CIQ SDK.
slug: /quickstart
keywords:
  - CIQ
  - NineBit
  - document intelligence
  - RAG
  - SDK installation
  - semantic search
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 🚀 Get Started with CIQ in Minutes


Welcome to **NineBit CIQ** — your private, developer-friendly platform for building intelligent document workflows using RAG (Retrieval-Augmented Generation), classification, and taxonomy extraction.

This guide will help you:

- 📁 Upload your first document
- 💬 Query it using natural language
- ⚙️ Run everything via Python or Node.js SDK

---


### 1️⃣ Install the SDK

<Tabs>
<TabItem value="python" label="Python" default>

```python
pip install ninebit-ciq
```
</TabItem>      

<TabItem value="js" label="JavaScript" default>

```js
npm install @ninebit/ciq
```
</TabItem>  
</Tabs>    


### 2️⃣ Set Up the Client

<Tabs>
<TabItem value="python" label="Python" default>

```python
from ninebit_ciq import NineBitCIQClient

client = NineBitCIQClient(
    api_key="<your-api-key>"
)
```
</TabItem>      

<TabItem value="js" label="JavaScript" default>

```js
// Use import for ESM
import { CIQClient } from '@ninebit/ciq';

// Or use require() for CommonJS
// const { CIQClient } = require('@ninebit/ciq');

const apiKey = process.env.API_KEY || '';
const client = new CIQClient(apiKey);
```
</TabItem>  
</Tabs>   

🔑 Where to Get Your API Key

⚠️ To use the SDK, you’ll need your unique _CIQ API key_.

🧭 Go to [**ciq.ninebit.in**](https://ciq.ninebit.in), click “Register” (or Login if you already have an account), and your API key will be visible in the bottom-left corner of the dashboard.


### 3️⃣ Upload a Document
<Tabs>
<TabItem value="python" label="Python" default>

```python
def on_done(error, data):
    if error:
        print(f"Ingest_file failed: {error}")
    else:
        print(f"Ingest_file succeeded: {str(data)}")

client.ingest_file(file="files/sample.pdf", callback=on_done)
```
</TabItem>      

<TabItem value="js" label="JavaScript" default>

```js
await client.ingestFile('files/sample.pdf');
```
</TabItem>  
</Tabs>    

### 4️⃣ Ask a Question

<Tabs>
<TabItem value="python" label="Python" default>

```python
query = "What are land breeze?"
response = client.rag_query(query=query)
print(f"Query response is {response}")
```
</TabItem>      

<TabItem value="js" label="JavaScript" default>

```js
const query = "What are land breeze?";
const response = await client.ragQuery(query);
console.log("Query response is", response);
```
</TabItem>  
</Tabs>    


```
## ✅ You're Done!

You’ve just:
- Uploaded a document to CIQ
- Queried it using natural language
- Retrieved AI-generated answers using RAG

```
Return to [Home](/).


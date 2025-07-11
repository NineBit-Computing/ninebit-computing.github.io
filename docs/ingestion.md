---
id: ingestion
title: Upload & Ingest Documents
sidebar_label: Document Ingestion
slug: /ingestion
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 🗂️ Upload & Ingest Documents

Document ingestion is the first step in making your unstructured files queryable via CIQ. Once a file is ingested, it’s indexed and becomes available for search, classification, and Q&A.

---

## 📁 Supported File Types

Currently supported:

- ✅ PDF  
Coming soon:

- 🔜 DOCX  
- 🔜 TXT

---

## 🚀 How to Ingest a Document

Use the SDK method below to upload and process a document.

<Tabs>
  <TabItem value="python" label="Python" default>

```python
from ninebit_ciq import NineBitCIQClient

client = NineBitCIQClient(api_key="YOUR_API_KEY")
response = client.ingest_file("files/report.pdf")
print(response)
```
</TabItem> <TabItem value="js" label="JavaScript">

```js
import { CIQClient } from '@ninebit/ciq';

const client = new CIQClient("YOUR_API_KEY");
await client.ingestFile("files/report.pdf");
```
</TabItem> </Tabs>
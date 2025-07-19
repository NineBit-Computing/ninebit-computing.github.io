---
id: ciq-components
title: CIQ Components Overview
sidebar_label: Components
description: Explore the core components of the CIQ platform for intelligent document understanding.
slug: /components
keywords:
  - CIQ
  - components
  - modules
  - RAG
  - classification
  - taxonomy
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 🧠 CIQ Components Overview

CIQ is a modular, API-first platform designed to help developers turn documents into smart, searchable knowledge — starting with **document ingestion** and **RAG-based querying**.

Whether you're building an internal search tool, a chatbot, or a document assistant, CIQ gives you the foundation to work with unstructured files using natural language.

---

## 🔍 1. Document Ingestion

**Ingest documents into CIQ for processing.**
CIQ lets you upload documents via SDK. Files are automatically chunked, normalized, and stored with metadata for retrieval.

- Upload PDFs, Word files, or plain text
- Automatic metadata capture
- Format normalization for better parsing

<Tabs>
<TabItem value="python" label="Python" default>

```python

client.ingest_file(file="files/sample.pdf", callback=on_done)

```

</TabItem>

<TabItem value="js" label="JavaScript" default>

```js
await client.ingestFile("files/sample.pdf");
```

</TabItem>  
</Tabs>

## 🧠 2. RAG Querying

**Ask questions in plain language and get grounded answers.**
You can ask plain-language questions like "What is the due date?" or "What is penalty". CIQ will search your documents and respond using a context-aware LLM.

- Semantic search + context-aware LLM response
- No fine-tuning needed
- Works via REST API or LangChain integration

<Tabs>
<TabItem value="python" label="Python" default>

```python
query = "What is land breeze"
response = client.rag_query(query=query)

```

</TabItem>

<TabItem value="js" label="JavaScript" default>

```js
query = "What is land breeze";
const response = await client.ragQuery(query);
```

</TabItem>  
</Tabs>

---

## 🧩 Mix and Match for Your Use Case

CIQ is built to be **modular** — so whether you're building a chatbot, automating a document pipeline, or classifying insurance forms, you can use just the components you need.

💡 **Example Workflows:**

- RAG + Ingestion → Build a Q&A assistant over legal documents
- Ingestion + Classification → Auto-sort resumes or risk reports
- Taxonomy + RAG → Summarize & extract structured insights from contracts

---

## 🔗 What's Next?

- 👉 [Quickstart Guide](/quickstart)
- 🛠️ [CIQ SDK Reference](https://pypi.org/project/ninebit-ciq)
- ❓ [FAQ](/faq)

---

## 🚀 Ready to Build?

Start with one component or plug the entire CIQ stack into your app — the choice is yours.

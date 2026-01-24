# AI RAG Text Assistant

A Retrieval-Augmented Generation (RAG) based application that allows users to ask natural-language questions from large text documents and receive accurate, context-grounded answers.

This project focuses on **semantic search, hallucination control, and performance optimization**, following real-world RAG system design principles.

---

## 🚀 Features

- Ask questions from large text documents
- Semantic search using vector embeddings
- Context-aware answers powered by LLMs
- Strict hallucination control (answers only from retrieved context)
- Redis-based caching for faster responses and reduced cost
- Clean separation between ingestion and query pipelines

---

## 🧠 System Architecture

The application follows a standard **RAG pipeline**:

1. Text documents are chunked into smaller segments
2. Each chunk is converted into embeddings
3. Embeddings are stored in a vector database
4. User queries are embedded at runtime
5. Top-k relevant chunks are retrieved via similarity search
6. Retrieved context is sent to the LLM for answer generation
7. Responses are cached to improve performance

> The LLM never sees the full document — only the retrieved context.

---

## 🛠 Tech Stack

- **Frontend:** Minimal chat-style UI
- **Backend:** Node.js / Next.js
- **Vector Database:** Qdrant
- **Embeddings:** Sentence-transformer based embeddings
- **LLM Provider:** Groq API
- **Caching:** Redis
- **Orchestration:** LangChain

---

## ⚙️ Key Design Decisions

- Used **RAG instead of fine-tuning** for flexibility and instant knowledge updates
- Added **strict system prompts** to prevent hallucinations
- Introduced **Redis caching** to reduce latency and API cost
- Limited scope to text files to focus on RAG core architecture

---

## ⚠️ Limitations

- Currently optimized for moderate document sizes
- No automatic re-ranking or hybrid search yet
- Prototype-level concurrency handling

---

## 🔮 Future Improvements

- Hybrid (keyword + semantic) search
- Metadata-based filtering
- Better chunking and re-ranking strategies
- Role-based document access
- Support for additional document formats (PDFs, DOCs)

---

## 📌 Purpose

This project was built to deeply understand **modern RAG system design**, not just LLM usage.  
It demonstrates applied AI, backend optimization, and clean architectural thinking.


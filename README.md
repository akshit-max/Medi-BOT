# 🧠 AI RAG Text Assistant

🌐 **Live Demo:** https://medi-khaki.vercel.app  
🎥 **Demo Video:** https://drive.google.com/file/d/1SeO2xXspSP56_jABlRvnI-LqIb0zKd5g/view?usp=sharing  

A production-oriented Retrieval-Augmented Generation (RAG) system that enables users to query large text documents using natural language and receive context-grounded, hallucination-controlled responses.

This project focuses on **semantic retrieval accuracy, latency optimization, cost control, and clean AI system architecture**.

---

## 📸 Screenshots

### Chat Interface
<img width="1914" height="910" alt="Screenshot 2026-02-10 005251" src="https://github.com/user-attachments/assets/87bfa7ab-4741-471d-8025-18ab16a3ca45" />

---

## 🚀 Core Features

- Ask natural-language questions from large text documents
- Vector similarity search using embeddings
- Context-grounded LLM responses
- Strict hallucination control (answers restricted to retrieved chunks)
- Redis caching to reduce latency and API cost
- Clear separation between ingestion and query pipelines
- Modular RAG architecture

---

## 🧠 System Architecture

The system follows a structured RAG pipeline:

### 1️⃣ Ingestion Pipeline
- Raw document text is chunked into smaller segments
- Each chunk is converted into vector embeddings
- Embeddings are stored in Qdrant vector database
- Metadata stored for structured retrieval

### 2️⃣ Query Pipeline
- User query is embedded at runtime
- Top-k relevant chunks retrieved via similarity search
- Retrieved context passed to LLM
- Strict system prompts enforce grounded responses
- Output cached in Redis

> The LLM never sees the entire document — only the most relevant retrieved chunks.

---

## 🛠 Tech Stack

### Backend
- Node.js
- Next.js (API routes / server logic)

### Vector Database
- Qdrant

### Embeddings
- Sentence-transformer based embeddings

### LLM Provider
- Groq API (LLaMA-based models)

### Caching
- Redis

### Orchestration
- LangChain

### Deployment
- Vercel

---

## ⚙️ Key Engineering Decisions

- Used **RAG over fine-tuning** for flexible and dynamic knowledge updates
- Separated ingestion and query pipelines for maintainability
- Enforced **strict system prompts** to reduce hallucination risk
- Implemented **top-k similarity retrieval**
- Added Redis caching to reduce repeated inference cost
- Limited scope to text input to focus on retrieval quality

---

## 📉 Hallucination Control Strategy

To minimize hallucinations:

- LLM instructed to answer **only from retrieved context**
- If insufficient context → return fallback response
- No free-form creative generation allowed
- Context window strictly bounded

This ensures predictable and grounded outputs.

---

## 📈 Scalability Considerations

- Stateless query handling (horizontal scaling ready)
- Vector DB separated from application logic
- Redis caching reduces repeated LLM calls
- Embedding generation separated from query flow
- Architecture adaptable for hybrid retrieval (BM25 + vector)

---

## 🧩 Production Improvements (Next Steps)

If scaled to large datasets and users:

- Hybrid search (keyword + vector)
- Re-ranking models for improved relevance
- Chunk overlap tuning
- Metadata-based filtering
- Background ingestion jobs
- Rate limiting on query endpoints
- Multi-document support
- Role-based access control

---

## ⚠️ Current Limitations

- Optimized for moderate-sized text documents
- No advanced re-ranking yet
- Prototype-level concurrency optimization
- Limited document format support (text-only)

---

## 📌 Purpose of This Project

This project was built to deeply understand:

- Modern RAG architecture
- Retrieval accuracy trade-offs
- Latency vs cost balance
- Hallucination control strategies
- AI system modularization

It demonstrates applied AI engineering — not just LLM API usage.

---

## 👨‍💻 Author

Akshit Bhandula  
Full-Stack Developer | AI SaaS & RAG Systems  

GitHub: https://github.com/akshit-max  
LinkedIn: https://linkedin.com/in/akshit-bhandula-568772318  
Email: akshitbhandula@gmail.com

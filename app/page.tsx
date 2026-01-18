"use client";

import { useState } from "react";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function ask() {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer("");
    setError("");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      if (!res.ok) {
        throw new Error("Server error");
      }

      const data = await res.json();
      setAnswer(data.answer);
    } catch (err) {
      setError("Unable to connect to backend.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#eef2f7",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 520,
          backgroundColor: "#ffffff",
          borderRadius: 14,
          padding: 28,
          boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
          border: "1px solid #e5e7eb",
        }}
      >
        {/* Header */}
        <h1 style={{ fontSize: 22, color: "#111827", marginBottom: 6 }}>
          🩺 Medical Information Assistant
        </h1>

        <p
          style={{
            fontSize: 14,
            color: "#374151",
            marginBottom: 20,
            lineHeight: 1.5,
          }}
        >
          Ask questions about diseases, symptoms, and medicines.
          <br />
          <strong>Educational use only.</strong>
        </p>

        {/* System message */}
        <div
          style={{
            backgroundColor: "#f8fafc",
            border: "1px solid #e5e7eb",
            padding: 12,
            borderRadius: 8,
            fontSize: 14,
            color: "#1f2937",
            marginBottom: 12,
          }}
        >
          👋 Hi! I answer only from stored medical knowledge.
        </div>

        {/* Answer */}
        {answer && (
          <div
            style={{
              backgroundColor: "#eef2ff",
              border: "1px solid #c7d2fe",
              padding: 12,
              borderRadius: 8,
              fontSize: 14,
              color: "#1e1b4b",
              marginBottom: 12,
              whiteSpace: "pre-wrap",
              lineHeight: 1.6,
            }}
          >
            {answer}
          </div>
        )}

        {/* Error */}
        {error && (
          <div
            style={{
              backgroundColor: "#fee2e2",
              border: "1px solid #fecaca",
              padding: 10,
              borderRadius: 8,
              fontSize: 13,
              color: "#7f1d1d",
              marginBottom: 12,
            }}
          >
            {error}
          </div>
        )}

        {/* Input */}
        <textarea
          rows={3}
          placeholder="Type your medical question here..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          style={{
            width: "100%",
            padding: 12,
            fontSize: 14,
            borderRadius: 8,
            border: "1px solid #9ca3af",
            resize: "none",
            outline: "none",
            marginBottom: 12,
            color: "#111827",
          }}
        />

        <button
          onClick={ask}
          disabled={loading}
          style={{
            width: "100%",
            padding: "11px 0",
            backgroundColor: loading ? "#93c5fd" : "#2563eb",
            color: "#ffffff",
            border: "none",
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 600,
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Thinking..." : "Ask Assistant"}
        </button>

        <p
          style={{
            fontSize: 11,
            color: "#4b5563",
            marginTop: 12,
            textAlign: "center",
          }}
        >
          Not medical advice. Consult a healthcare professional.
        </p>
      </div>
    </main>
  );
}

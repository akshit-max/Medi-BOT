"use client";

import { useState } from "react";
import ChatCard from "./components/ChatCard";
import "./styles/chat.css";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [secret, setSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [secretError, setSecretError] = useState("");
  const [questionError, setQuestionError] = useState("");

  async function ask() {
    setSecretError("");
    setQuestionError("");
    setError("");
    setAnswer("");

    if (!secret.trim()) {
      setSecretError("Owner secret key is required.");
      return;
    }

    if (!question.trim()) {
      setQuestionError("Please enter a medical question.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/chat`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question, secret }),
        }
      );

      if (!res.ok) {
        throw new Error("Unauthorized");
      }

      const data = await res.json();
      setAnswer(data.answer);
    } catch {
      setError("Invalid secret key or server error.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page">
      <ChatCard
        question={question}
        setQuestion={setQuestion}
        answer={answer}
        secret={secret}
        setSecret={setSecret}
        loading={loading}
        error={error}
        secretError={secretError}
        questionError={questionError}
        onAsk={ask}
      />
    </main>
  );
}

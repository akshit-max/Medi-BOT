import Header from "./Header";
import SecretInput from "./SecretInput";
import MessageBox from "./MessageBox";
import { ChatCardProps } from "../types/chat";

export default function ChatCard({
  question,
  setQuestion,
  answer,
  secret,
  setSecret,
  loading,
  error,
  secretError,
  questionError,
  onAsk,
}: ChatCardProps) {
  return (
    <div className="card">
      <Header />

      <SecretInput
        secret={secret}
        setSecret={setSecret}
        error={secretError}
      />

      {secretError && (
        <MessageBox type="error" text={secretError} />
      )}

      <textarea
        className={`textarea ${questionError ? "input-error" : ""}`}
        rows={3}
        placeholder="Ask a medical question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      {questionError && (
        <MessageBox type="error" text={questionError} />
      )}

      {answer && <MessageBox type="answer" text={answer} />}
      {error && <MessageBox type="error" text={error} />}

      <button
        className="button"
        onClick={onAsk}
        disabled={loading}
      >
        {loading ? "Thinking..." : "Ask Assistant"}
      </button>

      <p className="disclaimer">
        Not medical advice. Always consult a healthcare professional.
      </p>
    </div>
  );
}

export type MessageType = "answer" | "error";

export interface ChatCardProps {
  question: string;
  setQuestion: React.Dispatch<React.SetStateAction<string>>;

  answer: string;

  secret: string;
  setSecret: React.Dispatch<React.SetStateAction<string>>;

  loading: boolean;
  error: string;

  secretError: string;
  questionError: string;

  onAsk: () => void;
}

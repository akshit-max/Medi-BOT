import { MessageType } from "../types/chat";

interface MessageBoxProps {
  type: MessageType;
  text: string;
}

export default function MessageBox({
  type,
  text,
}: MessageBoxProps) {
  return <div className={`message ${type}`}>{text}</div>;
}

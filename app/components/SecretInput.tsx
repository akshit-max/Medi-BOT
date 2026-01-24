interface SecretInputProps {
  secret: string;
  setSecret: React.Dispatch<React.SetStateAction<string>>;
  error?: string;
}

export default function SecretInput({
  secret,
  setSecret,
  error,
}: SecretInputProps) {
  return (
    <input
      type="password"
      className={`secret ${error ? "input-error" : ""}`}
      placeholder="Owner Secret Key"
      value={secret}
      onChange={(e) => setSecret(e.target.value)}
    />
  );
}

export interface IGracefulShutdownProps {
  message: string;
  callback: () => void;
}

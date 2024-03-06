export interface SessionData {
  userId?: string;
  username?: string;
  img?: string;
  isPro?: boolean;
  isLoggedIn: boolean;
}

export interface PreState {
  error: string | undefined;
}

export type THEME = "light" | "dark";

export interface IAppContext {
  theme: THEME;
  toggleTheme: () => void;
}

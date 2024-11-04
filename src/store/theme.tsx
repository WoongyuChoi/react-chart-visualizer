import { create } from "zustand";

interface ThemeState {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  isDarkMode: true,
  toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));

export const lightTheme = {
  colors: {
    backgroundMain: "#EAEAEA",
  },
};

export const darkTheme = {
  colors: {
    backgroundMain: "#D6D6D6",
  },
};

export default useThemeStore;

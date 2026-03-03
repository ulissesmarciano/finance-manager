export const theme = {
  colors: {
    primary: "#4f46e5",
    secondary: "#f8fafc",

    background: "#f8fafc",
    noColor: "transparent",
    surface: "transparent",

    text: "#0f172a",
    textSecondary: "#f8fafc",
    textMuted: "#64748b",

    danger: "#ef4444",
  },

  spacing: (value: number) => `${value * 8}px`,
  sizing: (value: number) => `${value * 8}px`,

  radius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
  },
};

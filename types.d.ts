declare global {
  interface Window {
    theme: {
      dev: boolean,
      location: string,
      theme: "auto" | "light" | "dark",
      systemTheme: "light" | "dark",
    }
  }
}

export { }
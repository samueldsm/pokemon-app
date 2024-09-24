export const signIn = async (
  username: string,
  password: string
): Promise<void> => {
  // Simulate authentication
  if (username === "user" && password === "password") {
    // Store authentication status (e.g., in local storage)
    localStorage.setItem("isAuthenticated", "true");
  } else {
    throw new Error("Invalid credentials");
  }
};

export const signOut = (): void => {
  // Clear authentication status
  localStorage.removeItem("isAuthenticated");
};

export const isAuthenticated = (): boolean => {
  // Check authentication status
  return localStorage.getItem("isAuthenticated") === "true";
};

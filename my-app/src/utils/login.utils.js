export const isLoggedIn = () => {
  const cookiesKeysAndValues = document.cookie.split("=");
  if (cookiesKeysAndValues.includes("authToken")) return true;

  return false;
};

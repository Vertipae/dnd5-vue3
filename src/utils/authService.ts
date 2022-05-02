export const isAuthenticated = () => {
  if (localStorage.accessToken) {
    return true;
  }
  return false;
};

export default { isAuthenticated };

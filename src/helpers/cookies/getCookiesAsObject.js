function getCookiesAsObject() {
  const cookieArray = document?.cookie?.split(';');
  const cookies = {};

  for (let i = 0; i < cookieArray.length; i++) {
    const cookie = cookieArray[i];
    const cookieParts = cookie.split('=');
    const cookieName = cookieParts[0].trim();
    const cookieValue = cookieParts[1].trim();
    cookies[cookieName] = cookieValue;
  }

  return cookies;
}

export default getCookiesAsObject;

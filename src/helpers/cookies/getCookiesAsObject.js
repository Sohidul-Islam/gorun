import setCookie from "./setCookie";

export function getCookiesAsObject() {
  const cookieArray = document?.cookie?.split(";");
  const cookies = {};

  for (let i = 0; i < cookieArray.length; i++) {
    const cookie = cookieArray[i];
    const cookieParts = cookie.split("=");
    const cookieName = cookieParts[0].trim();
    const cookieValue = cookieParts[1].trim();
    cookies[cookieName] = cookieValue;
  }

  return cookies;
}

export function setCookiesAsObj(cookiesObject, exdays) {
  for (const cookieName in cookiesObject) {
    const cookieValue = cookiesObject[cookieName];
    setCookie(cookieName, cookieValue, exdays);
  }
}

export const removeAuthCookies = () => {
  const cookies = getCookiesAsObject();
  setCookiesAsObj(cookies, 0);
  window.location.reload(true);
};

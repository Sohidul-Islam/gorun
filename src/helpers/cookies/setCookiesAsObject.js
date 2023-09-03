/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import setCookie from './setCookie';

function setCookiesAsObj(cookiesObject, exdays) {
  for (const cookieName in cookiesObject) {
    const cookieValue = cookiesObject[cookieName];
    setCookie(cookieName, cookieValue, exdays);
  }
}

export default setCookiesAsObj;

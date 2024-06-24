import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8080/auth',
  realm: 'myrealm',
  clientId: 'my-client',
});

export const initKeycloak = (onAuthenticatedCallback) => {
  keycloak.init({ onLoad: 'login-required' }).then((authenticated) => {
    if (authenticated) {
      onAuthenticatedCallback();
    }
  }).catch((error) => {
    console.error("Keycloak initialization failed", error);
  });
};

export const doLogin = keycloak.login;
export const doRegister = keycloak.register;
export const doLogout = keycloak.logout;
export const getToken = () => keycloak.token;
export const getUserInfo = () => keycloak.loadUserInfo();

export default keycloak;
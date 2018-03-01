// @flow

// For dev environment
export const prefixURL = (url: string) => {
  const prefix = window.location.hostname === 'localhost' ?
    'http://localhost:4000/' :
    '';
  return prefix + url;
};

export const customFetch = (url: string) => fetch(url).then(response => response.json());

import appData from './appData';

const cacheTtlMs = 10 * 60 * 1000;
const keyPrefix = 'redsky-config-';

function fetchConfig(name, url) {
  return fetch(url).then(resp => resp.json().then((config) => {
    localStorage.setItem(`${keyPrefix}${name}`, JSON.stringify({ lastFetch: Date.now(), config }));
    return config;
  }));
}

function getConfig(name) {
  const app = appData.find(x => x.name === name);
  if (!name || !app) { return null; }

  // Check local storage
  const normalizedName = name.replace(' ', '-');
  let stored;
  try {
    stored = JSON.parse(localStorage.getItem(`${keyPrefix}${normalizedName}`));
  } catch (e) {
    // Swallow
  }

  return (stored && stored.config && stored.lastFetch && Date.now() - stored.lastFetch > cacheTtlMs)
    ? stored.config
    : fetchConfig(normalizedName, app.url);
}

export default {
  getConfig,
  keyPrefix,
};

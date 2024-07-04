const cache: { [key: string]: { data: any; timestamp: number } } = {};
const CACHE_EXPIRATION_TIME = 5 * 60 * 1000; 

export const getFromCache = (url: string) => {
  const cachedEntry = cache[url];
  if (!cachedEntry) {
    return null;
  }
  const isExpired = Date.now() - cachedEntry.timestamp > CACHE_EXPIRATION_TIME;
  if (isExpired) {
    delete cache[url];
    return null;
  }
  return cachedEntry.data;
};

export const setToCache = (url: string, data: any) => {
  cache[url] = { data, timestamp: Date.now() };
};
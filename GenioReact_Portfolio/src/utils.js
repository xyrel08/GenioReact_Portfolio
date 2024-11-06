export const getImageUrl = (path) => {
    console.log(import.meta.url);
    return new URL(`/assets/${path}`, import.meta.url).href;
  };
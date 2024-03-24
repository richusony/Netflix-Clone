const key = import.meta.env.VITE_TMDB_KEY;
const baseUrl = "https://api.themoviedb.org/3";
const randomPageNumber = Math.floor(Math.random() * 20);
const endpoints = {
  popular: `${baseUrl}/movie/popular?api_key=${key}&page=${randomPageNumber+1}`,
  topRated: `${baseUrl}/movie/top_rated?api_key=${key}&page=${randomPageNumber}`,
  trending: `${baseUrl}/movie/popular?api_key=${key}&language=en-US&page=${randomPageNumber}`,
  comedy: `${baseUrl}/search/movie?api_key=${key}&language=en-US&query=comedy&page=${randomPageNumber}&include_adult=true`,
  upcoming: `${baseUrl}/movie/upcoming?api_key=${key}&page=${randomPageNumber}`,
};

export function createImageUrl(filename, size) {
  return `https://image.tmdb.org/t/p/${size}/${filename}`;
}

export default endpoints;
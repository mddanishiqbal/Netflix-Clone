const API_KEY = "a6e99f6d257018d9c2070254b7d43f38";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=123`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=28&append_to_response=videos`,
  fetchComedyMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=35&append_to_response=videos`,
  fetchHorrorMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=27&append_to_response=videos`,
  fetchRomanceMovies: `/discover/movie/?api_key=${API_KEY}&with_genres=10749&append_to_response=videos`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_geners=99`,
  fetchMystery: `/discover/movie/?api_key=${API_KEY}&with_genres=9648&append_to_response=videos`,
};

export default requests;

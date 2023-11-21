const { requestApi } = require("../configs/callApi")

class MovieService {
  fetchMovieNowPlayingApi = () => {
    return requestApi({
      url: "/popular?language=en-US&page=1'",
      method: "GET",
    })
  }
}

export const movieService = new MovieService();

import axios from "axios";

export const getVideoData = async (movie_id) => {
    const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=e48bd4bd74d7d1b85cbf75b1898d06c9`
      );
    return res;
}
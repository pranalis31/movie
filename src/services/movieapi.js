import axios from "axios";

export default {
  getmovies(infoUrl) {
    console.log("movie api", infoUrl);
    return (
      axios

        .get(`${"https://www.themoviedb.org/search?" + "q="}${infoUrl}`)

        //     return axios({
        //             method: "get",
        //             url: "http://api.tvmaze.com/search/shows?" + "q=" + this.infoUrl
        //         })
        .then(response => response.data)
        .catch(error => error)
    );
  }
};

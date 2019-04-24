import axios from "axios";

export default {
  getmovies(infoUrl) {
    console.log("movie api", infoUrl);
    return (
      axios
        // .get(`${"http://api.tvmaze.com/search/shows?" + "q="}${infoUrl}`)
        .get("https://www.themoviedb.org/search?" + "query=" + infoUrl)
        //.get("https://www.themoviedb.org/search/movie?" + "query=Hellboy")

        //     return axios({
        //             method: "get",
        //           url: "http://api.tvmaze.com/search/shows?" + "q=" + this.infoUrl

        .then(response => response.data)
        .catch(error => error)
    );
    //         })
  }
};

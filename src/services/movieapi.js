import axios from "axios";

export default {
  getmovies(infoUrl) {
    console.log("movie api", infoUrl);
    //  const board = this.props.routeParams.tag;
    var config = {
      headers: { "Access-Control-Allow-Origin": "*" }
    };
    //axios;
    // .get("https://www.themoviedb.org/search?" + "query=" + infoUrl, config)
    // .then(function(response) {
    //   console.log("////////////", +response.data);
    // })
    return (
      axios
        // .get("https://www.themoviedb.org/search?" + "query=" + infoUrl, {
        //   headers: {
        //     "Content-Type": "application/json"
        //   }
        // })
        .get(
          "${'https://cors-anywhere.herokuapp.com/'}https://www.themoviedb.org/search?" +
            "query=" +
            infoUrl,
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
        // .then(response => response.data)
        // .catch(error => error);
        .then(response => {
          console.log("response");
        })
    );
  }
};

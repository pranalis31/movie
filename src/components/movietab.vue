<template>
  <b-container>
    <b-row>
      <div class="p-5 mx-5">
        <b-tabs content-class="mt-3">
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              v-model="search_query"
              v-on:keyup.enter="getapi(infoUrl)"
            />
            <button
              class="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              v-on:click="getapi(infoUrl)"
            >
              Search
            </button>
          </form>

          <b-tab title="Now Playing  /" class="tile-tab" active>
            <b-container v-if="results.length > 0">
              <b-row>
                <b-col
                  md="3"
                  sm="12"
                  v-for="card in results"
                  v-bind:key="card.index"
                >
                  <div class="card border-0">
                    <div class="box-count">
                      <span class="text-white"> 0 </span>
                    </div>
                    <b-img
                      :src="card.img"
                      class="img-style mx-auto"
                      alt="Card image cap"
                    />
                    <!-- path + card.poster_path -->
                    <!-- :src="card.poster_path | serveimg" -->
                    <div class="card-body p-0 text-left">
                      <div class="card-title font-weight-bold text-dark">
                        {{ card.title }}
                      </div>
                      <div class="card-subtitle mt-3 text-muted">
                        {{ card.release_date }}
                      </div>

                      <a href="#" class="card-link"
                        ><font-awesome-icon
                          class="text-secondary"
                          :icon="['fas', 'circle']"
                        />
                        {{ card.popularity }}
                      </a>

                      <a href="#" class="card-link"
                        ><font-awesome-icon
                          class="text-secondary"
                          :icon="['fas', 'circle']"
                        />
                        {{ card.vote_count }}
                      </a>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </b-container>
            <div v-else>
              No data found
            </div>
          </b-tab>

          <b-tab title="Opening this week  /">
            <b-container v-if="cards.length > 0">
              <b-row>
                <b-col
                  md="3"
                  sm="12"
                  v-for="card in cards"
                  v-bind:key="card.index"
                >
                  <div class="card border-0">
                    <div class="box-count">
                      <span class="text-white"> 0 </span>
                    </div>
                    <b-img
                      :src="card.img"
                      class="img-style mx-auto"
                      alt="Card image cap"
                    />
                    <div class="card-body p-0 text-left">
                      <div class="card-title font-weight-bold text-dark">
                        {{ card.title }}
                      </div>
                      <div class="card-subtitle mt-3 text-muted">
                        {{ card.subtitle }}
                      </div>

                      <a href="#" class="card-link"
                        ><font-awesome-icon
                          class="text-secondary"
                          :icon="['fas', 'circle']"
                        />
                        {{ card.link }}</a
                      >
                      <a href="#" class="card-link"
                        ><font-awesome-icon
                          class="text-secondary"
                          :icon="['fas', 'circle']"
                        />
                        {{ card.link }}</a
                      >
                    </div>
                  </div>
                </b-col>
              </b-row>
            </b-container>
            <div v-else>
              No data found
            </div>
          </b-tab>
          <b-tab title="Coming Soon   ">
            <b-container v-if="cards.length > 0">
              <b-row>
                <b-col
                  md="3"
                  sm="12"
                  v-for="card in cards"
                  v-bind:key="card.index"
                >
                  <div class="card border-0">
                    <div class="box-count">
                      <span class="text-white"> 0 </span>
                    </div>
                    <b-img
                      :src="card.img"
                      class="img-style mx-auto"
                      alt="Card image cap"
                    />
                    <div class="card-body p-0 text-left">
                      <div class="card-title font-weight-bold text-dark">
                        {{ card.title }}
                      </div>
                      <div class="card-subtitle mt-3 text-muted">
                        {{ card.subtitle }}
                      </div>

                      <a href="#" class="card-link"
                        ><font-awesome-icon
                          class="text-secondary"
                          :icon="['fas', 'circle']"
                        />
                        {{ card.link }}</a
                      >
                      <a href="#" class="card-link"
                        ><font-awesome-icon
                          class="text-secondary"
                          :icon="['fas', 'circle']"
                        />
                        {{ card.link }}</a
                      >
                    </div>
                  </div>
                </b-col>
              </b-row>
            </b-container>
            <div v-else>
              No data found
            </div>
          </b-tab>
        </b-tabs>
      </div>
    </b-row>
  </b-container>
</template>

<script>
import img1 from "../assets/images/card12.jpg";
import img2 from "../assets/images/card4.jpeg";
import img3 from "../assets/images/card2.jpg";
import img4 from "../assets/images/card5.jpg";
import img5 from "../assets/images/card6.jpg";

import movieapi from "@/services/movieapi";

import axios from "axios";

export default {
  data() {
    return {
      cards: [
        {
          img: img1,
          title: "Victoria & Abu",
          subtitle: "Release 12 april 19",
          link: "trailer",
          link1: "detroil"
        },
        {
          img: img2,
          title: "Diamonds",
          subtitle: "Release 12 april 19",
          link: "trailer",
          link1: "detroil"
        },
        {
          img: img3,
          title: "Aventures",
          subtitle: "Release 12 april 19",
          link: "trailer",
          link1: "detroil"
        },
        {
          img: img4,
          title: "Fantastic",
          subtitle: "Release 12 april 19",
          link: "trailer"
        },
        {
          img: img5,
          title: "Grand Masti",
          subtitle: "Release 12 april 19",
          link: "trailer"
        }
      ],
      results: [],
      search_query: "",
      status: "",
      path: "https://image.tmdb.org/t/p/w300_and_h450_bestv2"
    };
  },

  mounted() {
    movieapi.getmovies();
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=e93194759dc620e1ff7aa7c9fb0e02d8"
      )

      .then(response => {
        console.log("movieapi", response.data.results);
        this.results = response.data.results;
        var i;
        for (i = 0; i < this.results.length; i++) {
          this.results[i].img =
            "https://image.tmdb.org/t/p/w300_and_h450_bestv2/" +
            this.results[i].poster_path;
          // obj.title = this.results[i].title;
          // obj.release_date = this.results[i].release_date;
          // obj.popularity = this.results[i].popularity;
          // obj.vote_count = this.results[i].vote_count;
          // this.results[i] = obj;
        }

        console.log("length", this.results);
      });
  },
  watch: {
    search_query: function(val) {
      this.process(val);
    }
  },
  methods: {
    process: function(val) {
      this.doQuery();
    },
    doQuery: _.debounce(function() {
      if (this.search_query) {
        //console.log('searching for ' + this.search_query);
        this.status = "Searching for " + this.search_query + "...";
        $.ajax(
          "https://api.themoviedb.org/3/" +
            "search/movie?api_key=e93194759dc620e1ff7aa7c9fb0e02d8" +
            "&q=" +
            this.search_query
        ).done(
          function(res) {
            //console.log("OK", res);
            this.results = [];
            for (var card in res.data) {
              var e = res.data[card];
              console.log(e);
              this.results.push();
            }
          }.bind(this)
        );
      } else {
        this.results = [];
        this.status = "";
      }
    }, 750)
  }

  // created() {
  //   this.getapi();
  //   // / this.getimage();
  // },
  // methods: {
  //   getapi(infoUrl) {
  //     console.log("this is infoUrl:::::::", infoUrl);
  //     movieapi.getmovies(infoUrl).then(data => {
  //       this.results = response.data.results;
  //       console.log("this is demo");
  //     });
  //   }
  // }
};
</script>

<style lang="scss" scoped>
.box-count {
  width: 20px;
  height: 20px;
  position: relative;
  bottom: -49px;
  left: 138px;
  background-color: #f97e2a;
}
.img-style {
  width: 100%;
  height: 300px;
  border-bottom: 2px solid #f97e2a;
}
@media (min-width: 768px) {
  .col-md-3 {
    -ms-flex: 0 0 25%;
    -webkit-box-flex: 0;
    flex: 0 0 25%;
    max-width: 20% !important;
  }
}
.active {
  border-bottom: none !important;
}
.card-title {
  font-size: 17px;
}
.card-subtitle {
  font-size: 12px;
}
.card-link {
  color: #000;
  font-size: 12px;
}
</style>

<style>
.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: #f97e2a !important;
  font-size: 20px;
  font-weight: bold;
}
.nav-tabs .nav-link {
  color: #696363;
  font-weight: bold;
  font-size: 20px;
}
.nav-tabs .nav-link {
  border: none !important;
}
.nav-tabs {
  border: none !important;
}
</style>

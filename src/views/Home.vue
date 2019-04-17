<template>
  <div class="home">
    <movicheader></movicheader>
    <navheader></navheader>
    <banner></banner>
    <movietab></movietab>
    <topmovies></topmovies>
    <videosection></videosection>
    <latestnew></latestnew>
    <news></news>
    <footersection brandnm="MOVIC"></footersection>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import movicheader from "@/components/movicheader.vue";
import navheader from "@/components/navheader.vue";
import banner from "@/components/banner.vue";
import movietab from "@/components/movietab.vue";
import topmovies from "@/components/topmovies.vue";
import videosection from "@/components/video.vue";
import latestnew from "@/components/latestnew.vue";
import news from "@/components/news.vue";
import footersection from "@/components/footer.vue";

export default {
  name: "home",
  components: {
    movicheader,
    navheader,
    banner,
    movietab,
    topmovies,
    videosection,
    latestnew,
    news,
    footersection
  }
};
</script>

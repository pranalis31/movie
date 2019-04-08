<template>

  <div class="">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1140"
      img-height="440"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <!-- <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="../assets/images/banner1.jpg"
      ></b-carousel-slide> -->
       <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="440"
          src="../assets/images/banner1.jpg"
          alt="image slot"
        >
      </b-carousel-slide>

      <!-- Slides with custom text -->
       <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="440"
          src="../assets/images/banner2.jpg"
          alt="image slot"
        >
      </b-carousel-slide>
      <!-- Slides with image only -->
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="440"
          src="../assets/images/banner7.jpg"
          alt="image slot"
        >
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="440"
          src="../assets/images/banner8.jpg"
          alt="image slot"
        >
      </b-carousel-slide>

    </b-carousel>

   
  </div>
   
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }

    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style lang="css">
.carousel-indicators li {
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    -ms-flex: 0 1 auto;
    -webkit-box-flex: 0;
    flex: 0 1 auto;
    width: 20px !important;
    height: 20px !important;
    border-radius: 50% !important;
    text-indent: -999px;
    cursor: pointer;
    background-color:#fff!important;
    background-clip: padding-box;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    opacity: .5;
    -webkit-transition: opacity 0.6s ease;
    transition: opacity 0.6s ease;
   
}
</style>


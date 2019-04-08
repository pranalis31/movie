<template>
<b-container>
 <b-row>
   <div class="top-part px-5 ">
     <b-row class="mt-3">
   
       <b-col md="2">
           <span ><font-awesome-icon class="text-secondary" :icon="['fas', 'film']" /></span>
         <div class="text-secondary">
          Cinemas
         </div>
       </b-col>
         <b-col md="2">
           <span ><font-awesome-icon class="text-secondary" :icon="['fas', 'gift']" /></span>
          <div class="text-secondary">
            Promotion
         </div>
       </b-col>
         <b-col md="3">
           <span><font-awesome-icon class="text-secondary" :icon="['fas', 'tags']" /></span>
            <div class="text-secondary">
              Vouchers & Cards
         </div>
       </b-col>
        <b-col md="2">
          <span ><font-awesome-icon class="text-secondary" :icon="['fas', 'ticket-alt']" /></span>
            <div class="text-secondary">
             Buy Tickets
         </div>
          </b-col>
        
          <b-col md="3">
            <div class="" v-for="image in images" v-bind:key="image.index">
                 <b-img :src="image.img" class="pop-style" alt="Card image cap"/>
           
         </div>
       </b-col>
   
  
     </b-row>

   </div>
  <md-card class="topmoviebanner mb-5">
    <md-card-actions>
      <div class="md-subhead">
        <span class="top-movie-heading">TOP MOVIES IN THREATER</span>
      
      </div>
    
    </md-card-actions>
    <md-card-media>
      <!-- swiper -->
        
      <swiper :options="swiperOption">
        <swiper-slide v-for="card in cards" v-bind:key="card.index">
                  <b-card class="overlay border-0">
                    <b-img :src="card.img" class=" img-style mx-auto" alt="Card image cap"/>
                     <div class=" overlay-text card-body text-center">
                      
                      <div class=" h5 card-title text-white font-weight-bold">{{card.title}}</div>
                      <div class=" card-subtitle text-white font-weight-bold">{{card.subtitle}}</div>

                       <a href="#" class=" card-link font-weight-bold"><font-awesome-icon class="text-white" :icon="['fas', 'circle']" /> {{card.link}}</a>
                      <a href="#" class="card-link font-weight-bold"><font-awesome-icon class="text-white" :icon="['fas', 'circle']" />  {{card.link}}</a>
                    </div> 
                  </b-card>
                 
              <div class="swiper-pagination" slot="pagination"></div> 
        </swiper-slide>
      
      
      </swiper>
         
    </md-card-media>
  
  </md-card>
 </b-row>
</b-container>
</template>

<script>

 import pop from "../assets/images/popcorn.jpg";
import img1 from "../assets/images/card12.jpg";
import img2 from "../assets/images/card4.jpeg";
import img3 from "../assets/images/card2.jpg";
import img4 from "../assets/images/card5.jpg";
import img5 from "../assets/images/card6.jpg";

  export default {
    data() {
      return {
         images: [
        {
          img:pop,
        
        }
         ],
            cards: [
        {
          img: img1,
          title: "Victoria & Abu",
          subtitle: "Release 12 april 19",
          link: "link"
        },
        {
          img: img2,
          title: "Diamonds",
          subtitle: "Release 12 april 19",
          link: "link"
        },
        {
          img: img3,
          title: "Aventures",
          subtitle: "Release 12 april 19",
          link: "link"
        },
        {
          img: img4,
          title: "Fantastic",
          subtitle: "Release 12 april 19",
          link: "link"
        },
        {
          img: img5,
          title: "Grand Masti",
          subtitle: "Release 12 april 19",
          link: "link"
        },
         {
          img: img3,
          title: "Aventures",
          subtitle: "Release 12 april 19",
          link: "link"
        },
        {
          img: img4,
          title: "Fantastic",
          subtitle: "Release 12 april 19",
          link: "link"
        },
        {
          img: img5,
          title: "Grand Masti",
          subtitle: "Release 12 april 19",
          link: "link"
        },
         {
          img: img5,
          title: "Grand Masti",
          subtitle: "Release 12 april 19",
          link: "link"
        },
         {
          img: img5,
          title: "Grand Masti",
          subtitle: "Release 12 april 19",
          link: "link"
        },
      ],


        swiperOption: {
          slidesPerView: 6,
          // spaceBetween: 10,
          // init: false,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          autoplay: {
           delay: 2500,
          disableOnInteraction: false
           },
          breakpoints: {
            1024: {
              slidesPerView: 4,
              spaceBetween: 40
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            }
          }
        }
      }
    }
  }
</script>


<style lang="scss" scoped>
.card{
  background-color: unset!important;
}
.pop-style
{
  width:100px;
  height:100px;
  border-radius:50%;
  margin: -64px 0;
  border:2px solid orangered;
}
.overlay-text
{
   opacity:0;
}
.overlay:hover
{
  transform: scaleY(1.1);
  height:350px;
 
  .overlay-text{
   opacity:1;
    position: relative;
    top: -71px;
    background: #e16424bf;
    width: 161px;
    font-size: 20px;
    padding: 0 0 0 0;
    text-align: center;
    transition: 0.7s ease;
 
  }
}

 .swiper-container{
  margin: 20px 60px;
}
.swiper-slide1 {
    width: 100%;
    padding: 0 72px 0 41px;
    margin-bottom: -72px;
    margin-top: 36px;
  }
 .top-movie-heading
 {
   color:#e16424;
   font-size:20px;
   font-weight:bold;
 
 }
.md-subhead
{
  margin-top: 20px;
}
.topmoviebanner
{
    background: url("../assets/images/newbanner1.jpg");
    width:100%;
    height:470px;
}
.img-style {
  width: 161px;
  height: 300px;

}

.active {
  border-bottom: none !important;
}
.card-title {
  font-size: 15px;
}
.card-subtitle {
  font-size: 11px;
}
.card-link
{
  font-size:10px;
  color:#fff;
}
.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: #e16424 !important;
  font-size: 20px;
  font-weight: bold;
}
.nav-tabs .nav-link {
  color: #696363;
  font-weight: bold;
  font-size: 20px;
}
.top-part
{
  width:100%;
  background-color:#efefef;
  height:70px;
}
</style>
             
 
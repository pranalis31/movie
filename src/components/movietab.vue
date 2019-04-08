<template>
  <b-container>
    <b-row>
      <div class="p-5 mx-5">
        <b-tabs content-class="mt-3">
          <b-tab title="Now Playing  /" class="tile-tab" active>
            <b-container>
              <b-row>
                <b-col md="3" sm="12" v-for="card in cards" v-bind:key="card.index">
                  <div class="card border-0">
                    <div class="box-count"><span class="text-white"> 0 </span></div>
                    <b-img :src="card.img" class="img-style mx-auto" alt="Card image cap"/>
                    
                    <div class="card-body p-0 text-left">
                      <div class="card-title font-weight-bold text-dark">{{card.title}}</div>
                      <div class="card-subtitle mt-3 text-muted">{{card.subtitle}}</div>

                      <a href="#" class="card-link"><font-awesome-icon class="text-secondary" :icon="['fas', 'circle']" /> {{card.link}}</a>
                      <a href="#" class="card-link"><font-awesome-icon class="text-secondary" :icon="['fas', 'circle']" /> {{card.link}}</a>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </b-container>
          </b-tab>

          <b-tab title="Opening this week  /">
            <b-container>
              <b-row>
                <b-col md="3" sm="12" v-for="card in cards" v-bind:key="card.index">
                 <div class="card border-0">
                    <div class="box-count"><span class="text-white"> 0 </span></div>
                    <b-img :src="card.img" class="img-style mx-auto" alt="Card image cap"/>
                    <div class="card-body p-0 text-left">
                      <div class="card-title font-weight-bold text-dark">{{card.title}}</div>
                      <div class="card-subtitle mt-3 text-muted">{{card.subtitle}}</div>

                      <a href="#" class="card-link"><font-awesome-icon class="text-secondary" :icon="['fas', 'circle']" /> {{card.link}}</a>
                      <a href="#" class="card-link"><font-awesome-icon class="text-secondary" :icon="['fas', 'circle']" /> {{card.link}}</a>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </b-container>
          </b-tab>
          <b-tab title="Coming Soon   ">
            <b-container>
              <b-row>
                <b-col md="3" sm="12" v-for="card in cards" v-bind:key="card.index">
                <div class="card border-0">
                   <div class="box-count"><span class="text-white"> 0 </span></div>
                    <b-img :src="card.img" class="img-style mx-auto" alt="Card image cap"/>
                    <div class="card-body p-0 text-left">
                      <div class="card-title font-weight-bold text-dark">{{card.title}}</div>
                      <div class="card-subtitle mt-3 text-muted">{{card.subtitle}}</div>

                      <a href="#" class="card-link"><font-awesome-icon class="text-secondary" :icon="['fas', 'circle']" /> {{card.link}}</a>
                      <a href="#" class="card-link"><font-awesome-icon class="text-secondary" :icon="['fas', 'circle']" /> {{card.link}}</a>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </b-container>
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
export default {
  data() {
    return {
      cards: [
        {
          img: img1,
          title: "Victoria & Abu",
          subtitle: "Release 12 april 19",
          link: "trailer",
          link1:"detroil"
        },
        {
          img: img2,
          title: "Diamonds",
          subtitle: "Release 12 april 19",
          link: "trailer",
          link1:"detroil"
        
        },
        {
          img: img3,
          title: "Aventures",
          subtitle: "Release 12 april 19",
           link: "trailer",
           link1:"detroil"
        },
        {
          img: img4,
          title: "Fantastic",
          subtitle: "Release 12 april 19",
          link: "trailer",
        
        },
        {
          img: img5,
          title: "Grand Masti",
          subtitle: "Release 12 april 19",
           link: "trailer",
        
        }
      ]
    };
  }
};
</script> 

<style lang="scss" scoped>
.box-count
{
  width:20px;
  height:20px;
  position: relative;
  bottom:-49px;
  left:138px;
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
.card-link
{
  color:#000;
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
.nav-tabs .nav-link
{
  border:none !important;
}
.nav-tabs
{
  border:none !important;
}
</style>
             
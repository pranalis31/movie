<template>
    <b-container class="margin-top-new"> 
        <b-row class="px-5 mx-5 pb-5">
            <b-col md="12" class="news-heading-style text-center font-weight-bold ">Latest News</b-col>
            
              
             <b-col md="3" sm="12" v-for="card in cards" v-bind:key="card.index">
                  <div class="card border-0">
                    <b-img :src="card.img" class="img-style-card mx-auto" alt="Card image cap"/>
                    <div class="card-body pt-2 text-center">
                      <div class=" card-title">{{card.title}}</div>
                   
                     <b-button href="#" class="button-style">Read More</b-button>  
                     
                    </div>
                  </div>
                   <div class="card border-0">
                    <b-img :src="card.img" class="img-style-card mx-auto" alt="Card image cap"/>
                    <div class="card-body pt-2 text-center">
                      <div class="card-title">{{card.title}}</div>
                     
                     <b-button href="#" class="button-style" >Read More</b-button>  
                     
                    </div>
                  </div>
                
            </b-col>
             <b-col md="6" sm="12" v-for="card in cardmiddle" v-bind:key="card.index">
                 <div class="card border-0">
                    <b-img :src="card.img" class="img-style-card-middle mx-auto" alt="Card image cap"/>
                    <div class="card-body pt-2 text-center">
                      <div class=" card-title">{{card.title}}</div>
                        <div class=" card-subtitle">{{card.subtitle}}</div>
                     <b-button href="#" class="button-style" >Read More</b-button>  
                     
                    </div>
                  </div>
            </b-col>
             <b-col md="3" sm="12" v-for="card in cards" v-bind:key="card.index">
                  <div class="card border-0">
                    <b-img :src="card.img" class="img-style-card  mx-auto" alt="Card image cap"/>
                    <div class="card-body pt-2 text-center">
                      <div class=" card-title">{{card.title}}</div>
                     
                     <b-button href="#" class="button-style" >Read More</b-button>  
                     
                    </div>
                  </div>
                   <div class="card border-0">
                    <b-img :src="card.img" class="img-style-card  mx-auto" alt="Card image cap"/>
                    <div class="card-body pt-2 text-center">
                      <div class=" card-title">{{card.title}}</div>
                   
                     <b-button href="#" class="button-style" >Read More</b-button>  
                     
                    </div>
                  </div>
                
            </b-col> 
        </b-row>
    </b-container>
</template>
<script>
import img1 from "../assets/images/gallery1.jpg";
import imgnew from "../assets/images/latestnew1.jpg";
import latestimgmiddle from "../assets/images/new2.jpg";

export default {
    data() {
    return {
      images: [
        {
          img:img1,
        
        },
        
      ],
       cards: [
        {
          img: imgnew,
          title: "Doctor strange Assembles With the Avengers",
          
        }
        
      ],
        cards: [
        {
          img: imgnew,
          title: "Doctor strange Assembles With the Avengers",
         
        }
        
      ],
        cardmiddle: [
        {
          img: latestimgmiddle,
          title: "Another Jurassic Park start joins Thor",
          subtitle:"Doctor strange Assembles With the AvengersDoctor strange ",
        }
        
      ],
        cards: [
        {
          img: imgnew,
           title: "Doctor strange Assembles With the Avengers",
        
        }
        
      ],
        cards: [
        {
          img: imgnew,
          title: "Doctor strange Assembles With the Avengers",
         
        }
        
      ],
    }
    }
}
</script>

<style lang="scss">
.news-heading-style
{
    font-size: 25px;
    color: #f97e2a;
    
}
.img-style-card{
  width: 100%;
  height: 160px;
}
.img-style-card-middle{
  width: 100%;
  height: 300px;
}
.button-style{
   background-color: #f97e2a !important;
   font-size: 9px !important;
   color:#ffff !important;
   border-color: #f97e2a !important;
   border-radius: 50px !important;
   font-weight: bold;
}
.margin-top-new
{
  margin-top: -154px;
}
.card-title {
    margin-bottom: 0.75rem;
    font-size: 12px;
    font-weight: bold;
    color:#000;
}
.card-subtitle
{
  font-size: 10px;
 margin-bottom: 10px;
}
</style>

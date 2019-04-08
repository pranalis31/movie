<template>
 
       <div class="head-top px-5 ">
         
        <div class="px-5 mx-5">
            <b-row>
            <b-col md="2" class="color-top">
             <span class="vip-head">VIP SWEEPSTACKS</span>
            </b-col>
            <b-col md="2">
                 <span class="head-shop">$15000 SHOPPING SFREE</span>
            </b-col>
            <b-col md="6">
                 <span class="movie-font text-light text-left">John Movie vip has changed for a chance has changed  </span>
            </b-col>
             <b-col md="2">
                 <span class="text-white login-head"><font-awesome-icon class="text-secondary" :icon="['fas', 'user']" /> Login</span>
            </b-col>
            </b-row>
        </div>


       </div>
     
</template>




 <style lang="scss" scoped>
 @import "../assets/scss/movie.scss";
.head-top
{
    background-color:$head-top-bg-color;
  
    height:30px;

}

.color-top
{
     background-color: $color-top-bg;
   
    height:30px;
}
.vip-head
{
     font-size: 12px;
    color:$viz-head-color;
    font-weight: bold;
    text-align: center;
}
.head-shop
{
    color:$head-shop-color;
   font-size: 10px;
    font-weight: bold;
}
.movie-font
{
    font-size: 12px;
    margin-left: -13rem;
}
.login-head
{
    font-size: 12px;
}

</style>

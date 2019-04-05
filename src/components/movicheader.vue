<template>
  <b-container>
      <b-row>
       <div class="head-top px-5 mt-5">
         
        <div class="px-5">
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
      </b-row>

  </b-container>  
</template>




 <style lang="scss" scoped>
.head-top
{
    background-color: #000;
    width:100%;
    height:30px;

}

.color-top
{
     background-color:  #9C27B0;
   
    height:30px;
}
.vip-head
{
     font-size: 12px;
    color: #fff;
    font-weight: bold;
    text-align: center;
}
.head-shop
{
    color:#e16424;
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

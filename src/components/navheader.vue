<template>
<b-container>
   <div class="px-2 mx-5">
  <b-navbar toggleable="lg" type="dark" variant="" v-for="image in images" v-bind:key="image.index">
    <b-navbar-brand class="text-dark font-weight-bolder" href="#"><b-img :src="image.imgsection" class="img-style" alt="img"/></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
     

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-5">
        <b-nav-form>
          <b-form-input size="sm" class="search-box" placeholder="Movic Search..."></b-form-input>
          <button size="sm" class="go-button"  type="submit">GO</button>
        </b-nav-form>

        </b-navbar-nav>
       <b-navbar-nav class="link-style ">
        <b-nav-item class="active pr-1" href="#">HOME</b-nav-item>
         <b-nav-item class="pr-1" href="#">MOVIE LAYOUT</b-nav-item>
          <b-nav-item  class="pr-1" href="#">PAGE SINGLE</b-nav-item>
           <b-nav-item  class="pr-1" href="#">SHOWTIME</b-nav-item>
            <b-nav-item  class="pr-1" href="#">TOP RATED</b-nav-item>
      </b-navbar-nav>
       
    </b-collapse>
  </b-navbar>
</div>
</b-container>
</template>

<script>
import img1 from "../assets/images/logo.jpg";

export default {
 data() {
    return {
      images: [
        {
          imgsection:img1,
        
         
        },
      ],
    }
 }
};
</script>

<style lang="scss">

.navbar-dark {
  .navbar-nav {
    .nav-link
     {
    color:#000 !important;
    padding-bottom: 0px;
   }
  }
}
.go-button
{
   
    border-radius: 50% ;
    background-color: #f97e2a;
    color:#fff;
    font-weight: bold;
    font-size: 10px;
    width: 35px;
    height: 35px;
}
.img-style
{
  
  height:43px;
}
.search-box
{
  border-radius: 50px !important;
}
.link-style
{
  font-size: 13px;
  font-weight: bold;
  margin-left: 4.3rem;
}
.active
{
  
  border-bottom: 3px solid #f97e2a;
}

</style>

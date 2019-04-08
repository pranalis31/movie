<template>
<b-container>
    <b-row>
      <b-col md="6">
        <div>
          <span class="video-style text-left">Videos and Photos</span>
          <div class="px-5  mt-2 mx-5">
            <div class="text-left">
              <b-embed
                type="iframe"
                aspect="1by1"
                src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                allowfullscreen
              ></b-embed>
                 <span class="video-heading font-weight-bold text-dark">10.Reo Speed Wagon </span>
                 <span class="video-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                   Ut enim ad minim veniam, quis nostrud exercitation. </span>
            </div>
              
          </div>
       
        </div>
      </b-col>

      <b-col md="6" >
          <div>
            <b-row>
          <b-col md="4" v-for="image in images" v-bind:key="image.index">
            
                                <div class="img-display">
                                  <figure >
                                  <b-img :src="image.img" class="img-size"  alt="img1"/>
                                  </figure>
                                  </div>
                         
          </b-col>
            </b-row> 
          </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import img1 from "../assets/images/gallery1.jpg";
import img2 from "../assets/images/gallery2.jpg";
import img3 from "../assets/images/gallery3.jpg";
import img4 from "../assets/images/gallery4.jpg";
import img5 from "../assets/images/gallery5.jpg";
import img6 from "../assets/images/gallery6.jpg";
import img7 from "../assets/images/gallery7.jpg";
import img8 from "../assets/images/gallery8.jpg";
import img9 from "../assets/images/gallery9.jpg";
export default {
    data() {
    return {
      images: [
        {
          img:img1,
        
        },
         {
          img:img2,
        
        },
         {
          img:img3,
        
        },
         {
          img:img4,
        
        },
         {
          img:img5,
        
        },
         {
          img:img6,
        
        },
         {
          img:img7,
        
        },
         {
          img:img8,
        
        },
         {
          img:img9
        
        }
      ],
    }
    }
}
</script>





<style lang="scss">
.video-style {
  font-size: 25px;
  font-weight: bold;
  color: #f97e2a;
  margin: 0 0 0 -135px;
}
.img-size
{
  width:189px;
  height:114px;
}
figure
{
  margin: 0 0 0.2rem -10rem !important;
}
.embed-responsive
{
  height:200px;
  margin-bottom: 1rem;
}
.video-heading
{
  margin: 0px 183px 0px 0px;
}
.video-paragraph
{
  font-size: 13px;
}
</style>

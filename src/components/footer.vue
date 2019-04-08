<template>
  <div>
   
    <footer class="footer-background">
      <b-container  class="px-5">
        <div class="mx-5">
        <b-row>
          <b-col md="3" sm="12" class=" mb-3 pt-5 text-left">
            <div class="font-weight-bold footer-heading " v-for="card in cards" v-bind:key="card.index">  
              <b-img :src="card.img"  alt="Card image cap"/>
              </div>
            <span class="footer-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              .</span>
                <div class="rating-numbers">
                  <ul class="p-0 mt-3">
                    <li class="social-icon"> 
                      <a href="#">
                        <font-awesome-icon :icon="['fab', 'facebook-f']"/>
                      </a>
                    </li>
                    <li class="social-icon">
                      <a href="#">
                        <font-awesome-icon :icon="['fab', 'twitter']"/>
                      </a>
                    </li>
                    <li class="social-icon">
                      <a href="#">
                        <font-awesome-icon :icon="['fab', 'google-plus-g']"/>
                      </a>
                    </li>
                    <li class="social-icon">
                      <a href="#">
                        <font-awesome-icon :icon="['fab', 'pinterest']"/>
                      </a>
                    </li>
                  </ul>
                </div>
          </b-col>
          <b-col md="9">
            <b-row class="pt-5">
             
              <b-col md="4" sm="6" cols="6">
                <div class="text-left pl-5">
                  <div class=" font-weight-bold footer-column-title text-white">Custom Services</div>
                  <ul class="text-left p-0">
                    <li class="li-space">
                      <a class=" footer-text" href="#">Help & contact</a>
                    </li>
                    <li class="li-space"> 
                      <a class="footer-text" href="#">Return policy</a>
                    </li>
                    <li class="li-space">
                      <a class="footer-text" href="#">Feed Bock</a>
                    </li>
                    <li class="li-space">
                      <a class="footer-text" href="#">Careers</a>
                    </li>
                  </ul>
                </div>
              </b-col>
              <b-col md="4" sm="6" cols="6">
                <div class="text-left pl-5">
                  <div class="font-weight-bold footer-column-title text-white">Recent Post</div>
                  <ul class="text-left p-0">
                    <li class="li-space">
                      <span class=" footer-text">Doctor Strange assembles  </span>
                       <span class="text-secondary  footer-text1">December 20,2016</span>
                    </li>
                    <li class="li-space">
                      <span class="footer-text">5 movies to watch this week </span>
                       <span class="text-wsecondary  footer-text1">December 20,2016</span>
                    </li>
                   
                  </ul>
                </div>
              </b-col>
               <b-col md="4" sm="6" cols="6">
                <address class="pl-5">
                  <div class="text-left">
                    <div class="font-weight-bold text-white mb-4">Contact Us</div>
                    <span class="footer-text ">
                      <div class=""> <font-awesome-icon class="text-secondary" :icon="['fas', 'map-marker']" />  City Hall,212 Stree,Lawoma,735</div>
                      <a href="email:abc@gmail.com" class="footer-email-color"> <font-awesome-icon class="text-secondary" :icon="['fas', 'envelope']" />  abc@gmail.com</a><br>
                     <a href="tel:987678990" class="li-space tel-color"><font-awesome-icon class="text-secondary" :icon="['fas', 'phone']" />  9876-78990</a> <br/>
                       <div class="input-group mb-3 mt-3">
                         <input type="text" class="form-control " placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2">
                           <div class="input-group-append">
                             <span class="input-group-text" id="basic-addon2"> <font-awesome-icon class="text-secondary" :icon="['fas', 'square']" /> </span>
                            </div>
                            </div>
                    </span>

                  </div>
                </address>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
   
         <b-row>
          <b-col cols="6">
            <div class=" text-sm text-left">
              <div class="mb-1 pb-2  footer-text">
                &copy; 2019 &nbsp;&nbsp;
                <a class="footer-text" href="#">
                Movic
                </a>
              </div>
            </div>
          </b-col>
           <b-col cols="6">
            <div class="link-footer text-right">
                <a href="">Privacy Ploicy</a>
                <a href="">Term of Use</a>
                <a href="">Site Map</a>
            </div>
          </b-col>
        </b-row>
        </div>
    
      </b-container>
    </footer>


       
  </div>
</template>

<script>
import img1 from "../assets/images/logo1.png";
export default {
  name: "footers",
  // props: {
  //   brandnm: String
  // }
    data() {
    return {
     cards: [
        {
          img:img1,
        
        },
        
      ],
    }
    }
};
</script>

<style lang="scss" scoped>

.social-icon
{
   width: 30px;
    height: 30px;
    background-color:#5a5454;
    border-radius: 50px;
    display:inline-block;
    margin-right: 0.85rem;
    line-height: 28px;
    padding: 0 2px;
  a{
   margin:0.50rem;
   color:#fff;
   font-size: 10px;
  
  }
}
.li-space
{
  margin:12px 0;
  color:#bdbdbd;
}
.footer-background
{
   background: url("../assets/images/newbanner1.jpg");
   width:100%;
 
}
.footer-text {
    text-decoration: none ;
    font-size:12px;
    padding-bottom: 10px;
  }
  ul {
    list-style: none;
  }
 
  .bottom-border {
    border-bottom: 2px solid #80808040;
  }
  .footer-heading {
    font-size: 22px;
    color:#fff;
  }
  .footer-text1
  {
      font-size:9px;
  }
  .footer-paragraph
  {
      font-size:12px;
     color:#bdbdbd;
  }
  .tel-color
  {
  color:orange;
  }
  .link-footer a
  {
    margin-right: 0.85rem;
    color:#ccc;
    font-size: 12px;
  }
  .footer-text
  {
    font-size:12px;
    color:#ccc;
  
  }
 .form-control
 {
   background-color: #bdbdbd ;
 }  
 .footer-email-color
 {
   color: #bdbdbd;
 }
 .input-group-text
 {
   background-color:#bdbdbd;
 }
</style>


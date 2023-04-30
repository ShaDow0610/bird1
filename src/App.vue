<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-darkP p-0 pb-sm-1">
    <div class="container-fluid ">
      <a class="navbar-brand logo_space" href="#">
        <img src="@/assets/img/photo_6_2023-03-31_17-32-09.jpg" class="img-thumbnail img_logo" alt="">
        <span class="">
          <span style="color:green">P</span>
          <span style="color:red">A</span>
          <span style="color:yellow">R</span>
          <span style="color:white">R</span>
          <span style="color:orange">O</span>
          <span class="me-2" style="color:blue">T</span>
          <span style="color:#f75252">H</span>
          <span style="color:#6d11ca">O</span>
          <span style="color:#0cfd0c">M</span>
          <span style="color:#aaaa27">E</span>
        </span>
      </a>
      <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse row mb-0 h-100 options justify-content-end" id="navbarSupportedContent">
        <div class="container reseaux mb-2 col-12 justify-content-end d-flex">
          <a href="/" class="btn RLogo instagram">
            <div class="bi bi-instagram "></div>
          </a>
          <a href="/" class="btn RLogo facebook">
            <div class="bi bi-facebook"></div>
          </a>
          <a href="/" class="btn RLogo twitter">
            <div class="bi bi-twitter"></div>
          </a>
          <a href="/" class="btn RLogo telegram">
            <div class="bi bi-telegram"></div>
          </a>
          <a href="/" class="btn RLogo whatsapp">
            <div class="bi bi-whatsapp"></div>
          </a>
         </div>
        <ul class="navbar-nav  mb-2  mb-lg-0 col-lg-8  m-0">
          <li class="nav-item nav-item-fs">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item nav-item-fs" >
            <a class="nav-link" href="#">AVAILABLE NOW!</a>
          </li>
          <li class="nav-item nav-item-fs dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              CATHALOG
            </a>
            <ul class="dropdown-menu text-center" aria-labelledby="navbarDropdown">
              <li><span class="dropdown-item" >Species</span></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">African Gray Parrots</a></li>
              <li><a class="dropdown-item" href="#">Amazon Parrots</a></li>
              <li><a class="dropdown-item" href="#">Loverbirds</a></li>
              <li><a class="dropdown-item" href="#">Cockatoos</a></li>
              <li><a class="dropdown-item" href="#">Cockateils</a></li>
              <li><a class="dropdown-item" href="#">Lorikeets</a></li>
              <li><a class="dropdown-item" href="#">Conures</a></li>
              
              
            </ul>
          </li>
          <li class="nav-item nav-item-fs dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              OTHER
            </a>
            <ul class="dropdown-menu text-center" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Parrot Eggs</a></li>
              <li><a class="dropdown-item" href="#">Cage</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">More</a></li>
            </ul>
          </li>
          <li class="nav-item nav-item-fs">
            <router-link to="/about" class="nav-link ">ABOUT-US</router-link>
          </li>
          <li class="nav-item nav-item-fs dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              MORE
            </a>
            <ul class="dropdown-menu text-center" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Feeding Your Parrot</a></li>
              <li><a class="dropdown-item" href="#">Health Guarantee</a></li>
              <li><a class="dropdown-item" href="#">Basic Bird Care</a></li>
              <li><a class="dropdown-item" href="#">Cage Info</a></li>
              <li><a class="dropdown-item" href="#">Shipping</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><router-link to="/FAQs" class="dropdown-item">F.A.Q</router-link></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex col-lg-4 px-1 search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  <router-view/>
  <div class="footer bg-darkP text-light">
    <div class="row m-0 py-3 p-4 p-sm-1">
      <div class="col-lg-4 col-sm-12 col-md-6 d-flex justify-content-center text-center px-sm-1">
        <div class="row">
          <div class="col-12">
            <p> 
              WHO WE ARE
            </p>
            <p>
              Parrot Home's mission is to promote responsible bird breeding for species survivability and to increase companion pet ownership. Our speciality is handfed parrots from day one, baby parrots & fertile parrot eggs.
            </p>
          </div>
          <div class="col-12 ">
            <a href="/" class=" mx-1  btn btn-outline-secondary ">
              <div class="bi bi-instagram "></div>
            </a>
            <a href="/" class=" mx-1  btn btn-outline-secondary ">
              <div class="bi bi-facebook"></div>
            </a>
            <a href="/" class=" mx-1  btn btn-outline-secondary ">
              <div class="bi bi-twitter"></div>
            </a>
            <a href="/" class=" mx-1  btn btn-outline-secondary ">
              <div class="bi bi-telegram"></div>
            </a>
          </div>
          <div class="w-100 col-12 my-4">
            <button  class="btn btn-outline-secondary  w-100">
              <div class="bi bi-whatsapp"></div>
            </button>
          </div>
        </div>
      </div>
      <div class="col-lg-2 col-sm-6 col-6 col-md-6 px-sm-1">
        <div class="row d-flex text-center">
          <p>Information</p>
          <router-link to="/" class="col-12 my-1 text-decoration-none text-light plinks">About Us</router-link>
          <router-link to="/" class="col-12 my-1 text-decoration-none text-light plinks">Terms & Conditions</router-link>
          <router-link to="/" class="col-12 my-1 text-decoration-none text-light plinks">Health Guarantee</router-link>
          <router-link to="/" class="col-12 my-1 text-decoration-none text-light plinks">Shipping & Delivery</router-link>
          <router-link to="/" class="col-12 my-1 text-decoration-none text-light plinks">Returns & Exchanges</router-link>
          <router-link to="/" class="col-12 my-1 text-decoration-none text-light plinks">Cage Info</router-link>
        </div>
      </div>
      <div class="col-lg-2 col-sm-6 col-6 col-md-6 px-sm-1">
        <div class="row d-flex text-center">
          <p>Customer Care</p>
          <router-link to="/" class="col-12 my-1 text-decoration-none text-light plinks">Happy Customers</router-link>
          <router-link to="/" class="col-12 my-1 text-decoration-none text-light plinks">Our Guarantee</router-link>
          <router-link to="/" class="col-12 my-1 text-decoration-none text-light plinks">Basic Bird Care</router-link>
          <router-link to="/" class="col-12 my-1 text-decoration-none text-light plinks">Contact Us</router-link>
          <router-link to="/" class="col-12 my-1 text-decoration-none text-light plinks">My Account</router-link>
          <router-link to="/" class="col-12 my-1 text-decoration-none text-light plinks">Blog</router-link>
        </div>
      </div>
      <div class="col-lg-4 col-sm-12 col-md-6 px-sm-1 text-center">
        <p>Subscribe To Our Newsletter</p>
        <div class="row">
          <div class="col-12">Subscribe to the Petmark mailing list to receive updates on new arrivals, special offers and other discount information.
          </div>
        </div>
        <div class="col-12 mt-5">
          <div class="input-group mb-3 ">
            <input type="email" class="form-control bg-darkP text-light border-end-0" placeholder="Enter your E-mail" aria-label="email" aria-describedby="basic-addon1">
            <a class="btn border input-group-text bg-darkP text-light border-start-0" id="basic-addon1"><div class="bi bi-envelope"></div></a>
          </div>
        </div>
      </div>
    </div>
    <div class="row m-0 px-5 py-4 px-sm-1">
      <div class="border-top"></div>
      <div class="col-12 px-5 px-sm-1 text-center text-muted">
        <router-link to="/" class="plinks">About Us</router-link> |
        <router-link to="/" class="plinks">African Grey</router-link> |
        <router-link to="/" class="plinks">Amazons</router-link> |
        <router-link to="/" class="plinks">Basic Bird Care</router-link> |
        <router-link to="/" class="plinks">Cockatoos</router-link> |
        <router-link to="/" class="plinks">Contact Us</router-link> |
        <router-link to="/" class="plinks">Feeding Your Parrot</router-link> |
        <router-link to="/" class="plinks">FAQs</router-link> |
        <router-link to="/" class="plinks">Health Guarantee</router-link> |
        <router-link to="/" class="plinks">Macaws</router-link> |
        <router-link to="/" class="plinks">Our Guarantee</router-link> |
        <router-link to="/" class="plinks">Parrot Eggs</router-link> |
        <router-link to="/" class="plinks">My Order</router-link> |
        <router-link to="/" class="plinks">Others</router-link> |
        <router-link to="/" class="plinks">Blog</router-link> 
      </div>
    </div>
  </div>
  <div class="row m-0 bg-dark p-3 text-light p-sm-1">
    <div class="col-12 text-center ">
      <span>Copyright © 2022 Timiesbirds.com. All Rights Reserved</span>
    </div>
  </div>
  <div>
    <button v-if="showButton" @click="scrollToTop" class="btn btn-secondary rounded-circle scroll-to-top btn-pad px-3"><i class="bi bi-arrow-up"></i></button>
  </div>
</template>
<script>
import { bd } from "./firebase"

export default {
  data() {
    return {
      showButton: false,
      
    };
  },
  
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
 
    handleScroll() {
      this.showButton = window.scrollY > 0;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    console.log(bd)
  }, 
}
</script>
<style>

.nav-item-fs{
  font-size: 0.8rem;
  font-weight: bold;
}
.plinks{
 color: #7d7f80 !important;
  text-decoration: none !important;
  
}
.plinks:hover{
  color:rgb(185, 185, 185) !important;
  text-decoration: none !important;
}
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
.btn-pad{
  padding:15px;
}
  @import url('@/assets/css/main.css');
 @media(max-width:600px){
  .p-sm-1{
    padding: 0.5rem !important;
  }
  .px-sm-1{
    padding-left: 0.5rem !important;
    padding-right: 0.5rem !important;

  }
  .pb-sm-1 {
    padding-bottom: 0.5rem !important;
  }
  .p-sm-1 {
    padding: 0.5rem !important;
  }
 }
</style>

<template>
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators" >
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item slide_pics active">
        <img src="@/assets/img/a.jpg" class="d-block w-100 img-fluid" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item slide_pics">
        <img src="@/assets/img/post/photo_10_2023-04-01_05-28-07.jpg" class="d-block w-100 img-fluid" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div class="carousel-item slide_pics">
        <img src="@/assets/img/post/photo_10_2023-04-01_05-28-43.jpg" class="d-block w-100 img-fluid  " alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="section1 d-flex justify-content-center">
    <div class="utilitys d-flex">
      <div class="utility">
        <i class="d-inline-block bi bi-truck"></i>
        <span class="ps-2 fs-6 d-inline-block say">
          <div class="text-light">Free Delivery</div>
          <div class="text-secondary">On order of +$1000</div>
        </span>
      </div>
      <div class="utility">
        <i class="d-inline-block bi bi-credit-card"></i>
        <span class="ps-2 fs-6 d-inline-block say">
          <div class="text-light">Free Delivery</div>
          <div class="text-secondary">On order of +$1000</div>
        </span>
      </div>
      <div class="utility">
        <i class="d-inline-block bi bi-gift"></i>
        <span class="ps-2 fs-6 d-inline-block say">
          <div class="text-light">Free Delivery</div>
          <div class="text-secondary">On order of +$1000</div>
        </span>
      </div>
      <div class="utility m-0">
        <i class="d-inline-block bi bi-headset"></i>
        <span class="ps-2 fs-6 d-inline-block say">
          <div class="text-light">Free Delivery</div>
          <div class="text-secondary">On order of +$1000</div>
        </span>
      </div>
    </div>
  </div>
  <div class="section-item px-4">
    <div id="products" class="row d-flex justify-content-center">
        <div class="col-lg-3 col-md-4 col-sm-6 mb-3" v-for="product in product" :key="product.index">
          <div class="card shadow">
            <div class="position-relative" @mouseover="showMenu = product.id" @mouseleave="showMenu = null">
              <img :src="product.img" alt="Your Image" class="img-fluid img-thumbnail w-100 h-100" />
              <transition name="slide-fade">
                <div class="position-absolute bottom-0 end-0 p-3 bg-transparent" v-show="showMenu===product.id">
                  <button class="btn text-decoration-none p-0 me-2 text-transparent" @click="toggleLike">
                    <i class="bi" :class="{ 'bi-heart':!liked, 'bi-heart-fill text-danger': liked }"></i>
                    {{ likeCount }}
                  </button>
                  <button class="btn text-decoration-none p-0 me-2 text-transparent" @click="toggleThumbsUp">
                    <i class="bi" :class="{ 'bi-hand-thumbs-up':!thumbsUp, 'bi-hand-thumbs-up-fill text-primary': thumbsUp }"></i>
                    {{ thumbsUpCount }}
                  </button>
                  <button class="btn text-decoration-none p-0 text-transparent">
                    <i class="bi bi-chat-dots-fill"></i>
                  </button>
                </div>
              </transition>
            </div>
            <div class="card-body pb-1">
              <h3 class="card-title badge bg-warning fs-3 name">{{ product.category }}</h3>
              <span class="card-text badge bg-secondary  float-end w-50 prix">Prix: {{product.price}}</span>
              <div class="car-text age"> Age:{{this.product.age}}</div>
              <div class="car-text gender">Gender{{this.product.gender}}</div>
              <div class="card-text fs-6">Description du produit Description du produitDescription du produi</div>
              <div class="d-flex justify-content-end w-100 mt-3 buttons">
                    <a href="#" class="btn btn-success m-0" >Acheter</a>
                    <a href="#" class="btn btn-primary ms-2" role="button"><div class="bi bi-cart-plus"></div></a> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>
<script>
import { collection, query,  getDocs } from "firebase/firestore";
import { bd } from '@/firebase'
const q = query(collection(bd, "poducts"));
export default {
  data(){
    return{
      showMenu: null,
      liked: false,
      likeCount: 0,
      thumbsUp: false,
      thumbsUpCount: 0,
      product:[],
      
    }
  },
  methods: {
    toggleLike() {
      this.liked = !this.liked;
      this.likeCount += this.liked ? 1 : -1;
    },
    toggleThumbsUp() {
      this.thumbsUp = !this.thumbsUp;
      this.thumbsUpCount += this.thumbsUp ? 1 : -1;
    },
    
  },
  mounted(){
      // const querySnapshot = getDocs(q);
      getDocs(q).then((querySnapshot)=>{
        querySnapshot.forEach((doc) => {
          let article ={
          id:doc.id,
          name:doc.data().name,
          price:doc.data().price,
          description:doc.data().description,
          img:doc.data().image,
          gender:doc.data().gender,
          category:doc.data().category        
          // doc.data() is never undefined for query doc snapshots
          };
         this.product.push(article)
        // console.log(doc.id, " => ", doc.data());
        console.log(this.product)
      });
      
      }) 
      console.log(this.product)
    }    
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(50%);
  opacity: 0;
}
.gender{
  background: grey;
  width: 25%;
  font-size: 12px;
  padding: 3px;
  margin-left: -17px;
  margin-top: 3px;

}
.buttons{
  margin-right:-4px;
}
.age{
  background: grey;
  width: 25%;
  font-size: 12px;
  padding: 3px;
  margin-left: -17px;
}
.slide_pics{
  height: 460px;
}
.section1{  
}
.utilitys{
  margin: 25px;
  margin-top: -30px;
  z-index: 1;
  padding: 5px;
  background: #06002b !important;
  color: white;
  justify-content: center;
  width:90%;
}
.utility{
  font-size: 4rem;
  margin: -3px;
  display: inline-block;
  margin-right: 3%;
  padding:0.5rem; 
  justify-content: center;
  display: flex;
  
}
.carousel-indicators {
  bottom: 20px;}
  .section-item {
    width: 100%;
  }
  .name{
    margin-left: -18px;
    margin-top:-5px;
  }
  .prix{
    margin-right: -17px;

  }
  @media (max-width: 768px){
    .utility{
      font-size: 2rem  !important;
      margin: -3px;
      display: inline-block;
      margin-right: 3%;
      padding:1.5rem;  
      text-align: center;
    }
    .say{
      font-size: 1rem  !important;
      padding-top:25px !important
    }
    .utilitys{
      margin:0px;
      margin-top: -30px;
      margin-bottom: 15px;
      z-index: 1;
      padding: 5px;
      background: #06002b !important;
      color: white;
      justify-content: center;
      width:100%;
    }
  }
  @media (max-width: 768px){
    .say{
      font-size: 0.75rem  !important;
      padding-left:0 !important ;
      
    }
    .slide_pics{
      height: 260px;
    }
  }

</style>

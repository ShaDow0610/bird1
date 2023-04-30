<template>
  <div class="about p-5">
    <div class="card mb-5 border-0" style="max-width: 100%;">
      <div class="row g-0 ">
        <div class="col-md-4">
          <img src="" class="img-fluid rounded-start" alt="gg">
        </div>
        <div class="col-md-8 text-center">
          <div class="card-body">
            <h2 class="card-title fs-2">Home of Hand-Raised Parrots</h2>
            <h5 class="card-title fs-4"> Our Babies </h5>
            <p class="card-text">      
              As a family business, we pride ourselves in the manner in which we raise our babies. We provide each baby bird with the individualized care and attention that is needed to become a happy, relaxed, and well-adjusted pet. We raise only a limited number of babies at a time, which enables us to provide them with the necessary one on one attention they need. Lots of TLC is essential to ensure proper socialization and a good, even-tempered disposition. Our birds receive lots of cuddling and one on one playtime. The special care that each baby receives assures our customers a loving pet that will bring joy and happiness to their lives for many years to come.
              </p>
            <p class="card-text"><small class="text-muted">Baby Parrots for sale </small></p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center mb-5">
      <h5 class="card-title fs-4"> Our Customers </h5>
      <p class="card-text">      
        We are committed to help potential bird owners find the type of bird that is best suited for their lifestyle. Parrots are beautiful, social, sensitive, and highly intelligent creatures that can enrich the lives of their owners. They can be very affectionate and, at times, become very demanding. In order to ensure a happy experience for you and your bird, do your homework; never purchase a bird on impulse. Give much thought about what qualities you are looking for in a companion bird. Birds come in many sizes, colors, and personalities. Some will talk more than others. Above all, consider your family and environment and how they will interact with a new member of the family. Parrots can live as long as humans, therefore, owning a parrot is a lifetime commitment. We encourage you to research the many parrot species before making any decisions. For your convenience, we offer comprehensive information about the various parrot for sale species right on our website. The right choice will bring a lifetime of joy and happiness for you and your bird.
      </p>
    </div>
    <div class="card mb-5 border-0" style="max-width: 100%;">
      <div class="row g-0 ">
        <div class="col-md-8 text-center">
          <div class="card-body">
            <h5 class="card-title fs-4"> Our Business </h5>
            <p class="card-text">      
              The purchase of a bird from Timie’s Bird Farm is only the beginning of our business relationship. As you may know, parrots change as they mature. These changes can bring about new behaviors in our companion parrots. When you purchase a bird from Timie’s Bird Farm, we are committed to offer lifetime support and guidance to you and your family.              
            </p>
              <h5 class="card-title fs-4"> Handfeeding </h5>
              <p class="card-text">      
                We believe in weaning our baby birds based on their individual needs and rates of maturity. It is important that all babies get a good start in life, both nutritionally and psychologically. Each of our babies is given a handfeeding formula that is best suited to their species and individual needs. They are exposed to a variety of foods at an early age, which allows them to explore and experiment with different tastes and textures. Our babies are weaned onto a pelleted diet, various trail mix blends, fresh fruits and vegetables, cooked beans and rice, grains, breads, pastas, and nuts (for the Macaws).
              </p>
              <p class="card-text"><small class="text-muted">Baby Parrots for sale </small></p>
          </div>
        </div>
        <div class="col-md-4">
          <img src="" class="img-fluid rounded-start" alt="gg">
        </div>
      </div>
    </div>
    <div class="text-center mb-5">
      <h5 class="card-title fs-4">Socialization</h5>
      <p class="card-text">      
        We believe socialization at a young age is a critical factor for having a confident, happy, and well-adjusted parrot. It is important to teach parrots some basic manners and commands. All of our baby birds are taught to “step up,” “step down,” and “no.” Our babies are exposed to birds of different species. We feel this is an added bonus, enabling the babies to adjust with less stress to those households with other birds.
      </p>
    </div>
    <div class="text-center mb-5">
      <h5 class="card-title fs-4">Playtime</h5>
      <p class="card-text">      
        A wide variety of toys are introduced at an early age to encourage independent play and ongoing stimulation. We expose our babies to different play environments that help them develop their coordination, balance, and concentration, as well as providing them with good exercise to develop muscles and a relaxed attitude.
      </p>
    </div>
    <div class="text-center mb-5">
      <h5 class="card-title fs-4">Fledging</h5>
      <p class="card-text">      
        We believe baby birds are more confident and content when they learn how to fly before they are given a gradual wing clip. It also builds strong muscles that are important at this young age. Each one of our babies is allowed to fledge naturally and fly repeatedly prior to receiving the first wing clipping.
      </p>
    </div>
    <div class="text-center mb-5">
      <h5 class="card-title fs-4">Closing Thoughts</h5>
      <p class="card-text">      
        We raise parrots simply because we love them, and we enjoy helping others learn more about them. We are committed to providing our babies with the best possible introduction in life. This includes not only a nutritionally sound diet but also special care and attention to their emotional and physical needs. The solid foundation of trust, nurturing guidance, and consistent responses will help your baby bird develop into a secure, confident, and loving lifetime companion.
      </p>
      <p class="card-text"><small class="text-muted">Parrot for sale</small></p>
    </div>
    
   </div>
</template>
<script>
import { getStorage, ref, getDownloadURL } from "firebase/storage";
// Obtenir une instance de stockage
const storage = getStorage();

// Créer une référence à 'polices/Amatic.ttf'
const amaticonstcRef = ref(storage, 'police/AmaticSC-Bold.ttf');
const amatiregularcRef = ref(storage, 'police/AmaticSC-Regular.ttf');
const RemachineScript_Personal_Use = ref(storage, 'police/RemachineScript_Personal_Use.ttf');


export default {
  data(){
    return{
      fontURL:''
    }
  },
  methods:{
    
  },
  mounted(){
    
    getDownloadURL(RemachineScript_Personal_Use).then((url) => {
        console.log('URL publique du fichier:', url);
        this.fontURL=url
        const style = document.createElement('style');
        style.textContent = `
          @font-face {
            font-family: 'RemachineScript';
            src: url('${url}') format('truetype');
          }
        `;
        // Ajouter l'élément style au DOM
        document.head.appendChild(style);
      })
      .catch((error) => {
        // Gérer les erreurs ici
        console.error(error);
      });
      getDownloadURL(amaticonstcRef).then((url) => {
        console.log('URL publique du fichier:', url);
        this.fontURL=url
        const style = document.createElement('style');
        style.textContent = `
          @font-face {
            font-family: 'amati';
            src: url('${url}') format('truetype');
          }
        `;
        // Ajouter l'élément style au DOM
        document.head.appendChild(style);
      })
      .catch((error) => {
        // Gérer les erreurs ici
        console.error(error);
      });
    getDownloadURL(amatiregularcRef).then((url) => {
        console.log('URL publique du fichier:', url);
      })
      .catch((error) => {
        // Gérer les erreurs ici
        console.error(error);
      });
  },
  setup() {
    
  },
}
</script>
<style scooped>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
/*@font-face {
  font-family: 'Amatic';
  src: url('<URL de la police>') format('truetype');
}*/
.about{
  font-family:'RemachineScript';
}
</style>
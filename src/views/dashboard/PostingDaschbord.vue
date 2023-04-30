<template>
    <div class="container-fluid row">
      <h1 class="col-12">Poster un produit</h1>
      <form @submit.prevent="submitForm" class="col-6 offset-3 ">
        <div class="mb-3">
            <label for="imagesInput" class="form-label">Sélectionner une images </label>
            <input type="file" class="form-control" id="imagesInput" multiple accept="image/*" @change="handleFileUpload" >
        </div>
        <div class="mb-3 w-50 d-inline-block px-2">
          <label for="productName" class="form-label">Nom du produit</label>
          <input type="text" class="form-control" id="productName" v-model="product.name">
        </div>
        <div class="mb-3 w-50 d-inline-block px-2">
          <label for="productPrice" class="form-label">Prix du produit</label>
          <input type="number" class="form-control" id="productPrice" v-model="product.price">
        </div>
        <div class="mb-3 w-50 d-inline-block px-2">
            <label for="productGender" class="form-label">Sexe</label>
            <select class="form-select" id="productGender" v-model="product.gender">
              <option value="">Sélectionnez une option</option>
              <option value="male">Homme</option>
              <option value="female">Femme</option>
            </select>
        </div>
        <div class="mb-3 w-50 d-inline-block px-2">
            <label for="productCategory" class="form-label">Catégorie</label>
            <select class="form-select" id="productCategory" v-model="product.category">
              <option value="">African Gray Parrots</option>
              <option value="electronics">Amazon Parrots</option>
              <option value="fashion">Loverbirds</option>
              <option value="home">Cockatoos</option>
              <option value="sports">Cockateils</option>
              <option value="sports">Lorikeets</option>
              <option value="sports">Conures</option>
            </select>
          </div>
        <div class="mb-3">
          <label for="productDescription" class="form-label">Description du produit</label>
          <textarea class="form-control" id="productDescription" rows="3" v-model="product.description"></textarea>
        </div>

       
          <button type="submit" class="btn btn-primary">Poster le produit</button>
        </form>
      </div>
    </template>
    
    <script>
    import { collection, addDoc } from 'firebase/firestore';
    import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
    import { bd,storage } from '@/firebase'; // importez vos instances de base de données et de stockage Firebase

    export default {
        data(){
            return{
                product :{
                name: '',
                price: '',
                description: '',
                img:null,
                gender: '',
                category: ''
                },
                time:''
            }
        },
        methods:{
            handleFileUpload(event){
            this.product.img =event.target.files[0];
            console.log(this.product.img)
             },
             submitForm() {
            // Téléchargez l'image sur Firebase Storage
            const imageRef = storageRef(storage, `images/${this.product.img.name}`);
             uploadBytes(imageRef, this.product.img);

            // Obtenez l'URL de téléchargement de l'image
            const imageUrl =  getDownloadURL(imageRef);
            // Enregistrez les données du produit dans un document Firebase
            imageUrl.then((url)=>{
                this.img=url
            })
            if(this.img == undefined){
                this.time="bad"
                console.log(this.time)
            }else{
                this.time="good"
                console.log(this.time)
                addDoc(collection(bd, 'poducts'), {
                name: this.product.name,
                price: this.product.price,
                description: this.product.description,
                gender: this.product.gender,
                category: this.product.category,
                image: this.img
            });
            }
        }
        },
    };
    </script>
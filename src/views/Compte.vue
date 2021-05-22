<template>
  <section>
    <Navbar/>
    <Hero msg = "Mon compte" sub_msg = "Mes informations personnelles :"/>
    <div class="columns is-mobile" style="margin-top: 1rem;">
      <div class="column is-three-fifths is-offset-one-fifth">

          <div class="box">
            <h3 class="subtitle is-3">Informations générales</h3>
            <p id="sous">Certaines de ces informations peuvent être vues par les autres utilisateurs.</p>
            <ul class="liste">
              <li class="elt"><a href="#" class="elt2">Prenom </a> </li>
              <li class="elt"><a href="#" class="elt2">Nom </a></li>
              <li class="elt"><a href="#" class="elt2">Anniversaire </a></li>
              <li class="elt"><a href="#" class="elt2">Genre </a></li>
              <li class="elt"><a href="#" class="elt2">Mot de passe </a></li>
            </ul>
          </div>
          <div class="box">
            <h3 class="subtitle is-3">Coordonnées</h3>
            <p id="sous"></p>
            <ul class="liste">
              <li class="elt"><a href="#" class="elt2">Adresse mail </a> </li>
              <li class="elt"><a href="#" class="elt2">Télephone </a></li>
              <li class="elt"><a href="#" class="elt2">Adresse </a></li>
            </ul>
          </div>
          <div class="box">
            <h3 class="subtitle is-3">Mes documents</h3>
            <p id="sous">Vos documents personnels </p>
            <ul class="liste">
              <li class="elt"><a href="#" class="elt2">Pièces d'identité </a> </li>
              <li class="elt"><a href="#" class="elt2">Justificatif de domicile </a></li>
              <li class="elt"><a href="#" class="elt2">Coordonné banquaire </a></li>
            </ul>
          </div>

      </div>
    </div>

    <Footer/>
  </section>
</template>

<script>
// @ is an alias to /src
import Hero from '../components/Hero.vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Compte',
  components: {
    Footer,
    Hero,
    Navbar,
  },
};

</script>

<style scoped lang="scss">

  .box {
    margin-bottom: 1.5rem;
    background-color: white;
    border: 1px solid gray;

  }
  .subtitle{
    margin-bottom: 0rem;

  }

  #sous{
    margin-bottom: 1rem;
    font-size: 0.8rem;
  }
  .elt:not(:last-child){
    margin-bottom :0rem;
    padding: 1rem 0;
    border-bottom: 1px solid gray;
  }
  .elt:last-child{
    padding: 1rem 0;
  }
  .elt2{
    color: black;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
</style>

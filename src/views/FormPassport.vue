<template>
    <section >
    <Navbar/>
    <Hero msg = "Demande de passeport" sub_msg = ""/>
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
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import Hero from '../components/Hero.vue';

export default {
  name: 'FormPassport',
  components: {
    Footer,
    Navbar,
    Hero,
  },
};

</script>

<style scoped lang="scss">

</style>
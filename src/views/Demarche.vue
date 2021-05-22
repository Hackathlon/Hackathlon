<template>
  <section>
    <Navbar/>
    <Hero msg = "Mes démarches" sub_msg = "faites vos démarche en un instant"/>
    <Card titre="Aides : " 
          t1="Bourse" 
          t2="APL" s1="Remplir ma demande de bourse" 
          i1="bourse.jpg" i2="maison.jpg"  />
    <Card titre="Véhicule : " 
          t1="Carte Grise" t2="Permis" t3="Assurances" t4="certification imatriculation" 
          s1="Remplir ma demande de bourse" 
          i1="carte-grise.jpg" i2="permis.jpg" i3="assurance.jpeg"  i4="certif.jpg" />
    <Card titre="Identité : " 
          t1="Carte d'identité" t2="Passeport" 
          s1="Remplir ma demande de bourse" 
          i1="identite.jpg" i2="passport.jpg"  />
    <Card titre="Imposition : " 
          t1="Déclaration d'impôt" 
          s1="Remplir ma demande de bourse" 
          i1="impot.png"  />
    <Footer/>
  </section>
</template>


<script>
// @ is an alias to /src
import Hero from '../components/Hero.vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import Card from '../components/Card.vue';

export default {
  name: 'Demarche',
  components: {
    Footer,
    Hero,
    Navbar,
    Card,
  },
};

</script>

<style scoped lang="scss">






</style>

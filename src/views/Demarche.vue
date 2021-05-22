<template>
  <section>
    <Navbar/>
    <Hero msg = "Mes démarches" sub_msg = "Faites vos démarches en un instant"/>
    <Card titre="Aides : "
          t1="Bourse" s1="Faire une demande de bourse"
          t2="APL" s2="Faire une demande d'APL
          Simuler mes APL"
          i1="bourse.jpg" i2="maison.jpg"
          l1 = ""/>
    <Card titre="Véhicule : "
          t1="Carte Grise" t2="Permis" t3="Assurances" t4="certification imatriculation"
          s1="Remplir ma demande de carte grise"
          s2="Faire une demande de permis"
          s3="Consulter mes assurance
Résilier un contrat
Souscrire à une assurance"
          s4="Remplir un certificat d'immatriculation"
          i1="carte-grise.jpg" i2="permis.jpg" i3="assurance.jpeg"  i4="certif.jpg" />
    <Card titre="Identité : "
          t1="Carte d'identité" t2="Passeport"
          s1="Faire une demande de carte d'identité"
          s2="Faire une demande de passeport"
          i1="identite.jpg" i2="passport.jpg"
          l2 = "demarche/passeport" />
    <Card titre="Imposition : "
          t1="Déclaration d'impôt"
          s1="Remplir ma déclaration d'impôts"
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

<template>
  <section>
    <Navbar/>
    <Hero msg = "Contact" sub_msg = "un problème ? On est là !"/>

    <div class="d" style="margin-top: 3rem;display:block;text-align:center;">
      <h1>Vous pouvez nous contacter à l'adresse suivante :</h1>

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
  name: 'Contact',
  components: {
    Footer,
    Hero,
    Navbar,
  },
};

</script>

<style scoped lang="scss">

</style>

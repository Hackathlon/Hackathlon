<template>
  <section>
    <Navbar/>
    <Hero msg="Cession de véhicule" sub_msg=""/>
    <section class="section">
      <div class="container has-text-centered">
        <h1 class="title">
          Choissisez votre catégorie :
        </h1>
        <br><br><br>
        <div class="columns is-vcentered">
          <div class="column">
            <b-button type="is-primary">Je cède mon véhicule</b-button>

          </div>
          <div class="column">
            <b-button type="is-primary">J'achète un véhicule</b-button>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
  </section>
</template>

<script>
import Footer from '../components/Footer.vue';
import Navbar from '../components/Navbar.vue';
import Hero from '../components/Hero.vue';

export default {
  name: 'Cession',
  components: {
    Hero,
    Footer,
    Navbar,
  },
};
</script>

<style scoped>

</style>

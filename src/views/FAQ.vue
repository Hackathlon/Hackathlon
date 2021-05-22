<template>
  <section>
    <Navbar/>
    <Hero msg = "FAQ" sub_msg = "Quoi ? Où ? Comment ? Que faire ? Pourquoi ?"/>
    <Footer/>
  </section>
</template>


<script>
// @ is an alias to /src
import Hero from '../components/Hero.vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'FAQ',
  components: {
    Footer,
    Hero,
    Navbar,
  },
};

</script>

<style scoped lang="scss">

</style>
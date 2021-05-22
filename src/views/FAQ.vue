<template>
  <section>
    <Navbar/>
    <Hero msg = "FAQ" sub_msg = "Quoi ? Où ? Comment ? Que faire ? Pourquoi ?"/>
    <center> 
    <div class="box " >
      <p class="title ">Recherche sur notre site !</p>
      <form method="get" action=".....">
        <div class="field has-addons has-addons-centered column is-6">
            <div class="control is-expanded ">
                <input class="input is-medium"  name="recherche" placeholder="Taper les mots clés de votre question">
            </div>
            <div class="control">
                <button type="submit" class="button is-primary is-medium">
                        Rechercher
                </button>
            </div>
        </div>
      </form>
    </div>
    <div class="box is-6" >

    <div class="panel-tabs">
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Mes aides  
        </a>
        <div class="navbar-dropdown">
          <a class="navbar-item">
            Demande de bourse
          </a>
          <a class="navbar-item">
            Les APL
          </a>
        </div>
      </div>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Demande de document 
        </a>
        <div class="navbar-dropdown">
          <a class="navbar-item">
            Permis
          </a> 
          <a class="navbar-item">
            Assurances
          </a>
          <a class="navbar-item">
            Certification imatriculation
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Passeport
          </a>
          <a class="navbar-item">
            Carte identité
          </a>
        </div>
      </div>
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Déclaration 
        </a>
        <div class="navbar-dropdown">
          <a class="navbar-item">
            Impôt
          </a>
          <a class="navbar-item">
            Déclaration de revenue
          </a>
          <a class="navbar-item">
            Contact
          </a>
        </div>
      </div>
    </div>

      <b-collapse
        class="card"
        animation="slide"
        v-for="(collapse, index) of collapses"
        :key="index"
        :open="isOpen == index"
        @open="isOpen = index">
        <template #trigger="props">
            <div
                class="card-header"
                role="button"
            >
                <p class="card-header-title">
                    {{ collapse.title }}
                </p>
                <a class="card-header-icon">
                    <b-icon
                       pack="fas"
                        :icon="props.open ? 'menu-down' : 'menu-up'">
                    </b-icon>
                </a>
            </div>
        </template>
        <div class="card-content">
            <div class="content">
                {{ collapse.text }}
            </div>
        </div>
    </b-collapse>


    </div>  
    </center>
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
  data() {
      return {
          isOpen: -1,
          collapses: [
          {
              title: 'Comment faire sa déclaration d’impôts ?',
              text: 'Text 1'
          },
          {
              title: 'Résiliation d’un contrat d’assurance pour un particulier ',
              text: 'Text 2'
          },
          {
              title: 'Title 3',
              text: 'Text 3'
          }
          ]
      }
  },
};

  

</script>

<style scoped lang="scss">



</style>

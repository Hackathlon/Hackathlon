<template>
  <section>
    <Navbar/>
    <div class="container" style="margin-top: 3rem;">
      <div class="columns is-vcentered">
        <div class="column is-6">

          <h1 class="title is-title is-size-1 has-text-weight-bold">Simplifiez vos
            démarches administratives en deux clics grâce à EZ-Tax</h1>

          <p class="subtitle is-4 has-margin-top-20 is-family-primary">Inscrivez
            vous gratuitement dès maintenant.</p>

          <form method="get" action=".....">
            <div class="field has-addons has-margin-top-30">
              <div class="control">
                <input class="input is-medium" type="email"
                       name="email" placeholder="Your email">
              </div>
              <div class="control">
                <button type="submit" class="button is-primary is-medium">
                  Commencer !
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="column is-5 has-text-centered">
          <figure class="image" style="width : 50rem;height : auto;">
            <img src="../assets/img3.png" alt="Pickle">
          </figure>
        </div>
      </div>
    </div>

    <section id="features" class="hero has-background-white-ter" style="margin-top: 5rem;">
      <div class="column is-10 is-offset-1 ">

        <div class="box">
          <div class="columns">
            <figure class="image " style="width : 25rem;height : auto;">
              <img src="../assets/img1.png" alt="get analytics and optimize your  performance">
            </figure>
            <div class="column">
              <div class="title">
                <h2 class="has-text-black is-family-secondary has-text-weight-bold">
                  Problématique ?</h2>
              </div>
              <span class="is-size-5"> Lorsque nous rentrons dans la vingtaine
                    nous sommes confrontésà un problème de taille en France :
                     l'administratif. En effet rien ne nous prépare réellement à
                    devoir tout préparer et tout régler par nous même, trouver des
                    formulaires, les apporter, envoyer des courriers
                    (qui envoie encore des lettres de nos jours ?) ...
                    Tout cela est extrêmement complexe et demande un
                    nombre incalculable d'heures qui pourraient être passées à
                    faire des choses bien plus productives qui nous
                    intéressent vraiment. Et bien, c'est à ce moment qu'intervient
                    EZ-Tax ! Notre slogan est "l'administration française n'a jamais été
                    aussi rapide."</span>
            </div>
          </div>
        </div>
        <div class="box">
          <div class="columns">
            <div class="column">
              <div class="title">
                <h2 class="has-text-black is-family-secondary has-text-weight-bold">
                  La solution !</h2>
              </div>
              <span class="is-size-5"> EZ-tax propose une
                    solution innovante à tout vos problèmes
                    d'administration ! Finies les heures interminables à
                    chercher un document, il sera directement inclus dans un
                    coffre numérique chiffré sur notre site web, de plus nous vous proposons
                    même de vous aider grandement dans toutes vos démarches administratives
                    en vous proposant un accès à tous les formulaires, documents et ou informations
                    dont vous pourriez avoir besoin pour n'importe quel cas :
                    déclaration d'impôts, achat de véhicules, aides , demande de documents
                    officiels, nous pouvons même dans certains cas le faire pour vous.</span>
            </div>
            <figure class="image " style="width : 18rem;height : auto;">
              <img src="../assets/img2.png" alt="get analytics and optimize your  performance">
            </figure>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
  </section>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Footer,
    Navbar,
  },
};
</script>

<style scoped lang="scss">
.box {
  margin-top: 4rem;
}
</style>

<template>
   

<section >
    <Navbar/>
        
            <div class="container has-text-centered" style="margin-top:10%">
                <div class="column is-4 is-offset-4 ">
                    <h3 class="title has-text-black">Connexion</h3>
                    
                    
                    <div class="box">
                        
                        <form>
                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="email" placeholder="mail" autofocus="">
                                </div>
                            </div>

                            <div class="field">
                                <div class="control">
                                    <input class="input is-large" type="password" placeholder="mot de passe">
                                </div>
                            </div>
                            <div class="field">
                                <label class="checkbox">
                                <input type="checkbox">
                                se souvenir de moi
                                </label>
                            </div>
                            <button class="button is-block is-info is-large is-fullwidth">Se connecter </button>
                        </form>
                    </div>
                    
                    
                        <p class="has-text-grey">
                        <b-navbar-item :to="{ path: '/enregistrer' }" tag="router-link">s'enregistrer</b-navbar-item > &nbsp;·&nbsp;
                        </p>                   
                    
                    
                    
                </div>
            </div>
      
    </section>
</template>


<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';


export default {
  name: 'connexion',
  components: {
    Footer,
    Navbar,
  },
}

</script>

<style scoped lang="scss">

.hero{
    background-color: blue;
}

</style>

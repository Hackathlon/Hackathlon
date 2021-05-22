<template>
    <section >
    <Navbar/>
      <div class="container has-text-centered" style="margin-top:10%">
        <div class="column is-4 is-offset-4 ">
          <h3 class="title has-text-black">S'enregistrer</h3>
          <div class="box">
              <form>
                <div class="field">
                      <div class="control">
                          <input class="input is-large" type="name" placeholder="Nom" autofocus="">
                      </div>
                  </div>
                  <div class="field">
                      <div class="control">
                          <input class="input is-large" type="name" placeholder="Prenom" autofocus="">
                      </div>
                  </div>
                  <div data-content="ET" class="is-divider"> 
                   
                  </div>  
                  <div class="field" >
                      <div class="control">
                          <input class="input is-large" type="email" placeholder="Mail" autofocus="">
                      </div>
                  </div>

                  <div class="field">
                      <div class="control">
                          <input class="input is-large" type="password" placeholder="Mot de passe">
                      </div>
                  </div>
                  
                  <button class="button is-block is-info is-large is-fullwidth enregistrer">S'enregsiter</button>
              </form>
          </div>   
      </div>
      </div>
    </section>
</template>


<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';


export default {
  name: 'enregistrer',
  components: {
    Footer,
    Navbar,
  },
}

</script>

<style scoped lang="scss">

.enregistrer{
  background-color: blue;
}
.is-divider {
    display: block;
    position: relative;
    border-top: .1rem solid #dbdbdb;
    height: .1rem;
    margin: 2rem 0;
    text-align: center;
}

</style>
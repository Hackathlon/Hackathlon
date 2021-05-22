<template>

  <section>
    <Navbar/>

    <div class="container has-text-centered" style="margin-top:10%">
      <div class="column is-4 is-offset-4 ">
        <h3 class="title has-text-black">Connexion</h3>

        <div class="box">

          <form onsubmit="return false">
            <div class="field">
              <b-field label="Email"
                       :type="err ? 'is-danger' : ''"
                       placeholder="Jean@dupond.fr">
                <b-input type="email"
                         v-bind="email"
                         maxlength="30">
                </b-input>
              </b-field>
            </div>

            <div class="field">
              <b-field label="Mot de passe"
                       :type="err ? 'is-danger' : ''"
                       placeholder="">
                <b-input type="password"
                         v-bind="passw"
                         maxlength="32">
                </b-input>
              </b-field>
            </div>
            <div class="field">
              <label class="checkbox">
                <input type="checkbox">
                Se souvenir de moi
              </label>
            </div>
            <button class="button is-block is-info is-large is-fullwidth" v-on:click="login()">
              Se connecter
            </button>
          </form>
        </div>

        <p class="has-text-grey">
          <b-navbar-item :to="{ path: '/enregistrer' }"
                         tag="router-link">
            S'enregistrer
          </b-navbar-item> &nbsp;·&nbsp;
        </p>

      </div>
    </div>

  </section>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import Navbar from '../components/Navbar.vue';

export default {
  name: 'connexion',
  components: {
    Navbar,
  },
  data() {
    return {
      err: undefined,
      email: undefined,
      passw: undefined,
    };
  },
  methods: {
    login() {
      console.log('Chien');
      // Fetches posts when the component is created.
      axios.post('http://vps.vinetos.fr:9090/login',
        {
          email: this.email,
          passwd: this.passw,
        })
        .then((response) => {
          // JSON responses are automatically parsed.
          console.log(response.data);
          this.err = true;
          this.$buefy.dialog.alert({
            title: 'OK',
            message: 'Something\'s not good but I have a custom <b>icon</b> and <b>type</b>',
            type: 'is-danger',
            hasIcon: true,
            icon: 'times-circle',
            iconPack: 'fa',
            ariaRole: 'alertdialog',
            ariaModal: true,
          });
        })
        .catch((e) => {
          this.err = true;
          this.$buefy.dialog.alert({
            title: 'Error',
            message: 'Something\'s not good but I have a custom <b>icon</b> and <b>type</b>',
            type: 'is-danger',
            hasIcon: true,
            icon: 'times-circle',
            iconPack: 'fa',
            ariaRole: 'alertdialog',
            ariaModal: true,
          });
        });
    },
  },
};

</script>

<style scoped lang="scss">

.hero {
  background-color: blue;
}

</style>

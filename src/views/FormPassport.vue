<template>
  <section>
    <Navbar/>
    <Hero msg="Demande de passeport" sub_msg=""/>
    <div class="columns is-mobile" style="margin-top: 1rem;">
      <div class="column is-three-fifths is-offset-one-fifth">
        <div class="box">
          <h3 class="subtitle is-3" style="margin-bottom:1rem;">
            Quelques informations avant de commencer
          </h3>
          <b-field>
            <b-radio v-model="radio"
                     native-value="1er">
              1ère demande
            </b-radio>
          </b-field>
          <b-field>
            <b-radio v-model="radio"
                     native-value="re">
              Renouvellement
            </b-radio>
          </b-field>
          <b-field>
            <b-radio v-model="radio"
                     native-value="reno">
              Renouvellement pour perte ou vol
            </b-radio>
          </b-field>
        </div>

        <div class="box" v-if="radio == 're' || radio == 'reno'">
          <h3 class="subtitle is-3" style="margin-bottom:1rem;">
            Indiquez ici le cas correspondant à votre passeport
          </h3>
          <b-field>
            <b-radio v-model="info2" native-value="1er">
              L'ancien titre est un titre sécurisé ou récent
              (valide ou périmé depuis moins de 5 ans)
            </b-radio>
          </b-field>
          <b-field>
            <b-radio v-model="info2"
                     native-value="2er">
              L'ancien titre est périmé depuis plus de 5 ans
            </b-radio>
          </b-field>
        </div>
        <form onsubmit="return false" @submit.prevent="sendEmail">
          <div class="box" v-if="radio == '1er' || info2 != 'no'">
            <h3 class="subtitle is-3">Informations générales</h3>
            <p id="sous">Vérifier et remplacer les informations manquantes.</p>
            <ul class="liste">

              <div v-for="(value,name) in user" v-bind:key="name">
                <li class="elt">
                  <div class="field is-horizontal inputInfo">
                    <div class="field-label is-normal">
                      <label class="label">{{ name }}</label>
                    </div>
                    <div class="field field-body">
                      <div class="field">
                        <p class="control">
                          <input class="input" v-model="userForm[name]" :placeholder=value>
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </div>

            </ul>
          </div>
          <div class="box" v-if="radio == '1er' || info2 != 'no'">
            <h3 class="subtitle is-3">Mes documents</h3>
            <p id="sous">Vos documents personnels </p>
            <ul class="liste">
              <div v-for="(value,name) in docs" v-bind:key="name">
                <li class="elt">
                  <div class="field is-horizontal inputInfo2">
                    <div class="field-label is-normal">
                      <label class="label">{{ name }}</label>
                    </div>
                    <div class="field has-addons has-addons-centered">
                      <div class="field field-body">
                        <div class="field">
                          <p class="control">
                            <input class="input" :placeholder=value>
                          </p>
                        </div>
                      </div>
                      <b-field class="file is-primary" :class="{'has-name': !!value}">
                        <b-upload :v-model=value class="file-label">
                            <span class="file-cta">
                                <b-icon class="file-icon" icon="upload"></b-icon>
                                <span class="file-label">Télécharger</span>
                            </span>
                        </b-upload>
                      </b-field>
                    </div>
                  </div>
                </li>
              </div>
            </ul>
          </div>
          <div class="box" v-if="radio == '1er' || info2 != 'no'">
            <h3 class="subtitle is-3">Achat automatique</h3>
            <p id="sous">souhaitez-vous que l'on s'en occupe a votre place ? .</p>
            <ul class="liste">
              <div v-for="(value,name) in achat" v-bind:key="name">
                <li class="elt ">
                  <label class="checkbox">
                    <input type="checkbox">
                    {{ name }}
                  </label>
                </li>
              </div>
            </ul>
          </div>
          <button class="button is-block is-info is-large is-fullwidth"
                  v-on:click="sendMail()"
                  v-if="radio == '1er' || info2 != 'no'"
                  type="submit"
          >
            M'envoyer la synthèse
          </button>
        </form>
      </div>
    </div>
    <Footer/>
  </section>
</template>

<script>
import emailjs from 'emailjs-com';
// @ is an alias to /src
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import Hero from '../components/Hero.vue';

export default {
  name: 'FormPassport',
  components: {
    Footer,
    Navbar,
    Hero,
  },
  data() {
    return {
      radio: 'default',
      info2: 'no',
      user: {
        prenom: 'Prenom',
        Nom: 'Nom',
        'Date de naissance': 'xx/xx/xxxx',
        'Ville de naissance': 'ville',
        'Adresse mail': '@',
        telephon: '06xxxxxxx',
        'Code postal': 'code postal',
        Adresse: 'adresse',
        Vile: 'ville',
      },
      userForm: {
        prenom: undefined,
        Nom: undefined,
        'Date de naissance': undefined,
        'Ville de naissance': undefined,
        'Adresse mail': undefined,
        telephon: undefined,
        'Code postal': undefined,
        Adresse: undefined,
        Vile: undefined,
        'Timbre fiscaux': undefined,
      },
      docs: {
        'Carte Identité': 'ma carte.png',
        'Justificatif de domicile': 'justificatif',
        'Photo d\'identite': 'ma photo :) ',
      },
      achat: {
        'Timbre fiscaux': 'timbre',
      },
    };
  },
  methods: {
    sendMail() {
      console.log(this.userForm);
      this.sendEmail();
    },
    sendEmail(e) {
      emailjs.send('service_85s1zre', 'template_g67ll9b', {
        name: this.userForm.Nom + this.userForm.prenom,
        email: this.email,
        message: JSON.stringify(this.userForm),
      }, 'user_57NgCEyKEiU6SjKIf0YVF');
    },
  },
};

</script>

<style scoped lang="scss">

.box {
  margin-bottom: 1.5rem;
  background-color: white;
  border: 1px solid gray;

}

.subtitle {
  margin-bottom: 0rem;

}

#sous {
  margin-bottom: 1rem;
  font-size: 0.8rem;
}

.elt:not(:last-child) {
  margin-bottom: 0rem;
  padding: 1rem 0;
  border-bottom: 1px solid gray;
}

.elt:last-child {
  padding: 1rem 0;
}

.elt2 {
  color: black;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.inputInfo {

  padding-right: 25%;
  padding-left: 5%;
}

.inputInfo2 {

  padding-right: 30%;
  padding-left: 5%;
}

.case {
  margin-left: 2rem;
}
</style>

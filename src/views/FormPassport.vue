<template>
    <section >
    <Navbar/>
    <Hero msg = "Demande de passeport" sub_msg = ""/>
    <div class="columns is-mobile" style="margin-top: 1rem;">

      <div class="column is-three-fifths is-offset-one-fifth">

          <div class="box">
            <h3 class="subtitle is-3" style="margin-bottom:1rem;
">Quelques informations avant de commencer</h3>
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
              Indiquez ici le cas correspondant à votre passeport.</h3>
            <b-field>
                <b-radio v-model="info2"
                    native-value="1er">
                    L'ancien titre est un titre sécurisé
                  ou récent (valide ou périmé depuis moins de 5 ans)
                </b-radio>
            </b-field>
            <b-field>
                <b-radio v-model="info2"
                    native-value="2er">
                    L'ancien titre est périmé depuis plus de 5 ans
                </b-radio>
            </b-field>
          </div>

          <div class="box" v-if="radio == '1er' || info2 != 'no'">
            <h3 class="subtitle is-3">Informations générales</h3>
            <p class="sous">Vérifier et remplacer les informations manquantes.</p>
            <ul class="liste">
              <li class="elt"  >
                <div class="field is-horizontal inputInfo" >
                    <div class="field-label is-normal">
                        <label class="label">Prenom</label>
                    </div>
                    <div class="field field-body">
                        <div class="field">
                        <p class="control">
                            <input class="input"  placeholder="Prenom">
                        </p>
                        </div>
                    </div>
                </div>
              </li>

            </ul>
          </div>
          <div class="box">
            <h3 class="subtitle is-3">Coordonnées</h3>
            <p class="sous"></p>
            <ul class="liste">
              <li class="elt"><a href="#" class="elt2">Adresse mail </a> </li>
              <li class="elt"><a href="#" class="elt2">Télephone </a></li>
              <li class="elt"><a href="#" class="elt2">Adresse </a></li>
            </ul>
          </div>
          <div class="box">
            <h3 class="subtitle is-3">Mes documents</h3>
            <p class="sous">Vos documents personnels </p>
            <ul class="liste">
              <li class="elt"><a href="#" class="elt2">Pièces d'identité </a> </li>
              <li class="elt"><a href="#" class="elt2">Justificatif de domicile </a></li>
              <li class="elt"><a href="#" class="elt2">Coordonné banquaire </a></li>
            </ul>
          </div>

      </div>
    </div>
    <Footer/>
    </section>
</template>

<script>
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
        Prenom: 'Prenom',
        Nom: 'Nom',
        Date_de_naissance: 'xx/xx/xxxx',
        Ville_naissance: 'ville',

      },
    };
  },
};

</script>

<style scoped lang="scss">

.box {
    margin-bottom: 1.5rem;
    background-color: white;
    border: 1px solid gray;

  }
  .subtitle{
    margin-bottom: 0rem;

  }

  .sous{
    margin-bottom: 1rem;
    font-size: 0.8rem;
  }
  .elt:not(:last-child){
    margin-bottom :0rem;
    padding: 1rem 0;
    border-bottom: 1px solid gray;
  }
  .elt:last-child{
    padding: 1rem 0;
  }
  .elt2{
    color: black;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

    .inputInfo{

        padding-right:25%;
        padding-left:5%;
    }

    .case{
        margin-left: 2rem;
    }
</style>

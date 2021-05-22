<template>
  <section>
    <Navbar/>
    <Hero msg="FAQ" sub_msg="Quoi ? Où ? Comment ? Que faire ? Pourquoi ?"/>
    <center>
      <div class="box ">
        <p class="title ">Recherche sur notre site !</p>
        <form method="get" action=".....">
          <div class="field has-addons has-addons-centered column is-6">
            <div class="control is-expanded ">
              <input class="input is-medium"
                     name="recherche" placeholder="Taper les mots clés de votre question">
            </div>
            <div class="control">
              <button type="submit" class="button is-primary is-medium">
                Rechercher
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="box is-6">

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
              Demande de documents
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
              Déclarations
            </a>
            <div class="navbar-dropdown">
              <a class="navbar-item">
                Impôts
              </a>
              <a class="navbar-item">
                Déclaration de revenus
              </a>
              <a class="navbar-item">
                Contact
              </a>
            </div>
          </div>
        </div>


    <div class = "column is-four-fifths">
      <b-collapse
        class="card"
        animation="slide"
        v-for="(collapse, index) of collapses"
        :key="index"
        :open="isOpen == index"
        @open="isOpen = index">
        <template #trigger="props">
            <div class="card-header"
                role="button">
                <p class="card-header-title">             
                    {{ collapse.title }}

                </p>
                <a class="card-header-icon">
                  <b-icon
                    :icon="props.open ? 'menu-down' : 'menu-up'">
                  </b-icon>
                </a>
              </div>
            </template>
            <div class="card-content">
              <div class="content" style="text-align:left;">
                <li v-for="desc in collapse.text" :key="desc">
                  {{ desc }}
                </li>
              </div>
            </div>
          </b-collapse>
        </div>

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
              title: 'Résiliation d’un contrat d’assurance pour un particulier',
              text: ['Notifier son assureur en respectant un préavis d’au moins 2 mois avant l’échéance du contrat (par mail, courrier, déclaration au siège social  ou tout autre moyen prévu par le contrat …) -> confirmation par écrit de la part de l’assureur ',
              'En cas de reconduction tacite d’un contrat, l’assureur doit rappeler avec l’avis d’échéance annuelle la date limite à laquelle l’assuré peut mettre fin à son contrat d’assurance. Il doit également rappeler que l\'assuré dispose d’un délai de vingt jours à compter de la date d’envoi de l\'avis d\'échéance pour demander la non-reconduction du contrat.Lorsque l’information ne lui a pas été donnée, l’assuré peut résilier le contrat, sans pénalités, à tout moment à compter de la date de reconduction du contrat, par lettre, email, ou selon l\'une des autres modalités prévues à l\'article L. 113-14 du Code des assurances.',
              'Les contrats d\'assurance automobile, multirisques habitation et complémentaires santé peuvent être réinitialisés à tout moment lorsque le contrat a plus d’un an.  La résiliation prend alors fin un mois après la réception de la demande par l’assureur. Cependant, dans les cas des assurances automobiles et habitations (qui sont obligatoires), la résiliation d\'un contrat d’assurance est effectuée par le nouvel assureur.',
              'La résiliation d’un contrat d’assurance peut prendre fin lorsque surviennent certains éléments, tels qu’un déménagement, un mariage, une vente, un achat, un héritage, sinistre …'],
          },
          {
              title: ' Comment faire sa déclaration d’impôts ?',
             text: ['Toute personne majeure ayant touché un revenu doit faire une déclaration d’impôts sous peine d’amende. Cependant, il est conseillé de quand même remplir une déclaration d’impôts même si vous n’avez pas touché de revenu car vous serez alors éligible à des aides sociales.',
             'Depuis 2020, possibilité de faire sa déclaration en ligne. Si une déclaration papier a été faite en 2019 ou si une déclaration en ligne a été remplie en 2020 vous êtes alors éligible à la déclaration automatique d’impôts. Vous devrez vérifier que toutes les informations remplies sur votre déclaration d’impôts en ligne sont correctes et si c’est le cas vous n’avez plus qu’à valider. Sinon, vous devrez la re-remplir et la signer.',
             'Aujourd’hui, la déclaration papier est amenée à disparaître et ne peut se faire que dans les cas suivants :\n vous remplissez votre déclaration d’impôt pour la première fois \n vous vivez dans une zone sans couverture réseau ou vous n’êtes pas équipé d’une connexion internet \nvous êtes une personne âgée, handicapée ou dépendante.'],
          },
          {
              title: 'Renouvellement du passeport d\'un majeur',
              text: ['Le lieu de la demande ne dépend pas de votre domicile. Vous pouvez vous rendre à n\'importe quelle mairie, à condition qu\'elle soit équipée d\'une station d\'enregistrement.',
              'Les documents à fournir sont : Votre ancien passeport,Photo d\'identité de moins de 6 mois et conforme aux normes, Timbre fiscal : 86 € (achat en ligne), Justificatif du domicile, Numéro de pré-demande si vous avez fait cette démarche en ligne (sinon, il faut remplir et signer le formulaire cartonné disponible au guichet)',
              'Le coût est de 80euro',
              'Le passeport n\'est pas fabriqué sur place et ne peut donc pas être délivré immédiatement. Les délais de fabrication dépendent du lieu et de la période de la demande. Par exemple, à l\'approche des vacances d\'été, les délais sont susceptibles d\'augmenter de manière significative.',
              'Le passeport est valide 10 ans.'],
          },
          {
              title: 'Sed ut perspiciatis unde omnis iste natus error',
              text: ['Notifier son assureur en respectant un préavis d’au moins 2 mois avant l’échéance du contrat (par mail, courrier, déclaration au siège social  ou tout autre moyen prévu par le contrat …) -> confirmation par écrit de la part de l’assureur ',
              'En cas de reconduction tacite d’un contrat, l’assureur doit rappeler avec l’avis d’échéance annuelle la date limite à laquelle l’assuré peut mettre fin à son contrat d’assurance. Il doit également rappeler que l\'assuré dispose d’un délai de vingt jours à compter de la date d’envoi de l\'avis d\'échéance pour demander la non-reconduction du contrat.Lorsque l’information ne lui a pas été donnée, l’assuré peut résilier le contrat, sans pénalités, à tout moment à compter de la date de reconduction du contrat, par lettre, email, ou selon l\'une des autres modalités prévues à l\'article L. 113-14 du Code des assurances.',
              'Les contrats d\'assurance automobile, multirisques habitation et complémentaires santé peuvent être réinitialisés à tout moment lorsque le contrat a plus d’un an.  La résiliation prend alors fin un mois après la réception de la demande par l’assureur. Cependant, dans les cas des assurances automobiles et habitations (qui sont obligatoires), la résiliation d\'un contrat d’assurance est effectuée par le nouvel assureur.',
              'La résiliation d’un contrat d’assurance peut prendre fin lorsque surviennent certains éléments, tels qu’un déménagement, un mariage, une vente, un achat, un héritage, sinistre …'],
          },
          {
              title: 'eos qui ratione voluptatem sequi nesciunt. Neque porro qui ?',
              text: ['Notifier son assureur en respectant un préavis d’au moins 2 mois avant l’échéance du contrat (par mail, courrier, déclaration au siège social  ou tout autre moyen prévu par le contrat …) -> confirmation par écrit de la part de l’assureur ',
              'En cas de reconduction tacite d’un contrat, l’assureur doit rappeler avec l’avis d’échéance annuelle la date limite à laquelle l’assuré peut mettre fin à son contrat d’assurance. Il doit également rappeler que l\'assuré dispose d’un délai de vingt jours à compter de la date d’envoi de l\'avis d\'échéance pour demander la non-reconduction du contrat.Lorsque l’information ne lui a pas été donnée, l’assuré peut résilier le contrat, sans pénalités, à tout moment à compter de la date de reconduction du contrat, par lettre, email, ou selon l\'une des autres modalités prévues à l\'article L. 113-14 du Code des assurances.',
              'Les contrats d\'assurance automobile, multirisques habitation et complémentaires santé peuvent être réinitialisés à tout moment lorsque le contrat a plus d’un an.  La résiliation prend alors fin un mois après la réception de la demande par l’assureur. Cependant, dans les cas des assurances automobiles et habitations (qui sont obligatoires), la résiliation d\'un contrat d’assurance est effectuée par le nouvel assureur.',
              'La résiliation d’un contrat d’assurance peut prendre fin lorsque surviennent certains éléments, tels qu’un déménagement, un mariage, une vente, un achat, un héritage, sinistre …'],
          }
          ]
      }
  },
};

</script>

<style scoped lang="scss">

</style>

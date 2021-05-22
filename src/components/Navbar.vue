<template>
  <b-navbar>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="../assets/img3.png"
          alt="Pickle"
        >
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item :to="{ path: '/compte' }" tag="router-link">
        Mon Compte
      </b-navbar-item>
      <b-navbar-item :to="{ path: '/demarche' }" tag="router-link">
        Démarches
      </b-navbar-item>
      <b-navbar-item :to="{ path: '/faq' }" tag="router-link">
        FAQ
      </b-navbar-item>
    </template>

    <template #end>
        <b-navbar-item :to="{ path: '/contact' }" tag="router-link">
          Nous Contacter
        </b-navbar-item>
        <b-navbar-item :to="{ path: '/connexion' }" tag="router-link">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Connexion</strong>
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>

</style>

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
      <b-navbar-item :to="{ path: '/Compte' }" tag="router-link">
        Mon Compte
      </b-navbar-item>
      <b-navbar-item :to="{ path: '/Demarche' }" tag="router-link">
        Démarches
      </b-navbar-item>
      <b-navbar-item :to="{ path: '/FAQ' }" tag="router-link">
        FAQ
      </b-navbar-item>
    </template>

    <template #end>
        <b-navbar-item :to="{ path: '/Contact' }" tag="router-link">
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

<template>
  <section class="hero is-primary">
    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <p class="title">
           {{msg}}
        </p>
        <p class="subtitle">
          {{sub_msg}}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    msg: String,
    sub_msg : String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.title {
  font-family: 'Courier New', Courier, monospace;
  font-size: 3rem;
}



</style>
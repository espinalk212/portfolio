<template>
  <div>
    <VuePdfEmbed source="../assets/Kevin_Espinal_Resume.pdf" />
  </div>
</template>
<script>
import VuePdfEmbed from 'vue-pdf-embed'

export default {
  components: {
    VuePdfEmbed,
  },
}
</script>

<style scoped></style>

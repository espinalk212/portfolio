<template>
  <a-layout-header>
    <div class="header-section--container">
      <div class="header-section--hamburger-icon">
        <font-awesome-icon
          v-if="collapsed"
          size="2x"
          :icon="['fa', 'bars']"
          @click.stop="toggleMenu"
        />
        <font-awesome-icon
          v-else
          size="2x"
          :icon="['fa', 'x']"
          @click.stop="toggleMenu"
        />
      </div>
      <div class="header-section--title">
        <h3>Kevin Espinal's Portfolio Site</h3>
      </div>
      <div class="header-section--social-media--container">
        <a href="https://www.linkedin.com/in/kevinespinal212/"
          ><font-awesome-icon size="2x" :icon="['fab', 'linkedin-in']"
        /></a>
        |
        <a href="https://github.com/espinalk212"
          ><font-awesome-icon size="2x" :icon="['fab', 'github']"
        /></a>
        |
        <a href="https://angel.co/u/kevin-espinal"
          ><font-awesome-icon size="2x" :icon="['fab', 'angellist']"
        /></a>
      </div>
    </div>
  </a-layout-header>
</template>

<script>
import { ref } from 'vue'
export default {
  components: {},
  setup() {
    return {
      collapsed: ref(false),
    }
  },
  methods: {
    toggleMenu() {
      this.collapsed = !this.collapsed
      this.$emit('click', this.collapsed)
    },
  },
}
</script>

<style scoped>
.ant-layout-header {
  height: 3rem;
  /* width: 86.7vw; */
  color: white !important;
  background-color: #4355a1 !important;
}
a {
  color: white;
}
.header-section--container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.header-section--title > h3 {
  color: white;
}
</style>

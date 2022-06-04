<template>
  <a-layout-sider
    :style="{
      overflow: 'auto',
      height: '100vh',
      backgroundColor: 'white',
      width: '25vw',
    }"
    collapsible
    :trigger="null"
    v-model:collapsed="$props.collapsed"
  >
    <a-menu v-model:selectedKeys="selectedKeys" mode="inline">
      <a-menu-item key="1">
        <router-link to="/"
          ><font-awesome-icon icon="house-chimney" />
          <span v-if="!collapsed"> Home</span></router-link
        >
      </a-menu-item>
      <a-menu-item key="2">
        <router-link to="/skills"
          ><font-awesome-icon icon="laptop" />
          <span v-if="!collapsed"> Skills</span></router-link
        >
      </a-menu-item>
      <a-menu-item key="3">
        <router-link to="/projects"
          ><font-awesome-icon icon="briefcase" />
          <span v-if="!collapsed"> Projects</span></router-link
        >
      </a-menu-item>
      <a-menu-item key="4">
        <router-link to="/resume"
          ><font-awesome-icon icon="file" />
          <span v-if="!collapsed"> Resume</span></router-link
        >
      </a-menu-item>
      <a-divider />
      <a-menu-item>
        <font-awesome-icon icon="at" />
        <a href="mailto:espinalk212@gmail.com" target="_blank">
          <span v-if="!collapsed"> Email Me</span></a
        >
      </a-menu-item>
      <a-menu-item>
        <a href="https://www.linkedin.com/in/kevinespinal212/"
          ><font-awesome-icon :icon="['fab', 'linkedin-in']" /><span
            v-if="!collapsed"
          >
            LinkedIn</span
          ></a
        >
      </a-menu-item>
      <a-menu-item>
        <a href="https://github.com/espinalk212"
          ><font-awesome-icon :icon="['fab', 'github']" /><span
            v-if="!collapsed"
          >
            Github</span
          ></a
        >
      </a-menu-item>
      <a-menu-item>
        <a href="https://angel.co/u/kevin-espinal"
          ><font-awesome-icon :icon="['fab', 'angellist']" /><span
            v-if="!collapsed"
          >
            AngelList</span
          ></a
        >
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import { ref } from 'vue'
export default {
  props: {
    collapsed: {
      type: Boolean,
      required: true,
    },
  },
  components: {},
  setup() {
    return {
      selectedKeys: ref(['1']),
    }
  },
}
</script>

<style scoped></style>

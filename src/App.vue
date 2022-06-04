<template>
  <a-layout>
    <SidebarSection :collapsed="collapsed" />
    <a-layout>
      <HeaderSection @click="logChange" />
      <a-layout-content><router-view /></a-layout-content>
      <a-layout-footer><FooterSection /></a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import HeaderSection from '@/components/HeaderSection.vue'
import FooterSection from '@/components/FooterSection.vue'
import SidebarSection from '@/components/SidebarSection.vue'
export default {
  name: 'App',
  components: {
    HeaderSection,
    FooterSection,
    SidebarSection,
  },
  data() {
    return {
      collapsed: false,
    }
  },
  methods: {
    logChange(collapsed) {
      this.collapsed = collapsed
    },
  },
}
</script>

<style></style>

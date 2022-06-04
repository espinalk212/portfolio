<template>
  <div class="home-view--container">
    <a-card
      :style="{
        overflow: 'auto',
        width: '25vw',
        height: '82vh',
      }"
    >
      <template #cover>
        <img alt="pic of Kevin" src="@/assets/me.jpg" object-fit="contain" />
      </template>
      <a-card-meta>
        <template #title>Hi, my name is Kevin Espinal</template>
        <template #description>
          NYC born and raised with a huge passion for technology and fitness.
        </template>
      </a-card-meta>
    </a-card>
    <div class="home-view--hobbies-container">
      <a-card
        :style="{ width: '300px', padding: '1vh' }"
        title="What are my hobbies?"
      >
        I love spending time with my family, playing video games and playing
        sports
      </a-card>
      <a-card
        :style="{ width: '300px', padding: '1vh' }"
        title="How did I get here?"
      >
        I love spending time with my family, playing video games and playing
        sports
      </a-card>
      <a-card
        :style="{ width: '300px', padding: '1vh' }"
        title="What am I looking for?"
      >
        I love spending time with my family, playing video games and playing
        sports
      </a-card>
      <a-card
        :style="{ width: '300px', padding: '1vh' }"
        title="What are my goals?"
      >
        I love spending time with my family, playing video games and playing
        sports
      </a-card>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.home-view--container {
  display: flex;
  flex-wrap: wrap;
  padding: 2vh;
  justify-content: space-evenly;
}
.home-view--hobbies-container {
  display: flex;
  padding-right: 20vh;
  max-height: 92vh;
  flex-direction: column;
  flex-wrap: wrap;
}
</style>

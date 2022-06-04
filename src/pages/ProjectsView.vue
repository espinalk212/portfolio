<template>
  <div class="projects-view--container">
    <a-card
      :bordered="true"
      :style="{
        minHeight: '65vh',
        width: '37vw',
        padding: '2rem',
      }"
    >
      <template #cover>
        <video
          loop
          muted
          onmouseover="play()"
          onmouseleave="pause()"
          height="320"
          width="440"
          alt="example"
          src="@/assets/goat.mp4"
        />
      </template>
      <a-card-meta title="The Real Goat">
        <template #description
          >Data visualization chart built using pure JavaScript and d3.js
          library that compares stats between Michael Jordan and Lebron
          James.</template
        >
      </a-card-meta>
      <a-button
        href="https://espinalk212.github.io/the_real_goat/"
        shape="round"
        type="primary"
        >Live</a-button
      >
      <a-button
        href="https://github.com/espinalk212/the_real_goat"
        type="primary"
        shape="round"
        >Repo</a-button
      >
    </a-card>
    <a-divider type="vertical" />
    <a-card
      :bordered="true"
      :style="{
        minHeight: '65vh',
        width: '37vw',
        padding: '2rem',
      }"
    >
      <template #cover>
        <video
          loop
          muted
          onmouseover="play()"
          onmouseleave="pause()"
          height="320"
          width="440"
          alt="example"
          src="@/assets/playersclub.mp4"
        />
      </template>
      <a-card-meta title="Players Club">
        <template #description
          >Fetches live sports using SportRadar API and shows the user scores
          and articles based on their sports and team preferences.</template
        >
      </a-card-meta>
      <a-button
        href="https://playersclub.herokuapp.com/"
        shape="round"
        type="primary"
        >Live</a-button
      >
      <a-button
        href="https://github.com/espinalk212/playersclub"
        type="primary"
        shape="round"
        >Repo</a-button
      >
    </a-card>
    <a-divider type="horizontal" />
    <a-card
      :bordered="true"
      :style="{
        minHeight: '65vh',
        width: '37vw',
        padding: '2rem',
      }"
    >
      <template #cover>
        <video
          loop
          muted
          onmouseover="play()"
          onmouseleave="pause()"
          height="320"
          width="440"
          alt="example"
          src="@/assets/trivia-challenge.mp4"
        />
      </template>
      <a-card-meta title="Trivia Challenge">
        <template #description
          >A fun trivia web app created with React and Material-UI icons, with
          data provided by Tandem for the Software Engineer Apprenticeship
          Coding Challenge.</template
        >
      </a-card-meta>
      <a-button
        href="https://espinalk212.github.io/trivia-challenge/"
        shape="round"
        type="primary"
        >Live</a-button
      >
      <a-button
        href="https://github.com/espinalk212/trivia-challenge"
        type="primary"
        shape="round"
        >Repo</a-button
      >
    </a-card>
    <a-divider type="vertical" />
    <a-card
      :bordered="true"
      :style="{
        minHeight: '65vh',
        width: '37vw',
        padding: '2rem',
      }"
    >
      <template #cover>
        <video
          loop
          muted
          onmouseover="play()"
          onmouseleave="pause()"
          height="320"
          width="440"
          alt="example"
          src="@/assets/viewflix.mp4"
        />
      </template>
      <a-card-meta title="ViewFlix">
        <template #description
          >A Netflix clone that implements a Rails backend and Reactjs / Redux
          frontend with movie trailers hosted on AWS.</template
        >
      </a-card-meta>
      <a-button
        href="https://viewflix.herokuapp.com/"
        shape="round"
        type="primary"
        >Live</a-button
      >
      <a-button
        href="https://github.com/espinalk212/ViewFlix/wiki"
        type="primary"
        shape="round"
        >Repo</a-button
      >
    </a-card>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.projects-view--container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1vw;
}
</style>

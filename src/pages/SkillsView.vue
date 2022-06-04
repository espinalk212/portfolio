<template>
  <div class="skills-view--container">
    <a-list :data-source="listData" :grid="{ gutter: 5, column: 6 }">
      <template #header>
        <h3>Some of the technologies I have experience with:</h3>
      </template>
      <template #renderItem="{ item, key }">
        <a-list-item :key="key">
          <template #extra>
            <img :alt="item.title" width="75" height="75" :src="item.src" />
          </template>
        </a-list-item>
      </template>
      <template #footer>
        <span
          >To learn more check out my<router-link to="/resume">
            resume</router-link
          ></span
        >
      </template>
    </a-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listData: [
        {
          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg',
          title: 'VueJs',
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
          title: 'JavaScript',
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg',
          title: 'Postgresl',
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg',
          title: 'HTML5',
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg',
          title: 'CSS3',
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg',
          title: 'TailwindCSS',
        },

        {
          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original-wordmark.svg',
          title: 'Ruby',
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg',
          title: 'Python',
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
          title: 'TypeScript',
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
          title: 'AWS',
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg',
          title: 'MongoDB',
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg',
          title: 'NodeJS',
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg',
          title: 'Git',
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg',
          title: 'Github',
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original-wordmark.svg',
          title: 'Heroku',
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
          title: 'NPM',
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg',
          title: 'Ruby on Rails',
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg',
          title: 'ReactJs',
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original-wordmark.svg',
          title: 'Webpack',
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg',
          title: 'D3Js',
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
          title: 'Redux',
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg',
          title: 'Mocha',
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
          title: 'Jest',
        },
        {
          src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg',
          title: 'VSCode',
        },
      ],
    }
  },
}
</script>

<style scoped>
.skills-view--container {
  padding: 2rem;
}
</style>

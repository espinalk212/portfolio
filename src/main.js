import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import App from './App'
import router from './router'
import 'ant-design-vue/dist/antd.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faHouseChimney,
  faLaptop,
  faFile,
  faBriefcase,
  faBars,
  faX,
  faAt,
} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedinIn,
  faGithub,
  faAngellist,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(
  faHouseChimney,
  faLaptop,
  faFile,
  faBars,
  faBriefcase,
  faLinkedinIn,
  faGithub,
  faAngellist,
  faX,
  faAt
)

createApp(App)
  .use(router)
  .use(Antd)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')

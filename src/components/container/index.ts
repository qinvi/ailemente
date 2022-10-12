import { App } from 'vue'
import Aside from '@components/container/Aside.vue'
import Container from '@components/container/Container.vue'
import Footer from '@components/container/Footer.vue'
import Header from '@components/container/Header.vue'
import Main from '@components/container/Main.vue'

export default {
  install(app: App) {
    app.component(Aside.name, Aside)
    app.component(Container.name, Container)
    app.component(Footer.name, Footer)
    app.component(Header.name, Header)
    app.component(Main.name, Main)
  },
}

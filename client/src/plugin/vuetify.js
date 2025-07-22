import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { VApp, VAppBar, VAppBarNavIcon, VToolbarTitle, VSwitch, VListItemTitle, VListItem, VList, VNavigationDrawer, VContainer, VMain, VTextField, VBtn, VIcon } from 'vuetify/components'
import { aliases, mdi } from 'vuetify/iconsets/mdi' // NOT mdi-svg!


const vuetify = createVuetify({
  components: {
    VApp,
    VAppBar,
    VAppBarNavIcon,
    VToolbarTitle,
    VSwitch,
    VListItemTitle,
    VListItem,
    VList,
    VNavigationDrawer,
    VContainer,
    VMain,
    VTextField,
    VBtn,
    VIcon,
  },
  defaults: {
    VTextField: {
      density: 'compact',
      variant: 'outlined',
      clearable: true,
    },
    VBtn: {
      density: 'compact',
      variant: 'tonal',
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})

export default vuetify

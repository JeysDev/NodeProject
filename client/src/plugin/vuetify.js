import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader 
import 'vuetify/styles'
import { createVuetify } from 'vuetify' 

const vuetify = createVuetify({
    defaults: {
        vTextField:{
            density: 'compact',
            variant: 'outlined',
            clearable: true,
        }    
    },
    Vbtn:{
        density: 'compact',
        variant: 'tonal',}
    });
export default vuetify;


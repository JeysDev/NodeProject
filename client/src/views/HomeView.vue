<template>
  <v-container>
    <v-row>
      <v-col :cols="12" class="text-center">
        <h1>Home View</h1><h1>GYLE POGI</h1>
      </v-col>
      <v-col cols="$vuetify.breakpoint.mdAndDown ? 12 : 6" class="text-center">
        <v-btn color="primary" @click="$router.push('/about')">Go to About</v-btn>
      </v-col>
      <v-col cols="$vuetify.breakpoint.mdAndDown ? 12 : 6" class="text-center">
        <v-btn color="secondary">Go to Contact</v-btn>
      </v-col>
    </v-row>
<v-card width="500px" class="mx-auto">
  <v-card-text>
    <h1>Hello World</h1>
  </v-card-text>
</v-card>

  </v-container>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>
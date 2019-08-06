<template>
  <v-container grid-list-md>
    <v-layout row wrap>

      <v-flex v-for="(image, index) in images" :key="index" :class="image.flex">
        <v-img
          :src="image.src"
          :height="image.height"
          cover
        ></v-img>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    images: [
      { src: './img/place/1.jpg', flex: 'md3', height: '400' },
      { src: './img/place/2.jpg', flex: 'md6', height: '400' },
      { src: './img/place/3.jpg', flex: 'md3', height: '400' },
      { src: './img/place/4.jpg', flex: 'md3', height: '350' },
      { src: './img/place/5.jpg', flex: 'md3', height: '350' },
      { src: './img/place/6.jpg', flex: 'md3', height: '350' },
      { src: './img/place/7.jpg', flex: 'md3', height: '350' },
      { src: './img/place/8.jpg', flex: 'md3', height: '400' },
      { src: './img/place/9.jpg', flex: 'md4', height: '400' }
    ]
  })
}
</script>

<style>

</style>

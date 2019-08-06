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
      { src: './img/people/1.jpg', flex: 'md3', height: '400' },
      { src: './img/people/2.jpg', flex: 'md3', height: '400' },
      { src: './img/people/3.jpg', flex: 'md3', height: '400' },
      { src: './img/people/4.jpg', flex: 'md3', height: '400' },
      { src: './img/people/5.jpg', flex: 'md6', height: '400' },
      { src: './img/people/6.jpg', flex: 'md3', height: '400' },
      { src: './img/people/7.jpg', flex: 'md3', height: '400' },
      { src: './img/people/8.jpg', flex: 'md3', height: '400' },
      { src: './img/people/9.jpg', flex: 'md6', height: '400' },
      { src: './img/people/10.jpg', flex: 'md3', height: '400' },
      { src: './img/people/11.jpg', flex: 'md6', height: '400' },
      { src: './img/people/12.jpg', flex: 'md6', height: '400' },
      { src: './img/people/13.jpg', flex: 'md4', height: '400' },
      { src: './img/people/14.jpg', flex: 'md4', height: '400' },
      { src: './img/people/15.jpg', flex: 'md4', height: '400' }
    ]
  })
}
</script>

<style>

</style>

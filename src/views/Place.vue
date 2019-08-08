<template>
  <v-container grid-list-md>
    <v-layout row wrap>

      <v-flex v-for="(image, index) in images" :key="index" :class="image.flex">
        <v-hover v-slot:default="{ hover }">
          <v-card
            :elevation="hover ? 12 : 2"
            :class="{ 'on-hover': hover }"
          >
            <v-img
              :src="image.src"
              :height="image.height"
              cover
            >
              <div
                v-if="hover"
                class="d-flex black v-card--reveal heading white--text"
                style="height: 100%;"
              >
              </div>
            </v-img>
          </v-card>
        </v-hover>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    images: [
      { src: './img/place/1.jpg', flex: 'xs12 sm3', height: '400' },
      { src: './img/place/2.jpg', flex: 'xs12 sm6', height: '400' },
      { src: './img/place/3.jpg', flex: 'xs12 sm3', height: '400' },
      { src: './img/place/4.jpg', flex: 'xs12 sm3', height: '350' },
      { src: './img/place/5.jpg', flex: 'xs12 sm3', height: '350' },
      { src: './img/place/6.jpg', flex: 'xs12 sm3', height: '350' },
      { src: './img/place/7.jpg', flex: 'xs12 sm3', height: '350' },
      { src: './img/place/8.jpg', flex: 'xs12 sm3', height: '400' },
      { src: './img/place/9.jpg', flex: 'xs12 sm4', height: '400' }
    ]
  })
}
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .1;
  position: absolute;
  width: 100%;
}
</style>

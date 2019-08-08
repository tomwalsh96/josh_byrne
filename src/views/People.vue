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
      { src: './img/people/1.jpg', flex: 'xs12 sm3', height: '400' },
      { src: './img/people/2.jpg', flex: 'xs12 sm3', height: '400' },
      { src: './img/people/3.jpg', flex: 'xs12 sm3', height: '400' },
      { src: './img/people/4.jpg', flex: 'xs12 sm3', height: '400' },
      { src: './img/people/5.jpg', flex: 'xs12 sm6', height: '400' },
      { src: './img/people/6.jpg', flex: 'xs12 sm3', height: '400' },
      { src: './img/people/7.jpg', flex: 'xs12 sm3', height: '400' },
      { src: './img/people/8.jpg', flex: 'xs12 sm3', height: '400' },
      { src: './img/people/9.jpg', flex: 'xs12 sm6', height: '400' },
      { src: './img/people/10.jpg', flex: 'xs12 sm3', height: '400' },
      { src: './img/people/11.jpg', flex: 'xs12 sm6', height: '400' },
      { src: './img/people/12.jpg', flex: 'xs12 sm6', height: '400' },
      { src: './img/people/13.jpg', flex: 'xs12 sm4', height: '400' },
      { src: './img/people/14.jpg', flex: 'xs12 sm4', height: '400' },
      { src: './img/people/15.jpg', flex: 'xs12 sm4', height: '400' }
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

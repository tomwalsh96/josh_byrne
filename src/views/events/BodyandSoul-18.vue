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
      { src: '../img/event/bodyandsoul-18/1.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/2.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/3.jpg', flex: 'xs12 sm6', height: '400' },
      { src: '../img/event/bodyandsoul-18/4.jpg', flex: 'xs12 sm4', height: '400' },
      { src: '../img/event/bodyandsoul-18/5.jpg', flex: 'xs12 sm4', height: '400' },
      { src: '../img/event/bodyandsoul-18/6.jpg', flex: 'xs12 sm4', height: '400' },
      { src: '../img/event/bodyandsoul-18/7.jpg', flex: 'xs12 sm6', height: '400' },
      { src: '../img/event/bodyandsoul-18/8.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/9.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/10.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/11.jpg', flex: 'xs12 sm6', height: '400' },
      { src: '../img/event/bodyandsoul-18/12.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/13.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/14.jpg', flex: 'xs12 sm6', height: '400' },
      { src: '../img/event/bodyandsoul-18/15.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/16.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/17.jpg', flex: 'xs12 sm6', height: '400' },
      { src: '../img/event/bodyandsoul-18/18.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/19.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/20.jpg', flex: 'xs12 sm6', height: '400' },
      { src: '../img/event/bodyandsoul-18/21.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/22.jpg', flex: 'xs12 sm6', height: '400' },
      { src: '../img/event/bodyandsoul-18/23.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/24.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/25.jpg', flex: 'xs12 sm6', height: '400' },
      { src: '../img/event/bodyandsoul-18/26.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/27.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/28.jpg', flex: 'xs12 sm4', height: '400' },
      { src: '../img/event/bodyandsoul-18/29.jpg', flex: 'xs12 sm4', height: '400' },
      { src: '../img/event/bodyandsoul-18/30.jpg', flex: 'xs12 sm4', height: '400' },
      { src: '../img/event/bodyandsoul-18/31.jpg', flex: 'xs12 sm6', height: '400' },
      { src: '../img/event/bodyandsoul-18/32.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/33.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/34.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/35.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/36.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/37.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/38.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/39.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/40.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/41.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/42.jpg', flex: 'xs12 sm6', height: '400' },
      { src: '../img/event/bodyandsoul-18/43.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/44.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/45.jpg', flex: 'xs12 sm4', height: '400' },
      { src: '../img/event/bodyandsoul-18/46.jpg', flex: 'xs12 sm4', height: '400' },
      { src: '../img/event/bodyandsoul-18/47.jpg', flex: 'xs12 sm4', height: '400' },
      { src: '../img/event/bodyandsoul-18/48.jpg', flex: 'xs12 sm6', height: '400' },
      { src: '../img/event/bodyandsoul-18/49.jpg', flex: 'xs12 sm6', height: '400' },
      { src: '../img/event/bodyandsoul-18/50.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/51.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/52.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/53.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/54.jpg', flex: 'xs12 sm8', height: '400' },
      { src: '../img/event/bodyandsoul-18/55.jpg', flex: 'xs12 sm4', height: '400' },
      { src: '../img/event/bodyandsoul-18/56.jpg', flex: 'xs12 sm6', height: '400' },
      { src: '../img/event/bodyandsoul-18/57.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/58.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/59.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/60.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/61.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/62.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/63.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/64.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/65.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/66.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/67.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/68.jpg', flex: 'xs12 sm6', height: '400' },
      { src: '../img/event/bodyandsoul-18/69.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/70.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/71.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/72.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/73.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/74.jpg', flex: 'xs12 sm8', height: '400' },
      { src: '../img/event/bodyandsoul-18/75.jpg', flex: 'xs12 sm4', height: '400' },
      { src: '../img/event/bodyandsoul-18/76.jpg', flex: 'xs12 sm6', height: '400' },
      { src: '../img/event/bodyandsoul-18/77.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/78.jpg', flex: 'xs12 sm3', height: '400' },
      { src: '../img/event/bodyandsoul-18/79.jpg', flex: 'xs12 sm6', height: '400' },
      { src: '../img/event/bodyandsoul-18/80.jpg', flex: 'xs12 sm6', height: '400' },
      { src: '../img/event/bodyandsoul-18/81.jpg', flex: 'xs12 sm8', height: '400' },
      { src: '../img/event/bodyandsoul-18/82.jpg', flex: 'xs12 sm4', height: '400' },
      { src: '../img/event/bodyandsoul-18/83.jpg', flex: 'xs12 sm8', height: '400' },
      { src: '../img/event/bodyandsoul-18/84.jpg', flex: 'xs12 sm4', height: '400' },
      { src: '../img/event/bodyandsoul-18/85.jpg', flex: 'xs12 sm6', height: '400' },
      { src: '../img/event/bodyandsoul-18/86.jpg', flex: 'xs12 sm6', height: '400' },
      { src: '../img/event/bodyandsoul-18/87.jpg', flex: 'xs12 sm6', height: '400' },
      { src: '../img/event/bodyandsoul-18/88.jpg', flex: 'xs12 sm6', height: '400' },
      { src: '../img/event/bodyandsoul-18/89.jpg', flex: 'xs12 sm6', height: '400' },
      { src: '../img/event/bodyandsoul-18/90.jpg', flex: 'xs12 sm3', height: '400' }
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

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
                {{ image.hover }}
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
      { src: './img/music/cage1.jpg', flex: 'xs12 sm6 md3', height: '400', hover: 'Cage The Elephant' },
      { src: './img/music/cage2.jpg', flex: 'xs12 sm6 md3', height: '400', hover: 'Cage The Elephant' },
      { src: './img/music/cage3.jpg', flex: 'xs12 sm12 md6', height: '400', hover: 'Cage The Elephant' },
      { src: './img/music/cage4.jpg', flex: 'xs12 sm12 md6', height: '300', hover: 'Cage The Elephant' },
      { src: './img/music/declan1.jpg', flex: 'xs12 sm12 md6', height: '300', hover: 'Declan McKenna' },
      { src: './img/music/unnamed.jpg', flex: 'xs12 sm6 md3', height: '400', hover: 'Unnamed Artist' },
      { src: './img/music/felonies1.jpg', flex: 'xs12 sm12 md6', height: '400', hover: 'The Felonies' },
      { src: './img/music/felonies2.jpg', flex: 'xs12 sm6 md3', height: '400', hover: 'The Felonies' },
      { src: './img/music/felonies3.jpg', flex: 'xs12 sm6 md3', height: '400', hover: 'The Felonies' },
      { src: './img/music/felonies4.jpg', flex: 'xs12 sm6 md3', height: '400', hover: 'The Felonies' },
      { src: './img/music/kandce1.jpg', flex: 'xs12 sm12 md6', height: '400', hover: 'Kandce' },
      { src: './img/music/kandce2.jpg', flex: 'xs12 sm6 md3', height: '400', hover: 'Kandce' },
      { src: './img/music/kandce3.jpg', flex: 'xs12 sm12 md6', height: '400', hover: 'Kandce' },
      { src: './img/music/kandce4.jpg', flex: 'xs12 sm6 md3', height: '400', hover: 'Kandce' },
      { src: './img/music/kandce5.jpg', flex: 'xs12 sm12 md6', height: '400', hover: 'Kandce' },
      { src: './img/music/kandce6.jpg', flex: 'xs12 sm12 md6', height: '400', hover: 'Kandce' },
      { src: './img/music/mkay1.jpg', flex: 'xs12 sm6 md3', height: '400', hover: 'M.Kay' },
      { src: './img/music/mkay2.jpg', flex: 'xs12 sm6 md3', height: '400', hover: 'M.Kay' },
      { src: './img/music/mkay3.jpg', flex: 'xs12 sm12 md6', height: '400', hover: 'M.Kay' },
      { src: './img/music/jeremyloops1.jpg', flex: 'xs12 sm6 md3', height: '400', hover: 'Jeremy Loops' },
      { src: './img/music/jeremyloops2.jpg', flex: 'xs12 sm12 md6', height: '400', hover: 'Jeremy Loops' },
      { src: './img/music/jeremyloops3.jpg', flex: 'xs12 sm6 md3', height: '400', hover: 'Jeremy Loops' },
      { src: './img/music/jeremyloops4.jpg', flex: 'xs12 sm6 md3', height: '400', hover: 'Jeremy Loops' },
      { src: './img/music/jeremyloops5.jpg', flex: 'xs12 sm12 md6', height: '400', hover: 'Jeremy Loops' },
      { src: './img/music/jeremyloops6.jpg', flex: 'xs12 sm6 md3', height: '400', hover: 'Jeremy Loops' },
      { src: './img/music/jeremyloops7.jpg', flex: 'xs12 sm6 md3', height: '400', hover: 'Jeremy Loops' },
      { src: './img/music/jeremyloops8.jpg', flex: 'xs12 sm6 md3', height: '400', hover: 'Jeremy Loops' },
      { src: './img/music/jeremyloops9.jpg', flex: 'xs12 sm6 md3', height: '400', hover: 'Jeremy Loops' }
    ]
  })
}
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .6;
  position: absolute;
  width: 100%;
}
</style>

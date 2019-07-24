<template>
  <v-container grid-list-md>
    <v-layout row wrap justify-center>
      <vimeo-player ref="player" video-id="309738408" @ready="onReady"></vimeo-player>
      <vimeo-player ref="player" video-id="312725427" @ready="onReady"></vimeo-player>
    </v-layout>
	</v-container>
</template>
<script>

export default {
  data: () => ({
    height: 500,
    options: {},
    playerReady: false
  }),
  methods: {
    onReady () {
      this.playerReady = true
    },
    play () {
      this.$refs.player.play()
    },
    stop () {
      this.$refs.player.stop()
    }
  }
}
</script>

<style>

</style>

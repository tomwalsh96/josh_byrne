<template>
  <v-container>

    <v-toolbar app height="100px">
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <v-btn large flat router :to="'/'"><h1 class="display-2 font-weight-bold">JOSH BYRNE</h1></v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-md-and-down">
        <v-btn flat router :to="'/music'">Music</v-btn>
        <v-btn flat router :to="'/event'">Event</v-btn>
        <v-btn flat router :to="'/festival'">Festival</v-btn>
        <v-btn flat router :to="'/moving-image'">Moving Image</v-btn>
        <v-btn flat router :to="'/people'">People</v-btn>
        <v-btn flat router :to="'/place'">Place</v-btn>
        <v-btn flat router :to="'/contact'">Contact</v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-toolbar-side-icon class="hidden-lg-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>

    </v-toolbar>

    <v-navigation-drawer v-model="drawer" absolute temporary right>
      <v-list>
        <v-list-tile router :to="'/music'">
          <v-list-tile-content>Music</v-list-tile-content>
        </v-list-tile>
        <v-list-tile router :to="'/event'">
          <v-list-tile-content>Event</v-list-tile-content>
        </v-list-tile>
        <v-list-tile router :to="'/festival'">
          <v-list-tile-content>Festival</v-list-tile-content>
        </v-list-tile>
        <v-list-tile router :to="'/moving-image'">
          <v-list-tile-content>Moving Image</v-list-tile-content>
        </v-list-tile>
        <v-list-tile router :to="'/people'">
          <v-list-tile-content>People</v-list-tile-content>
        </v-list-tile>
        <v-list-tile router :to="'/place'">
          <v-list-tile-content>Place</v-list-tile-content>
        </v-list-tile>
        <v-list-tile router :to="'/contact'">
          <v-list-tile-content>Contact</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    </v-container>
</template>

<script>
export default {
  data: () => ({
    drawer: false
  })
}
</script>

<style>

</style>
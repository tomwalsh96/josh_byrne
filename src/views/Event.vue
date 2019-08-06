<template>
  <v-container grid-list-md>

    <h1>Festivals</h1>
    <v-layout row wrap>

      <v-flex xs12 sm6>
        <v-card router :to="'/event/vantastival-18'">
          <v-img
            class="white--text"
            height="200px"
            src="../img/event/vantastival-18/14.jpg"
          >
          </v-img>
          <v-card-title>
            <div>
              <span class="headline">Vantastival '18</span><br>
              <span class="grey--text">Beaulieu House • County Louth, Ireland</span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6>
        <v-card router :to="'/event/life-18'">
          <v-img
            class="white--text"
            height="200px"
            src="../img/event/life-18/1.jpg"
          >
          </v-img>
          <v-card-title>
            <div>
              <span class="headline">Life '18</span><br>
              <span class="grey--text">-------------------</span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6>
        <v-card router :to="'/event/bodyandsoul-18'">
          <v-img
            class="white--text"
            height="200px"
            src="../img/event/bodyandsoul-18/3.jpg"
          >
          </v-img>
          <v-card-title>
            <div>
              <span class="headline">Body and Soul '18</span><br>
              <span class="grey--text">Ballinlough Castle • County Westmeath, Ireland</span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>

    </v-layout>

    <h1 class="mt-5">Nightlife</h1>

    <v-layout row wrap>

      <v-flex xs12 sm6>
        <v-card router :to="'/event/bodyandsoul-18'">
          <v-img
            class="white--text"
            height="200px"
            src="../img/event/bodyandsoul-18/3.jpg"
          >
          </v-img>
          <v-card-title>
            <div>
              <span class="headline">-------------------</span><br>
              <span class="grey--text">-------------------</span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>

    </v-layout>
  </v-container>
</template>
<script>
export default {
  data: () => ({

  })
}
</script>

<style>

</style>

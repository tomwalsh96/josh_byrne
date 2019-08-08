<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12>
        <v-flex xs12 text-xs-center>
          <h3>byrne369@gmail.com</h3>
        </v-flex>
        <v-container>
          <v-layout>
            <v-spacer></v-spacer>
            <a :href="'//www.instagram.com/notjoshbyrne'" target="_blank">
            <v-card flat>
              <v-img
                height="50px"
                width="50px"
                src="../img/icons/instagram-logo.png"
              ></v-img>
            </v-card></a>

            <v-spacer></v-spacer>
          </v-layout>
        </v-container>

        <v-form method="post" action="https://www.getform.org/f/d71bd9eb-dcc3-467b-a394-d2d9342c49a8" id="form" v-model="valid">
          <v-container>
            <v-layout>
              <v-flex>
                <v-text-field
                  label="Name"
                  v-model="name"
                  :rules="nameRules"
                  required
                  name="name"
                  solo
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  label="E-mail"
                  v-model="email"
                  :rules="emailRules"
                  required
                  name="mail"
                  solo
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <v-container>
            <v-layout>
              <v-flex xs12>
                <v-text-field
                  label="Subject"
                  v-model="subject"
                  :rules="subjectRules"
                  name="subject"
                  solo
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <v-container>
            <v-layout>
              <v-flex xs12>
                <v-textarea
                  label="Message"
                  v-model="message"
                  name="message"
                  solo
                ></v-textarea>
              </v-flex>
            </v-layout>
          </v-container>
          <v-btn
            :disabled="!valid"
            color="blue"
            @click="submit"
          >
            Submit
          </v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    valid: false,

    name: '',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => v.length <= 20 || 'Name must be less than 20 characters'
    ],

    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
    ]
  }),
  methods: {
    submit () {
      // eslint-disable-next-line
      form.submit()
    }
  }
}
</script>

<style>

</style>

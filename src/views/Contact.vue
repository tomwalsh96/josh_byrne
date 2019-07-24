<template>
  <v-container grid-list-md>
		<v-layout row wrap>
      <v-flex xs12>
        <v-flex xs12 text-xs-center mb-2>
          <h3>Email: byrne369@gmail.com (also add social links here?)</h3>
        </v-flex>
        <v-form>
          <v-container>
            <v-layout>
              <v-flex xs6 >
                <v-text-field
                  v-model="firstname"
                  label="First name"
                  solo
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs6>
                <v-text-field
                  v-model="lastname"
                  label="Last name"
                  solo
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model="email"
                  label="E-mail"
                  solo
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <v-container>
            <v-layout>
              <v-flex xs12>
                <v-text-field
                  v-model="subject"
                  label="Subject"
                  solo
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <v-container>
            <v-layout>
              <v-flex xs12>
                <v-textarea
                  v-model="message"
                  label="Message"
                  solo
                  required
                ></v-textarea>
              </v-flex>
            </v-layout>
          </v-container>
          <v-btn
            :disabled="!valid"
            color="grey"
            @click="validate"
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
    form: {
      firstname: null,
      lastname: null,
      email: null,
      subject: null,
      message: null
    }
  })
}
</script>

<style>

</style>

Vue.component('app-postdata', {
  data() {
    return {
      msg: '',
      input: {
        text: "",
      },
      valid: true,
    }
  },
  methods: {
    postData() {
      const username = localStorage.getItem("username");
      // Get the current datetime in 'YYYY-MM-DD HH:MM:SS' format
      const currentDatetime = new Date().toISOString().slice(0, 19).replace('T', ' ');

      if (!username) {
        this.msg = "Error: User is not logged in.";
        return;
      }

      // POST request using fetch with error handling
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: this.input.text,
          username: username,
          datetime: currentDatetime,
        })
      };

      fetch("resources/apis.php/", requestOptions)
        .then(response => {
          // Check if the response is not OK (status code is not in the range 200-299)
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          // Ensure the response is JSON
          return response.json();
        })
        .then(data => {
          if (data.success) {
            this.msg = "Post submitted successfully.";
            this.input.text = ""; // Clear the text input
          } else {
            this.msg = "Error: " + data.message;
          }
        })
        .catch(error => {
          console.error("Error in postData:", error);
          this.msg = "Error: " + error;
        });
    }
  },
  // define the template for the component
  template: `
    <v-row>
      <v-col class="center" cols="12" md="6">
        <v-card class="mx-auto" max-width="90%">
          <v-card-title>
            <h2> Send Message </h2>
          </v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field v-model="input.text" label="Message" required></v-text-field>
              <v-btn :disabled="!valid" color="success" class="mr-4" @click="postData()">Post</v-btn>
            </v-form>
            <p>{{msg}}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  `
});

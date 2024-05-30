Vue.component('app-putdata', {
  template: `
  <!-- Updating mySQL Table With Name as Key -->
  <v-row>
    <v-col cols="12" md="6 ">

      <v-card class="mx-auto" max-width="90%">
        <v-card-text>
          <!-- Input -->
          <v-form name="myForm2" class="form-horizontal">
            <v-text-field label="Date Time" v-model="datetime2" />
            </v-text-field>
            <v-text-field label="Text" v-model="text2" />
            </v-text-field>

            <v-btn depressed v-on:click="putData(datetime2, text2)" color="primary">
              Update
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>

    </v-col>
    <!-- Output -->
    <v-col cols="12" md="6">
      <v-card>
        <v-card-text>
          <p>Output Message : {{msg}}</p>
          <p>Status Date Time: {{statusVal}}</p>
          <p>Status: {{statusText}}</p>
          <p>Response Headers: {{headers}}</p>
        </v-card-text>
      </v-card>
    </v-col>

  </v-row>
     `,
     //variable initialization
    data: function() {
      return {
        datetime2: '',
        text2: '',
        msg: '',
        statusVal: '',
        statusText: '',
        headers: '',
      }
    },
    methods: {
      putData: function(datetime, text) {
        var username = localStorage.getItem("username");
        if (!username) {
          this.msg = "Error: User is not logged in.";
          return;
        }

        var putSQLApiURL = 'resources/apis.php/datetime/' + datetime + '/username/' + username;

        var self = this;
        // POST request using fetch with error handling
        const requestOptions = {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            text: text,
            username: username,
            datetime: datetime
          })
        };

        fetch(putSQLApiURL, requestOptions)
          .then(response => {
            return response.json();
          })
          .then(data => {
            self.msg = "successful";
          })
          .catch(error => {
            self.err = error;
          });
      }
    }
})

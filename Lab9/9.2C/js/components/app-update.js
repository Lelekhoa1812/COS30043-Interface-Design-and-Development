//creating component for updating data
Vue.component('app-putdata', {
  template: `
  <!-- Updating mySQL Table With Name as Key -->
  <v-row>
    <v-col cols="12" md="6 ">

      <v-card class="mx-auto" max-width="90%">
        <v-card-text>
          <!-- Input -->
          <v-form name="myForm2" class="form-horizontal">
            <v-text-field label="Code" v-model="code2" />
            </v-text-field>
            <v-text-field label="Description" v-model="desc2" />
            </v-text-field>
            <v-text-field label="cp" v-model="cp2" />
            </v-text-field>
	    <v-text-field label="Type" v-model="type2" />
            </v-text-field>


            <v-btn depressed v-on:click="putData(code2, desc2, cp2, type2)" color="primary">
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
          <p>Status Code: {{statusVal}}</p>
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
        code2: '',
        desc2: '',
	cp2: '',
	type2: '',
        msg: '',
        statusVal: '',
        statusText: '',
        headers: '',
      }
    },
    methods: {

    putData: function(code, desc, cp, type) {

      var putSQLApiURL = 'resources/apis.php/code/' + code;


      var self = this;
      // POST request using fetch with error handling
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          code: code,
          desc: desc,
	  cp: cp,
	  type: type
        })
      };

		fetch(putSQLApiURL, requestOptions)
		.then( response =>{
		  //turning the response into the usable data
		  return response.json( );
		})
		.then( data =>{
		  //This is the data you wanted to get from url
		  self.msg="successful";
		})
		.catch(error => {
		  self.err=error
		});

    }

    }
  })

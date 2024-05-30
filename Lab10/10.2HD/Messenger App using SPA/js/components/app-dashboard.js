const Dashboard = {
  // defining data to be used in the component
  data: function() {
    return {
      tab: null,
      items: [
        'Chat Box', 'Send Message', 'Edit Message', 'Delete Message',
      ]
    }

  },

  // define the template for the component
  template: `
  <div id="dashboard">

  <v-card>
     <v-card-title class="text-center justify-center py-6">
       <h1 class="font-weight-bold display-3 basil--text">
         Dashboard
       </h1>
     </v-card-title>
     <v-card-text>
     <v-tabs
       v-model="tab"
       background-color="transparent"
       color="basil"
       grow
     >
       <v-tab
         v-for="item in items"
         :key="item"
       >
         {{ item }}
       </v-tab>
     </v-tabs>

     <v-tabs-items v-model="tab">
       <v-tab-item
         v-for="item in items"
         :key="item"
       >
         <v-card
           flat
         >
          <app-readmysql v-if="item=='Chat Box'"></app-readmysql>

          <!-- Show insert  -->
        		<app-postdata v-if="item=='Send Message'"></app-postdata>

            <app-putdata v-if="item=='Edit Message'"></app-putdata>

            <app-deldata v-if="item=='Delete Message'"></app-deldata>

         </v-card>
       </v-tab-item>
     </v-tabs-items>

     </v-card-text>
   </v-card>

    </div>
    `
}

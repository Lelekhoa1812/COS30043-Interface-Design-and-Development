const app = Vue.createApp({});

// Menu's components
app.component("mymenu", {
  props: ["menu"],
  template:
    `
    <ul>
      <li v-for="dish in menu">{{dish}}</li>
    </ul>
    `,
});

app.mount("#app");

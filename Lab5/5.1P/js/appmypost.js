const app = Vue.createApp({ });
app.component("app-mypost", {
  data() {
    return {
      statPosts: [],
      strStatus: ""
    };
  },
  template: `
    <div>
      <label for="strStatus">Status</label>
      <input
        type="text"
        id="strStatus"
        v-model="strStatus"
      />
      <button @click="add">Post</button>
      <ul>
        <li v-for="(s, index) in statPosts" :key="index">
          {{ s }}<button @click="remove(index)">delete</button>
        </li>
      </ul>
    </div>
  `,
  methods: {
    add() {
      this.statPosts.push(this.strStatus);
    },
    remove(index) {
      this.statPosts.splice(index, 1);
    }
  }
});
app.mount("#app");
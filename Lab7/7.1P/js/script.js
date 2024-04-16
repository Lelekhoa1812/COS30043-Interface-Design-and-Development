const app = Vue.createApp({});
app.component('app-readjson', {
    data() {
        return {
            msg: []
        };
    },
    template: `
        <ul>
            <li v-for="m in msg" :key="m.id">
                {{ m.id }} -- {{ m.title }}
            </li>
        </ul>
    `,
    mounted() { 
        var self = this;
        $.getJSON('https://jsonplaceholder.typicode.com/posts', function(data) {
            self.msg = data;
            })
        .fail(function() { alert('getJSON request failed! '); })
      }
})
app.mount('#app');
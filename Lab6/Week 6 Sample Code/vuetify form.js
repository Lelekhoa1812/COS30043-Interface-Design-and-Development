const { createApp } = Vue
const { createVuetify } = Vuetify

const vuetify = createVuetify( )  
const app = createApp({

	data: () => ({
		firstName: '', email: '',
		
		nameRules: [
		  v => !!v || 'Name required',
		  v => (v && v.length <= 10) || 'Name must be less than 10 characters' 
		  ],

		emailRules: [
		  v => !!v || 'E-mail is required',
		  v => /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(v) || 'E-mail must be valid',
		  ]
	})
})

app.use(vuetify)
app.mount('#app')
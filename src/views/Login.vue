<template>
	<v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Вход в личный кабинет</v-toolbar-title>
                <div class="flex-grow-1"></div>
                
              </v-toolbar>
              <v-card-text>
                <v-form ref="form"
    					lazy-validation>
                  <v-text-field
                  	v-model="login"
                  	:error-messages="loginErrors"
                    label="Логин"
                    name="login"
                    prepend-icon="person"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                  	v-model="password"
                  	:error-messages="passwordErrors"
                    id="password"
                    label="Пароль"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                  ></v-text-field>

                </v-form>
                
              </v-card-text>
              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn
                color="primary"
                @click="submit"
                >
            		Войти
            	</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
	import { required } from 'vuelidate/lib/validators'
  export default {
    props: {
      source: String
    },
    data: () => ({
      drawer: null,
      users: [
      			{login: 'student', password: 'sdemo', role: 'student'},
      			{login: 'teacher', password: 'tdemo', role: 'teacher'}
      		 ],
      login: '',
      password: ''
    }),
    methods: {
    	submit () {
    		this.$v.$touch();

            const users = this.users.filter(user => (user.login === this.login) && 
            	(user.password === this.password));

            if(users.length !== 0) {
	            const role = users[0].role; 
	    		this.$router.push("/"+role);
	    	}
            
    	}
    },
    validations: {
    	login: {
    		required,
    		checkLogin: function(login) {
    			const users = this.users.filter(user => user.login === login);
    			return (users.length !== 0);
    		}
    	},
    	password: {
    		required,
    		checkPassword: function(password) {
    			const users = this.users.filter(user => user.password === password &&
    												user.login === this.login);
    			return (users.length !== 0);
    		}
    	}
    },
    computed: {
      loginErrors () {
        const errors = []
        if (!this.$v.login.$dirty) return errors
        !this.$v.login.required && errors.push('Обязательное поле.')
    	!this.$v.login.checkLogin && errors.push('Неверный логин.')
        return errors
      },
      passwordErrors () {
        const errors = []
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.required && errors.push('Обязательное поле.')
    	!this.$v.password.checkPassword && errors.push('Неверный пароль.')
        return errors
      }
    }
  }
</script>
<template lang="">
    <div class="row">
        <div class="col-md-6 mx-auto">
            <h1 class="mb-4">Login Page</h1>
            <div v-if="authFailed" class="alert alert-danger" role="alert">
                <strong>Incorrect password or email</strong>
            </div>
            <form @submit.prevent="submit()">
                <div class="form-group">
                  <label for="email">Email :</label>
                  <input type="email" v-model="user.email" id="email" class="form-control mb-4" placeholder="Your Email">
                  <label for="password">Password :</label>
                  <input type="password" v-model="user.password" id="password" class="form-control mb-4" placeholder="Your Password">
                </div>
                <button class="btn btn-primary form-control">Sign in</button>
            </form>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { mapActions, mapGetters } from 'vuex'
export default {
    name:'Login',
    data(){
        return{
            user :{
                email :'',
                password :'',
            },
            authFailed : false,
        }
    },
    methods:{
        ...mapActions({
            'signIn':'auth/signIn'
        }),
        submit(){
            this.signIn(this.user)
            .then(() => this.$router.replace({name:'Dashboard'}))
            .catch(err => {
                this.authFailed = true
                console.log(err)
            })
        }
    }
}
</script>
<style lang="">
    
</style>
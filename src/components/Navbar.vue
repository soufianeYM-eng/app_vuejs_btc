<template lang="">
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <a class="navbar-brand">API BTC</a>
        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul  class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li v-if="authenticated" class="nav-item active">
                    <router-link class="nav-link" :to="{name:'Dashboard'}">Dashboard</router-link>
                </li>
            </ul>
            <ul  class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li v-if="!authenticated" class="nav-item">
                    <router-link class="nav-link" :to="{name:'About'}">About</router-link>
                </li>
            </ul>
            <ul  class="navbar-nav mr-right mt-2 mt-lg-0">
                <li v-if="!authenticated" class="nav-item">
                    <router-link class="nav-link" :to="{name:'Login'}">Login</router-link>
                </li>
            </ul>
            <ul  class="navbar-nav mr-right mt-2 mb-0 mt-lg-0 text-white">
                <li v-if="authenticated">
                    <p class="nav-link">{{ user.last_name }} {{ user.first_name }}</p>
                </li>
            </ul>
            <ul  class="navbar-nav mr-right mt-2 mt-lg-0">
                <li v-if="authenticated" class="nav-item">
                    <a class="nav-link" @click="signOut">Logout</a>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'Navbar',
    
    methods:{
        ...mapActions({
            'logout' : 'auth/signOut'
        }),
        signOut(){
            this.logout().then(()=>{
                this.$router.replace({name : 'About'})
            })
        }
    },
    computed:{
        ...mapGetters({
            'authenticated':'auth/authenticated',
            'user' : 'auth/user',
        })
    }
}
</script>
<style lang="">
    
</style>
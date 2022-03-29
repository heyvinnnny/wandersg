<template>
    <div>
        <div v-if="error" class="error">{{error.message}}</div>
        <form @submit.prevent='pressed'>
            Register
            <div class="email">
                <input type="email" v-model="email" placeholder="email">
            </div>
            <div class="password">
                <input type="password" v-model="password" placeholder="password">
            </div>
            <button type="submit">Register</button>
        </form>
    </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
    export default {
        methods:{
            async pressed(){
                try {

                const user = firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                console.log(user)
                }catch(err){
                    console.log(err)
                }
            }
        },

        data(){
            return {
                email:"",
                password:"",
                error:''
            }
        }
    }
</script>

<style lang="scss" scoped></style>

import {createApp} from "vue/dist/vue.esm-browser.js";
const app=createApp({
    template:`
    <h1>{{appName}}</h1>
    <h3>hello {{user.name}}</h3>
    `,
    data(){
        return{
            appName:'firstApp',
            user:{
                name:'omar',
                age:24
            }
        }
    }
}).mount('#app')
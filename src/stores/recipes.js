import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useRecipesStore = defineStore('recipes', {
    state: () => ({
        count: 0,
    }),
    actions:{
        increment(){
            this.count++
        },
        decrement(){
            this.count -= 1
        },
        changeValue(num){
            this.count = num
        },
        async getRandomValue(){
            // let url = 'https://dummyjson.com/users'
            // let res =  await axios.get(url)
            // this.count = res.data.users[5].age 

            fetch('https://dummyjson.com/recipes')
            .then(res => res.json())
            .then(console.log);
        }
        
    }
}) 

<template>
  <div class="container">
    <ul class="list">
      <li class="card for-border" v-for="item in paginatedItems" :key="item.id">
          <img class="image" :src='item.image' alt="">
          <h2 class="card-header">{{ item.name }}</h2>
              <p>Difficulty: {{ item.difficulty }}</p>
              <p>Cuisine: {{ item.cuisine }}</p>
              <p>Calories per serving: {{ item.caloriesPerServing }}</p>
              <ul class="list-ings">
                  <li v-for="ingr in item.ingredients">{{ ingr }}</li>
              </ul>
      </li>
    </ul>
   
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
// import { useCounterStore } from '@/stores/CounterStore';

export default {
  setup() {
    

    const items = ref([]);
    const pageSize = 6;
    const currentPage = ref(1);


    const totalPages = computed(() => Math.ceil(items.value.length / pageSize));

    const paginatedItems = computed(() => {
      const startIndex = (currentPage.value - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      return items.value.slice(startIndex, endIndex);
    });

  

    function handlePageChange(pageNumber) {
      currentPage.value = pageNumber;
    }

    onMounted(fetchData);

    return {
      items,
      currentPage,
      totalPages,
      paginatedItems,
      handlePageChange
    };
  }
};
</script>

<style>
  .image{
      width:224px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px
  }
  .list{
      padding: 0;
      display: flex;
      width: 772px;
      flex-wrap: wrap;
      justify-content:space-between;
      list-style: none;
      /* gap: 58px; */
  }
  .card{
      width: 224px;
      /* height: 443px; */
      display: flex;
      flex-direction: column;
      margin-bottom: 58px;
      border-radius: 10px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      margin-bottom: 20px;
  }
  .card p{
      /* width: 0; */
      padding: 5px;
      
      /* height: 0; */
  }
  .card-header{
      height: 50px;
      margin-bottom: 0;
      padding: 5px;
  }
  .for-border{
      margin-right: auto;
      margin-left: auto;
  }
  .container{
      width: 100%;
  }
  .list-ings{
      padding-bottom: 10px;
  }
</style>
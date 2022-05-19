<template>
  <base-layout page-title="All Memories">
  <memories-list :memories="memories"></memories-list>
  </base-layout>
 
</template>
<script>
import memoriesList from '../components/memorie/memoriesList.vue';
import BaseLayout from '../components/BaseLayout.vue';

export default ({
     components:{
     BaseLayout,
     memoriesList,
     },   
    computed:{
      memories(){
        return this.$store.getters.memories;
      }
    },
  
})
</script>


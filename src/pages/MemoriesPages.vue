<template>
  <base-layout page-title="All Memories">
      
  </base-layout>
 
</template>
<script>
import {  } from'@ionic/vue';
import BaseLayout from '../components/BaseLayout.vue';

export default ({
     components:{
     BaseLayout
     },   
    computed:{
      memories(){
        return this.$store.getters.memories;
      }
    },
  
})
</script>


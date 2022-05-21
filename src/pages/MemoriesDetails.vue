<template>
    <base-layout :page-title="loadedMemory ? loadedMemory.title:'loading..'" page-default-back-link="/memories">
    <h2 v-if="!loadedMemory">could not find memory</h2>
    <memory-overview v-else 
    :image="loadedMemory.image" 
    :title="loadedMemory.title"
    :description="loadedMemory.description">
    </memory-overview>
    <h2>Ted Nigga</h2>
    </base-layout>
</template>
<script>
import MemoryOverview from '../components/memorie/MemoryOverview.vue'
export default{
    data(){
     return{
         memoryId: this.$route.params.id,
     }
    },
    components:{
     MemoryOverview
    },
    computed:{
     loadedMemory(){
         return this.$store.getters.memory(this.memoryId);
     }
    },
    // watch:{
    //     $route(currentRoute){
    //       this.memoryId = currentRoute.parms.id;
    //     }
    // }
}

</script>
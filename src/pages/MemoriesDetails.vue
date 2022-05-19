<template>
    <base-layout :page-title="loadedMemory ? loadedMemory.title:'loading..'" page-default-back-link="/memories">
    <h2 v-if="!loadedMemory">could not find memory</h2>
    <h2 v-else>Loaded..</h2>
    <h2>Ted Nigga</h2>
    </base-layout>
</template>
<script>
export default{
    data(){
     return{
         memoryId: this.$route.params.id,
     }
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
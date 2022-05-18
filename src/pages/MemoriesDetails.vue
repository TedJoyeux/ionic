<template>
    <base-layout page-title="Details" page-default-back-link="/memories">
    <h2>Ted Nigga</h2>
    </base-layout>
</template>
<script>
export default{
    data(){
     return{
         memoryId: null,
     }
    },
    computed:{
     loadedMemory(){
         return this.$store.getters.memory(this.memoryId);
     }
    },
    watch:{
        $route(currentRoute){
          this.memoryId = currentRoute.parms.id;
        }
    }
}

</script>
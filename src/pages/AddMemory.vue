<template>
  <base-layout page-title=" Add Memory" page-default-back-link="/memories">
    <create-memory></create-memory>
  </base-layout> 
</template>
<script>
import CreateMemory from '../components/memorie/CreateMemory.vue'
export default{
  components :{
  CreateMemory
  }

}
</script>
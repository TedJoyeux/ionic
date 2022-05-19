<template>
    <ion-list>
     <memory-list-item  v-for="memory in memories" 
     :key='memory.id'
     :memory="memory"
     ></memory-list-item>   
    </ion-list>
</template>
<script>
import { IonList } from '@ionic/vue'
import memoriesListItem from './memoriesListItem.vue'
export default{
    props:['memories'],
     components:{
         IonList,
         memoriesListItem,
     }
}
</script>
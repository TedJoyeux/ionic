<template>
  <base-layout page-title="All Memories">
      <ion-list>
        <ion-item  v-for="memory in memories" :router-link="`/memories/${memory.id}`" :key='memory.id'>
        <ion-thumbnail slot="start">
        <ion-img :src="memory.image"></ion-img>
        </ion-thumbnail>
        <ion-label>
        {{memory.title}}
        </ion-label>
        </ion-item>
      </ion-list>
  </base-layout>
 
</template>
<script>
import { IonList, IonItem,IonImg, IonThumbnail,IonLabel} from'@ionic/vue';
import BaseLayout from '../components/BaseLayout.vue';

export default ({
     components:{
     IonList, 
     IonItem,
     IonThumbnail,
     IonLabel,
     IonImg,
     BaseLayout
     },   
    computed:{
      memories(){
        return this.$store.getters.memories;
      }
    }
})
</script>


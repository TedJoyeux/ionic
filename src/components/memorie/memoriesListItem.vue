<template>
   <ion-item  v-for="memory in memories" :router-link="`/memories/${memory.id}`" :key='memory.id'>
        <ion-thumbnail slot="start">
        <ion-img :src="memory.image"></ion-img>
        </ion-thumbnail>
        <ion-label>
        {{memory.title}}
        </ion-label>
        </ion-item> 
</template>
<script>
import {IonItem, IonThumbnail , IonLabel} from '@ionic/vue'
export default{
   components:{
       IonItem,
       IonThumbnail,
       IonLabel
   }
}
</script>
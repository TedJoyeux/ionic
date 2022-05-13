<template>
  <base-layout page-title="All Memories">
      <ion-list>
        <ion-item router-link="/memories/1">Gentil</ion-item>
        <ion-item>Kazungu</ion-item>
        <ion-item>Bellard</ion-item>
        <ion-item>Nella</ion-item>  
      </ion-list>
  </base-layout>
 
</template>
<script>
import { IonList, IonItem } from'@ionic/vue';
import BaseLayout from '../components/BaseLayout.vue';

export default ({
     components:{
     IonList, 
     IonItem,
     BaseLayout


     }   

})
</script>


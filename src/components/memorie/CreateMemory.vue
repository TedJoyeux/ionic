<template>
      <form class="ion-padding" @submit.prevent="submitForm">
  <ion-list>
    <ion-item>
      <ion-label position="floating">Title</ion-label>
      <ion-input type="text" required v-model="enteredTitle"/>
    </ion-item>
    <ion-item>
      <ion-label position="floating">ImageUrl</ion-label>
      <ion-input type="url" required v-model="enteredImageUrl"/>
    </ion-item>
    <ion-item>
      <ion-label position="floating">Description</ion-label>
      <ion-textarea rows="5" v-model="entereddescription"></ion-textarea>
    </ion-item> 
     <ion-button type="submit" expand="full" @save-memory="saveMemory">Save</ion-button>
  </ion-list>
  </form>
</template>
<script>
import { IonList, IonLabel, IonInput, IonItem, IonTextarea, IonButton } from '@ionic/vue'

export default {
    emits:['save-memory'],
    components :{
    IonList,
    IonButton,
    IonItem,
    IonInput,
    IonTextarea,
    IonLabel
  },
  data(){
      return {
          enteredTitle:'',
          enteredImageUrl:'',
          entereddescription:'',
      }
  },
  submitForm(){
      const memoryData = {
          title:this.enteredTitle,
          ImageUrl:this.enteredImageUrl,
          description:this.entereddescription,
      };
      this.$emit('save-memory', memoryData);
  }
}
</script>
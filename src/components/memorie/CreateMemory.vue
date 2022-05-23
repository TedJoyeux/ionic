<template>
      <form>
  <ion-list>
    <ion-item>
      <ion-label position="floating">Title</ion-label>
      <ion-input type="text" required/>
    </ion-item>
    <ion-item>
      <ion-label position="floating">ImageUrl</ion-label>
      <ion-input type="url" required/>
    </ion-item>
    <ion-item>
      <ion-label position="floating">Description</ion-label>
      <ion-textarea rows="5"></ion-textarea>
    </ion-item> 
     <ion-button expand="full">Save</ion-button>
  </ion-list>
  </form>
</template>
<script>
import { IonList, IonLabel, IonInput, IonItem, IonTextarea, IonButton } from '@ionic/vue'

export default {
    components :{
    IonList,
    IonButton,
    IonItem,
    IonInput,
    IonTextarea,
    IonLabel
  }
}
</script>
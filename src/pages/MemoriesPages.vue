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
     IonImg,
     IonThumbnail,
     IonLabel,
     BaseLayout


     },   
     data(){
       return{
         memories:[
           {
           id :'m1',
           image:'https://www.google.com/search?q=photo+de+park&tbm=isch&ved=2ahUKEwjNh67c1tz3AhUCihoKHTctB60Q2-cCegQIABAA&oq=photo+de+park&gs_lcp=CgNpbWcQAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBggAEAgQHjIGCAAQCBAeMgYIABAIEB4yBggAEAgQHjIGCAAQCBAeMgYIABAIEB46BAgjECdQ3wdYpkJgglZoAHAAeACAAfoZiAHjZ5IBAzktNZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=6Gl-Ys3zLIKUarfanOgK&rlz=1C1CHZN_frBI945BI947#imgrc=oWo88WU6dnKP0M',
           title :'a good travel',
           description: 'we saw the gorilla in park'
           },
             {
           id :'m2',
           image:'https://www.google.com/search?q=photo+voyage&rlz=1C1CHZN_frBI945BI947&sxsrf=ALiCzsa0BhxKounqb-m3LVfnTU0P_i4M9w:1652450717772&tbm=isch&source=iu&ictx=1&vet=1&fir=szjBA0K8WP9peM%252CX9C5OkxZ0yB4kM%252C_%253BpdCggjht9prKpM%252CHRD_LzZPToGb8M%252C_%253BSL4HL-rj4n5GDM%252C3zOHoLJEie1iOM%252C_%253B3G9YqVBy_MApdM%252CMozjce3cSL91nM%252C_%253BjxSM3bWx11BgKM%252CMRfQYVmm-idD9M%252C_%253B3X_HundqkOL8TM%252CX9C5OkxZ0yB4kM%252C_%253BqMLRJrH5iz1CIM%252CGisQ80eaDbxB_M%252C_%253BMXkX1nxv7p-1XM%252CX9C5OkxZ0yB4kM%252C_%253Bc0pCP_-ZUUiepM%252CVueXeMDMbhRuRM%252C_%253BwYAw7ThRP-n31M%252CMozjce3cSL91nM%252C_%253BuLU3t_CYhrv4IM%252C8bYvyXq-kc80DM%252C_%253BwW0xsjTj9JAxrM%252CZJf3v7XEPHcbmM%252C_&usg=AI4_-kTqCTDHNHTqEfEQMKacrxXnBNmwFw&sa=X&ved=2ahUKEwitgarQ0tz3AhVESPEDHcFDCE4Q9QF6BAgREAE#imgrc=3G9YqVBy_MApdM',
           title :'a surf in ocean',
           description: 'he was surfering everyday on beach'
           },
             {
           id :'m3',
           image:'https://www.google.com/search?q=photo+voyage&rlz=1C1CHZN_frBI945BI947&sxsrf=ALiCzsa0BhxKounqb-m3LVfnTU0P_i4M9w:1652450717772&tbm=isch&source=iu&ictx=1&vet=1&fir=szjBA0K8WP9peM%252CX9C5OkxZ0yB4kM%252C_%253BpdCggjht9prKpM%252CHRD_LzZPToGb8M%252C_%253BSL4HL-rj4n5GDM%252C3zOHoLJEie1iOM%252C_%253B3G9YqVBy_MApdM%252CMozjce3cSL91nM%252C_%253BjxSM3bWx11BgKM%252CMRfQYVmm-idD9M%252C_%253B3X_HundqkOL8TM%252CX9C5OkxZ0yB4kM%252C_%253BqMLRJrH5iz1CIM%252CGisQ80eaDbxB_M%252C_%253BMXkX1nxv7p-1XM%252CX9C5OkxZ0yB4kM%252C_%253Bc0pCP_-ZUUiepM%252CVueXeMDMbhRuRM%252C_%253BwYAw7ThRP-n31M%252CMozjce3cSL91nM%252C_%253BuLU3t_CYhrv4IM%252C8bYvyXq-kc80DM%252C_%253BwW0xsjTj9JAxrM%252CZJf3v7XEPHcbmM%252C_&usg=AI4_-kTqCTDHNHTqEfEQMKacrxXnBNmwFw&sa=X&ved=2ahUKEwitgarQ0tz3AhVESPEDHcFDCE4Q9QF6BAgREAE#imgrc=3G9YqVBy_MApdM',
           title :'a good travel',
           description: 'we saw the gorilla in park'
           },
             {
           id :'m4',
           image:'https://www.google.com/search?q=photo+voyage&rlz=1C1CHZN_frBI945BI947&sxsrf=ALiCzsa0BhxKounqb-m3LVfnTU0P_i4M9w:1652450717772&tbm=isch&source=iu&ictx=1&vet=1&fir=szjBA0K8WP9peM%252CX9C5OkxZ0yB4kM%252C_%253BpdCggjht9prKpM%252CHRD_LzZPToGb8M%252C_%253BSL4HL-rj4n5GDM%252C3zOHoLJEie1iOM%252C_%253B3G9YqVBy_MApdM%252CMozjce3cSL91nM%252C_%253BjxSM3bWx11BgKM%252CMRfQYVmm-idD9M%252C_%253B3X_HundqkOL8TM%252CX9C5OkxZ0yB4kM%252C_%253BqMLRJrH5iz1CIM%252CGisQ80eaDbxB_M%252C_%253BMXkX1nxv7p-1XM%252CX9C5OkxZ0yB4kM%252C_%253Bc0pCP_-ZUUiepM%252CVueXeMDMbhRuRM%252C_%253BwYAw7ThRP-n31M%252CMozjce3cSL91nM%252C_%253BuLU3t_CYhrv4IM%252C8bYvyXq-kc80DM%252C_%253BwW0xsjTj9JAxrM%252CZJf3v7XEPHcbmM%252C_&usg=AI4_-kTqCTDHNHTqEfEQMKacrxXnBNmwFw&sa=X&ved=2ahUKEwitgarQ0tz3AhVESPEDHcFDCE4Q9QF6BAgREAE#imgrc=3G9YqVBy_MApdM',
           title :'a good travel',
           description: 'we saw the gorilla in park'
           },
         ]
       }
     }

})
</script>


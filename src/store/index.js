import {createStore} from 'vuex';

const store = createStore({
    state(){
        return{
            memories:[
                {
                id :'m1',
                image:'https://image.newyorkcity.fr/wp-content/uploads/2013/02/Central-Park-Sheep-Meadow-700x400.jpeg',
                title :'a walking in park',
                description: 'we saw the gorilla in park'
                },
                  {
                id :'m2',
                image:'data:image/jpeg;base64,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',
                title :'a surf in ocean',
                description: 'he was surfering everyday on beach'
                },
                  {
                id :'m3',
                image:'https://st.depositphotos.com/1003723/3316/i/600/depositphotos_33167371-stock-photo-girl-on-the-wooden-jetty.jpg',
                title :'a good travel',
                description: 'we saw the gorilla in park'
                },
                  {
                id :'m4',
                image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJWsJRRI3v0hJqi0k5SeoQy48HbU_3CrNvKoO1OHqyCZp0kSCb5dpR5ur8t3sRYrHPtWc&usqp=CAU',
                title :'a travelling in phillipines',
                description: 'we saw the gorilla in park'
                },
              ]
        };
   
    },
    mutations:{
    AddMemory(state, memoryData){
      const newMemory = {
        id : new Date().toISOString(),
        title: memoryData.title,
        image: memoryData.imageUrl,
        description: memoryData.description,
      };
      state.memories.unshift(newMemory)
    }
    },
    actions:{
      AddMemory(context,memoryData){
        context.commit('AddMemory', memoryData)
        
      }

    },
    getters:{
        memories(state){
            return state.memories;
        },
        memory(state){
            return (memoryId) =>{
                return state.memories.find((memory)=> memory.id === memoryId);
            }
        }
    },
});
export default store;
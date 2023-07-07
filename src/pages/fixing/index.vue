<template>

<div> <h2> 정비작업 인원현황</h2> </div><br>                 
<div v-for="worker in workers" :key="worker.id" class="card mt-2">
<div class="card-body">
  {{worker.subject}}
</div>
</div>

</template>

<script>

import {ref} from 'vue';                                
export default {
 setup(){
  const worker = ref('');
  const workers = ref([
  {subject:'4/17 김기동 출근'},
  {subject:'4/17 김준일 출근'},
  {subject:'4/17 이정호 출근'},
]);                               

return {                                                                                          
  worker,   
  workers,                       
 }
 }
}

</script>

<style>

h2 {
    text-align:center;
    font-weight : 800;
    color : blue;
}
.card-body {
    text-align:left;
}

</style>
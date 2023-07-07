<template>

<div> <h2> 육상작업 인원현황</h2> </div><br>                 
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
  {subject:'4/17 정동기 출근'},
  {subject:'4/17 김성민 출근'},
  {subject:'4/17 조수행 15호'},
  {subject:'4/17 박덕섭 로더'},
  {subject:'4/17 이경철 정비'},
  {subject:'4/17 최귀식 정비'},
  {subject:'4/17 이경상 정비'},
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
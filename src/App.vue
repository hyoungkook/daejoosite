<template>

<ul class="nav nav-tabs" style="background-color: #009900;">
  <li class="nav-item">
    <router-link class="nav-link active" to="/">HOME</router-link>
  </li>

  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" style="color:#FFFFFF;" data-toggle="dropdown" href="#" role="button" aria-expanded="false">작업인원현황</a>
    <div class="dropdown-menu">
      <router-link class="dropdown-item" to="/buddhistceremony">하역인원</router-link>
      <router-link class="dropdown-item" to="/members">육상인원</router-link>
      <router-link class="dropdown-item" to="/fixing">정비인원</router-link>
    </div>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" style="color:#FFFFFF;" data-toggle="dropdown" href="#" role="button" aria-expanded="false">안전작업표준</a>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="https://docs.google.com/presentation/d/16drljIKQ6mmh5_srFGSssP0Ni5ptv2P-/edit#slide=id.p5" target="_blank">하역</a>
      <a class="dropdown-item" href="https://docs.google.com/presentation/d/1_BIkzSXYfPtumS7BMk4sK06L06-4FhKl/edit#slide=id.p24" target="_blank">상차및운송</a>
      <a class="dropdown-item" href="https://docs.google.com/presentation/d/1ZsRmGDpfrlTUjvWZ-jmgcZqJK6UQaNbP/edit#slide=id.p32" target="_blank">하은기업</a>
      <a class="dropdown-item" href="https://docs.google.com/presentation/d/1WwPGP7P7WROW800bj29M6T5SXklmEFRO/edit#slide=id.p1" target="_blank">정일로지스틱</a>
    </div>
  </li>
</ul>

<router-view/>


</template>

<script>
export default {                                                         
  }   


</script>

<style>


</style>


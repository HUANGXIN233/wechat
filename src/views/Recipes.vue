<template>
  <div class="recipes">
    <h1 class="recipes-title">甜甜圈幼儿园</h1>
    <div class="recipes-data">
      <p>{{date}}</p>
      <p>周五食谱</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      date:'',
    }
  },
  mounted() {
    this.date = new Date().getFullYear()+'-'+new Date().getMonth()+'-'+ new Date().getDate()
  },
}
</script>

<style lang="less">
.recipes{
  .recipes-title{
    margin-top: 0.16rem;
    text-align: center;
    font-size:22px;
  }
  .recipes-data{
    color: #607fa6;
    font-size: 14px;
    margin-top: 0.2rem;
    p{
      float: left;
    }
    :nth-child(1){
      color: #a1a1a1;
      margin-right: 0.25rem;
      margin-left: 0.3rem;
    }
  }
}
</style>

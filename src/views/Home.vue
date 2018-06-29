<template>
  <div class="home">
    <el-row class="demo-autocomplete">
      <el-col :span="12" cl>
        <el-autocomplete
          class="inline-input  home-search"
          v-model="state2"
          :fetch-suggestions="querySearch"
          placeholder="请输入幼儿园名称"
          :trigger-on-focus="false"
          @select="handleSelect"
        ></el-autocomplete>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
name: 'Home',
  data(){
    return{
      name:'这是主页',
        restaurants: [],
        state1: '',
        state2: ''
    }
  },
  methods: {
  querySearch(queryString, cb) {
    var restaurants = this.restaurants;
    var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
    // 调用 callback 返回建议列表的数据
    cb(results);
  },
  createFilter(queryString) {
    return (restaurant) => {
      return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
    };
  },
  loadAll() {
    return[
      {"value":'金太阳幼儿园',"id":'1'},
      {"value":'金毛狮王'}
    ]
  },
  handleSelect(item) {
    this.$router.push({path: '/longing'})
  console.log(item);
  }
 },
  mounted() {
      this.restaurants = this.loadAll();
  }
}
</script>
<style lang="less" >
.home{
  position: relative;
  .son{
    color:blue;
    font-size: 12px;
  }

}
  .el-input__inner{
    border-radius: 35px;
    width: 3.15rem;
    left: 0.3rem;
    top:0.9rem;
    position: absolute;
  }
  .el-input{
    position: static;
    font-size: 14px;
    display: inline-block; 
    width: 100%; 
  }
</style>

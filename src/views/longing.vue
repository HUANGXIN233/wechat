<template>
  <div class="longing">
    <div>请输入密码进入幼儿园</div>
    <el-input v-model="input" type="password" placeholder="请输入密码"></el-input>

    <el-button :plain="true" :showClose="true" @click="open2">确定</el-button>

  </div>
</template>

<script>
export default {
data() {
return{
  input:'123456',
}
},
methods: {
        open2() {
          if (this.input =="123456") {
            this.$router.push({path: '/recipes'})
          }
        }
}
}
</script>

<style lang="less" >
.longing{
  font-size: 14px;
  position: relative;
    .el-input__inner{
      border-radius: 35px;
      width: 3.15rem;
      left: 0.3rem;
      top:0.9rem;
      position: absolute;
    }
    .el-button {
      position: absolute;
      top: 2rem;
      left: 1.3rem;
      width: 1.2rem;
    }
}
</style>



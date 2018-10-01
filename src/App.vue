<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    overflow: scroll;
    overflow-x: hidden;
    overflow-y: hidden;
  }

  #app {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
  }

  /** 所有查询页面el-form标签引用的样式 */
  .search-element-form {
    text-align: center;
    padding-top: 2%;
  }

  /** 所有查询页面按钮引用的样式 */
  .search-element-form .search-element-form-btn {
    padding-top: 1%;
  }
</style>

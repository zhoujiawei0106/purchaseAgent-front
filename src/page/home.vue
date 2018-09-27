<template lang="html">
  <el-container style="height: 100%; border: 1px solid #eee;width: 100%">
    <el-header style="text-align: right; font-size: 30px" height="10%">
      <span style="padding-right: 10px;">王小虎</span>
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>注销</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>

    <el-container>
      <el-aside width="20%" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>导航三</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-main width="20%">
        <el-table :data="tableData">
          <el-table-column prop="date" label="日期" width="140">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址">
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
    <el-footer height="3%" width="100%" style="text-align: center; font-size: 12px">这是我的脚</el-footer>
  </el-container>
</template>

<script>
  export default {
    components: {},
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    },
    methods: {
      //折叠导航栏
      collapseFun: function () {
        this.collapsed = !this.collapsed;
      },
      showMenu(i, status) {
        this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-' + i)[0].style.display = status ? 'block' : 'none';
      },
      //退出登录
      logoutFun: function () {
        var _this = this;
        this.$confirm('确认退出吗?', '提示', {
          //type: 'warning'
        }).then(() => {
          sessionStorage.removeItem('user');
          _this.$router.push('/login');
        }).catch(() => {

        });


      },
    },
    mounted() {
      var user = sessionStorage.getItem('user');
      if (user) {
        user = JSON.parse(user);
        this.sysUserName = user.username || '';
      }
    }
  }
</script>

<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
  /*.container {*/
    /*position: absolute;*/
    /*top: 0;*/
    /*bottom: 0;*/
    /*width: 100%;*/
    /*.header {*/
    /*height: 60px;*/
    /*line-height: 60px;*/
    /*background: #bbdbfb;*/
    /*color: #fff;*/
    /*.userinfo {*/
    /*text-align: right;*/
    /*padding-right: 35px;*/
    /*float: right;*/
    /*.userinfo-inner {*/
    /*cursor: pointer;*/
    /*color: #fff;*/
    /*}*/
    /*}*/
    /*.logo {*/
    /*height: 60px;*/
    /*font-size: 22px;*/
    /*padding-left: 20px;*/
    /*padding-right: 20px;*/
    /*border-color: rgba(238,241,146,0.3);*/
    /*border-right-width: 1px;*/
    /*border-right-style: solid;*/
    /*}*/
    /*.logo-width {*/
    /*width: 230px;*/
    /*}*/
    /*.logo-collapse-width {*/
    /*width: 60px;*/
    /*}*/
    /*.tools {*/
    /*padding: 0 23px;*/
    /*width: 14px;*/
    /*height: 60px;*/
    /*line-height: 60px;*/
    /*cursor: pointer;*/
    /*}*/
    /*}*/
    /*.main {*/
    /*display: flex;*/
    /*position: absolute;*/
    /*top: 60px;*/
    /*bottom: 0;*/
    /*overflow: hidden;*/
    /*aside {*/
    /*flex: 0 0 230px;*/
    /*width: 230px;*/
    /*.el-menu {*/
    /*height: 100%;*/
    /*}*/
    /*.collapsed {*/
    /*width: 60px;*/
    /*.item {*/
    /*position: relative;*/
    /*}*/
    /*.submenu {*/
    /*position: absolute;*/
    /*top: 0;*/
    /*left: 60px;*/
    /*z-index: 99999;*/
    /*height: auto;*/
    /*display: none;*/
    /*}*/
    /*}*/
    /*}*/
    /*.menu-collapsed {*/
    /*flex: 0 0 60px;*/
    /*width: 60px;*/
    /*}*/
    /*.menu-expanded {*/
    /*flex: 0 0 230px;*/
    /*width: 230px;*/
    /*}*/
    /*.content-container {*/
    /*flex: 1;*/
    /*overflow-y: scroll;*/
    /*padding: 20px;*/
    /*.breadcrumb-container {*/
    /*.title {*/
    /*width: 200px;*/
    /*float: left;*/
    /*color: #475669;*/
    /*}*/
    /*.breadcrumb-inner {*/
    /*float: right;*/
    /*}*/
    /*}*/
    /*.content-wrapper {*/
    /*background-color: #fff;*/
    /*box-sizing: border-box;*/
    /*}*/
    /*}*/
    /*}*/
  /*}*/
</style>

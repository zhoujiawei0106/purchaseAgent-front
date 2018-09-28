<template lang="html">
  <el-container style="height: 100%; border: 1px solid #eee;width: 100%">
    <el-header style="text-align: right;" height="10%">
      <span style="font-size: 16px;">王小虎</span>
      <el-dropdown>
        <i class="el-icon-caret-bottom" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item @click.native="logout">注销</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>

    <el-container>
      <el-aside style="background-color: rgb(238, 241, 246)" ref="leftSide">
        <el-button plain icon="el-icon-d-arrow-left" @click="collapseMenu" style="margin-bottom: 3px; margin-top: 3px; margin-left: 85%;" size="small"></el-button>
        <!--<el-radio-group v-model="isCollapse" style="margin-bottom: 5px;">-->
          <!--<el-radio-button :label="false">展开</el-radio-button>-->
          <!--<el-radio-button :label="true">收起</el-radio-button>-->
        <!--</el-radio-group>-->
        <el-menu unique-opened :collapse="isCollapse" class="el-menu-vertical-demo">
          <el-submenu v-for="menu in menus" :key="menu.id" :index="menu.id">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">{{ menu.name }}</span>
            </template>
            <el-menu-item-group>
              <router-link to="/home/haha" tag="li">
                <el-menu-item v-for="subMenu in menu.subMenus" :key="subMenu.id" :index="subMenu.id">{{ subMenu.name }}</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-main width="85%" ref="rightSide">
        <router-view></router-view>
      </el-main>
    </el-container>
    <el-footer height="3%" width="100%" style="text-align: center; font-size: 12px">这是我的脚</el-footer>
  </el-container>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        menus: [],
        isCollapse: false
      }
    },
    methods: {
      //退出登录
      logout: function () {
        this.$confirm('是否退出登陆?', '退出登陆', {
          cancelButtonText: '取消',
          confirmButtonText: '确定',
          type: 'info',
        }).then(() => {
          sessionStorage.removeItem('user');
          this.$router.push('/login');
        }).catch(() => {

        });
      },
      // 修改菜单收缩
      collapseMenu: function() {
        this.$data.isCollapse = !this.$data.isCollapse;
      }
    },
    // 创建了vue实例后获取菜单数据
    created: function() {
      this.$data.menus.push({
        id: '1',
        name: '系统管理',
        subMenus: [
          {
            id: '1-1',
            name: '用户管理'
          }, {
            id: '1-2',
            name: '权限管理'
          }, {
            id: '1-3',
            name: '角色管理'
          },
        ]
      }, {
        id: '2',
        name: '代购管理',
        subMenus: [
          {
            id: '2-1',
            name: '客户管理'
          }, {
            id: '2-2',
            name: '商品管理'
          }, {
            id: '2-3',
            name: '行程管理'
          },
        ]
      })
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

  li {
    list-style: none;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 99.5%;
  }
</style>

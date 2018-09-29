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
      <el-aside :width="leftSideWidth">
        <div class="no-mode-translate-demo-wrapper">
          <transition name="no-mode-translate-fade">
            <el-button icon="el-icon-d-arrow-left" v-if="isCollapse" key="off" @click="collapseMenu" :style="collapseCloseBtn" size="small"></el-button>
            <el-button icon="el-icon-d-arrow-left" v-else="" key="on" @click="collapseMenu" :style="collapseOpenBtn" size="small"></el-button>
          </transition>
        </div>
        <!--<el-button plain v-if="isCollapse" icon="el-icon-d-arrow-left" @click="collapseMenu" :style="collapseCloseBtn" size="small"></el-button>-->
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

      <el-main :width="rightSideWidth">
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
        // 菜单数据
        menus: [],
        // 菜单是否展开(默认是)
        isCollapse: false,
        rightSideWidth: '85%',
        leftSideWidth: '13%',
        // 菜单展开样式
        collapseOpenBtn: {
          'margin-bottom': '3px',
          'margin-top': '1px',
          'margin-left': '86%'
        },
        // 菜单关闭样式
        collapseCloseBtn: {
          'margin-bottom': '3px',
          'margin-top': '1px',
          'margin-left': '25%'
        }
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
        if (this.$data.isCollapse) {
          this.$data.rightSideWidth = '97%';
          this.$data.leftSideWidth = '3%';

        } else {
          this.$data.rightSideWidth = '85%';
          this.$data.leftSideWidth = '13%';
        }
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

  .no-mode-translate-demo-wrapper {
    position: relative;
    height: 3%;
  }
  .no-mode-translate-demo-wrapper button {
    position: absolute;
  }
  .no-mode-translate-fade-enter-active, .no-mode-translate-fade-leave-active {
    transition: all 0.5s;
  }
  .no-mode-translate-fade-enter, .no-mode-translate-fade-leave-active {
    opacity: 0;
  }
  .no-mode-translate-fade-enter {
    transform: translateX(31px);
  }
  .no-mode-translate-fade-leave-active {
    transform: translateX(51px);
  }
</style>

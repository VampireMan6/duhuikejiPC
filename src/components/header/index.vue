<template>
  <div class="header">
    <div class="header-content">
      <!-- 顶部左侧导航栏 -->
      <div class="left flex">
        <router-link to="home" class="flex logoimg"><img class="img" src="../../assets/image/logo.png" alt=""></router-link>
        <!-- <div class="">图标</div> -->
        <Menu mode="horizontal" theme="primary" active-name="1">
          <Submenu name="1">
              <template slot="title">
                  白帽服务
              </template>
              <MenuItem name="1-1">兑换区</MenuItem>
              <MenuItem name="1-2">招募区</MenuItem>
              <MenuItem name="1-3">个人排行</MenuItem>
              <MenuItem name="1-4">团队排行</MenuItem>
              <MenuItem name="1-5">奖励方案说明</MenuItem>
          </Submenu>
          <MenuItem name="2">
              测试项目池
          </MenuItem>
          <MenuItem name="3">
              漏洞认领
          </MenuItem>
          <MenuItem name="4">
              系统公告
          </MenuItem>
          <Submenu name="5">
              <template slot="title">
                  企业服务
              </template>
              <MenuItem name="5-1">安全服务</MenuItem>
              <MenuItem name="5-2">监测服务</MenuItem>
              <MenuItem name="5-3">专属单位用户</MenuItem>
              <MenuItem name="5-4">公益单位用户</MenuItem>
          </Submenu>
      </Menu>
      </div>
      <!-- 顶部右侧导航栏 -->
      <div class="right flex">
        <Menu mode="horizontal" theme="primary" active-name="1" v-if="!$store.state.isLogin">
          <MenuItem name="6" to="login1">
              白帽登录
          </MenuItem>
          <Submenu name="7">
              <template slot="title">
                  注册
              </template>
              <MenuItem name="8-1" to='register1'>白帽子注册</MenuItem>
              <MenuItem name="8-2" to='register2'>单位用户注册</MenuItem>
          </Submenu>
          <MenuItem name="8" to="login2">
              单位用户登录
          </MenuItem>
        </Menu>
        <div v-else>
          <Menu mode="horizontal" theme="primary" active-name="1">
          <Submenu name="9">
              <template slot="title">
                用户名
              </template>
              <MenuItem name="10-1">基本资料</MenuItem>
              <MenuItem name="10-2">修改密码</MenuItem>
              <MenuItem name="10-2">退出登录</MenuItem>
          </Submenu>
          <MenuItem name="10">
            <Icon type="md-notifications-outline" size="16"/>
          </MenuItem>
          <MenuItem name="11" v-if="true">
              提交漏洞
          </MenuItem>
        </Menu>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  methods: {}
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2000;
  margin: 0 auto;
  background-color: rgba(60, 136, 204, 0.32);
}
.logoimg {
  width: 190px;
  height: 60px;
}
.img {
  width: 140px;
  height: 37px;
  margin: auto 0;
}
.ivu-menu-dark {
  background-color: rgba(60, 136, 204, 0) !important;
}
.ivu-menu-primary {
  background-color: rgba(60, 136, 204, 0) !important;
}
.bck {
   background-color: rgba(60, 136, 204, 0.32)
}
.header-content {
  max-width: 1200px;
  min-width: 1100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 16px;
}
.text {
  color: #fff;
  font-size: 14px;
  line-height: 60px;
}
.m-l-30 {
  margin-left: 30px;
}
.ivu-menu-submenu:hover {
  color: #3db1fa !important;
  background-color: #000;
}
.ivu-menu-item:hover {
  color:  #3db1fa !important;
  background-color: #000;
}
.ivu-select-dropdown {
  background-color: #1e2a47 !important;
}
.ivu-menu-horizontal .ivu-menu-submenu .ivu-menu-item:hover {
  color:  #3db1fa !important;
  background-color: #000;
}
</style>
<template>
  <div class="content">
    <div class="flex">
      <Row>
        <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
          <div :class="isCollapse? 'left2':'left1'">
            <el-menu default-active="1-4-1" class="el-menu-vertical-demo"
              background-color="#28333E" text-color="#fff" :unique-opened="true" @select="select"  :collapse="isCollapse">
              <el-menu-item index="首页,user1">
                  <i class="el-icon-menu"></i>
                  <span slot="title">首页</span>
                </el-menu-item>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span slot="title">项目管理</span>
                </template>
                <el-menu-item index="项目管理,项目池,user2">项目池</el-menu-item>
                <el-menu-item index="项目管理,我的项目,user3">我的项目</el-menu-item>
                  <el-menu-item index="项目管理,项目申请,user3">项目申请</el-menu-item>
                </el-submenu>
                <el-submenu index="3">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">漏洞管理</span>
                  </template>
                  <el-menu-item index="漏洞管理,我的漏洞,user2">我的漏洞</el-menu-item>
                  <el-menu-item index="漏洞管理,提交漏洞,user2">提交漏洞</el-menu-item>
                </el-submenu>
                <el-submenu index="4">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">文章管理</span>
                  </template>
                  <el-menu-item index="文章管理,提交文章,user2">提交文章</el-menu-item>
                  <el-menu-item index="文章管理,我的文章,user2">我的文章</el-menu-item>
                </el-submenu>
                <el-submenu index="5">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">我的团队</span>
                  </template>
                  <el-menu-item index="我的团队,团队列表,user2">团队列表</el-menu-item>
                  <el-menu-item index="我的团队,创建团队,user2">创建团队</el-menu-item>
                  <el-menu-item index="我的团队,团队管理,user2">团队管理</el-menu-item>
                  <el-menu-item index="我的团队,团队活动,user2">团队活动</el-menu-item>
                </el-submenu>
                <el-submenu index="">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">个人中心</span>
                  </template>
                  <el-menu-item index="个人中心,我的积分,user2">我的积分</el-menu-item>
                  <el-menu-item index="个人中心,基本资料,user2">基本资料</el-menu-item>
                  <el-menu-item index="个人中心,个人资料,user2">个人资料</el-menu-item>
                  <el-menu-item index="个人中心,账号绑定,user2">账号绑定</el-menu-item>
                  <el-menu-item index="个人中心,密码修改,user2">密码修改</el-menu-item>
                </el-submenu>
                <el-menu-item index="实名认证,user2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">实名认证</span>
                </el-menu-item>
                <el-menu-item index="邀请码,user2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">邀请码</span>
                </el-menu-item>
              </el-menu>
            </div>
          </Col>
        </Row>
      <div class="right flex-1">
        <Row>
          <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 24}">
            <div class="right-top w-100">
              <Icon type="md-list" size='20' @click='isCollapse = !isCollapse'/>
              <el-breadcrumb separator-class="el-icon-arrow-right" class="elItem">
              <el-breadcrumb-item>{{menuTitle}}</el-breadcrumb-item>
                <el-breadcrumb-item >{{menuList}}</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <div class="right-menulist">
              <div>
                dsfdfasf
              </div>
            </div>
            <router-view></router-view>
          </Col>
        </Row>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      isCollapse: false,
      menuTitle: '首页',
      menuList: "",
    };
  },
  methods: {
    select(e) {
      console.log(e.split(','));
      let list = e.split(',');
      if(list.length == 2) {
        this.menuList = "";
        this.menuTitle = e.split(',')[0];
      }else {
        this.menuTitle = e.split(',')[0];
        this.menuList = e.split(',')[1];
      }
    }
  }
}
</script>

<style scoped>
.content {
  min-height: 100vh;
}

.left1 {
  width: 200px;
  min-height: 100vh;
  background-color: #28333E;
}
.left2 {
  width: 64x;
  min-height: 100vh;
  background-color: #28333E;
}
.right {
  min-height: 100vh;
}
.right-top {
  position: relative;
  height: 60px;
  line-height: 60px;
  padding: 0 20px;
  border-bottom: 1px solid #f6f6f6;
}
.right-menulist {
  height: 55px;
  line-height: 55px;
  padding: 0 20px;
}
.elItem {
  position: absolute;
  left: 60px;
  top: 22px;
}
</style>
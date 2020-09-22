<template>
  <div class="content">
    <div class="flex">
      <div style="background-color: #28333E">
        <Row>
          <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
            <div :class="isCollapse? 'left2':'left1'">
              <el-menu
                :default-active="defaultActive"
                class="el-menu-vertical-demo"
                background-color="#28333E"
                text-color="#fff"
                :unique-opened="true"
                @select="select"
                :collapse="isCollapse"
              >
                <el-menu-item index="全局看板,firmHomePage">
                  <i class="iconfont icon-shouye1"></i>
                  <span slot="title">全局看板</span>
                </el-menu-item>
                <el-menu-item index="项目添加,projectAddition">
                  <i class="iconfont icon-tianjia"></i>
                  <span slot="title">项目添加</span>
                </el-menu-item>
                <el-menu-item index="项目列表,ProjectList">
                  <i class="iconfont icon-liebiao"></i>
                  <span slot="title">项目列表</span>
                </el-menu-item>
                <el-menu-item index="漏洞管理,management">
                  <i class="iconfont icon-guanli"></i>
                  <span slot="title">漏洞管理</span>
                </el-menu-item>
                <el-menu-item index="资料设置,dataSettings">
                  <i class="iconfont icon-wenzhangguanli"></i>
                  <span slot="title">资料设置</span>
                </el-menu-item>
                <el-menu-item index="通知设置,notificationSettings">
                  <i class="iconfont icon-tongzhi"></i>
                  <span slot="title">通知设置</span>
                </el-menu-item>
              </el-menu>
            </div>
          </Col>
        </Row>
      </div>
      <div class="right flex-1">
        <Row>
          <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
            <div class="right-top w-100">
              <Icon type="md-list" size="20" @click="isCollapse = !isCollapse" />
              <el-breadcrumb separator-class="el-icon-arrow-right" class="elItem">
                <el-breadcrumb-item>{{menuTitle}}</el-breadcrumb-item>
                <el-breadcrumb-item v-if="menuTitle2">{{menuTitle2}}</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
          </Col>
          <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
            <div class="right-top w-100">
              <Icon type="md-list" size="20" @click="isDrawer = true" />
              <el-breadcrumb separator-class="el-icon-arrow-right" class="elItem">
                <el-breadcrumb-item>{{menuTitle}}</el-breadcrumb-item>
                <el-breadcrumb-item v-if="menuTitle2">{{menuTitle2}}</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
          </Col>
          <router-view></router-view>
        </Row>
      </div>
      <!-- 左侧弹出层 -->
      <Drawer width="200" placement="left" :closable="false" v-model="isDrawer">
        <div class="w-100 drawer">
          <img class="img" src="../../assets/image/logo.png" alt />
        </div>
        <el-menu
          class="my"
          :default-active="defaultActive"
          background-color="#28333E"
          text-color="#fff"
          :unique-opened="true"
          @select="select"
          :collapse="false"
        >
          <el-menu-item index="全局看板,firmHomePage">
            <i class="iconfont icon-shouye1"></i>
            <span slot="title">全局看板</span>
          </el-menu-item>
          <el-menu-item index="项目添加,projectAddition">
            <i class="iconfont icon-tianjia"></i>
            <span slot="title">项目添加</span>
          </el-menu-item>
          <el-menu-item index="项目列表,ProjectList">
            <i class="iconfont icon-liebiao"></i>
            <span slot="title">项目列表</span>
          </el-menu-item>
          <el-menu-item index="漏洞管理,management">
            <i class="iconfont icon-guanli"></i>
            <span slot="title">漏洞管理</span>
          </el-menu-item>
          <el-menu-item index="资料设置,dataSettings">
            <i class="iconfont icon-wenzhangguanli"></i>
            <span slot="title">资料设置</span>
          </el-menu-item>
          <el-menu-item index="通知设置,notificationSettings">
            <i class="iconfont icon-tongzhi"></i>
            <span slot="title">通知设置</span>
          </el-menu-item>
        </el-menu>
      </Drawer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      isDrawer: false,
      menuTitle: '全局看板',
      menuTitle2: '',
      tabClick: 0,
      menuList2: [
        {
          name: '全局看板',
          router: 'firmHomePage',
          defaultActive: '全局看板,firmHomePage'
        }
      ]
    }
  },
  computed: {
    defaultActive() {
      return this.menuList2[this.tabClick].defaultActive;
    }
  },
  methods: {
    select(e) {
      this.menuTitle2 = '';
      this.menuTitle = e.split(',')[0];
      let index = this.menuList2.findIndex((x) => x.name === this.menuTitle); // eslint-disable-line no-unused-vars
      if (index === -1) {
        let obj = {}; // eslint-disable-line no-unused-vars
        obj.name = this.menuTitle;
        obj.router = e.split(',')[1];
        obj.defaultActive = e;
        this.menuList2.push(obj);
        this.tabClick = this.menuList2.length - 1;
      } else {
        this.tabClick = index;
      };
      this.$router.push({ name: this.menuList2[this.tabClick].router });
      this.isDrawer = false;
    }
  }
};
</script>

<style scoped>
.content {
  min-height: 80vh;
  overflow: auto;
}

.left1 {
  width: 200px;
  min-height: 80vh;
  background-color: #28333e;
}
.left2 {
  width: 64px;
  min-height: 80vh;
  background-color: #28333e;
}
.right {
  min-height: 80vh;
}
.right-top {
  height: 55px;
  line-height: 55px;
  padding: 0 20px;
  border-bottom: 1px solid #f6f6f6;
}
.right-menulist {
  width: 100%;
  padding: 0 20px;
  height: 55px;
  line-height: 55px;
  padding: 0 16px;
}
.ivu-icon {
  line-height: 55px !important;
}
.right-menulist-content {
  position: relative;
  width: 100%;
  /* right:0; */
  /* background-color: #2a2; */
  overflow: hidden;
}
.right-menulist-content .item {
  display: inline-block;
  margin-right: 8px;
  height: 34px;
  line-height: 34px;
  font-weight: 500;
  cursor: pointer;
}
.elItem {
  position: absolute;
  left: 60px;
  top: 21px;
}
.drawer {
  background-color: #28333e;
}
</style>

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
                <el-menu-item index="首页,userhome">
                  <i class="iconfont icon-shouye1"></i>
                  <span slot="title">首页</span>
                </el-menu-item>
                <el-submenu index="2">
                  <template slot="title">
                    <i class="iconfont icon-gerenzhongxin"></i>
                    <span slot="title">项目管理</span>
                  </template>
                  <el-menu-item index="项目管理,项目池,projectPool">项目池</el-menu-item>
                  <el-menu-item index="项目管理,我的项目,myProject">我的项目</el-menu-item>
                  <!-- <el-menu-item index="项目管理,项目申请,projectApplication">项目申请</el-menu-item> -->
                </el-submenu>
                <el-submenu index="3">
                  <template slot="title">
                    <i class="iconfont icon-erji-loudongguanli"></i>
                    <span slot="title">漏洞管理</span>
                  </template>
                  <el-menu-item index="漏洞管理,我的漏洞,myLoophole">我的漏洞</el-menu-item>
                  <el-menu-item index="漏洞管理,提交漏洞,submitLoophole">提交漏洞</el-menu-item>
                </el-submenu>
                <el-submenu index="4">
                  <template slot="title">
                    <i class="iconfont icon-wenzhangguanli"></i>
                    <span slot="title">文章管理</span>
                  </template>
                  <el-menu-item index="文章管理,提交文章,submitArticle">提交文章</el-menu-item>
                  <el-menu-item index="文章管理,我的文章,myArticle">我的文章</el-menu-item>
                </el-submenu>
                <el-submenu index="5">
                  <template slot="title">
                    <i class="iconfont icon-zu"></i>
                    <span slot="title">团队管理</span>
                  </template>
                  <el-menu-item index="团队管理,我的团队,myTeam">我的团队</el-menu-item>
                  <!-- <el-menu-item index="我的团队,创建团队,createTeam">创建团队</el-menu-item>
                  <el-menu-item index="我的团队,团队管理,teamManage">团队管理</el-menu-item>
                  <el-menu-item index="我的团队,团队活动,teamActivity">团队活动</el-menu-item> -->
                </el-submenu>
                <el-submenu index>
                  <template slot="title">
                    <i class="iconfont icon-gerenzhongxin"></i>
                    <span slot="title">个人中心</span>
                  </template>
                  <el-menu-item index="个人中心,基本资料,baseData">基本资料</el-menu-item>
                  <el-menu-item index="个人中心,我的积分,myIntegral">我的积分</el-menu-item>
                  <el-menu-item index="个人中心,账号绑定,accountBinding">账号绑定</el-menu-item>
                  <el-menu-item index="个人中心,收款信息,collectionMsg">收款信息</el-menu-item>
                  <el-menu-item index="个人中心,收货地址,address">收货地址</el-menu-item>
                  <el-menu-item index="个人中心,密码修改,changePassword">密码修改</el-menu-item>
                </el-submenu>
                <el-menu-item index="实名认证,certification">
                  <i class="iconfont icon-kefujingli-"></i>
                  <span slot="title">实名认证</span>
                </el-menu-item>
                <el-menu-item index="邀请码,user2">
                  <i class="iconfont icon-yaoqingma"></i>
                  <span slot="title">邀请码</span>
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
          <el-menu-item index="首页,userhome">
            <i class="iconfont icon-shouye1"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="iconfont icon-gerenzhongxin"></i>
              <span slot="title">项目管理</span>
            </template>
            <el-menu-item index="项目管理,项目池,projectPool">项目池</el-menu-item>
            <el-menu-item index="项目管理,我的项目,myProject">我的项目</el-menu-item>
            <!-- <el-menu-item index="项目管理,项目申请,projectApplication">项目申请</el-menu-item> -->
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="iconfont icon-erji-loudongguanli"></i>
              <span slot="title">漏洞管理</span>
            </template>
            <el-menu-item index="漏洞管理,我的漏洞,myLoophole">我的漏洞</el-menu-item>
            <el-menu-item index="漏洞管理,提交漏洞,submitLoophole">提交漏洞</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="iconfont icon-wenzhangguanli"></i>
              <span slot="title">文章管理</span>
            </template>
            <el-menu-item index="文章管理,提交文章,submitArticle">提交文章</el-menu-item>
            <el-menu-item index="文章管理,我的文章,myArticle">我的文章</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="iconfont icon-zu"></i>
              <span slot="title">团队管理</span>
            </template>
            <el-menu-item index="团队管理,我的团队,myTeam">我的团队</el-menu-item>
            <!-- <el-menu-item index="我的团队,创建团队,createTeam">创建团队</el-menu-item>
            <el-menu-item index="我的团队,团队管理,teamManage">团队管理</el-menu-item>
            <el-menu-item index="我的团队,团队活动,teamActivity">团队活动</el-menu-item> -->
          </el-submenu>
          <el-submenu index>
            <template slot="title">
              <i class="iconfont icon-gerenzhongxin"></i>
              <span slot="title">个人中心</span>
            </template>
            <el-menu-item index="个人中心,基本资料,baseData">基本资料</el-menu-item>
            <el-menu-item index="个人中心,我的积分,myIntegral">我的积分</el-menu-item>
            <el-menu-item index="个人中心,账号绑定,accountBinding">账号绑定</el-menu-item>
            <el-menu-item index="个人中心,收款信息,collectionMsg">收款信息</el-menu-item>
            <el-menu-item index="个人中心,收货地址,address">收货地址</el-menu-item>
            <el-menu-item index="个人中心,密码修改,changePassword">密码修改</el-menu-item>
          </el-submenu>
          <el-menu-item index="实名认证,certification">
            <i class="iconfont icon-kefujingli-"></i>
            <span slot="title">实名认证</span>
          </el-menu-item>
          <el-menu-item index="邀请码,user2">
            <i class="iconfont icon-yaoqingma"></i>
            <span slot="title">邀请码</span>
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
      menuTitle: '首页',
      menuTitle2: '',
      tabClick: 0,
      menuList2: [
        {
          name: '首页',
          router: 'userhome',
          defaultActive: '首页,userhome'
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
      // 左侧菜单选项
      let list = e.split(',');
      if (list.length === 2) {
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
        }
      } else {
        this.menuTitle = e.split(',')[0];
        this.menuTitle2 = e.split(',')[1];
        let index = this.menuList2.findIndex((x) => x.name === this.menuTitle2); // eslint-disable-line no-unused-vars
        if (index === -1) {
          let obj = {}; // eslint-disable-line no-unused-vars
          obj.name = this.menuTitle2;
          obj.router = e.split(',')[2];
          obj.menuTitle2 = this.menuTitle2;
          obj.defaultActive = e;
          this.menuList2.push(obj);
          this.tabClick = this.menuList2.length - 1;
        } else {
          this.tabClick = index;
        }
      }
      this.$router.push({ name: this.menuList2[this.tabClick].router });
      this.isDrawer = false;
    },
    selectItem(checked, name) {
      // 右侧上方选项
      this.tabClick = name;
      this.menuTitle = this.menuList2[name].name;
      if (this.menuList2[name].menuTitle2) {
        this.menuTitle2 = this.menuList2[name].menuTitle2;
      } else {
        this.menuTitle2 = '';
      }
      this.$router.push({ name: this.menuList2[this.tabClick].router });
    },
    closeItem(event, name) {
      // 右侧上方 关闭某项
      this.menuList2.splice(name, 1);
      this.tabClick = this.menuList2.length - 1;
      this.menuTitle = this.menuList2[this.tabClick].name;
      if (this.menuList2[this.tabClick].menuTitle2) {
        this.menuTitle2 = this.menuList2[this.tabClick].menuTitle2;
      } else {
        this.menuTitle2 = '';
      }
      this.$router.push({ name: this.menuList2[this.tabClick].router });
    },
    selectDropdown(name) {
      // 右侧选项
      if (name === '0') {
        // 关闭当前
        if (this.tabClick === 0) {
          return false;
        }
        if (this.menuList2.length !== 1) {
          this.menuList2.splice(this.tabClick, 1);
          this.tabClick = this.menuList2.length - 1;
          this.menuTitle = this.menuList2[this.tabClick].name;
          if (this.menuList2[this.tabClick].menuTitle2) {
            this.menuTitle2 = this.menuList2[this.tabClick].menuTitle2;
          } else {
            this.menuTitle2 = '';
          }
        }
      } else if (name === '1') {
        // 关闭其他
        if (this.tabClick === 0) {
          return false;
        }
        let list = []; // eslint-disable-line no-unused-vars
        list.push(this.menuList2[0]);
        list.push(this.menuList2[this.tabClick]);
        this.menuList2 = list;
        this.tabClick = 1;
        this.menuTitle = this.menuList2[this.tabClick].name;
        if (this.menuList2[this.tabClick].menuTitle2) {
          this.menuTitle2 = this.menuList2[this.tabClick].menuTitle2;
        } else {
          this.menuTitle2 = '';
        }
      } else {
        let list = []; // eslint-disable-line no-unused-vars
        list.push(this.menuList2[0]);
        this.menuList2 = list;
        this.tabClick = 0;
        this.menuTitle = this.menuList2[this.tabClick].name;
        if (this.menuList2[this.tabClick].menuTitle2) {
          this.menuTitle2 = this.menuList2[this.tabClick].menuTitle2;
        } else {
          this.menuTitle2 = '';
        }
      }
      this.$router.push({ name: this.menuList2[this.tabClick].router });
    }
  }
};
</script>

<style scoped>
.content {
  min-height: 100%;
  overflow: auto;
}

.left1 {
  width: 200px;
  min-height: 100%;
  background-color: #28333e;
}
.left2 {
  width: 64px;
  min-height: 100%;
  background-color: #28333e;
}
.right {
  min-height: 100%;
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

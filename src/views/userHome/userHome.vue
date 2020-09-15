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
          <Col :xs="{ span: 0}" :md="{ span: 0}" :xl="{ span: 24}">
            <div class="right-top w-100">
              <Icon type="md-list" size='20' @click='isCollapse = !isCollapse'/>
              <el-breadcrumb separator-class="el-icon-arrow-right" class="elItem">
              <el-breadcrumb-item>{{menuTitle}}</el-breadcrumb-item>
              <el-breadcrumb-item v-if="menuTitle2">{{menuTitle2}}</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <div class="right-menulist flex f-b" ref="box">
              <Icon class="icon" type="ios-arrow-back" size='28'/>
              <div class="right-menulist-content">
                <!-- <Tag v-for="(item) in menuList2" :key="item.name" :name="item.name" :closable='true' :checked='true' @on-close="closeItem">{{ item.name}}</Tag> -->
                <div class="item" v-for="(item,i) in menuList2" :key="i">
                    <Tag @on-change='selectItem' @on-close="closeItem" type="dot" :name='i' :checkable='true' :closable='item.closable' :color="tabClick === i?'success':'default'">{{item.name}}</Tag>
                </div>
              </div>
              <div class="flex">
                <Icon type="ios-arrow-forward" size='28'/>
                <Dropdown @on-click='selectDropdown'>
                  <Icon type="ios-arrow-down" size='28'/>
                  <DropdownMenu slot="list">
                    <DropdownItem name='0'>关闭当前</DropdownItem>
                    <DropdownItem name='1'>关闭其他</DropdownItem>
                    <DropdownItem name='2'>关闭全部</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
            <router-view></router-view>
          </Col>
          <Col :xs="{ span: 24}" :md="{ span: 24}" :xl="{ span: 0}">
            <div class="right-top w-100">
              <Icon type="md-list" size='20' @click='isDrawer = true'/>
              <el-breadcrumb separator-class="el-icon-arrow-right" class="elItem">
              <el-breadcrumb-item>{{menuTitle}}</el-breadcrumb-item>
              <el-breadcrumb-item v-if="menuTitle2">{{menuTitle2}}</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <div class="right-menulist flex f-b" ref="box">
              <Icon class="icon" type="ios-arrow-back" size='28'/>
              <div class="right-menulist-content">
                <div class="item" v-for="(item,i) in menuList2" :key="i">
                    <Tag @on-change='selectItem' @on-close="closeItem" type="dot" :name='i' :checkable='true' :closable='item.closable' :color="tabClick === i?'success':'default'">{{item.name}}</Tag>
                </div>
              </div>
              <div class="flex">
                <Icon type="ios-arrow-forward" size='28'/>
                <Dropdown @on-click='selectDropdown'>
                  <Icon type="ios-arrow-down" size='28'/>
                  <DropdownMenu slot="list">
                    <DropdownItem name='0'>关闭当前</DropdownItem>
                    <DropdownItem name='1'>关闭其他</DropdownItem>
                    <DropdownItem name='2'>关闭全部</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
            <router-view></router-view>
          </Col>
        </Row>
      </div>
      <!-- 左侧弹出层 -->
      <Drawer width='200' placement="left" :closable="false" v-model="isDrawer">
        <div class="w-100 drawer">
          <img class="img" src="../../assets/image/logo.png" alt="">
        </div>
        <el-menu class="my" default-active="1-4-1"  background-color="#28333E" text-color="#fff" :unique-opened="true" @select="select"  :collapse="false">
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
      </Drawer>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      isCollapse: false,
      isDrawer: false,
      menuTitle: '首页',
      menuTitle2: '',
      tabClick: 0,
      menuList2: [
        {
          name: '首页',
          router: 'user1',
          closable: false,
          isShow: true
        }
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {
      console.log(this.$refs.box.offsetWidth)
    })
  },
  methods: {
    select(e) {
      let list = e.split(',');
      if (list.length === 2) {
        this.menuTitle2 = '';
        this.menuTitle = e.split(',')[0];
        let index = this.menuList2.findIndex(x => x.name === this.menuTitle); // eslint-disable-line no-unused-vars
        if (index === -1) {
          let obj = {};// eslint-disable-line no-unused-vars
          obj.name = this.menuTitle;
          obj.router = e.split(',')[1];
          obj.closable = true;
          this.menuList2.push(obj);
          this.tabClick = this.menuList2.length - 1;
        } else {
          this.tabClick = index;
        }
      } else {
        this.menuTitle = e.split(',')[0];
        this.menuTitle2 = e.split(',')[1];
        let index = this.menuList2.findIndex(x => x.name === this.menuTitle2); // eslint-disable-line no-unused-vars
        if (index === -1) {
          let obj = {};// eslint-disable-line no-unused-vars
          obj.name = this.menuTitle2;
          obj.router = e.split(',')[2];
          obj.closable = true;
          obj.menuTitle2 = this.menuTitle2;
          this.menuList2.push(obj);
          this.tabClick = this.menuList2.length - 1;
        } else {
          this.tabClick = index;
        }
      };
      this.isDrawer = false;
    },
    selectItem(checked, name) {
      this.tabClick = name;
      this.menuTitle = this.menuList2[name].name;
      if (this.menuList2[name].menuTitle2) {
        console.log(this.menuList2[name])
        this.menuTitle2 = this.menuList2[name].menuTitle2;
      } else {
        this.menuTitle2 = '';
      }
    },
    closeItem (event, name) {
      this.menuList2.splice(name, 1);
      this.tabClick = this.menuList2.length - 1;
      this.menuTitle = this.menuList2[this.tabClick].name;
      if (this.menuList2[this.tabClick].menuTitle2) {
        this.menuTitle2 = this.menuList2[this.tabClick].menuTitle2;
      } else {
        this.menuTitle2 = '';
      }
    },
    selectDropdown(name) {
      if (name === '0') { // 关闭当前
        if (this.tabClick === 0) {
          return false
        };
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
      } else if (name === '1') { // 关闭其他
        if (this.tabClick === 0) {
          return false
        };
        let list = [];// eslint-disable-line no-unused-vars
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
        let list = [];// eslint-disable-line no-unused-vars
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
    }
  }
}
</script>

<style scoped>
.content {
  min-height: 100vh;
  overflow: auto;
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
  margin-left: 8px;
  height: 34px;
  line-height: 34px;
  font-weight: 500;
  cursor:pointer;
}
.elItem {
  position: absolute;
  left: 60px;
  top: 21px;
}
.drawer {
  background-color: #28333E;
}
</style>

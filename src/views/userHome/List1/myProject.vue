<template>
  <div class="content">
    <div class="top m-b-16 flex">
      <div class="item1" :class="tabClick == i?'b-409 c-w':''" v-for="(item,i) in projectType" :key="i" @click="selectType(i)">
          {{item}}
      </div>
      <Select v-model="selectText" size="small" style="width:120px" placeholder='项目选择' @on-change='selectItem'>
        <Option v-for="item in selectList" :value='item' :key="item">{{ item }}</Option>
      </Select>
      <div class="search flex">
        <Input size='small' search placeholder="请输入搜索项目名称" @on-search='searchValue'/>
      </div>
    </div>
    <div class="w-100">
      <div class="flex flex-1" style="position: relative;height: 600px;">
        <div style="position: absolute;width:100%;z-index: 2;" class="table">
          <Table stripe :columns="columns2" :data="data4"></Table>
          <div class="t-c margin-y-16">
            <Page :total="50" :page-size="10" @on-change='changePage'/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      projectType: ['专属项目', '公益项目'],
      tabClick: 0,
      selectText: '',
      selectList: ['长期项目', '短期项目'],
      columns2: [
        {
          title: '项目ID',
          key: 'id',
          minWidth: 120,
          align: 'center'
        },
        {
          title: '项目名称',
          key: 'projectName',
          minWidth: 180,
          align: 'center'
        },
        {
          title: '创建时间',
          key: 'createTime',
          minWidth: 180,
          align: 'center'
        },
        {
          title: '项目授权',
          key: 'projectEmpower',
          width: 180,
          align: 'center'
        },
        {
          title: '项目状态',
          key: 'projectStatus',
          minWidth: 180,
          align: 'center'
        },
        {
          title: '操作',
          key: 'operation',
          align: 'center',
          minWidth: 200,
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '8px'
                },
                on: {
                  click: () => {
                    this.enter(params.index)
                  }
                }
              }, '查看项目'),
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '8px'
                },
                on: {
                  click: () => {
                    this.submit(params.index)
                  }
                }
              }, '提交漏洞')
            ]);
          }
        }
      ],
      data4: [
        {
          id: '1',
          projectName: 18,
          createTime: '2020.12.12',
          projectEmpower: '1',
          projectStatus: 'true'
        },
        {
          id: '2',
          projectName: 18,
          createTime: '2020.12.12',
          projectEmpower: '1',
          projectStatus: 'true'
        },
        {
          id: '1',
          projectName: 18,
          createTime: '2020.12.12',
          projectEmpower: '1',
          projectStatus: 'true'
        },
        {
          id: '2',
          projectName: 18,
          createTime: '2020.12.12',
          projectEmpower: '1',
          projectStatus: 'true'
        },
        {
          id: '1',
          projectName: 18,
          createTime: '2020.12.12',
          projectEmpower: '1',
          projectStatus: 'true'
        },
        {
          id: '2',
          projectName: 18,
          createTime: '2020.12.12',
          projectEmpower: '1',
          projectStatus: 'true'
        },
        {
          id: '1',
          projectName: 18,
          createTime: '2020.12.12',
          projectEmpower: '1',
          projectStatus: 'true'
        },
        {
          id: '2',
          projectName: 18,
          createTime: '2020.12.12',
          projectEmpower: '1',
          projectStatus: 'true'
        },
        {
          id: '1',
          projectName: 18,
          createTime: '2020.12.12',
          projectEmpower: '1',
          projectStatus: 'true'
        },
        {
          id: '2',
          projectName: 18,
          createTime: '2020.12.12',
          projectEmpower: '1',
          projectStatus: 'true'
        }
      ]
    };
  },
  methods: {
    changePage(e) { // 分页选择
      console.log(e)
    },
    enter(index) { // 查看项目 进入详情
      console.log(index);
      this.$router.push({name: 'myProjectDetail'})
    },
    submit(index) { // 提交漏洞
      console.log(index)
    },
    selectType(i) {
      this.tabClick = i
    },
    selectItem(value) { // 项目选择
      console.log(value);
    },
    searchValue(value) { // 搜索
      console.log(value)
    }
  }
}
</script>

<style scoped>
.content {padding: 16px;}
.margin-y-16 { margin: 20px 0 16px;}
/* .table{border: 1px solid #e6e6e6;} */
.item1 {
  min-width: 74px;
  height: 22px;
  text-align: center;
  padding: 2px 0;
  border-radius: 4px;
  margin-right: 16px;
}
.item1:hover { background-color: #409EFF;
  color: #fff;
}
.search {max-width: 260px;margin-left: 16px;}
</style>

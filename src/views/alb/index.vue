<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.name" :placeholder="$t('alb.name')" clearable style="width: 400px;" class="filter-item" @keyup.enter.native="handleFilter" />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        {{ $t('alb.search') }}
      </el-button>
    </div>
    <el-table
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%; height: overflow: auto;"
      :header-cell-style="changeTableHead"
    >

      <el-table-column :label="$t('alb.name')" min-width="70px">
        <template v-slot="{row}">
          <span> {{ row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('alb.dnsname')" min-width="80px">
        <template v-slot="{row}">
          <span>{{ row.dnsname }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('alb.state')" width="80px">
        <template v-slot="{row}">
          <span>{{ row.state.code }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('alb.vpcid')" width="200px">
        <template v-slot="{row}">
          <span>{{ row.vpcid }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('alb.azones')" width="250">
        <template v-slot="{row}">
          <span>{{ list_zone(row.availability_zone) }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('alb.type')" width="100px">
        <template v-slot="{row}">
          <span>{{ row.type }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('alb.createdtime')" width="150">
        <template v-slot="{row}">
          <span>{{ row.created_time }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('alb.actions')" align="center" width="200" class-name="small-padding fixed-width">
        <template v-slot="{row,$index}">
          <el-button size="mini" type="primary" @click="handleDetail(row,$index)">
            {{ $t('alb.detail') }}
          </el-button>
        </template>
      </el-table-column>

    </el-table>

    <!-- detail dialog -->
    <el-dialog :visible.sync="dialogShow" :modal-append-to-body=false width="70%">
      <div>
    <el-table
      v-loading="listenerLoading"
      :data="listener"
      border
      fit
      highlight-current-row
      style="width: 100%; height: overflow: auto;"
      :header-cell-style="changeTableHead"
    >

      <el-table-column :label="$t('alb.listenerid')" min-width="70px">
        <template v-slot="{row}">
          <span style="font-weight: bold"> {{ row.protocol }} : {{ row.port }}</span><br>
          <span class="link-type" @click="handleRule(row)">{{ row.arn }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('alb.sslpolicy')" width="200px">
        <template v-slot="{row}">
          <span>{{ row.sslpolicy }}</span>
        </template>
      </el-table-column>

    </el-table>
      </div>  
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogShow = false">
          {{ $t('alb.cancel') }}
        </el-button>
      </div>
    </el-dialog>

    <!-- rule dialog -->
    <el-dialog :visible.sync="dialogRuleShow" :modal-append-to-body=false width="70%">
      <div>
      <el-table
        v-loading="ruleLoading"
        :data="rules"
        border
        fit
        highlight-current-row
        style="width: 100%; height: overflow: auto;"
        :header-cell-style="changeTableHead"
      >

      <el-table-column :label="$t('alb.rulearn')" min-width="70px">
        <template v-slot="{row}">
          <span>{{ row.arn }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('alb.conditions')" width="200px">
        <template v-slot="{row}">
          <span v-html=rule_conditions(row.conditions)></span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('alb.actions')" >
        <template v-slot="{row}">
          <span v-html=rule_actions(row.actions)></span>
        </template>
      </el-table-column>

    </el-table>
      </div>  
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogRuleShow = false">
          {{ $t('alb.cancel') }}
        </el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import { getElbList, getListeners, getRules } from '@/api/alb'
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination

export default {
  name: 'alb',
  components: { Pagination },
  directives: { waves },
  filters: {
  },
  data() {
    return {
      tableKey: 0,
      list: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10,
        token: undefined,
        name: undefined
      },
      listener: null,
      listenerLoading: false,
      listenerQuery: {
        arn: undefined,
      },
      rules: null,
      ruleLoading: false,
      ruleQuery: {
        arn: undefined,
      },
      temp: {
        changed: false
      },
      dialogShow: false,
      dialogRuleShow: false,
    }
  },
  created() {
  },
  mounted() {
    this.getList()
  },
  methods: {
    changeTableHead({row, column, rowIndex, columnIndex}) {
      return {backgroundColor: 'DarkBlue', color: '#D0D0D0', width: '100%'};
    },
    handleFilter() {
      this.listQuery.page = 1
      this.listQuery.token = undefined
      this.getList()
    },
    list_zone(zones) {
      const zs = [];
      zones.forEach(zone => {
        zs.push(zone.name);
      });

      return zs.join(',');
    },
    rule_conditions(conditions) {
      const cs = [];
      conditions.forEach(cond => {
        const vs = [];
        cond.values.forEach(v => {
          vs.push(v);
        });
        cs.push(cond.field + "<br>" + vs.join('<br>'));
      });
      return cs.join('<br>');
    },
    rule_actions(actions) {
      const cs = [];
      actions.forEach(a => {
        if (a.type === "fixed-response") {
          
        } else if (a.type === "authenticate-cognito") {

        }
        var h = a.type + "<br>";
        h += "order=" + a.order + "<br>";
        cs.push(h);
      });
      return cs.join('<br>');
    },
    getList() {
      this.listLoading = true
      getElbList(this.listQuery).then(response => {
        this.list = response.data

      }).catch(err => {
        console.log(err)
      })
        this.listLoading = false
    },
    getListenerList(arn) {
      this.listenerLoading = true
      this.listenerQuery.arn = arn
      getListeners(this.listenerQuery).then(response => {
        this.listener = response.data

      }).catch(err => {
        console.log(err)
      })
      this.listenerLoading = false
    },
    handleDetail(row) {
      this.getListenerList(row.arn)
      // this.temp = Object.assign({}, row) // copy obj
      this.dialogShow = true
    },
    getRules(arn) {
      this.ruleLoading = true
      this.ruleQuery.arn = arn
      getRules(this.ruleQuery).then(response => {
        this.rules = response.data

      }).catch(err => {
        console.log(err)
      })
      this.ruleLoading = false
    },
    handleRule(row) {
      this.getRules(row.arn)

      this.dialogRuleShow = true
    },
    resetTemp() {
      this.temp = {
        changed: false
      }
    }
  }
}
</script>

<style scoped>
.custom-primary {
    color: #fff;
    background-color: #006400;
    border-color: #006400;
}
 
.custom-primary:hover {
    color: #fff;
    background-color: #db0000;
    border-color: #cc0000;
}
 
.custom-primary:focus, .custom-primary.focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 64, 0, 0.5);
}
</style>
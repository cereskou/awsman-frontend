<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.name" :placeholder="$t('cloudtrail.name')" clearable style="width: 400px;" class="filter-item" @keyup.enter.native="handleFilter" />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        {{ $t('cloudtrail.search') }}
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

      <el-table-column :label="$t('cloudtrail.id')" prop="id" align="left" min-width="65px">
        <template v-slot="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('cloudtrail.name')" min-width="70px">
        <template v-slot="{row}">
          <span> {{ row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('cloudtrail.source')" min-width="80px">
        <template v-slot="{row}">
          <span>{{ row.source }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('cloudtrail.username')" min-width="80px">
        <template v-slot="{row}">
          <span>{{ row.username }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('cloudtrail.time')" width="150">
        <template v-slot="{row}">
          <span>{{ row.eventtime }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('cloudtrail.actions')" align="center" width="200" class-name="small-padding fixed-width">
        <template v-slot="{row,$index}">
          <el-button size="mini" type="primary" @click="handleDetail(row,$index)">
            {{ $t('cloudtrail.detail') }}
          </el-button>
        </template>
      </el-table-column>

    </el-table>

     <div v-animal-scroll="infiniteHandler"></div>

    <!-- detail dialog -->
    <el-dialog :visible.sync="dialogShow" :modal-append-to-body=false width="860px">
      <div>

      <pre>{{ eventjson | pretty}}</pre>

      </div>  
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogShow = false">
          {{ $t('cloudtrail.cancel') }}
        </el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import { getEventList } from '@/api/cloudtrail'
import animalscroll from '@/directive/scroll'
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
 import InfiniteLoading from 'vue-infinite-loading';

export default {
  name: 'userpool',
  components: { Pagination, InfiniteLoading },
  directives: { animalscroll, waves },
  filters: {
    pretty: function(value) {
      if (value === undefined) {
        return value;
      }
      return JSON.stringify(JSON.parse(value), null, 2);
    }
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
      eventjson: undefined,
      temp: {
        changed: false
      },
      dialogShow: false,
      startScrollYOffset: 0,
    }
  },
  created() {
  },
  mounted() {
    this.startScrollYOffset = Math.floor(window.innerHeight / 3)
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
    infiniteHandler() {
      if (window.pageYOffset >= this.startScrollYOffset) {
          this.startScrollYOffset = window.innerHeight + window.pageYOffset
          this.getList()
      }      
    },
    getList() {
      this.listLoading = true
      getEventList(this.listQuery).then(response => {
        this.list = response.data.events
        this.listQuery.token = response.data.token

        this.listLoading = false
      }).catch(err => {
        console.log(err)
      })
    },
    handleDetail(row) {
      // this.temp = Object.assign({}, row) // copy obj
      this.eventjson = row.event
      this.dialogShow = true
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
<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.branchs" :placeholder="$t('codecommit.branch')" clearable style="width: 400px;" class="filter-item" @keyup.enter.native="handleFilter" />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <el-input v-model="listQuery.brancht" :placeholder="$t('codecommit.branch')" clearable style="width: 400px;" class="filter-item" @keyup.enter.native="handleFilter" />

      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        {{ $t('codecommit.search') }}
      </el-button>
    </div>

    <el-table
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%;  overflow: auto;"
      :header-cell-style="changeTableHead"
    >

      <el-table-column :label="$t('codecommit.id')" prop="id" align="left" width="290px">
        <template v-slot="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('codecommit.name')" min-width="70px">
        <template v-slot="{row}">
          <span> {{ row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('codecommit.branch')">
        <template v-slot="{row}">
        <ul>
          <li v-for="b in row.branchs" :key="b">
            {{ b }}
          </li>
        </ul>
        </template>
      </el-table-column>

    </el-table>

  </div>
</template>

<script>
import { getRepositories } from '@/api/codecommit'
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination

export default {
  name: 'codecommit',
  components: { Pagination },
  directives: { waves },
  filters: {
  },
  data() {
    return {
      tableKey: 0,
      list: null,
      listLoading: false,
      listQuery: {
        page: 1,
        limit: 10,
        branchs: undefined,
        brancht: undefined,
        token: undefined,
      },
    }
  },
  created() {
    // this.getList()
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
    getList() {
      this.listLoading = true
      getRepositories(this.listQuery).then(response => {
        this.list = response.data.items
        this.listQuery.token = response.data.token

        this.listLoading = false
      }).catch(err => {
        console.log(err)
      })
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
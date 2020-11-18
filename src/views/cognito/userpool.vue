<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.email" :placeholder="$t('cognito.email')" clearable style="width: 400px;" class="filter-item" @keyup.enter.native="handleFilter" />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <el-select v-model="listQuery.group" :placeholder="$t('cognito.group')" clearable class="filter-item" style="width: 130px">
        <el-option v-for="item in groupOptions" :key="item" :label="item" :value="item" />
      </el-select>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <el-select v-model="listQuery.sort" style="width: 150px" class="filter-item" @change="handleFilter">
        <el-option v-for="item in sortOptions" :key="item.key" :label="item.label" :value="item.key" />
      </el-select>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        {{ $t('cognito.search') }}
      </el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">
        {{ $t('cognito.add') }}
      </el-button>
      <el-button v-waves :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">
        {{ $t('cognito.export') }}
      </el-button>
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-document-copy" @click="handleSync">
        {{ $t('cognito.syncaws') }}
      </el-button>
    </div>
    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%; height: calc(70vh - 50px); overflow: auto;"
      @sort-change="sortChange"
      :header-cell-style="changeTableHead"
    >
      <el-table-column :label="$t('cognito.id')" prop="id" align="center" width="80">
        <template v-slot="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('cognito.email')" min-width="100px">
        <template v-slot="{row}">
          <span class="link-type" @click="handleUpdate(row)">{{ row.email }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('cognito.name')" min-width="120px">
        <template v-slot="{row}">
          <span>{{ row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('cognito.enabled')" width="130">
        <template v-slot="{row}">
          <span>{{ enabledFilter(row.enabled) }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('cognito.status')" width="130">
        <template v-slot="{row}">
          <span>{{ row.status }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('cognito.group')" width="120">
        <template v-slot="{row}">
          <span>{{ row.group }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('cognito.createdate')" width="150">
        <template v-slot="{row}">
          <span>{{ row.createdate | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('cognito.updatedate')" width="150">
        <template v-slot="{row}">
          <span>{{ row.updatedate | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('cognito.actions')" align="center" width="200" class-name="small-padding fixed-width">
        <template v-slot="{row,$index}">
          <el-button type="warning" style="color: black;" size="mini" v-if="row.enabled" @click="handleDisable(row)">
            {{ $t('cognito.disabled') }}
          </el-button>
          <el-button type="success" size="mini" v-if="!row.enabled" @click="handleEnable(row)">
            {{ $t('cognito.enabled') }}
          </el-button>
          <el-button v-if="row.status!='deleted'" size="mini" type="danger" @click="handleDelete(row,$index)">
            {{ $t('cognito.delete') }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />

    <!-- change password dialog -->
    <el-dialog :title="textMap['change']" :visible.sync="setPasswordVisible" :modal-append-to-body=false width="550px">
      <el-form ref="passForm" :rules="chpwdrules" :model="chpwd" label-position="left" label-width="180px">
        <el-form-item :label="$t('cognito.password')" prop="password">
          <el-input v-model="chpwd.password" clearable v-on:input="handlePasswordChange"/>
        </el-form-item>
        <el-form-item :label="$t('cognito.permanent')">
          <el-switch v-model="chpwd.permanent" active-value="0" inactive-value="1">
          </el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="setPasswordVisible = false">
          {{ $t('cognito.cancel') }}
        </el-button>
        <el-button type="primary" @click="changePwd()" :disabled='!chpwd.changed'>
          {{ $t('cognito.confirm') }}
        </el-button>
      </div>
    </el-dialog>

    <!-- edit dialog -->
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" width="750px">
      <el-form ref="dataForm" :rules="rules" :model="temp" label-position="left" label-width="120px" style="width: 600px; margin-left:40px;">
        <el-form-item :label="$t('cognito.uuid')" prop="uuid" v-if="temp.uuid!=null">
          <el-input v-model="temp.uuid" v-bind:readonly="isupdate" />
        </el-form-item>
        <el-form-item :label="$t('cognito.email')" :prop="isupdate?'':'email'">
          <el-input v-model="temp.email" clearable v-bind:readonly="isupdate" v-on:input="handleChange"/>
          <span v-if="!isupdate" style="font-size:0.8em;color:darkred;">{{ $t('cognito.temporay_password') }}</span>
        </el-form-item>
        <el-form-item :label="$t('cognito.name')" prop="name">
          <el-input v-model="temp.name" clearable v-on:input="handleChange"/>
        </el-form-item>
        <el-form-item :label="$t('cognito.enabled')" prop="enabled" v-if="temp.uuid!=null">
          <el-select v-model="temp.enabled" class="filter-item" v-on:change="handleChange">
            <el-option v-for="item in enabledOptions" :key="item.value" :label="item.name" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('cognito.group')" prop="group" >
          <el-select v-model="temp.group" class="filter-item" :placeholder="$t('cognito.selectgroup')"  v-on:change="handleChange">
            <el-option v-for="item in groupOptions" :key="item" :label="item" :value="item" />
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('cognito.createdate')" prop="createdate" v-if="temp.uuid!=null">
          <span>{{ temp.createdate | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </el-form-item>
        <el-form-item :label="$t('cognito.updatedate')" prop="updatedate" v-if="temp.uuid!=null">
          <span>{{ temp.updatedate | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </el-form-item>
      </el-form>
      <br/>
      <div slot="footer" class="dialog-footer">
        <el-button class="custom-primary" @click="showChangePassword(temp.uuid)" v-if="temp.uuid!=null">
          {{ $t('cognito.changepassword') }}
        </el-button>
        <el-button @click="dialogFormVisible = false">
          {{ $t('cognito.cancel') }}
        </el-button>
        <el-button type="primary" @click="dialogStatus==='create'?createData():updateData()" :disabled='!temp.changed'>
          {{ $t('cognito.confirm') }}
        </el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import { fetchList, createUser, enableUser, syncUser, deleteUser, updateUser, changePassword } from '@/api/cognito'
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import generatedPassword from '@/common/common-function'

export default {
  name: 'userpool',
  components: { Pagination },
  directives: { waves },
  filters: {
  },
  data() {
    return {
      tableKey: 0,
      list: null,
      total: 0,
      groups: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10,
        email: undefined,
        group: undefined,
        sort: '-updatedate'
      },
      enableQuery: {
        uuid: undefined,
        status: undefined
      },
      groupOptions: [],
      enabledOptions: [{name:this.$t('cognito.enabled'), value:true}, {name:this.$t('cognito.disabled'), value:false}],
      sortOptions: [
        { label: this.$t('cognito.sort_email_asc'), key: '+email' }, 
        { label: this.$t('cognito.sort_email_desc'), key: '-email' },
        { label: this.$t('cognito.sort_enabled_asc'), key: '+enabled' }, 
        { label: this.$t('cognito.sort_enabled_desc'), key: '-enabled' },
        { label: this.$t('cognito.sort_group_asc'), key: '+group' }, 
        { label: this.$t('cognito.sort_group_desc'), key: '-group' },
        { label: this.$t('cognito.sort_updatedate_asc'), key: '+updatedate' }, 
        { label: this.$t('cognito.sort_updatedate_desc'), key: '-updatedate' }
      ],
      isupdate: false,
      temp: {
        uuid: undefined,
        id: undefined,
        email: '',
        name: '',
        password: '',
        enabled: true,
        group: '',
        createdate: new Date(),
        updatedate: new Date(),
        status: '',
        changed: false
      },
      chpwd: {
        uuid: undefined,
        password: '',
        permanent: '',
        changed: false
      },
      dialogFormVisible: false,
      setPasswordVisible: false,
      dialogStatus: '',
      title: '',
      textMap: {
        update: this.$t('cognito.edit'),
        create: this.$t('cognito.add'),
        change: this.$t('cognito.changepassword')
      },
      rules: {
        password: [{ required: true, message: this.$t('cognito.required_password'), trigger: 'blur' }],
        email: [
          { required: true, message: this.$t('cognito.required_email')},
          {type: 'email',message:this.$t('cognito.valid_email')}
        ]
      },
      chpwdrules: {
        password: [
          {required: true, message: this.$t('cognito.required_password')},
          {min:8, message:this.$t('cognito.requirenumbers')}
        ],
      },
      downloadLoading: false
    }
  },
  created() {
    this.getList()
  },
  methods: {
    changeTableHead({row, column, rowIndex, columnIndex}) {
      return {backgroundColor: 'DarkBlue', color: '#D0D0D0', width: '100%'};
    },
    enabledFilter(enabled) {
      if (enabled) {
        return this.$t('cognito.enabled')
      }
      return this.$t('cognito.disabled')
    },
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total
        this.groups = response.data.groups

        if (this.groups != null) {
          this.groupOptions.splice(0, this.groupOptions.length)
          this.groupOptions.push('')
          this.groups.forEach(element => {
          this.groupOptions.push(element.name)
        });
        }

        this.listLoading = false
      })
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    async handleSync() {
      await syncUser()
      this.$message({
        type: 'success',
        message: this.$t('cognito.synced')
      })
      this.listQuery.page = 1
      this.getList()
    },
    sortChange(data) {
      const { prop, order } = data
      if (prop === 'email' ||
        prop === 'enabled' ||
        prop === 'group' ||
        prop === 'updatedate') {
        this.sortBy(prop, order)
      }
    },
    sortBy(key, order) {
      if (order === 'ascending') {
        this.listQuery.sort = '+' + key
      } else {
        this.listQuery.sort = '-' + key
      }
      this.handleFilter()
    },
    handleChange() {
      this.temp.changed = true
    },
    handlePasswordChange() {
      this.chpwd.changed = true
    },
    resetChpwd(uuid) {
      this.chpwd = {
        uuid: uuid,
        password: '',
        permanent: '',
        changed: false
      }
    },
    resetTemp() {
      this.temp = {
        uuid: undefined,
        id: undefined,
        email: '',
        name: '',
        group: '',
        password: '',
        enabled: true,
        createdate: new Date(),
        updatedate: new Date(),
        status: '',
        changed: false
      }
    },
    handleCreate() {
      this.resetTemp()
      this.title = this.$t('cognito.add')
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.isupdate = false
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    createData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          const tempData = Object.assign({}, this.temp)
          tempData.createdate = 0
          tempData.updatedate = 0
          tempData.uuid = ""
          createUser(tempData).then(() => {
            this.list.unshift(tempData)
            this.dialogFormVisible = false
            this.$notify({
              title: this.$t('cognito.success'),
              message: this.$t('cognito.user_created'),
              type: 'success',
              duration: 2000
            })
            this.listQuery.page = 1
            this.getList()
          }).catch((e) => {

          })
        } else {
          return false
        }
      })
    },
    handleUpdate(row) {
      this.temp = Object.assign({}, row) // copy obj
      this.temp.changed = false
      this.title = this.$t('cognito.edit')
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.isupdate = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    updateData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          const tempData = Object.assign({}, this.temp)
          updateUser(tempData).then(() => {
            const index = this.list.findIndex(v => v.id === this.temp.id)
            this.list.splice(index, 1, this.temp)
            this.dialogFormVisible = false
            this.$notify({
              title: this.$t('cognito.success'),
              message: this.$t('cognito.user_updated'),
              type: 'success',
              duration: 3000
            })
          })
        } else {
          return false
        }
      })
    },
    showChangePassword(uuid) {
      this.resetChpwd(uuid)
      this.setPasswordVisible = true
      this.$nextTick(() => {
        this.$refs['passForm'].clearValidate()
      })
    },
    changePwd() {
      this.$refs['passForm'].validate((valid) => {
        if (valid) {
          changePassword(this.chpwd).then(() => {
            this.setPasswordVisible = false
            this.$notify({
              title: this.$t('cognito.success'),
              message: this.$t('cognito.user_updated'),
              type: 'success',
              duration: 3000
            })
          })
        } else {
          return false
        }
      })
    },
    handleDisable(row, index) {
      this.$confirm(this.$t('cognito.dialog_disable_message'), this.$t('cognito.confirm'), {
        confirmButtonText: this.$t('cognito.ok'),
        cancelButtonText: this.$t('cognito.cancel'),
        type: 'warning'
      })
        .then(async() => {
          row.enabled = false
          this.enableQuery.uuid = row.uuid
          this.enableQuery.status = 'disabled'
          await enableUser(this.enableQuery).then(() => {
            this.$notify({
              title: this.$t('cognito.success'),
              message: this.$t('cognito.user_disabled'),
              type: 'success',
              duration: 3000
            })
          })
        })
        .catch(err => { console.error(err) })
    },
    handleEnable(row, index) {
      this.$confirm(this.$t('cognito.dialog_enable_message'), this.$t('cognito.confirm'), {
        confirmButtonText: this.$t('cognito.ok'),
        cancelButtonText: this.$t('cognito.cancel'),
        type: 'warning'
      })
        .then(async() => {
          row.enabled = true
          this.enableQuery.uuid = row.uuid
          this.enableQuery.status = 'enabled'
          await enableUser(this.enableQuery).then(() => {
            this.$notify({
              title: this.$t('cognito.success'),
              message: this.$t('cognito.user_enabled'),
              type: 'success',
              duration: 3000
            })
          })
        })
        .catch(err => { console.error(err) })
    },
    handleDelete(row, index) {
      this.$confirm(this.$t('cognito.dialog_delete_message'), this.$t('cognito.confirm'), {
        confirmButtonText: this.$t('cognito.ok'),
        cancelButtonText: this.$t('cognito.cancel'),
        type: 'warning'
      })
        .then(async() => {
          await deleteUser(row.uuid)
          this.$notify({
            title: this.$t('cognito.success'),
            message: this.$t('cognito.user_deleted'),
            type: 'success',
            duration: 3000
          })
          this.list.splice(index, 1)
        })
        .catch(err => { console.error(err) })

    },
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = [this.$t('cognito.id'), 'uuid', this.$t('cognito.email'), this.$t('cognito.name'), this.$t('cognito.enabled'), this.$t('cognito.status'), this.$t('cognito.group'), this.$t('cognito.createdate'), this.$t('cognito.updatedate')]
        const filterVal = ['id', 'uuid', 'email', 'name', 'enabled', 'status', 'group', 'createdate', 'updatedate']
        const data = this.formatJson(filterVal)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: 'table-list'
        })
        this.downloadLoading = false
      })
    },
    formatJson(filterVal) {
      return this.list.map(v => filterVal.map(j => {
        if (j === 'createdate' || j === 'updatedate') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    },
    getSortClass: function(key) {
      const sort = this.listQuery.sort
      return sort === `+${key}` ? 'ascending' : 'descending'
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
<template>
  <div class="app-container">
    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 70%; overflow: auto;"
    >
      <el-table-column :label="$t('cognito.item_category')" width="200px" prop="key">
        <template v-slot="{row}">
          <el-input v-model="row.category" v-bind:readonly="row.id!==0" />
        </template>
      </el-table-column>      
      <el-table-column :label="$t('cognito.item_key')" width="200px" prop="key">
        <template v-slot="{row}">
          <el-input v-model="row.key" v-bind:readonly="row.id!==0" />
        </template>
      </el-table-column>      
      <el-table-column :label="$t('cognito.item_value')" min-width="100px" prop="value">
        <template v-slot="{row}">
          <el-input v-model="row.value" />
        </template>
      </el-table-column>      
      <el-table-column :label="$t('cognito.item_desc')" min-width="100px" prop="description">
        <template v-slot="{row}">
          <el-input v-model="row.description" />
        </template>
      </el-table-column>      

      <el-table-column :label="$t('cognito.actions')" align="center" width="130px" class-name="small-padding fixed-width">
        <template v-slot="{row,$index}">
          <el-button v-if="row.status!='deleted'" size="mini" type="danger" @click="handleDelete(row,$index)">
            {{ $t('cognito.delete') }}
          </el-button>
        </template>
      </el-table-column>

    </el-table>
    <br/>
    <el-button type="success" @click="AddListRow()">{{ $t('cognito.add') }}</el-button>
    <el-button type="primary" @click="save">
      {{ $t('cognito.save') }}
    </el-button>

  </div>
</template>

<script>
import { fecthSetting,saveSetting } from '@/api/cognito'
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'

export default {
  name: 'setting',
  directives: { waves },
  filters: {
  },
  data() {
    return {
      list: null,
      settings: {
        userpool: undefined
      }
    }
  },
  created() {
    this.getSetting()
  },
  methods: {
    save() {
      saveSetting(this.list).then(() => {
        this.$notify({
          title: this.$t('cognito.success'),
          message: this.$t('cognito.user_updated'),
          type: 'success',
          duration: 3000
        })
      })
    },
    getSetting() {
      fecthSetting().then(response => {
        console.log(response)
        this.list = response.data
      })
    },
    AddListRow() {
      this.list.push({
        "id": 0,
        "category": "",
        "key": "",
        "value": "",
        "description": ""
      })
    },
    handleDelete(row, index) {
      this.$confirm(this.$t('cognito.delete_msg'), this.$t('cognito.confirm'), {
        confirmButtonText: this.$t('cognito.ok'),
        cancelButtonText: this.$t('cognito.cancel'),
        type: 'warning'
      })
        .then(async() => {
          // await deleteUser(row.uuid)
          this.$notify({
            title: this.$t('cognito.success'),
            message: this.$t('cognito.deleted_msg'),
            type: 'success',
            duration: 3000
          })
          this.list.splice(index, 1)
        })
        .catch(err => { console.error(err) })

    }
  }
}
</script>

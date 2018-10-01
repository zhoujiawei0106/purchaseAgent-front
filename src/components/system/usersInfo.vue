<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline search-element-form">
      <el-row>
        <el-col :span="8">
          <el-form-item label="用户: ">
            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="审批人: ">
            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="活动区域: ">
            <el-select v-model="formInline.region" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-form-item class="search-element-form-btn">
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button type="primary" @click="onSubmit">重置</el-button>
        </el-form-item>
      </el-row>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style scoped>

</style>

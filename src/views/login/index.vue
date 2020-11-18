<template>
  <div class="login-container">
    <div class="login-weaper animated bounceInDown">
      <div class="login-left">
        <img class="img" src="/assets/images/logo.png" alt="">
        <br><br>
        <img class="img-small" src="/assets/images/aws-logo.png" alt="">
        <p class="title">{{ $t('login.info') }}</p>
      </div>
    <div class="login-border">
      <div class="login-main">
        <h4 class="login-title">
          {{ $t('login.title') }}
          <lang-select class="set-language" />
        </h4>
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" autocomplete="on" label-position="left">
          <el-form-item prop="username">
            <el-input ref="username"
              @keyup.enter.native="handleLogin"
              v-model="loginForm.username"
              auto-complete="off"
              :placeholder="$t('login.username')"
              >
            <template v-slot:prefix>
              <i class="el el-icon-user"></i>
            </template>
            </el-input>
          </el-form-item>  
          <el-form-item prop="password">
            <el-input 
              @keyup.enter.native="handleLogin"
              :type="passwordType"
              v-model="loginForm.password"
              auto-complete="off"
              :placeholder="$t('login.password')">
              <template v-slot:suffix>
              <i class="el-icon-view el-input__icon" @click="showPassword"></i>
              </template>
              <template v-slot:prefix>
              <i class="el el-icon-lock"></i>
              </template>
            </el-input>
          </el-form-item>
          <br>
          <br>
          <el-button :loading="loading" type="primary" class="login-submit" @click.native.prevent="handleLogin">
            {{ $t('login.logIn') }}
          </el-button>
        </el-form>
      </div>
    </div>

    </div>
  </div>
</template>

<script>
import LangSelect from '@/components/LangSelect'

export default {
  name: 'Login',
  components: { LangSelect },
  data() {
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error(this.$t('login.password_length')))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, message: this.$t('login.username_required'), trigger:'blur'} ],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined,
      otherQuery: {}
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  created() {
  },
  mounted() {
    this.$refs.username.focus();
  },
  destroyed() {
  },
  methods: {
    checkCapslock(e) {
      const { key } = e
      this.capsTooltip = key && key.length === 1 && (key >= 'A' && key <= 'Z')
    },
    showPassword() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm)
            .then(() => {
              this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
  }
}
</script>

<style lang="scss">
@import "@/styles/login.scss";
</style>

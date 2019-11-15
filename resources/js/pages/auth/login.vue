<template>
    <div class="hold-transition login-page w-100">
    <div class="login-box">
        <!-- /.login-logo -->
        <div class="card">
            <div class="card-body login-card-body">
                <p class="login-box-msg">{{$t('login')}}</p>

                <form  @submit.prevent="login" @keydown="form.onKeydown($event)">
                    <div class="input-group mb-3">
                        <input v-model="form.email" type="email" :class="{ 'is-invalid': form.errors.has('email') }" class="form-control" :placeholder="$t('email')">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-envelope"></span>
                            </div>
                        </div>
                        <has-error :form="form" field="email" />
                    </div>
                    <div class="input-group mb-3">
                        <input  v-model="form.password" type="password" :class="{ 'is-invalid': form.errors.has('password') }" class="form-control" :placeholder="$t('password')">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                            </div>
                        </div>
                        <has-error :form="form" field="password" />
                    </div>
                    <div class="row">
                        <div class="col-8">
                            <div class="icheck-primary">
                                <checkbox v-model="remember" name="remember">
                                    {{ $t('remember_me') }}
                                </checkbox>
                            </div>
                        </div>
                        <!-- /.col -->
                        <div class="col-12 text-right">
                            <v-button :loading="form.busy">
                                {{ $t('login') }}
                            </v-button>
<!--                            <button type="submit" class="btn btn-primary btn-block">Sign In</button>-->
                        </div>
                        <!-- /.col -->
                    </div>
                </form>

                <p class="mb-1">
                    <router-link :to="{ name: 'password.request' }" class="small ml-auto my-auto">
                        {{ $t('forgot_password') }}
                    </router-link>
                </p>
            </div>
            <!-- /.login-card-body -->
        </div>
    </div>
    <!-- /.login-box -->

    </div>
</template>

<script>
import Form from 'vform'

export default {
  middleware: 'guest',
  layout: 'basic',
  metaInfo () {
    return { title: this.$t('login') }
  },

  data: () => ({
    form: new Form({
      email: '',
      password: ''
    }),
    remember: false
  }),

  methods: {
    async login () {
      // Submit the form.
      const { data } = await this.form.post('/api/login')

      // Save the token.
      this.$store.dispatch('auth/saveToken', {
        token: data.token,
        remember: this.remember
      })

      // Fetch the user.
      await this.$store.dispatch('auth/fetchUser')

      // Redirect home.
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

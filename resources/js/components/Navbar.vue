<template>
    <!-- Navbar -->
    <nav class="navbar navbar-expand navbar-white navbar-light">
        <router-link :to="{ name: user ? 'home' : 'welcome' }" class="navbar-brand">
            {{ appName }}
        </router-link>
        <!-- Left navbar links -->
        <ul class="navbar-nav">
            <li class="nav-item d-none d-sm-inline-block mr-5">
                <locale-dropdown/>
            </li>
            <li class="nav-item d-none d-sm-inline-block">
                <router-link :to="{ name: 'company' }" class="nav-link">
                    {{ $t('company') }}
                </router-link>
            </li>
            <li class="nav-item d-none d-sm-inline-block">
                <router-link :to="{ name: 'employee' }" class="nav-link">
                    {{ $t('employee') }}
                </router-link>
            </li>

        </ul>

        <!-- Right navbar links -->
        <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown user-menu">
                <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">
                    <img :src="user.photo_url" class="user-image img-circle elevation-2" alt="User Image">
                    <span class="d-none d-md-inline">{{ user.name }} </span>
                </a>
                <ul class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                    <!-- User image -->
                    <li class="user-header bg-primary  h-50">
                        <img :src="user.photo_url" class="img-circle elevation-2" alt="User Image">

                        <p>
                            {{ user.name }}
                        </p>
                    </li>
                    <!-- Menu Footer-->
                    <li class="user-footer">
                        <router-link :to="{ name: 'settings.profile' }" class="btn btn-default btn-flat">
                            <!--                            <fa icon="cog" fixed-width />-->
                            {{ $t('settings') }}
                        </router-link>

                        <a href="#" class="btn btn-default btn-flat float-right" @click.prevent="logout">
                            <!--                            <fa icon="sign-out-alt" fixed-width />-->
                            {{ $t('logout') }}
                        </a>
                        <!--                        <a href="#" class="btn btn-default btn-flat">Profile</a>-->
                        <!--                        <a href="#" class="btn btn-default btn-flat float-right">Sign out</a>-->
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
    <!-- /.navbar -->
    <!-- <nav class="navbar navbar-expand-lg navbar-light bg-white">
       <div class="container">
         <router-link :to="{ name: user ? 'home' : 'welcome' }" class="navbar-brand">
           {{ appName }}
         </router-link>

         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false">
           <span class="navbar-toggler-icon" />
         </button>

         <div id="navbarToggler" class="collapse navbar-collapse">
           <ul class="navbar-nav">
             <locale-dropdown />
             &lt;!&ndash; <li class="nav-item">
               <a class="nav-link" href="#">Link</a>
             </li> &ndash;&gt;
           </ul>

           <ul class="navbar-nav ml-auto">
             &lt;!&ndash; Authenticated &ndash;&gt;
             <li v-if="user" class="nav-item dropdown">
               <a class="nav-link dropdown-toggle text-dark"
                  href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
               >
                 <img :src="user.photo_url" class="rounded-circle profile-photo mr-1">
                 {{ user.name }}
               </a>
               <div class="dropdown-menu">
                 <router-link :to="{ name: 'settings.profile' }" class="dropdown-item pl-3">
                   <fa icon="cog" fixed-width />
                   {{ $t('settings') }}
                 </router-link>

                 <div class="dropdown-divider" />
                 <a href="#" class="dropdown-item pl-3" @click.prevent="logout">
                   <fa icon="sign-out-alt" fixed-width />
                   {{ $t('logout') }}
                 </a>
               </div>
             </li>
             &lt;!&ndash; Guest &ndash;&gt;
             <template v-else>
               <li class="nav-item">
                 <router-link :to="{ name: 'login' }" class="nav-link" active-class="active">
                   {{ $t('login') }}
                 </router-link>
               </li>
               <li class="nav-item">
                &lt;!&ndash; <router-link :to="{ name: 'register' }" class="nav-link" active-class="active">
                   {{ $t('register') }}
                 </router-link>&ndash;&gt;
               </li>
             </template>
           </ul>
         </div>
       </div>
     </nav>-->
</template>

<script>
    import {mapGetters} from 'vuex'
    import LocaleDropdown from './LocaleDropdown'

    export default {
        components: {
            LocaleDropdown
        },

        data: () => ({
            appName: window.config.appName
        }),

        computed: mapGetters({
            user: 'auth/user'
        }),

        methods: {
            async logout() {
                // Log out the user.
                await this.$store.dispatch('auth/logout')

                // Redirect to login.
                this.$router.push({name: 'login'})
            }
        }
    }
</script>

<style scoped>
    .profile-photo {
        width: 2rem;
        height: 2rem;
        margin: -.375rem 0;
    }
</style>

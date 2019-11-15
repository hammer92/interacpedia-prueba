<template>
  <section class="content">
    <div class="error-page">
      <h2 class="headline text-warning"> 404</h2>

      <div class="error-content">
        <h3><i class="fas fa-exclamation-triangle text-warning"></i> {{ $t('page_not_found') }} </h3>
        <p>
          {{ $t('page_not_found_mensaje') }}
          <router-link :to="{ name: 'welcome' }">
            {{ $t('go_home') }}
          </router-link>
        </p>
      </div>
      <!-- /.error-content -->
    </div>
    <!-- /.error-page -->
  </section>
</template>

<script>
    export default {
        name: 'NotFound'
    }
</script>

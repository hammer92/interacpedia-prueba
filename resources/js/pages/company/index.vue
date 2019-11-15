<template>
  <!-- Content Wrapper. Contains page content -->
  <div class="container">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1> {{ $t('company') }}</h1>
          </div>
          <div class="col-sm-6 text-right">
            <crear-company @ok="getData" />
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
      <!-- Default box -->
      <div class="card card-solid">
        <div class="card-header">
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-start">
              <li v-if="lista.current_page !== 1" class="page-item">
                <a class="page-link" href="#" tabindex="-1" aria-disabled="true" @click.prevent="getData(lista.current_page-1)">{{ $t('previous') }}</a>
              </li>
              <li class="page-item">
                <p class="page-link">
                  {{ lista.current_page }}/{{ lista.last_page }} Pag.
                </p>
              </li>
              <li v-if="lista.current_page !== lista.last_page" class="page-item">
                <a class="page-link" href="#" @click.prevent="getData(lista.current_page+1)">{{ $t('next') }}</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="card-body pb-0">
          <div class="row d-flex align-items-stretch">
            <div v-if="lista.data.length === 0" class="col-12">
              <div class="error-page">
                <h2 class="headline text-warning">
                  <i class="fas fa-exclamation-triangle text-warning" />
                </h2>

                <div class="error-content">
                  <h3> {{ $t('data_not_found') }} </h3>
                  <p>{{ $t('data_not_found_mensaje') }} {{ $t('company') }}</p>
                </div>
                <!-- /.error-content -->
              </div>
            </div>
            <div v-for="(item,index) in lista.data" :key="index" class="col-12 col-sm-6 col-md-4 d-flex align-items-stretch">
              <div class="card bg-light">
                <div class="card-header text-muted border-bottom-0">
                  {{ item.name }}
                </div>
                <div class="card-body pt-0">
                  <div class="row">
                    <div class="col-7">
                      <p class="lead text-sm">
                        <b> {{ item.email }}</b>
                      </p>
                      <p class="text-muted text-sm">
                        <b>{{ $t('website') }}: </b> {{ item.website }}
                      </p>
                    </div>
                    <div class="col-5 text-center">
                      <img
                        src="https://www.gravatar.com/avatar/d94d45fb8bbf440055409739bccf6bce.jpg?s=200&d=mm"
                        alt="" class="img-circle img-fluid"
                      >
                    </div>
                  </div>
                </div>
                <div class="card-footer">
                  <div class="text-right">
                    <a href="#" class="btn btn-sm bg-danger" @click.prevent="remove(item.id)">
                      <i class="fas fa-trash-alt" />
                    </a>
                    <a href="#" class="btn btn-sm btn-primary" @click.prevent="edit(item)">
                      <i class="fas fa-edit" /> {{ $t('edit') }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /.card-body -->

        <!-- /.card-footer -->
      </div>
      <!-- /.card -->
    </section>
    <!-- /.content -->
    <edit-company ref="edit" @ok="getData" />
  </div>
  <!-- /.content-wrapper -->
</template>

<script>
import CrearCompany from './create'
import EditCompany from './edit'
export default {
  name: 'Index',
  middleware: 'auth',
  components: { EditCompany, CrearCompany },
  data: () => ({
    lista: {
      data: []
    }
  }),
  mounted () {
    this.getData()
  },
  methods: {
    async getData (page = 1) {
      let resp = await this.$http(`/api/companies?page=${page}`)
      if (resp) this.lista = resp.data
    },

    async remove (id) {
      let resp = await this.$http.delete(`/api/companies/${id}`)
      if (resp) {
        console.log('emilinado')
        this.getData(1)
      }
    },
    edit (item) {
      this.$refs.edit.setData(item)
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <!-- Content Wrapper. Contains page content -->
  <div class="container">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1> {{ $t('employee') }}</h1>
          </div>
          <div class="col-sm-6 text-right">
            <crear-employee :lista-companies="listaCompanies" @ok="getData" />
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
                <a class="page-link" href="#" tabindex="-1" aria-disabled="true"
                   @click.prevent="getData(lista.current_page-1)"
                >{{ $t('previous') }}</a>
              </li>
              <li class="page-item">
                <p class="page-link">
                  {{ lista.current_page }}/{{ lista.last_page }}
                  Pag.
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
                  <i
                    class="fas fa-exclamation-triangle text-warning"
                  />
                </h2>

                <div class="error-content">
                  <h3> {{ $t('data_not_found') }} </h3>
                  <p>{{ $t('data_not_found_mensaje') }} {{ $t('employee') }}</p>
                </div>
                <!-- /.error-content -->
              </div>
            </div>
            <div v-else class="card-body table-responsive p-0" style="height: 300px;">
              <table class="table table-head-fixed">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>{{ $t('first_name') }}</th>
                    <th>{{ $t('last_name') }}</th>
                    <th>{{ $t('company') }}</th>
                    <th>{{ $t('email') }}</th>
                    <th>{{ $t('phone') }}</th>
                    <th>{{ $t('actions') }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item,index) in lista.data" :key="index">
                    <td>{{ index+1 }}</td>
                    <td>{{ item.first_name }}</td>
                    <td>{{ item.last_name }}</td>
                    <td>{{ item.company.name }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.phone }}</td>
                    <td>
                      <div class="text-right">
                        <a href="#" class="btn btn-sm bg-danger" @click.prevent="remove(item.id)">
                          <i class="fas fa-trash-alt" />
                        </a>
                        <a href="#" class="btn btn-sm btn-primary" @click.prevent="edit(item)">
                          <i class="fas fa-edit" /> {{ $t('edit') }}
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <!-- /.card-body -->

        <!-- /.card-footer -->
      </div>
      <!-- /.card -->
    </section>
    <!-- /.content -->
    <edit-employee ref="edit" :lista-companies="listaCompanies" @ok="getData" />
  </div>
  <!-- /.content-wrapper -->
</template>

<script>
import CrearEmployee from './create'
import EditEmployee from './edit'

export default {
  name: 'Index',
  middleware: 'auth',
  components: { CrearEmployee, EditEmployee },
  data: () => ({
    lista: {
      data: []
    },
    listaCompanies: []
  }),
  mounted () {
    this.getData()
    this.getDataEmployee()
  },
  methods: {
    async getData (page = 1) {
      this.lista = []
      let resp = await this.$http(`/api/employees?page=${page}`)
      if (resp) this.lista = resp.data
    },

    async getDataEmployee () {
      let resp = await this.$http(`/api/companies/select`)
      if (resp) this.listaCompanies = resp.data
    },

    async remove (id) {
      let resp = await this.$http.delete(`/api/employees/${id}`)
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

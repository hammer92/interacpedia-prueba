<template>
    <modal ref="modalCrear" button
           id="modal-create-employee"
           :title="`${ $t('create') } ${ $t('employee') }`"
           button-class="btn btn-sm btn-primary"
           :button-text="$t('create')"
           @save="save"
    >
        <template slot="button-icon">
            <i class="fas fa-plus"></i>
        </template>
        <form @submit.prevent="save" @keydown="form.onKeydown($event)">

            <div class="input-group mb-3">
                <div class="input-group-append">
                    <div class="input-group-text">
                        <span class="fas fa-city"></span>
                    </div>
                </div>
                <select  v-model="form.company_id" class="custom-select" :placeholder="$t('company')" :class="{ 'is-invalid': form.errors.has('company_id') }">
                    <option selected disabled>Choose...</option>
                    <option v-for="item in listaCompanies" :value="item.id"> {{ item.name }} </option>
                </select>
                <has-error :form="form" field="company_id" />
            </div>

            <div class="input-group mb-3">
                <div class="input-group-append">
                    <div class="input-group-text">
                        <span class="fas fa-user"></span>
                    </div>
                </div>
                <input v-model="form.first_name" type="text" :class="{ 'is-invalid': form.errors.has('first_name') }" class="form-control" :placeholder="$t('first_name')">

                <has-error :form="form" field="first_name" />
            </div>

            <div class="input-group mb-3">
                <div class="input-group-append">
                    <div class="input-group-text">
                        <span class="fas fa-user"></span>
                    </div>
                </div>
                <input v-model="form.last_name" type="text" :class="{ 'is-invalid': form.errors.has('last_name') }" class="form-control" :placeholder="$t('last_name')">

                <has-error :form="form" field="last_name" />
            </div>


            <div class="input-group mb-3">
                <div class="input-group-append">
                    <div class="input-group-text">
                        <span class="fas fa-envelope"></span>
                    </div>
                </div>
                <input v-model="form.email" type="email" :class="{ 'is-invalid': form.errors.has('email') }" class="form-control" :placeholder="$t('email')">

                <has-error :form="form" field="email" />
            </div>

            <div class="input-group mb-3">
                <div class="input-group-append">
                    <div class="input-group-text">
                        <span class="fas fa-phone"></span>
                    </div>
                </div>
                <input v-model="form.phone" type="text" :class="{ 'is-invalid': form.errors.has('phone') }" class="form-control" :placeholder="$t('phone')">

                <has-error :form="form" field="phone" />
            </div>
        </form>


    </modal>
</template>

<script>
    import Form from 'vform'
    export default {
        props:{
            listaCompanies:{
                type:Array,
                default:()=>[]
            }
        },
        name: "CrearEmployee",
        data: () => ({
            form: new Form({
                first_name: '',
                last_name: '',
                company_id: '',
                email: '',
                phone: ''
            }),
        }),
        methods:{
            async save(){
                const resp = await this.form.post('/api/employees').catch(error=>{
                    console.log(error)
                    return
                })
                if(resp){
                    this.$refs.modalCrear.close()
                    this.form.clear()
                    this.form.reset()
                    this.$emit('ok')
                }

            }
        }
    }
</script>

<style scoped>

</style>

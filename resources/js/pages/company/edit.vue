<template>
    <modal ref="modalCrear"
           id="modal-edit-company"
           :title="`${ $t('edit') } ${ $t('company') }`"
           button-class="btn btn-sm btn-primary"
           :button-text="$t('edit')"
           @save="save"
           :cargando="cargando"
    >
        <form @submit.prevent="save" @keydown="form.onKeydown($event)" class="text-center">

                <img
                        :src="`/storage/${logo}`"
                        alt="" class="img-circle img-fluid"
                >
            <div class="input-group mb-3">
                <div class="input-group-append">
                    <div class="input-group-text">
                        <span class="fas fa-user"></span>
                    </div>
                </div>
                <input v-model="form.name" type="text" :class="{ 'is-invalid': form.errors.has('name') }" class="form-control" :placeholder="$t('name')">

                <has-error :form="form" field="name" />
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
                        <span class="fas fa-code"></span>
                    </div>
                </div>
                <input v-model="form.website" type="text" :class="{ 'is-invalid': form.errors.has('website') }" class="form-control" :placeholder="$t('website')">

                <has-error :form="form" field="website" />
            </div>
            <vueFile v-model="form.logofile" />
        </form>


    </modal>
</template>

<script>
    import Form from 'vform'
    export default {
        name: "EditCompany",
        data: () => ({
            form: new Form({
                name: '',
                email: '',
                website: '',
                logofile: ''
            }),
            id: false,
            logo:'',
            cargando:false
        }),
        methods:{
            setData(item){
                this.id = item.id
                this.logo = item.logo
                this.form = new Form(item)
                this.$refs.modalCrear.open()
            },
            async save(){
                this.cargando = true
                const resp = await this.form.submit('post', `/api/companies/${this.id}`, {
                    // Transform form data to FormData
                    transformRequest: [
                        function(data) {
                            let formData = new FormData()
                            for(let key of Object.keys(data)){
                                formData.append(key,data[key])
                            }
                            return formData
                        }
                    ]
                }).catch(error => {
                    console.log(error)
                })

                this.cargando = false
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

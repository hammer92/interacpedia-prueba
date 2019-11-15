<template>
    <modal ref="modalCrear"
           id="modal-edit-company"
           :title="`${ $t('edit') } ${ $t('company') }`"
           button-class="btn btn-sm btn-primary"
           :button-text="$t('edit')"
           @save="save"
    >
        <form @submit.prevent="save" @keydown="form.onKeydown($event)">

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
                website: ''
            }),
            id: false
        }),
        methods:{
            setData(item){
                this.id = item.id
                this.form = new Form(item)
                this.$refs.modalCrear.open()
            },
            async save(){
                const resp = await this.form.put(`/api/companies/${this.id}`).catch(error=>{
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

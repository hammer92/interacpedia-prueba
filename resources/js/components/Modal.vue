<template>
    <section>
        <button v-if="button" type="button" :class="buttonClass" data-toggle="modal" :data-target="`#${id}`">
            <slot name="button-icon"></slot>
            {{ buttonText }}
        </button>

        <div class="modal fade" :id="id">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" v-text="title"></h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <slot></slot>
                    </div>
                    <div class="modal-footer justify-content-between">
                        <button class="btn btn-default" @click="$emit('close')" data-dismiss="modal">{{ $t('close') }}</button>
                        <button class="btn btn-primary" @click="$emit('save')">{{ $t('save') }}</button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
    </section>

</template>

<script>
    const { appName } = window.config
    export default {
        name: "Modal",
        props:{
            id:{
                type:String,
                required: true
            },
            button:{
                type:Boolean,
                default: false
            },
            title:{
                type:String,
                default: appName
            },
            buttonClass:{
                type:String,
                default: 'btn btn-default'
            },
            buttonText:{
                type:String,
                default: 'modal'
            }
        },
        methods:{
            close(){
                this.$j(`#${this.id}`).modal('hide')
            },
            open(){
                this.$j(`#${this.id}`).modal('show')
            }
        }
    }
</script>

<style scoped>

</style>

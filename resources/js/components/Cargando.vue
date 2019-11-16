<template >
    <div v-if="activo">

        <section  class="contenedor" :style="{ opacity:activo?1:0,zIndex:activo?999999:0,width:activo?'100vw':0,height:activo?'100vh':0 }">

            <semipolar-spinner
                    class="progress"
                    :animation-duration="1500"
                    :size="64"
                    color="#25628F"
            />
        </section>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import { SemipolarSpinner  } from 'epic-spinners'

    export default {
        components:{
            SemipolarSpinner
        },

        computed:{
            ...mapGetters({
                activo:'auth/cargando',
            })
        },
        methods:{
            // ...mapMutations({
            //     cargando:'auth/cargando'
            // })
        }
    }
</script>

<style lang="scss" scoped>
    .contenedor{
        position: fixed;
        z-index: 999999;
        width: 100vw;
        height: 100vh;
        background-color: rgba(255,255,255,.7);
        display: flex;
        justify-content: center;
        align-items: center;
        transition: width 0.2s, opacity 0.4s;
    }
    .progress {
        height: 64px;
        width: 64px;
        transition: width 0.2s, opacity 0.4s;
        opacity: 1;
        z-index: 999999;

    }
    .porcentaje{
        width: 100vw;
        height: 100vh;
        position: fixed;
        z-index: 999999;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        display: flex;
        top: 52px;
        color: #00000082;
    }
</style>


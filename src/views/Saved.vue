<template>
    <section id="saved-section">
        <div v-if="this.storage !== null">
            <SnacksList :results="savedList"/>
        </div>
        <p class="prompt" v-else>Save some snacks!</p>
    </section>
</template>

<script>
    import SnacksList from '../components/SnacksList.vue';

    export default {
        components: {SnacksList},
        data(){
            return{
                savedList: {},
                storage: JSON.parse(localStorage.getItem('saved'))
            }
        },
        mounted(){
            if(this.storage !== null){
                this.savedList = {products: this.storage};
            }
        }
    }
</script>

<style>
    #saved-section{
        margin-top: var(--margin-2);
    }
</style>
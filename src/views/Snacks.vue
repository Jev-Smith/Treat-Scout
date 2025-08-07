<template>
    <main>
        <section v-if="results">
            <p class="prompt" v-if="results.count === 0">No snacks found :(</p>
            <div v-else>
                <header id="counts">
                    <ul>
                        <li>Results: {{ results.products.length }}</li>
                        <li>Page: {{ results.page }} of {{ totalPages }}</li>
                    </ul>

                    <nav id="page-nav">
                        <button @click="getPreviousPage" 
                                type="button" class="arrows" 
                                aria-label="go to previous page">
                            <ArrowLeft aria-hidden="true"/>
                        </button>

                        <button @click="getNextPage" 
                                type="button" 
                                class="arrows arrow-right" 
                                aria-label="go to next page">
                            <ArrowRight class="arrow-svg" aria-hidden="true"/>
                        </button>
                    </nav>
                </header>

                <SnacksList :results="results" :isRemove="false" title="save"/>
            </div>
        </section>
        <p class="prompt" v-else>Choose a location and search!</p>
    </main>
</template>

<script>
    import { ArrowLeft, ArrowRight } from 'lucide-vue-next';
    import getResults from '../api/handle-form';
    import SnacksList from '../components/SnacksList.vue';

    const fetchPage = getResults;

    export default {
        props: ['results', 'location', 'totalPages'],
        components: {ArrowLeft, ArrowRight, SnacksList},
        data(){
            return{
                nextPageNum: 2,
                previousPageNum: null
            }
        },
        methods:{
            async getNextPage(){
                if(this.totalPages === 1){
                    return;
                }
                else if(this.results.page < this.totalPages){

                    fetchPage(this.location, this.nextPageNum)
                    .then(res => {
                        this.nextPageNum++;
                        this.$emit('update', res);
                    }).catch(err => console.error(err))
                }
            },
            async getPreviousPage(){
                if(this.totalPages === 1){
                    return;
                }
                else if(this.results.page === 1){
                    return;
                }
                else{
                    this.previousPageNum = this.results.page - 1;
                    
                    fetchPage(this.location, this.previousPageNum)
                    .then(res => {
                        this.nextPageNum = res.data.page + 1;
                        this.$emit('update', res)
                    }).catch(err => console.error(err))
                }
            }
        }
    }
</script>

<style>
    /* Shared styles */
    #counts, #counts ul, .saved-container, .snacks p, .image-div {
        display: flex;
    }

    .snacks h2, .snacks p, .image-div {
        padding: 0.625rem;
    }

    .para-icon, .snacks span{
        margin-right: 6px;
    }

    .brands, .img-link{
        color:#03748d;
    }

    /* End of shared styles */

    main {
        margin-top: var(--margin-2);
    }

    ul{
        list-style-type: none;
    }

    article{
        border-radius: 10px;
    }

    .snacks h2{
        font-size: 1.125rem;
        border-radius: 10px 10px 0 0;
        background: #ff82bc;
    }

    .prompt {
        text-align: center;
    }

    #counts {
        margin-bottom: var(--margin-2);
        position: sticky;
        top: 80px;
        z-index: 1;
        background: var(--active);
        color: var(--fourth);
        border: 1px solid #000;
        border-radius: 30px;
        padding: .5rem 1rem;
        justify-content: space-between;
        align-items: center;
    }

    #counts ul{
        justify-content: space-between;
        width: 76%;
    }

    .arrow-right{
        margin-left: 5px;
    }

    .arrows{
        padding: 4px;
        border-radius: 50%;
        border: 3px solid #000;
    }

    .arrows:hover{
        background: var(--third);
        cursor: pointer;
        color: var(--fourth);
    }

    #snacks-container{
        display: grid;
        row-gap: 20px;
    }

    .snacks{
        background: var(--fourth);
        box-shadow: 2px 3px 5px #706f6f;
    }

    .snacks p, .image-div{
        align-items: center;
    }

    .img-link{
        margin-right: 4px;
        text-decoration: none;
    }

    .img-link:hover{
        text-decoration: underline;
        color: var(--active);
    }

    .saved-container{
        padding: 0 0.625rem 0 0.625rem;
        justify-content: end;
    }

    .saved-button{
        background: none;
        border: none;
        cursor: pointer;
    }

    .saved-svg:hover{
        fill: var(--active);
    }
</style>
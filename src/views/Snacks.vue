<template>
    <main>
        <section v-if="data">
            <p class="prompt" v-if="data.count === 0">No snacks found :(</p>
            <div v-else>
                <header id="counts">
                    <ul>
                        <li>Results: {{ data.count }}</li>
                        <li>Page: {{ data.page }} of {{ data.page_count }}</li>
                    </ul>

                    <nav id="page-nav">
                        <button type="button" class="arrows">
                            <ArrowLeft />
                        </button>
                        <button type="button" class="arrows arrow-right">
                            <ArrowRight class="arrow-svg"/>
                        </button>
                    </nav>
                </header>

                <section id="snacks-container">
                    <article class="snacks" v-for="snack in data.products" :key="snack.id">
                        <p>{{ snack.product_name }}</p>
                    </article>
                </section>
            </div>
        </section>
        <p class="prompt" v-else>Choose a location and search!</p>
    </main>
</template>

<script>
    import { ArrowLeft, ArrowRight } from 'lucide-vue-next';

    export default {
        props: ['data'],
        components: {ArrowLeft, ArrowRight}
    }
</script>

<style>
    /* Shared styles */
    #counts, #counts ul {
        display: flex;
    }
    /* End of shared styles */

    main {
        margin-top: var(--margin-2);
    }

    .prompt {
        text-align: center;
    }

    ul{
        list-style-type: none;
    }

    #counts {
        margin-bottom: var(--margin-2);
        position: sticky;
        top: 80px;
        z-index: 1;
        background: var(--fourth);
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
    }
</style>
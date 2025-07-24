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
                        <button type="button" class="arrows" aria-label="go to previous page">
                            <ArrowLeft aria-hidden="true"/>
                        </button>
                        <button type="button" class="arrows arrow-right" aria-label="go to next page">
                            <ArrowRight class="arrow-svg" aria-hidden="true"/>
                        </button>
                    </nav>
                </header>

                <section id="snacks-container">
                    <article class="snacks" v-for="snack in data.products" :key="snack.id">

                        <div>
                            <header>
                                <h2>{{ snack.product_name }}</h2>
                            </header>

                            <div class="image-div">
                                <Image class="para-icon" aria-hidden="true"/>
                                <span>Images:</span>
                                <div>
                                    <a :href="link" target="_blank" class="img-link"
                                        v-for="link in snack['selected_images'].front.display" :key="link"> View
                                    </a>
                                </div>
                            </div>
                            <p>
                                <Store class="para-icon" aria-hidden="true"/>
                                <span>Brands:</span> 
                                <span>{{ snack.brands_tags.toString() }}</span>
                            </p>

                            <div class="like-container">
                                <button type="button" class="like-button" aria-label="Add to saved list">
                                    <Heart class="like-svg" aria-hidden="true"/>
                                </button>
                            </div>
                        </div>
                    </article>
                </section>
            </div>
        </section>
        <p class="prompt" v-else>Choose a location and search!</p>
    </main>
</template>

<script>
    import { ArrowLeft, ArrowRight, Heart, Image, Store } from 'lucide-vue-next';

    export default {
        props: ['data'],
        components: {ArrowLeft, ArrowRight, Heart, Image, Store }
    }
</script>

<style>
    /* Shared styles */
    #counts, #counts ul, .like-container, .snacks p, .image-div {
        display: flex;
    }

    .snacks h2, .snacks p, .image-div {
        padding: 0.625rem;
    }

    .para-icon, .snacks span{
        margin-right: 6px;
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
        color: #03748d;
        text-decoration: none;
    }

    .img-link:hover{
        text-decoration: underline;
        color: var(--active);
    }

    .like-container{
        padding: 0 0.625rem 0 0.625rem;
        justify-content: end;
    }

    .like-button{
        background: none;
        border: none;
        cursor: pointer;
    }

    .like-svg:hover{
        fill: var(--active);
    }
</style>
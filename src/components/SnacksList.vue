<template>
    <section id="snacks-container">
        <article class="snacks" v-for="snack in results.products" 
                :key="snack.id" :id="snack.id" :ref="snack.id">
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
                    <span class="brands">{{ snack.brands_tags.toString() }}</span>
                </p>

                <div class="saved-container">
                    <button :title="this.title"
                            type="button" 
                            class="saved-button" 
                            aria-label="Add to saved list"
                            @click="saveFavouriteOrRemove(snack.id)">
                        <Heart class="heart-svg" :class="{hide: hideSave}" aria-hidden="true"/>
                        <HeartCrack class="heart-svg" :class="{hide: hideRemove}" aria-hidden="true"/>
                    </button>
                </div>
            </div>
        </article>
    </section>
</template>

<script>
    import { Heart, Image, Store, HeartCrack} from 'lucide-vue-next';

    export default {
        props: ['results', 'isRemove', 'title', 'isHidden'],
        components: {Heart, Image, Store, HeartCrack },
        data(){
            return {
                saveFavouriteList: [],
                hideSave: this.isHidden[0],
                hideRemove: this.isHidden[1]
            }
        },  
        methods:{
            saveFavouriteOrRemove(id){
                let target;
                let filteredList;

                if(this.isRemove){
                    filteredList = JSON.parse(localStorage.getItem('saved')).filter(obj => {
                        return obj.id !== this.$refs[id][0].id;
                    });
                    
                    localStorage.setItem('saved', JSON.stringify(filteredList));
                    const updatedStorage = JSON.parse(localStorage.getItem('saved'));
                    
                    this.$emit('localStorageUpdate', updatedStorage);

                    if(JSON.parse(localStorage.getItem('saved')).length === 0){
                        localStorage.setItem('saved', null);
                    }
                }else{
                    target = this.results.products.filter(obj => obj.id === this.$refs[id][0].id)[0]
                    this.saveFavouriteList.push({...target, saved: true});
                    localStorage.setItem('saved', JSON.stringify(this.saveFavouriteList));
                }
            }
        },
        mounted(){
            if(JSON.parse(localStorage.getItem('saved')) !== null){
                this.saveFavouriteList = JSON.parse(localStorage.getItem('saved'));
            }
        }
    }
</script>

<style>
     /* Shared styles */
    .saved-container, .snacks p, .image-div {
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

    .heart-svg:hover{
        fill: var(--active);
    }

    .hide{
        display: none;
    }
</style>
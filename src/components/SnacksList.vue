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
                        <Heart class="saved-svg" aria-hidden="true"/>
                    </button>
                </div>
            </div>
        </article>
    </section>
</template>

<script>
    import { Heart, Image, Store } from 'lucide-vue-next';

    export default {
        props: ['results', 'isRemove', 'title'],
        components: {Heart, Image, Store },
        data(){
            return {
                saveFavouriteList: []
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

</style>
<template>
    <form @submit.prevent="handleForm(location)
                            .then(data => this.$emit('send-results', data))
                            .catch(err => console.error(err))">

        <label for="locations">Choose a location:</label>
        <select v-model="location" id="locations">
            <option :value="loc" v-for="loc in locationList" :key="loc.index">
                {{ loc }}
            </option>
        </select>

        <button type="submit" id="search-button">
            <Search aria-hidden="true"/>
            <span id="search-text">Search</span>
        </button>
    </form>
</template>

<script>
import { Search } from 'lucide-vue-next';
import getResults from '../api/handle-form';

export default {
    components: {Search},
    data(){
        return {
            location: '',
            locationList: null,
            handleForm: getResults
        }
    },
    methods:{},
    mounted(){
        const getLocations = async () => {

            try{
                const url = 'https://static.openfoodfacts.org/data/taxonomies/countries.json';
                const res = await fetch(url);
                
                if(!res.ok){
                    throw new Error('Could not fetch locations');
                }

                const json = await res.json();
                const keys = Object.keys(json);
                
                this.locationList = keys.map((key) => {
                    return json[key].name.en;
                })

                this.locationList = this.locationList.sort();
            }
            catch(err){
                console.error(err.message)
            }
        }

        getLocations();
    }
}
</script>

<style>
    /* Shared styles */
    #search-button, select{
        width: 100%;
        border: 1px solid #000;
        border-radius: 5px;
    }

    select, label{
        margin-bottom: .5rem;
    }
    /* End of shared styles */

    select{
        height: 30px;
        padding-left: 4px;
    }

    option:checked{
        color: var(--active);
    }

    #search-button{
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        height: var(--height-50);
        font-size: 1.125rem;
        cursor: pointer;
    }

    #search-button:hover{
        background: var(--third);
        color: var(--fourth);
        border: 1px solid var(--fourth);
    }

    #search-text{
        margin-left: 5px;
    }
</style>
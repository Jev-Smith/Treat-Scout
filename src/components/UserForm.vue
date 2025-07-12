<template>
    <form @submit.prevent="handleForm">
        <label for="location">Choose a location:</label>
        <select v-model="location" id="locations">
            <option :value="loc" v-for="loc in locationList" :key="loc.index">
                {{ loc }}
            </option>
        </select>

        <p>{{ location }}</p>
        <button type="submit">Search</button>
    </form>
</template>

<script>
export default {
    data(){
        return {
            location: '',
            locationList: null
        }
    },
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

</style>
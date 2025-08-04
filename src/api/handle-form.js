async function handleForm(selectedLocation, page = 1){
    if (!selectedLocation) {
        return;
    }

    const searchParams = 'categories_tags_en=snacks&fields=brands_tags,product_name,selected_images,id&page_size=24';

    const params = new URLSearchParams();
    params.append("countries_tags_en", selectedLocation);

    try {
        const url = `https://world.openfoodfacts.net/api/v2/search?${searchParams}&page=${page}&${params}`;

        const res = await fetch(`${url}`, {
            method: 'GET',
            headers: { 'Authorization': 'Basic ' + btoa('off:off') }
        });

        if (!res.ok) {
            throw new Error('Could not fetch results');
        }

        let data = await res.json();
        const filteredArr = data.products.filter(obj => Object.keys(obj).length === 4
                                                && obj.product_name.length !== 0);

        const totalPages = Math.ceil(data.count / data.page_count);
        data = { ...data, products: filteredArr, totalPages};

        return { data, selectedLocation };
    } catch (err) {
        console.log('hello world')
        console.error(err.message);
    }
}

export default handleForm;
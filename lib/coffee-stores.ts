export const fetchCoffeeStores = async () => {
    const response = await fetch(`https://api.mapbox.com/search/searchbox/v1/suggest?q=Kafe&language=en&limit=6&proximity=11.061586906809314,60.797500998369294&session_token=091e1a81-18ab-49f1-8934-87bb45e05d64&access_token=${process.env.MAPBOX_API}`);
    
    return await response.json();
}
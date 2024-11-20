type MabboxType = {
    mapbox_id: string;
    address: string;
    name: string;
};

const transformCoffeeData = (result: MabboxType) => {
    return {
        id: result.mapbox_id,
        address: result.address || '',
        name: result.name,
        imgUrl: "https://tellusdmsmedia.newmindmedia.com/wsimgs/Pust_lokale_4_c_Gunvor_Eline_Jakobsen_716833154.jpg[ProductImage][4C1E6111A6C02FD54491F7684D1FA6]"
    }
}

export const fetchCoffeeStores = async () => {
    try{
        const response = await fetch(`https://api.mapbox.com/search/searchbox/v1/suggest?q=Kafe&language=en&limit=6&proximity=11.061586906809314,60.797500998369294&session_token=091e1a81-18ab-49f1-8934-87bb45e05d64&access_token=${process.env.MAPBOX_API}`);
        
        const data = await response.json();

        return data.suggestions.map((result: MabboxType) => transformCoffeeData(result))
    } catch (error) {
        console.error("Error while fetching coffee stores", error)
    }
};
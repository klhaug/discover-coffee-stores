import { MabboxType, SingleCoffeeStoreType } from "@/types";

const transformCoffeeData = (result: MabboxType) => {
    return {
        id: result.id,
        address: result.properties.address || '',
        name: result.text,
        imgUrl: "https://tellusdmsmedia.newmindmedia.com/wsimgs/Pust_lokale_4_c_Gunvor_Eline_Jakobsen_716833154.jpg[ProductImage][4C1E6111A6C02FD54491F7684D1FA6]"
    }
}

const transformSingleCoffeeData = (result: SingleCoffeeStoreType) => {
    return {
        id: result.id,
        address: result.properties.full_address || '',
        name: result.properties.name,
        imgUrl: "https://tellusdmsmedia.newmindmedia.com/wsimgs/Pust_lokale_4_c_Gunvor_Eline_Jakobsen_716833154.jpg[ProductImage][4C1E6111A6C02FD54491F7684D1FA6]"
    }
}



export const fetchCoffeeStores = async (longLat: string, limit: number) => {
    try{
        const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/Cafe.json?limit=${limit}&proximity=${longLat}&access_token=${process.env.MAPBOX_API}`);
        
        const data = await response.json();
        // console.log(data)
        return data?.features?.map((result: MabboxType) => transformCoffeeData(result)
    ) || [];
    } catch (error) {
        console.error("Error while fetching coffee stores", error)
        return [];
    }
};

export const fetchCoffeeStore = async (id: string) => {
    try{
        const response = await fetch(`https://api.mapbox.com/search/geocode/v6/forward?q=${id}&limit=1&proximity=ip&access_token=${process.env.MAPBOX_API}`);
        
        const data = await response.json();

        const coffeeStore = data?.features?.map((result: SingleCoffeeStoreType) => transformSingleCoffeeData(result)) || [];   

        return coffeeStore.length > 0 ? coffeeStore[0] : {};
        
    } catch (error) {
        console.error("Error while fetching coffee stores", error)
        return {};
    }
};


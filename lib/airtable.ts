import { AirtableRecordType } from "@/types";

var Airtable = require('airtable');
var base = new Airtable({apiKey: process.env.AIRTABLE_TOKEN}).base('appIWiiFIsRFjfsFJ');

const table = base('coffeStoresDB')


//findRecord

export const findRecordByFilter = async (id: string) => {
    const findRecords = await table
        .select({
            filterByFormula: `id="${id}"`
        })
        .firstPage();

        const allRecords = findRecords.map((record: AirtableRecordType) => {
            return {
                recordId: record.id,
                ...record.fields,
            };
        })
}
//createRecord

const createCoffeeStore = async(id: string) => {
    
    const records = await findRecordByFilter(id);

    if(records.length === 0 ) {
        //create
    } else {
        //return
    }
};
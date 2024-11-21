export type CoffeeStoreType = {
    name: string,
    imgUrl: string,
    id: string,
    address: string
    voting: number;
  }

export type SingleCoffeeStoreType = {
    id: string,
    properties: {
        full_address: string,
        name: string
    }
  }

export type MabboxType = {
    id: string;
    properties: {
        address: string;
    }
    text: string;
};

export type CardType = {
    name: string;
    imgUrl: string;
    href: string;
};

export type AirtableRecordType = {
    id: string;
    recordId: string;
    fields: CoffeeStoreType;
}
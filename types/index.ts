export type CoffeeStoreType = {
    name: string,
    imgUrl: string,
    id: string,
    address: string
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
}
export default interface Products {
    _id: number;
    title: string,
    isNew: boolean;
    price: number;
    oldPrice: number;
    description: string;
    image: string;
    category: string;
    quantity: number;
    ratings: number;
}
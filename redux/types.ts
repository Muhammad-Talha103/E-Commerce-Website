import Products from "@/components/Products/types";

export interface StoreState {
  productsData: Products[];

}

export interface StateProps {
  shopping: {
    productsData: [];
  };
}


export interface CartItemProps {
  id: string;
  category: string;
  brand: string;
  name: string;
  price: number;
  top_description: string;
  image: string;
  amount: number;
}



export interface InitialStateInterface {
  cart: any;
  cartItems: any;
  storeInventory: any;
  amount: number;
  total: number;
  isLoading: boolean;
  error: string | null
}


const typesofCart = () => {

}

export default typesofCart;

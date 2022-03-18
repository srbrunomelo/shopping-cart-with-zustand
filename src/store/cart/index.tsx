import create, { SetState, GetState } from 'zustand' 
import { ProductType } from '../../components/ProductItem'
import { CartState } from './type'

const useCartStore = create<CartState>((set: SetState<CartState>, get: GetState<CartState>) => ({
  products: [], 
  open: false, 
 
  toggle: () => {
    const { open } = get();
    set({ open: !open })
  }, 

  addProduct: (newProduct: ProductType) => { 
    const { products, open } = get();
    
    if (!products.includes(newProduct)) { 
      set({ products: [...products, newProduct] })
    } 

    set({ open: true }) 
  },

  remove: (product: ProductType) => {
    const { products } = get(); 
    const index = products.indexOf(product);

    if (index > -1) {
      products.splice(index, 1);
      set({ products })
    }
  },

  reset: () => {
    const { open, products } = get();
    set({ open: false }) 
    set({ products: [] }) 
  }
   
}));

export default useCartStore; 
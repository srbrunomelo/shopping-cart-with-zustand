import { renderHook, act } from '@testing-library/react-hooks';

import useCartStore from './'
import { products } from '../../mock/products';

describe('useCartStore', () => {  
  let result: any;
 
  beforeEach(() => {
    result = renderHook(() => useCartStore()).result
  });
 
  afterEach(() => {  
    act(() => {
      result.current.reset()
    });
  });

  it('deve retornar open é igual a false', () => {
    const { result } = renderHook(() => useCartStore())
 
    expect(result.current.open).toBe(false)
  })

  it('deve alternar open para true', () => {
    const { result } = renderHook(() => useCartStore())

    result.current.toggle()
    expect(result.current.open).toBe(true)
  })

  it('deve adicionar produtos e abrir o carrinho', () => {
    const { result } = renderHook(() => useCartStore())

    expect(result.current.products).toHaveLength(0)
    expect(result.current.open).toBe(false) 
  
    act(() => {
      for (const product of products) {
        result.current.addProduct(product);
      }
    });
 
    expect(result.current.open).toBe(true) 
    expect(result.current.products).toHaveLength(products.length);
  })
 
  it('NÃO deve adicionar o mesmo produto duas vezes', () => {
    const { result } = renderHook(() => useCartStore())

    expect(result.current.products).toHaveLength(0)

    act(() => {
      result.current.addProduct(products[0]);
      result.current.addProduct(products[0]);
    })

    expect(result.current.products).toHaveLength(1)
  })

  it('deve remover produrtos', () => {
    const { result } = renderHook(() => useCartStore())

    expect(result.current.products).toHaveLength(0)

    act(() => {
      result.current.addProduct(products[0]); 
    })

    result.current.remove(products[0]); 

    expect(result.current.products).toHaveLength(0)
  }) 
})
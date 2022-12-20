import styles from './Product.module.scss';
import { useState } from 'react';
import ProductImage from './ProductImage/ProductImage.js';
import ProductForm from './ProductForm/ProductForm.js';
import { useMemo } from 'react';

const Product = ({name, title, basePrice, colors, sizes, }) => {

  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

    const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
    }
  
    const getPrice = useMemo(() => {
      const found = sizes.find(size => size.name === currentSize); 
      return(basePrice + found.additionalPrice)
    }, [basePrice, sizes, currentSize])
    

    const addToCart = event => {
      event.preventDefault()

      console.log('SUMMARY')
      console.log('============')
      console.log('name:', title)
      console.log('price:', getPrice())
      console.log('color:', currentColor)
      console.log('size:', currentSize)
    }

  return (
    <article className={styles.product}>
      <ProductImage name={name} currentColor={currentColor} title={title}/>
      <ProductForm name={name} title={title} basePrice={basePrice} colors={colors} sizes={sizes}
      currentColor={currentColor} currentSize={currentSize} setCurrentColor={setCurrentColor} setCurrentSize={setCurrentSize}
      getPrice={getPrice} addToCart={addToCart} prepareColorClassName={prepareColorClassName}/>
    </article>
  )
};

export default Product;
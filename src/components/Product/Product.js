import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { useState } from 'react';

const Product = ({name, title, basePrice, colors, sizes, }) => {

  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);


    const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
    }
  
    const getPrice = () => {
      const found = sizes.find(size => size.name === currentSize); 
      return(basePrice + found.additionalPrice)
    }

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
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>{getPrice()}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {sizes.map(size =>
              <li key={size.id}>
              <button type="button" onClick={() => setCurrentSize(size.name)} className={clsx(size === currentSize && styles.active)}>{size.name}</button>
              </li>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors.map(item =>
                <li key={item}>
                  <button type="button" className={clsx(prepareColorClassName(item), item === currentColor && styles.active)} onClick={() => setCurrentColor(item)}/>
                </li>)}
            </ul>
          </div>
          <Button className={styles.button} addToCart={addToCart}>
            <span className="fa fa-shopping-cart"/>
          </Button>
        </form>
      </div>
    </article>
  )
};

export default Product;
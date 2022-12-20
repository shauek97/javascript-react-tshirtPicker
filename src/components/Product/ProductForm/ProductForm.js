import styles from '../Product.module.scss';
import Button from './Button/Button';
import OptionSize from './OptionSize/OptionSize';
import OptionColor from './OptionColor/OptionColor'
   
const ProductForm = props => {

    return(
   <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>{props.getPrice}$</span>
        </header>
        <form>
          <OptionSize propppedSizes={props.sizes} proppedSettingCurrentSize={props.setCurrentSize} proppedCurrentSize={props.currentSize} />
          <OptionColor proppedColors={props.colors} proppedColorNamePreparing={props.prepareColorClassName}
          proppedCurrentColor={props.currentColor} proppedSettingCurrentColor={props.setCurrentColor}/>       
          <Button className={styles.button} addToCart={props.addToCart}>
            <span className="fa fa-shopping-cart"/>
          </Button>
        </form>
    </div>
    )

}

export default ProductForm;
import styles from './OptionSize.module.scss';
import clsx from 'clsx';


const OptionSize = props => {

return(
        <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.propppedSizes.map(size =>
              <li key={size.id}>
              <button type="button" onClick={() => props.proppedSettingCurrentSize(size.name)} className={clsx(size.name === props.proppedCurrentSize && styles.active)}>{size.name}</button>
              </li>)}
            </ul>
        </div>
    )
}

export default OptionSize;
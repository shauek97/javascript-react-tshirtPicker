import styles from '../../Product.module.scss';
import clsx from 'clsx';

const OptionColor = props => {

    return (

        <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.proppedColors.map(item =>
                <li key={item}>
                  <button type="button" className={clsx(props.proppedColorNamePreparing(item), item === props.proppedCurrentColor && styles.active)} onClick={() => props.proppedSettingCurrentColor(item)}/>
                </li>)}
            </ul>
        </div>
    )
}

export default OptionColor;
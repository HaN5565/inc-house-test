import React from 'react';
import s from './ReproductionsItems.module.css'
import Mybtn from '../../../ui/MyBtn/Mybtn';
import ReproductionsAnimated from '../ReproductionsAnimated';

const ReproductionsItemsFrance = (props) => {

    const item = props.stateFrance.map((item, index) =>
        <div key={index} className={s.item}>
            <div className={s.itemWrapper}>
                <img className={s.itemImg} src={item.img} />
                <p className={s.itemCreator}>{item.creator}</p>
                <p className={s.itemName}>{item.name}</p>
                <p className={s.itemSize}>{item.size}</p>
                <p className={s.itemPrice}>{item.price}</p>
                <div className={s.itemBtn}>
                    <Mybtn btnText='В корзину' />
                </div>
            </div>
        </div>
    )

    return (
        <ReproductionsAnimated>
            <div className={s.ReproductionsItems}>
                {item}
            </div>
        </ReproductionsAnimated>

    );
};

export default ReproductionsItemsFrance;
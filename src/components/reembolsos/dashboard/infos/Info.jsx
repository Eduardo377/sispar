import style from './info.module.scss';

export default function Info({ image, styleClassName, description, info, title }) {
    return (
        <figure className={style.infoFigure}>
            <img src={image} className={styleClassName} alt={description} />
            <h4>{info}</h4>
            <figcaption>{title}</figcaption>
        </figure>
    );
}
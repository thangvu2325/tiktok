import { useState, forwardRef } from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import images from '~/assets/images';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallBack: customFallBack = images.noImage, ...props }, ref) => {
    const [fallBack, setFallback] = useState('');
    const handleEror = () => {
        setFallback(customFallBack);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallBack || src}
            alt={alt}
            {...props}
            onError={handleEror}
        />
    );
});
Image.propTypes = {
    src: propTypes.string,
    alt: propTypes.string,
    className: propTypes.string,
    fallBack: propTypes.string,
};

export default Image;

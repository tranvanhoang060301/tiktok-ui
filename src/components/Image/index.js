import { forwardRef, useState } from 'react';
import classNames from 'classnames/bind';

import images from '~/assets/images';
import styles from './Image.module.scss';

const cx = classNames.bind(styles);

const Image = forwardRef(({ src, alt, className, ...props }, ref) => {
    const [fallBack, setFallback] = useState('');
    const handleError = () => {
        setFallback(images.noImage);
    };

    return (
        <img
            ref={ref}
            className={cx(className, 'wrapper')}
            src={fallBack || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;

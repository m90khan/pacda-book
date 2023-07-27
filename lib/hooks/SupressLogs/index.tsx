// @ts-nocheck
import React, { Fragment, useEffect } from 'react';

export const SupressLogs = () => {
    useEffect(() => {
        const isDev = process.env.NODE_ENV === 'development';
        window.addEventListener('load', (event) => {
            const styles = [
                'color: #fff',
                'background: #201e1b',
                'font-size: 30px',
                'font-family: Roboto',
                'border: 1px solid #fff',
                'padding: 10px',
            ].join(';');

            console.log('%cWelcome', styles);
            if (!isDev) console.log = function () {};
        });
    }, []);

    return <Fragment />;
};

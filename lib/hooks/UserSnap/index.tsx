// @ts-nocheck
import React, { Fragment, useEffect, useState } from 'react';
import {
    USERSNAP_GLOBAL_API_KEY,
    USERSNAP_PROJECT_API_KEY,
} from '@lib/constants';
export const UserSnap = ({ initParams = {} }) => {
    const [usersnapApi, setUsersnapApi] = useState(null);

    useEffect(() => {
        let usersnapApi = null;
        if (!USERSNAP_GLOBAL_API_KEY && !USERSNAP_PROJECT_API_KEY) {
            setUsersnapApi(false);
            return;
        } else {
            window.onUsersnapCXLoad = function (api) {
                api.init(initParams);
                usersnapApi = api;
                setUsersnapApi(api);
            };
            const script = document.createElement('script');
            script.defer = 1;
            script.src = `https://widget.usersnap.com/global/load/${USERSNAP_GLOBAL_API_KEY}?onload=onUsersnapCXLoad`;
            document.head.appendChild(script);
        }
        return () => {
            if (usersnapApi) {
                usersnapApi.destroy();
                setUsersnapApi(false);
            }
            script.remove();
        };
    }, []);
    const handleOpenWidgetForce = () => {
        if (USERSNAP_PROJECT_API_KEY)
            usersnapApi
                .show(USERSNAP_PROJECT_API_KEY)
                .then((widgetApi) => widgetApi.open());
    };

    return (
        <Fragment>
            {!usersnapApi && (
                <button
                    onClick={handleOpenWidgetForce}
                    style={{
                        position: 'absolute',
                        right: '1rem',
                        bottom: '1rem',
                        background: 'white',
                        cursor: 'pointer',
                    }}
                >
                    <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20.8333 4.16602H4.16667C3.02084 4.16602 2.08334 5.10352 2.08334 6.24935V18.7494C2.08334 19.8952 3.02084 20.8327 4.16667 20.8327H20.8333C21.9792 20.8327 22.9167 19.8952 22.9167 18.7494V6.24935C22.9167 5.10352 21.9792 4.16602 20.8333 4.16602ZM20.4167 8.5931L13.6042 12.8535C12.9271 13.2806 12.0729 13.2806 11.3958 12.8535L4.58334 8.5931C4.47889 8.53446 4.38742 8.45525 4.31447 8.36024C4.24152 8.26523 4.18861 8.15641 4.15894 8.04036C4.12926 7.92431 4.12344 7.80345 4.14183 7.68509C4.16022 7.56672 4.20244 7.45332 4.26592 7.35175C4.32941 7.25017 4.41284 7.16253 4.51118 7.09414C4.60951 7.02574 4.7207 6.97801 4.83802 6.95383C4.95534 6.92965 5.07634 6.92952 5.19371 6.95346C5.31107 6.9774 5.42236 7.0249 5.52084 7.0931L12.5 11.4577L19.4792 7.0931C19.5776 7.0249 19.6889 6.9774 19.8063 6.95346C19.9237 6.92952 20.0447 6.92965 20.162 6.95383C20.2793 6.97801 20.3905 7.02574 20.4888 7.09414C20.5872 7.16253 20.6706 7.25017 20.7341 7.35175C20.7976 7.45332 20.8398 7.56672 20.8582 7.68509C20.8766 7.80345 20.8707 7.92431 20.8411 8.04036C20.8114 8.15641 20.7585 8.26523 20.6855 8.36024C20.6126 8.45525 20.5211 8.53446 20.4167 8.5931Z"
                            fill="#F24E1E"
                        />
                    </svg>
                </button>
            )}
        </Fragment>
    );
};

// export default UserSnap;

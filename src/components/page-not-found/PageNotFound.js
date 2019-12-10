import React from 'react';
import './PageNotFound.css';

function PageNotFound() {
    return (
        <div className="pageNotFound container">
            <div>
                <h1>404</h1>
            </div>
            <div>
                <h1>Page Not Found !!!</h1>
                <p>Looks like the page you are looking for is no longer available</p>
            </div>
        </div>
    )
}
export default PageNotFound
import React from 'react';

function Error() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="alert alert-danger" role="alert">
                        Sorry city not found. Please try again.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error;
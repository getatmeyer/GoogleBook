import React from "react";

function CardLayout({ title, image, children }) {
    return(
        <div className="card mt-4">
        <div className="card-header">
            <img src={image} alt={title} />
            </div>
            </div>

            // <div className="col-md-12">
            //     <div className="card-body">{children}
            //         </div>
            //         </div>
                    
    );

}

export default CardLayout;
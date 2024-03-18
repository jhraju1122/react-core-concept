// rsc
import React from 'react';

const SingleProduct = (props) => {
    // console.log(props.product);
const { product } = props;
console.log(product);


    return (
        <div>
            <p>product={{title:"productName"}}</p>
        </div>
    );
};

export default SingleProduct;
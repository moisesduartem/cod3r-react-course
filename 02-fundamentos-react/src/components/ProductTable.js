import React from 'react'
import products from '../data/products';

function ProductTable() {
    return (
        <table>
            <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
            </thead>
            <tbody>
                {
                    products.map((product, index) => {
                        return (
                            <tr>
                                <td>
                                    {product.id}
                                </td>
                                <td>
                                    {product.name}
                                </td>
                                <td>
                                    {product.price}
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
}

export default ProductTable;

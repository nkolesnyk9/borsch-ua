const productsArray = [
{
    id:"1",
    title: "Blackberry jam",
    price: 4.99
},
{
    id:"2",
    title: "ukrainian pin",
    price: 14.99
},
{
    id:"3",
    title: "Flag of Ukraine",
    price: 10.99
},
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("product data doesn't exist for ID:" + id)
        return undefined;
    }

    return productData;
}

export {productsArray, getProductData};
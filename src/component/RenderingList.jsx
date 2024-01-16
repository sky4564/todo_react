function renderingList() {
    const products = [
        { title: 'Cabbage', id: 1 },
        { title: 'Garlic', id: 2 },
        { title: 'Apple', id: 3 },
    ];

    const listItems = products.map(product =>
        <li key={product.id}>
            {product.title}
        </li>
    );

    return (
        // {products}
        <div>
            <h2>list 다루기</h2>
            {listItems}
        </div>
    )
}

export default renderingList
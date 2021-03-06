function getData(setLoading, setProducts, setError, setErrorMsg) {
	setLoading(true);
	fetch('https://api.mocki.io/v1/db81a628/products')
		.then((res) => res.json())
		.then((data) => {
			setProducts(data.products);
			setLoading(false);
		})
		.catch((err) => {
			setLoading(false);
			setError(true);
			setErrorMsg(`${err}`);
		});
}

export default getData;

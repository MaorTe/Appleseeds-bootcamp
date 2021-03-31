import axios from 'axios';
import { useEffect, useState } from 'react';
import API from '../api/API';

const DataContainer = (props) => {
	const [results, setResults] = useState([]);

	useEffect(() => {
		const CancelToken = axios.CancelToken;
		const source = CancelToken.source();
		const toggleFetch = async () => {
			try {
				const { data } = await API.get('1/', {
					cancelToken: source.token,
				});
				setResults([data]);
			} catch (e) {
				if (axios.isCancel(e)) {
					console.log(e.message);
				} else {
					console.log(e.message);
				}
			}
		};
		toggleFetch();

		return () => {
			source.cancel('cancelled by user');
		};
	}, []);

	return <div className="container">{results && JSON.stringify(results)}</div>;
};
export default DataContainer;

import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',

	headers: {
		Authorization: 'Client-ID 08e7cbd2953505fe623cd74e79fce5ae412ddc5c78a921d87bfc68dc1d4a051a'
	}
});

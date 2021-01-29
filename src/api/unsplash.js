import axios from 'axios';

export default axios.create({
	baseURL:'https://api.unsplash.com',
	headers: {
        Authorization:
          'Client-ID e3O1JZrcRx1KOHWhK0uPMGIBZbPHd1OdryXnFk1q3uE',
      }
})
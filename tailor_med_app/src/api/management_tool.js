import axios from 'axios';

export const update = async () => {
    try {
        axios.defaults.timeout = 120 * 1000;
        await axios.post('http://127.0.0.1:5000/update');
        console.log('finished update');
    } catch (err) {
        console.log(err);
        throw err;
    }
};

export const getFoundationsData = async () => {
    try {
        axios.defaults.timeout = 120 * 1000;
        const response = await axios.get('http://127.0.0.1:5000/get');
        const foundations = response.data;
        // console.log(foundations);
        return foundations;
    } catch (err) {
        console.log(err);
        throw err;
    }
};
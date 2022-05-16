import { getData } from '../../helpers/storage';

export default async (request) => {
    const newRequest = request;
    const token = await getData('token');
    if (token) {
        newRequest.headers.Authorization = `Bearer ${token}`;
    }
    return newRequest;
};

import { url } from './index';

export const getHelloWorld = async () => {

    const response = await fetch(`${url}/hello`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        }
    });

    return await response.json();
}
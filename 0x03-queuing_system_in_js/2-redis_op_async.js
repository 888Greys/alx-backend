#!/usr/bin/node


import { createClient } from 'redis';
import { print } from 'redis/lib/utils.js';


const client = createClient();

client.on('connect', () => {
    console.log('Redis client connected to the server');
});

client.on('error', (err) => {
    console.log(`Redis client not connected to the server: ${err.message}`);
});

function setNewSchool(schoolName, value) {
    client.set(schoolName, value, print);
}

async function displaySchoolValue(schoolName) {
    try {
        const result = await getAsync(schoolName);
        console.log(result);
    } catch (err) {
        console.log(`Error retrieving ${schoolName}: ${err.message}`);
    }
}

(async () => {
    try {
        await client.connect();

        displaySchoolValue('Holberton');

        setNewSchool('HolbertonSanFrancisco', '100');
        displaySchoolValue('HolbertonSanFrancisco');

    } catch (err) {
        console.log(`Redis client not connected to the server: ${err.message}`);
    }
})();
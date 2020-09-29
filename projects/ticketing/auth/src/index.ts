import express from 'express';
import { json } from 'body-parser';

const app = express();
app.use(json());

app.get('/api/users/currentuser', (request, response) => {
    response.send('[/api/users/currentuser][HttpGet] =>');
});

app.listen(3000, () => {
    console.log('[ticketing][auth][index.ts] => Listening on port 3000 ...');
})
import '@babel/polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import routes from './server/router';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

/**
 * Making build/public folder and inner files publically available.
 */
app.use(express.static('build/public'))
app.use('*', routes)


app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
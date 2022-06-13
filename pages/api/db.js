import Datastore from 'nedb';
const db = new Datastore({ filename: './bcc', autoload: true });
export { db }
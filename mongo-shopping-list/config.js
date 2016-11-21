const DATABASE_URL = 'mongodb://trig:cod1ng!@ds159517.mlab.com:59517/db-snippets';

exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       (process.env.NODE_ENV === 'production' ?
                            DATABASE_URL : DATABASE_URL);
exports.PORT = process.env.PORT || 8080;


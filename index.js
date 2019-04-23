require('ignore-styles');

require('@babel/register')({
    presets: ['@babel/preset-env']
});

require('./src/server');
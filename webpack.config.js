const path = require('path');
const сopy = require('copy-webpack-plugin');

module.exports = {
// Указываем entry и output - входную точку и имя конечного бандла
    entry: path.resolve(__dirname, "pages", "index.js"),
    output: {
        filename: 'index.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            // Добавляем загрузчики для CSS-технологий
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    plugins: [
        new сopy({patterns: [
            // Копируем HTML-файл с версткой в конечную директорию
            { from: path.join(__dirname, 'pages'), to: path.join(__dirname, "dist") },
            { from: path.join(__dirname, 'desktop/banans/banans.jpeg'), to: path.join(__dirname, "dist") },
            { from: path.join(__dirname, 'desktop/who/cape.jpeg'), to: path.join(__dirname, "dist") },
            { from: path.join(__dirname, 'desktop/what/coast.jpeg'), to: path.join(__dirname, "dist") },
            { from: path.join(__dirname, 'desktop/pictures/watermelon.jpeg'), to: path.join(__dirname, "dist") },
            { from: path.join(__dirname, 'desktop/pictures/lemon.jpeg'), to: path.join(__dirname, "dist") },
            { from: path.join(__dirname, 'desktop/pictures/sunset1.jpeg'), to: path.join(__dirname, "dist") },
            { from: path.join(__dirname, 'desktop/pictures/sunset2.jpeg'), to: path.join(__dirname, "dist") },
            { from: path.join(__dirname, 'desktop/feedback/feedback.jpeg'), to: path.join(__dirname, "dist") },
            { from: path.join(__dirname, 'desktop/footer/join/instagram.png'), to: path.join(__dirname, "dist") },
            { from: path.join(__dirname, 'desktop/footer/join/facebook.png'), to: path.join(__dirname, "dist") }
        ]})
    ]
}
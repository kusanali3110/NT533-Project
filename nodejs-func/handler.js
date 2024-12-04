'use strict'
const crypto = require('crypto');

module.exports = async (event, context) => {
    // Lấy dữ liệu từ body yêu cầu (plain text)
    const inputText = event.body;

    // Tạo hash của dữ liệu plain text sử dụng thuật toán SHA-256
    const hash = crypto.createHash('sha256').update(inputText).digest('hex');

    return {
        statusCode: 200,
        body: hash  // Trả về hash value
    };
};
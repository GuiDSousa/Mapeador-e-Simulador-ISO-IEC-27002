const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const PUBLIC_DIR = path.resolve(__dirname);

const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    // Parse URL to avoid query strings
    const parsedUrl = new URL(req.url, `http://localhost:${PORT}`);
    let safeUrl = parsedUrl.pathname;
    if (safeUrl === '/') {
        safeUrl = '/index.html';
    }

    const filePath = path.join(PUBLIC_DIR, safeUrl);

    // Safety check to ensure we only serve from within the public directory
    if (!filePath.startsWith(PUBLIC_DIR)) {
        res.statusCode = 403;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Acesso proibido.');
        return;
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.statusCode = 404;
                res.setHeader('Content-Type', 'text/plain; charset=utf-8');
                res.end('Arquivo não encontrado.');
            } else {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain; charset=utf-8');
                res.end(`Erro interno do servidor: ${err.code}`);
            }
            return;
        }

        const ext = path.extname(filePath).toLowerCase();
        res.statusCode = 200;
        res.setHeader('Content-Type', MIME_TYPES[ext] || 'application/octet-stream');
        res.end(data);
    });
});

server.listen(PORT, () => {
    console.log(`[OK] Servidor rodando com sucesso!`);
    console.log(`[URL] Acesse no seu navegador: http://localhost:${PORT}`);
});

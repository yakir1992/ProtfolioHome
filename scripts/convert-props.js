const fs = require('fs');
const path = require('path');

// Define the directory to search in
const searchDir = path.join(__dirname, '..', 'pages');

// Function to read and update files recursively
function processDirectory(dir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            processDirectory(filePath);
        } else if (file.endsWith('.js')) {
            const content = fs.readFileSync(filePath, 'utf8');

            if (content.includes('getServerSideProps')) {
                const updatedContent = content.replace(
                    /getServerSideProps/g,
                    'getStaticProps'
                );

                fs.writeFileSync(filePath, updatedContent);
                console.log(`Updated ${filePath}`);
            }
        }
    });
}

// Start processing
processDirectory(searchDir);
console.log('All files processed'); 
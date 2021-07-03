var ghpages = require('gh-pages');

var args = process.argv.slice(2);

console.log("reminder: node pipeline.js repo_url name email");

ghpages.publish(
    'public',
    {
        branch: 'gh-pages',
        repo: args[0],
        user: {
            name: args[1],
            email: args[2],
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)

const shell = require('shelljs');
const config = require('../config/config');


// After microapp master merged
// Delete remote and local branch
async function deleteBranch(config) {
  const { repos, branchName } = config
  for (let i = 0; i < repos.length; i++) {
    const repo = repos[i];

    await shell.cd(`~/repos/${ repo }`);
    await shell.exec(`git checkout master`);
    // Remove remote branch.
    await shell.exec(`git push origin :${ branchName }`);
    // Remove local branch.
    await shell.exec(`git branch -D ${ branchName }`);
  }
}

deleteBranch(config);
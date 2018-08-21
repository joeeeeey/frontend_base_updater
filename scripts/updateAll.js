const shell = require('shelljs');
const config = require('../config/config');

async function updateAll(config) {
  const {
    repos,
    branchName,
    commitInfo,
    openGithubLinkInBrowser,
    frontendRepoAuthUrl
  } = config

  for (let i = 0; i < repos.length; i++) {
    const repo = repos[i];

    await shell.cd(`~/repos/${ repo }`);

    await shell.exec(`git stash`);
    await shell.exec(`git checkout master`);
    const pullMaterResult = await shell.exec(`git pull origin master`);
    if (pullMaterResult.code !== 0) {
      throw ('Pull master error!');
    }

    const checkoutBranchResult = await shell.exec(`git checkout -b ${ branchName }`);
    if (checkoutBranchResult.code !== 0) {
      await shell.exec(`git checkout ${ branchName }`);
    }

    await shell.exec(`yarn remove microapp-frontend-base`);

    const yarnAddResult = await shell.exec(`yarn add ${ frontendRepoAuthUrl }`);

    if (yarnAddResult.code !== 0) {
      await shell.exec(`git checkout package.json`);
      await shell.exec(`git checkout yarn.lock`);
      throw ('Yarn add frontend base error!');
    }

    await shell.exec(`git add package.json`);
    await shell.exec(`git add yarn.lock`);

    await shell.exec(`git commit -m "${ commitInfo }"`);
    const pushMasterResult = await shell.exec(`git push origin ${ branchName }`);

    if (pushMasterResult.code !== 0) {
      throw ('Push master error!');
    }

    if (openGithubLinkInBrowser) {
      await shell.exec(`open https://github.com/Overseas-Student-Living/${ repo }`);
    }

  }
}

updateAll(config);
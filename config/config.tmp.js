'use strict';

/**
 * Repo names which will be updated 1by1.
 * 
 * Required
 * 
 * @type {array}
 */
const repos = [
  'microapp-static-pages',
  'microapp-partner-portal',
];

/**
 * Branch name used in repo, like 'ZEN-5749'
 * 
 * Required
 * 
 * @type {string}
 */
const branchName = 'ZEN-5749';

/**
 * Commit message for this change.
 * 
 * Required
 * 
 * @type {string}
 */
const commitInfo = 'ZEN-5749 Update logic of import modal.';

/**
 * Tag for update frontend base, can be 
 * branch name or release tag. 
 * Like: 'ZEN-5749', '1.3.12'
 * 
 * Required
 * 
 * @type {string}
 */
const frontendTag = '1.3.13';

/**
 * Authed repo url of frontend base.
 * 
 * Required
 * 
 * @type {string}
 */
const frontendRepoAuthUrl = `
  microapp-frontend-base@git+
  https://HIDDEN_THE_AUTH_CODE_PLEASE_FILL_IT_BY_YOURSELF:
  x-oauth-basic@github.com/Overseas-Student-Living/
  microapp-frontend-base.git#${ frontendTag }
`.replace(/(\r\n\t|\n|\r\t)/gm, "").replace(/\s/g, '');

/**
 * If true, Github link of current repo 
 * will be opened in browser.
 * 
 * Optional
 * 
 * @type {boolean}
 */
const openGithubLinkInBrowser = true

const config = {
  repos,
  branchName,
  commitInfo,
  frontendTag,
  openGithubLinkInBrowser,
  frontendRepoAuthUrl,
}

module.exports = config;
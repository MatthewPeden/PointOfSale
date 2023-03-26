import { CreatePageArgs } from 'gatsby';

exports.onCreatePage = async ({ page, actions }: CreatePageArgs) => {
  const { createPage } = actions;

  if (page.path.match(/^\/account/)) {
    page.matchPath = '/account/*';
    createPage(page);
  }
};
  
# Client

## Deployment to Netlify

[![Deploy to netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/changelabsio/avl-tips)

There is currently [a bug](https://community.netlify.com/t/base-directory-build-setting-ignored-in-netlify-toml/9941) in netlify's template system that prevents the "Base Directory" build setting from being set correctly.com/

If your first build fails, you will need to manually resolve this issue by going into the new netlify site settings, Click on "Build & Deploy" Then "Edit Settings" and set the "Base directory" to `packages/client`. Save the changes, go to the "Deploys" page, and trigger a new deployment.

### Build Environment Variables

Configuration of the client can be overridden using Environment variables as described below:

* `REACT_APP_CITY` - Your city
* `REACT_APP_STATE` (optional) - Your state
* `REACT_APP_MAILTO` - Your email address for Questions and Data Privacy Inquiries
* `REACT_APP_FORM_URL` - URL for google form
* `REACT_APP_IMAGE_SRC` - URL for background image
* `REACT_APP_IMAGE_ATTR_NAME` - Image attribution name
* `REACT_APP_IMAGE_ATTR_URL` - Image attribution url for links
* `REACT_APP_API_DEV_URL` - Development api base url
* `REACT_APP_API_PROD_URL` - Production api base url
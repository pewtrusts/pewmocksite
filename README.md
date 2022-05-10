# Pew Mock Site

This repo provides the pewtrusts.org chrome that other repos are embedded into in local development and preview environments. It is meant to be included as a submodule in others.

Interactive features are embedded into the Pew website as third part embeds. The production build of those iteractives includes only the html and other assets to be embedded. In local development and preview environments, however, you'll want the chrome of the website to be present. The `webpack.config.js` files of the interactive specify one of this repo's `index*.ejs` files as template for local and preview and the main repo's `index.(html|ejs)` as the template for the production build. In local and preview, the main repo's `index.(html|ejs)` file is embedded in the other.

## Build preview pages that include this submodule

This repo is private, so when the GitHub Action of another repo that includes this as a submodule tries to build its preview page, it will need credentials to do so. The way to do this is with a Personal Access Token.

The `node.js.yml` file defining the GitHub Action for the main repository will need to include this code as part of the "build_main" job:

```yaml
 steps:
    - name: Checkout   
      uses: actions/checkout@v2
      with: 
        submodules: recursive
        persist-credentials: false
        token: ${{ secrets.ACCESS_TOKEN }}
```

For a full example, see the yaml from the [fertility rates chart repo](https://github.com/pewtrusts/fertility-chart/blob/main/.github/workflows/node.js.yml).

The instrumental part here is `token: ${{secrets.ACCESS_TOKEN}}`. That refers to a secret named ACCESS_TOKEN that is defined in Settings > Secrets > Actions of the main repo. That token must be a [Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) created by a person with access to the submodule repo.

It's unclear whether my (JOsterman@PEW) PATs will continue to provide access to repos after my departure. Others may need to create their PATs and replace the ACCESS_TOKEN secrets with their own.

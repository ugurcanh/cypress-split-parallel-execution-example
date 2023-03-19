# :shamrock: cypress-split-parallel-execution-example :shamrock:

Hey everyone!

In this example, we are trying Gleb Bahmutov's "cypress-split" plugin (linkedin.com/in/bahmutov/).

## How to divide tests and execute them parallel?
"cypress-split" simply provides user to divide tests into "n" workers. Here is the plug-in that you can install: "https://github.com/bahmutov/cypress-split-example". Simply you are passing parameter of "n" in order to declare how many workers you want to execute.

## Compatibility for CIs

It is compatible with multiple CIs. In this example, I used Github Actions. You can reach the workflow file from ".github/workflows" path.


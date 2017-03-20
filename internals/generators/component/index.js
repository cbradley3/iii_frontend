/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add an unconnected component',
  prompts: [{
    type: 'list',
    name: 'type',
    message: 'Select the type of component',
    default: 'Stateless Function',
    choices: () => ['Stateless Function', 'ES6 Class'],
  }, {
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'Button',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return componentExists(value) ? 'A component or container with this name already exists' : true;
      }

      return 'The name is required';
    },
  }],
  actions: (data) => {
    // Generate index.js and index.test.js
    let componentTemplate;

    switch (data.type) {
      case 'ES6 Class': {
        componentTemplate = './component/es6.pure.js.hbs';
        break;
      }
      case 'Stateless Function': {
        componentTemplate = './component/stateless.js.hbs';
        break;
      }
      default: {
        componentTemplate = './component/es6.pure.js.hbs';
      }
    }

    const actions = [{
      type: 'add',
      path: '../../app/components/{{properCase name}}/index.js',
      templateFile: componentTemplate,
      abortOnFail: true,
    }];

    return actions;
  },
};

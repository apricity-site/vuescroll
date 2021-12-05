import render from './mix-panel';
import core from './core';
import { configs, configValidators } from './config';

import { _install } from 'mode/shared/util';

const component = _install(core, render, configs, configValidators);

export default function install(app, opts = {}) {
  app.component(opts.name || component.name, component);
  app.prototype.$vuescrollConfig = opts.ops || {};
}

export { component };

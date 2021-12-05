import { createPanel } from './slide-panel';
import core from './core';
import { config, configValidator } from './config';

import { _install } from 'mode/shared/util';

const component = _install(core, createPanel, [config], [configValidator]);

export default function install(app, opts = {}) {
  app.component(opts.name || component.name, component);
  app.prototype.$vuescrollConfig = opts.ops || {};
}

export { component };

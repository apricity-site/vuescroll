import { createPanel } from './native-panel';
import core from './core';
import { config } from './config';

import { _install } from 'mode/shared/util';

const component = _install(core, createPanel, [config]);

export default function install(app, opts = {}) {
  app.component(opts.name || component.name, component);
  app.prototype.$vuescrollConfig = opts.ops || {};
}

export { component };

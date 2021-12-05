import { refreshAll } from './core/mixins/api';
import { scrollTo } from './mode/native/mixins/api';

import install, { component } from './mode/mix/index';

const Vuescroll = {
  install,
  version: '__version__',
  refreshAll,
  scrollTo,
  ...component
};
export default Vuescroll;

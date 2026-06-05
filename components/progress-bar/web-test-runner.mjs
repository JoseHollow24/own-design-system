import { rollupAdapter } from '@web/dev-server-rollup';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  plugins: [rollupAdapter(nodeResolve())],
  testFramework: {
    config: {
      timeout: 10000,
    },
  },
  browserStartTimeout: 60000,
  sessionStartTimeout: 60000,
  sessionFinishTimeout: 60000,
};

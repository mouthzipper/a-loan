/**
 *
 * Asynchronously loads the component for Dashboard
 *
 */

import loadable from 'loadable-components';
import LoadingIndicator from 'components/LoadingIndicator';

export default loadable(() => import('./index'), {
  fallback: LoadingIndicator,
});

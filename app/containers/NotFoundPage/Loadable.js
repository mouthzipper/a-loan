/**
 * Asynchronously loads the component for NotFoundPage
 */

import loadable from 'loadable-components';
import LoadingIndicator from 'components/LoadingIndicator';

export default loadable(() => import('./index'), {
  fallback: LoadingIndicator,
});

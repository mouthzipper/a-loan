/**
 *
 * Asynchronously loads the component for Dashboard
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));

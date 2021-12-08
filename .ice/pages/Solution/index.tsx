import * as React from 'react';

import store from '/Users/dushiling/Documents/flint-admin-web/src/pages/Solution/store';

import PageComponent from '/Users/dushiling/Documents/flint-admin-web/src/pages/Solution/index';

const PageComponentName = PageComponent;

const PageProvider = store.Provider;

const initialStates = store.getState();

const StoreWrappedPage = (props) => {
  return (
    <PageProvider initialStates={initialStates}>
      <PageComponentName {...props} />
    </PageProvider>
  );
};

(StoreWrappedPage as any).pageConfig =
  (PageComponentName as any).pageConfig || ({} as any);
(StoreWrappedPage as any).getInitialProps = (
  PageComponentName as any
).getInitialProps;

export default StoreWrappedPage;
export { store };

import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import queries from './gql/queries';
import mutations from './gql/mutations';

const withCache = Component => props => {
    
    const user = useQuery(queries.GET_ME);
      
    const showMessage = useQuery(queries.GET_SHOW_MESSAGE);

    const alertMessage = useQuery(queries.GET_ALERT_MESSAGE);

    const navCollapsed = useQuery(queries.GET_NAV_COLLAPSED);

    const loggedIn = useQuery(queries.IS_LOGGED_IN);
    
    const [set, output] = useMutation(mutations.SET_KEY_PAIR);

    const cachePairs = useQuery(queries.GET_KEY_VALUES);

    const upsertKeyPair = (key, value) => {
      set({ variables: { key: key, value: value }});
    }
    
    // flatten cache key pairs to spread to component props
    let pairs = {};
    cachePairs.data.cachePairs.forEach(d => {
      pairs[d.key] = d.value;
    });

      return (<Component 
        user={user.data} 
        showMessage={showMessage.data.showMessage}
        alertMessage={alertMessage.data.alertMessage}
        navCollapsed={navCollapsed.data.navCollapsed}
        loggedIn={loggedIn.data.loggedIn}
        upsertKeyPair={upsertKeyPair}
        {...props}
        {...pairs}
        />);
  }

  export default withCache;
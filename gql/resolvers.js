import  queries  from './queries';

// add any local resolvers here
const resolvers = {
    Query: {
      showMessage: (_, args, { cache }) => {
        const { message } = cache.readQuery({query: queries.GET_SHOW_MESSAGE});

        return message;
      }, 
      alertMessage:(_, args, { cache }) => {
        const { message } = cache.readQuery({query: queries.GET_ALERT_MESSAGE});

        return message;
      }, 
      loader: (_, args, { cache }) => {
        const { message } = cache.readQuery({query: queries.GET_LOADER});

        return message;
      }, 
      navCollapsed: (_, args, { cache }) => {
        const { message } = cache.readQuery({query: queries.GET_NAV_COLLAPSED});

        return message;
      }
    },
    Mutation : {
      user: (_, args, { cache }) => {
        cache.writeData({ data: { user: args }});
      },
      showMessage: (_, { showMessage }, { cache }) => {
        cache.writeData({data: { showMessage: showMessage }})
      }, 
      alertMessage: (_, { alertMessage }, { cache }) => {
        cache.writeData({data: { alertMessage: alertMessage }})
      }, 
      loader: (_, { loader }, { cache }) => {
        cache.writeData({data: { loader: loader }})
      }, 
      navCollapsed: (_, { navCollapsed }, { cache }) => {
        cache.writeData({data: { navCollapsed: navCollapsed }})
      }, 
      setKeyPair: (_, { key, value }, {client, cache}) => {
        const {cachePairs} = cache.readQuery({query: queries.GET_KEY_VALUES});
        let updated = false;

        cachePairs.forEach(d => {
          if(d.key == key) {
            d.value = value;
            updated = true;
            return;
          }
        });

        if(!updated)
        {
          cachePairs.push({__typename: 'KeyValuePair', key: key, value: value});
        }

        cache.writeData({data: { cachePairs: cachePairs}});
      }
    }
}

export default resolvers;
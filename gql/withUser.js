import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const withUser = Component => props => {
    const GET_ME = gql`
        query me {
            me {
                id
                username
                organization
                roles
                permissions
            }
        }
      `;
      const { data } = useQuery(GET_ME);
      
      return (<Component user={data} {...props}/>);
  }

  export default withUser;
import { gql } from 'apollo-boost';

const GET_SHOW_MESSAGE = gql`
  query getShowMessage {
    showMessage @client
  }
`;

const GET_ALERT_MESSAGE = gql`
  query getAlertMessage {
    alertMessage @client
  }
`;

const GET_NAV_COLLAPSED = gql`
  query getNavCollapsed {
    navCollapsed @client
  }
`;

const IS_LOGGED_IN = gql`
    query IsUserLoggedIn {
      isLoggedIn @client
    }
  `;

  const GET_KEY_VALUES = gql`
    {
      cachePairs @client {
        key
        value
      }
    }
  `;

  // from server
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

const queries = { 
    GET_SHOW_MESSAGE: GET_SHOW_MESSAGE, 
    GET_ALERT_MESSAGE: GET_ALERT_MESSAGE,
    GET_NAV_COLLAPSED: GET_NAV_COLLAPSED,
    IS_LOGGED_IN: IS_LOGGED_IN,
    GET_ME: GET_ME,
    GET_KEY_VALUES: GET_KEY_VALUES,
};

export default queries;
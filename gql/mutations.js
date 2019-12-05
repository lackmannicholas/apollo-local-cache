import { gql } from 'apollo-boost';

const SET_KEY_PAIR = gql`
    mutation setKeyPair($key: String!, $value: String!) {
        setKeyPair(key: $key, value: $value) @client
    }
`;

const UPDATE_SHOW_MESSAGE = gql`
    mutation getShowMessage($showMessage: Boolean!) {
        showMessage(showMessage: $showMessage) @client
    }
`;

const UPDATE_ALERT_MESSAGE = gql`
    mutation getAlertMessage($alertMessage: String) {
        alertMessage(alertMessage: $alertMessage) @client
    }
`;

const UPDATE_LOADER = gql`
    mutation getLoader {
        loader @client
    }
`;

const UPDATE_NAV_COLLAPSED = gql`
    mutation getNavCollapsed {
        navCollapsed @client
    }
`;

const SET_IS_LOGGED_IN = gql`
    mutation IsUserLoggedIn {
        isLoggedIn @client
    }
`;

const mutations = { 
    UPDATE_SHOW_MESSAGE: UPDATE_SHOW_MESSAGE, 
    UPDATE_ALERT_MESSAGE: UPDATE_ALERT_MESSAGE,
    UPDATE_LOADER: UPDATE_LOADER,
    UPDATE_NAV_COLLAPSED: UPDATE_NAV_COLLAPSED,
    SET_IS_LOGGED_IN: SET_IS_LOGGED_IN,
    SET_KEY_PAIR: SET_KEY_PAIR,
};

export default mutations;
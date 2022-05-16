import React, { Component } from "react";
import { View, TouchableOpacity, Text,ScrollView } from "react-native";
import { connect } from "react-redux";
import { onLogin } from "../src/store/modules/auth/actions";
import {fetchUsersStart} from '../src/store/modules/users/actions';
import {onGetTasks} from '../src/store/modules/task/actions';
import CategoryList from '../src/components-page/CategoryList';
import {Mobile, Tablet} from '../src/helpers/responsive';


export const  Home =()=>  {
  return (
      <ScrollView style={{ flex: 1,   }}>
        <CategoryList/>
      </ScrollView>
  );
}

const mapStateToProps = state => {

  return {
    user:state.authReducer.user,
    userList:state.userReducer.users ||[],
    tasksList:state.taskReducer.users ||[],
    isLoading:state.categoryReducer.isLoading,
  }
};

const mapDispatchToProps = dispatch => ({
  onLogin: payload => dispatch(onLogin(payload)),
  fetchUsers: payload => dispatch(fetchUsersStart(payload)),
  fetchTasks: payload => dispatch(onGetTasks(payload)),

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

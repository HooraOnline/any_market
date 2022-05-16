import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { connect } from "react-redux";
import {fetchUsersStart} from '../store/modules/users/actions';

const Users =(props)=> {

 const login = () => {
   props.onLogin({ cnanc: "annc" });
  };

  return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity style={{backgroundColor:'green',borderRadius:10}} onPress={login}>
          <Text style={{color:'#fff',padding:16,paddingHorizontal:50,fontSize:30,}}>Login</Text>
        </TouchableOpacity>
        <Text style={{color:'green',padding:16,paddingHorizontal:50,fontSize:30,}}>{props.user && props.user.title}</Text>
      </View>
  );
}

const mapStateToProps = state => {
  let ss=state
    debugger
  return {
    user:state.authReducer.user,
  }
};

const mapDispatchToProps = dispatch => ({
  onLogin: payload => dispatch(fetchUsersStart(payload))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);

import React, { Component } from 'react';
import {Text} from 'native-base';
import AppTemplate from "../appTemplate";
import componentExample from "../../../components/componentExample";
import Colors from "../../../constants/colors";

export default class HomeScreen extends Component {
    render() {
      const nav = this.props.navigation
        return (
            <AppTemplate navigation={nav} name="navigator.home">
              <Text style={{color: Colors.mainColor}}>Home</Text>
          </AppTemplate>
        );
    }
}

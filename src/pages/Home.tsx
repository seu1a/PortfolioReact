import { Component } from "react";

import * as S from "../styles/Global";
import Profile from "../components/profile/Profile";

class Home extends Component {
  render() {
    return (
      <S.VerticalAlignedContainer>
        <Profile />
      </S.VerticalAlignedContainer>
    );
  }
}

export default Home;

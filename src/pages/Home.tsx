import { Component } from "react";

import * as S from "../styles/global/global";
import Profile from "../components/profile/Profile";
import Project from "../components/project/Project";

class Home extends Component {
  render() {
    return (
      <div id ="Home">
        <S.VerticalAlignedContainer>
         <Profile />
         <S.ArrowDownBottom />
        </S.VerticalAlignedContainer>

        <S.VerticalAlignedContainer>
          <Project />
        </S.VerticalAlignedContainer>
      </div>
    );
  }
}

export default Home;

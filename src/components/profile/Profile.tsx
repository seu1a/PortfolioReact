import React from "react";
import { Component } from "react";

import * as S from "../../styles/profile/profile";

class Profile extends Component {
  render() {
    return (
      <S.ProfileBox>
        <S.ProfileImageDiv />
        <S.ProfileDivideDiv />
        <S.ProfileNameSpan>이슬아</S.ProfileNameSpan>
        <S.ProfileJobSpan>Web Full-Stack Dev</S.ProfileJobSpan>
      </S.ProfileBox>
    );
  }
}

export default Profile;

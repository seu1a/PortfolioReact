import React from "react";
import { Component } from "react";

import * as S from "../../styles/profile/profile";

class Profile extends Component {
  render() {
    return (
      <S.ProfileBox>
        <S.ProfileImageDiv>
          <S.ProfileImage src="images/profile_img.jpg" />
        </S.ProfileImageDiv>

        <S.ProfileDivideDiv />

        <S.ProfileDetailWrapper>
          <S.ProfileNameSpan>이슬아</S.ProfileNameSpan>
          <S.ProfileJobSpan>Web Full-Stack Dev</S.ProfileJobSpan>

          <S.ProfileSocialWrap>
            <S.ProfileSocialDiv />
            <S.ProfileSocialDiv />
            <S.ProfileSocialDiv />
          </S.ProfileSocialWrap>
        </S.ProfileDetailWrapper>
      </S.ProfileBox>
    );
  }
}

export default Profile;

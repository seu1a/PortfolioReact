import React, { createRef, Component, RefObject } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { increase, decrease } from "../../reducers/addVisibleCount";

import * as S from "../../styles/profile/profile";

interface ProfileState {
  visibleCount: number;
}

class Profile extends Component<{}, ProfileState> {
  private ProfileBoxRef: RefObject<HTMLDivElement>;

  constructor(props: {}) {
    super(props);
    this.ProfileBoxRef = createRef();

    this.state = {
      visibleCount: 0,
    };
  }

  selector = useSelector((state: ProfileState) => state.visibleCount);
  dispatch = useDispatch();

  increamentHandler = () => {
    this.dispatch(increase());
  };

  decreamentHandler = () => {
    this.dispatch(decrease());
  };

  offerScroll = () => {
    const { top: ProfileBoxTop } =
      this.ProfileBoxRef.current!.getBoundingClientRect();

    const ProfileImageDivIsInViewport =
      ProfileBoxTop >= 0 && ProfileBoxTop <= window.innerHeight;

    if (ProfileImageDivIsInViewport) {
      this.increamentHandler();
    }

    console.log(this.state.visibleCount);
  };

  componentDidMount(): void {
    this.offerScroll();
    window.addEventListener("scroll", this.offerScroll);
  }

  componentWillUnmount(): void {
    window.removeEventListener("scroll", this.offerScroll);
  }

  render() {
    return (
      <S.ProfileBox
        ref={this.ProfileBoxRef}
        style={{
          opacity: this.state.visibleCount >= 1 ? 1 : 0,
          transform: `translateY(${
            this.state.visibleCount >= 1 ? "0" : "50px"
          })`,
          transition: "opacity 0.5s, transform 1.2s",
        }}
      >
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

import { createRef, Component, RefObject } from "react";
import { connect, useDispatch } from "react-redux";
import { RootState } from "../../reducers";
import { set_profile_visible_count } from "../../reducers/VisibleCount";

import * as S from "../../styles/profile/profile";

interface ProfileState {
  visibleCount: number;
  set_visible_count: (count: number) => void;
}

class Profile extends Component<ProfileState> {
  private ProfileBoxRef: RefObject<HTMLDivElement>;

  constructor(props: ProfileState) {
    super(props);
    this.ProfileBoxRef = createRef();
  }

  settingHandler = (count: number) => {
    this.props.set_visible_count(count);
  };

  offerScroll = () => {
    const { top: ProfileBoxTop } =
      this.ProfileBoxRef.current!.getBoundingClientRect();

    const ProfileImageDivIsInViewport =
      ProfileBoxTop >= 0 && ProfileBoxTop <= window.innerHeight;

    let visibleCount = 0;

    if (ProfileImageDivIsInViewport) {
      visibleCount = 1;
    }

    this.settingHandler(visibleCount);
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
          opacity: this.props.visibleCount == 1 ? 1 : 0,
          transform: `translateY(${
            this.props.visibleCount >= 1 ? "0" : "50px"
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

const mapStateToProps = (state: RootState) => ({
  visibleCount: state.setVisibleCount.profileVisibleCount,
});

const mapDispatchToProps = (dispatch: ReturnType<typeof useDispatch>) => ({
  set_visible_count: (count: number) =>
    dispatch(set_profile_visible_count(count)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

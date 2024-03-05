import { Component, createRef, Ref, RefObject } from "react";
import { useDispatch } from "react-redux";
import { connect, UseDispatch } from "react-redux";
import { RootState } from "../../reducers";
import { set_project_visible_count } from "../../reducers/VisibleCount";

import * as S from "../../styles/project/project";

interface ProjectState {
  visibleCount: number;
  set_visible_count: (count: number) => void;
}

class Project extends Component<ProjectState> {
  private ProjectBoxRef: RefObject<HTMLDivElement>;

  constructor(props: ProjectState) {
    super(props);
    this.ProjectBoxRef = createRef();
  }

  offerscroll = () => {
    const { top: ProjectBoxTop } =
      this.ProjectBoxRef.current!.getBoundingClientRect();

    const ProjectBoxIsInViewport =
      ProjectBoxTop >= 0 && ProjectBoxTop <= window.innerHeight;

    let visibleCount = 0;

    if (ProjectBoxIsInViewport) {
      visibleCount = 1;
    }

    this.props.set_visible_count(visibleCount);
  };

  componentDidMount(): void {
    this.offerscroll();
    window.addEventListener("scroll", this.offerscroll);
  }

  componentWillUnmount(): void {
    window.removeEventListener("scroll", this.offerscroll);
  }

  render() {
    return (
      <S.ProjectBox ref={this.ProjectBoxRef}>
        <S.ProjectElement
          style={{
            opacity: this.props.visibleCount >= 1 ? 1 : 0,
            transform: `translateX(${
              this.props.visibleCount >= 1 ? "0" : "-50px"
            })`,
            transition: "opacity 0.5s, transform 1.2s",
          }}
        >
          <S.ProjectName>테스트</S.ProjectName>
        </S.ProjectElement>

        <S.ProjectElement
          style={{
            opacity: this.props.visibleCount >= 1 ? 1 : 0,
            transform: `translateX(${
              this.props.visibleCount >= 1 ? "0" : "-50px"
            })`,
            transition: "opacity 0.5s, transform 1.2s",
          }}
        >
          <S.ProjectName>대소고 야호</S.ProjectName>
        </S.ProjectElement>

        <S.ProjectElement
          style={{
            opacity: this.props.visibleCount >= 1 ? 1 : 0,
            transform: `translateX(${
              this.props.visibleCount >= 1 ? "0" : "-50px"
            })`,
            transition: "opacity 0.5s, transform 1.2s",
          }}
        >
          <S.ProjectName>asfasdfasdf</S.ProjectName>
        </S.ProjectElement>
      </S.ProjectBox>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  visibleCount: state.setVisibleCount.projectVisibleCount,
});

const mapDispatchToProps = (dispatch: ReturnType<typeof useDispatch>) => ({
  set_visible_count: (count: number) =>
    dispatch(set_project_visible_count(count)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Project);

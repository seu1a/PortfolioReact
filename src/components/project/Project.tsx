import { Component } from "react";

import * as S from "../../styles/project/project";

class Project extends Component {
  render() {
    return (
      <S.ProjectBox>
        <S.ProjectElement>
          <S.ProjectName>테스트</S.ProjectName>
        </S.ProjectElement>

        <S.ProjectElement>
          <S.ProjectName>대소고 야호</S.ProjectName>
        </S.ProjectElement>

        <S.ProjectElement>
          <S.ProjectName>asfasdfasdf</S.ProjectName>
        </S.ProjectElement>
      </S.ProjectBox>
    );
  }
}

export default Project;

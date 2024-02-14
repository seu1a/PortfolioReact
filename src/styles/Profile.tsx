import { styled } from "styled-components";

export const ProfileBox = styled.div`
  /* 가운데 정렬 */
  position: relative;
  margin: 0 auto;

  /* 내부 속성 수직 정렬 */
  display: flex;
  align-items: center;

  width: 650px;
  height: 350px;
  background-color: aqua;
`;

export const ProfileImageDiv = styled.div`
  position: relative;
  left: 25px;

  width: 225px;
  height: 225px;
  background-color: none;

  border: 5.5px solid #363636;
  border-radius: 50%;
`;

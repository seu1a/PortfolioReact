import { styled } from "styled-components";

export const ProfileBox = styled.div`
  position: relative;
  margin: 0 auto;

  display: flex;
  align-items: center;

  width: 650px;
  height: 350px;
`;

export const ProfileImageDiv = styled.div`
  position: relative;
  left: 25px;

  width: 200px;
  height: 200px;
  background-color: none;

  border: 7.5px solid #363636;
  border-radius: 50%;
`;

export const ProfileDivideDiv = styled.div`
  position: relative;
  left: 60px;

  width: 7.5px;
  height: 125px;

  background-color: #363636;

  border-radius: 5px;
`;

export const ProfileNameSpan = styled.span`
  position: relative;
`;

import { styled } from "styled-components";

export const ProfileBox = styled.div`
  position: relative;
  margin: 0 auto;

  display: flex;
  align-items: center;

  width: 650px;
  height: 350px;

  background-color: aqua;
`;

export const ProfileImageDiv = styled.div`
  position: relative;
  left: 25px;

  width: 165px;
  height: 165px;
  background-color: none;

  border: 7.5px solid #363636;
  border-radius: 50%;
`;

export const ProfileDivideDiv = styled.div`
  position: relative;
  left: 60px;

  width: 7px;
  height: 125px;

  background-color: #363636;

  border-radius: 5px;
`;

export const ProfileDetailWrapper = styled.div`
  position: relative;

  display: flex;

  flex-direction: row;
`;

export const ProfileNameSpan = styled.span`
  position: relative;
  left: 85px;
  bottom: 60px;

  font-family: "DoHyeon";
  font-size: 50px;

  color: #363636;
`;

export const ProfileJobSpan = styled.span`
  position: relative;
  right: 58px;

  font-family: "DoHyeon";
  font-size: 30px;

  color: #363636;
`;

export const ProfileSocialWrap = styled.div`
  position: relative;

  display: flex;

  width: 200px;
  height: 50px;

  background-color: white;
`;

export const ProfileSocialDiv = styled.div`
  position: relative;

  width: 50px;
  height: 50px;

  background-color: #363636;
  border-radius: 5px;
`;

import { styled } from "styled-components";

export const ProjectBox = styled.div`
  position: relative;
  display: flex;

  justify-content: center;
  align-items: center;

  width: 100%;
  height: 200px;

  background-color: #363636;

  overflow: scroll;
`;

export const ProjectElement = styled.div`
  position: relative;

  width: 275px;
  height: 165px;

  display: flex;
  justify-content: center;

  margin: 10px;

  background-color: white;

  background-image: url("./images/project_img_sample.png");
  background-size: cover;

  border-radius: 15px;

  overflow: hidden;
`;

export const ProjectName = styled.span`
  position: absolute;
  bottom: 15px;

  height: 30px;

  padding-left: 15px;
  padding-right: 15px;

  text-align: center;

  border-radius: 15px;

  line-height: 29px;
  font-family: "Jua";
  font-size: 17px;

  color: white;
  background-color: #363636;

  box-shadow: 0px 0px 2.5px 2.5px rgba(0, 0, 0, 0.15);
`;

export const ProjectImageDiv = styled.div`
  position: relative;

  width: 100%;
  height: 200px;

  overflow: hidden;
`;

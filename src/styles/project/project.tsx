import { styled } from "styled-components";

export const ProjectBox = styled.div`
  position: relative;
  display: flex;

  justify-content: center;
  align-items: center;

  width: 100%;
  height: 252.5px;

  background-color: #363636;
`;

export const ProjectElement = styled.div`
  position: relative;

  width: 350px;
  height: 200px;

  display: flex;
  justify-content: center;

  margin: 15px;

  background-color: white;

  border-radius: 15px;
`;

export const ProjectName = styled.span`
  position: absolute;
  bottom: 15px;

  height: 30px;

  padding-left: 15px;
  padding-right: 15px;

  text-align: center;

  border-radius: 15px;

  line-height: 30px;
  font-family: "Jua";
  font-size: 17px;

  color: white;
  background-color: #363636;
`;

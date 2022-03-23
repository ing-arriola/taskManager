import React from "react";
import styled from "styled-components";
import { RiFunctionLine } from "react-icons/ri";
import { RiMenuFill } from "react-icons/ri";
import { COLORS } from "./constants/colors";

const StyledInput = styled.input`
  background-color: #2c2f33;
  color: white;
  height: 30px;
  border-radius: 16px;
`;

const Card = styled.div`
  height: 300px;
  width: 300px;
  background-color: ${COLORS.neutral4};
  border-radius: 8px;
`;

const WhiteText = styled.div`
  color: white;
`;

const PointsDate = styled.div`
  display: flex;
  justify-content: space-between;
`;

type label = {
  background: string;
};

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Label = styled.div`
  background-color: ${(p: label) => p.background};
  color: ${(props) => props.color};
  border-radius: 5px;
  padding: 4px 16px;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
`;

function App() {
  return (
    <div className="App">
      <div></div>
      <div>
        <StyledInput type="text" placeholder="Search" />
        <div>
          <RiMenuFill size={30} color="#DA584B" />
          <RiFunctionLine size={30} color="#DA584B" />
        </div>
        <div>
          <div>Working (03)</div>
          <Card>
            <WhiteText>Slack</WhiteText>
            <PointsDate>
              <WhiteText>4 Points</WhiteText>
              <WhiteText>Today</WhiteText>
            </PointsDate>
            <LabelContainer>
              <Label background="rgba(112, 178, 82, 0.1)" color="#ffffff">
                IOS APP
              </Label>
              <Label background="rgba(229, 180, 84, 0.1)">ANDROID</Label>
            </LabelContainer>
            <Details>
              <div>FOTO</div>
            </Details>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;

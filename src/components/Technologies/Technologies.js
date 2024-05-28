import React from "react";
import { DiApple, DiReact, DiZend } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
import { GiSpiderWeb } from "react-icons/gi";
import {
  SiWeb3Dotjs,
  SiSolana,
  SiSolidity,
  SiEthereum,
  SiRust,
  SiBitcoin,
  SiBinance,
  SiDeepl,
  SiNumpy,
  SiDjango,
  SiCsharp,
  SiTensorflow,
  SiJupyter,
  SiAnaconda,
} from "react-icons/si";
import { AiOutlineRobot } from "react-icons/ai";
import { FaPython } from "react-icons/fa";
import { FcNeutralTrading } from "react-icons/fc";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  TechIco,
  ListTitle,
  FlexDiv,
} from "./TechnologiesStyles";
const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      Have used a variety of technologies from the world of blockchain and AI
      software development, including various bot development, smart contracts,
      and deep learning.
    </SectionText>

    <FlexDiv>
      <TechIco>
        <FaPython size="5rem" />
      </TechIco>
      <TechIco>
        <IoLogoJavascript size="5rem" />
      </TechIco>
      <TechIco>
        <SiCsharp size="5rem" />
      </TechIco>
      <TechIco>
        <AiOutlineRobot size="5rem" />
      </TechIco>
      <TechIco>
        <SiWeb3Dotjs size="5rem" />
      </TechIco>
      <TechIco>
        <SiSolana size="5rem" />
      </TechIco>
      <TechIco>
        <SiEthereum size="5rem" />
      </TechIco>
      <TechIco>
        <SiBitcoin size="5rem" />
      </TechIco>
      <TechIco>
        <SiBinance size="5rem" />
      </TechIco>
      <TechIco>
        <SiTensorflow size="5rem" />
      </TechIco>
      <TechIco>
        <SiNumpy size="5rem" />
      </TechIco>
      <TechIco>
        <SiDjango size="5rem" />
      </TechIco>
      <TechIco>
        <SiSolidity size="5rem" />
      </TechIco>
      <TechIco>
        <SiRust size="5rem" />
      </TechIco>
      <TechIco>
        <FaNodeJs size="5rem" />
      </TechIco>
      <TechIco>
        <DiReact size="5rem" />
      </TechIco>
      <TechIco>
        <SiJupyter size="5rem" />
      </TechIco>
      <TechIco>
        <SiAnaconda size="5rem" />
      </TechIco>
      <TechIco>
        <GiSpiderWeb size="5rem" />
      </TechIco>
    </FlexDiv>
    <br />
    <br />
    {/* <SectionDivider colorAlt /> */}
  </Section>
);

export default Technologies;

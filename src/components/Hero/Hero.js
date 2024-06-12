import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import { GithubUrl, ResumeUrl } from "../../constants/constants";

const handleClickResume = () => {
  window.open(ResumeUrl, "_blank");
};

const handleClickGithub = () => {
  window.open(GithubUrl, "_blank");
};

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Chiriac Ivan
        </SectionTitle>
        <SectionText>
          Full Stack Blockchain Engineer with expert AI and Web3 Technologies.
          Proficient in Bot Developing for Cryptocurrency Trading.
        </SectionText>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            margin: "0 0 80px",
          }}
        >
          <Button alt="fiverr" onClick={handleClickGithub}>
            GitHub
          </Button>
          <Button alt="resume" onClick={handleClickResume}>
            Resume
          </Button>
        </div>
      </LeftSection>
    </Section>
  </>
);

export default Hero;

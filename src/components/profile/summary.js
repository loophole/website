import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

import { Container } from "../global";

const Summary = () => {
  const { user } = useAuth0();

  console.log(user);

  return (
    <ProfileContainer>
      <PersonalInformation>
        <PersonalInformationTitle>Profile Information</PersonalInformationTitle>
        <PersonalInformationSection>
          <PersonalInformationSectionTitle>ID</PersonalInformationSectionTitle>
          <PersonalInformationSectionValue>
            {user.sub}
          </PersonalInformationSectionValue>
        </PersonalInformationSection>
        <PersonalInformationSection>
          <PersonalInformationSectionTitle>
            Username
          </PersonalInformationSectionTitle>
          <PersonalInformationSectionValue>
            {user.nickname}
          </PersonalInformationSectionValue>
        </PersonalInformationSection>
        <PersonalInformationSection>
          <PersonalInformationSectionTitle>
            Email
          </PersonalInformationSectionTitle>
          <PersonalInformationSectionValue>
            {user.email}
          </PersonalInformationSectionValue>
        </PersonalInformationSection>
      </PersonalInformation>
      <UsageDetails>
        Some application internal information will appear here, keep calm until
        our next release.
      </UsageDetails>
    </ProfileContainer>
  );
};

export default Summary;

const ProfileContainer = styled(Container)`
  display: flex;

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    flex-direction: column;
  }
`;

const PersonalInformation = styled.div`
  border: 1px solid ${(props) => props.theme.color.secondary};
  flex: 0 1 240px;
`;

const PersonalInformationTitle = styled.div`
  font-size: 1.2rem;
  padding: 5px 0 10px 0;
  margin: 0 5px;
  border-bottom: 1px solid ${(props) => props.theme.color.primary};
`;

const PersonalInformationSection = styled.div`
  padding: 3px 0;
  margin: 0 8px;
  border-bottom: 1px solid ${(props) => props.theme.color.secondary};
  &:last-child {
    border-bottom: 0;
  }
`;
const PersonalInformationSectionTitle = styled.div`
  text-transform: uppercase;
  font-size: 0.7rem;
`;
const PersonalInformationSectionValue = styled.div`
  font-size: 1rem;
  padding-bottom: 6px;
  padding-left: 5px;
`;

const UsageDetails = styled.div`
  margin-left: 30px;
  flex: 1 2 560px;
  padding: 3px;

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    flex: 0;
    margin-top: 20px;
    margin-left: 0;
  }
`;

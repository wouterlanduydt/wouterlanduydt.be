import React from 'react'
import styled from 'styled-components'
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'

const Wrapper = styled.div`
  background-color: ${props => props.theme.palette.dark};
  color: ${props => props.theme.palette.light};
`

const InnerWrapper = styled.header`
  margin: 0 auto;
  width: ${props => props.theme.grid.container};
  max-width: ${props => props.theme.grid.maxWidth};
`

const SubtitleWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`

const Subtitle = styled.span`
  font-size: 1.6em;
  margin-right: 8px;
`

const PublishedDate = styled.span`
  font-size: 1.4em;
`

const StatsList = styled.ol`
  display: flex;
  padding: 32px 0;
`

const Stat = styled.li`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-right: 16px;
  }
`

const StatTitle = styled.span`
  font-size: 1.6em;
  margin-bottom: 8px;
`

const TagsList = styled.ul`
  display: flex;
`

const ProjectHeader = ({ title, date, teamMembers, client, tags }) => {
  const getTagsItems = tags =>
    tags.map((tag, index) => (
      <li style={{ whiteSpace: 'pre-wrap' }}>
        {tag}
        {index < tags.length - 1 && ', '}
      </li>
    ))

  return (
    <Wrapper>
      <InnerWrapper>
        <h1>{title}</h1>
        <SubtitleWrapper>
          <Subtitle>Subtitle</Subtitle>
          <PublishedDate>{distanceInWordsToNow(date)} ago</PublishedDate>
        </SubtitleWrapper>
        <StatsList>
          {teamMembers && (
            <Stat>
              <StatTitle>Team</StatTitle>
              <ul>
                {teamMembers.map(member => <li key={member}>{member}</li>)}
              </ul>
            </Stat>
          )}
          <Stat>
            <StatTitle>Tags</StatTitle>
            <TagsList>{getTagsItems(tags)}</TagsList>
          </Stat>
          <Stat>
            <StatTitle>Client</StatTitle>
            <span>{client}</span>
          </Stat>
        </StatsList>
      </InnerWrapper>
    </Wrapper>
  )
}

export default ProjectHeader

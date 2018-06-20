import React from 'react'
import styled, { css } from 'styled-components'
import format from 'date-fns/format'
import Link from 'gatsby-link'

const Wrapper = styled.div`
  background-color: ${props => props.theme.palette.dark};
  color: ${props => props.theme.palette.light};
`

const InnerWrapper = styled.header`
  margin: 0 auto;
  width: ${props => props.theme.grid.container};
  max-width: ${props => props.theme.grid.maxWidth};
`

const BackButton = styled(Link)`
  display: inline-block;
  color: ${props => props.theme.palette.light};

  font-size: 1.4em;
  margin-top: 16px;
`

const Title = styled.h1`
  padding: 40px 0 4px;
`

const SubtitleWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`

const Subtitle = styled.span`
  font-size: 2.8em;
  line-height: 0.96em;
  font-weight: ${props => props.theme.fontWeights.regular};
  margin-right: 8px;
`

const PublishedDate = styled.span`
  font-size: 1.8em;
  text-transform: uppercase;
`

const StatsList = styled.ol`
  display: flex;
  padding: 56px 0 64px;
`

const Stat = styled.li`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-right: 32px;
  }
`

const StatTitle = styled.span`
  font-size: 2.2em;
  font-family: ${props => props.theme.fontFamilies.merriweather};
  font-weight: ${props => props.theme.fontWeights.regular};
  margin-bottom: 8px;
`

const statContentStyling = css`
  font-size: 1.6em;
`

const StatContent = styled.span`
  ${statContentStyling};
`

const StatContentLi = styled.li`
  ${statContentStyling};

  &.tag {
    text-transform: capitalize;
  }

  &:not(:last-child) {
    margin-bottom: 4px;
  }
`

const TagsList = styled.ul`
  display: flex;
`

const ProjectHeader = ({ title, date, teamMembers, client, tags }) => {
  const getTagsItems = tags =>
    tags.map((tag, index) => (
      <StatContentLi
        className="tag"
        key={tag}
        style={{ whiteSpace: 'pre-wrap' }}
      >
        {tag}
        {index < tags.length - 1 && ', '}
      </StatContentLi>
    ))

  return (
    <Wrapper>
      <InnerWrapper>
        <BackButton to="/">Back</BackButton>
        <Title>{title}</Title>
        <SubtitleWrapper>
          <Subtitle>Subtitle</Subtitle>
          <PublishedDate>- {format(date, 'MMM YYYY')}</PublishedDate>
        </SubtitleWrapper>
        <StatsList>
          {teamMembers.length > 1 &&
            teamMembers && (
              <Stat>
                <StatTitle>Team</StatTitle>
                <ul>
                  {teamMembers.map(member => (
                    <StatContentLi key={member}>{member}</StatContentLi>
                  ))}
                </ul>
              </Stat>
            )}
          <Stat>
            <StatTitle>Category</StatTitle>
            <TagsList>{getTagsItems(tags)}</TagsList>
          </Stat>
          <Stat>
            <StatTitle>Client</StatTitle>
            <StatContent>{client}</StatContent>
          </Stat>
        </StatsList>
      </InnerWrapper>
    </Wrapper>
  )
}

export default ProjectHeader

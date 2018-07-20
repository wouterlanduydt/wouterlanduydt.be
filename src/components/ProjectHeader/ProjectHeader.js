import React from 'react'
import styled, { css } from 'styled-components'
import format from 'date-fns/format'
import Link from 'gatsby-link'
import Arrow from '../../assets/svg/arrow.svg'

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
  margin-top: 16px;
  height: 16px;
`

const Title = styled.h1`
  padding: 40px 0 4px;
  font-size: 3.8em;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: 5.2em;
  }
`

const SubtitleWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`

const Subtitle = styled.span`
  font-size: 1.8em;
  line-height: 0.96em;
  font-weight: ${props => props.theme.fontWeights.regular};
  margin: 6px 8px 0 0;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: 2em;
  }
`

const PublishedDate = styled.span`
  font-size: 1.4em;
  text-transform: uppercase;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: 1.6em;
  }
`

const StatsList = styled.ol`
  display: flex;
  flex-wrap: wrap;
  padding: 56px 0 16px;
`

const Stat = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

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

const ProjectHeader = ({
  title,
  subtitle,
  date,
  teamMembers,
  client,
  tags,
}) => {
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
        {/* <BackButton to="/">
          <img src={Arrow} alt="" />
        </BackButton> */}
        <Title>{title}</Title>
        <SubtitleWrapper>
          <Subtitle>{subtitle}</Subtitle>
          <PublishedDate>- {format(date, 'MMM YYYY')}</PublishedDate>
        </SubtitleWrapper>
        <StatsList>
          {teamMembers &&
            teamMembers.length > 1 && (
              <Stat>
                <StatTitle>Team</StatTitle>
                <ul>
                  {teamMembers
                    .sort()
                    .map(member => (
                      <StatContentLi key={member}>{member}</StatContentLi>
                    ))}
                </ul>
              </Stat>
            )}
          <Stat>
            <StatTitle>Category</StatTitle>
            <TagsList>{getTagsItems(tags)}</TagsList>
          </Stat>
          {client && (
            <Stat>
              <StatTitle>Client</StatTitle>
              <StatContent>{client}</StatContent>
            </Stat>
          )}
        </StatsList>
      </InnerWrapper>
    </Wrapper>
  )
}

export default ProjectHeader

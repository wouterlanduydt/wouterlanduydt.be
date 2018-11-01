import React from 'react'
import format from 'date-fns/format'
import Arrow from 'assets/svg/arrow.svg'
import {
  Wrapper,
  InnerWrapper,
  BackButton,
  Title,
  SubtitleWrapper,
  Subtitle,
  PublishedDate,
  StatsList,
  Stat,
  StatTitle,
  statContentStyling,
  StatContent,
  StatContentLi,
  TagsList,
} from './ProjectHeader.styled'

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

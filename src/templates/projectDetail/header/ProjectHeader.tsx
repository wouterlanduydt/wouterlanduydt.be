import React from 'react'
import { format } from 'date-fns'
import {
  Wrapper,
  InnerWrapper,
  Title,
  SubtitleWrapper,
  Subtitle,
  PublishedDate,
  StatsList,
  Stat,
  StatTitle,
  StatContent,
  StatContentLi,
  TagsList,
} from './ProjectHeader.styled'

type TProps = {
  title: string
  subtitle: string
  date: Date
  teamMembers: string[]
  client: string
  tags: string[]
}

const ProjectHeader = (props: TProps) => {
  const { title, subtitle, date, teamMembers, client, tags } = props

  const getTagsItems = (tags: string[]) =>
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
        <Title>{title}</Title>
        <SubtitleWrapper>
          <Subtitle>{subtitle}</Subtitle>
          <PublishedDate>- {format(date, 'MMM YYYY')}</PublishedDate>
        </SubtitleWrapper>
        <StatsList>
          {teamMembers && teamMembers.length > 1 && (
            <Stat>
              <StatTitle>Team</StatTitle>
              <ul>
                {teamMembers.sort().map(member => (
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

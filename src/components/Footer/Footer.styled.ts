import styled from 'styled-components'

export const Wrapper = styled.footer`
  margin: 80px 0 72px;
  width: 100%;
`

export const SocialsList = styled.ol`
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover .social-item-li {
    transition: opacity 200ms;
    opacity: 0.2;
  }

  .social-item-li:hover {
    transition: opacity 200ms;
    opacity: 1;
  }
`

export const SocialItem = styled.li`
  user-select: none;

  &:not(:last-child) {
    margin-right: 16px;
  }
`

export const SocialIcon = styled.img`
  transform: scale(0.8);
`

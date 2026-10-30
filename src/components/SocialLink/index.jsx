import { SocialMediaLink } from './style'

export default function SocialLinks({ href, icon, label }) {
  const external = href.startsWith('http')

  return (
    <SocialMediaLink
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {icon} {label} <span aria-hidden="true">→</span>
    </SocialMediaLink>
  )
}

'use client'

import type { ReactNode } from 'react'
import { SocialMediaLink } from './style'

interface SocialLinksProps {
  href: string
  icon: ReactNode
  label: string
}

export default function SocialLinks({ href, icon, label }: SocialLinksProps) {
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

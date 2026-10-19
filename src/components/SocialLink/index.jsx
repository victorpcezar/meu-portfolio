import { SocialMediaLink } from './style';

export default function SocialLinks({ href, icon, label }) {
  return (
    <SocialMediaLink 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
    >
      {icon} {label} <span>→</span>
    </SocialMediaLink>
  );
}
import {
  Binary,
  Brain,
  Briefcase,
  ChefHat,
  Cloud,
  Code2,
  Compass,
  Database,
  Github,
  Layers,
  Linkedin,
  MonitorSmartphone,
  Server,
  Sparkles,
  Target,
  Trophy,
  Wrench,
} from 'lucide-react'

/** Lets content.js reference icons by name instead of importing components. */
const icons = {
  Binary,
  Brain,
  Briefcase,
  ChefHat,
  Cloud,
  Code2,
  Compass,
  Database,
  Github,
  Layers,
  Linkedin,
  MonitorSmartphone,
  Server,
  Sparkles,
  Target,
  Trophy,
  Wrench,
}

export default function Icon({ name, ...props }) {
  const Component = icons[name] ?? Code2
  return <Component {...props} />
}

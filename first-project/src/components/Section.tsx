import { ReactElement, ReactNode } from "react"

type SectionProps = {
    title: string,
    children: ReactNode
}

const Section = ({title = "default", children} : SectionProps) : ReactElement => {
  return (
    <div>

        <h2>{title}</h2>
        {children}
    </div>
  )
}

export default Section
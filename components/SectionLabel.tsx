type SectionLabelProps = {
  children: React.ReactNode
  align?: 'left' | 'center'
}

export default function SectionLabel({ children, align = 'left' }: SectionLabelProps) {
  return (
    <div
      className={`section-label${align === 'center' ? ' section-label--center' : ''}`}
      aria-hidden="true"
    >
      <span className="section-label__line" />
      <span className="section-label__text">{children}</span>
      {align === 'center' && <span className="section-label__line" />}
    </div>
  )
}

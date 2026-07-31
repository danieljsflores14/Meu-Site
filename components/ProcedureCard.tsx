import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import type { Surgery } from '@/data/surgeries'

type ProcedureCardProps = {
  surgery: Surgery
  index?: number
}

export default function ProcedureCard({ surgery, index }: ProcedureCardProps) {
  return (
    <Link
      href={`/cirurgias-oncologicas/${surgery.slug}/`}
      className="procedure-card"
      aria-label={`Conhecer: ${surgery.shortTitle}`}
    >
      <div className="procedure-card__topline">
        <span>{surgery.category}</span>
        {typeof index === 'number' && (
          <span className="procedure-card__number">{String(index + 1).padStart(2, '0')}</span>
        )}
      </div>
      {surgery.expertise && (
        <span className="expertise-badge expertise-badge--card">
          Área de expertise do Dr. Daniel Flores
        </span>
      )}
      <h3>{surgery.shortTitle}</h3>
      <p>{surgery.cardDescription}</p>
      <span className="procedure-card__link">
        Entender o procedimento
        <ArrowUpRight size={17} aria-hidden="true" />
      </span>
    </Link>
  )
}

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Brijesh Yadav — Data Engineer',
  description: 'Senior Data Engineer with 5 years of experience in ETL, Azure, GCP, Databricks, and scalable data pipelines.',
  keywords: ['Data Engineer', 'Azure', 'Databricks', 'Python', 'ETL', 'PySpark'],
  authors: [{ name: 'Brijesh Yadav' }],
  openGraph: {
    title: 'Brijesh Yadav — Data Engineer',
    description: 'Building scalable data infrastructure at scale.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

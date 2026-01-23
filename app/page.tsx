import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ValuePropositions from '@/components/ValuePropositions'
import ROICalculator from '@/components/ROICalculator'
import HowItWorks from '@/components/HowItWorks'
import ComparisonTable from '@/components/ComparisonTable'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
            <Hero />
            <ValuePropositions />
            <ROICalculator />
            <HowItWorks />
            <ComparisonTable />
            <Testimonials />
            <CTASection />
            <Footer />
        </main>
    )
}

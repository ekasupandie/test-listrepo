import { Children, ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'

interface LayoutProps {
    children : ReactNode;
}
export default function Layout(props: LayoutProps){
    const { children } = props;
    return(
        <>
        <Header />
        <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
                <div className="h-96 rounded-lg border-4 border-dashed border-gray-200">
                    {children}
                </div>
            </div>
            </div>
        </main>
        <Footer/>
        </>
    )
}

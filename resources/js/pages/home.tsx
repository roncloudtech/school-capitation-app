// src/components/MilitaryFundLanding.jsx

import Header from "@/components/Header";

const MilitaryFundLanding = () => {
    return (
        // <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="min-h-screen bg-gradient-to-br from-[#1A4D2B] to-[#1A4D2B]">
            {/* Navigation */}
            <Header/>
            
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-r from-[#0f2e1d] via-[#1A4D2B] to-[#235c39] py-16 text-white md:py-24">
                <div className="relative z-10 mx-auto max-w-7xl px-6">
                    <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                        <div>
                            <div className="bg-opacity-20 mb-4 inline-block rounded-full bg-[#FFD700] px-4 py-1">
                                <span className="text-[#FFD700]">Secure • Efficient • Reliable</span>
                            </div>
                            <h1 className="mb-6 text-4xl leading-tight font-bold md:text-5xl">
                                Nigerian Army School <br />
                                <span className="text-[#FFD700]">Capitation Remittance</span>
                            </h1>
                            <p className="mb-8 max-w-2xl text-xl text-gray-200">
                                Streamlined financial management for military academies. Automate fund allocation, track payments, and maintain
                                complete transparency with our secure platform.
                            </p>
                            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                                <button className="transform rounded-lg bg-[#FFD700] px-8 py-4 text-lg font-semibold text-[#1A4D2B] transition-all duration-300 hover:scale-105 hover:bg-yellow-400">
                                    Initiate Payment
                                </button>
                                <button className="hover:bg-opacity-30 rounded-lg border-2 border-[#FFD700] px-8 py-4 text-lg font-semibold text-[#FFD700] transition-all hover:bg-[#1A4D2B]">
                                    View Docs
                                </button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="rounded-2xl bg-[#1A4D2B] p-1 shadow-2xl">
                                <div className="rounded-xl bg-gray-900 p-6">
                                    <div className="mb-6 flex items-center justify-between">
                                        <h3 className="text-lg font-bold">Payment Dashboard</h3>
                                        <div className="rounded bg-[#FFD700] px-2 py-1 text-xs text-[#1A4D2B]">LIVE</div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex justify-between rounded-lg bg-gray-800 p-3">
                                            <div className="flex items-center">
                                                <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#1A4D2B]">
                                                    <span className="font-bold">1</span>
                                                </div>
                                                <div>
                                                    <div className="font-medium">Cadet Tuition</div>
                                                    <div className="text-xs text-gray-400">Batch #MIL-2023-087</div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-bold">₦184,750.00</div>
                                                <div className="text-xs text-green-400">Completed</div>
                                            </div>
                                        </div>

                                        <div className="flex justify-between rounded-lg bg-gray-800 p-3">
                                            <div className="flex items-center">
                                                <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#FFD700]">
                                                    <span className="font-bold">2</span>
                                                </div>
                                                <div>
                                                    <div className="font-medium">Facility Upgrade</div>
                                                    <div className="text-xs text-gray-400">Batch #MIL-2023-088</div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-bold">₦92,300.00</div>
                                                <div className="text-xs text-[#FFD700]">Pending Approval</div>
                                            </div>
                                        </div>

                                        <div className="flex justify-between rounded-lg bg-gray-800 p-3">
                                            <div className="flex items-center">
                                                <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-gray-700">
                                                    <span className="font-bold">3</span>
                                                </div>
                                                <div>
                                                    <div className="font-medium">Training Equipment</div>
                                                    <div className="text-xs text-gray-400">Batch #MIL-2023-089</div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-bold">₦63,450.00</div>
                                                <div className="text-xs text-gray-400">Draft</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 border-t border-gray-800 pt-4">
                                        <div className="flex justify-between">
                                            <span>Total Processed (Q3 2023)</span>
                                            <span className="font-bold">₦2.8M</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -bottom-6 -left-6 rotate-3 transform rounded-lg bg-[#FFD700] px-6 py-2 text-[#1A4D2B] shadow-lg">
                                Military-Grade Security
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-[#1A4D2B] to-transparent opacity-20"></div>
            </section>

            {/* Stats Section */}
            <section className="bg-gradient-to-r from-[#0f2e1d] via-[#1A4D2B] to-[#235c39] py-12 text-white">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
                        <div>
                            <div className="mb-2 text-4xl font-bold">120+</div>
                            <div className="text-[#FFD700]">Military Schools</div>
                        </div>
                        <div>
                            <div className="mb-2 text-4xl font-bold">₦4B+</div>
                            <div className="text-[#FFD700]">Funds Managed</div>
                        </div>
                        <div>
                            <div className="mb-2 text-4xl font-bold">99.97%</div>
                            <div className="text-[#FFD700]">Uptime</div>
                        </div>
                        <div>
                            <div className="mb-2 text-4xl font-bold">24/7</div>
                            <div className="text-[#FFD700]">Support</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="bg-white py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                            Powerful <span className="text-[#1A4D2B]">Remittance Tools</span> for Military Schools
                        </h2>
                        <p className="mx-auto max-w-2xl text-gray-600">
                            MilFund simplifies and secures the monthly target remittance process for Nigerian Army schools— streamlined institutional
                            fund management.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                        {[
                            {
                                icon: (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-12 w-12 text-[#1A4D2B]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                        />
                                    </svg>
                                ),
                                title: 'Military-Grade Security',
                                description: 'Advanced encryption and authentication to keep financial data secure and compliant.',
                            },
                            {
                                icon: (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-12 w-12 text-[#1A4D2B]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                        />
                                    </svg>
                                ),
                                title: 'Real-Time Remittance Tracking',
                                description: 'Monitor payments and targets across schools with live dashboards and audit logs.',
                            },
                            {
                                icon: (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-12 w-12 text-[#1A4D2B]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                                        />
                                    </svg>
                                ),
                                title: 'Approval-Based Workflows',
                                description: 'Route remittance requests through custom approval flows based on school command hierarchy.',
                            },
                            {
                                icon: (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-12 w-12 text-[#1A4D2B]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                ),
                                title: 'Online & Bank Payment',
                                description: 'Support for online payment system and bank transfer payments.',
                            },
                            {
                                icon: (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-12 w-12 text-[#1A4D2B]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                                        />
                                    </svg>
                                ),
                                title: 'Secure Messaging',
                                description: 'Communicate directly with finance teams and school admins inside the platform.',
                            },
                            {
                                icon: (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-12 w-12 text-[#1A4D2B]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        />
                                    </svg>
                                ),
                                title: 'Regulatory Compliance',
                                description: 'Built to meet Nigerian Army financial protocols and military audit standards.',
                            },
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 shadow-sm transition-all hover:shadow-md"
                            >
                                <div className="mb-5">{feature.icon}</div>
                                <h3 className="mb-3 text-xl font-bold text-gray-900">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="bg-gradient-to-br from-blue-50 to-gray-100 py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                            Streamlined <span className="text-[#1A4D2B]">Payment Process</span>
                        </h2>
                        <p className="mx-auto max-w-2xl text-gray-600">
                            Our four-step process ensures secure and efficient fund remittance from initiation to reconciliation.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute top-24 right-1/4 left-1/4 hidden h-2 rounded-full bg-gradient-to-r from-[#1A4D2B] to-[#FFD700] md:block"></div>

                        <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-4">
                            {[
                                {
                                    number: '1',
                                    title: 'Initiate Payment',
                                    description: 'Authorized officer creates payment  with school details',
                                    icon: '📝',
                                },
                                {
                                    number: '2',
                                    title: 'Command Approval',
                                    description: 'Payment sent through military chain of command for verification',
                                    icon: '✅',
                                },
                                {
                                    number: '3',
                                    title: 'Secure Transfer',
                                    description: 'Funds transferred via encrypted channels to institution accounts',
                                    icon: '🔒',
                                },
                                {
                                    number: '4',
                                    title: 'Reconciliation',
                                    description: 'Automated matching with school records and reporting',
                                    icon: '📊',
                                },
                            ].map((step, index) => (
                                <div key={index} className="rounded-xl bg-white p-8 text-center shadow-md">
                                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-[#b89c00] to-[#FFD700] text-3xl text-white">
                                        {step.icon}
                                    </div>
                                    <div className="mb-2 text-4xl font-bold text-[#1A4D2B]">{step.number}</div>
                                    <h3 className="mb-3 text-xl font-bold text-gray-900">{step.title}</h3>
                                    <p className="text-gray-600">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#0f2a13] py-16 text-gray-400">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-4">
                        {/* Brand Info */}
                        <div>
                            <div className="mb-4 flex items-center">
                                <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#14532d] via-[#1A4D2B] to-[#FFD700]">
                                    <span className="font-bold text-white">MF</span>
                                </div>
                                <h3 className="text-xl font-bold text-white">
                                    Mil<span className="text-[#19a852]">Fund</span>
                                </h3>
                            </div>
                            <p className="mb-4">Secure capitation remittance for military academies worldwide.</p>
                            <div className="flex space-x-4">
                                {['facebook', 'twitter', 'github'].map((platform, index) => (
                                    <a key={index} href="#" className="text-gray-400 transition hover:text-white">
                                        <i className={`fab fa-${platform} text-xl`}></i>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Platform Links */}
                        <div>
                            <h4 className="mb-4 text-lg font-semibold text-white">Security</h4>
                            {/* <ul className="space-y-2">
                                {['Features', 'Security', 'Pricing', 'API'].map((item, idx) => (
                                    <li key={idx}>
                                        <a href="#" className="transition hover:text-white">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul> */}
                            <p>
                                ISO 27001 Certified <br />
                                NA ICT Policy Complaint <br />
                                Secure Military Network
                            </p>
                        </div>

                        {/* Resources */}
                        <div>
                            <h4 className="mb-4 text-lg font-semibold text-white">Resources</h4>
                            <ul className="space-y-2">
                                {['Documentation', 'FAQs', 'Nigeria Army School Policy'].map((item, idx) => (
                                    <li key={idx}>
                                        <a href="#" className="transition hover:text-white">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="mb-4 text-lg font-semibold text-white">Contact</h4>
                            <ul className="space-y-4 text-sm">
                                <li className="flex items-start">
                                    <svg className="mt-1 mr-2 h-5 w-5 text-[#19a852]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.684l1.5 4.493a1 1 0 01-.5 1.21L8 11.5c1.472 3.305 4.195 6.028 7.5 7.5l1.113-2.23a1 1 0 011.21-.5l4.493 1.5a1 1 0 01.684.95V19a2 2 0 01-2 2h-1c-7.284 0-14-6.716-14-14V5z"
                                        />
                                    </svg>
                                    <span>+234-907-576-8788</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="mt-1 mr-2 h-5 w-5 text-[#19a852]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <span>hq.cfoapapa@army.mil.ng</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="mt-1 mr-2 h-5 w-5 text-[#19a852]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span>
                                        Command School Office, Arakan Cantonment, <br />
                                        PMB 1339, Apapa, Lagos Nigeria. <br />
                                        Defense School Center
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
                        <p>
                            &copy; {new Date().getFullYear()} <strong className="text-white">MilFund</strong>. All rights reserved. | Military-Grade
                            Financial Solutions
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default MilitaryFundLanding;

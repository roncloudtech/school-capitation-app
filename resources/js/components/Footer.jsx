export default function Footer() {
    return (
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
    );
}

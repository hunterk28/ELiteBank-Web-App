import './Pages.css';

const features = [
    { icon: "Costumer", title: "Customer Management", description: "Manage customer details, view profiles, and update information." },
    { icon: "Account", title: "Account Management", description: "Open, close, and manage different types of bank accounts." },
    { icon: "Transaction", title: "Transaction Management", description: "Deposit, withdraw, and transfer funds with real-time processing." },
    { icon: "Loan", title: "Loan Management", description: "Apply for loans, track repayments, and calculate interest automatically." },
    { icon: "Interest", title: "Interest & Fee Calculations", description: "Automate interest calculations and penalties for late payments." },
    { icon: "Reports", title: "Reports & Statements", description: "Generate and export account statements and financial reports." },
    { icon: "Security", title: "Security & Fraud Detection", description: "Role-based access control, encryption, and fraud alerts." }
];

export default function Features() {
    return (
        <section className="features-section">
            <h2 className="features-title">Our Features</h2>
            <div className="features-grid">
                {features.map((feature, index) => (
                    <div key={index} className="feature-card">
                        <div className="icon">{feature.icon}</div>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

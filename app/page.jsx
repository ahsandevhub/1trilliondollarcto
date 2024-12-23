const HomePage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Header */}
      <header className="bg-gray-800 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">1trilliondollarcto</h1>
          <nav className="space-x-6">
            <a href="#about" className="hover:text-yellow-400">
              About
            </a>
            <a href="#how-to-buy" className="hover:text-yellow-400">
              How to Buy
            </a>
            <a href="#roadmap" className="hover:text-yellow-400">
              Roadmap
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-700 py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-extrabold mb-6">
            A Trillion Dollar Coin for the People
          </h2>
          <p className="text-xl mb-8">
            The 1T CTO is a satirical, community-driven initiative to reimagine
            the concept of the "Trillion Dollar Coin" as a symbol of collective
            action and financial reimagining.
          </p>
          <a
            href="#how-to-buy"
            className="px-6 py-3 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-300"
          >
            Buy $1T Now
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">About 1T CTO</h3>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed mb-6">
              Originally proposed as a means to bypass the U.S. debt ceiling,
              the trillion-dollar coin was often derided as a "dumb idea." This
              project embraces that idea, transforming it into a global,
              community-based movement to inspire conversations about
              alternative monetary systems, decentralization, and the role of
              money in our lives.
            </p>
          </div>
        </div>
      </section>

      {/* How To Buy Section */}
      <section id="how-to-buy" className="bg-gray-800 py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">How to Buy $1T</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-3">Create a Wallet</h4>
              <p>Create a wallet with MetaMask to get started.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-3">Get Some ETH</h4>
              <p>Deposit $ETH into your MetaMask wallet via an exchange.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-3">Uniswap</h4>
              <p>
                Connect your wallet, paste the $1T token address, and swap $ETH
                for $1T.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-3">Hold & Grow</h4>
              <p>Hold your $1T and watch your money grow!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Roadmap</h3>
          <div className="space-y-12">
            <div>
              <h4 className="text-2xl font-semibold mb-3">PHASE I</h4>
              <ul className="list-disc list-inside">
                <li>Launch Preparation</li>
                <li>Security Audits</li>
                <li>SAFU & KYC</li>
                <li>Strategic Partnerships</li>
                <li>Dextools and Avedex</li>
                <li>CMC & CG</li>
              </ul>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-3">PHASE II</h4>
              <ul className="list-disc list-inside">
                <li>Alpha Testing</li>
                <li>Community Engagement</li>
                <li>Big Marketing Campaigns</li>
                <li>Twitter X Trending Topics</li>
                <li>Contract Renounce</li>
                <li>15,000 Holders</li>
              </ul>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-3">PHASE III</h4>
              <ul className="list-disc list-inside">
                <li>25,000 Holders</li>
                <li>Global Marketing</li>
                <li>Reveal New Features</li>
                <li>NFTs</li>
                <li>Blockchain Launch</li>
                <li>DAO Launch</li>
                <li>All-in-one App</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 1trilliondollarcto. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

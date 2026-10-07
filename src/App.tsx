import './App.css'

function App() {
  return (
    <div>
      <header className="navbar">
        <h1>Shopee Info</h1>
        <span>Projeto Escolar - 9º Ano</span>
      </header>

      <section className="hero">
        <h2>Tudo sobre a Shopee</h2>
        <p>Um dos maiores marketplaces do mundo na palma da sua mão!</p>
      </section>

      <main className="container">
        <h2 className="section-title">Destaques da Plataforma</h2>

        <div className="cards-grid">
          <div className="card">
            <h3>🛍️ O que é?</h3>
            <p>
              A Shopee é uma plataforma de e-commerce fundada em Cingapura em 2015, 
              que conecta compradores e vendedores de diversos produtos no Brasil e no mundo.
            </p>
          </div>

          <div className="card">
            <h3>🚚 Frete Grátis & Cupons</h3>
            <p>
              Famosa por suas grandes campanhas de desconto e cupons de frete grátis, 
              a plataforma se popularizou rapidamente entre os consumidores brasileiros.
            </p>
          </div>

          <div className="card">
            <h3>🔒 Garantia Shopee</h3>
            <p>
              A Garantia Shopee retém o pagamento ao vendedor até que o comprador 
              confirme que recebeu o produto em perfeitas condições.
            </p>
          </div>

          <div className="card">
            <h3>🎮 Shopee Prêmios</h3>
            <p>
              Possui minijogos no aplicativo onde os usuários ganham moedas Shopee 
              para trocar por descontos em compras reais.
            </p>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>Trabalho Escolar de Tecnologia • 9º Ano</p>
      </footer>
    </div>
  )
}

export default App
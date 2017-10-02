import Nav from './Nav'

const Header = () => (
  <div>
    <Nav />
    <img class="hero-image" src="/static/hero-image.jpg" />
    <style jsx>{`
      .hero-image {
        width: 100%;
      }
      `}</style>
      <style global jsx>{`
      body {
        background-color: rgb(242,242,242);
      }
      `}</style>
  </div>
)

export default Header;
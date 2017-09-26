import Link from 'next/link'

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Wedding Details</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Photos</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Registry</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>RSVP</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Contact Us</a>
        </Link>
      </li>
    </ul>
  </nav>
)

export default Nav;
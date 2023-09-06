import Link from "next/link"

export default function Home(){
  return (
    <div>
      <h1 className="home">This is My Next JS Application</h1>
      <ul>
        <li>
          <Link href='/about'>About</Link>
        </li>
      </ul>
    </div>
  )
}
import Link from 'next/link';

const About = () => {
  return (
    <div>
      <h1 className="text-7xl">About</h1>
      <Link href="/" className="text-2xl">
        Home
      </Link>
    </div>
  );
};

export default About;

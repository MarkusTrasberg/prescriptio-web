import Head from 'next/head';
import Link from 'next/link';
// other imports...

export default function Home() {
  return (
    
    <div className="flex flex-col items-center justify-center h-screen bg-purple-200">
      <h1 className="text-4xl font-bold text-purple-900 mb-10">Prescription Trainer</h1>
      <div className="bg-white p-8 rounded-lg shadow-md flex flex-col">
        <MenuButton href="/play" text="Start" />
        <MenuButton href="/" text="Shop" />
        <MenuButton href="/" text="Help" />
        <MenuButton href="/" text="Settings" />
      </div>
      <div className="absolute bottom-10 flex items-center">
        
      </div>
    </div>
  );
}
type MenuButtonProps = {
  text: string;
  href: string;
};

function MenuButton({ text, href }: MenuButtonProps) {
  return (
  
    <Link href={href} className="bg-purple-400 text-white px-6 py-2 rounded-md text-lg font-medium w-full my-2 hover:bg-purple-500 transition-colors">
      {text}
    </Link>
  
  );
}

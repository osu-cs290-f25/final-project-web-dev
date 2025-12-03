export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="h-[60dvh] bg-cover flex justify-center" style={{ backgroundImage: "url('/bg.png')" }}>
        <img src="/logo.png" className="object-cover" alt="" />
        <a href = "/login/page.tsx" className="crButton">Login to bet now!</a>
      </div>

      
       <footer className="h-[40dvh] flex justify-center" style={{ backgroundImage: "url('/bg.png')" }}>
        
        <img src="/banner1.png" alt="Banner5" className="w-75 object-contain" />
      </footer>
    </div>
  );
}

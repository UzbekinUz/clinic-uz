function Marque() {
    const TOP_BAR_TEXT = "DOCTORS ON CALL 24/7: (+998) 78-120-1144 | (+998) 90-327-3378";

    return ( 
        <><div className="bg-red-600 text-white text-sm py-2 overflow-hidden whitespace-nowrap relative">
        <div className="inline-block animate-[marquee_20s_linear_infinite] px-4 font-semibold tracking-wide">
          {Array(10).fill(TOP_BAR_TEXT).join('\u00A0\u00A0\u00A0\u00A0|\u00A0\u00A0\u00A0\u00A0')}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style></>
     );
}

export default Marque;
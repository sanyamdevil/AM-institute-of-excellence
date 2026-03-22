"use client";
import { SignIn } from "@clerk/nextjs";
 
export default function SignInPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-20"
      style={{ background: "#0B0B1A", fontFamily: "'Syne', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@400;500;600&display=swap');
        .cl-card {
          background: linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01)) !important;
          border: 1px solid rgba(124,58,237,0.3) !important;
          border-radius: 20px !important;
          box-shadow: 0 24px 64px rgba(0,0,0,0.5) !important;
          backdrop-filter: blur(16px) !important;
        }
        .cl-headerTitle  { color:#fff !important; font-family:'Syne',sans-serif !important; font-weight:800 !important; }
        .cl-headerSubtitle { color:rgba(255,255,255,0.45) !important; font-family:'DM Sans',sans-serif !important; }
        .cl-formFieldLabel { color:rgba(255,255,255,0.6) !important; font-family:'DM Sans',sans-serif !important; }
        .cl-formFieldInput {
          background:rgba(255,255,255,0.04) !important; border:1px solid rgba(255,255,255,0.1) !important;
          color:#fff !important; border-radius:12px !important; font-family:'DM Sans',sans-serif !important;
        }
        .cl-formFieldInput:focus { border-color:rgba(124,58,237,0.55) !important; box-shadow:0 0 0 3px rgba(124,58,237,0.12) !important; }
        .cl-formButtonPrimary {
          background:linear-gradient(135deg,#F59E0B,#F43F5E) !important; border:none !important;
          border-radius:12px !important; font-family:'Syne',sans-serif !important; font-weight:700 !important;
          box-shadow:0 4px 20px rgba(244,63,94,0.4) !important;
        }
        .cl-formButtonPrimary:hover { transform:translateY(-1px) !important; }
        .cl-footerActionLink { color:#F59E0B !important; }
        .cl-footerActionLink:hover { color:#F43F5E !important; }
        .cl-dividerText { color:rgba(255,255,255,0.3) !important; }
        .cl-dividerLine  { background:rgba(255,255,255,0.08) !important; }
        .cl-socialButtonsBlockButton {
          background:rgba(255,255,255,0.04) !important; border:1px solid rgba(255,255,255,0.1) !important;
          color:rgba(255,255,255,0.7) !important; border-radius:12px !important;
        }
        .cl-socialButtonsBlockButton:hover { background:rgba(255,255,255,0.08) !important; }
        .cl-socialButtonsBlockButtonText { color:rgba(255,255,255,0.7) !important; }
      `}</style>
 
      {/* Background orbs */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <div style={{ position:"absolute", top:"10%", left:"5%", width:320, height:320, borderRadius:"50%",
          background:"radial-gradient(circle,rgba(124,58,237,0.3) 0%,transparent 70%)", filter:"blur(50px)" }} />
        <div style={{ position:"absolute", bottom:"10%", right:"5%", width:280, height:280, borderRadius:"50%",
          background:"radial-gradient(circle,rgba(244,63,94,0.25) 0%,transparent 70%)", filter:"blur(50px)" }} />
      </div>
 
      <div style={{ position:"relative", zIndex:1, width:"100%", maxWidth:440 }}>
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-3 text-[12px]"
            style={{ background:"rgba(124,58,237,0.15)", border:"1px solid rgba(124,58,237,0.3)", color:"#C4B5FD", fontFamily:"'DM Sans',sans-serif" }}>
            AM Institute of Excellence
          </div>
          <h1 className="font-extrabold text-white" style={{ fontSize:"1.8rem", letterSpacing:"-0.02em" }}>
            Welcome Back
          </h1>
          <p style={{ color:"rgba(255,255,255,0.45)", fontFamily:"'DM Sans',sans-serif", fontSize:"0.9rem", marginTop:6 }}>
            Sign in to access your dashboard
          </p>
        </div>
 
        <SignIn
          appearance={{
            variables: {
              colorBackground: "transparent", colorText: "#ffffff",
              colorPrimary: "#F59E0B", colorInputBackground: "rgba(255,255,255,0.04)",
              colorInputText: "#ffffff", borderRadius: "12px", fontFamily: "'DM Sans',sans-serif",
            },
          }}
        />
      </div>
    </div>
  );
}
 
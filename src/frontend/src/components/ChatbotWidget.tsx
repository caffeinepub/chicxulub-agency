import { ChevronRight, MessageCircle, X } from "lucide-react";
import { useState } from "react";

const BUSINESS_TYPES = [
  "Cafe / Restaurant",
  "E-commerce",
  "Startup",
  "Retail",
  "Healthcare",
  "Other",
];
const SERVICES = [
  "QR Menu & POS Systems",
  "Website Design & Development",
  "SEO Optimization",
  "Google Ads",
  "Meta Ads",
  "Video Editing",
  "Branding",
  "Chatbot Automation",
  "Business Analytics",
];

export function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [businessType, setBusinessType] = useState("");

  const reset = () => {
    setStep(0);
    setBusinessType("");
  };

  const handleClose = () => {
    setOpen(false);
    reset();
  };

  const handleBusinessSelect = (type: string) => {
    setBusinessType(type);
    setStep(1);
  };

  const handleServiceSelect = (svc: string) => {
    setStep(2);
    const msg = `Hi Chicxulub, I have a ${businessType} and I'm interested in ${svc}.`;
    const encoded = encodeURIComponent(msg);
    setTimeout(() => {
      window.open(`https://wa.me/919916961245?text=${encoded}`, "_blank");
      handleClose();
    }, 1200);
  };

  return (
    <div className="fixed bottom-24 left-6 z-50" data-ocid="chatbot.panel">
      {open && (
        <div className="w-80 bg-white rounded-2xl shadow-card-hover border border-border overflow-hidden animate-fade-in">
          <div className="bg-foreground text-primary-foreground px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageCircle size={18} />
              <span className="text-sm font-semibold">Chicxulub Assistant</span>
            </div>
            <button
              type="button"
              onClick={handleClose}
              className="hover:opacity-75 transition-opacity"
              data-ocid="chatbot.close_button"
            >
              <X size={16} />
            </button>
          </div>

          <div className="p-4">
            {step === 0 && (
              <>
                <p className="text-sm font-medium text-foreground mb-3">
                  What type of business do you have?
                </p>
                <div className="space-y-2">
                  {BUSINESS_TYPES.map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => handleBusinessSelect(type)}
                      data-ocid="chatbot.button"
                      className="w-full text-left text-sm px-3 py-2 rounded-lg border border-border hover:border-foreground hover:bg-muted transition-all flex items-center justify-between"
                    >
                      {type}
                      <ChevronRight
                        size={14}
                        className="text-muted-foreground"
                      />
                    </button>
                  ))}
                </div>
              </>
            )}

            {step === 1 && (
              <>
                <p className="text-xs text-muted-foreground mb-1">
                  Business: {businessType}
                </p>
                <p className="text-sm font-medium text-foreground mb-3">
                  Which service interests you?
                </p>
                <div className="space-y-2 max-h-56 overflow-y-auto">
                  {SERVICES.map((svc) => (
                    <button
                      type="button"
                      key={svc}
                      onClick={() => handleServiceSelect(svc)}
                      data-ocid="chatbot.button"
                      className="w-full text-left text-sm px-3 py-2 rounded-lg border border-border hover:border-foreground hover:bg-muted transition-all flex items-center justify-between"
                    >
                      {svc}
                      <ChevronRight
                        size={14}
                        className="text-muted-foreground"
                      />
                    </button>
                  ))}
                </div>
              </>
            )}

            {step === 2 && (
              <div className="text-center py-4">
                <div className="w-10 h-10 bg-whatsapp rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-5 h-5"
                    aria-label="WhatsApp"
                    role="img"
                  >
                    <title>WhatsApp</title>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-foreground">
                  Connecting you to WhatsApp...
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Opening your conversation now.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => {
          setOpen(!open);
          if (open) reset();
        }}
        data-ocid="chatbot.open_modal_button"
        aria-label="Open chat assistant"
        className="w-12 h-12 bg-foreground text-primary-foreground rounded-full shadow-card-hover flex items-center justify-center hover:scale-110 transition-transform"
      >
        {open ? <X size={20} /> : <MessageCircle size={20} />}
      </button>
    </div>
  );
}

"use client";
import React, { useState } from "react";
import {
  Mail,
  Phone,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  MapPin,
} from "lucide-react";

export default function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("idle"); // idle, success, error
  const [focusedField, setFocusedField] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Envoi en cours...");
    setFormStatus("idle");

    const formData = new FormData(event.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message envoyé avec succès ! Je vous répondrai bientôt.");
        setFormStatus("success");
        event.target.reset();

        // Reset success message after 5 seconds
        setTimeout(() => {
          setResult("");
          setFormStatus("idle");
        }, 5000);
      } else {
        console.log("Error", data);
        setResult(
          data.message || "Une erreur s'est produite. Veuillez réessayer.",
        );
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Une erreur s'est produite. Veuillez réessayer.");
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style jsx global>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes shimmerTitle {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* Custom scrollbar for textarea */
        textarea::-webkit-scrollbar {
          width: 8px;
        }

        textarea::-webkit-scrollbar-track {
          background: rgba(51, 65, 85, 0.3);
          border-radius: 4px;
        }

        textarea::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.5);
          border-radius: 4px;
        }

        textarea::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.7);
        }
      `}</style>

      <section className="w-full min-h-screen flex items-center justify-center py-24 px-4 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-20 -left-40 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: "6s" }}
          />
          <div
            className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: "8s", animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDuration: "10s", animationDelay: "2s" }}
          />

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto">
          {/* Header */}
          <div
            className="flex flex-col items-center gap-6 mb-16"
            style={{ animation: "slideInUp 0.8s ease-out" }}
          >
            <div className="relative">
              <h1
                className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-[length:200%_auto]"
                style={{ animation: "shimmerTitle 3s linear infinite" }}
              >
                Contact
              </h1>
              <div
                className="absolute -inset-6 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 blur-3xl -z-10 animate-pulse"
                style={{ animationDuration: "4s" }}
              />
            </div>

            <div className="flex items-center gap-3">
              <span className="w-12 h-1 rounded-full bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
              <span className="w-24 h-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500" />
              <span className="w-12 h-1 rounded-full bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
            </div>

            <p
              className="text-slate-400 text-lg md:text-xl text-center max-w-2xl mt-4 font-light"
              style={{ animation: "slideInUp 0.8s ease-out 0.2s both" }}
            >
              Une question ? Un projet ? N'hésitez pas à me contacter
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form Section */}
            <div style={{ animation: "slideInLeft 0.8s ease-out 0.3s both" }}>
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-700" />

                <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/40 backdrop-blur-md rounded-3xl border border-slate-700/50 p-8 transition-all duration-500 hover:border-slate-600/80">
                  <form className="flex flex-col gap-6" onSubmit={onSubmit}>
                    {/* Name Input */}
                    <div className="relative">
                      <label
                        className="block text-sm font-medium text-slate-400 mb-2 transition-colors duration-300"
                        style={{
                          color:
                            focusedField === "name" ? "rgb(96, 165, 250)" : "",
                        }}
                      >
                        Nom complet
                      </label>
                      <div className="relative">
                        <input
                          className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 transition-all duration-300 focus:outline-none focus:border-blue-500/50 focus:bg-slate-800/80 focus:shadow-lg focus:shadow-blue-500/10"
                          type="text"
                          name="name"
                          placeholder="Votre nom"
                          required
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                        />
                        <div
                          className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 transition-opacity duration-300 pointer-events-none"
                          style={{ opacity: focusedField === "name" ? 1 : 0 }}
                        />
                      </div>
                    </div>

                    {/* Email Input */}
                    <div className="relative">
                      <label
                        className="block text-sm font-medium text-slate-400 mb-2 transition-colors duration-300"
                        style={{
                          color:
                            focusedField === "email" ? "rgb(96, 165, 250)" : "",
                        }}
                      >
                        Email
                      </label>
                      <div className="relative">
                        <input
                          className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 transition-all duration-300 focus:outline-none focus:border-blue-500/50 focus:bg-slate-800/80 focus:shadow-lg focus:shadow-blue-500/10"
                          type="email"
                          name="email"
                          placeholder="votre.email@exemple.com"
                          required
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                        />
                        <div
                          className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 transition-opacity duration-300 pointer-events-none"
                          style={{ opacity: focusedField === "email" ? 1 : 0 }}
                        />
                      </div>
                    </div>

                    {/* Message Textarea */}
                    <div className="relative">
                      <label
                        className="block text-sm font-medium text-slate-400 mb-2 transition-colors duration-300"
                        style={{
                          color:
                            focusedField === "message"
                              ? "rgb(96, 165, 250)"
                              : "",
                        }}
                      >
                        Message
                      </label>
                      <div className="relative">
                        <textarea
                          className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white placeholder-slate-500 transition-all duration-300 focus:outline-none focus:border-blue-500/50 focus:bg-slate-800/80 focus:shadow-lg focus:shadow-blue-500/10 resize-none"
                          name="message"
                          rows="5"
                          placeholder="Votre message..."
                          required
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField(null)}
                        ></textarea>
                        <div
                          className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 transition-opacity duration-300 pointer-events-none"
                          style={{
                            opacity: focusedField === "message" ? 1 : 0,
                          }}
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group cursor-pointer relative w-full px-6 py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-500 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600" />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

                      <span className="relative flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            Envoyer le message
                          </>
                        )}
                      </span>

                      {/* Shine effect */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    </button>

                    {/* Status Message */}
                    {result && (
                      <div
                        className={`flex items-center gap-3 p-4 rounded-xl border transition-all duration-500 ${
                          formStatus === "success"
                            ? "bg-green-500/10 border-green-500/30 text-green-400"
                            : formStatus === "error"
                              ? "bg-red-500/10 border-red-500/30 text-red-400"
                              : "bg-blue-500/10 border-blue-500/30 text-blue-400"
                        }`}
                        style={{ animation: "slideInUp 0.5s ease-out" }}
                      >
                        {formStatus === "success" && (
                          <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                        )}
                        {formStatus === "error" && (
                          <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        )}
                        {formStatus === "idle" && (
                          <Loader2 className="w-5 h-5 flex-shrink-0 animate-spin" />
                        )}
                        <span className="text-sm font-medium">{result}</span>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Info Section */}
            <div
              className="flex flex-col justify-center gap-8"
              style={{ animation: "slideInRight 0.8s ease-out 0.4s both" }}
            >
              {/* Email Card */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/40 backdrop-blur-md rounded-2xl border border-slate-700/50 p-6 transition-all duration-500 hover:border-blue-500/50 hover:scale-105">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-500/20 rounded-xl blur-xl" />
                      <div className="relative bg-blue-500/10 p-3 rounded-xl border border-blue-500/30 transition-all duration-500 group-hover:bg-blue-500/20 group-hover:scale-110 group-hover:rotate-6">
                        <Mail
                          className="w-6 h-6 text-blue-400"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-slate-400 mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:aboubatraore04@gmail.com"
                        className="text-white font-medium hover:text-blue-400 transition-colors duration-300 break-all"
                      >
                        aboubatraore04@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/40 backdrop-blur-md rounded-2xl border border-slate-700/50 p-6 transition-all duration-500 hover:border-purple-500/50 hover:scale-105">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-purple-500/20 rounded-xl blur-xl" />
                      <div className="relative bg-purple-500/10 p-3 rounded-xl border border-purple-500/30 transition-all duration-500 group-hover:bg-purple-500/20 group-hover:scale-110 group-hover:rotate-6">
                        <Phone
                          className="w-6 h-6 text-purple-400"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-slate-400 mb-1">
                        Téléphone
                      </h3>
                      <a
                        href="tel:+2120684301801"
                        className="text-white font-medium hover:text-purple-400 transition-colors duration-300"
                      >
                        +212 0684301801
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-pink-400 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/40 backdrop-blur-md rounded-2xl border border-slate-700/50 p-6 transition-all duration-500 hover:border-pink-500/50 hover:scale-105">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-pink-500/20 rounded-xl blur-xl" />
                      <div className="relative bg-pink-500/10 p-3 rounded-xl border border-pink-500/30 transition-all duration-500 group-hover:bg-pink-500/20 group-hover:scale-110 group-hover:rotate-6">
                        <MapPin
                          className="w-6 h-6 text-pink-400"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-slate-400 mb-1">
                        Localisation
                      </h3>
                      <p className="text-white font-medium">
                        Marrakech, Rue Ibn Habbous
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative floating elements */}
        <div
          className="absolute top-1/4 left-10 w-20 h-20 border-2 border-blue-500/20 rounded-full animate-spin-slow pointer-events-none"
          style={{ animationDuration: "20s" }}
        />
        <div
          className="absolute bottom-1/4 right-10 w-16 h-16 border-2 border-purple-500/20 rounded-full animate-spin-slow pointer-events-none"
          style={{ animationDuration: "15s" }}
        />
      </section>
    </>
  );
}

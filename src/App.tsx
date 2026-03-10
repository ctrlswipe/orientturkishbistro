/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#325f40] text-white p-8 text-center">
      <div>
        <h1 className="text-4xl font-serif mb-4">Orient Turkish Bistro</h1>
        <p className="text-xl mb-8">Site-ul a fost generat ca o pagină statică HTML/CSS/JS.</p>
        <p className="mb-4">Puteți vedea previzualizarea direct în fișierul <code className="bg-black/20 px-2 py-1 rounded">index.html</code>.</p>
        <div className="mt-8">
          <a 
            href="/index.html" 
            className="bg-[#e0ae7d] text-[#231d27] px-6 py-3 rounded-full font-bold hover:bg-white transition-colors"
          >
            Deschide Site-ul
          </a>
        </div>
      </div>
    </div>
  );
}
